export const getText = () => {
  let res;
  fetch('https://baconipsum.com/api/?' + new URLSearchParams({
    type: "meat-and-filler",
    sentences: "1",
    format: "text",
  }))
    .then(response => response.text())
    .then(text => res = text)
  
    return res;
}