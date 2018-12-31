import Link from "next/link";

const linkStyle = {};
const Breadcrumb = props => (
  <div className={"link"}>
    <style jsx>{`
      a {
        margin: 10px;
        font-size: 12px;
        text-decoration: none;
      }
    `}</style>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    >
    <Link href="/">
      <a style={linkStyle}>Property News</a>
    </Link>
    >
    <Link href="/">
      <a style={linkStyle}>News</a>
    </Link>
  </div>
);

export default Breadcrumb;
