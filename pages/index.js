import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
  <Layout title="Hello World">
    <div>
      <Link href="/about">
        <a href="">Go to About</a>
      </Link>
    </div>
  </Layout>
);

export default Index;
