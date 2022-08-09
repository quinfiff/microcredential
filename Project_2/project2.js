// storage
const firstName = document.querySelector('#firstN').value
const lastName = document.querySelector('#lastN').value
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function(){
  localStorage.setItem('FN', firstName);
  sessionStorage('LN', lastName);
})


//forms


//modal modalWindow
const item1 = document.querySelector('#item1')
const closeModal = document.querySelector('#closeModal')
const modalWindow = document.querySelector('.modalWindow')

item1.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})
closeModal.addEventListener('click', function(){
  modalWindow.style.display = 'none';
})

//modal 2
/*const item2 = document.querySelector('#item2')
const closeModal2 = document.querySelector('#closeModal2')
const modalWindow = document.querySelector('.modalWindow')

item2.addEventListener('click', function(){
  modalWindow.style.display = 'block';
})
closeModal2.addEventListener('click', function(){
  modalWindow.style.display = 'none';
})*/

//automatic slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
  let indexSlide = 0;
slideshowAuto()
function slideshowAuto(){
  let numSlides = slideAuto.length;
console.log(`counter=${indexSlide}`)
  if(indexSlide>=numSlides){indexSlide=0; console.log(`indexSlide=${indexSlide}`)}
  if(indexSlide<0){indexSlide=numSlides - 1;console.log(`indexSlide<1=${indexSlide}`)}
  for(let eachIndex = 0; eachIndex<numSlides; eachIndex++){
    slideAuto[eachIndex].style.display = 'none'
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto,3000);
  indexSlide++
}
