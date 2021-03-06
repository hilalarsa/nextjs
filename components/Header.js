import Head from "next/head";

const Header = props => (
  <Head>
    <title>{props.title}</title>
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
      key="viewport"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins"
      rel="stylesheet"
    />
  </Head>
);
export default Header;
