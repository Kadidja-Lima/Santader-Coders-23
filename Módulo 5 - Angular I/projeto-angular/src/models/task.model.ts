export class Task {
  title: string;
  description: string;
  date: string | Date;
  status: string;
  tags?: string[];

  constructor(title = '', description = '', date = '', status = '', tags = []) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.tags = tags;
  }
}
