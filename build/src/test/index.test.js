import { describe, expect, it } from 'vitest';
import { areaRectangle, circleArea, circleCircumstance, circleDiameter, dayDiference, initialName, triangleAngle } from '../index.js';
describe('Area of Rectangle', () => {
    it('estimate the area of rectangle', () => {
        expect(areaRectangle(2, 3)).toBe(6);
        expect(areaRectangle(5, 10)).toBe(50);
        expect(areaRectangle(9, 3)).toBe(27);
    });
});
describe('Circle Diameter, Area, and Circumstance', () => {
    it('diameter of circle', () => {
        expect(circleDiameter(4)).toBe(8);
        expect(circleDiameter(10)).toBe(20);
        expect(circleDiameter(7)).toBe(14);
    });
    it('circumstance of circle', () => {
        expect(circleCircumstance(4)).toBe(25.1327412287);
        expect(circleCircumstance(10)).toBe(62.8318530718);
        expect(circleCircumstance(7)).toBe(43.9822971503);
    });
    it('area of circle', () => {
        expect(circleArea(4)).toBe(50.2654824574);
        expect(circleArea(10)).toBe(314.159265359);
        expect(circleArea(7)).toBe(153.9380400259);
    });
});
describe('Triangle Angle', () => {
    it('calculate third angle degree of triangle', () => {
        expect(triangleAngle(45, 32)).toBe(103);
        expect(triangleAngle(50, 20)).toBe(110);
        expect(triangleAngle(90, 45)).toBe(45);
    });
});
describe('Get Days Difference', () => {
    it('get how many day difference between 2 dates', () => {
        const date1 = new Date('1/1/2001');
        const date2 = new Date('12/12/2012');
        expect(dayDiference(date1, date2)).toBe(4363);
    });
});
describe('Uppercase Initial Name', () => {
    it('print only initial name', () => {
        expect(initialName("John Doe")).toBe("JD");
        expect(initialName("Muhammad Adi Wicaksono")).toBe("MAW");
        expect(initialName("Long Text")).toBe("LT");
    });
});
