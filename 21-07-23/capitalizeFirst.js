var sentence = "JavaScript is the world's most popular programming language";
var words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

var res=words.join(" ");
console.log(res);