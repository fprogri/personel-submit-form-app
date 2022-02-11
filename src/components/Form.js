import react from "react";
import FormInput from "./FormInput";

class Form extends react.Component {
  initialState = {
    name: "",
    surname: "",
    job: "",
  };
  state = this.initialState;
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, surname, job } = this.state;
    return (
      <form>
        <FormInput
          name="name"
          characters={name}
          handleChange={this.handleChange}
        />
        <FormInput
          name="surname"
          characters={surname}
          handleChange={this.handleChange}
        />
        <FormInput
          name="job"
          characters={job}
          handleChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
