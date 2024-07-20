function clickMenu(){
   if( nav.style.display == 'block'){
    nav.style.display = 'none'
   } else {
    nav.style.display = 'block'
   }
}


$('.containert').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 4,
   slidesToScroll: 4,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
   ]
 });



 document.addEventListener('DOMContentLoaded', function () {
   
  var modal = document.getElementById("myModal");

  
  var btn = document.getElementById("modalcontato");

 
  var span = document.getElementsByClassName("close")[0];

  

  
  btn.onclick = function() {
      modal.style.display = "block";
      document.body.classList.add('modal-open'); 
  }

 
  span.onclick = function() {
      modal.style.display = "none";
  }

  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  function closeModal() {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
  }

  span.onclick = closeModal;

  window.onclick = function (event) {
      if (event.target == modal) {
          closeModal();
      }
  }


});