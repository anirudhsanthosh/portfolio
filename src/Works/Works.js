import React from "react";

import { Grid, Typography, Box } from "@mui/material";

import { v4 as uuid } from "uuid";

import projects from "./projects/index";
import ProjectCard from "./ProjectCard";

export default function Works() {
  // if (typeof window !== "undefined") console.log(window);
  return (
    <Box sx={{ textAlign: "center", pt: 2, pb: 2 }} className="snap">
      <Typography variant="h4" component="h5" gutterBottom>
        {"<Projects />"}
      </Typography>
      <Grid container p={1}>
        {projects.map((project) => {
          return <ProjectCard key={uuid()} project={project} />;
        })}
      </Grid>
    </Box>
  );
}
