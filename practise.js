var input = 12321;
function palinnumber(num){
    for(i=0;i<num.length/2;i++){
        if (num[i]!== num[num.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(palinnumber(input))

// To check whether the number has more than two digits:
// flag-based method:

var input1 = 1;
function palindromecheck(num1){
    var flag = false;
    for(i=0;i<num1.length/2;i++){
        if(num1[i]!==num1[num1.length-1-i]){
            flag =true;}
        }
        return flag 
}
console.log(palindromecheck(input1))

// pattern Question:

var input2 = 6;
function patternmaking(num2){
    for(i = 1; i <= num2; i++){
        var pattern = ""
        for(j = 1; j <= i; j++){
            pattern = pattern + "$";
        }
    }
    console.log("Pattern is : ", pattern);
}
patternmaking(input2)

// Input: s = "MCMXCIV"
// Output: 1994

var s = "MCMXCIV"
function changetoint(str){
    for()
}
console.log(changetoint(s))