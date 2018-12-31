const ArticleHeader = props => (
  <div>
    <style jsx>{`
      .tag {
        font-size: 12px;
        color: grey;
      }
      a {
        margin-right: 7px;
        text-decoration: none;
      }
      h2 {
        font-weight: 400;
      }
    `}</style>
    <h2>{props.title}</h2>
    <div className="tag">
      By: {props.detail.author} / {props.detail.company} |{" "}
      {props.detail.datetime}
    </div>
    <div className="tag">
      <div>
        Tags:{" "}
        {props.tag.map((item, key) => (
          <a href={item.url}>{item.label}</a>
        ))}
      </div>
    </div>
  </div>
);
export default ArticleHeader;
