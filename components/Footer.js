import { Box } from "@material-ui/core";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#e6e8f0",
      }}
    >
      <p>Copyright &copy; Fundose 2022</p>
    </Box>
  );
}
