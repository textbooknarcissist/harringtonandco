/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_USE_MOCK_DATA?: string;
  readonly VITE_CONTENT_REQUEST_TIMEOUT_MS?: string;
}
