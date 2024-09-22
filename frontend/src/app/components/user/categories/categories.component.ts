import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { tns } = await import('tiny-slider/src/tiny-slider');
      
      const slider = tns({
        container: ".my-slider", 
        items: 6,                
        speed : 200,
        gutter: 20,               // Space between items
        slideBy: 1,               // Slide one item at a time
        navPosition: "bottom",    // Position navigation at the bottom
        mouseDrag: true,          // Allow dragging with mouse
        autoplay: true,           // Enable autoplay
        autoplayButtonOutput: false, // Disable autoplay button UI
        controlsContainer: "#custom-control",
        loop: true,              
        responsive: {            
          0: {
            items: 1,             
            nav: false            
          },
          768: {
            items: 2,            
            nav: true            
          },
          1200: {
            items: 4,            
            nav: true
          },
          1440: {
            items: 6            
          }
        }
      });
    }
  }
}