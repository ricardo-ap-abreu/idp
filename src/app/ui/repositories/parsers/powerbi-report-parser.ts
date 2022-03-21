import {Injectable} from '@angular/core';
import {AbstractParser} from './parser';
import {EmbedToken, PowerBiReport} from '../../models/domains/reports/report';

@Injectable()
export class PowerBiReportParser extends AbstractParser<PowerBiReport> {
    parse(data: any): PowerBiReport {
      const embedToken = new EmbedToken(data.EmbedToken.token, data.EmbedToken.tokenId, data.EmbedToken.expiration);
      return new PowerBiReport(data.Id, data.EmbedUrl, embedToken);
    }
}
