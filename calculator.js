const readlineSync = require('readline-sync');

const opObj = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const getOperation = (opList) => {
  let operation = readlineSync.question(
    'What operation would you like to perform? '
    );
  
  while (!opList.includes(operation)) {
    console.log(
      `Invalid operation. Please enter a valid operation: ${opList.join(', ')}`
    );
    operation = readlineSync.question(
      'What operation would you like to perform? '
      );
  }
  return operation;
  };

function performCalculation(opObj, num1, num2, operation) {
  return opObj[operation](num1, num2);
}

function getValidNumber(promptText, operation = true) {
  let number;
  do {
    number = parseFloat(
      readlineSync.question(`Enter the ${promptText} number: `)
      );
    if (isNaN(number)) {
      console.log('Invalid input. Please enter a number.');
    } else if (operation === '/' && promptText === 'second' && number === 0) {
      console.log('Division by 0!!!');
      console.log('Invalid input. Please enter a number');
    }else {
      break;
    }
   } while (true);
   return number;
}

    const calculator = (opObj) => {
      const operationTypes = Object.keys(opObj);
      const operation = getOperation(operationTypes);
      const num1 = getValidNumber('first');
      const num2 = getValidNumber('second', operation);
      const result = performCalculation(opObj, num1, num2, operation);
      console.log(`The result of ${num1} ${operation} ${num2} is ${result}`);
    }

calculator(opObj);
