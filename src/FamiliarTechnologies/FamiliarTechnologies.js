import React from "react";

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { v4 as uuid } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";
import html from "../images/tools/html5_350.png";
import css from "../images/tools/css3_350.png";
import js from "../images/tools/javascript_350.png";
import react_350 from "../images/tools/react_350.png";
import mui from "../images/tools/mui_350.png";
import bootstrap from "../images/tools/bootstrap_350.png";
import nextjs from "../images/tools/nextjs_350.png";
import cordova from "../images/tools/cordova_350.png";
import git from "../images/tools/git_350.png";
import wordpress from "../images/tools/wordpress_350.png";
import flutter from "../images/tools/flutter_350.png";
import node from "../images/tools/node_350.png";
import php from "../images/tools/php_350.png";
import MySQL from "../images/tools/MySQL_350.png";

export default function FamiliarTechnologies() {
  const tools = [
    {
      title: "Comfirtable",
      tech: [
        { name: "HTML", logo: html },
        { name: "CSS", logo: css },
        { name: "javascript", logo: js },
        { name: "react", logo: react_350 },
        { name: "MUI", logo: mui },
        { name: "Bootstrap", logo: bootstrap },
        { name: "Next.js", logo: nextjs },
        { name: "Cordova", logo: cordova },
        { name: "Git", logo: git },
        { name: "Wordpress", logo: wordpress },
      ],
    },
    {
      title: "Familiar",
      tech: [
        { name: "Flutter", logo: flutter },
        { name: "Node Js", logo: node },
        { name: "PhP", logo: php },
        { name: "MySQL", logo: MySQL },
      ],
    },
  ];
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection="column"
      sx={{ textAlign: "center" }}
      componeent="section"
      area-labeledby="tools-heading"
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            pb={2}
            sx={{ color: "primary.main" }}
            id="tools-heading"
          >
            {"<Tools & Technologies />"}
          </Typography>
        </Grid>
        {tools.map((item) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              justifyContent="center"
              alignItems="center"
              p={1}
              key={uuid()}
            >
              <Typography
                variant="h5"
                component="h6"
                gutterBottom
                pb={3}
                pl={2}
                sx={{ textTransform: "capitalize", textAlign: "start" }}
              >
                {item.title}
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 6, sm: 10, md: 12 }}
                justifyContent="center"
                alignItems="center"
              >
                {item.tech.map((tech) => {
                  return (
                    <Grid item key={uuid()}>
                      <Card
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: "0.8",
                          type: "spring",
                          bounce: 0.65,
                        }}
                        variant="outlined"
                        sx={{
                          width: { xs: 100, md: 120, lg: 150 },
                          maxWidth: { xs: 100, md: 120, lg: 150 },
                          pt: "0.25rem",
                        }}
                      >
                        {/* <CardMedia
                          component="Image"
                          image={tech.logo}
                          alt={tech.name}
                          sx={{ objectFit: "contain" }}
                        /> */}
                        <CardMedia sx={{ objectFit: "contain" }}>
                          <Image src={tech.logo} alt={tech.name} />
                        </CardMedia>
                        <CardContent p={0} sx={{ p: 0, pb: 0 }}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="div"
                            p={0}
                          >
                            {tech.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
