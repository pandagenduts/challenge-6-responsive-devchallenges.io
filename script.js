const p1p2All = document.querySelectorAll ('.product-amount .material-symbols-outlined');
const totalPriceShown = document.querySelector('.total-price');

// span for p1 & p2 quantity (its TC is number (but the data type is string))
const p1QuantityTC = document.querySelector('.p1-quantity'); 
const p2QuantityTC = document.querySelector('.p2-quantity');

// to convert the TC into number
let p1Quantity = parseInt(p1QuantityTC.textContent); 
let p2Quantity = parseInt(p2QuantityTC.textContent); 

// use this so even though the innerHTML price on the web is changed, wont affect the price shown
const p1Price = 54.99;
const p2Price = 74.99;
const shipping = 19;

// this is the total price (all product price * quantity + shipping)
let theTotal = null; 

function totalPrice (a, b){
    theTotal = a * p1Price + b * p2Price + shipping;

    return theTotal;
};

// adding events to add & subtract button,
// and also the logic + the DOM manipulation
p1p2All.forEach(a => {
    a.addEventListener('click', b => {
        b.preventDefault();
        if (b.target.id == 'p1-sub'){
            if (p1Quantity == 0) {
                alert('Product quantity can\'t be less than 0');
            }
            else {
                p1Quantity -= 1;
                p1QuantityTC.textContent = p1Quantity;
            };
        }
        else if (b.target.id == 'p1-add'){
            if (p1Quantity == 999){
                alert('Maximum product quantity reached');
            }
            else {
                p1Quantity += 1;
                p1QuantityTC.textContent = p1Quantity;
            };
        }
        else if (b.target.id == 'p2-sub'){
            if (p2Quantity == 0) {
                alert('Product quantity can\'t be less than 0');
            }
            else {
                p2Quantity -= 1;
                p2QuantityTC.textContent = p2Quantity;
            };
        }
        else if (b.target.id == 'p2-add'){
            if (p2Quantity == 999){
                alert('Maximum product quantity reached');
            }
            else {
                p2Quantity += 1;
                p2QuantityTC.textContent = p2Quantity;
            };
        };
        totalPrice(p1Quantity, p2Quantity);
        totalPriceShown.textContent = theTotal;
        return console.log(theTotal);
    });
});