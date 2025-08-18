import { Injectable } from '@angular/core';

export enum ImageDirectories {
  EditorsPicks = 'assets/imgs',
  Jobs = 'assets/jobs'
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private currentCategory: ImageDirectories = ImageDirectories.EditorsPicks;

  setCategory(category: ImageDirectories) {
    this.currentCategory = category;
  }

  getCategory(): ImageDirectories {
    return this.currentCategory;
  }

  getFullImagePath(name: string): string {
    return '../' + this.getCategory() + '/' + name + '.jpg';
  }
}
