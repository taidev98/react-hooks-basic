import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onTodoSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onTodoSubmit: null,
};

function TodoForm(props) {
  const { onTodoSubmit } = props;
  const [value, setValue] = useState("");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onTodoSubmit) return;
    const formValues = {
      title: value,
    };
    onTodoSubmit(formValues);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleValueChange}></input>
      </form>
    </div>
  );
}

export default TodoForm;
