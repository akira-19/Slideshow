
var pic = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
  'images/photo5.jpg',
  'images/photo6.jpg',
  'images/photo7.jpg'
      ];


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var Pic1 = document.getElementById("pic1");
  var Pic2 = document.getElementById("pic2");
  var Pic3 = document.getElementById("pic3");
  var Pic4 = document.getElementById("pic4");
  var i;
  if (n > pic.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = pic.length;}

// variables for each picture
  var p1 = slideIndex-1;
  var p2 = slideIndex;
  var p3 = slideIndex+1;
  var p4 = slideIndex+2;

// if statement for overflow the array number
  if(p1==4){p4=0;}
  if(p1==5){p3=0; p4=1;}
  if(p1==6){p2=0; p3=1; p4=2;}

// output picture into each HTML IDs
  Pic1.src = pic[p1];
  Pic2.src = pic[p2];
  Pic3.src = pic[p3];
  Pic4.src = pic[p4];

}
