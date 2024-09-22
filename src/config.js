import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const myfilename = fileURLToPath(import.meta.url);
export const mydirname = dirname(myfilename);