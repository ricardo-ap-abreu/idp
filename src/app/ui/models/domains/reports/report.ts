export enum ReportType {
    PowerBi
}

export interface IReportConfiguration {
    getReportType(): ReportType;
}

export interface IReport {
}

export class PowerBiReport implements IReport {

    static emptyReport(): PowerBiReport {
        return new PowerBiReport(null, null, null);
    }

    constructor(
        private id: string,
        private embedUrl: string,
        private embedToken: EmbedToken) {
    }

    private isEffectiveIdentityRequired: boolean;
    private isEffectiveIdentityRolesRequired: boolean;

    getId(): string {
        return this.id;
    }

    getEmbedUrl(): string {
        return this.embedUrl;
    }

    getEmbedToken(): EmbedToken {
        return this.embedToken;
    }
}

export class EmbedToken {

    constructor(
        private token: string,
        private tokenId: string,
        private expiration: string
    ) { }

    getToken(): string {
        return this.token;
    }

    getTokenId(): string {
        return this.tokenId;
    }

    getExpiration(): string {
        return this.expiration
    }
}

export class PowerBiReportConfiguration implements IReportConfiguration {

    constructor(
        private workspaceId: string,
        private reportId: string,
        private role: string) {
    }

    getReportType(): ReportType {
        return ReportType.PowerBi;
    }

    getWorkspaceId(): string {
        return this.workspaceId;
    }

    getReportId(): string {
        return this.reportId;
    }

    getRole(): string {
        return this.role;
    }
}