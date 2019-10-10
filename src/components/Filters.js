import React from "react";

/** Filters component gives you options to filter the video list.
 * You can filter by the number of videos displayed on the screen.
 * You can also sort the videos based on their published date or video title.
 */

const Filters = props => {
  const { sortBy, changeSortBy, numberOfVideos, changeNumberOfVideos } = props;
  return (
    <div className="filters">
      <div className="filters__option">
        <span className="filters__option--label">No. of Videos: </span>
        <select
          className="filters__option--dropdown"
          value={numberOfVideos}
          onChange={event => changeNumberOfVideos(event.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      <div className="filters__option">
        <span className="filters__option--label">Sort By: </span>
        <select
          className="filters__option--dropdown"
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
