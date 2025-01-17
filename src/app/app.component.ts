import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../projects/demolibrary/src/lib/home/home.component';
import { DemolibraryService } from '../../projects/demolibrary/src/lib/demolibrary.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angularlibapp';
  mylibservice=inject(DemolibraryService);
  ngOnInit()
  {
    this.mylibservice.demolog();

  }

}
