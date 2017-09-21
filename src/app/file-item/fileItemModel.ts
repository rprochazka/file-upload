export class FileItemModel {
  title: string;
  description: string;
  selectedCategory: number;
  selectedSource: number;

  constructor() {
    this.selectedCategory = 0;
    this.selectedSource = 0;
  }
}
