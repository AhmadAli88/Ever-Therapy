import PropTypes from "prop-types";
import styled from "styled-components";
import MaterialReactTable from "material-react-table";
import { useRef, useState } from "react";

const StyledMaterialReactTable = styled(MaterialReactTable)`
  && {
    .css-18n3qs7-MuiTableRow-root.Mui-selected {
      background-color: #fff5f5 !important;
    }
  }
`;

export default function Table({ columns, data, ...props }) {
  const [sorting, setSorting] = useState([]);
  const tableInstanceRef = useRef(null);

  return (
    <StyledMaterialReactTable
      renderRowActionMenuItems={props.renderRowActionMenuItems}
      columns={columns}
      data={data}
      state={{ sorting }}
      onSortingChange={setSorting}
      tableInstanceRef={tableInstanceRef}
      enableTopToolbar={props.enableTopToolbar}
      enableColumnFilters={props.enableColumnFilters}
      enableColumnActions={props.enableColumnActions}
      enableRowSelection={props.enableRowSelection}
      enableRowActions={props.enableRowActions}
      renderRowActions={props.renderRowActions}
      positionActionsColumn={props.positionActionsColumn}
      enablePagination={false}
      defaultColumn={props.defaultColumn}
      muiTablePaperProps={{
        sx: { boxShadow: "none", my: "10px" },
      }}
      muiTableProps={{
        sx: {
          border: "none",
          boxShadow: "none",
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          backgroundColor: "#F9FAFC",
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          borderBottomColor: "#F2F2F2",
        },
      }}
      muiSelectCheckboxProps={{
        sx: {
          color: "#EFEFEF",
        },
      }}
      muiSelectAllCheckboxProps={{
        sx: {
          color: "#EFEFEF",
        },
      }}
      {...props}
    />
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      header: PropTypes.string,
      accessorKey: PropTypes.string,
      Cell: PropTypes.func,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderRowActionMenuItems: PropTypes.func,
  enableRowSelection: PropTypes.bool,
  enableTopToolbar: PropTypes.bool,
  enableColumnFilters: PropTypes.bool,
  enableColumnActions: PropTypes.bool,
  enableRowActions: PropTypes.bool,
  renderRowActions: PropTypes.func,
  positionActionsColumn: PropTypes.oneOf(["first", "last"]),
  defaultColumn: PropTypes.shape({
    maxSize: PropTypes.number,
    minSize: PropTypes.number,
    size: PropTypes.number,
  }),
};

Table.defaultProps = {
  enableRowSelection: true,
  enableTopToolbar: false,
  enableColumnFilters: false,
  enableColumnActions: false,
  enableRowActions: true,
  positionActionsColumn: "last",
  defaultColumn: {
    maxSize: 400,
    minSize: 50,
    size: 150,
  },
};
