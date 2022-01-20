const globalUser = (state = "user_100", action) => {
  switch (action.type) {
    case "SETGLOBALUSER":
      return action.paload;
    default:
      return state;
  }
};

export default globalUser;
