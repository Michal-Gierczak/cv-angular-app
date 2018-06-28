export class Experience {
  public position: string;
  public company: string;
  public date: string;
  public desc: string;
  public image: string;
  public order?: number;

  constructor(position: string, company:string, startDate: string, desc: string, image: string, order?:number) {
    this.position = position;
    this.company = company;
    this.date = startDate;
    this.image = image;
    this.desc = desc;
    this.order = order;
  }
}
