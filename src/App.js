import {
  Container,
  CssBaseline,
  TextField,
  Typography,
  Switch
} from "@material-ui/core";
import React, { useState } from "react";
import Cube from "./Cube";

function App() {
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(false);
  const [running, setRunning] = useState(false);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" style={{ paddingTop: "1rem" }}>
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

        {/* <Switch
          checked={state.checkedB}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        /> */}
      </Container>
      <Cube message={message} />
    </div>
  );
}

export default App;
