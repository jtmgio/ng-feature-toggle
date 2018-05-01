import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
	<router-outlet #outletter="outlet"></router-outlet>
`,
})
export class AppComponent {}
