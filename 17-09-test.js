// Q1. Indices of two number that add up to be target?
// var num = [2,3,1,9]
// function Checktarget(int){
// var target = 10;
// var output = [];
//     for(i=0;i<int.length;i++){
//         for (j=0; j < int.length ; j++) {
//             if((int[i]+int[j])==target) 
//             output.push(int[i],int[j]);
//         }
//     }
//     console.log("The index of the numbers that add up are ", output)
// }
// console.log(Checktarget(num))

// Q3(1). Palindromcheck of Numbers

// var input = 121
// function palindromecheck(num){
//     for(i=0;i<num.length/2;i++){
//         if(num[i]!==num[num.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(palindromecheck(input))

// Q3(2).Give an input string s and a pattern p, implement regular expression matching with support for '.' and '*':

// var s = "aa"
// var p = "aa"

// function matchingstring(str1, str2){
//     var pattern1 = "."
//     var pattern2 = "*"
//     if (str1 == str2){
//         return pattern1 ;
//     } else{
//         return pattern2;
//     }
// }
// console.log(matchingstring(s,p))

// Q6. Finding missing number and returning the number:

// var array1 = [2,3,4,8,7,6,1]
// function findMissingNumber(nums){
//     var missing_num = null;
//     for(i = 0; i < nums.length ; i++){
//         if (array1[i] !== i){
//             missing_num = i;
//             break;
//         }
//     }
//     return missing_num
// }
// console.log(findMissingNumber(array1))

// Q7. Removal OF duplicate data from an Array:

// var input1 = [3,4,6,2,7,3,]
// function removeDuplicates(arr){
//     var array=[]
//     for(let x in arr ){
//         if(!array.includes(arr[x])){
//             array.push(arr[x])
//     }
//     return array;}
// }
// console.log(removeDuplicates(input1))

// Q9. Swap every adjacent nodes and return its head: 

// var head = [1,2,3,4]
// function nodeswap(node){
//     for(i=0; i< node.length; i++){
//         if();{
//             return node;
//         }
//     }
// }
// console.log(nodeswap(head))


// Q10. Arrange in Ascending order and push in new array:

// var lists=[[1,4,5],[1,3,4],[2,6]]

// function arrangeinAscending(list){
//     var newarray = []
//     for(i=0; i<list.length; i++){
//         // console.log(list[i])
//        if(list[i]) 
//     }
// }
// console.log(arrangeinAscending(lists))