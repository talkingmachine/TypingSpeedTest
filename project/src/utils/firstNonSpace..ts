export const firstNonSpace = (str: string, selectedChar: number) => {
  let res = selectedChar;
  while (str[res] === ' ') {
    res += 1;
  }
  return res;
}