// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

//alert("calculator.js: Hello World")

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')
console.log(calculator.dataset)

keys.addEventListener('click', e => 
    {
        if (e.target.matches('button')) 
        {
            // Do something
            const key = e.target
            //we can use the data-action attribute to determine the type of key that is clicked.
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            const previousKeyType = calculator.dataset.previousKeyType

            // Remove .is-depressed class from all keys
            //Array.from(key.parentNode.children)
            //.forEach(k => k.classList.remove('is-depressed'))

            //If the key does not have a data-action attribute, it must be a number key
            if (!action) 
            {
                console.log(key)
                //If the calculator shows 0, we want to replace the calculator’s display with the textContent of the clicked key. 
                //We can do so by replacing the display’s textContent property.
                if (displayedNum === '0' || previousKeyType === 'operator')
                {
                    display.textContent = keyContent
                }
                //If the calculator shows a non-zero number, we want to append the clicked key to the displayed number. 
                //To append a number, we concatenate a string
                else 
                {
                    display.textContent = displayedNum + keyContent
                }
                
            }
            //If the key has a data-action that is either add, subtract, multiply or divide, 
            //we know the key is an operator.
            if ( action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') 
            {
                console.log(action)
                key.classList.add('is-depressed')
                // Add custom attribute
                calculator.dataset.previousKeyType = 'operator'
                calculator.dataset.firstValue = displayedNum
                calculator.dataset.operator = action
            }
            
            //If the key’s data-action is decimal, clear, equal, we know the user clicked on 
            //the decimal, clear or equal key. 
            if (action === 'decimal') 
            {
                console.log('decimal key!')
                display.textContent = displayedNum + '.'
            }
            if (action === 'clear') 
            {
                console.log('clear key!')
                display.textContent = 0
                previousKeyType = ''
                calculator.dataset.previousKeyType = ''
            }
            if (action === 'calculate') 
            {
                console.log('equal key!')
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedNum
                display.textContent = calculate(firstValue, operator, secondValue)
        
               // previousKeyType = ''
                //calculator.dataset.previousKeyType = ''
            }

            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'))
    
        }
  
    }

    
)   

const calculate = (n1, operator, n2) => 
{
    // Perform calculation and return calculated value
    let result = ''

    if (operator === 'add') 
    {
         result = parseFloat(n1) + parseFloat(n2)
    } 
    else if (operator === 'subtract') 
    {
        result = parseFloat(n1) - parseFloat(n2)
    } 
    else if (operator === 'multiply') 
    {
        result = parseFloat(n1) * parseFloat(n2)
    } 
    else if (operator === 'divide')
    {
        result = parseFloat(n1) / parseFloat(n2)
    }

  return result
}