import Link from "next/link";
import ReactMarkdown from "react-markdown";
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
    {props.content == undefined ? (
      <p>Text failed to load, please refresh</p>
    ) : (
      <>
        {console.log(
          <ReactMarkdown source={props.content} escapeHtml={false} />
        )}
        <ReactMarkdown source={props.content} escapeHtml={false} />
      </>
    )}
  </div>
);
export default Post;
