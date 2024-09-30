import { BaseAuditableEntity } from '../Common/BaseAuditableEntity';

export class Experience extends BaseAuditableEntity {
   constructor(
      id: string,
      title: string,
      company: string,
      location: string,
      startDate: Date,
      endDate: Date,
      description: string
   ) {
      super(id, new Date(), new Date(), '', '');
      this.title = title;
      this.company = company;
      this.location = location;
      this.startDate = startDate;
      this.endDate = endDate;
      this.description = description;
   }

   public title: string;
   public company: string;
   public location: string;
   public startDate: Date;
   public endDate: Date;
   public description: string;
}
