import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor() {

	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - hasAccess
	**-------------------------------------------------------------------------------------
	*/
	hasAccess(): boolean {
		console.log("in auth service");
		return false;
	}
}