import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsModule} from './products/products.module';
import {LoginModule} from './login/login.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    ProductsModule,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
