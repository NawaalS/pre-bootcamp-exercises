var vowels = 'AaEeIiOoUu'
var string = 'welcomE to Umuzi BoOtcAmp'

var array = '';
for (i = 0; i < string.length;i++ ){
    if (vowels.indexOf(string[i]) >= 0) array += string[i];
}
console.log(array);
