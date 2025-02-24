// Calculate Rectangle
export function areaRectangle(length: number, width:number){
    return length * width;
}


//Calculate Circle
export function circleDiameter(radius:number){
    return parseFloat((radius * 2).toFixed(10));
}

export function circleArea(radius:number){
    return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(10));
}

export function circleCircumstance(radius:number){
    return parseFloat((2 * Math.PI * radius).toFixed(10));
}

// Calculate Triangle
export function triangleAngle(angle1:number, angle2:number){
    return 180 - angle1 - angle2;
}