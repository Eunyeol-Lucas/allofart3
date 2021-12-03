import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { Modal, Box, Typography } from "@material-ui/core";
import GalleryImgBox from "../src/components/GalleryImgBox";
import GalleryImgListComponent from "../src/components/GalleryImgListComponent";

export default function Gallery() {
  const [duration, setDuration] = useState("week");
  const [sortBy, setSortBy] = useState("date");

  return (
    <div>
      <MarginTop />
      <Title>Gallery</Title>
      <Explain>Let's See Others' Artworks and Download What you want! </Explain>
      <Audio>
        <audio controls src="/music/bgm.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </Audio>
      <Hr />
      <GalleryImgListComponent duration={duration} sortBy={sortBy} />
      <style jsx global>
        {`
          body::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
const Title = styled.h1`
  font-size: 7rem;
  width: 100%;
  text-align: center;
`;

const MarginTop = styled.div`
  margin-top: 10vh;
`;

const Audio = styled.div`
  float: right;
`;

const Hr = styled.hr`
  background: #000;
  height: 3px;
  margin: 5vh 5vw;
  padding: 0;
  border: 0;
`;

const Explain = styled.h2`
  text-align: center;
`;

const DownloadButton = styled.button`
  width: 100px;
  height: 100px;
  border: solid 1px blue;
  font-size: 10px;
`;
