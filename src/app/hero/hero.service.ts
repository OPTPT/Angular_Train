import { Injectable,Inject } from '@angular/core';
import { Hero } from "./hero";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class HeroService {
  heros: Hero[];
  domain = "heros"
  url:string
  constructor(@Inject('BASE_URL') private rootURL,private http: HttpClient) {
    this.url = `${this.rootURL}/${this.domain}`;
   }
  getData() :Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url)
  }

  getHero(id) {
    return this.http.get(this.url+'/'+id);
  }

  addHero(heroName){
    return this.http.post(this.url,{name:heroName})
  }

  updateHero(hero){
    return this.http.put(this.url+'/'+hero.id,hero);
  }

  deleteHero(id:number):Observable<any>{
    let deleteUrl = `${this.url}/${id}`
    return this.http.delete<any>(deleteUrl)
  }

}
