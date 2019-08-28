import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { EdituserComponent } from './userdisplay/edituser/edituser.component';
// import { UserdisplayComponent } from './userdisplay/userdisplay.component';
// import { AdduserComponent } from './userdisplay/adduser/adduser.component';

import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
// import { UserResolverService } from './user-resolver.service';
import { TaskResolverService } from './task-resolver.service';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { LoginComponent } from './login/login.component';
import { UserGuardService } from './user-guard.service';




const arr: Routes = [
  {path: '', loadChildren:'./userdisplay/user.module#UserModule'},
  // {path: 'edituser/:user_email', component: EdituserComponent},
  // {path: 'adduser', canActivate: [UserGuardService], component: AdduserComponent},
  {path: 'productdisplay', loadChildren: './productdisplay/product.module#ProductModule'},

  {path: 'taskdisplay', resolve: {tdata: TaskResolverService}, component: TaskdisplayComponent},
  {path: 'edittask/:Id', component: EdittaskComponent},
  {path: 'addtask', canActivate: [UserGuardService], component: AddtaskComponent},
  {path: 'login', component: LoginComponent}
];
export const routing = RouterModule.forRoot(arr, {preloadingStrategy: PreloadAllModules});
