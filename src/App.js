import { useCallback, useEffect, useState } from "react";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

import Filter from "./component/Filter";
import Table from "./component/Table";
import CustomTabs from "./component/Tabs";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [key, setKey] = useState("All");

  const [totalRows, setTotalRows] = useState(0);
  const [tabs] = useState([
    { label: "All", stats: "27" },
    { label: "Risk", stats: "4" },
    { label: "On Hold", stats: "4" },
    { label: "Potential Risk", stats: "7" },
    { label: "On track", stats: "12" },
  ]);

  useEffect(() => {
    filterData(key);
  }, [key]);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterData = (filterKey) => {
    const _filteredData = data.filter((d) =>
      d.status.toLocaleLowerCase().includes(filterKey.toLocaleLowerCase())
    );
    setFilteredData(_filteredData);
  };

  const getData = async (page=1,) => {
    await fetch(`http://localhost:3000/data?_page=${page}&_limit=100`)
      .then((response) => response.json())
      .then((resp) => {
        setData(resp);
        setTotalRows(resp.length);
      })
      .catch((error) => console.log(error));
  };

  // const handlePageChange = (page) => {
  //   getData(page);
  // };

  // const handlePerRowsChange = async (newPerPage, page) => {
  //   console.log(newPerPage, page)
  // };

  return (
    <div className="d-flex h-100">
      <Sidebar />
      <div className="w-100 d-flex flex-column h-100 overflow-auto">
        <Header />
        <div className="w-100 px-3">
          <Filter />
          <CustomTabs tabeNames={tabs} setKey={filterData} key={key} />
          <Table
            data={filteredData.length > 0 ? filteredData : data}
            // handlePageChange={handlePageChange}
            // handlePerRowsChange={handlePerRowsChange}
            totalRows={totalRows}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
