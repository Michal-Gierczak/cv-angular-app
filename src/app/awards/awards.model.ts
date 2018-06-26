export class Awards {
  public name: string;
  public place: string;
  public date: string;
  public description: string;
  public awardsDesc?: string;

  constructor(name: string, place: string, date: string, desc: string, awardsDesc?:string) {
    this.name = name;
    this.description = desc;
    this.place = place;
    this.date = date;
    this.awardsDesc = awardsDesc;
  }
}
