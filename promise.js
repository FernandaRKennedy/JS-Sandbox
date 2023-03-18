const myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        // resolve("promise resolved")
        reject("error")
    },3500)
})
// console.log(myPromise)

//.then  is only used with resolve 
myPromise
    .then( (val) =>{
    console.log(val)
})
  .catch(err => {
    console.log(err)
  })
// const data = fetch("https://api.github.com/user/fernandarkennedy")
//   .then((res) =>{
//     return res.json()
//   })
//     .then((data)=>{
//     console.log(data)
//    })
