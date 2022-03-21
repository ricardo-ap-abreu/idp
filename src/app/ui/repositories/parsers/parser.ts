import { ObjectUtils } from '../../utils/object-utils';

export interface IParser<T> {
    parse(payload: any): T;

    parseList(payload: any): Array<T>;
}

export abstract class AbstractParser<T> implements IParser<T> {

    abstract parse(payload: any): T;

    parseList(payload: any): Array<T> {
      if (!payload || !Array.isArray(payload)) {
        return [];
      }

      return payload.map(p => this.parse(p)).filter(p => p);

    }

    protected copy(destination: T, payload: any): T {
      return !payload ? payload : ObjectUtils.assign(destination, payload);
    }
}
