import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import the provider

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Provide HttpClient
  ],
}).catch((err) => console.error(err));
