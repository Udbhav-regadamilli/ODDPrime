//To know how many one digit difference numbers are there in between 1 to 10,000,000.

/**
 * class OneDigitDifferenceNumber contains all the operations of
 * the one digit difference numbers.
 */
class OneDigitDifferencePrimeNumber{

    /**
     * To check if the number is within the constraints or not.
     * @param {Number} number
     */
    check(number){
        if(number < 0){
            throw new Error("Please provide a positive Number.")
        }

        if(typeof number != 'number'){
            throw new Error("Please provide a Number type input.")
        }
    }
    
    /**
     * To check if the 'number' is a one digit difference or ODD number.
     * @param {Number} number
     * @returns true if the number is one digit difference number.
     */
    isOneDigitDifferenceNumber(number){
        this.check(number)

        //number less than 10 is not a ODD number.
        if(number < 10){
            return false
        }

        let n = number.toString()

        for(let i=0; i<n.length-1; i++){
            if(Math.abs(Number(n[i]) - Number(n[i+1])) !== 1){
                return false
            }
        }
        return true
    }

    /**
     * To check if the 'number' is prime or not.
     * @param {Number} number ,the number we need to check.
     * @returns true ,If the number is prime.
     */
    isPrime(number){

        //2 is the only even prime number.
        if(number == 2){
            return true
        }

        //Every other even number is not prime.
        if(number%2 == 0){
            return false
        }

        //Every number has it's factors till the square root of the number.
        for(let i=3; i<=Math.floor(Math.sqrt(number)); i+=2){
            if(number%i === 0){
                return false
            }
        }
        return true
    }
}

function testing(){
    try {

        let oddPrime = [] //To store all the ODD prime numbers.
        ODD = new OneDigitDifferencePrimeNumber()

        //To check every number between 0 to 10,000,000
        for(let inputNumber = 0; inputNumber <= 10000000; inputNumber++){
            if(ODD.isOneDigitDifferenceNumber(inputNumber) && ODD.isPrime(inputNumber)){
                oddPrime.push(inputNumber)
            }
        }

        console.log(`\nThe one digit differenece numbers between 1 to 10,000,000 is: ${oddPrime.length}`)
        console.log(oddPrime)

    } catch (error) {

        console.log(`\nError: ${error.message}`)

    }
}

testing()