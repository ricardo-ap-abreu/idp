export class EmailAddress {

  private address: string;

  constructor(value: string) {
    this.address = value;
  }

  getAddress(): string {
    return this.address;
  }
}
