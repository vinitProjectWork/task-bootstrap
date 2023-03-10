import { useMemo } from "react";

import { FileIcon, InfoSolidIcon } from "../asset/js/icon";
import DataTable from "react-data-table-component";

const Table = ({ data, handlePageChange, handlePerRowsChange, totalRows }) => {
  const columns = useMemo(
    () => [
      {
        name: "#",
        selector: (row) => row.id,
        sortable: true,
        center: true,
        grow: 0,
      },
      {
        name: <div className="fw-bold">{"Project Name".toUpperCase()}</div>,
        selector: (row) => row.firstName,
        sortable: true,
        cell: (row) => (
          <div style={{ color: "#9b59b6" }}>
            {row.firstName + " " + row.lastName}
          </div>
        ),
      },
      {
        name: <div className="fw-bold">{"PM"}</div>,
        selector: (row) => row.image,
        grow: 0,
        cell: (row) => (
          <div
            className="rounded-circle p-2 fw-bold"
            style={{ backgroundColor: "#ecf0f1", color: "#9b59b6" }}
          >
            <img src={row.image} alt={row.firstName} width="24" height="24" />
          </div>
        ),
      },
      {
        name: (
          <div className="d-flex align-items-center">
            <div className="px-1 fw-bold">{"Status".toUpperCase()}</div>
            <span>
              <InfoSolidIcon />
            </span>
          </div>
        ),
        selector: (row) => row.status,
        cell: (row) => (
          <div
            className="p-1 rounded-3 d-flex align-items-center"
            style={{ backgroundColor: "#b8e994", color: "#009432" }}
          >
            <div
              className="rounded-circle"
              style={{
                backgroundColor: "#009432",
                width: "8px",
                height: "8px",
              }}
            ></div>
            <div className="px-2">{row.status}</div>
          </div>
        ),
      },
      {
        name: <div className="fw-bold">{"Last Updated".toUpperCase()}</div>,
        selector: (row) => row.lastUpdate,
        sortable: true,
        grow: 2,
        cell: (row) => (
          <div className="d-flex align-items-center">
            <FileIcon />
            <div className="px-1">
              {new Date(row.lastUpdate).toLocaleString("en-GB", {
                timeStyle: "short",
                dateStyle: "medium",
              })}
            </div>
          </div>
        ),
      },
      {
        name: <div className="fw-bold">{"Resources".toUpperCase()}</div>,
        selector: (row) => row.resources,
        gow: 0,
        center: true,
      },
      {
        name: (
          <div className="d-flex align-items-center">
            <div className="px-1 mb-0 fw-bold">
              {"Project Timeline".toUpperCase()}
            </div>
            <span>
              <InfoSolidIcon />
            </span>
          </div>
        ),
        selector: (row) => row.timeline,
        grow: 2,
        cell: (row) => (
          <div className="d-flex align-items-center">
            <div
              style={{ backgroundColor: "#ecf0f1", color: "#353b48" }}
              className="p-1 rounded-3"
            >
              {new Date(row.timeline.startDate).toLocaleString("en-GB", {
                dateStyle: "medium",
              })}
            </div>
            <div className="px-1 fw-bolder">{">"}</div>
            <div
              style={{ backgroundColor: "#ecf0f1", color: "#353b48" }}
              className="p-1 rounded-3"
            >
              {new Date(row.timeline.endDate).toLocaleString("en-GB", {
                dateStyle: "medium",
              })}
            </div>
          </div>
        ),
      },
      {
        name: <div className="fw-bold">{"Estimation".toUpperCase()}</div>,
        selector: (row) => row.estimation,
        center: true,
      },
    ],
    []
  );

  // data provides access to your row data
  const ExpandedComponent = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  console.log(totalRows);

  return (
    <DataTable
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      selectableRows
      pagination
      // paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
    />
  );
};

export default Table;
