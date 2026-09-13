const screenshotPatterns = [
  /^https:\/\/github\.com\/Hugueninfer\/orbit\/raw\/main\/docs\/screenshots\/showcase\/[A-Za-z0-9._-]+\.(?:avif|png|webp|jpe?g|svg)(?:\?[^ ]*)?$/,
  /^https:\/\/github\.com\/Hugueninfer\/agency-hub\/raw\/main\/docs\/screenshots\/[A-Za-z0-9._-]+\.(?:avif|png|webp|jpe?g|svg)(?:\?[^ ]*)?$/,
];

export function isApprovedRemoteMedia(url, approvedIcons = new Set()) {
  return approvedIcons.has(url) || screenshotPatterns.some(pattern => pattern.test(url));
}
