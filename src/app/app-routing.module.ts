import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { AgeValidatorComponent } from './age-validator/age-validator.component';
import { EngineStatusComponent } from './engine-status/engine-status.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { SearchUserdataComponent } from './search-userdata/search-userdata.component';
import { ShowHideComponent } from './show-hide/show-hide.component';
import { TablesComponent } from './tables/tables.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/tables', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'agevalidator', component: AgeValidatorComponent },
  { path: 'enginestatus', component: EngineStatusComponent },
  { path: 'evenodd', component: EvenOddComponent },
  { path: 'searchuserdata', component: SearchUserdataComponent },
  { path: 'showhide', component: ShowHideComponent },
  { path: 'tables', component: TablesComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
