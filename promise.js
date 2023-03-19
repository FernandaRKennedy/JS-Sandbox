// const myPromise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         // resolve("promise resolved")
//         reject("error")
//     },3500)
// })
// // console.log(myPromise)

// //.then  is only used with resolve 
// myPromise
//     .then( (val) =>{
//     console.log(val)
// })
//   .catch(err => {
//     console.log(err)
//   })
// const data = fetch("https://api.github.com/user/fernandarkennedy")
//   .then((res) =>{
//     return res.json()
//   })
//     .then((data)=>{
//     console.log(data)
//    })


function demo(time){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('complete')
      },time)
    })
}


demo(5000)
.then((val)=> console.log('resolve',val))//show the resolved part
.catch(err => console.log('ERROR',err))//catch error
    // promise { <pending>} means the databesa still runing