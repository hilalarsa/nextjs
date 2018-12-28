import Link from "next/link";

const Post = props => (
  <div>
    <style jsx>
      {`
        p {
          background-color: pink;
          text-align: justify;
          font-family: "Open Sans", sans-serif;
        }
      `}
    </style>
    <p>{props.text}</p>
  </div>
);
export default Post;
