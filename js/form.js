// FORM - DOM & Event Handling

const form = document.getElementById("feedback-form");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputPesan = document.getElementById("pesan");
const counter = document.getElementById("counter");
const hasil = document.getElementById("hasil");

// event input: hitung jumlah karakter pesan secara langsung
inputPesan.addEventListener("input", function () {
  counter.textContent = inputPesan.value.length + " karakter";
});

// fungsi buat nampilin / hapus pesan error
function setError(input, idError, pesan) {
  document.getElementById(idError).textContent = pesan;
  if (pesan !== "") {
    input.classList.add("salah");
  } else {
    input.classList.remove("salah");
  }
}

function validasi() {
  let valid = true;

  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  // validasi nama
  if (nama === "") {
    setError(inputNama, "error-nama", "Nama tidak boleh kosong");
    valid = false;
  } else if (nama.length < 3) {
    setError(inputNama, "error-nama", "Nama minimal 3 karakter");
    valid = false;
  } else {
    setError(inputNama, "error-nama", "");
  }

  // validasi email (cek format sederhana)
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    setError(inputEmail, "error-email", "Email tidak boleh kosong");
    valid = false;
  } else if (!polaEmail.test(email)) {
    setError(inputEmail, "error-email", "Format email tidak valid");
    valid = false;
  } else {
    setError(inputEmail, "error-email", "");
  }

  // validasi pesan
  if (pesan === "") {
    setError(inputPesan, "error-pesan", "Pesan tidak boleh kosong");
    valid = false;
  } else if (pesan.length < 10) {
    setError(inputPesan, "error-pesan", "Pesan minimal 10 karakter");
    valid = false;
  } else {
    setError(inputPesan, "error-pesan", "");
  }

  return valid;
}

// event submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // biar halaman gak reload

  if (validasi()) {
    // tampilkan hasil di halaman
    hasil.innerHTML =
      '<div class="hasil-box">' +
      "<strong>Terima kasih, feedback kamu sudah diterima!</strong>" +
      "<p>Nama: " + inputNama.value.trim() + "</p>" +
      "<p>Email: " + inputEmail.value.trim() + "</p>" +
      "<p>Pesan: " + inputPesan.value.trim() + "</p>" +
      "</div>";

    form.reset();
    counter.textContent = "0 karakter";
  } else {
    hasil.innerHTML = "";
  }
});

// hapus error saat user mulai mengetik lagi
inputNama.addEventListener("input", function () {
  setError(inputNama, "error-nama", "");
});
inputEmail.addEventListener("input", function () {
  setError(inputEmail, "error-email", "");
});
inputPesan.addEventListener("input", function () {
  setError(inputPesan, "error-pesan", "");
});
