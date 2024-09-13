//your code here
let total = 0;

function addItem() {
    const itemNameInput = document.getElementById('item-name-input');
    const itemPriceInput = document.getElementById('item-price-input');

    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());

    // Validate inputs
    if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter valid item name and price.');
        return;
    }

    // Update total price
    total += itemPrice;

    // Create new row for the table
    const itemList = document.getElementById('item-list');
    const newRow = document.createElement('tr');

    // Create table data for item name and price
    const nameCell = document.createElement('td');
    nameCell.setAttribute('data-ns-test', 'item-name');
    nameCell.textContent = itemName;

    const priceCell = document.createElement('td');
    priceCell.setAttribute('data-ns-test', 'item-price');
    priceCell.textContent = itemPrice.toFixed(2);

    // Append name and price to the new row
    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);

    // Insert the new row before the grand total row
    itemList.insertBefore(newRow, itemList.lastElementChild);

    // Update grand total in the table
    const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
    grandTotalElement.textContent = total.toFixed(2);

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';
}
