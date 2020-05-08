import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http : HttpClient){
  return new TranslateHttpLoader(http);
} 
@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ForgotComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'ar',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory ,
        deps: [HttpClient]

      }

    })
  ]
})
export class AuthModule { }
