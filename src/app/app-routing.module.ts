import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FeatureSwitchAuthService as AuthGaurd } from "./feature-switch-auth.service";

import { PageNotFoundComponent } from "./not-found.component";
import { TestRoute1Component } from "./test-route1/test-route1.component";
import { TestRoute2Component } from "./test-route2/test-route2.component";
import { FeatureSwitchAuthService } from "./feature-switch-auth.service";

const routes: Routes = [
	{
		path: "test-route1",
		component: TestRoute1Component,
		canActivate: [AuthGaurd],
		data: { feature: "test-route-feature" },
	},
	{
		path: "test-route2",
		component: TestRoute2Component,
		canActivate: [AuthGaurd],
		data: { feature: "test-route-feature" },
	},
	{
		path: "",
		component: TestRoute1Component,
		data: { feature: "test-route-feature" },
		canActivate: [AuthGaurd],
	},
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
	],
	exports: [RouterModule],
	providers: [FeatureSwitchAuthService],
})
export class AppRoutingModule {}
