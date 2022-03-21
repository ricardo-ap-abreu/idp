import {FilterOption} from '../filters/filter-option';
import {Sort} from '../sort/sort';

export class PagingRequest {

  private start: number;
  private end: number;
  private options: FilterOption[];
  private sort: Sort;

  constructor() {
  }

    getEnd(): number {
        return this.end;
    }

    getOptions(): FilterOption[] {
        return this.options;
    }

    getSort(): Sort {
        return this.sort;
    }

    getStart(): number {
        return this.start;
    }

    setEnd(end: number): void {
        this.end = end;
    }

    setFilters(filters: FilterOption[]): void {
        this.options = filters;
    }

    setSort(sort: Sort): void {
        this.sort = sort;
    }
    setStart(start: number): void {
        this.start = start;
    }

}
