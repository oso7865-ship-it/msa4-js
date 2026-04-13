// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//   alert('안녕하세요 숨어있는 div를 찾아주세요.');
// });
// function beat(){
//   alert('두근두근');
// }
// const container = document.querySelector('#container')


// container.addEventListener('mouseenter',beat)


// function remove(){
//   alert('들켰다!')
    
// }
// function divHidden(){
//   alert('숨는다')
// }
// let hide = false;
// container.addEventListener('click',() => {
//   if(!hide){
//     remove();
//     container.classList.remove("hide");
//     container.removeEventListener('mouseenter',beat);

//     hide = !hide;
//   }else{
//     divHidden();
//     container.classList.add("hide");
//     container.addEventListener("mouseenter",beat);
//     hide = !hide;


//   }
 

// })

const container = document.querySelector('#container');

function beat(){
  alert('두근두근');
}
function seeYou(){
  alert('들켰다!');
}
function divHidden(){
  alert('숨는다');
}


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('안녕하세요. 숨어있는 div를 찾아주세요.');
  const newDiv = document.createElement('div');
  container.appendChild(newDiv);
  newDiv.classList.add('box');
  newDiv.classList.add('hide');
  let hide = false;
  newDiv.addEventListener('mouseenter',beat)
  newDiv.addEventListener('click',() => {
    if(!hide){
      seeYou();
      newDiv.classList.remove('hide');
      newDiv.removeEventListener('mouseenter',beat);
      hide = !hide
    }else {
      divHidden();
      newDiv.classList.add('hide');
      newDiv.addEventListener('mouseenter',beat)  
      hide = !hide
    }
  })
})
