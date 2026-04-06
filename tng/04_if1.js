let num = 55;
let grade = 'F';

if(num > 100 || num < 0 || typeof num !== 'number') {
  console.log('입력값 오류');
}else {
  if(num === 100) {
  grade = "A+";
}else if(num >= 90){
  grade = "A";
}else if(num >= 80){
  grade = "B";
}else if(num >= 70){
  grade = "C";
}else if(num >= 60){
  grade = "D";
} else{
  grade = "F";
}
console.log(`당신의 점수는 ${num}점 입니다. <${grade}>`);
}