export function getImageUrl(path: string): string {
  if (import.meta.env.TEST) {
    return "/test.jpg"; // Mock image for testing
  }

  return new URL(`/src/assets/${path}`, import.meta.url).pathname;
}
