export class Item {
  public id: string
  public name: string
  public time: string
  public tag: string
  public status: boolean = false
  // public parentId: string;

  constructor(id: string, name: string, tag: string, time: string, status: boolean = false) {
    this.id = id
    this.name = name
    this.status = status
    this.time = time
    this.tag = tag
  }

  public static createEmpty() {
    return new Item('', '', '', '')
  }
}
