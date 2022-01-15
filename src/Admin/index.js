import React from "react";
import { useState, useEffect } from "react";
import { db } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    console.log(index);
    setSelectedIndex(index);
  };

  useEffect(async () => {
    const docRef = doc(db, "users", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }, []);

  return (
    <div>
      <Grid container sx={{ height: "100vh" }} padding={0} bgcolor="#0a1929">
        <Grid item xs={2} sx={{ borderRight: 1, padding: 1 }}>
          <Sidebar
            handleListItemClick={handleListItemClick}
            selectedIndex={selectedIndex}
          />
        </Grid>
        <Grid item xs={10} sx={{ padding: 2 }}>
          <Box
            sx={{
              width: "100%",
              height: "10vh",
              color: "white",
              borderBottom: 1,
            }}
          >
            <h1>Welcome User.</h1>
          </Box>
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="success" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
