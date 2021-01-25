import Layout from "../components/Layout";
import { Component } from "react";
import Error from "../pages/_error";

class About extends Component {
  state = {
    user: null,
  };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/wenderzxavier");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return {
      user: data,
      statusCode,
    };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Me" height="200px" />
      </Layout>
    );
  }
}

export default About;
