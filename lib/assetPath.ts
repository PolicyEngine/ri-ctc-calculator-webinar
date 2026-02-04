// Utility to get asset path with basePath for production builds
export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production'
    ? '/ri-ctc-calculator-webinar'
    : '';
  return `${basePath}${path}`;
}
