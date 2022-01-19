import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import ProjectModal from "./ProjectModal";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const project_data = useSelector((state) => state.addProject);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
