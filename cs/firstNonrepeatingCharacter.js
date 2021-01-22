function firstNotRepeatingCharacter(s) {
  for (let i = 0; i < s.length; i += 1) {
    let char = s.charAt(i);
    if (s.indexOf(char) == s.lastIndexOf(char)) {
      return char;
    }
  }
  return "_";
}