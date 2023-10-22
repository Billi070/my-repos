import React from "react";
import { Link } from "react-router-dom";

const RepoData = ({ repo }) => {
  return (
    <div className="home">
      <div className="home-cont">
        <h1>
          <span className="span">Repo:</span> {`${repo.name}`}
        </h1>
      
        <div className="error-btn">
          <Link to={`/repos/${repo.name}`} className="btn">
            CheckOut Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RepoData;
