import React from "react";
import { PropTypes } from "prop-types";
import useForm from "../../hooks/useForm";

const PokemonSearch = (props) => {
  const { filter, handleSearch } = props;
  const [formValues, handleInputChange] = useForm({ searchText: filter });
  const { searchText } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  return (
    <>
      <div className="col-lg-12 mt-4 mb-4">
        <form
          onSubmit={handleSubmit}
          className="animate__animated animate__flash"
        >
          <div className="input-group">
            <input
              id="searchText"
              type="text"
              className="form-control"
              placeholder="Buscar por nombre..."
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"> </i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

PokemonSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default PokemonSearch;
