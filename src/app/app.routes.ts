import { Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { LoginComponent } from './features/login/login/login.component';
import { RegisterComponent } from './features/register/register/register.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'}
,
{path:'', component:AuthlayoutComponent, children:[
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent}
]},
{path:'', component:MainlayoutComponent, children:[
    {path:'feed', loadComponent:()=>import('./features/feed/feed/feed.component').then((c)=>c.FeedComponent)},
    {path:'profile', loadComponent:()=>import('./features/profile/profile/profile.component').then((c)=>c.ProfileComponent)},
      {path:'p-details/:id', loadComponent:()=>import('./shared/post-details/post-details.component').then((c)=>c.PostDetailsComponent)},
    {path:'notification', loadComponent:()=>import('./features/notificatons/notificatons/notificatons.component').then((c)=>c.NotificatonsComponent)}
]}
,
{path:'**', loadComponent:()=>import('./features/wildCard/wild-card/wild-card.component').then((c)=>c.WildCardComponent)}
];
