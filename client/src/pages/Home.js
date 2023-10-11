import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from "@mui/material";

function Home() {
  const coverImages = [
    {
      label: "Sky of Dreams",
      imgPath: "../assets/Sky of Dreams.jpg",
      number: 1,
    },
    {
      label: "World of Shadow",
      imgPath: "../assets/World of Shadow.jpg",
      number: 2,
    },
    {
      label: "Death and Dusk",
      imgPath: "../assets/Death and Dusk.jpg",
      number: 3,
    },
  ];

  // Potential Carousel for top of Home Page??

  return (
    <>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              style={{ marginTop: "10px" }}
              variant="h2"
              align="center"
              gutterBottom
            >
              Realms of Radiance
            </Typography>
          </Container>
        </div>
        <Container className="imageContainer" maxWidth="md">
          <Grid container spacing={4}>
            {coverImages.map((cover) => (
              <Grid item key={cover} xs={12} sm={6} md={4}>
                <Card className="coverCard">
                  <CardMedia
                    className="cardImage"
                    image={cover.imgPath}
                    title="Sky of Dreams"
                  >
                    <CardContent style={{ flexGrow: "1" }}>
                      <Typography
                        className="cardText"
                        gutterBottom
                        variant="h5"
                      >
                        {cover.label}
                      </Typography>
                      <Typography className="cardText">
                        Book {cover.number}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        Read Now
                      </Button>
                    </CardActions>
                  </CardMedia>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default Home;
