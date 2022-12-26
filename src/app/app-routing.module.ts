import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gameofthrones', loadChildren: () => import('./gameofthrones/gameofthrones.module').then(m => m.GameofthronesModule) }, { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
