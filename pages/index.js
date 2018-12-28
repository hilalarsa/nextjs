import Head from "next/head";
import Link from "next/link";
import React from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

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
            p {
              line-height: 1.5;
            }
            div {
            }
            .flex-container {
              display: flex;
              justify-content: space-between;
            }

            .ads {
              width: 33.3%;
            }
          `}</style>
          <Breadcrumb />
          <hr />
          <div className="flex-container">
            <div className="post">
              <h1>This is article title</h1>
              <div>By author name / Company | Date time hour 123 456:789</div>
              <div>Tags: something can be use as tags here</div>

              <Post
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
              />
              <div style={{ padding: "50px", alignContent: "center" }}>
                <img src="/static/dogo.jpg" width="100%" />
              </div>
              <Post
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
              />
            </div>
            <div className="ads">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              </p>
              <img
                src="/static/dogo.jpg"
                width="100%"
                alt="theres some desc here"
              />
            </div>
          </div>
          <div className="flex-container">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
