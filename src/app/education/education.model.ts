export class Education {
  public position: string;
  public company: string;
  public date: string;
  public desc: string;
  public order?: string;

  constructor(company: string, date:string, desc: string, position: string, order?:string) {
    this.position = position;
    this.company = company;
    this.date = date;
    this.desc = desc;
    this.order = order;
  }
}
