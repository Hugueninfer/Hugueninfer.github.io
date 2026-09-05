import { createHash } from 'node:crypto';

export function localizeContent(value, manifest) {
  if (typeof value === 'string') return manifest[value] ?? value;
  if (Array.isArray(value)) return value.map(item => localizeContent(item, manifest));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localizeContent(item, manifest)]));
  return value;
}

export function assetPath(source) {
  const url = new URL(source);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Only public HTTP assets are supported');
  const extension = url.pathname.match(/\.(avif|webp|png|jpe?g|svg|gif|woff2?|mp4)$/i)?.[1] ?? 'bin';
  return `/media/${createHash('sha256').update(source).digest('hex').slice(0, 20)}.${extension}`;
}

export function collectMedia(value) {
  const result = new Set();
  function walk(item) {
    if (typeof item === 'string' && /^(?:https?:\/\/|\/?assets\/)/.test(item) && /\.(?:avif|webp|png|jpe?g|svg|gif|woff2?|mp4)(?:\?|$)/i.test(item)) result.add(item);
    else if (Array.isArray(item)) item.forEach(walk);
    else if (item && typeof item === 'object') Object.values(item).forEach(walk);
  }
  walk(value);
  return [...result];
}
