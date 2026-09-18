const DELAY = 300;

export function mockResolve<T>(data: T, shouldError = false): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error("Mock error"));
      } else {
        resolve(data);
      }
    }, DELAY);
  });
}

export const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";
