// format date
module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  // pluraize "comment" and "point" only when there are multiple comments/points
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },
  format_url: (url) => {
    return url
      .replace("http://", "")
      .replace("https://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];
  },
};
