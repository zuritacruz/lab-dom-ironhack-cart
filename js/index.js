// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  
  product.querySelector('.subtotal span').innerHTML = subtotal
  return subtotal;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  const allSubtotal = [...allProducts].map(element => updateSubtotal(element));
  // ITERATION 3
  const totalValue = allSubtotal.reduce((a, b) => a + b);

  document.querySelector('#total-value span').innerHTML = totalValue
  return  totalValue;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
