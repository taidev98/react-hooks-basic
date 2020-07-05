import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

SearchFrom.propTypes = {
  onSubmit: PropTypes.func,
};

function SearchFrom({ onSubmit }) {
  const [searchForm, setSearchForm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchFormChange(e) {
    const { value } = e.target;
    setSearchForm(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchForm: value,
      };
      onSubmit(formValues);
    }, 700);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchForm}
          onChange={handleSearchFormChange}
        />
      </form>
    </div>
  );
}

export default SearchFrom;
