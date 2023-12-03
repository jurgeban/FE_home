//---------------  1 
let el1 = document.createElement('div');
el1.innerText = 'Text of first added Element';

let existingElement = document.querySelector('#existingElement');
existingElement.after(el1);

//--------------- 2
let el2 = document.createElement('div');
el2.innerText = 'Text of second added Element';

let parentElement = document.querySelector('#parentElement');
parentElement.append(el2);

//---------------- 3
document.querySelector('.removeMe').remove();

//----------------- 4 
let product = [
    {
    	title: 'Cola',
    	unit_price: 1.5,
    	count: 3,
    	color: 'red'
    },
     {
    	title: 'Milk',
    	unit_price: 1,
    	count: 2,
    	color: 'wight'
    },
    {
    	title: 'Juice',
    	unit_price: 2,
    	count: 4,
    	color: 'orange'
    },
    {
    	title: 'Wine',
    	unit_price: 7,
    	count: 2,
    	color: '#8B0000'
    }
];

//------------- 5
let shop = document.querySelector('.shop');
let countProduct = 0;
let countSum = 0;
for (var i = 0; i < product.length; i++) {
	for (var x = 0; x < product[i].count; x++) {
		let newCard = document.createElement('div');
		newCard.innerHTML = product[i].title + `<p>Price ${product[i].unit_price}$</p>`;
		newCard.classList.add('product');
		newCard.style.backgroundColor = product[i].color;
		countSum += product[i].unit_price;
		countProduct++;
		shop.append(newCard) 
	}
}

let allSum = document.createElement('div');
allSum.classList.add('allSum');
allSum.innerText = `Получилось всего вместе ${countProduct} товаров на сумму: ${countSum}$`;
shop.after(allSum);

