// BERIKUT INI CONTOH PENGGUNAAN JAVASCRIPT JQUERY UNTUK PROJECT CALCULATOR

// A. MEMBUAT EVENT CLICK PADA TOMBOL
$("#btnHitung").click(function () {
  // B. MEMBUAT VARIABLE DI DALAM FUNGSI CLICK
  var num1 = $("#num1").val();
  var num2 = $("#num2").val();
  var op = $("#op").val();
  var hasil = $("#hasil");

  // C. MEMBUAT OPERASI LOGIKA PERHITUNGAN
  // Jika var op sama dengan 1
  if (op == 1) {
    hasil.val(parseInt(num1) + parseInt(num2));
  }
  // Jika var op sama dengan 2
  if (op == 2) {
    hasil.val(parseInt(num1) - parseInt(num2));
  }
  // Jika var op sama dengan 3
  if (op == 3) {
    hasil.val(parseInt(num1) * parseInt(num2));
  }
  // Jika var op sama dengan 4
  if (op == 4) {
    hasil.val(parseInt(num1) / parseInt(num2));
  }
});
