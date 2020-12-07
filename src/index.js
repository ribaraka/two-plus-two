import BigNumber from 'bignumber.js';

let input1 = document.createElement('input');
input1 = document.body.appendChild(input1);

let input2 = document.createElement('input');
input2 = document.body.appendChild(input2);

let button = document.createElement('button');
button.textContent = 'Посчитать';
button = document.body.appendChild(button);

const firstInputError = document.createElement('div');
firstInputError.className = 'error-message';

const secondInputError = document.createElement('div');
secondInputError.className = 'error-message';

const result = document.createElement('div');
result.id = 'result';

function isNumber(value) {
  if (!value) {
    return false;
  }

  const number = Number(value);
  if (Number.isNaN(number)) {
    return false;
  }

  return number;
}

button.addEventListener('click', () => {
  if (!isNumber(input1.value)) {
    firstInputError.textContent = 'Это не число';
    document.body.insertBefore(firstInputError, input2);
  } else {
    firstInputError.remove();
  }

  if (!isNumber(input2.value)) {
    secondInputError.textContent = 'Это не число';
    document.body.insertBefore(secondInputError, button);
  } else {
    secondInputError.remove();
  }

  if (isNumber(input1.value) && isNumber(input2.value)) {
    const sum = new BigNumber(input1.value).plus(input2.value);
    result.textContent = `${sum}`;
    document.body.appendChild(result);
  } else {
    result.remove();
  }
});
