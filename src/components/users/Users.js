// FUNCTIONAL COMPONENT
import React, { useContext } from "react";
import Useritem from "./Useritem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;

// CLASS COMPONENT
// import React, { Component } from "react";
// import Useritem from "./Useritem";

// class Users extends Component {
//   // state = {
//   //   users: [
//   //     {
//   //       id: "1",
//   //       login: "mojombo",
//   //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
//   //       html_url: "https://github.com/mojombo",
//   //     },
//   //     {
//   //       id: "2",
//   //       login: "defunkt",
//   //       avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
//   //       html_url: "https://github.com/defunkt",
//   //     },
//   //     {
//   //       id: "3",
//   //       login: "pjhyett",
//   //       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
//   //       html_url: "https://github.com/pjhyett",
//   //     },
//   //   ],
//   // };

//   render() {
//     return (
//       <div style={userStyle}>
//         {this.props.users.map((user) => (
//           <Useritem key={user.id} user={user} />
//         ))}
//       </div>
//     );
//   }
// }

// const userStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(3, 1fr)",
//   gridGap: "1rem",
// };

// export default Users;
