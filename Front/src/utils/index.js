/* eslint-disable import/prefer-default-export */
export const getHighestId = (dataArray) => {
  let highestId = 0;

  if (dataArray.length > 0) {
    const ids = dataArray.map((item) => item.id);
    highestId = Math.max(...ids);
  }
  return highestId;
};
