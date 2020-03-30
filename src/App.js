import {
  Button,
  Container,
  CssBaseline,
  NativeSelect,
  Grid,
  Slider,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";
import Cube from "./Cube";

function App() {
  const [message, setMessage] = useState("");
  const [encrypt, setEncrypt] = useState(true);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(50);
  const [key, setKey] = useState("");

  const Options = () => (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <NativeSelect value={encrypt} onChange={() => setEncrypt(!encrypt)}>
        <option value={true}>Encrypt</option>
        <option value={false}>Decrypt</option>
      </NativeSelect>
      <Grid item>
        <Button
          color={running ? "secondary" : "primary"}
          onClick={() => setRunning(!running)}
          disabled={message.length <= 6 || (!encrypt && key.length < 240)}
          variant="contained"
        >
          {running ? "Stop" : "Start"}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Typography>Speed</Typography>
        <Slider
          value={speed}
          onChange={(e, value) => setSpeed(value)}
          min={10}
          max={500}
        />
      </Grid>
    </Grid>
  );

  const Input = () => (
    <React.Fragment>
      <TextField
        style={{
          paddingTop: "2rem",
          paddingBottom: "2rem"
        }}
        onChange={e => setMessage(e.target.value)}
        placeholder="Your message..."
        variant="outlined"
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
    </React.Fragment>
  );

  return (
    <div>
      <CssBaseline />
      <Container
        maxWidth="sm"
        style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
      >
        <Typography align="center" variant="h2">
          Rubik's Encrypt
        </Typography>
        <Options />
        <Input />
      </Container>
      <Cube message={message} running={running} speed={speed} key={key} />
    </div>
  );
}

export default App;
