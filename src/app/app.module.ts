import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatToolbarModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatFormFieldModule,
    MatInputModule, MatProgressSpinnerModule, MatTableModule,
    MatSelectModule, MatAutocompleteModule,
    MatCheckboxModule, MatButtonModule, MatIconModule,
    MatRadioModule, MatChipsModule, MatTabsModule} from '@angular/material';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductComponent } from './page/product/product.component';
import { MenuComponent } from './page/menu/menu.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor} from './class/jwtinterceptor';
import { ErrorInterceptor } from './class/errorinterceptor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { IsSignedInGuard} from './guard/is-signed-in.guard';
import { TypeComponent } from './page/type/type.component';
import { ImgPipe } from './pipe/img.pipe';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { MenuCardComponent } from './component/menu-card/menu-card.component';
import { CommandComponent } from './page/command/command.component';
import { RegisterComponent } from './component/register/register.component';
import { PanierComponent } from './page/panier/panier.component';
import { CartRowComponent } from './component/cart-row/cart-row.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { HomeComponent } from './page/home/home.component';
import { ProfilComponent } from './page/profil/profil.component';
import { BasicFormComponent } from './component/basic-form/basic-form.component';
import { CommandSuccessComponent } from './page/command-success/command-success.component';
import { CommandsComponent } from './component/commands/commands.component';
import { NoMenuPipe } from './pipe/no-menu.pipe';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './component/cookie/cookie.component';
import { PolitiqueComponent } from './page/politique/politique.component';
import { FooterComponent } from './component/footer/footer.component';
import { MidiMenuPipe } from './pipe/midi-menu.pipe';
import { NoMidiMenuPipe } from './pipe/no-midi-menu.pipe';

const appRoutes: Routes = [
    { path: 'product', component: ProductComponent, data : { title: 'Produits'} },
    { path: 'politique', component: PolitiqueComponent, data : { title: 'Politique de' +
              ' confidentialité'} },
    { path: 'profil', component: ProfilComponent, data : { title: 'Profil'} },
    { path: 'home', component: HomeComponent, data : { title: 'Page d\'acceuil'} },
    { path: 'menu', component: MenuComponent, data : { title: 'Menu'} },
    { path: 'type', component: TypeComponent, data : { title: 'Type'} },
    { path: 'command',  component: CommandComponent, canActivate: [IsSignedInGuard], data : { title: 'Commande envoyée'} },
    { path: 'command_success', component: CommandSuccessComponent, canActivate: [IsSignedInGuard], data : { title: 'Historique'} },
    { path: 'panier', component: PanierComponent, data : { title: 'Panier'} },
    { path: 'login', component: LoginComponent, data : { title: 'Login'} },
    { path: 'register', component: RegisterComponent, data : { title: 'Register'} },
    { path: '', redirectTo: '/product', canActivate: [IsSignedInGuard], pathMatch: 'full' },
    { path: '**', component: AppComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProfilComponent,
        MenuComponent,
        LoginComponent,
        TypeComponent,
        ImgPipe,
        ProductCardComponent,
        MenuCardComponent,
        CommandComponent,
        RegisterComponent,
        PanierComponent,
        CartRowComponent,
        DialogComponent,
        HomeComponent,
        ProfilComponent,
        BasicFormComponent,
        CommandSuccessComponent,
        CommandsComponent,
        NoMenuPipe,
        CookieComponent,
        PolitiqueComponent,
        FooterComponent,
        MidiMenuPipe,
        NoMidiMenuPipe
    ],
    imports: [
        MDBBootstrapModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatListModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatRadioModule,
        NgbModule,
        RouterModule.forRoot(appRoutes, {
          scrollPositionRestoration: 'enabled',
          anchorScrolling: 'enabled',
          onSameUrlNavigation: 'reload',
          useHash: false }),
        MDBBootstrapModule.forRoot()
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
