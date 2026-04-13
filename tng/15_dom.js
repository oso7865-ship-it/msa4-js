const newUl = document.querySelector('#ul'); 
const appleLi = document.querySelector('#apple'); 
const newLi = document.createElement('li'); 
newLi.textContent = '장기';
newUl.insertBefore(newLi, appleLi);

// const queryAll = document.querySelectorAll('.none-li');
// queryAll[7].style.backgroundColor = 'beige';

const ulChildList = document.querySelectorAll('#ul > li');
ulChildList.forEach(item => {

  if(item.textContent === '어메이징브릭'){
    item.style.backgroundColor = 'beige';
  }
}
);


// const quertAll1 = document.querySelectorAll('li');
// quertAll1.forEach((item,idx) => {
//   if (idx % 2 === 1){
//     item.style.color = 'red';
//   }else {
//     item.style.color = 'blue';
//   }
// });
  

// ulChildList.forEach((item,idx) => {
//   // 인덱스가 0부터 시작하니까 +1해서 사용
//   if((idx + 1) % 2 === 0){
//     item.style.color = 'red';
//   }else {
//     item.style.color = 'blue';
//   }
// })
function setLineColor(){
  try {
    const ulChildList = document.querySelectorAll('#ul > li');
    if(ulChildList && ulChildList.length === 0){
      throw new Error('노드없음');
    }

    ulChildList.forEach ((item, idx) => {
      if((idx + 1) % 2 === 0){
        item.style.color = 'red';
      }else {
        item.style.color = 'blue';
      }
    })
  
    
  } catch (error) {
  console.log(err);
  }
}
setLineColor();


// 요소 추가시 주의 사항
const starcreft = document.createElement('li');
starcreft.textContent = '스타';
newUl.insertBefore(starcreft, appleLi)
setLineColor();