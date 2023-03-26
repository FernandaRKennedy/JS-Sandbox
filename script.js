
// const paragraphTag = document.getElementById('paragraph') 
// console.log(paragraphTag)

// const hellpTag = document.getElementById('hellp')//#
// hellpTag.style.color= 'green'
// // console.log(hellpTag)  

// const paragraphTags = document.getElementsByClassName('paragraph')//.
// console.log(paragraphTags)

// for (let i = 0; i <paragraphTag.leght; i++){
//     console.log(paragraphTag [i].textContent)
// }

// Array.from(paragraphTags).forEach(tag =>{
//     tag.style.color = 'gold'
//     // console.log(text.textContent)
// })

// const tags = document.getElementsByTagName('p')
// console.log(tags)

// const queryTag = document.querySelector('#hellp')
// console.log(queryTag)

// const queryTags = document.querySelectorAll('.p')
// console.log(queryTags)


//sellect all h1

//  const allH1 = document.getElementsByTagName('h1')
// //  const allH1 = document.querySelectorAll('h1')

// // select all tags woth class of paragraph 
// const pTags = document.getElementsByClassName('paragraph')
// const pTags = document.querySelectorAll('paragraph')

// querySelector  returns the first matching element 







// professor code 
//const helloTag = document.getElementById('hello') // #
// helloTag.style.color = 'gold'

// const paragraphTags = document.getElementsByClassName('paragraph') // .
// console.log(paragraphTags)

// Array.from(paragraphTags).forEach(tag => {
//     tag.style.color = 'pink'
//     tag.style.fontSize = '50px'
// })

// const tags = document.getElementsByTagName('p')
// console.log(tags)

// const queryTag = document.querySelectorAll('.paragraph')
// console.log(queryTag)

// for (let i = 0; i < paragraphTags.length; i++) {
//     console.log(paragraphTags[i].textContent)
// }






  
// const div = document.outerHTML()
// const header = document.createElement('h1')
// header.textContent = 'hello'
// document.body.appendChild(header)

const div = document.createElement('div')
div.innerHTML = '<p>hello</p>'
document.body.appendChild(div)

// const pTag = document.createElement('p')
// pTag.textContent = 'test'
// const container = document.querySelector('.container')
// container.appendChild(pTag)

// const names = ['nick', 'fernanda', 'athena']
// // add all names to the screen efficiently ideally 

// const div = document.createElement('div')
// div.innerHTML = '<p> nick, fernanda, athena</p>'
// document.body.appendChild(div)

const names = ['nick', 'fernanda', 'athena'] //data 
const container = document.querySelector('.container')//select

names.forEach(name =>{
    const tag = document.createElement('h2')
    tag.textContent = name 
    tag.id = name 
    tag.style.color = 'blue'

    tag.addEventListener('click', ()=>{
        tag.style.textDecoration ='line-through'
        // tag.remove()
    })

    container.appendChild(tag)
}) // add all names to the screen efficiently ideally

const img = document.createElement('img')
img.src ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.inquirer.com%2Fphilly%2Fliving%2Ffat-cat-diet-workout-weight-loss-20181023.html&psig=AOvVaw1Vd6Zib0-RmhNX-w6jcgU4&ust=1679532549493000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPjpsLmo7v0CFQAAAAAdAAAAABAI'
// img.alt = 'cat'
img.className = 'container'
document.body.appendChild(img)



