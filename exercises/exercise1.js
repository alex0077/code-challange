let output = [];

const printNumbers = (initial, last) => {
  if (initial <= last) {
    if (initial % 3 === 0 && initial % 5 === 0) output.push('Visual Nuts')
    else if (initial % 3 === 0) output.push('Visual')
    else if (initial % 5 === 0) output.push('Nuts')
    else output.push(initial);
    printNumbers(initial + 1, last);
  } 
  return output;
}

export { printNumbers };
