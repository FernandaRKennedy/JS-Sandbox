// // 53
// //4 suits: spades, diamonds, heats, clubs
// //2-10 j  q k a

// // const suits = ['Spades', 'Hearts ', 'Diamonds', 'clubs']
// // const values = [ '2','3','4','5','6','7','8','9','10','jack','queen','king','ace']

// //forEach, 
// // const deckOfcards =[];

// // suits.forEach(suit => {
// //     values.forEach(value =>{
// //         console.log(`${suit}: ${value}`);
// //     })
// // })

// // only the deckof cards 

// //refector the card to be a class 
// class Card {
//     constructor(value , suit) {
//     this.value = value
//     this.suit = suit
//     }
    
// }
// //cards, discard pile, cards remaning, order, shuffeling
// class Deck {
//     constructor(){
//        this.thiscardPile = [];
//        this.suits = ['Spades', 'Hearts ', 'Diamonds', 'clubs'];
//        this.values = [ '2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
//        this.deck = [] 
//        this.suits.forEach((suit) => {
//        this.values.forEach((value) => {
//         const card = new Card(suit, value);
//         this.deck.push(card);
//     })
// })
//     }
//     discardCards() {
//       const discardedCards = this.deck.splice(0, 5);
//       this.discardPile.push(...discardedCards);
//     }

//    shuffleDeck() {
//      let currentIndex = this.deck.length,
//       randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [this.deck[currentIndex], this.deck[randomIndex]] = [
//         this.deck[randomIndex],
//         this.deck[currentIndex],
//       ];
//     }
// }
// }
// const deck1 = new Deck();
// deck1.shuffleDeck();
// const deck2 = new Deck();
// // deck1.discardCards()

// console.log(deck1)
// console.log(deck1.deck.length);
// console.log(deck1.discardPile);

// console.log(deck2);

// function shuffle(array) {
//     let currentIndex = this.deck.length,  randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {

//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       // And swap it with the current element.
//       [this.deck[currentIndex], this.deck[randomIndex]] = [
//         this.deck[randomIndex], this.deck[currentIndex]];
//     }
 


   




// const deckOfcards1 =[];
// suits.forEach(suit => {
//     values.forEach(value =>{
//         const card = new Card(suit,value);
//        deckOfcards1.push(card);
//         // const card ={
//         //  suit,//can be used only like this 
//         //     value: value 
//         // }
//         deckOfcards1.push(card)
//     })
// })
// console.log(deckOfcards1)





// how dont do it 
//   const twoOfSpades ={
//      suit: 'spades',
//      value: '2',
//   }

// const treeOfSpades = ...


