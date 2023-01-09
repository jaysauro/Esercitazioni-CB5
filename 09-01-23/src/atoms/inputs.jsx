import './inputs.css';

export function Input(props) {
    const { label = "", type = "text", ...attributes } = props;
  
    return (
      <label>
        <span className='spanTitle'>{label}</span>
        {type === "textarea" ? (
          <textarea {...attributes}></textarea>
        ) : (
          <input type={type} {...attributes} />
        )}
      </label>
    );
  }