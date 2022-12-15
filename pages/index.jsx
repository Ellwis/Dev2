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
      <Box sx={{ width: "20px", position: "absolute" ,top:'200px' , left:1 }}>
        <Button  disabled  variant="contained" color="secondary" sx={{fontSize:'20px'}}> {'<'} </Button>
      </Box>
      <Box sx={{ width: "20px", position: "absolute" ,top:'200px' , right:1 }}>
        <Button href='./indexTwo' variant="contained" color="secondary" sx={{fontSize:'20px'}}>{'>'}</Button>
      </Box>
      <Box>
        <img
          src="https://media-public.canva.com/4Rbpc/MAEo704Rbpc/1/s3.jpg"
          width={300}
          // height={333}
        />
      </Box>
      <Box sx={{ mx: 2 , my : 3}}>
        <Typography sx={{ lineHeight: 1.5 , mb:4 }} variant="h3">
          Why People Love to Shop <br /> at Mintmade Fashion
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          Order before 2pm and get your purchase within the day{" "}
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          Not your size? Avail of our hassle-free return policy .
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          Get 24/7 customer support
        </Typography>
        <Typography sx={{ lineHeight: 2 }}>
          We support contactless payment and cash on delivery.
        </Typography>
      </Box>
    </Box>
  );
}
