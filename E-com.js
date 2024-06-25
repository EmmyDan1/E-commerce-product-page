
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none'
}


document.addEventListener('DOMContentLoaded', () => {
  let cartQuantity = 0; 
  const quantityInput = document.getElementById('quantity');
  const increaseButton = document.getElementById('increase');  
  const decreaseButton = document.getElementById('decrease');
  const addToCartButton = document.getElementById('add-to-cart');
  const cartCount = document.getElementById('cart-count');
  const cartEmpty = document.getElementById('empty-cart');  
  const cartFilled = document.getElementById('cart-filled');
  const removeItemButton = document.getElementById('remove-item'); 
  const mainImage = document.getElementById('main-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const lightbox = document.getElementById('lightbox'); 
  const closeLightbox = document.getElementById('close-lightbox');
  const lightboxImage = document.getElementById('lightbox-image'); 
  const lightboxThumbnails = document.querySelectorAll('.lightbox-thumbnail')
  const cartIcon = document.getElementById('cart-icon');
  const cartDropdown = document.getElementById('img-dropdown')
 
  document.querySelector('.cart-btn').style.color = '#FF6347';


  

  increaseButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});


    decreaseButton.addEventListener('click', () => {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

 
  addToCartButton.addEventListener('click', () => {
    console.log('Add to cart clicked')
    cartQuantity += parseInt(quantityInput.value);  // Update the total cart quantity
    cartCount.textContent = cartQuantity;  // Update the cart count badge

    // Show or hide the cart empty/filled divs based on the cart quantity
    if (cartQuantity > 0) {
      console.log('cart is not empty')
      console.log(cartEmpty)
        cartEmpty.classList.add('hidden');
        cartFilled.classList.remove('hidden');
        document.getElementById('cart-item-quantity').textContent = cartQuantity;
        document.getElementById('cart-item-total').textContent = (cartQuantity * 125).toFixed(2);
        
    }
    console.log(addToCartButton)
});

removeItemButton.addEventListener('click', () => {
  cartQuantity = 0;  // Reset cart quantity to zero
  cartCount.textContent = cartQuantity;  // Update the cart count badge
  console.log(cartEmpty)
  // Show or hide the cart empty/filled divs based on the cart quantity
  cartEmpty.classList.remove('hidden');
  cartFilled.classList.add('hidden');

});

cartIcon.addEventListener('click', () => {
  cartDropdown.classList.toggle('hidden');
});

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
      thumbnails.forEach(th => th.classList.remove('active'));  // Remove active class from all thumbnails
      thumbnail.classList.add('active');  // Add active class to the clicked thumbnail
      mainImage.src = thumbnail.src; 
      mainImage.src = thumbnail.getAttribute('data-full'); 
      
  });
});

mainImage.addEventListener('click', () => {
  console.log('Main Image Clicked');
  lightbox.classList.remove('hidden');
  lightboxImage.src = mainImage.src;
});

closeLightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
})

lightboxThumbnails.forEach(lightboxThumbnail => {
  lightboxThumbnail.addEventListener('click', () => {
      lightboxThumbnails.forEach(thumb => thumb.classList.remove('active'));  // Remove active class from all lightbox thumbnails
      lightboxThumbnail.classList.add('active');  // Add active class to the clicked lightbox thumbnail
      lightboxImage.src = lightboxThumbnail.getAttribute('data-full');  // Update the lightbox image source with high-res image
  });
  // console.log(lightboxThumbnails)
});

function changeImage(imageSrc) {
  const mainImage = document.getElementById('main-image');
  mainImage.src = imageSrc;
}

// Attach the changeImage function to the window object
window.changeImage = changeImage;

})

