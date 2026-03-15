export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path) {
    return path;
  }

  // Keep absolute/external URLs untouched
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
