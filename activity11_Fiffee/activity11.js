//exmaple 14
const sBubble= document.querySelector('.sBubble')
const pBubble= document.querySelector('.pBubble')
const aBubble= document.querySelector('.aBubble')
sBubble.addEventListener('click', function(e){
  alert('SECTION was clicked!')
  e.stopPropagation()
})
pBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('PARAGRAPH was clicked!')
})
aBubble.addEventListener('click', function(e){
  e.stopPropagation()
  alert('ANCHOR was clicked!')
})
//example 13
const qccURL = document.querySelector('#qccURL')
qccURL.addEventListener('click', function(e){
  e.preventDefault();
  alert("QCC website is OFF!")
})
//example 12
const toTop = document.querySelector('.toTop')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  if (pxTop>80){
    toTop.style.display = 'block';
  }
  else{
      toTop.style.display = 'none';
  }
})
//example 11
const display9 = document.querySelector('.display9')
window.addEventListener('scroll', function(){
  let pxTop = window.pageYOffset;
  display9.innerHTML = `Browser window is ${pxTop}px away from the top `
})
//example 10
const inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown', function(e){
  alert(`keydown! key "${e.key}" was pressed \nThe ASCII code for key "${e.key}" is ${e.which}`)
})
//example 9
const divColor = document.querySelectorAll('.divColor')
for (let eachDiv of divColor){
  eachDiv.addEventListener('mouseout', function(){
    eachDiv.style.backgroundColor = changeColor();
  })
}
//example 7
const colorContainer = document.querySelector('.colorContainer')
const btnColor = document.querySelector('#btnColor')

btnColor.addEventListener('click', function(){
  //change background color of the div
  colorContainer.style.backgroundColor = changeColor();
})
function changeColor(){
  //rgb values goes from 0 to 255
  const r = Math.floor(Math.random()*256)
  const g = Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  //change background color of the div
return `rgb(${r},${g},${b})`
}

//example 6
const btn6 = document.querySelector('#btn6')
btn6.addEventListener('mouseout', click1)
btn6.addEventListener('dblclick', click2)

function click1(){
  console.log('Button 6 = mouseout!')
}

function click2(){
  alert('Button 6 was DOUBLE clicked!')
}
//examle 5
const btn5 = document.querySelector('#btn5')
btn5.addEventListener('click', function(){
  alert('Button 5 was clicked!')
})
//example 4
const title = document.querySelector('.title')
title.onclick = function(){
  console.log('The title was hovered on mouseover event');
}

//example 3
const qccLink = document.querySelector('#qccLink')
qccLink.onclick = function(){
  console.log('QCC link was clicked!')};


qccLink.onmouseover = testing;

function testing(){
  console.log('QCC link was hovered of moseover!');
}
//example 2
const btn2 = document.querySelector('#btn2')
btn2.onClick = function(){
  alert('Hi there!')
}

/* another way to create events

function clickedBtn(){
    alert('Hi there!')}
    btn2.onClick = clickedBtn */
