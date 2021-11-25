// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

//alert("calculator.js: Hello World")

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

// console.log(calculator.dataset)
// console.log(keys.dataset)
// console.log(display.dataset)

console.log(keys)
console.log(display)

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      // Do something
      const key = e.target
      //we can use the data-action attribute to determine the type of key that is clicked.
      const action = key.dataset.action

      if (!action) {
        console.log(key)
      }
       
    }
   })