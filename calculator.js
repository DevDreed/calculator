const result = document.getElementById('result');

document.getElementById('add').addEventListener('click', function(){
  let num1 = getValue('num1');
  let num2 = getValue('num2');
  result.innerHTML = compute(num1,num2,add);
});
document.getElementById('subtract').addEventListener('click', function(){
  let num1 = getValue('num1');
  let num2 = getValue('num2');
  result.innerHTML = compute(num1,num2,subtract);
});
document.getElementById('multiply').addEventListener('click', function(){
  let num1 = getValue('num1');
  let num2 = getValue('num2');
  result.innerHTML = compute(num1,num2,multiply);
});
document.getElementById('divide').addEventListener('click', function(){
  let num1 = getValue('num1');
  let num2 = getValue('num2');
  result.innerHTML = compute(num1,num2,divide);
});

function getValue(field){
  let value = Number(document.getElementById(field).value);
  return value;
}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(num1, num2){
  return num1 * num2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

 function add(num1, num2) {
   return num1 + num2;
 }


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

 function subtract(num1, num2) {
   return num1 - num2;
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

 function divide(num1, num2) {
   return num1 / num2;
 }


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function compute(num1,num2,functionToExecute){
   var finalValue = functionToExecute(num1, num2);

  return finalValue;
 }
