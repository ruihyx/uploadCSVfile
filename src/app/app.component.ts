import { Component } from '@angular/core';
import * as Papa from 'papaparse'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public dataInTheCSV:any = [];
  public title?: string[];

  public onFileSelected(event: any) {
    let selectedFile = event.target.files[0];
    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (result, file) => {
        this.dataInTheCSV = result.data;
        this.title = result.meta.fields;
      },
    });
  }

  removeOrder() {
    return 0;
  }
}
