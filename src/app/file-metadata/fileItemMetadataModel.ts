export class FileItemMetadataModel {
  title: string;
  description: string;
  selectedCategory: number;
  selectedSource: number;
  selectedLicense: number;
  selectedSeason: number;
  selectedTeam: number;
  selectedMatch: number;

  constructor() {
    this.selectedCategory = 0;
    this.selectedSource = 0;
    this.selectedLicense = 0;
    this.selectedSeason = 0;
    this.selectedTeam = 0;
    this.selectedMatch = 0;
  }

  clone(): FileItemMetadataModel {
    const fileItem = new FileItemMetadataModel();
    fileItem.title = this.title;
    fileItem.description = this.description;
    fileItem.selectedCategory = this.selectedCategory;
    fileItem.selectedSource = this.selectedSource;
    fileItem.selectedLicense = this.selectedLicense;
    fileItem.selectedSeason = this.selectedSeason;
    fileItem.selectedTeam = this.selectedTeam;
    fileItem.selectedMatch = this.selectedMatch;

    return fileItem;
  }
}
