import {
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import Cube from "./Cube";

function App() {
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(true);
  const [running, setRunning] = useState(false);
  const [key, setKey] = useState("");

  return (
    <div>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        <Typography align="center" variant="h2">
          Rubik's Encrypt
        </Typography>
        <TextField
          style={{
            paddingTop: "2rem",
            paddingBottom: "2rem"
          }}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message..."
          multiline
          fullWidth
        />
        {!encrypt && (
          <TextField
            style={{
              paddingBottom: "2rem"
            }}
            onChange={e => setKey(e.target.value)}
            placeholder="Key..."
            multiline
            fullWidth
          />
        )}
        <Grid container justify="center">
          <FormControlLabel
            control={
              <Switch
                checked={encrypt}
                onChange={() => setEncrypt(!encrypt)}
                color="primary"
              />
            }
            label={encrypt ? "Encrypt" : "Decrypt"}
          />
          <Button
            color={running ? "secondary" : "primary"}
            onClick={() => setRunning(!running)}
            disabled={message.length <= 6 && (encrypt || key.length > 240)}
            variant="contained"
          >
            {running ? "Stop" : "Start"}
          </Button>
        </Grid>
      </Container>
      <Cube message={message} running={running} key={key} />
    </div>
  );
}

export default App;
