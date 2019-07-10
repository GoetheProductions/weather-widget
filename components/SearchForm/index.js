const SearchForm = ({ handleSubmit, searchQuery, handleSearch }) => (
  <form onSubmit={handleSubmit} className="form-inline">
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="City"
        type="text"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
    <button disabled={searchQuery.length === 0} type="submit" className="btn btn-default">
      Search
    </button>
  </form>
);

export default SearchForm;

