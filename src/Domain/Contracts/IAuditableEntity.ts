import { Guid } from '../Extensions/TypeExtension';
import { IEntity } from './IEntity';

export interface IAuditableEntity extends IEntity {
   createdAt: Date;
   updatedAt: Date;
   createdBy: Guid;
   updatedBy: Guid;
}