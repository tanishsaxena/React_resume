import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import ProjectModal from "./ProjectModal";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../Firebase/config";
import { collection, query, getDocs } from "firebase/firestore";
import { addProject } from "../Actions";

var firstload = true;

const Projects = () => {
  const guser = useSelector((state) => state.globalUser);
  const dispatch = useDispatch();

  const project_data = useSelector((state) => state.addProject);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(async () => {
    if (firstload) {
      firstload = false;
      const q = query(
        collection(db, "data", "users", "user_config", guser, "Projects")
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        var p_data = {
          id: doc.data().id,
          name: doc.data().name,
          summary: doc.data().summary,
          tech_used: doc.data().tech_used,
          link: doc.data().link,
          date_created: doc.data().date_created,
        };
        dispatch(addProject(p_data));
      });
    }
  }, []);

  const render_projects = project_data.map((pr) => {
    return (
      <Accordion
        key={pr.id}
        expanded={expanded === "panel" + pr.id}
        onChange={handleChange("panel" + pr.id)}
      >
        <AccordionSummary
          expandIcon={<BsFillArrowDownCircleFill />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {pr.name}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {pr.tech_used}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{pr.summary}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <div>
      <ProjectModal />
      {render_projects}
    </div>
  );
};

export default Projects;
