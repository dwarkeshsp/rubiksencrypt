import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function Cube({ message, running, key }) {
  const [cube, setCube] = useState([[]]);
  const { width } = useWindowDimensions();
  const size = Math.ceil(Math.sqrt(message.length / 6.0));
  const stickerSize = width / (size * 5);
  const stickerTopPadding = stickerSize / 2 - 20;

  useEffect(() => setCube(generateCube(message)), [message]);

  useEffect(() => {
    while (running) {}
  }, [running]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size * 4}, ${stickerSize}px)`,
        justifyContent: "center"
      }}
    >
      {cube.map(row =>
        row.map(col => (
          <div
            style={{
              width: stickerSize,
              height: stickerSize,
              backgroundColor: col[0].color,
              border: "solid 1px #303030",
              paddingTop: `${stickerTopPadding}px`
            }}
          >
            <Typography align="center" variant="h6" color="textSecondary">
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
