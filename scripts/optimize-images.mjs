import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("assets");
const OUT = path.resolve("public/photos");

const MAP = [
  { file: "IMG_3121.jpg", id: "01" },
  { file: "IMG_3099.jpg", id: "02" },
  { file: "IMG_3117.jpg", id: "03" },
  { file: "IMG_2976.jpg", id: "04" },
  { file: "IMG_2961.jpg", id: "05" },
  { file: "IMG_3019.jpg", id: "06" },
];

const WIDTHS = [800, 1200, 1600, 2000];

await fs.promises.mkdir(OUT, { recursive: true });

for (const { file, id } of MAP) {
  const input = path.join(ROOT, file);
  const image = sharp(input).rotate();
  const meta = await image.metadata();
  console.log(`${id} ← ${file} (${meta.width}×${meta.height})`);

  for (const width of WIDTHS) {
    const w = Math.min(width, meta.width ?? width);
    await image
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(OUT, `${id}-${width}.webp`));

    await image
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 58, effort: 4 })
      .toFile(path.join(OUT, `${id}-${width}.avif`));
  }
}

console.log("done");
