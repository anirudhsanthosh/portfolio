import Head from "next/head";
import Layout from "../src/Layout";
import { Container, Box, Grid, Typography } from "@mui/material";
import FamiliarTechnologies from "../src/FamiliarTechnologies/FamiliarTechnologies";
import Works from "../src/Works/Works";
import About from "../src/About/About";
import Hero from "../src/Hero/Hero";
import Contact from "../src/Contact/Contact";
import { useState } from "react";
import Footer from "../src/Footer";
export default function Home() {
  const [contactMeModalOpen, setContactMeModalOpenStatus] = useState(false);
  function openContactMeModal() {
    setContactMeModalOpenStatus(true);
  }
  function closeContactMeModal() {
    setContactMeModalOpenStatus(false);
  }
  return (
    <Layout>
      <Head>
        <title>Anirudh V S</title>
        <meta name="description" content="Portfolio of Anirudh V S" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero openContactModal={openContactMeModal} />
      <About />
      <Works />
      <FamiliarTechnologies />
      <Footer openContactModal={openContactMeModal} />
      <Contact open={contactMeModalOpen} closeHandler={closeContactMeModal} />
    </Layout>
  );
}
