import Head from "next/head";
import Link from "next/link";
import React from "react";

//components
import Ads from "../components/Ads";
import ArticleHeader from "../components/ArticleHeader";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Post from "../components/Post";
import SocialMedia from "../components/SocialMedia";

// misc package
import moment from "moment";
// example json from apis (assuming posts is in html/markdown format)
const headers = {
  title: "Park View Mansions in second enbloc attempt this year",
  detail: {
    author: "Author name",
    company: "EdgeProp Singapore",
    datetime: moment().format(`MMMM DD, YYYY HH:mm a`)
  },
  tag: [
    {
      label: "property briefs",
      url: "google.com"
    },
    {
      label: "Park View Mansions",
      url: "google.com"
    },
    {
      label: "Jurong Lake Garden",
      url: "google.com"
    },
    {
      label: "Huttons Asia",
      url: "google.com"
    }
  ]
};
const content = `
<p>The owners of Park View Mansions are attempting a second en bloc bid this year, and more than 80% of the 160 owners have agreed to a lower reserve price, says marketing agent Huttons Asia. The development has been launched for sale for $250 million, or $969 psf ppr after factoring an estimated differential premium and lease upgrading premium of $140.8 million.</p> 
<p>This is a 22% reduction to the reserve price when the 99-year leasehold development first launched a collective sale bid in March this year, at $320 million ($1,183 psf per plot ratio). A new development would have a breakeven price of about $1,450 psf, and owners are expected to receive $1.44 million to $1.6 million each from the sale.</p>  
<img alt="Trulli" src="/static/edgeprop.jpg" title="Hello"/>
<figcaption>View of Jurong Lake from Park View Mansions (Credit: Huttons Asia)</figcaption>
<p> Park View Mansions is on a 191,974 sq ft site that is zoned for residential use with a gross plot ratio of 2.1, and a potential gross floor area of 403,145 sq ft. The new development could yield up to 440 residential units of about 915 sq ft, based on URA’s new unit size guidelines. A Pre-Application Feasibility Study is not required, but the development of the site is still subject to LTA conditions.</p>
<p>The amount of housing stock in the Jurong East area has not changed since 4Q2016, says Angela Lim, deputy head of investment sales at Huttons Asia. The last private development was the 710-unit Lake Grande by MCL Land which was sold out in less than three years, she says. “Hence Park View Gardens is an opportune choice for developers to replenish their land bank to match the growing and pent up demand in the Jurong area”.</p>
<p>The public tender closes on January 18 next year.</p>
`;
const SosialMediaUrls = [
  { title: "Whatsapp", url: "http://api.whatsapp.com/" },
  { title: "LinkedIn", url: "http://linkedin.com/in/hilalarsa/" },
  { title: "WeChat", url: "http://wechat.com" },
  { title: "Facebook", url: "http://facebook.com/hilalarsa" },
  { title: "Email", url: "http://mailto.com/hilalarsa" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title={headers.title} />
        <div>
          <Breadcrumb />
          <hr />
          <style global>
            {`
            div{
              font-family: "Poppins";
            }
            p{
              font-family: 'Open Sans', sans-serif;
            }
            hr{
              border-color:#EEEEEE;
              background-color:#EEEEEE;
            }
            img{
              width: 100%;
              max-width: 700px;
              height: auto;
            }
            figcaption{
              font-size:small;
              font-style:italic;
            }
          `}
          </style>
          <style jsx>{`
            .flex-container {
              display: flex;
            }
            .post {
              margin: auto;
              line-height: 1.7;
              max-width: 1200px;
            }
            .socialmedia {
              margin-bottom: 10px;
            }
            @media (min-width: 1000px) {
              .ads-right {
                background-color: pink;
                width: 33.3%;
              }
            }
          `}</style>
          <div className="flex-container">
            {/* <div className="ads-left">
              <Ads />
            </div> */}
            <div className="post">
              <div className="socialmedia">
                <ArticleHeader
                  title={headers.title}
                  detail={headers.detail}
                  tag={headers.tag}
                />
              </div>
              <SocialMedia socialmedia={SosialMediaUrls} />
              <Post content={content} />
              <hr />
              <SocialMedia socialmedia={SosialMediaUrls} />
              <hr />
            </div>
            <div className="ads-right">
              <Ads />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
