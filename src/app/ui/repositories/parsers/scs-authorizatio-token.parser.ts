import { Injectable } from '@angular/core';
import { AbstractParser } from './parser';

@Injectable()
export class ScsAuthorizationTokenParser extends AbstractParser<boolean> {
    parse(payload: any): boolean {
        return 'Authorized!!' === payload;
    }
}
