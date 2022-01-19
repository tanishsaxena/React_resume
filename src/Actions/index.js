export const addProject = (data) => {
  return { type: "ADD_PROJECT", payload: data };
};

export const setLoaderOn = () => {
  return { type: "SETLOADERON" };
};

export const setLoaderOff = () => {
  return { type: "SETLOADEROFF" };
};
