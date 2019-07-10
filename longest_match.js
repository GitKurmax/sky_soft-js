const text = 'повиннавийтипідстрокамаксимальноїдовжинизсимволамиякінеповторюються';
let resultArray = [''];

function longestMatch(text) {
  let startText = text;
  let subString;
  let string = '';

  for (let i = 0; i < startText.length; i++) {
    if (startText.includes(text[i], i + 1)) {
      subString = text.slice(0, text.indexOf(startText[i], i + 1));
      string += startText[i];
      startText = subString;
    } else {
      string += startText[i];
    }
  } 

  if (string.length === resultArray[resultArray.length - 1].length) {
    resultArray.push(string);
  }

  if (string.length > resultArray[resultArray.length - 1].length) {
    resultArray = []
    resultArray.push(string);
  }

  if (text.length < resultArray[resultArray.length - 1].length) {
    return;
  }

  longestMatch(text.slice(1));
  return resultArray;
}

console.log(longestMatch(text));
