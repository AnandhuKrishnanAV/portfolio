/**
 * Draw image with CSS object-fit: cover behavior inside the given rect.
 */
export function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: CanvasImageSource,
  x: number,
  y: number,
  w: number,
  h: number,
): void {
  let iw = 0;
  let ih = 0;
  if (img instanceof HTMLImageElement) {
    iw = img.naturalWidth;
    ih = img.naturalHeight;
  } else if (img instanceof HTMLCanvasElement) {
    iw = img.width;
    ih = img.height;
  } else {
    return;
  }
  if (!iw || !ih) return;

  const scale = Math.max(w / iw, h / ih);
  const sw = w / scale;
  const sh = h / scale;
  const sx = (iw - sw) / 2;
  const sy = (ih - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}
