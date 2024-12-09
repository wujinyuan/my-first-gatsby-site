import * as React from "react";
import useSiteMetadata from "../graphql/siteMetadata";

const Seo = ({ title }) => {
  const data = useSiteMetadata();
  return (
    <title>
      {title} | {data.title}
    </title>
  );
};

export default Seo;
