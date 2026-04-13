const newUl = document.querySelector('#ul'); 
const newLi = document.createElement('li'); 
newLi.textContent = '장기';
const janggi = document.querySelector('ul #apple'); 
newUl.insertBefore(newLi, janggi);

const queryAll = document.querySelectorAll('.none-li')
queryAll[7].style.backgroundColor = 'beige';

const quertAll1 = document.querySelectorAll('li');
quertAll1.forEach((item,idx) => {
  if (idx % 2 === 1){
    item.style.color = 'red';
  }else {
    item.style.color = 'blue';
  }
});
