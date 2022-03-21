		
export class UserOptions {
    remember: boolean;
    getRemember(): boolean {
        return this.remember;
    }
    setRemember(remember: boolean) {
        this.remember = remember;
    }
}