import Link from "next/link";
import ReactMarkdown from 'react-markdown'
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
      <ReactMarkdown source="<h2>Hello this is paragraph<img src='/static/edgeprop.jpg'/></h2>" escapeHtml={false}/>
    )}
  </div>
);
export default Post;
