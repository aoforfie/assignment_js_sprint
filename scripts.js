// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
//http://www.jstips.co/en/javascript/calculate-the-max-min-value-from-an-array/
  largestEl: function(array){  
    // your code here    
    return Math.max.apply(null,array);
  },
  // http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
  reversed : function reverse (string) { 
    // your code here
    return string.split('').reverse().join('');
  },
//https://en.wikipedia.org/wiki/Snake_case
//http://epeli.github.io/underscore.string/
  loudSnakeCase: function(sentence){  
    // your code here
    return camelize(sentence).titleize().underscored();
  },
 //https://stackoverflow.com/questions/4025893/how-to-check-identical-array-in-most-efficient-way
  compareArrays: function arraysEqual(array1,array2){ 
    // your code here (replace the return)
    if(array1.length !== array2.length)

        return false;

      for(var i = array1.length; i--;) {

        if(array1[i] !== array2[i])

            return false;    }

    
    return true; 
  },

  fizzBuzz: function(digit){  
    // your code here
  

        var digit = prompt ("Please input a number:");

        for ( var digit = 1; digit < digit.length; digit ++ ) {

          if ( digit % 15 === 0) {

            return "FIZZBUZZ";

        }

          
          else if (digit % 3 === 0) {

            return "FIZZ";

          }

          

          else if (digit % 5 === 0) {

            return "BUZZ";

          }

          

          else {

            return digit;

          }

        }

      }

      

      // https://stackoverflow.com/questions/9914216/how-do-i-separate-an-integer-into-separate-digits-in-an-array-in-javascript

      // const n = 123456;

      Array.from(digit.toString()).map(Number);

  },

  myMap: function(els,fxn){  
    // your code here
        var els =array.from(array.toString()).map(Number);

        var fxn = function {

          return ;

        };

    },

  primes: function(PDigit){  
    // your code here
     //https://stackoverflow.com/questions/30150251/find-all-prime-numbers-from-array

         for (int j=2; j<array[i]; j++){

    if(array[PDigit]%j==0){

            isPrime = false;

            break;

        }
  },
}
