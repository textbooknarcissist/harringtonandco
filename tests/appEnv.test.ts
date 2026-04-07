import { describe, expect, it } from 'vitest';
import { readAppEnv } from '../config/appEnv';

describe('readAppEnv', () => {
  it('uses portfolio-first defaults when env values are missing', () => {
    expect(readAppEnv({})).toEqual({
      apiBaseUrl: null,
      useMockData: true,
      contentRequestTimeoutMs: 6000,
    });
  });

  it('parses API mode config and trims the base URL', () => {
    expect(
      readAppEnv({
        VITE_API_BASE_URL: 'https://api.example.com/',
        VITE_USE_MOCK_DATA: 'false',
        VITE_CONTENT_REQUEST_TIMEOUT_MS: '9000',
      }),
    ).toEqual({
      apiBaseUrl: 'https://api.example.com',
      useMockData: false,
      contentRequestTimeoutMs: 9000,
    });
  });

  it('throws when API mode is enabled without a base URL', () => {
    expect(() =>
      readAppEnv({
        VITE_USE_MOCK_DATA: 'false',
      }),
    ).toThrow(/VITE_API_BASE_URL/i);
  });

  it('rejects invalid timeout values', () => {
    expect(() =>
      readAppEnv({
        VITE_CONTENT_REQUEST_TIMEOUT_MS: 'fast',
      }),
    ).toThrow(/VITE_CONTENT_REQUEST_TIMEOUT_MS/i);
  });
});
