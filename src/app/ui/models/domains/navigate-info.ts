export class NavigateInfo {

    private route: string;

    constructor(value: string) {
        this.route = value;
    }

    getRoute() {
        return this.route;
    }
}