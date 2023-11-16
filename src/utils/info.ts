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

export function convertToAMPM(time24: string) {
  // Split the time string into hours, minutes, and seconds
  const [hours] = time24.split(":").map(Number);

  // Determine whether it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert the hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Format the time in AM/PM format
  const time12 = `${hours12} ${period}`;

  return time12;
}
