import { describe, expect, it } from 'vitest';
import { add } from '../index.js';
describe('Math functions', () => {
    it('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });
});
