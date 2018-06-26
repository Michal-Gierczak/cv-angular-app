export class Education {
  public position: string;
  public company: string;
  public date: string;
  public desc: string;
  public educationDesc?: string;

  constructor(position: string, company:string, startDate: string, desc: string, educationDesc?:string) {
    this.position = position;
    this.company = company;
    this.date = startDate;
    this.desc = desc;
    this.educationDesc = educationDesc;
  }
}
