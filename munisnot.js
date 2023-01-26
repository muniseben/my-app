//Bana bir obje tanimla.(product) Icinde ozellik (name, price) ve metod (formatPrice) bulunsun.

var product = {
    name: "asdas",
    price: 3,
};

function formatPrice(product) {
    return product.price;
}

console.log(formatPrice(product));
