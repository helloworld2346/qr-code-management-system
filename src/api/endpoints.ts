export const ENDPOINTS = {
  auth: { login: "/auth/login", me: "/auth/me" },
  assets: { list: "/assets", detail: (uuid: string) => `/assets/${uuid}` },
  units: { list: "/units" },
  history: { byAsset: (uuid: string) => `/history/${uuid}` },
} as const;
