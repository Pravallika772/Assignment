const wishes = new Promise((resolve, failure)=>{
  setTimeout(() => {
    if(true)
    resolve('hello good morning...!');
  else
    failure(`sorry...`)
  },2000);
});

wishes.then((user)=>{

console.log(wishes);}

).then(()=>{
  console.log(`your registration has been confirmed`);}
)