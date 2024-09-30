import { BaseAuditableEntity } from '../Common/BaseAuditableEntity';
import { Technology } from './Technology';

export class Project extends BaseAuditableEntity {
   constructor(
      id: string,
      name: string,
      description: string,
      imgPath: string,
      technologies: Technology[]
   ) {
      super(id, new Date(), new Date(), '', '');
      this.name = name;
      this.description = description;
      this.imgPath = imgPath;
      this.technologies = technologies;
   }

   public name: string;
   public description: string;
   public imgPath: string;
   public technologies: Technology[];
}
