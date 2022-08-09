const p1Sub = document.querySelector('#p1-sub');
const p1Add = document.querySelector('#p1-add');
const p2Sub = document.querySelector('#p2-sub');
const p2Add = document.querySelector('#p2-add');
const p1p2All = document.querySelectorAll ('.product-amount .material-symbols-outlined');
const totalPrice = document.querySelector('.total-price');

p1p2All.forEach(a => {
    a.addEventListener('click', b => {
        console.log(b.target.id);
        b.preventDefault();
        if (b.target.id == 'p1-sub'){

        }
    });
});