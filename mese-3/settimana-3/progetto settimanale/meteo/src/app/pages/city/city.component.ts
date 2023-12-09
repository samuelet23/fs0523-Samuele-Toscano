import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Modules/i-product';
import { MeteoService } from '../../meteo.service';
import { IForecast } from '../../Modules/i-forecast';

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

      this.meteoSvc.getById5Days(params.id).subscribe((res =>{
        console.log(res);

        return  this.meteoFive = res
      }))


      })
    }
  }

