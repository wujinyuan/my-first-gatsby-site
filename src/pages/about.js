import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <p>
      Hi there! I'm the proud of creator of this site, which I built with
      Gatsby.
    </p>
  </Layout>
);
export const Head = () => (
  <>
    <title>About Page</title>
    <meta name="description" content="Your description of Gatsby site" />
  </>
);
export default AboutPage;
