import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass',
  providers: [
    WeatherService
]
})
export class SearchBarComponent {
  cityName: string = '';
  WeatherData: any;

  constructor(private router: Router,private weatherService: WeatherService, private httpClient: HttpClient) {}

  searchCity() {
    if (this.cityName) {
      console.log(this.cityName);
    //    this.weatherService.getWeather(this.cityName).subscribe(data => {
    //      this.WeatherData = data;
    //    // this.router.navigate(['/forecast', this.cityName]);
    //  });
  }
  }
}
