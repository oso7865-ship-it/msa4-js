// for 문
// 기본문법
// for(초기값; 조건식; 1회 루프당 증감 값) {
//     // 반복하고 싶은 처리
// }

// for(let i = 0; i < 3; i++) {
//   console.log(`${i}번째 루프문`);

//   if(i === 1) {
//     //break: 처리중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
// }

// for(let i = 0; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if(i % 2 === 0){

//     continue;
//   }
//   console.log(`${i}번째 루프문`)

// }

// for(let i = 0; i < 3; i++){
//   console.log(`부모: ${i}번째`)
//   for(let z = 0; z < 3; z++){
//     console.log(`자식: ${z}번째`)
//   }
// }
// let z = 19;
// let multi = 19;
// for(let i = 1; i <= multi; i++){
//   console.log(`${z} x ${i} = ${i*z}`)
// }
let dan = 1;
for(let i = 2; i <= 9; i++){
  console.log(`** ${i}단 **`);
  dan++;
  for(let x = 1; x <= 9; x++){
    console.log(`${dan} X ${x} = ${dan*x}`)
  }
}



// for(let i =2; i<=9; i++){
//   console.log(`${i}단`);
//   for(let j = 1; j <= 9; j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }