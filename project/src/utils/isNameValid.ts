export const isNameValid = (name: string) => {
  if (name.length < 2) {
    console.log('Your Name is too short(');
    return false;
  }
  if (name.length > 15) {
    console.log('Your Name is too long(');
    return false;
  }
  
  return true;
};
