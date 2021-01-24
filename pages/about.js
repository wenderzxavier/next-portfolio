import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About">
    <div>
      <Link href="/">
        <a href="">Go to Home</a>
      </Link>
      <p>A javascript programmer</p>
      <img
        src="/static/javascript-logo.png"
        alt="Javascript logo"
        height="200px"
      />
    </div>
  </Layout>
);

export default About;
