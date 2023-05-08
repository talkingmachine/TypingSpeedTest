export const getText = () => (
  fetch('https://baconipsum.com/api/?' + new URLSearchParams({
    type: "meat-and-filler",
    sentences: "1",
    format: "text",
  }))
    .then(response => response.text())
)