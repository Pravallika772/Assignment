const wishes = new Promise((resolve, failure)=>{
  setTimeout(() => {
    if(true)
    resolve('hello good morning...!');
  else
    failure(`sorry...`)
  },2000);
});

async function display() {
  let result=await wishes;
  console.log(wishes);
  console.log('your registration has been confirmed');
}
display();





