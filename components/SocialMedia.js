import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const SosialMediaUrls = [
  { title: "Whatsapp", url: "http://api.whatsapp.com/" },
  { title: "LinkedIn", url: "http://linkedin.com/in/hilalarsa/" },
  { title: "WeChat", url: "http://wechat.com" },
  { title: "Facebook", url: "http://facebook.com/hilalarsa" },
  { title: "Email", url: "http://mailto.com/hilalarsa" }
];
const SocialMedia = props => (
  <div>
    <style jsx>{`
      .icon {
        margin: 5px;
      }
    `}</style>
    {SosialMediaUrls.map((item, key) => (
      <SocialIcon
        title={item.title}
        url={item.url}
        style={{ height: 27, width: 27, margin: 2, textAlign: "left" }}
      />
    ))}
  </div>
);
export default SocialMedia;
