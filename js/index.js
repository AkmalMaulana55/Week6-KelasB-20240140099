// FETCH API - menampilkan data produk dari dummyjson

const productList = document.getElementById("product-list");
const statusText = document.getElementById("status");

async function ambilProduk() {
  // tampilkan loading dulu
  statusText.textContent = "Loading data produk...";
  statusText.style.color = "black";

  try {
    const response = await fetch("https://dummyjson.com/products");

    // cek kalau responnya gagal
    if (!response.ok) {
      throw new Error("Gagal mengambil data (status " + response.status + ")");
    }

    const data = await response.json();
    console.log(data); // buat ngecek struktur datanya

    tampilkanProduk(data.products);
    statusText.textContent = "";
  } catch (error) {
    console.log(error);
    statusText.textContent = "Terjadi error: data produk gagal dimuat. Coba refresh halaman.";
    statusText.style.color = "red";
  }
}

function tampilkanProduk(products) {
  productList.innerHTML = "";

  products.forEach(function (item) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML =
      '<img src="' + item.thumbnail + '" alt="' + item.title + '">' +
      "<h3>" + item.title + "</h3>" +
      '<p class="harga">$' + item.price + "</p>";

    productList.appendChild(card);
  });
}

ambilProduk();
