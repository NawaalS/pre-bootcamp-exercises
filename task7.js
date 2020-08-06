function multiplyByNineFifths(number) {
    return number * (9/5);
}
function getFarenheit(celcius) {
    return multiplyByNineFifths(celcius) + 32;
}
getFarenheit(15); //answer is 59

function subtractThirtyTwo(number) {
    return number - 32; 
}
function getCelcius(farenheit) {
    return subtractThirtyTwo(farenheit) * (5/9);
}
getCelcius(59);