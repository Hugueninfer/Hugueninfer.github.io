import {translations} from './translations.mjs';

const DEFAULT_FONT_SIZE = 11;
const HORIZONTAL_PADDING = 8;
const MONO_GLYPH_RATIO = 0.62;

export function fitDiagramLabel(label, boxWidth) {
  const variants = [label, ...(translations[label] ?? [])];
  const longest = Math.max(...variants.map(value => [...value].length));
  const availableWidth = Math.max(0, boxWidth - HORIZONTAL_PADDING);
  const fittedSize = Math.floor(Math.min(DEFAULT_FONT_SIZE, availableWidth / (longest * MONO_GLYPH_RATIO)) * 10) / 10;

  if (fittedSize >= DEFAULT_FONT_SIZE) return undefined;
  return {fontSize:`${fittedSize}px`,letterSpacing:'0em'};
}
