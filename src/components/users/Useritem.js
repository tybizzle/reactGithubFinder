// FUNCTIONAL COMPONENT
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;

// CLASS COMPONENT
// import React, { Component } from "react";

// class Useritem extends Component {
//   render() {
//     // state = {
//     //   id: "id",
//     //   login: "octocat",
//     //   avatar_url: "https://github.com/images/error/octocat_happy.gif",
//     //   html_url: "https://github.com/octocat",
//     // };
//     const { login, avatar_url, html_url } = this.props.user;

//     return (
//       <div className="card text-center">
//         <img
//           src={avatar_url}
//           alt=""
//           className="round-img"
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className="btn btn-dark btn-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default Useritem;
