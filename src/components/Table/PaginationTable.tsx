import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const PaginationTable = (): JSX.Element => {
  // 렌더될 때마다 다시 recreate 하지 않기 위해 설정
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    // Basic
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //pagination (rows-> page로),
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    //----
    prepareRow,
    // Footer
    footerGroups,
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
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
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
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
      <div>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          이전
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          다음
        </button>
      </div>
    </>
  );
};

export default PaginationTable;

const TableFrame = styled.div`
  table thead tr,
  table tfoot tr {
    background-color: yellow;
  }
`;
