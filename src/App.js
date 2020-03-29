import React, { useState, useEffect } from "react";
import Cube from "./Cube";
import { TextField, Container, CssBaseline } from "@material-ui/core";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <TextField
        style={{
          paddingBottom: "1rem"
        }}
        onChange={e => setMessage(e.target.value)}
        placeholder="Placeholder"
        multiline
        fullWidth
      />
      <Cube message={message} />
    </Container>
  );
}

export default App;
