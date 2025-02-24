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

// Calculate Day Differences Between 2 Dates
export function dayDiference(date1:Date, date2:Date){
    let differentTime = Math.abs(date2.getTime() - date1.getTime());
    let timeToDays = differentTime / (24 * 3600 * 1000);
    return timeToDays;
}

// Print Initial Name in Uppercase
export function initialName(name:string){
    let arrayName = name.split(' ');
    let initialName = new Array(arrayName.length);

    for (let i = 0; i < arrayName.length; i++) {
        initialName[i] = arrayName[i].charAt(0).toUpperCase();
    }

    return initialName.join('');
}