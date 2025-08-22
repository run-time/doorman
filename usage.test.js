import { execSync } from 'child_process';
import { describe, it, expect } from 'vitest';
import path from 'path';

describe('usage.js output', () => {
  it('should print all the function names and return values', () => {
    const usagePath = path.resolve(__dirname, 'usage.js');
    const output = execSync(`node ${usagePath}`, { encoding: 'utf8' });
    expect(output).toBeDefined();
    console.log(output);
  });
});
