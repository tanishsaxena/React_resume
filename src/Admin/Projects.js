import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { BsFillArrowDownCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import ProjectModal from "./ProjectModal";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../Firebase/config";
import { collection, query, getDocs, doc, deleteDoc } from "firebase/firestore";
import { addProject, deleteProject } from "../Actions";
import EmptyDisplay from "./EmptyDisplay";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

var firstload = true;

const options = ["Delete"];

const Projects = () => {
  const guser = useSelector((state) => state.globalUser);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (event) => {
    console.log(event.target.id);
    //dispatch(deleteProject(id));

    setAnchorEl(null);
  };

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

  let opt = options.map((option) => (
    <MenuItem key={option} id={"d" + pr.id} onClick={handleClose}>
      {option}
    </MenuItem>
  ));

  var render_projects = project_data.map((pr) => {
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
          {pr.id}
          <>
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <BsThreeDotsVertical />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: "20ch",
                  },
                }}
              >
                {opt}
              </Menu>
            </div>
          </>
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

  if (render_projects.length === 0) {
    render_projects = <EmptyDisplay />;
  }

  return (
    <div>
      <ProjectModal />
      {render_projects}
    </div>
  );
};

export default Projects;
