import { promises as fs } from 'fs';
import path from 'path';

export const getServerData = async <T>(
  dirname: string,
  filename: string
): Promise<T> => {
  const dirPath: string = path.join(process.cwd(), dirname);
  const fileNames: string[] = await fs.readdir(dirPath);
  const fileName: string = fileNames.filter(fn => fn === filename)[0];
  const filePath: string = path.join(dirPath, fileName);

  const fileContents: string = await fs.readFile(filePath, 'utf8');

  return JSON.parse(fileContents);
};
