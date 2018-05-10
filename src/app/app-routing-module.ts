import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page.component';
const routes: Routes=[
    {path: '', component: AppComponent },
    {path: 'login', component:LoginPageComponent},
]

@NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule{}