import { Box, Container, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center">
          <Grid item xs={6}>
            <Typography color="black">Copyright</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FacebookIcon />
            <InstagramIcon />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
