import { Injectable,Inject } from '@angular/core';
import { Hero } from "./hero";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HeroService {
  heros: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  domain = "heros"
  url:string
  constructor(@Inject('BASE_URL') private rootURL,private http: HttpClient) {
    this.url = `${this.rootURL}/${this.domain}`
   }
  getData() :Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url)
  }

  getHero(id) {
    return this.heros.filter(item => item.id === id)[0];
  }

  deleteHero(id:number):Observable<any>{
    let deleteUrl = `${this.url}/${id}`
    return this.http.delete<any>(deleteUrl)
  }

}
