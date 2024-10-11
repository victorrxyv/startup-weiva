
    // Função para filtrar os produtos e farmácias
    function searchItems() {
        const searchTerm = document.querySelector('.search-container input').value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        const pharms = document.querySelectorAll('.pharms .desc a');

        // Itera sobre todos os produtos
        productCards.forEach(card => {
            const productName = card.querySelector('h4').textContent.toLowerCase();
            const pharmName = card.querySelector('.pharm-theme p').textContent.toLowerCase();
            if (productName.includes(searchTerm) || pharmName.includes(searchTerm)) {
                card.style.display = 'block'; // Mostra o produto
            } else {
                card.style.display = 'none'; // Esconde o produto
            }
        });

        // Itera sobre todas as farmácias
        pharms.forEach(pharm => {
            const pharmName = pharm.textContent.toLowerCase();
            if (pharmName.includes(searchTerm)) {
                pharm.closest('.desc').parentNode.style.display = 'block'; // Mostra a farmácia
            } else {
                pharm.closest('.desc').parentNode.style.display = 'none'; // Esconde a farmácia
            }
        });
    }

    // Adiciona o evento ao botão de pesquisa
    document.querySelector('.lupa').addEventListener('click', searchItems);

    // Permite que a busca também ocorra ao pressionar "Enter"
    document.querySelector('.search-container input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchItems();
        }
    });

