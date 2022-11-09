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
  const target = event.currentTarget.parentNode;
  const targetParent = target.parentNode;
  targetParent.remove();

  return calculateAll()
}

// ITERATION 5
function createProduct() {
  const ProductParent = document.querySelector('.product').parentNode;
  const newProductName = document.querySelector('.product-name input').value;
  const newProductPrice = document.querySelector('.product-price input').value;

  let newProduct = document.createElement('tr');
  newProduct.classList.add('product');
  newProduct.innerHTML = (`<td class="name">
    <span>${newProductName}</span>
    </td>
    <td class="price">$<span>${newProductPrice}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`
  );

  const removeProductBtn = newProduct.querySelector('.btn-remove');
  removeProductBtn.addEventListener('click', removeProduct);

  document.querySelector('.product-name input').value = '';
  document.querySelector('.product-price input').value = 0;
  
  return ProductParent.appendChild(newProduct)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach(element => element.addEventListener('click', removeProduct));

  const createProductBtn = document.querySelector('#create');
  createProductBtn.addEventListener('click', createProduct);
});
