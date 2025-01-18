### Angular library usage

#### Example Usage:

#### 1 create angular application.
```bash
ng new angular-library-app
cd angular-library-app
ng serve
```

#### 2 Create library under angular application.
```bash
ng generate library demolibrary
ng g c home   // under library project add component to use in main angular application
```
#### 3 add home componet in angular app component and import the component path.

app.component.html file
```html
<lib-home></lib-home>
<router-outlet />

```
app.component.ts file

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../projects/demolibrary/src/lib/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularlibapp';
}
```

#### 4 import main libary module to app.config.ts provider.

app.config.ts file
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { DemolibraryComponent } from '../../projects/demolibrary/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [ DemolibraryComponent, provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};

````

This example demonstrates a basic Angular library with a simple home component. You can expand this by adding more services, components, directives, or pipes as needed for your specific use case.
