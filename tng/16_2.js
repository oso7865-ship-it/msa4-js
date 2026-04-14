(() => {
// 즉시 실행(익명)함수
// 함수 모음

const randomPositon = () => {
  const container = document.querySelector('.container');
  const randomX = Math.floor(Math.random() * (window.innerWidth - container.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - container.offsetHeight));
  container.style.left = `${randomX}px`;
  container.style.top = `${randomY}px`;
};

const setRandomBackgroundColor = (element) => {
  const randomRgbRed = Math.round(Math.random() * 255);
  const randomRgbGreen = Math.round(Math.random() * 255);
  const randomRgbBlue = Math.round(Math.random() * 255);

  element.style.backgroundColor = `rgb(${randomRgbRed}, ${randomRgbGreen}, ${randomRgbBlue})`
}

const busted = () =>{
  box.classList.add('busted');
  container.removeEventListener('mouseenter',beat);
  box.addEventListener('click',hide)
  box.removeEventListener('click',busted);
  setRandomBackgroundColor(box);
  alert('들켰다!');
};

const hide = () => {
  alert('숨는다');
  box.classList.remove('busted');
  randomPositon();
  container.addEventListener('mouseenter',beat);
  box.addEventListener('click',busted);
  box.removeEventListener('click',hide);
  box.style = '';
};

const beat = () => {
  alert('두근두근');
};

// 로직 모음
  const btnInfo = document.querySelector('button');
  const box = document.querySelector('.box')
  const container = document.querySelector('.container');
  randomPositon(); // 랜덤 위치 설정
  btnInfo.addEventListener('click',() => {
    alert('안녕하세요\n숨어있는 div를 찾아주세요.')
  });
  container.addEventListener('mouseenter',beat);
  box.addEventListener('click',busted);
})();

