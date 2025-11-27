// Q6 – Fetch Fake Store API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network error");

    const products = await response.json();
    products.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("-------------------");
    });

  } catch (err) {
    console.error("Failed to load products. Please try again.");
  }
}

fetchProducts();
