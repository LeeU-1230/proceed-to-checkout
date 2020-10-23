let prod_qty01 = document.getElementById('prod_qty01');
let prod_subtotal01 = document.getElementById('prod_subtotal01');
let prod_qty02 = document.getElementById('prod_qty02');
let prod_subtotal02 = document.getElementById('prod_subtotal02');
let total_price = document.querySelector('.total_price');
let prod01 = 150;
let prod02 = 160;
let total = prod01 + prod02 + 80;
let pickupway;

prod_qty01.addEventListener('change', function () {
    prod01 = prod_qty01.value * 150;
    prod_subtotal01.textContent = `NT$ ${prod01}`;
    total_price.textContent = `NT$ ${prod01 + prod02 + 80}`;
    total = prod01 + prod02 + 80;
    console.log(prod01);

})

prod_qty02.addEventListener('change', function () {
    prod02 = prod_qty02.value * 160;
    prod_subtotal02.textContent = `NT$ ${prod02}`;
    total_price.textContent = `NT$ ${prod01 + prod02 + 80}`;
    total = prod01 + prod02 + 80;
    console.log(prod02);
})

/*function all_total(){
    let total_vu = total_price.textContent.substr(4);
    
}*/

let a_creditcard = document.querySelector('.a_creditcard');
let a_COD = document.querySelector('.a_COD');
let a_ATM = document.querySelector('.a_ATM');
let a_IBO = document.querySelector('.a_IBO');

a_creditcard.addEventListener('click', function () {
    a_creditcard.setAttribute('href', `htmls/creditcard.html?${total}`);
})

a_COD.addEventListener('click', function () {
    a_COD.setAttribute('href', `htmls/COD.html?${total}`);
})

a_ATM.addEventListener('click', function () {
    a_ATM.setAttribute('href', `htmls/ATM.html?${total}`);
})

a_IBO.addEventListener('click', function () {
    a_IBO.setAttribute('href', `htmls/ibon.html?${total}`);
})
