import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProject } from "../Actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProjectModal = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [technology, setTechnology] = React.useState("");
  const [link, setLink] = React.useState("");
  const [date, setDate] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    var p_data = {
      id: new Date().toLocaleString().replaceAll("/", "."),
      name: name,
      summary: summary,
      tech_used: technology,
      link: link,
      date_created: "01.05.2022",
    };
    dispatch(addProject(p_data));
    handleClose();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Add New Project</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add Project Details
            </Typography>
            <div id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <TextField
                  label="Technology used"
                  variant="outlined"
                  value={technology}
                  onChange={(event) => {
                    setTechnology(event.target.value);
                  }}
                />
                <TextField
                  label="Link"
                  variant="outlined"
                  value={link}
                  onChange={(event) => {
                    setLink(event.target.value);
                  }}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
                <TextField
                  label="Summary"
                  variant="outlined"
                  value={summary}
                  onChange={(event) => {
                    setSummary(event.target.value);
                  }}
                />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProjectModal;
