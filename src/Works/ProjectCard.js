import React from "react";

import {
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { v4 as uuid } from "uuid";

export default function ProjectCard({ project }) {
  return (
    <Grid item xs={12} md={6} lg={4} p={2} display="flex">
      <Card width="100%" sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={project.cardImage}
          alt={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
          <Box p={2} alignContent="start">
            <Typography variant="body1" textAlign={"start"}>
              Made with
            </Typography>
            <div
              style={{
                display: "flex",
                paddingTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {project.tools.map((tool) => {
                return (
                  <img
                    src={tool.logo}
                    title={tool.name}
                    style={{ width: "3rem" }}
                    key={uuid()}
                  />
                );
              })}
            </div>
          </Box>
        </CardContent>
        <CardActions sx={{ mt: "auto" }}>
          {project.live ? (
            <Button size="small" href={project.live} target="_blank">
              View Live
            </Button>
          ) : (
            ""
          )}
          {project.code ? (
            <Button size="small" href={project.code} target="_blank">
              View Code
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
