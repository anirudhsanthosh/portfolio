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
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Grid item xs={12} md={6} lg={4} p={2} display="flex">
      <Card width="100%" sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia sx={{ objectFit: "contain" }}>
          <Image
            src={project.cardImage}
            alt={project.name}
            height={2000}
            width={3750}
          />
        </CardMedia>
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
              {project.tools.map((tool, index) => {
                return (
                  <motion.span
                    key={uuid()}
                    transition={{ delay: index * 0.2 }}
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <Image
                      src={tool.logo}
                      title={tool.name}
                      width={50}
                      height={50}
                    />
                  </motion.span>
                );
              })}
            </div>
          </Box>
        </CardContent>
        <CardActions sx={{ mt: "auto" }}>
          {project.live ? (
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button size="small" href={project.live} target="_blank">
                View Live
              </Button>
            </motion.span>
          ) : (
            ""
          )}
          {project.code ? (
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button size="small" href={project.code} target="_blank">
                View Code
              </Button>
            </motion.span>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
