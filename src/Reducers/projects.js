import { db } from "../Firebase/config";
import { doc, setDoc } from "firebase/firestore";

const project_data = [];

const Adddataintofirebase = async (data) => {
  await setDoc(
    doc(db, "data", "users", "user_config", "user_100", "Projects", data.id),
    data
  );
};

const addProject = (state = project_data, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      Adddataintofirebase(action.payload);
      var temp = [...state, action.payload];
      return temp;
    case "DELETE_PROJECT":
      var index = -1;
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          index = i;
          break;
        }
      }

      state.splice(index, 1);
      return state;
    default:
      return state;
  }
};

export default addProject;
