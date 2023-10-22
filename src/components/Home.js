import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home page</title>
        <meta
          name="description"
          content="This is the home page for my github repositories using the github api calls"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home-cont home-cont-div">
        <h1 className="home--header home--title">
          WELCOME TO MY GitHub REPOS' LOG
        </h1>
        <hr />

        <div className="image-name">
          <div className="home-image-div">
            <img
              src="https://avatars.githubusercontent.com/u/108730839?v=4"
              alt=""
              className="home--image"
            />
          </div>
          <div className="home-details">
            <p>
              My name is Boluwatife Olayinka with Github username Billi070. Nice
              to meet you, you can check out my Github repositories from Repos
              link on the NavBar.
            </p>
            {/* <p>My Github Username: </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
