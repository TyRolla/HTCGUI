import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import HTBack from "../images/htback.jpg";

class Homepage extends React.Component {
  myInput = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    const userID = this.myInput.current.value;
    this.props.history.push(`/Option/${userID}`);
  };

  render() {
    return (
      <div>
        <img className="login-bg" src={HTBack} alt="Background Image" />
        <div className="login-component">
          <h3>CAF Database Login</h3>
          <form onSubmit={this.handleSubmit}>
            <br></br>
            <TextField
              label="Username"
              variant="outlined"
              inputRef={this.myInput}
              required
              defaultValue="guest"
            />
            <br></br>
            <br></br>
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Homepage;
