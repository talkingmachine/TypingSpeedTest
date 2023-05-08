export const getAccuracy = (correctAnswers: number, mistakes:number) => {
  if (correctAnswers > 0) {
    return Math.round(correctAnswers * 100 / (correctAnswers + mistakes));
  } else {
    return 100;
  }
}

export const getTypingSpeed = (timerSeconds:number, correctAnswers:number) => Math.round(60 / timerSeconds * correctAnswers)
