import { useState, useEffect } from "react";
import { db } from "./Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);

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
        <Grid item xs={2}>
          <Sidebar
            handleListItemClick={handleListItemClick}
            selectedIndex={selectedIndex}
          />
        </Grid>
        <Grid item xs={10}>
          hi
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
