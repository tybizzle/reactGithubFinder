// FUNCTIONAL COMPONENT
import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-block btn-dark'
        />
      </form>
      {/* if users array is more than zero then show clear button */}
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

// CLASS COMPONENT
// import React, { Component } from "react";
// import PropTypes from "prop-types";

// export class Search extends Component {
//   state = {
//     text: "",
//   };

//   static propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired,
//   };

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text === "") {
//       this.props.setAlert("Please enter something", "light");
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: "" });
//     }
//   };

//   render() {
//     const { showClear, clearUsers } = this.props;

//     return (
//       <div>
//         <form onSubmit={this.onSubmit} className="form">
//           <input
//             type="text"
//             name="text"
//             placeholder="Search Users..."
//             value={this.state.text}
//             onChange={this.onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-block btn-dark"
//           />
//         </form>
//         {/* if showClear(props) is true then show clear button */}
//         {showClear && (
//           <button className="btn btn-light btn-block" onClick={clearUsers}>
//             Clear
//           </button>
//         )}
//       </div>
//     );
//   }
// }

// export default Search;
