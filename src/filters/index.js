export function wordSlice(str) {
  if (str.length > 100) {
    str = str.slice(0, 97) + '...';
  }
  return str;
}