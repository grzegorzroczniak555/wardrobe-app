export class Item {
  constructor(
    public name: string,
    public amount: number) {}
}

export interface ItemGroup {
  disabled?: boolean;
  name: string;
  item: Item[];
}
