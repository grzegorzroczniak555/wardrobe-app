import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home.component';
import { MainComponent } from './main-page/main.component';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { ConnectionFailedComponent } from './connection-failed-page/connection-failed.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ErrorComponent } from './error-page/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionFailedComponent,
    HomeComponent,
    MainComponent,
    ErrorComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    SharedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
