import { SubjectManager } from '@/models/subjectmanager';
import { Subscription } from 'rxjs';
import React, { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';

interface CustomDialogInterface {
	children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog: React.FC<CustomDialogInterface> = ({ children }) => {
	const [open, setOpen] = useState(false);

	let openSubject$ = new Subscription();
	let closeSubject$ = new Subscription();

	useEffect(() => {
		openSubject$ = dialogOpenSubject$.getSubject.subscribe((value) => handleClickOpen());
		closeSubject$ = dialogCloseSubject$.getSubject.subscribe((value) => handleClose());
		return () => {
			openSubject$.unsubscribe();
			closeSubject$.unsubscribe();
		};
	}, []);

	const handleClickOpen = () => {
		return setOpen(true);
	};
	const handleClose = () => {
		return setOpen(false);
	};

	const handleExit = () => {
		dialogCloseSubject$.setSubject = false;
	};

	return (
		<Dialog
			open={open}
			onClose={() => handleExit()}
			fullWidth
			arial-labelledby="alert-dialog-title"
			arial-describedby="alert-dialog-description">
			{children}
		</Dialog>
	);
};

export default CustomDialog;
