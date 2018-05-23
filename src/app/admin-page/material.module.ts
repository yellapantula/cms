import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatToolbarModule, MatInputModule,MatSortModule, MatPaginatorModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations: [
  
      
     
    ],
    imports: [
        MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule,MatSidenavModule,MatListModule,MatInputModule,
        MatTableModule,MatFormFieldModule, MatSortModule, MatPaginatorModule, MatDialogModule

  
    ],
    exports: [
        MatButtonModule, MatToolbarModule,MatMenuModule, MatIconModule,MatSidenavModule,MatListModule,
        MatInputModule,MatTableModule,MatFormFieldModule, MatSortModule, MatPaginatorModule, MatDialogModule
    ]

  })
  export class MaterialModule { }