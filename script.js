
// carrinho 
// função para adicionar um item ao carrinho
function addToCart(productName, productPrice, productImage, storeName) {
    // verifica se já existe um carrinho armazenado no localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // adiciona o novo produto ao carrinho
    cart.push({ name: productName, price: productPrice, image: productImage, store: storeName });

    // armazena o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // alerta de confirmação
    Swal.fire({
        position: "center",
        icon: "success",
        title: "adicionado ao carrinho!",
        showConfirmButton: false,
        timer: 800
      });}

// função para carregar os itens do carrinho na página cart.html
function loadCart() {
    // obtém o carrinho do localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let totalPrice = 0;

    // verifica se o carrinho está vazio
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        // exibe os itens do carrinho
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item-card">
                <div class="store-name"><i class="fa-solid fa-shop"></i>  ${item.store} </div> 
                <div class="product-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-details">
                        <div class="product-name">${item.name}</div>
                        <div class="product-price">R$ ${item.price.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        `).join('');

        // Calcula o preço total
        totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

        // Exibe o preço total
        document.getElementById('total-price').innerText = `Total: R$ ${totalPrice.toFixed(2)}`;
    }
}

// Função para limpar o carrinho
function clearCart() {
    // Remove o carrinho do localStorage
    localStorage.removeItem('cart');

    // Recarrega o carrinho para refletir a limpeza
    loadCart();
}

// Carrega o carrinho quando a página cart.html é carregada
document.addEventListener('DOMContentLoaded', function() {
    if (document.title === 'Seu Carrinho') {
        loadCart();
    }
});

