export const MALTESE_PARTS = ['body', 'head', 'ear-near', 'ear-far', 'leg-near', 'leg-far', 'tail'];
export const WIFE_PARTS = ['body', 'head', 'hair', 'arm-wave', 'forearm-wave'];

const safe = value => String(value || 'character').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'character';

export function svgId(uid, part) {
  return `${safe(uid)}-${safe(part)}`;
}

export function dogClassName({ scene = 'profile', active = false } = {}) {
  return `maltese is-${scene === 'door' ? 'door' : 'profile'}${active ? ' is-active' : ''}`;
}

export function wifeClassName(active = false) {
  return `blond-wife${active ? ' is-active' : ''}`;
}

// The gait is a function of travelled distance, not a looping clock. Stopping
// the page stops the paws; reversing the scroll retraces exactly the same pose.
export function profileDogFrame(progress = 0) {
  const p = Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : 0;
  const stride = Math.sin(p * Math.PI * 8);
  return {
    x: 490 + 150 * p,
    y: 350,
    nearAngle: stride * 18,
    farAngle: -stride * 18,
    bodyY: -Math.abs(stride) * 1.2,
    tailAngle: stride * 12,
  };
}
