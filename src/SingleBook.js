import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SingleBook = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const theme = createTheme({
    palette: {
      primary: {
        main: "#0971f1",
        darker: "#053e85",
      },
    },
  });

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const [bookName, setBookName] = useState("");

  // handleSubmit search form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // why undefined?
    setBookName("");

    // load individual book page
  };

  const viewBook = () => {
    // open individual book info
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // modal style
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            BetterReads
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            Log in
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Sign In
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              What would you like to read?
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <InputLabel htmlFor="my-input"></InputLabel>
                  <Input
                    id="book_name"
                    name="book_name"
                    type="text"
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                  />
                </FormControl>
              </form>
              <Button
                variant="contained"
                size="small"
                type="submit"
                onClick={handleSubmit}
              >
                Let's find it
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "15%",
                      // 56.25 - original
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Title
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Author
                    </Typography>
                    <Typography>Book info</Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={viewBook} size="small">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default SingleBook;
