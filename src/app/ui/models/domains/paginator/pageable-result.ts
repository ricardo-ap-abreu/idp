export class PageableResult {

    private start = 1;
    private end = 10;
    private totalItems: number;
    private items: Array<{[key: string]: string}>;

    constructor() {
        this.items = [];
    }

    getItems(): Array<{[key: string]: string}> {
        return this.items;
    }

    setItems(items: Array<{[key: string]: string}>): void {
        this.items = items;
    }

    increaseItems(items: Array<{[key: string]: string}>): void {
      this.items = [...items, ...this.items];
    }

    setEnd(end: number): void {
        this.end = end;
    }

    setStart(start: number): void {
        this.start = start;
    }

    setTotalItems(totalItems: number): void {
        this.totalItems = totalItems;
    }

    filterByPageNumber(pageNumber: number) {
        const itemsPerPage = (this.end - this.start) + 1;
        this.start = (pageNumber * itemsPerPage) - (itemsPerPage - 1);
        this.end = pageNumber * itemsPerPage;
        this.items = this.items.slice(this.start - 1, this.end);
    }

    filterByItemsPerPage(itemsPerPage: number) {
        this.start = 1;
        this.end = itemsPerPage;
        this.items = this.items.slice(0, itemsPerPage);
    }

    getItemsPerPage(): number {
        return (this.end - this.start) + 1;
    }

    getTotalPages(): number {
        return Math.ceil(this.totalItems / (this.end + 1 - this.start));
    }

    getPageNumbers(): Array<number> {
        const pageNumbers = new Array<number>();
        for (let i = 0; i < this.getTotalPages(); i++) {
            pageNumbers.push(i + 1);
        }
        return pageNumbers;
    }

    getTotalItems(): number {
        return this.totalItems;
    }

    getStart(): number {
        return this.start;
    }

    getEnd(): number {
        return this.end;
    }
}
