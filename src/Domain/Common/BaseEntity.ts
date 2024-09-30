import { IEntity } from '../Contracts/IEntity';

export class BaseEntity implements IEntity {
   constructor(id: string) {
      this.id = id;
   }

   public id: string;
}
