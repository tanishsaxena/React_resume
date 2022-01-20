import { db } from "../Firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";

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
    default:
      return state;
  }
};

export default addProject;
