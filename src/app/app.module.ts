import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        FilterPipe
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule, 
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
