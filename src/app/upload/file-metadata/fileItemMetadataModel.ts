import { GalleryTypeEnum } from '../models/gallery-type-enum';

export class FileItemMetadataModel {
  title: string;
  description: string;
  selectedCategory: number;
  selectedSource: number;
  selectedLicense: number;

  addGallery: boolean;
  selectedGalleryType: GalleryTypeEnum;

  selectedSeason: number;
  selectedTeam: number;
  selectedMatch: number;

  selectedArticle: number;

  constructor() {
    this.selectedCategory = 0;
    this.selectedSource = 0;
    this.selectedLicense = 0;

    this.addGallery = false;

    this.selectedSeason = 0;
    this.selectedTeam = 0;
    this.selectedMatch = 0;
    this.selectedArticle = 0;
  }
}
