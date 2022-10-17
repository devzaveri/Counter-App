import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Counter App';
        this.count = 0;
        this.handelIncress = () => {
            if (this.count === 10) {
                this.count = -1;
            }
            this.count = this.count + 1;
        };
        this.handelDecress = () => {
            if (this.count < 1) {
                this.count = 1;
            }
            this.count = this.count - 1;
        };
        this.handelReset = () => {
            this.count = 0;
        };
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map