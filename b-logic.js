// Declare variables with let or const (uppercase naming convention = global 'settings')
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

let customers = 1
const location = 'RSA'

// Missing let or const variable declaration
let shipping = null
let currency = '$' // Should probably be a string?

if (location === 'RSA') { shipping === 400 && currency === 'R' }

// if statement formatting is incorrect and strict operator needed for NAM conditional
if (location === 'NAM') {
    shipping = 600 
} else { 
    shipping = 800
    }

// Below variables need to be declared with either let or const
let shoes = 300 * 1
let toys = 100 * 5 // assignment operator needed not - (minus) operator
let shirts = 150 * 'NONE_SELECTED'  // Spelling of variable was also incorrect
let batteries = 35 * 2  // needs assignment operator
let pens = 5 * 'NONE_SELECTED' 

// I would create a total for the shopping items amount to be used in the if below:

// let total = shoes + toys + shirts + batteries + pens


// Remove && and format correctly
if (shoes + batteries + pens + shirts > 1000) {
	if (location === 'NAM' && customers < 2) {   // Strict equality
			if (location === RSA) {            // Strict equality
		    shipping = 0 || calcShipping
        }
	}
}

if (shipping = 0 && customers !== 1) { console.log(WARNING) }   // Fix ( ) parenthesis and NOT equality operator

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)




// ORIGINAL CODE:

// FREE_WARNING = 'Free shipping only applies to single customer orders'
// BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
// NONE_SELECTED = '0'

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600 
// else shipping = 800

// shoes = 300 * 1
// toys - 100 * 5
// hirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED' 

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null
