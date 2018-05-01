import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule
	],
	declarations: [
	],
	exports: [],
	providers: [AuthService, AuthGuardService]
})
export class AuthModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AuthModule
		};
	}
}
