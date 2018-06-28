export class Description {
  public desc: string;
  public id?: string;

  constructor(desc: string, id?:string) {
    this.desc = desc;
    this.id = id;
  }
}
