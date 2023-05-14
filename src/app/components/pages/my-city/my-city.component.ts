import { Component } from '@angular/core';
import Swiper, { Navigation, SwiperOptions } from 'swiper';
Swiper.use([Navigation])

@Component({
  selector: 'app-my-city',
  templateUrl: './my-city.component.html',
  styleUrls: ['./my-city.component.scss']
})
export class MyCityComponent {
  config: SwiperOptions = {
    navigation: true,
    pagination:true
  };
}
