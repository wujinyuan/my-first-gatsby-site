import * as React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql } from "gatsby";
const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

export const Head = ({ data }) => <SEO title={data.mdx.frontmatter.title} />;
export default BlogPost;
