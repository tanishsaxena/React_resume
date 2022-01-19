const project_data = [
  {
    id: 1,
    name: "Project1",
    summary: "Summary1",
    tech_used: "React",
    link: "www.google.com",
    date_created: "01.05.2022",
  },
  {
    id: 2,
    name: "Project2",
    summary: "Summary2",
    tech_used: "React",
    link: "www.googlew.com",
    date_created: "01.05.2022",
  },
];

const addProject = (state = project_data, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return state + action.payload;
    default:
      return state;
  }
};

export default addProject;
