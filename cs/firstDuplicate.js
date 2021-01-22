function firstDuplicate(a) {
  let seen = new Set();
  
  for (let i = 0; i < a.length; i += 1) {
    if (seen.has(a[i])) {
      return a[i]
    } else {
      seen.add(a[i])
    }
  }
  return -1
}
