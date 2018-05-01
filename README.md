# JTMGIO-UI-NG-FEATURE-SWITCH
NG Feature Switch is used to check if a feature has been enabled on the JTMGIO Control Panel. This feature has a direct dependency on JTMGIO-UI-NODE-FEATURE-SWITCH	https://www.npmjs.com/package/@jtmgio/jtmgio-ui-node-feature-switch

## Build App
```
npm run package
```

## INSTALLATION
```
npm i @jtmgio/jtmgio-ui-ng-feature-switch --save
```

## Example Implementation 
https://github.com/jtmgio/ui-reference-app/tree/master/public/deep-linking
## Use In Angular App
The following files are required to use this library 

### NgModule
In your module file that will be used to handle dependencies you will need to include the library as a provider
```ts
import { AuthGuardService } from "@jtmgio/jtmgio-ui-ng-feature-switch";
@NgModule({
	providers: [AuthGuardService],
	bootstrap: [AppComponent],
	exports: []
})
```

### Auth Service 
You will need to create an auth service to extend the libraries functionality. Below is an exact example of this
```js
import { Injectable, Injector } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router"; 
import { HttpClient } from "@angular/common/http";
import { AuthGuardService } from "@jtmgio/jtmgio-ui-ng-feature-switch";
import { environment as env } from "environments/environment";

@Injectable()
export class SomeFeatureAuthGuardService extends AuthGuardService implements CanActivate {
	public API_ENDPOINT: string = env.apiUrl;
	constructor(public router: Router, public http: HttpClient) {
		super();
	}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return super.requestFeatureToggle(route, state);
	}
}
```

### Routing Module
In your routing module you will need to add in the route guard to the route you want to have a feature check on. Note - you will need to pass the correct feature toggle name in as a parameter. `JTMGIO_FORMLIST`
```js
import { SomeFeatureAuthGuardService as FeatureGuard } from "./test-auth.service";
const appRoutes: Routes = [
	{ path: 'forms-list', canActivate: [FeatureGuard], loadChildren: "app/forms-list-feature/forms-list-feature.module#FormsListFeatureModule", data: { feature: "JTMGIO_FORMLIST" } },
	{ path: '', redirectTo: "forms-list", pathMatch: "full" },
	{ path: "**", component: PageNotFoundComponent }
];

```

### Ensure you have also setup the JTMGIO-UI-NODE-FEATURE-SWITCH	
this will not work with out JTMGIO-UI-NODE-FEATURE-SWITCH	https://www.npmjs.com/package/@jtmgio/jtmgio-ui-node-feature-switch activated