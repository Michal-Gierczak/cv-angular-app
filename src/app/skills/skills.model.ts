export class Skills {
  public name: string;
  public description: string;
  public skillsDesc ?: string;

  constructor(name: string, desc: string, skillsDesc?:string) {
    this.name = name;
    this.description = desc;
    this.skillsDesc = skillsDesc;
  }
}
