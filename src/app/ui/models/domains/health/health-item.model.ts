import {HealthStatus} from './health-status';

export class HealthItem {

  private name: string;
  private description: string;
  private status: HealthStatus;
  private error: string;

  constructor() {
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getStatus(): HealthStatus {
    return this.status;
  }

    getError(): string {
       return this.error;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setStatus(status: HealthStatus): void {
        this.status = status;
    }

    setError(error: string): void {
        this.error = error;
    }

    canDisplay(): boolean {
        return this.getStatus() === HealthStatus.Unhealthy;
    }
}
