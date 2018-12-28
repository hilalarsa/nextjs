import Link from "next/link";

const linkStyle = {
  marginRight: 15
};
const Breadcrumb = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/profile">
      <a style={linkStyle}>Profile</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Breadcrumb;
