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

import skyOfDreams from "../assets/Sky of Dreams.jpg";
import worldOfShadow from "../assets/World of Shadow.jpg";
import deathAndDusk from "../assets/Death and Dusk.jpg";

function Home() {
  const coverImages = [
    {
      label: "Sky of Dreams",
      imgPath: skyOfDreams,
      number: 1,
      readNow: true,
      link: "https://www.amazon.com/Sky-Dreams-Fantasy-Realms-Radiance/dp/B0C2SMVPQN/?_encoding=UTF8&pd_rd_w=UF3fT&content-id=amzn1.sym.579192ca-1482-4409-abe7-9e14f17ac827&pf_rd_p=579192ca-1482-4409-abe7-9e14f17ac827&pf_rd_r=131-5858962-8313356&pd_rd_wg=wHtWD&pd_rd_r=4608ee2b-388e-4565-9617-2c02aa324d41&ref_=aufs_ap_sc_dsk",
    },
    {
      label: "World of Shadow",
      imgPath: worldOfShadow,
      number: 2,
      readNow: true,
      link: "https://www.amazon.com/World-Shadow-Realms-Radiance-Renae/dp/B0C7T5FNSK/ref=d_pd_sim_sccl_2_1/131-5858962-8313356?pd_rd_w=lRfAq&content-id=amzn1.sym.eb616d98-73b6-4f12-8913-a35cc29165e9&pf_rd_p=eb616d98-73b6-4f12-8913-a35cc29165e9&pf_rd_r=VHK2NX5MZMK7MVWKRKZ9&pd_rd_wg=unaPY&pd_rd_r=5a1578cf-a4c4-430f-8fd1-8c512784fc9e&pd_rd_i=B0C7T5FNSK&psc=1",
    },
    {
      label: "Death and Dusk",
      imgPath: deathAndDusk,
      number: 3,
      readNow: false,
      link: "https://www.amazon.com/Realms-of-Radiance/dp/B0BZQTDBLY?ref_=ast_author_dp",
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
            <Typography variant="h6" align="center" gutterBottom>
              What if mental illness was a sign of rare magic?
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              Kenya Sawyer sees herself as broken. In the struggle against her
              own mind, she’s always been afraid she’ll jump and fall.{" "}
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              She never expected to jump into another realm entirely.
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
                    title={cover.label}
                  />
                  <CardContent style={{ flexGrow: "1" }}>
                    <Typography className="cardText" gutterBottom variant="h5">
                      {cover.label}
                    </Typography>
                    <Typography className="cardText">
                      Book {cover.number}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={cover.link}>
                      {cover.readNow === true ? (
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                        >
                          Read Now
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                        >
                          Coming Soon
                        </Button>
                      )}
                    </a>
                  </CardActions>
                  {/* </CardMedia> */}
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
