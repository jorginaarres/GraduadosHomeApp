import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsModule} from './products/products.module';
import {LoginModule} from './login/login.module';
import {RecipesModule} from './recipes/recipes.module'

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
      {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    ProductsModule,
    RecipesModule,
    ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
