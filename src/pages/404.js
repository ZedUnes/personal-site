import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout title="404: Not Found">
    <h1>Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </Layout>
);

export default NotFoundPage;
