import "./index.css";

const Modal = ({ children }) => {
  return (
    <div className="Modal">
      <div className="content">{children}</div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal;