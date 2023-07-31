function splitAmount() {
    let amount = parseInt(document.getElementById("amount").value);
    let people = parseInt(document.getElementById("people").value);
    let alert1 = document.getElementById("alert1");
    let alert2 = document.getElementById("alert2");
    //Check weather given value is valid or not
    if (isNaN(amount)||amount<=0) {
        alert1.textContent = "Please provide valid amount";
        return;
    } 
    //Checking count of people 
    if (isNaN(people)||people<2) {
        alert2.textContent = "Value should be greater than 1";
        return;
    } 
    //Splitting Amount
    let splitAmount = amount/people;
    document.getElementById("result").value = ` ${splitAmount.toFixed(2)}`;

}
