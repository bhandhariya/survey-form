import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate  {

  constructor(private router:Router) { }
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) : boolean{
    if(sessionStorage.getItem('IsLogin') === 'true'){
        return true;
    }else{
        this.router.navigate(['admin']);
        return false;
    }
}
}
