function convertToSlug(text) {
  return text
    .trim() // Başındaki ve sonundaki boşlukları kaldırır
    .toLowerCase() // Tüm harfleri küçük harfe dönüştürür
    .replace(/\s+/g, "-") // Boşlukları tire ile değiştirir
    .replace(/[^\w\-]+/g, ""); // Özel karakterleri kaldırır
}
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".card");
  var gcards = document.querySelectorAll(".gezegenler .card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      var destination = this.querySelector(".overlay-content p").innerText;

      var pageURL = "#" + convertToSlug(destination);
      console.log(pageURL); //pageUrl yldzlar olarak çıkıyor
      window.open(pageURL, "_self");
    });
  });

  gcards.forEach(function (gcard) {
    gcard.addEventListener("click", function () {
      var gURL = "card-icerik.html";
      window.open(gURL, "_self");
    });
  });
});
