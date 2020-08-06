function numbers(num1,num2) { 
    if (num1 == 3 || num2 == 3){
    return true;}
    if (num1 + num2 == 3){
    return true;}
    if (num1 == 3 && num1 + num2 == 3){
    return true;}
    if (num2 == 3 && num1 + num2 == 3){
    return true;}
    else {
    return false;}
}

numbers(3,6);
