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
          href="./"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px" }}
        >
          {" "}
          {"<"}{" "}
        </Button>
      </Box>
      <Box sx={{ width: "20px", position: "absolute", top: "200px", right: 1 }}>
        <Button href="./indexThree" variant="contained" color="secondary" sx={{ fontSize: "20px" }}>
          {">"}
        </Button>
      </Box>
      <Box>
        <img
          src="https://media-public.canva.com/a6vFk/MAEo74a6vFk/1/s3.jpg"
          width={300}
          // height={333}
        />
      </Box>
      <Box sx={{ mx: 2, my: 3 }}>
        <Typography sx={{ lineHeight: 1.5, mb: 4 }} variant="h3">
          Accessories
        </Typography>
        <Typography sx={{ lineHeight: 2 , fontSize: '30px'}}>
          Add shoes, bags, and more to complement your look.{" "}
        </Typography>
        <Button
          href="#"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px"  , width: '200px' , mx: 20 , my:15}}
        >
         SHOP NOW
        </Button>
      </Box>
    </Box>
  );
}
