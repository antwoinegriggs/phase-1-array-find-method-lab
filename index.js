const superbowlWin = function (array) {
  let yearFinder = array.find((record) => record.result === "W");
  if (yearFinder) {
    return yearFinder.year;
  } else {
    return undefined;
  }
};
