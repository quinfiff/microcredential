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
const item2 = document.querySelector('#item2')
const closeModal2 = document.querySelector('#closeModal2')
const modalWindow2 = document.querySelector('.modalWindow2')

item2.addEventListener('click', function(){
  modalWindow2.style.display = 'block';
})
closeModal2.addEventListener('click', function(){
  modalWindow2.style.display = 'none';
})

//modal 3
const item3 = document.querySelector('#item3')
const closeModal3 = document.querySelector('#closeModal3')
const modalWindow3 = document.querySelector('.modalWindow3')

item3.addEventListener('click', function(){
  modalWindow3.style.display = 'block';
})
closeModal3.addEventListener('click', function(){
  modalWindow3.style.display = 'none';
})

//modal 4
const item4 = document.querySelector('#item4')
const closeModal4 = document.querySelector('#closeModal4')
const modalWindow4 = document.querySelector('.modalWindow4')

item4.addEventListener('click', function(){
  modalWindow4.style.display = 'block';
})
closeModal4.addEventListener('click', function(){
  modalWindow4.style.display = 'none';
})

//modal 5
const item5 = document.querySelector('#item5')
const closeModal5 = document.querySelector('#closeModal5')
const modalWindow5 = document.querySelector('.modalWindow5')

item5.addEventListener('click', function(){
  modalWindow5.style.display = 'block';
})
closeModal5.addEventListener('click', function(){
  modalWindow5.style.display = 'none';
})

//modal 6
const item6 = document.querySelector('#item6')
const closeModal6 = document.querySelector('#closeModal6')
const modalWindow6 = document.querySelector('.modalWindow6')

item6.addEventListener('click', function(){
  modalWindow6.style.display = 'block';
})
closeModal6.addEventListener('click', function(){
  modalWindow6.style.display = 'none';
})


//slideshow
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
