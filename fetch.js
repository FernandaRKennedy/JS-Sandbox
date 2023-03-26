async function getUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()// waiting to the server sent the information back 
        console.log(data)
    
        displayUser(data)
    } catch (error) {
        console.log('error', error)
    }
}

// async function getUserData(username) {
//     const response = await fetch(`https://api.github.com/users/${username}`)
//     const data = await response.json()
//     console.log(data)
    
//     displayUser(data)
// }


// name (h1), avatar_url (img), created_at, location
function displayUser(userData) {
    const userContainer = document.createElement('div')
    userContainer.id ='user'
    
    const name = document.createElement('h1')
    name.textContent = userData.name
    userContainer.appendChild(name)

    const dateJoined = document.createElement('h3')
    name.textContent = `DateJoined : ${new Date(userData.created_at).toLocaleDateString('en-US')}` 
    userContainer.appendChild(dateJoined)

    const profilePic = document.createElement('img')
    profilePic.src = userData.avatar_url
    profilePic.alt = 'profile image'
    userContainer. appendChild(profilePic)

    const profileUrl = document.createElement('a')
    profileUrl.textContent =
    profileUrl.href = userData.html_url
    profileUrl.target = 'blank'
    userContainer.appendChild(profileUrl)

   
    document.body.appendChild(userContainer)
}

function clearUser(){
    const user =  document.getElementById('user')
    if (user) user.remove()

}


document.addEventListener('submit', (e) =>{
    e.preventDefault()
    clearUser()
    const username = document.getElementById('username-input').value
    getUserData(username)

    document.getElementById('username-input').value = ''
})


//get, post, put,patch, delete

fetch('', {
    method:, 
    headers:{
    
    }, 
    body:{
        
    }
})












// getUserData('FernandaRKennedy')





// function getUserData(username){
//     fetch(`https://github.com/users/${username}`)
//     .then(res => res.json())//get a respond and chanching from json
//     .then(data => console.log(data))
//     .catch(err => console.log('ERR',err))
// }


// const data = {
//    name: 'fernanda',
//    age: 29
// }
// getUserData('FernandaRKennedy')