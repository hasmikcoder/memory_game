document.addEventListener('DOMContentLoaded', () =>{

    //array of cards
    const cardArray = [
        {
            name:'fries',
            img: 'images/fries.png'
         },
         {
            name:'fries',
            img: 'images/fries.png'
         },
         {
            name:'cheeseburger',
            img: 'images/cheeseburger.png'
         },
         {
            name:'cheeseburger',
            img: 'images/cheeseburger.png'
         },
         {
            name:'hotdog',
            img: 'images/hotdog.png'
         },
         {
            name:'hotdog',
            img: 'images/hotdog.png'
         },
         {
            name:'ice-cream',
            img: 'images/ice-cream.png'
         },
         {
            name:'ice-cream',
            img: 'images/ice-cream.png'
         },
         {
            name:'milkshake',
            img: 'images/milkshake.png'
         },
         {
            name:'milkshake',
            img: 'images/milkshake.png'
         },
         {
            name:'pizza',
            img: 'images/pizza.png'
         },
         {
            name:'pizza',
            img: 'images/pizza.png'
         }
  ]

const grid = document.querySelector('.grid');
  
//creating board
//using a for loop to loop over the card array and for each card creating an image element

function createBoard(){
for (let i = 0; i< cardArray.length; i++) {
   const card = document.createElement('img')
   card.setAttribute('src', 'images/blank.png')
   card.setAttribute('data-id', i)
   //card.addEventListener('click', flipCard)
   grid.appendChild(card)
 }
}

createBoard()
})