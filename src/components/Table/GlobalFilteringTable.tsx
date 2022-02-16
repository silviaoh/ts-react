import { useMemo } from 'react';
import styled from 'styled-components';
// GlobalFiltering 2. import useGlobalFilter
// Column Filtering 2. useFilters
import { useTable, useGlobalFilter, useFilters } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';
import exportExcel from '../../functions/export';

const GlobalFilteringTable = (): JSX.Element => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => MOCK_DATA, []);

	// Filter: ColumnFilter 일일히 설정하지 않아도 적용할 수 잇는 방법
	const defaultColumn = useMemo(() => {
		return {
			Filter: ColumnFilter,
		};
	}, []);

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
		setFilter,
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
		},
		// GlobalFiltering 3. 두번째 인자로 넣기
		useGlobalFilter,
		useFilters
	);

	const header = headerGroups[0].headers.map((el) => {
		return el.Header;
	});

	console.log('header', header);

	const column = rows;

	console.log('column', column);

	// GlobalFiltering 5. filter: filter된 값이 들어감.
	const { globalFilter } = state;

	console.log(`globalFilter`, globalFilter);

	// GlobalFiltering 6.
	return (
		<>
			<GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} setFilter={setFilter} />
			<TableFrame>
				{/* Basic */}
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
										<div>{column.canFilter ? column.render('Filter') : null}</div>
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
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
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
									<td {...column.getFooterProps}>{column.render('Footer')}</td>
								))}
							</tr>
						))}
					</tfoot>
				</table>
				<button type="button" onClick={() => exportExcel('제품/부품', '제품 정보')}>
					다운로드
				</button>
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
