import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService{
    private users: Array<UserModel>;
    constructor( private http: HttpClient){    }

    public getUsers():Observable<UserModel[]>{
        /*this.http.get("http://localhost:8080/getUsers").subscribe(res=>{
            this.users = res as UserModel[];
            console.log(this.users);
        });
        return this.users;*/
        return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
    }

    public delete(user: UserModel): void{
        this.http.post("http://localhost:8080/deleteUser",JSON.stringify(user)).subscribe();
        //this.getUsers();
    }  

}