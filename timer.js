// TIMER FUNCTIONS
// Challenge 1
// function printHello(delay){
//  console.log(`Hello after ${delay} seconds`)
// }

// setTimeout(printHello, 4 * 1000, 4);
// setTimeout(printHello, 8 * 1000, 8);

// Challenge 2
// let countDown = 0;
// const afterOneSecond = setInterval(() => {
//   console.log(`Hello world ${countDown}`);
//   countDown++;

//   if (countDown === 5) {
//     clearInterval(afterOneSecond);
//     console.log("Done!!");
//   }
// }, 1000);

// Challenge 3
let delay = 5
const printHelloWorld = setInterval(()=>{
    console.log("Hello world");
    delay++;
},delay * 1000)