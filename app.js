let fullname = 'Jose I. Escamilla'
console.log(fullname)

/*Celcius-to-Fahrenheit Formula:
      F = C x 1.8 + 32
*/
// Took out C-F Formula to attempt F-C Formula

/*Fahrenheit-to-Celcius Formula:
      C = (F - 30) / 2 
 Because PEMDAS
*/
let Fahrenheit = 50;
let Celcius = (Fahrenheit - 30) / 2;
console.log(Celcius);

let bool = '1' == 1
console.log(bool)

let loggedin = true
let subscribed = false

subscribed && loggedin ? `show the homepage` : `hide the homepage`

if (subscribed === false) {
    console.log('tell user to upgrade their account')
}
else {
    console.log('tell user to log into account')
}

// Learning to calculate with J.S.

let cash = 360
let price = 300
let isStoreOpen = true
let val = `Jose I. Escamilla`
let hot = false

if (val) {
    console.log(!!val)
}
if (cash > price) {
    console.log(`You paid extra, $${cash - price} is your change`)
}
else if (cash === price) {
    console.log("We appreciate your business. Have a wonderful day!")
}
else {
    console.log(`Please deposit $${price - cash} `)
}
/*let str = cash>=price&&isStoreOpen?`give receipt`:`do not give receipt`
console.log(str);
---
I attempted this green line of code first, and then wrote what is underneath as I followed the video only to be proven correct later on! They both function as intended.
*/
cash >= price && isStoreOpen ? console.log(`give receipt`) : console.log(`do not give receipt`)

hot ? console.log(`Weather is hot outside!`) : console.log(`Weather is cold!`)

/* Can loop this way, but is commonly done with the `for` example that follows. i=i+1 shorthand is i++ or ++i
let count=1;
while (count<=5) {
    console.log(count)
    count = count+1;
}
*/
/*for (let i=0; i<=3;++i) {
    console.log(i)
}*/


/** Write a for-loop that loops 1 to 20.
 *  for (let i=1; i<=20; ++i) {console.log(i)}
 * 
 *If the number is divisible by 3, print "Frontend."
 *  if (i%3===0){console.log(`${i}-->Frontend`)}
 * 
 *If the number is divisible by 5, print "Simplified."
 *  if(i%5===0){console.log(`${i}-->Simplified`)}
 * 
 * If the number is divisible by 3 & 5, print "Frontend Simplified."
 *  if (i%3===0 && i%5===0){console.log(`${i}-->Frontend Simplified`)}
 * 
 * If the number is not divisible by either 3 or 5, print the number.
 *  else {console.log(`${i}-->${i}`)}
 */

for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i}->Frontend Simplified`)
    }
    else if (i % 3 === 0) {
        console.log(`${i}->Frontend`)
    }
    else if (i % 5 === 0) {
        console.log(`${i}-> Simplified`)
    }
    else {
        console.log(`${i}-->${i}`)
    }
}

/**To loop over every character in the string, use `i < str.length;`
 * 
 * Print out every character in the string "Frontend Simplified."
 * Start with a const str = "Frontend Simplified"
 * 
 *  for (let i = 0; i < str.length; ++i){console.log(str[i])}
 * Must put "i" in brackets, as you will do many times in the future.
 *  You just discovered a dynamic for loop, by accessing the character "i" in a string with `(str[i])`
 * 
 * This will print out every letter from "Frontend Simplified" in it's own block! Including the space, and can be used for any string!
 */

// Start @ 1:16:00 for next lesson in functions of javascript!