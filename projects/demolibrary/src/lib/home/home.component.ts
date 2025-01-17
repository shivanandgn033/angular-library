import { Component } from '@angular/core';

@Component({
  selector: 'lib-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: { 'hostID':'homedemocomtestuse' } // add this to avoid name collsion in main application
})
export class HomeComponent {

}
