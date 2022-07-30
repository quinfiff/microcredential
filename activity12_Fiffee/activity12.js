/*automatic slideshow*/
const slideAuto = document.querySelectorAll('.slideAuto')
slideshowAuto()
function sideshowAuto() {
  let numSlides = slideAuto.length;
  if(indexSlide>=numSlides){indexSlide=0}
  if(indexSlide<0){indexSlide=numSlides - 1;}
  for(let eachIndex =0; eachIndex<numSlides; eachIndex++){
  slideAuto[eachIndex].style.display = 'none'
}
slideAuto[indexSlide].style.display = 'block'
setTimeout(slideshowAuto, 3000;)///the second argument is the time in miliseconds//
indexSlide++
}
/*manual slideshow*/
const slides = document.querySelectorAll('.slide')
const prev = document.querySelectorAll('.prev')
const next = document.querySelectorAll('.next')

let currentSlide = 1; //slide position//
let numberSlide = slides.length;
slideshow(currentSlide);

prev.addEventListener('click',function(){
  currentSlide--
  slideshow(currentSlide);
})
next.addEventListener('click',function(){
  currentSlide++
  slideshow(currentSlide);
})

function slideshow(n) {
  // when current slde reachest the number of slides, it will set ack to 1//
  if (currentSlide>numberSlide){currentSlide=1;}
    //when current slide reaches to the first skide, the previous button resets to the last slide//
    if(currentSlide<1){currentSlide= numberSlide;}
    for (let eachSlide = 0; eachSlide<numberSlide; eachSlide++){
      slides[eachSlide].style.display = 'none';
    }
    slides[currentSlide-1].style.display ='block';
  }
