import React from "react";
import { useState, useEffect } from "react";
import { db } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Toolbar from "./Toolbar";
import Main from "./Main";

const Index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleListItemClick = (event, index) => {
    console.log(index);
    setSelectedIndex(index);
  };

  useEffect(async () => {
    setIsLoading(true);
    const docRef = doc(db, "users", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setIsLoading(false);
    } else {
      console.log("No such document!");
      setIsLoading(false);
    }
  }, []);

  var loader = "";
  if (isLoading) {
    loader = <LinearProgress color="success" />;
  } else {
    loader = "";
  }

  return (
    <div>
      <Grid container sx={{ height: "100vh" }} bgcolor="#0a1929">
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
          <Box sx={{ width: "100%" }}>{loader}</Box>

          <Grid
            container
            sx={{ height: "80vh", width: "100%", marginTop: "1%" }}
          >
            <Grid item xs={10} sx={{}}>
              <Main />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                bgcolor: "#7e57c2",
                borderRadius: 3,
                color: "white",
                padding: 2,
              }}
            >
              <Toolbar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
