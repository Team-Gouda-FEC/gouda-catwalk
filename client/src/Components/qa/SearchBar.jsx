import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ submission, questionSearch }) => (
  <form onSubmit={submission}>
    <input
      type="text"
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS... "
      onChange={(event) => {
        questionSearch(event);
      }}
    />
    <button type="submit">Submit</button>
  </form>
);

SearchBar.propTypes = {
  submission: PropTypes.func.isRequired,
  questionSearch: PropTypes.func.isRequired,
};

export default SearchBar;
