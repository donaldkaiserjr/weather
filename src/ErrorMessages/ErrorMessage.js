import "./ErrorMessage.css";

function ErrorMessage(props) {
  return <p id="error__message">{props.message}</p>;
}

export default ErrorMessage;
