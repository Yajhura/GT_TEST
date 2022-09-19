import { Person } from '@/models';
import { removeFavorites } from '@/redux/state';
import { Appstore } from '@/redux/store';
import { IconButton, Stack } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
export interface FavoritePeopleInterface {}

const FavoritePeople: React.FC<FavoritePeopleInterface> = () => {
	const { favorites } = useSelector((state: Appstore) => state);
	const dispatch = useDispatch();
	const pageSize = 5;

	const columns: GridColDef[] = [
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
		{
			field: 'actions',
			headerName: '',
			width: 50,
			type: 'actions',
			sortable: false,
			filterable: false,
			renderCell: (params: GridRenderCellParams) => (
				<>
					<IconButton
						size="medium"
						color="success"
						edge="start"
						onClick={() => handleChange(params.row)}>
						<DeleteIcon />
					</IconButton>
				</>
			),
		},
	];

	const handleChange = (params: Person) => {
		dispatch(removeFavorites(params));
	};

	return (
		<DataGrid
			rows={favorites}
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			components={{
				NoRowsOverlay: () => (
					<Stack height="100%" alignItems="center" justifyContent="center">
						No se encontraron resultados
					</Stack>
				),
				NoResultsOverlay: () => (
					<Stack height="100%" alignItems="center" justifyContent="center">
						No se encontraron resultados
					</Stack>
				),
			}}
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default FavoritePeople;
