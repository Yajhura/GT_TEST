import { Person } from '@/models';
import { addFavorite } from '@/redux/state';
import { Appstore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
	const [selectedRow, setSelectedRow] = useState<Person[]>([]);
	const { people, favorites } = useSelector((state: Appstore) => state);
	const dispatch = useDispatch();

	const pageSize = 5;
	const findRow = (person: Person) => !!selectedRow.find((f) => f.id === person.id);
	const filterPerson = (person: Person) => selectedRow.filter((f) => f.id !== person.id);
	
	const handleChange = (params: Person) => {
		const filteredPeople = findRow(params)
			? filterPerson(params)
			: [...selectedRow, params];

		dispatch(addFavorite(filteredPeople));
		setSelectedRow(filteredPeople);
	};
	const columns: GridColDef[] = [
		{
			field: 'actions',
			headerName: '',
			width: 50,
			type: 'actions',
			sortable: false,
			filterable: false,
			renderCell: (params: GridRenderCellParams) => (
				<>
					{
						<Checkbox
							size="small"
							checked={findRow(params.row)}
							onChange={() => handleChange(params.row)}
						/>
					}
				</>
			),
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,

			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
	];

	

	useEffect(() => {
		setSelectedRow(favorites);
	}, [favorites]);

	return (
		<DataGrid
			rows={people}
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default PeopleTable;
