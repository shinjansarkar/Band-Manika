#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('./src/assets');

async function convertFile(file, removeOriginal = false) {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);
  const fullPath = path.join(assetsDir, file);
  const outPath = path.join(assetsDir, `${base}.webp`);

  try {
    await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);
    console.log(`Converted ${file} -> ${base}.webp`);
    if (removeOriginal) {
      await fs.unlink(fullPath);
      console.log(`Removed original ${file}`);
    }
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err.message);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const removeOriginal = args.includes('--delete');

  const entries = await fs.readdir(assetsDir);
  const toConvert = entries.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  if (toConvert.length === 0) {
    console.log('No PNG/JPG files found in src/assets to convert.');
    return;
  }

  for (const file of toConvert) {
    await convertFile(file, removeOriginal);
  }

  console.log('Conversion complete.');
  if (!removeOriginal) {
    console.log('Run with `--delete` to remove original files after conversion.');
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
