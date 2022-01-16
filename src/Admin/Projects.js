import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import ProjectModal from "./ProjectModal";

const project_data = [
  {
    id: 7,
    name: "Project1",
    summary: "Summary1",
    tech_used: "React",
    link: "www.google.com",
    date_created: "01.05.2022",
  },
  {
    id: 8,
    name: "Project2",
    summary: "Summary2",
    tech_used: "React",
    link: "www.googlew.com",
    date_created: "01.05.2022",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [projects, updateProjects] = React.useState(project_data);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const render_projects = projects.map((pr) => {
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
