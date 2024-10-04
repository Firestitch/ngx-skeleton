import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsSkeletonModule } from '@firestitch/skeleton';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { ToastrModule } from 'ngx-toastr';

import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BannerComponent, ExampleComponent, ExamplesComponent, FormComponent } from './components';
import { CustomWidthComponent } from './components/custom-width';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsSkeletonModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        RouterModule.forRoot(routes, {}),
        FsExampleModule.forRoot(),
        ToastrModule.forRoot({ preventDuplicates: true }),
        FsMessageModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        ExampleComponent,
        FormComponent,
        BannerComponent,
        CustomWidthComponent,
    ],
    providers: []
})
export class PlaygroundModule {
}
