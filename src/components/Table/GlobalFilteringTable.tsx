import { useMemo } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';

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
	} = useTable({
		columns,
		data,
	});

	return (
		<TableFrame>
			{/* Basic */}
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
		</TableFrame>
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
