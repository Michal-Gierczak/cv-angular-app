export class Skills {
  public name: string;
  public description: string;
  public order ?: number;

  constructor(name: string, desc: string, order?:number) {
    this.name = name;
    this.description = desc;
    this.order = order;
  }
}
