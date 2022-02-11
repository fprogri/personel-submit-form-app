function FormInput(props) {
  return (
    <div>
      <label htmlFor={props.name}>
        {props.name.slice(0, 1).toUpperCase() +
          props.name.slice(1, props.name.length)}
      </label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        value={props.characters}
        onChange={props.handleChange}
      />
    </div>
  );
}
export default FormInput;
