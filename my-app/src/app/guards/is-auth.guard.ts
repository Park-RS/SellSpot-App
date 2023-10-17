import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { ModalService } from '../services/modal.service';

export const isAuthGuard: CanActivateFn = (route, state) => {
	const token = sessionStorage.getItem('token');
	const modal = inject(ModalService);
	if(token){
		return true
	}
	else
	{
		modal.openDialog()
		return false
	}


};
