export class User { 
    private _username: string = '';
    private _email: string = '';
    private _firstName: string = '';
    private _lastName: string = '';
    private _lastConnectionDate: Date = new Date();
    private _lastConnectionAddress: string = '';
    private _defaultCurrency: string = '';
    private _profilePicture: any;

    //getters

    public get username() {
        return this._username;
    }
    public get email() {
        return this._email;
    }
    public get firstName() {
        return this._firstName;
    }
    public get lastName() {
        return this._lastName;
    }
    public get lastConnectionDate() {
        return this._lastConnectionDate;
    }
    public get lastConnectionAddress() {
        return this._lastConnectionAddress;
    }
    public get defaultCurrency() {
        return this._defaultCurrency;
    }

    public get profilePicture() {
        return this._profilePicture;
    }

    //setters

    public set username(value: string) {
        this._username = value;
    }

    public set email(value: string) {
        this._email = value;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public set lastConnectionDate(value: Date) {
        this._lastConnectionDate = value;
    }

    public set lastConnectionAddress(value: string) {
        this._lastConnectionAddress = value;
    }

    public set defaultCurrency(value: string) {
        this._defaultCurrency = value;
    }

    public set profilePicture(value: any) {
        this._profilePicture = value;
    }

}