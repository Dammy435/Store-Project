const buttons = document.querySelectorAll('button');  

buttons.forEach(button => {  
  button.addEventListener('click', function() {  
    const quantitySpan = this.nextElementSibling; // Assuming quantity follows the button  
    let quantity = parseInt(quantitySpan.innerText);  
    
    if (this.textContent === '+') {  
      quantity++;  
    } else if (this.textContent === '-' && quantity > 0) {  
      quantity--;  
    }  
    
    quantitySpan.innerText = quantity;  
  });  
});  