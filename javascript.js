let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 10000) {
        alert("Enter Amount Below 10K.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
        document.getElementById("myAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        if (myAccountBalance >= 0) {
            alert(`Successfully Transferred !!  
      ₹${enterAmount} is sent to ${enterName}.`)
        } else {
            alert("Insufficient Balance!")
            var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) - enterAmount;
            var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) + enterAmount
            document.getElementById("myAccountBalance").innerText = myAccountBalance
            document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        }

        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`₹${enterAmount} is sent to recepient with Email id ${enterName} on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
