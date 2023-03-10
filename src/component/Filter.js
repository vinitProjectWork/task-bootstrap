import { useCallback, useEffect, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Calander, FilterIcon } from "../asset/js/icon";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

const CACHE = {};
const PER_PAGE = 10;
const SEARCH_URI = "http://localhost:3000/data";

const Filter = () => {
  const [, setSelectedFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (q) => {
    setQuery(q);
  };

  function makeAndHandleRequest(query) {
    return fetch(`${SEARCH_URI}?firstName=${query}`)
      .then((resp) => resp.json())
      .then((rep) => {
        console.log("here", rep);
      });
  }

  const handlePagination = (e, shownResults) => {
    const cachedQuery = CACHE[query];
    if (
      cachedQuery.options.length > shownResults ||
      cachedQuery.options.length === cachedQuery.total_count
    ) {
      return;
    }

    setIsLoading(true);

    const page = cachedQuery.page + 1;

    makeAndHandleRequest(query, page).then((resp) => {
      const options = cachedQuery.options.concat(resp.options);
      CACHE[query] = { ...cachedQuery, options, page };

      setIsLoading(false);
      setOptions(options);
    });
  };

  const handleSearch = useCallback((q) => {
    if (CACHE[q]) {
      setOptions(CACHE[q].options);
      return;
    }

    setIsLoading(true);
    makeAndHandleRequest(q).then((resp) => {
      CACHE[q] = { ...resp };
      setIsLoading(false);
      setOptions(resp);
    });
  }, []);

  return (
    <div className="d-flex w-100 align-items-center justify-content-between px-2 py-2">
      <div className="d-flex w-25 justify-content-between">
        <div className="rounded-1 border px-1 d-flex justify-content-center align-items-center">
          <Calander />
        </div>
        <div className="border ml-5 w-75 rounded-2 d-flex align-items-center">
          <div className="border d-flex align-items-center px-1">
            <FilterIcon />
            <Dropdown
              className="bg-light"
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <Dropdown.Toggle className="bg-light border-0 text-dark fw-bold">
                All
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Risk</Dropdown.Item>
                <Dropdown.Item href="#/action-3">On hold</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Potential risk</Dropdown.Item>
                <Dropdown.Item href="#/action-3">On track</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Archived</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="w-100">
            <AsyncTypeahead
              id="async-pagination-example"
              isLoading={isLoading}
              labelKey="login"
              maxResults={PER_PAGE - 1}
              minLength={2}
              onInputChange={handleInputChange}
              onPaginate={handlePagination}
              onSearch={handleSearch}
              options={options}
              paginate
              placeholder="Search..."
              renderMenuItemChildren={(option) => (
                <div key={option.id}>
                  <img
                    alt={option.login}
                    src={option.avatar_url}
                    style={{
                      height: "24px",
                      marginRight: "10px",
                      width: "24px",
                    }}
                  />
                  <span>{option.login}</span>
                </div>
              )}
              useCache={false}
            />
          </div>
        </div>
      </div>

      <div>
        <Button variant="primary" className="bg-primary text-light fw-bold">
          + New Project
        </Button>
      </div>
    </div>
  );
};

export default Filter;
