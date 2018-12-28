import Link from "next/link";

const Post = props => (
  <div>
    <style jsx>
      {`
        p {
          background-color: pink;
          padding: 20px;
          text-align: justify;
        }
      `}
    </style>
    <p>{props.text}</p>
  </div>
);
export default Post;
