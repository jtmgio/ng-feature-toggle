import { Injectable, Injector } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class AuthGuardService {
	auth: AuthService;
	router: Router;
	route: ActivatedRouteSnapshot;
	http: HttpClient;
	API_ENDPOINT: string;

	constructor() { }
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - requestFeatureToggle
	**-------------------------------------------------------------------------------------
	*/
	requestFeatureToggle(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return new Promise(resolve => {
			let ret: any;
			this.http
				.post<any>(`${this.API_ENDPOINT}/feature-switch/has-feature`, { 'feature': route.data.feature })
				.toPromise()
				.then(response => {
					if (!response.hasAccess) {
						this.router.navigate(["/404"]);
						resolve(false);
						return;
					}
					resolve(true);
				})
				.catch(err => {
					resolve(false);
				});
		});
	}
}
