let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Tüm slaytları gizle
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  // Eğer son slayta geldiyse başa dön
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // Sırada olan slaytı göster
  slides[slideIndex-1].style.display = "block";  
  
  // Fonksiyonu 5000 milisaniye (5 saniye) sonra tekrar çalıştır
  setTimeout(showSlides, 5000); 
}