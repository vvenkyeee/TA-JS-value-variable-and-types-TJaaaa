/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 300;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
var purchase_amount = 0;
// your code goes here

// ⛑ Answer of the above will `$334.76`.


for (let i=0;amount < bank_balance;i++) {
    amount += PHONE_PRICE;
    if (amount > bank_balance) {
        purchase_amount = amount-PHONE_PRICE;
    }
    if (purchase_amount < SPENDING_THRESHOLD){
        purchase_amount = purchase_amount + ACCESSORY_PRICE;
    }
}
purchase_amount = purchase_amount + purchase_amount*TAX_RATE
alert(purchase_amount);

purchase_amount<bank_balance ? alert("You can afford") : alert("You cannot afford")

// while (amount<bank_balance) {
//     amount += PHONE_PRICE;
//     PHONE_PRICE++ ;
    
    
// }

// alert(amount);