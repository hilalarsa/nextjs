import Head from "next/head";
import Link from "next/link";
import React from "react";
import Ads from "../components/Ads";
import ArticleHeader from "../components/ArticleHeader";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Post from "../components/Post";
import SocialMedia from "../components/SocialMedia";
//icons
const headers = {
  title: "Park View Mansions in second enbloc attempt this year",
  detail: {
    author: "Someone",
    company: "Something",
    datetime: Date()
  },
  tag: [
    {
      label: "property briefs",
      url: "haha.com"
    },
    {
      label: "Park View Mansions",
      url: "haha.com"
    },
    {
      label: "Jurong Lake Garden",
      url: "haha.com"
    },
    {
      label: "Huttons Asia",
      url: "haha.com"
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
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Breadcrumb className="breadcrumb" />
          <hr />
          <style global>
            {`
            div{
              font-family: "Poppins";
            }
            hr{
              border-color:#EEEEEE;
              background-color:#EEEEEE;
            }
            img{
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
            .breadcrumb {
              margin-right: 10;
            }
            .post {
              margin: 0 auto;
              line-height: 1.7;
              width: 66.6%;
            }
            .ads-left {
              width: 5%;
              background-color: pink;
            }
            .ads-right {
              width: 33.3%;
              background-color: pink;
            }
          `}</style>
          <div className="flex-container">
            <div className="ads-left">
              <Ads />
            </div>
            <div className="post">
              <ArticleHeader
                title={headers.title}
                detail={headers.detail}
                tag={headers.tag}
              />
              <SocialMedia />
              <Post content={content} />
              <hr />
              <SocialMedia />
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
