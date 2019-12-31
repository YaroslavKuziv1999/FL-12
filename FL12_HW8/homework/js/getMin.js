const myArray = [3, 0, -3];

function getMin(array) {
   let min = array[0];
   array.forEach(element => {
       if(element<min) {
           min = element;
       }
   });
   return min;
}

console.log(getMin(myArray));