import React from "react";

//Filters component gives you options to filter the video list. You can sort the videos based on their published date or video title.
const Filters = props => {
  const { sortBy, changeSortBy } = props;
  return (
    <div className="filters">
      <div className="filters__sortBy">
        <span className="filters__sortBy--label">Sort By: </span>
        <select
          className="filters__sortBy--dropdown"
          value={sortBy}
          onChange={event => changeSortBy(event.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="date">Upload Date</option>
          <option value="title">Video Title</option>
        </select>
      </div>
    </div>
  );
};
export default Filters;
