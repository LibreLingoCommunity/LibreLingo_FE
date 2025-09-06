import { Component } from '@angular/core';
import { FooterComponent } from '@app/shared/components/footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor() {}

  ngOnInit(): void {
    console.log('HomepageComponent Init');
  }
}
