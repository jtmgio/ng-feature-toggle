import { Injectable, Injector } from "@angular/core";
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { environment as env } from "../environments/environment";

@Injectable()
export class FeatureSwitchAuthService extends AuthGuardService
	implements CanActivate {
	public API_ENDPOINT: string = env.api;
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - constructor
	**-------------------------------------------------------------------------------------
	*/
	constructor(public router: Router, public http: HttpClient) {
		super();
	}
	/*
	**-------------------------------------------------------------------------------------
	** METHOD NAME - canActivate
	**-------------------------------------------------------------------------------------
	*/
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return super.requestFeatureToggle(route, state);
	}
}
