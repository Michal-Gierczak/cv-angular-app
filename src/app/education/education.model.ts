export class Education {
  public position: string;
  public company: string;
  public date: string;
  public desc: string;
  public order?: number;

  constructor(company: string, date:string, desc: string, position: string, order?:number) {
    this.position = position;
    this.company = company;
    this.date = date;
    this.desc = desc;
    this.order = order;
  }
}
