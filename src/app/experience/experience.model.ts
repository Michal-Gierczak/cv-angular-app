export class Experience {
  public position: string;
  public company: string;
  public date: string;
  public desc: string;
  public image: string;
  public expDesc?: string;

  constructor(position: string, company:string, startDate: string, desc: string, image: string, expDesc?:string) {
    this.position = position;
    this.company = company;
    this.date = startDate;
    this.image = image;
    this.desc = desc;
    this.expDesc = expDesc;
  }
}
