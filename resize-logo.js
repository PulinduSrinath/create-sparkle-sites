import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputFile = path.join(process.cwd(), 'public', 'premium-logo-icon.webp');
const outputFile = path.join(process.cwd(), 'public', 'premium-logo-icon-resized.webp');

async function resize() {
  try {
    if (!fs.existsSync(inputFile)) {
      console.error('Input file not found');
      return;
    }
    
    await sharp(inputFile)
      .resize({ width: 400 })
      .webp({ quality: 85 })
      .toFile(outputFile);
      
    fs.renameSync(outputFile, inputFile);
    console.log('Successfully resized image');
  } catch (err) {
    console.error('Error resizing image:', err);
  }
}

resize();
