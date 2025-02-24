// Calculate Rectangle
export function areaRectangle(length, width) {
    return length * width;
}
//Calculate Circle
export function circleDiameter(radius) {
    return parseFloat((radius * 2).toFixed(10));
}
export function circleArea(radius) {
    return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(10));
}
export function circleCircumstance(radius) {
    return parseFloat((2 * Math.PI * radius).toFixed(10));
}
// Calculate Triangle
export function triangleAngle(angle1, angle2) {
    return 180 - angle1 - angle2;
}
// Calculate Day Differences Between 2 Dates
export function dayDiference(date1, date2) {
    let differentTime = Math.abs(date2.getTime() - date1.getTime());
    let timeToDays = differentTime / (24 * 3600 * 1000);
    return timeToDays;
}
// Print Initial Name in Uppercase
export function initialName(name) {
    let arrayName = name.split(' ');
    let initialName = new Array(arrayName.length);
    for (let i = 0; i < arrayName.length; i++) {
        initialName[i] = arrayName[i].charAt(0).toUpperCase();
    }
    return initialName.join('');
}
