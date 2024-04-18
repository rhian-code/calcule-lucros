function calculatePrice() {
    var price = parseFloat(document.getElementById('price').value);
    var quantity = parseInt(document.getElementById('quantity').value);

    if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
        var margins = [0.3, 0.4, 0.5]; // Margens de lucro de 30%, 40% e 50%
        var resultsHTML = "";

        resultsHTML += "<div class='result'><p>Preço por produto: R$ " + (price / quantity).toFixed(2) + "</p></div>";

        margins.forEach(function (margin) {
            var totalPrice = price * (1 + margin) / quantity;
            resultsHTML += "<div class='result'><p>lucro de " + (margin * 100) + "%: R$ " + totalPrice.toFixed(2) + "</p></div>";
        });

        document.getElementById('results').innerHTML = resultsHTML;
    } else {
        document.getElementById('results').innerHTML = "Por favor, insira um valor válido para o preço e a quantidade.";
    }
}
