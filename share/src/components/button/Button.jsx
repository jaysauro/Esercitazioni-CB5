import "./index.css";

const Button = ({ isModalEnabled, func }) => {
    return (
      <button
        onClick={func}
        className={`Button ${isModalEnabled ? "active" : "passive"}  `}
      >
        {isModalEnabled ? "❌" : "➕"}
      </button>
    );
  };
  
  export default Button;