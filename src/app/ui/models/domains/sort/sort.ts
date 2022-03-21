import {Direction} from '../paginator/direction.enum';

export class Sort {

    private propertyName: string;
    private direction: Direction;

    constructor(
        propertyName: string,
        direction: Direction
    ) {
        this.propertyName = propertyName;
        this.direction = direction;
    }

    getDirection(): Direction {
        return this.direction;
    }

    getPropertyName(): string {
        return this.propertyName;
    }

    setDirection(direction: Direction): void {
        this.direction = direction;
    }

    setPropertyName(propertyName: string): void {
        this.propertyName = propertyName;
    }

  applySort(items: Object[]): Object[] {
    return items.sort(this.dynamicSort(this.propertyName, this.direction === Direction.Asc ? 1 : -1));
  }

  private dynamicSort(property: string, sortOrder: number) {
    return (a: { [x: string]: number; }, b: { [x: string]: number; }) => {
      const type: string = typeof (a[property]);
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

}
