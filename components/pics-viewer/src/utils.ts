export const formatUnit = (val: string | number): string => {
  if (typeof val === "number") val = String(val) + "px";
  return val;
};

export const isDataURL = (str: string) => {
  const regex =
    /^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i;
  return !!str.match(regex);
};
