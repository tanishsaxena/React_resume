import { db } from "../Firebase/config";
import { doc, setDoc } from "firebase/firestore";
const project_data = [
  {
    id: "1",
    name: "Project1",
    summary: "Summary1",
    tech_used: "React",
    link: "www.google.com",
    date_created: "01.05.2022",
  },
  {
    id: "2",
    name: "Project2",
    summary: "Summary2",
    tech_used: "React",
    link: "www.googlew.com",
    date_created: "01.05.2022",
  },
];

const adddataintofirebase = async (data) => {
  await setDoc(
    doc(db, "data", "users", "user_config", "user_100", "Projects", data.id),
    data
  );
};

const addProject = (state = project_data, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      adddataintofirebase(action.payload);
      var temp = [...state, action.payload];
      return temp;
    default:
      return state;
  }
};

export default addProject;
