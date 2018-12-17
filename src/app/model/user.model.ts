import { ParentEntity } from './parentEntity.model';
export class UserModel extends ParentEntity{
    public firstName: string;
    public secondName: string;
    public firstSurName: string;
    public secondSurName: string;
    public phone: string;
    public address: string;
}