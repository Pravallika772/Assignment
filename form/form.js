var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(){
  modal.style.display = "inline-block";

}

// When the user clicks on <span> (x), close the modal
close.onclick = function(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}


let userName=document.getElementById("name").value;
let pwd=document.getElementById("password").value;
let arr=[];

function addTableRow() {
  var name = document.getElementById("name");
  var password = document.getElementById("password");
  
  var table = document.getElementById("tableData");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
 
  
 
if(name.value!=''){
  // console.log(arr.push(name.value));
  row.insertCell(0).innerHTML= name.value;
}
else{
  alert("Please enter user name");
}
if(password.value!=''){
  // arr.push(password.value);
  row.insertCell(1).innerHTML= password.value;
}
else{
    alert("Please enter your password");
}
}

