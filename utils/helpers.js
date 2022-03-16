module.exports = {
  format_time: (date) => {

    const options = {
      timeZone:'America/New_York',
      hour12 : true,
      hour:  "2-digit",
      minute: "2-digit",
    };

    return date.toLocaleTimeString('en-US', options);
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear()
    }`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
};
