let food = '돈까스';
// switch(검증 대상)
switch(food) {
  // case 일치검증값
  case '김밥':
    // 실행할 처리
    console.log('분식');
    break;
  case '돈까스':
    console.log('양식');
    break;
  default:
    console.log('이상한 음식');
    break;
}