import { Component, OnInit } from '@angular/core';
import {MenusService, Menu} from '../../service/menus/menus.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  
  menuDetails:Menu ={
    title:"",
    url:""
  }
  dataSource= new MatTableDataSource();
  displayedColumns=["id","title","url"];
  constructor(private menus:MenusService) { }

  ngOnInit() {
    this.menus.getMenus().subscribe( (data: any ) => {
      this.dataSource.data=data;
    

    })
  }
  addMenu(){
    this.menus.addMenu(this.menuDetails);
  }
}
