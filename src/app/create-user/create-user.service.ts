import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { RestResponse } from '../model/restResponse.model';
import { UserModel } from '../model/user.model';

@Injectable()
export class CreateUserService{

    constructor(private http: HttpClient) { }

    public saveOrUpdate(user: UserModel): Observable<RestResponse>{
        return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));
    }

    /**
     * metodo para validar campos obligatorios
     */


    public validate(user: UserModel): boolean{
        let isValid = true;
        if(!user.firstName){
            isValid = false;
        }
        if(!user.firstSurName){
            isValid = false;
        }
        if(!user.address){
            isValid = false;
        }

        return isValid;
    }
}