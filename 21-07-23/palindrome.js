var str="123";
var len=str.length;
for(let i=0; i<len/2; i++){
    if (str[i]!==str[len-1-i]){
        console.log('false');
        break;
    }
    else{
       console.log('true');
    }
}


// var string="123";
// var n=string.length;
// let i=0;
// while(i<n/2){
//     if (string[i]!==string[n-1-i]){
//                 console.log('false');
//                 break;
//             }
//             else{
//                console.log('true');
//             }
//     i++;
// }


