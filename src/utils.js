export function isPositiveNumber(number) {
    const positiveNumberRegex = /^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/;
    return positiveNumberRegex.test(number);
  }