var str = "Hello World";
str = str.toLowerCase();
var n = 0;
var l=str.length;
    for (let i = 0; i <l; i++) {
         // check if char[i] is vowel
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'|| str.charAt(i) == 'i'|| str.charAt(i) == 'o'|| str.charAt(i) == 'u') {
                // count increments if there is vowel in
                // char[i]
                n++;
            }
        }
    console.log("No of Vowels="+n);
 