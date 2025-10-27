import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { ExampleComponent } from '../example/example.component';
import { FormComponent } from '../form/form.component';
import { BannerComponent } from '../banner/banner.component';
import { CustomWidthComponent } from '../custom-width/custom-width.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, ExampleComponent, FormComponent, BannerComponent, CustomWidthComponent]
})
export class ExamplesComponent {
  public config = environment;
}
