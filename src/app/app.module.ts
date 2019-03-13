import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBU7_oaS6vIZY3OVciB_6eau_PfDvfEA3E',
      libraries: ['places', 'drawing', 'geometry'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
