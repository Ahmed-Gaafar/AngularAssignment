import { Component, ViewChild } from '@angular/core';
import { MainSectionComponent } from './Product/MainSection.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MainSectionComponent) ProductComponent! : MainSectionComponent;

  DisplayData()
  {
   this.ProductComponent.renderValues();
  }

  title = 'MainDemo';
}
