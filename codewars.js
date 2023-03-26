// function checkCoupon(enteredCode, currentCode, currentDate, experationDate){
//     if (enteredCode === currentCode && new Date (currentDate) <= new Date (experationDate)){
//         return true
//     }else{
//         return false
//     }
// }

  // our task is to write a function that takes a string and return a new string with all vowel removed
  // fro example, the string "this website is for losers lol!" would  became "ths wbst s fr lsrs ll!"
//step 1: indentify vowels //  variable a,e,i,,o,u
//step 2: go through str letter by letter// loop
//step 3: if letter is vowel remove it // conditional remove(?)
// step 4: return strings without vowels


// function disemvowel(str){
//  const vowels = ['a','e','i','o','u',]
//  const splitSTR = str.split('')
// //  splitSTR.forEach((char,i) => {
// //    if(vowels.includes(char.toLowerCase())){
// //     // console.log(char,'is a vowel')
// //     //if is a vowel cut it out and remove it from array 
// //     splitSTR.splice(i, 1)

// //    }
// //  });

//     {  return str.split(''.map)
//         if (!vowels.includes(char.toLowerCase())){
//             return char
//         }

//     })
// //   return splitSTR.join('')

//  }
//  const str = disemvowel('hellO thERe')
//  console.log(str)
//     console.log(splitSTR.join(''))
//  }
//  disemvowel('hellO thERe')


// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     return  str.split('').map(char => {
//       if (!vowels.includes(char.toLowerCase())) {
//         return char
//       }
//     }).join('')
//   }



