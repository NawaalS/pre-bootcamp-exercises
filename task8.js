function convertNumber(num) {
    var hours = Math.floor(num / 60 / 60);
    var minutes = Math.floor(num/ 60) - (hours * 60);
    return hours + ':' + minutes;
}

convertNumber(150); 
