import { describe, expect, it, vi } from 'vitest';
import { PRACTICE_AREAS } from '../constants';
import { createContentService } from '../services/contentService';

describe('createContentService', () => {
  it('returns mock demo data without calling fetch', async () => {
    const fetchImpl = vi.fn();
    const delayImpl = vi.fn().mockResolvedValue(undefined);
    const service = createContentService({
      readEnv: () => ({
        apiBaseUrl: 'https://api.example.com',
        useMockData: true,
        contentRequestTimeoutMs: 5000,
      }),
      fetchImpl,
      delayImpl,
    });

    await expect(service.getPracticeAreas()).resolves.toEqual(PRACTICE_AREAS);
    expect(fetchImpl).not.toHaveBeenCalled();
    expect(delayImpl).toHaveBeenCalled();
  });

  it('fetches API-backed data when mock mode is disabled', async () => {
    const fetchImpl = vi.fn(async () =>
      new Response(
        JSON.stringify([
          {
            id: 'api-1',
            title: 'API Briefing',
            excerpt: 'Loaded from the configured API.',
            date: 'Apr 6, 2026',
            author: 'API Team',
            category: 'Updates',
            imageUrl: 'https://example.com/api-briefing.jpg',
          },
        ]),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ),
    );
    const service = createContentService({
      readEnv: () => ({
        apiBaseUrl: 'https://api.example.com',
        useMockData: false,
        contentRequestTimeoutMs: 5000,
      }),
      fetchImpl,
      delayImpl: vi.fn(),
    });

    await expect(service.getBlogPosts()).resolves.toEqual([
      {
        id: 'api-1',
        title: 'API Briefing',
        excerpt: 'Loaded from the configured API.',
        date: 'Apr 6, 2026',
        author: 'API Team',
        category: 'Updates',
        imageUrl: 'https://example.com/api-briefing.jpg',
      },
    ]);

    expect(fetchImpl).toHaveBeenCalledWith(
      'https://api.example.com/blog-posts',
      expect.objectContaining({
        headers: expect.objectContaining({
          Accept: 'application/json',
        }),
      }),
    );
  });
});
