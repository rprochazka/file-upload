import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ToasterService } from 'angular2-toaster';

import { UploadService, IUploadGallery, IItemOrder } from './../services/upload.service';
import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';
import { FileItemModel } from './../file-item/fileItemModel';
import { ICodeList } from './../models/ICodeList';
import { CodeListService } from './../services/code-list.service';
import { Global } from './../global';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileItems: FileItemModel[] = new Array<FileItemModel>();
  categories: ICodeList[];
  sources: ICodeList[];
  licenses: ICodeList[];
  seasons: ICodeList[];
  teams: ICodeList[];
  matches: ICodeList[];
  articles: ICodeList[];
  baseMetadata: FileItemMetadataModel = new FileItemMetadataModel();

  private uploadedFileItems: IUploadedFileItem[] = [];

  constructor(
    private codeListService: CodeListService,
    private uploadService: UploadService,
    private global: Global,
    private toaster: ToasterService) { }

  public uploadUri: string = this.global.uploadEndpoint;
  public dataUri: string = this.global.dataEndpoint;

  ngOnInit(): void {
    this.codeListService.getCategories().subscribe(resp => {
      this.categories = resp;
    });

    this.codeListService.getSources().subscribe(resp => {
      this.sources = resp;
    });

    this.codeListService.getLicenses().subscribe(resp => {
      this.licenses = resp;
    });

    this.codeListService.getSeasons().subscribe(resp => {
      this.seasons = resp;
    });

    this.codeListService.getTeams().subscribe(resp => {
      this.teams = resp;
    });

    this.codeListService.getArticles().subscribe(resp => {
      this.articles = resp;
    });
  }

  onNewMatchesLoaded(newMatches: ICodeList[]) {
    this.matches = newMatches;
  }

  fileSelected(event): void {
    const fileList = event.target.files;
    if (fileList) {
      Object.keys(fileList).forEach(key => {
        this.fileItems.push(new FileItemModel(fileList[key]));
      });
    }
  }

  onFileDelete(fileItem: FileItemModel) {
    this.fileItems = this.fileItems.filter(i => i !== fileItem);
  }

  onUpload() {
    // const tasks$ = this.fileItems.map(fileItem => {
    //   return this.uploadService.uploadFileItem(fileItem)
    //     .map(resp => {
    //       this.onUploadItemSuccess(fileItem, resp.itemId);
    //       return <IUploadedFileItem>{
    //         fileItem: fileItem,
    //         newItemId: resp.itemId
    //       }
    //     })
    //     .catch(error => {
    //       this.onUploadItemFailed(fileItem, error);
    //       return Observable.empty();
    //     })
    //   //.filter((uploadedItem: IUploadedFileItem) => uploadedItem !== null)
    // });
    // Observable.forkJoin(tasks$).subscribe(
    //   (uploadedItems: IUploadedFileItem[]) => {
    //     debugger
    //     this.onUploadComplete(uploadedItems)
    //   },
    //   (error) => console.log('Error ' + error),
    //   (() => console.log('Complete'))
    // );


    this.uploadedFileItems = [];
    Observable.from(this.fileItems)
      .mergeMap(fileItem => {
        return this.uploadService.uploadFileItem(fileItem)
          .map(resp => {
            return <IUploadedFileItem>{
              fileItem: fileItem,
              newItemId: resp.itemId
            }
          })
          .catch(error => {
            this.onUploadItemFailed(fileItem, error);
            return Observable.empty();
          });

      })
      .subscribe(
      ((uploadedItem: IUploadedFileItem) => this.onUploadItemSuccess(uploadedItem.fileItem, uploadedItem.newItemId)),
      (error => console.log('Error', error)),
      (() => this.onUploadComplete())
      );
  }

  canUpload(): boolean {
    if (this.fileItems && this.fileItems.length > 0) {
      for (let fi of this.fileItems) {
        if (!this.fileMetadataOk(fi.metadata)) {
          return false;
        }
      }
      return true;
    }

    return false;
  }

  private onUploadItemSuccess(fileItem: FileItemModel, newItemId: number) {
    this.toaster.pop('success', 'File uploaded', `File uploaded: ${fileItem.file.name}`);
    const uploadedItem = this.fileItems.splice(this.fileItems.findIndex(i => i.order !== fileItem.order), 1);
    this.uploadedFileItems.push({ fileItem: fileItem, newItemId: newItemId });
  }

  private onUploadItemFailed(fileItem: FileItemModel, error: any) {
    console.log(`Upload failed: ${fileItem.file.name}  ${JSON.stringify(error)}`);
    this.toaster.pop('error', 'Upload failed', `Upload failed for ${fileItem.file.name}`);
  }

  private onUploadComplete() {
    const itemsToGallery = this.uploadedFileItems.filter(i => i.fileItem.metadata.addGallery);
    if (!itemsToGallery || itemsToGallery.length === 0) {
      return
    };

    const itemOrders: IItemOrder[] = itemsToGallery.map(i => {
      return {
        itemId: i.newItemId,
        itemOrder: i.fileItem.order
      }
    });
    const galleryType = itemsToGallery[0].fileItem.metadata.selectedGalleryType;
    this.uploadService.uploadToGalery({
      galleryType: galleryType,
      itemId: 0, //TODO
      itemOrders: itemOrders
    }).subscribe(
      () => this.toaster.pop('success', 'Gallery uploaded'),
      () => this.toaster.pop('error', 'Gallery upload failed'),
    )
  }

  private fileMetadataOk(metadata: FileItemMetadataModel): boolean {
    return metadata.title &&
      metadata.description &&
      metadata.selectedCategory > 0 &&
      metadata.selectedSource > 0 &&
      metadata.selectedLicense > 0;
  }
}

interface IUploadedFileItem {
  fileItem: FileItemModel,
  newItemId: number
}
