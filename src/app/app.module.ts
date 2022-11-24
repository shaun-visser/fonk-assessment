import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountUpModule } from 'ngx-countup';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { HeaderComponent } from './shared/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleDescriptionComponent } from './components/title-description/title-description.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleDescriptionCtaImageComponent } from './components/title-description-cta-image/title-description-cta-image.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { TitleDescriptionCtaBoxedComponent } from './components/title-description-cta-boxed/title-description-cta-boxed.component';
import { TitleDescriptionLogosComponent } from './components/title-description-logos/title-description-logos.component';
import { TitleDescriptionStatsComponent } from './components/title-description-stats/title-description-stats.component';
import { ImageReelComponent } from './components/image-reel/image-reel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    HeaderComponent,
    TitleDescriptionComponent,
    HomeComponent,
    TitleDescriptionCtaImageComponent,
    OurServicesComponent,
    TitleDescriptionCtaBoxedComponent,
    TitleDescriptionLogosComponent,
    TitleDescriptionStatsComponent,
    ImageReelComponent,
    FooterComponent,
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    CountUpModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
