//Function to calculate and update UI
function calculateTotal(ticketPrice, button_clicked) {
    //Selection UI Variables 
    var subtotalUI = document.getElementById("subtotal");
    var vatUI = document.getElementById("vat");
    var totalUI = document.getElementById("total");

    //Variable for calculation 
    var subtotal, vat, total;
    subtotal = parseInt(subtotalUI.innerText);

    if (button_clicked == "-") {
        subtotal -= ticketPrice;
    } else {
        subtotal += ticketPrice;
    }
    //Updating Variables 
    subtotalUI.innerText = subtotal;
    vat = subtotal * 0.1;
    vatUI.innerText = vat;
    total = subtotal + vat;
    totalUI.innerText = total;
}

//Event Listener for +/- button
document.getElementById("input-area").addEventListener("click", e => {
    var buttonClicked = e.target.innerText;
    var ticketPrice, inputField;

    //Check if +/- are clicked, if not then return
    if (buttonClicked != "+" && buttonClicked != "-") return;

    //Check if ticket is Economy or First Class
    if (e.target.parentElement.id == "first_class") {
        ticketPrice = 150;
        inputField = document.getElementById("first_class_input");
    } else {
        ticketPrice = 100;
        inputField = document.getElementById("economy_input");
    }

    //Validation : Check if button is Decrement and input field is not already zero
    if ((buttonClicked === "-")) {

        if (inputField.value == 0) {
            alert("Ticket can not be minus (-).");
            return;
        } else {
            inputField.value--;
        }
    } else if (buttonClicked === "+") {
        inputField.value++;
    }
    calculateTotal(ticketPrice, buttonClicked);
});

//Event Listener for Checkout Button
document.getElementById("checkout_btn").addEventListener("click", e => {
    //Read UI Values
    var subtotal = parseInt(document.getElementById("subtotal").innerText);
    var vat = parseInt(document.getElementById("vat").innerText);
    var total = parseInt(document.getElementById("total").innerText);
    var firstClass = document.getElementById("first_class_input").value;
    var economy = document.getElementById("economy_input").value;

    //Write in checkout UI
    document.getElementById("checkout_economy").innerText = economy;
    document.getElementById("checkout_first").innerText = firstClass;
    document.getElementById("checkout_subtotal").innerText = subtotal;
    document.getElementById("checkout_vat").innerText = vat;
    document.getElementById("checkout_total").innerText = total;
});