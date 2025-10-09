import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Work } from './components/work/work';
import { Contact } from './components/contact/contact';
import { Tag } from './shared/components/tag/tag';
import { Heading } from './shared/components/heading/heading';

@NgModule({
  declarations: [
    App,
    Header,
    Hero,
    About,
    Skills,
    Experience,
    Work,
    Contact,
    Tag,
    Heading
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
