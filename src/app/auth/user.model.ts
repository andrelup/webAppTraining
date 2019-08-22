export class User {
  constructor(public email: string,
              public id: string,
              private _token: string,
              private _tokenExpirationDate: Date) { }
  get token() {
    if ( this._tokenExpirationDate || new Date().getTime() > this._tokenExpirationDate.getTime()) {
      return null;
    } else {
      return this._token;
    }
  }
}
