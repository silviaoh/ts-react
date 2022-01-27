import { useMemo } from "react";
import styled from "styled-components";
// GlobalFiltering 2. import useGlobalFilter
import { useTable, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";

const GlobalFilteringTable = (): JSX.Element => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    // Basic
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // Footer
    footerGroups,
    // 4. globalFilter
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    // GlobalFiltering 3. 두번째 인자로 넣기
    useGlobalFilter
  );

  // GlobalFiltering 5.
  const { globalFilter } = state;

  // GlobalFiltering 6.
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <TableFrame>
        {/* Basic */}
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          {/* Footer */}
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps}>{column.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </TableFrame>
    </>
  );
};

export default GlobalFilteringTable;

const TableFrame = styled.div`
  table thead {
    height: 40px;
  }
  table thead tr {
    background-color: red;
  }

  table tfoot tr {
    background-color: yellow;
  }
`;
