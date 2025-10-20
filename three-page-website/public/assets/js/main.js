// Minimal JS — можно расширить при необходимости
document.addEventListener('DOMContentLoaded', function(){
  // простая поведение: подсвечивать активную ссылку
  var links = document.querySelectorAll('nav a');
  links.forEach(function(a){
    if(a.href === location.href || a.getAttribute('href') === location.pathname.split('/').pop()){
      a.style.fontWeight = '600';
    }
  });
});
