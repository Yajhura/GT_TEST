import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { CustomDialog } from '../CustomDialog';
import { FavoritePeople } from './FavoritePeople';
import GradeIcon from '@mui/icons-material/Grade';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	const handleClick = () => {
		dialogOpenSubject$.setSubject = true;
	};

	return (
		<>
			<CustomDialog>
				<FavoritePeople />
			</CustomDialog>
			<AppBar
				sx={{
					backgroundColor: '#242424',
				}}
				position="static">
				<Toolbar>
					<Box
						padding={'0px 20px'}
						flex={1}
						display={'flex'}
						alignItems="center"
						justifyContent={'space-between'}>
						<Typography variant="h6">Test</Typography>

						<IconButton
							size="medium"
							color="success"
							edge="end"
							sx={{ ml: 2 }}
							onClick={handleClick}>
							<GradeIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
