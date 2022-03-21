export class AlertMessage {
    type: AlertType;
    message: string;
    closeOption = true;
    onTryAgain: () => void | null = null;

    constructor(init?: Partial<AlertMessage>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
