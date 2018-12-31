import Link from "next/link";
import ReactMarkdown from "react-markdown";
const Post = props => (
  <div>
    <style jsx>
      {`
        p {
          text-align: justify;
          font-family: "Open Sans", sans-serif;
        }
      `}
    </style>
    {props.content == undefined ? (
      <p>Text failed to load, please refresh</p>
    ) : (
      <>
        <ReactMarkdown source={props.content} escapeHtml={false} />
      </>
    )}
  </div>
);
export default Post;
