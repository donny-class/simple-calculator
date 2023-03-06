// BERIKUT INI CONTOH PENGGUNAAN JAVASCRIPT NORMAL UNTUK PROJECT CALCULATOR

// A. MEMBUAT VARIABLE TOMBOL
/* 1. Buat variable "tombol" (nama variable bebas)
   2. Isi variable dengan element "button" yang ada di index.html menggunakan method "selector" seperti ini:
      document.querySelector("#btnHitung");
   3. "#btnHitung" adalah id yang hanya digunakan pada element "button" di index.html
   4. Lihat contoh penulisannya di bawah ini:
*/
var tombol = document.querySelector("#btnHitung");

// B. MEMBUAT EVENT CLICK PADA TOMBOL
/* 1. Variable "tombol" yang sudah diisi element "button", kemudian diberi method "event" seperti ini:
      addEventListener(param1, param2);
   2. param1 diisi dengan action "click" dan param2 diisi dengan "function() {}"
   3. Penulisan lengkap method "event" jadi seperti ini:
      addEventListener("click", function() {});
   4. Sehingga penulisan variable "tombol" yang diberi method "event" menjadi seperti ini:
      tombol.addEventListener("click", function() {});
   5. Untuk memberikan efek setelah melakukan event "click" dapat dituliskan di dalam fungsi "function() {}" seperti ini:
       
      tombol.addEventListener("click", function() {
        // Isi dengan apapun yang ingin dilakukan setelah melakukan click
      });

   6. Lihat contoh penulisannya di bawah ini:
*/
tombol.addEventListener("click", function () {
  // C. MEMBUAT VARIABLE DI DALAM FUNGSI CLICK
  /* 1. Buat variable untuk setiap element yang ada di index.html menggunakan method "selector" seperti variable "tombol" sebelumnya
     2. Untuk element dengan id num1, num2, dan op, ditambahkan "value" pada selectornya, guna mendapatkan value (nilai) yang kita masukan
  */
  var num1 = document.querySelector("#num1").value;
  var num2 = document.querySelector("#num2").value;
  var op = document.querySelector("#op").value;
  var hasil = document.querySelector("#hasil");

  // D. MEMBUAT OPERASI LOGIKA PERHITUNGAN
  // Jika var op sama dengan 1
  if (op == 1) {
    hasil.value = parseInt(num1) + parseInt(num2);
  }
  // Jika var op sama dengan 2
  if (op == 2) {
    hasil.value = parseInt(num1) - parseInt(num2);
  }
  // Jika var op sama dengan 3
  if (op == 3) {
    hasil.value = parseInt(num1) * parseInt(num2);
  }
  // Jika var op sama dengan 4
  if (op == 4) {
    hasil.value = parseInt(num1) / parseInt(num2);
  }
});
