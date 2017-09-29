import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';  
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AjaxService {
  constructor(private http: Http) { }
  get(url:string){
    return this.http.get(url)   
      .toPromise()   
      .then(res => res.json())   
      .catch(this.handleError);  
  }
  post(url:string,params){
    return this.http
      .post(url, JSON.stringify(params), {headers: this.headers})   
      .toPromise()   
      .then(response => response.json())   
      .catch(this.handleError);  
  }
  private headers = new Headers({'Content-type': 'application/json'});
  private handleError(error: any): Promise<any> {   
    console.error('An error occurred', error);    
    return Promise.reject(error.message || error);   
  }  
}

/**
 * 注：默认情况下，Angular 的Http服务返回一个 RxJS 的Observable对象。 我们可以通过toPromise()方法将其转为便捷的承诺Promise。 使用toPromise()方法时要引入：
 * import 'rxjs/add/operator/toPromise';
 */
