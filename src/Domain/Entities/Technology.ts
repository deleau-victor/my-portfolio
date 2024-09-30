import { BaseEntity } from '../Common/BaseEntity';

export class Technology extends BaseEntity {
   constructor(id: string, name: string, imgPath: string) {
      super(id);
      this.name = name;
      this.imgPath = imgPath;
   }

   public name: string;
   public imgPath: string;
}
