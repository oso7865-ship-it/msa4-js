
// for(let i = 1; i <= 5; i++){
//   console.log(`*****`)
// }

// let star = '';
// for(let i = 0; i < 5; i++){
//   star += '*';
//   console.log(star);
// }

// for(let i = 1; i <= 12; i++){
//   let line= "";
//   for(let k = 0 ; k < 12 - i; k++){
//     line += "￣";
//   }
//   for(let j = 0 ; j < i; j++){
//     line += "｜";
//   }
//   console.log(line);
// }

// for(let i = 1; i <= 12; i++){
//   let line= "";
//   for(let j = 0 ; j < i; j++){
//     line += "￣";
//   }
//   for(let k = 0 ; k < 12 - i; k++){
//     line += "｜";
//   }
//   console.log(line);
// }


let star = '';
for(let i = 1; i <= 5; i++){
  star = '';
  for(let z = 0; z < 5 - i; z++){
  star += ' ';
  }
  for(let x = 0; x < i; x++){
  star += '*';
  }
  console.log(star);
}