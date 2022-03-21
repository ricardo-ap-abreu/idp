import { Injectable } from '@angular/core';
import { RemoteGatewayFactory } from '../gateways/remote-gateway-factory';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { IReport, PowerBiReport, IReportConfiguration, ReportType, PowerBiReportConfiguration } from '../models/domains/reports/report';
import { PowerBiReportParser } from './parsers/powerbi-report-parser';
import { ReportUrl, ReportServiceUrl } from '../models/domains/urls/report.url';

@Injectable()
export class ReportRepository {

    private reportStrategies: Array<IReportStrategy>;

    constructor(
        private authService: AuthService,
        private remoteGatewayFactory: RemoteGatewayFactory,
        private powerBiReportParser: PowerBiReportParser) {
        this.reportStrategies = new Array<IReportStrategy>();
        this.reportStrategies.push(new PowerBiReportStrategy(authService, remoteGatewayFactory, powerBiReportParser));
    }

    async getReportConfiguration(reportConfiguration: IReportConfiguration): Promise<IReport> {
        let strategy = this.reportStrategies.find(s => s.getReportType() === reportConfiguration.getReportType());
        if (!strategy) {
            throw `Cannot find report strategy by type: ${reportConfiguration.getReportType()}`;
        }
        return strategy.getReport(reportConfiguration);
    }
}

export interface IReportStrategy {
    getReportType(): ReportType;
    getReport(reportConfiguration: IReportConfiguration): Promise<IReport>;
}

export class PowerBiReportStrategy implements IReportStrategy {

    constructor(
        private authService: AuthService,
        private remoteGatewayFactory: RemoteGatewayFactory,
        private parser: PowerBiReportParser) {
    }

    getReportType(): ReportType {
        return ReportType.PowerBi;
    }

    async getReport(reportConfiguration: IReportConfiguration): Promise<IReport> {
        let powerBiConfiguration = <PowerBiReportConfiguration>reportConfiguration;
        if (!powerBiConfiguration) {
            throw 'Invalid power bi report configuration';
        }

        let report: PowerBiReport;

        //CAUTION
        //Accessing report as service will be allowed only for production. 
        //QA environment will use report access user auth only.

        if (this.authService.isUserLogged() || !environment.production) {
            report = await this.getReportConfigurationAsUser(powerBiConfiguration.getWorkspaceId(), powerBiConfiguration.getReportId(), powerBiConfiguration.getRole());
        }
        else {
            report = await this.getReportConfigurationAsService(powerBiConfiguration.getWorkspaceId(), powerBiConfiguration.getReportId(), powerBiConfiguration.getRole());
        }

        return Promise.resolve(report);
    }

    private async getReportConfigurationAsUser(workspaceId: string, id: string, role: string): Promise<PowerBiReport> {
        try {
            const data = await this.remoteGatewayFactory.createDefaultRemoteGateway().get(new ReportUrl('/api/report/' + workspaceId + '/' + id + '/' + role));
            return Promise.resolve(this.parser.parse(data));
        }
        catch (error) {
            return await Promise.reject(error);
        }
    }

    private async getReportConfigurationAsService(workspaceId: string, id: string, role: string): Promise<PowerBiReport> {
        try {
            const data = await this.remoteGatewayFactory.createDefaultRemoteGateway().get(new ReportServiceUrl('/api/report/' + workspaceId + '/' + id + '/' + role));
            return Promise.resolve(this.parser.parse(data));
        }
        catch (error) {
            return await Promise.reject(error);
        }
    }
}