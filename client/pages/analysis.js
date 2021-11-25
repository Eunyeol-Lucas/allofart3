import Upload from "../src/components/Upload";
import axios from "axios";
import {
  Button,
  Typography,
  Modal,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { Send, Backup } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  borderRadius: 20,
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  outline: "none",
};

export default function analysis() {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [sortArr, setSortArr] = useState(null);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        setErrorMsg("");
        const response = await axios.post(
          `http://elice-kdt-2nd-team1.koreacentral.cloudapp.azure.com:5000/api/style`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        console.log(response.data);
        let sortable = [];
        for (var percent in response.data) {
          sortable.push([
            percent,
            Math.round((response.data[percent] / 1) * 100 * 10) / 10,
          ]);
        }
        sortable.sort(function (a, b) {
          return b[1] - a[1];
        });
        sortable = sortable.slice(0, 5);
        console.log("sortable", sortable);
        setSortArr(sortable);
      } else {
        setErrorMsg("Please select a file to add.");
        setOpen(true);
      }
    } catch (e) {
      console.log(e.response);
      setErrorMsg("Please select a file to add.");
      setOpen(true);
    }
  };

  return (
    <Container>
      <div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        {errorMsg && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, border: "none" }}
              >
                <strong> {errorMsg} </strong>
              </Typography>
            </Box>
          </Modal>
        )}
      </div>
      <h1>Look for the painter style</h1>
      <p>내가 그린 그림을 업로드하고,</p>
      <p>내 그림이 어떤 유명한 화가의 화풍과 얼마나 유사한지 확인해보세요.</p>
      <Upload
        file={file}
        setFile={setFile}
        previewSrc={previewSrc}
        setPreviewSrc={setPreviewSrc}
        isPreviewAvailable={isPreviewAvailable}
        setIsPreviewAvailable={setIsPreviewAvailable}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        setOpen={setOpen}
      />
      <Button
        variant="contained"
        size="large"
        endIcon={<Send />}
        type="submit"
        onClick={onSubmit}
      >
        Analyze
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 80vh;
`;
