export const secondsToTimer = (sec: number) => {
  if (sec >= 3599) {
    return '59:59'
  }
  return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`
}
