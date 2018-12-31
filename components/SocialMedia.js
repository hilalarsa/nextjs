import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const SocialMedia = props => (
  <div>
    <style jsx>{`
      .icon {
        margin: 5px;
      }
    `}</style>
    {props.socialmedia.map((item, key) => (
      <SocialIcon
        title={item.title}
        url={item.url}
        style={{ height: 27, width: 27, margin: 2, textAlign: "left" }}
      />
    ))}
  </div>
);
export default SocialMedia;
