import { IAuditableEntity } from '../Contracts/IAuditableEntity';
import { BaseEntity } from './BaseEntity';

export class BaseAuditableEntity extends BaseEntity implements IAuditableEntity {
   constructor(id: string, createdAt: Date, updatedAt: Date, createdBy: string, updatedBy: string) {
      super(id);
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.createdBy = createdBy;
      this.updatedBy = updatedBy;
   }

   public createdAt: Date;
   public updatedAt: Date;
   public createdBy: string;
   public updatedBy: string;
}
