export default (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z \d-]/g, "") //leaves only a-z, 0-9, and -
    .replace(/-+/g, " ") // changes all sets of - to one space
    .trim()
    .replace(/ +/g, "-"); // changes all sets of spaces to one -
};
