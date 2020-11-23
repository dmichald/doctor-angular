export class Properties {

  // tslint:disable-next-line:variable-name
  private _baseUrl = 'http://localhost:8080';

  get baseUrl(): string {
    return this._baseUrl;
  }

  constructor() {
  }
}
