function format(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const convertedSeconds = Math.floor(seconds % 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(convertedSeconds)}`;
}

module.exports = {
  format,
};
