const changeLoader = (state = true, action) => {
  switch (action.type) {
    case "SETLOADERON":
      return true;
    case "SETLOADEROFF":
      return false;
    default:
      return state;
  }
};
export default changeLoader;
