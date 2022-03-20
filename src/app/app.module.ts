import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppComponent, ProfileComponent, RegisterComponent } from '@app/components';
import { AppRoutingModule } from '@app/app-routing.module';
import { MaterialModule } from "@app/components/material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileService } from "@app/services/user-profile.service";
import { UserRegistrationService } from "@app/services/user-registration.service";
import { AppEffects } from "@app/store/effects";
import { metaReducers, ROOT_REDUCERS } from "@app/store/reducers/root.reducers";
import { appFeatureKey, reducer } from "@app/store/reducers/app.reducers";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      },
    }),
    StoreModule.forFeature(appFeatureKey, reducer),
    StoreRouterConnectingModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [UserProfileService, UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
