/*Code solutions here
for (let age = 30; age < 40; age ++){
    console.log(`I/'m ${age} years old. Happy birthday to me!`);
     
} */

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`); 
  }
  return gifts;
}
wrapGifts(gifts); */

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length ; i++) {
     console.log(messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`));
    debugger;
    }
    return messages;
  } 
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

/*let countDown = 11;
while (countDown > 0){
    countDown-- 
console.log(countDown)
} */

function countDown(){
    let countDown = 11;
    let i = 0;
    while(countDown > i) {
        countDown --;
        console.log(countDown);
    }
}