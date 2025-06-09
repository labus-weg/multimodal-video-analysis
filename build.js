import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildClient() {
  try {
    await build({
      root: join(__dirname, 'client'),
      build: {
        outDir: join(__dirname, 'client/dist'),
        emptyOutDir: true,
      },
    });
    console.log('Client build completed successfully');
  } catch (error) {
    console.error('Client build failed:', error);
    process.exit(1);
  }
}

buildClient();