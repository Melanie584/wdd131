function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function submitHandler(event) {
  event.preventDefault();

  let errorMsg = '';
  document.querySelector('.errors').textContent = '';

  const cardNumRaw = document.querySelector('#creditCardNumber').value.trim();
  const cardNum = cardNumRaw.replace(/\s+/g, '');

  if (!/^\d{16}$/.test(cardNum)) {
    errorMsg += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(cardNum)) {
    errorMsg += 'Card number is not valid\n';
  }

  const expMonth = Number(document.querySelector('#expMonth').value);
  const expYear = Number(document.querySelector('#expYear').value);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  if (
    expYear < currentYear ||
    (expYear === currentYear && expMonth < currentMonth)
  ) {
    errorMsg += 'Card is expired\n';
  }

  if (errorMsg !== '') {
    document.querySelector('.errors').textContent = errorMsg;
    return;
  }

  document.querySelector('#cardform').submit();
}

document.querySelector('#cardform').addEventListener('submit', submitHandler);