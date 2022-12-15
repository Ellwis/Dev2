import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "@mui/material";
import { border, width } from "@mui/system";
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "60%",
        mx: "auto",
        mt: 20,
        position: "relative",
      }}
    >
      <Box sx={{ width: "20px", position: "absolute", top: "200px", left: 1 }}>
        <Button
          href="./indexThree"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px" }}
        >
          {" "}
          {"<"}{" "}
        </Button>
      </Box>
      <Box
        sx={{
          width: "20px",
          position: "absolute",
          top: "200px",
          right: 1,
          justifyContent: "flex-end",
        }}
      >
        <Button
          disabled
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px" }}
        >
          {">"}
        </Button>
      </Box>
      <Box sx={{display:'block'}}>
          <img
            src="https://media-public.canva.com/VUVpY/MAEo73VUVpY/1/s3.jpg"
            width={700}
            // height={333}
          />
        </Box>
        <Typography 
        sx={{fontSize:'20px', mt:'210px' , ml:2}}
        >M I N T M A D E</Typography>
    </Box>
  );
}
