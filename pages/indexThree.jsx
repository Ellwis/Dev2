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
          href="./indexTwo"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px" }}
        >
          {" "}
          {"<"}{" "}
        </Button>
      </Box>
      <Box sx={{ width: "20px", position: "absolute", top: "200px", right: 1 , justifyContent:'flex-end' }}>
        <Button
        href="./indexFour"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px" }}
        >
          {">"}
        </Button>
      </Box>
      <Box>
        <Typography sx={{ lineHeight: 1.5, mb: 4 }} variant="h2">
          CLOTHES FOR HIM{" "}
        </Typography>
        <Typography sx={{ lineHeight: 2, fontSize: "20px" }}>
          Look dashing while on the go with our casual wear items.
        </Typography>
        <Button
          href="#"
          variant="contained"
          color="secondary"
          sx={{ fontSize: "20px", width: "200px", mt:'200px' , ml: '100px'}}
        >
          SHOP NOW
        </Button>
      </Box>
      <Box>
        <img
          src="https://media-public.canva.com/5SZQ0/MAEoKo5SZQ0/1/s3.jpg"
          width={300}
          // height={333}
        />
      </Box>
    </Box>
  );
}
