//automatic slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
  let indexSlide = 0;
slideshowAuto()
function slideshowAuto(){
  let numSlides = slideAuto.length;
  if(indexSlide>numSlides){indexSlide=0}
  if(indexSlide<0){indexSlide=numSlides - 1;}
  for(let eachIndex = 0; eachIndex<numSlides; eachIndex++){
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto,3000);
  indexSlide++
}
