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
export default function FamiliarTechnologies() {
  const tools = [
    {
      title: "Comfirtable",
      tech: [
        { name: "HTML", logo: "/img/tools/html5_350.png" },
        { name: "CSS", logo: "/img/tools/css3_350.png" },
        { name: "javascript", logo: "/img/tools/javascript_350.png" },
        { name: "react", logo: "/img/tools/react_350.png" },
        { name: "MUI", logo: "/img/tools/mui_350.png" },
        { name: "Bootstrap", logo: "/img/tools/bootstrap_350.png" },
        { name: "Next.js", logo: "/img/tools/nextjs_350.png" },
        { name: "Cordova", logo: "/img/tools/cordova_350.png" },
        { name: "Git", logo: "/img/tools/git_350.png" },
        { name: "Wordpress", logo: "/img/tools/wordpress_350.png" },
      ],
    },
    {
      title: "Familiar",
      tech: [
        { name: "Flutter", logo: "/img/tools/flutter_350.png" },
        { name: "Node Js", logo: "/img/tools/node_350.png" },
        { name: "PhP", logo: "/img/tools/php_350.png" },
        { name: "MySQL", logo: "/img/tools/MySQL_350.png" },
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
                        variant="outlined"
                        sx={{
                          width: { xs: 100, md: 120, lg: 150 },
                          maxWidth: { xs: 100, md: 120, lg: 150 },
                          pt: "0.25rem",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={tech.logo}
                          alt={tech.name}
                          sx={{ objectFit: "contain" }}
                        />
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
