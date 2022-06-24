const ops= prompt("Enter the operator(+,-,* or /):");
const num1= parseFloat(prompt("Enter the first number:"));
const num2= parseFloat(prompt("Enter the second number"));
let result;

if(ops=='+'){
    result= num1+num2;
}
else if(ops=='-'){
    result= num1-num2;
}
else if(ops=='*'){
    result= num1*num2;
}
else(ops=='/'){
    result= num1/num2;
}

console.log('&{num1} ${ops} ${num2} = ${result}');