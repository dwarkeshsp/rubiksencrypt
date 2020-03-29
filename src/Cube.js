import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

export default function Cube({ message }) {
  const size = Math.ceil(Math.sqrt(message.length / 6.0));

  const [cube, setCube] = useState([[]]);

  useEffect(() => setCube(generateCube(message)), [message]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size * 4}, 20px)`
      }}
    >
      {cube.map(row =>
        row.map(col => (
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: col[0].color,
              border: "solid 1px #303030"
            }}
          >
            <Typography align="center" color="textSecondary">
              {col[0].char}
            </Typography>
          </div>
        ))
      )}
    </div>
  );
}

const generateCube = message => {
  const size = Math.ceil(Math.sqrt(message.length / 6.0));
  let cube = new Array(size * 3);
  for (let i = 0; i < size * 4; i++) cube[i] = new Array(size * 4);
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const Sticker = (char, color) => [{ char: char, color: color }];
      cube[i][j + size] = Sticker(message[i * size + j], "white");
      console.log(i + size, j);
      cube[i + size][j] = Sticker(
        message[size * size + i * size + j],
        "orange"
      );
      cube[i + size][j + size] = Sticker(
        message[2 * size * size + i * size + j],
        "green"
      );
      cube[i + size][j + 2 * size] = Sticker(
        message[3 * size * size + i * size + j],
        "red"
      );
      cube[i + size][j + 3 * size] = Sticker(
        message[4 * size * size + i * size + j],
        "royalblue"
      );
      cube[i + 2 * size][j + size] = Sticker(
        message[5 * size * size + i * size + j],
        "yellow"
      );
      const empty = Sticker("", "#303030");
      cube[i][j] = empty;
      cube[i][j + 2 * size] = empty;
      cube[i][j + 3 * size] = empty;
      cube[i + 2 * size][j] = empty;
      cube[i + 2 * size][j + 2 * size] = empty;
      cube[i + 2 * size][j + 3 * size] = empty;
    }
  }
  return cube;
};
