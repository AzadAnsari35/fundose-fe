import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "@/styles/Header.module.css";
import LogoIcon from "../public/icons/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <Box component="header" className={styles.header}>
      <Image
        src={LogoIcon}
        alt="Picture of the author"
        width={160}
        height={42}
        onClick={() => router.push("/")}
      />
      <Box display="flex" alignItems="center" className={styles.navlink}>
        <Typography
          variant="body1"
          component="div"
          align="center"
          color="primary"
        >
          Login
        </Typography>
        <Typography
          variant="body1"
          component="div"
          align="center"
          color="primary"
        >
          Register
        </Typography>
      </Box>
    </Box>
  );
}
