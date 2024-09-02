export const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60) - hours * 60;
  const seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);
  const displayTimer = (time) => (time < 10 ? `0${time}` : time);

  return `${displayTimer(hours)}:${displayTimer(minutes)}:${displayTimer(
    seconds
  )}`;
};
