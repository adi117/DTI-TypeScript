import { describe, expect, it } from 'vitest';
import { areaRectangle } from '../index.js';

describe('Area of Rectangle', () => {
  it('adds two numbers correctly', () => {
    expect(areaRectangle(2, 3)).toBe(6);
    expect(areaRectangle(5, 10)).toBe(50);
    expect(areaRectangle(9, 3)).toBe(27);

  });
});