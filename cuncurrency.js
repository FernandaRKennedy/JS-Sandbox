//concurrency  means runing all in the same time  
const { performance } = require('perf_hooks');
async function getData(username){
    const res = await fetch ('https://github.com/'`${username}`)
    const data = await res.json()

    return data
}
//async
 async function main(){
    const starTime = performace.now()
    
    //  await getData('FernandaRKennedy')
    //  await getData('naaltunian')
    //  const endTime = performace.now()
    //  console.log('time to complete', endTime - starTime)

    //cuncurrently  is usedn when you need to do a lot of the same ting and the return value will not interfir on the other
    const userData = await Promise.all([
        getData('FernandaRKennedy'),
        getData('naaltunian')
    ])
   userData.forEach(user => {
    console.log(user.login)
   })
}
 const endTime = performace.now()
 console.log('time to complete', endTime -starTime)
 main()