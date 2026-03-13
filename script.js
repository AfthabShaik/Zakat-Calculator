function calculateZakat(){

let gold = parseFloat(document.getElementById("gold").value) || 0;
let silver = parseFloat(document.getElementById("silver").value) || 0;
let cash = parseFloat(document.getElementById("cash").value) || 0;
let business = parseFloat(document.getElementById("business").value) || 0;
let debts = parseFloat(document.getElementById("debts").value) || 0;

let totalWealth = gold + silver + cash + business - debts;

if(totalWealth <= 0){

document.getElementById("zakatResult").innerHTML = "No Zakat Applicable";

document.getElementById("breakdown").innerHTML = "";

return;

}

let zakat = totalWealth * 0.025;

document.getElementById("zakatResult").innerHTML =
"Zakat Payable: ₹ " + zakat.toFixed(2);

document.getElementById("breakdown").innerHTML =

`
📊 Zakat Breakdown<br><br>

Gold: ₹ ${gold}<br>

Silver: ₹ ${silver}<br>

Cash: ₹ ${cash}<br>

Business Assets: ₹ ${business}<br>

Debts Deducted: ₹ ${debts}<br>

<hr>

Total Wealth: ₹ ${totalWealth}<br>

Zakat (2.5%): ₹ ${zakat.toFixed(2)}

`;

}