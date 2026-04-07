import { getAppEnv, type AppRuntimeEnv } from '../config/appEnv';
import * as constants from '../constants';
import { PracticeArea, Testimonial, BlogPost, Attorney, FAQItem } from '../types';

type FetchLike = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export interface ContentServiceOptions {
  readEnv?: () => AppRuntimeEnv;
  fetchImpl?: FetchLike;
  delayImpl?: (ms: number) => Promise<void>;
  randomDelayRange?: {
    min: number;
    max: number;
  };
}

interface ContentEndpoint<T> {
  endpoint: string;
  fallback: T[];
  resourceName: string;
}

const DEFAULT_DELAY_RANGE = {
  min: 180,
  max: 420,
};

const defaultFetchImpl =
  typeof globalThis.fetch === 'function' ? globalThis.fetch.bind(globalThis) : undefined;

function cloneCollection<T>(items: readonly T[]): T[] {
  return items.map((item) => {
    if (typeof item === 'object' && item !== null) {
      return { ...(item as object) } as T;
    }

    return item;
  });
}

function simulateNetworkDelay(
  delayImpl: ((ms: number) => Promise<void>) | undefined,
  randomDelayRange: { min: number; max: number },
) {
  const delay =
    Math.floor(Math.random() * (randomDelayRange.max - randomDelayRange.min + 1)) +
    randomDelayRange.min;

  if (delayImpl) {
    return delayImpl(delay);
  }

  return new Promise<void>((resolve) => {
    setTimeout(resolve, delay);
  });
}

async function fetchJson<T>(
  fetchImpl: FetchLike,
  url: string,
  timeoutMs: number,
  resourceName: string,
): Promise<T> {
  const controller = new AbortController();
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetchImpl(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Unable to load ${resourceName}. Received ${response.status} ${response.statusText}.`,
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request for ${resourceName} timed out after ${timeoutMs}ms.`);
    }

    throw error;
  } finally {
    globalThis.clearTimeout(timeoutId);
  }
}

async function resolveCollection<T>(
  source: ContentEndpoint<T>,
  options: Required<Pick<ContentServiceOptions, 'readEnv' | 'randomDelayRange'>> & {
    fetchImpl?: FetchLike;
    delayImpl?: (ms: number) => Promise<void>;
  },
): Promise<T[]> {
  const env = options.readEnv();

  if (env.useMockData || !env.apiBaseUrl) {
    await simulateNetworkDelay(options.delayImpl, options.randomDelayRange);
    return cloneCollection(source.fallback);
  }

  if (!options.fetchImpl) {
    throw new Error(`Fetch API is unavailable while loading ${source.resourceName}.`);
  }

  const endpointUrl = new URL(source.endpoint, `${env.apiBaseUrl}/`).toString();
  const payload = await fetchJson<unknown>(options.fetchImpl, endpointUrl, env.contentRequestTimeoutMs, source.resourceName);

  if (!Array.isArray(payload)) {
    throw new Error(`Unexpected ${source.resourceName} payload. Expected an array.`);
  }

  return cloneCollection(payload as T[]);
}

export function createContentService(options: ContentServiceOptions = {}) {
  const readEnv = options.readEnv ?? getAppEnv;
  const fetchImpl = options.fetchImpl ?? defaultFetchImpl;
  const randomDelayRange = options.randomDelayRange ?? DEFAULT_DELAY_RANGE;

  return {
    getPracticeAreas: async (): Promise<PracticeArea[]> =>
      resolveCollection(
        {
          endpoint: '/practice-areas',
          fallback: constants.PRACTICE_AREAS,
          resourceName: 'practice areas',
        },
        { readEnv, fetchImpl, delayImpl: options.delayImpl, randomDelayRange },
      ),

    getTestimonials: async (): Promise<Testimonial[]> =>
      resolveCollection(
        {
          endpoint: '/testimonials',
          fallback: constants.TESTIMONIALS,
          resourceName: 'testimonials',
        },
        { readEnv, fetchImpl, delayImpl: options.delayImpl, randomDelayRange },
      ),

    getBlogPosts: async (): Promise<BlogPost[]> =>
      resolveCollection(
        {
          endpoint: '/blog-posts',
          fallback: constants.BLOG_POSTS,
          resourceName: 'blog posts',
        },
        { readEnv, fetchImpl, delayImpl: options.delayImpl, randomDelayRange },
      ),

    getAttorneys: async (): Promise<Attorney[]> =>
      resolveCollection(
        {
          endpoint: '/attorneys',
          fallback: constants.ATTORNEYS,
          resourceName: 'attorneys',
        },
        { readEnv, fetchImpl, delayImpl: options.delayImpl, randomDelayRange },
      ),

    getFAQItems: async (): Promise<FAQItem[]> =>
      resolveCollection(
        {
          endpoint: '/faq-items',
          fallback: constants.FAQ_ITEMS,
          resourceName: 'FAQ items',
        },
        { readEnv, fetchImpl, delayImpl: options.delayImpl, randomDelayRange },
      ),
  };
}

export const contentService = createContentService();
