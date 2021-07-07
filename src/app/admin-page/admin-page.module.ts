import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {AdminRoutingModule} from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminPageComponent} from './admin-page.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationDialogueComponent } from './shared/confirmation-dialogue/confirmation-dialogue.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

@NgModule({
    imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
    ],
   declarations: [DashboardComponent,AdminPageComponent, AppNavbarComponent, MenusComponent, PostsComponent, 
    ConfirmationDialogueComponent, EditMenuComponent, EditPostComponent],
    entryComponents: [ConfirmationDialogueComponent, EditMenuComponent, EditPostComponent]
})
export class AdminPageModule { }
