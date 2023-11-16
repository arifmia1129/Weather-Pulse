/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAccessToken = () => {
  return process.env.TOKEN;
};

export const getLocationInfo = () => {
  const location = JSON.parse(localStorage.getItem("location") as string);

  const modifiedLocation = location?.split("-");

  if (!modifiedLocation) {
    return null;
  }

  return {
    lat: modifiedLocation[0],
    lon: modifiedLocation[1],
  };
};
