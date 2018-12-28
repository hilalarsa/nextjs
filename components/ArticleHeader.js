const ArticleHeader = props => (
  <div>
    <style jsx>{``}</style>
    <h1>{props.title}</h1>
    <div>
      By: {props.detail.author} / {props.detail.company} |{" "}
      {props.detail.datetime}
    </div>
    <div>Tags: {props.tag.map((item, key) => `${item}, `)}</div>
  </div>
);
export default ArticleHeader;
