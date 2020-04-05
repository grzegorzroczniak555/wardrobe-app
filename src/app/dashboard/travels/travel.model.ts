export class Travel {
  id: number;

  constructor(
    public destination: string,
    public startDate: Date,
    public endDate: Date) {}
}
