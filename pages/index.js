import Head from "next/head";
import Link from "next/link";
import React from "react";
import Ads from "../components/Ads";
import ArticleHeader from "../components/ArticleHeader";
import Breadcrumb from "../components/Breadcrumb";
import Header from "../components/Header";
import Post from "../components/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const headers = {
  title: "This is article title",
  detail: {
    author: "Someone",
    company: "Something",
    datetime: Date()
  },
  tag: ["tacom", "tag2", "tag3"]
};

const content =
  '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <img src="/static/edgeprop.jpg"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>';

class App extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    console.log("Fetching");
    return { userAgent };
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <style jsx>{`
            .flex-container {
              display: flex;
            }
            .post {
              margin: 0 auto;
              line-height: 1.7;
              width: 66.6%;
            }
            .ads-left {
              width: 5%;
            }
            .ads-right {
              width: 33.3%;
            }
          `}</style>
          <Breadcrumb />
          <hr />
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
              Social media icons put here
              <i class="fab fa-whatsapp"></i>
              
              <FontAwesomeIcon icon={faCoffee} />
              <Post content={content} />
              <div
                style={{
                  height: "auto",
                  alignContent: "center",
                  width: "100%",
                  maxWidth: "700px"
                }}
              >
                <img src="/static/edgeprop.jpg" width="100%" />
              </div>
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
