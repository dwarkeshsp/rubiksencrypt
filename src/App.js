import {
  Container,
  CssBaseline,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import Cube from "./Cube";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Container maxWidth="md" style={{ paddingTop: "1rem" }}>
      <CssBaseline />
      <Typography align="center" variant="h2">
        Rubik's Encrypt
      </Typography>
      <TextField
        style={{
          paddingBottom: "1rem"
        }}
        onChange={e => setMessage(e.target.value)}
        placeholder="Your message..."
        multiline
        fullWidth
      />
      <Cube message={message} />
    </Container>
  );
}

export default App;
