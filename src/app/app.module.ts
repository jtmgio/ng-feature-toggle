import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./not-found.component";
import { TestRoute1Component } from "./test-route1/test-route1.component";
import { TestRoute2Component } from "./test-route2/test-route2.component";

@NgModule({
	declarations: [
		AppComponent,
		TestRoute1Component,
		TestRoute2Component,
		PageNotFoundComponent,
	],
	imports: [BrowserModule, RouterModule, AppRoutingModule, HttpClientModule],
	providers: [AuthService, AuthGuardService],
	bootstrap: [AppComponent],
})
export class AppModule {}
