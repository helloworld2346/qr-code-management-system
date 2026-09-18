import { http } from "@/api/axios";
import { logger } from "@/utils/logger";

export function setupInterceptors(onUnauthorized: () => void): void {
  http.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error?.response?.status;
      if (status === 401) {
        onUnauthorized();
      } else if (status === 403) {
        logger.warn("Không đủ quyền truy cập");
      } else {
        logger.error("API error", status);
      }
      return Promise.reject(error);
    },
  );
}
