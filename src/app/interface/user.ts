export class User {
  public username: string;
  public password: string;
  public rePassword: string;
  public email: string;

  public constructor (username: string, password: string, rePassword: string, email: string) {
    this.username = username;
    this.password = password;
    this.rePassword = rePassword;
    this.email = email;
  }
}
