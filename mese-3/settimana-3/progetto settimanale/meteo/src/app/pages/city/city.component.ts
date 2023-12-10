import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Modules/i-product';
import { MeteoService } from '../../meteo.service';
import { IForecast, List } from '../../Modules/i-forecast';
import { LiteralArray } from '@angular/compiler';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent {

  constructor(private router: Router, private route: ActivatedRoute, private meteoSvc:MeteoService){}
meteo!: IProduct;
meteoFive !:IForecast;

  ngOnInit(){


    this.route.params.subscribe((params:any) => {

      this.meteoSvc.getById(params.id).subscribe((res =>{
        return this.meteo = res;

      }))

      this.meteoSvc.getById5Days(params.id).subscribe((response) => {
        console.log(response);

        this.meteoFive = response;
      });
    })

  }

estraiOra(date: string): string {
  return date.split(' ')[1].split(':')[0];
}



}
