import {MyEnums} from './../shared/selected-gallery-type-enum';

export class FileItemMetadataModel {
  title: string;
  description: string;
  selectedCategory: number;
  selectedSource: number;
  selectedLicense: number;

  addGallery: boolean;
  selectedGalleryType: MyEnums.SelectedGalleryTypeEnum;

  selectedSeason: number;
  selectedTeam: number;
  selectedMatch: number;

  selectedArticle: number;

  order: number;

  constructor() {
    this.selectedCategory = 0;
    this.selectedSource = 0;
    this.selectedLicense = 0;

    this.addGallery = false;
    
    this.selectedSeason = 0;
    this.selectedTeam = 0;
    this.selectedMatch = 0;
    this.selectedArticle = 0;
    this.order = 0;
  }

  clone(order:number): FileItemMetadataModel {
    const fileItem = new FileItemMetadataModel();
    fileItem.title = this.title;
    fileItem.description = this.description;
    fileItem.selectedCategory = this.selectedCategory;
    fileItem.selectedSource = this.selectedSource;
    fileItem.selectedLicense = this.selectedLicense;

    fileItem.addGallery = this.addGallery;
    fileItem.selectedGalleryType = this.selectedGalleryType;

    fileItem.selectedSeason = this.selectedSeason;
    fileItem.selectedTeam = this.selectedTeam;
    fileItem.selectedMatch = this.selectedMatch;

    fileItem.selectedArticle = this.selectedArticle;
    fileItem.order = order;

    return fileItem;
  }
}
