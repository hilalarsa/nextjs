import Link from "next/link";

const linkStyle = {
  
};
const Breadcrumb = (props) => (
  <div className={props.className}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>> {
      " "
    }
    <Link href="/profile">
      <a style={linkStyle}>Property News</a>
    </Link>>{" "}
    <Link href="/about">
      <a style={linkStyle}>News</a>
    </Link>
  </div>
);

export default Breadcrumb;
