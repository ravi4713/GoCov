var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var i=0
function showTable() {
  if(i==0){
    document.getElementById('table').style.display='none';
    i=1
  }
  else{
    document.getElementById('table').style.display='block'
    i=0
  }
}
function fetchData(){
fetch('http://localhost:8080/contribute').then((response)=>{
  response.json().then((data)=>{
    let html=``
    data.forEach(element => {
      html+=`<tr>
      <td>${element.name}</td>
      <td>${element.email}</td>
      <td>${element.place}</td>
      <td>${element.state}</td>
      <td>${element.contri}</td>
  </tr>`
      
    });
    document.getElementById('tablebody').innerHTML=html
  
})})
}