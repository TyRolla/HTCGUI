import React from "react";

class Homepage extends React.Component {
  myInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const userID = this.myInput.current.value;
    this.props.history.push(`/caf/${userID}`);
  };

  render() {
    return (
      <div className="login-component">
        <h3>CAF Database Login</h3>
        <form onSubmit={this.handleSubmit}>
          <label>User Name</label>
          <br></br>
          <input
            type="text"
            ref={this.myInput}
            placeholder="username"
            required
            defaultValue="guest"
          />
          <br></br>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Homepage;
