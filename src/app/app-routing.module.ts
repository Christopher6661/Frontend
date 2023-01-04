import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'entradas',
    children: [
      {
        path: "",
        loadChildren: () => import('./entradas/entradas/entradas.module').then( m => m.EntradasPageModule)
      },
      {
        path: ":entradaId",
        loadChildren: () => import('./mostrar-entrada/mostrar-entrada/mostrar-entrada.module').then( m => m.MostrarEntradaPageModule)
      }
    ]
  },
  {
    path: 'platosfuertes',
    children: [
      {
        path: "",
        loadChildren: () => import('./platosfuertes/platosfuertes/platosfuertes.module').then( m => m.PlatosfuertesPageModule)
      },
      {
        path: ":platofuerteId",
        loadChildren: () => import('./mostrar-platofuerte/mostrar-platofuerte/mostrar-platofuerte.module').then( m => m.MostrarPlatofuertePageModule)
      }
    ]
  },
  {
    path: 'postres',
    children: [
      {
        path: "",
        loadChildren: () => import('./postres/postres/postres.module').then( m => m.PostresPageModule)
      },
      {
        path: ":postreId",
        loadChildren: () => import('./mostrar-postre/mostrar-postre/mostrar-postre.module').then( m => m.MostrarPostrePageModule)
      }
    ]
  },
  {
    path: 'recetas',
    loadChildren: () => import('./recetas/recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'entradas',
    loadChildren: () => import('./entradas/entradas/entradas.module').then( m => m.EntradasPageModule)
  },
  {
    path: 'platosfuertes',
    loadChildren: () => import('./platosfuertes/platosfuertes/platosfuertes.module').then( m => m.PlatosfuertesPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./postres/postres/postres.module').then( m => m.PostresPageModule)
  },
  {
    path: 'agregar-receta',
    loadChildren: () => import('./agregar-receta/agregar-receta/agregar-receta.module').then( m => m.AgregarRecetaPageModule)
  },
  {
    path: 'editar-receta/:id',
    loadChildren: () => import('./editar-receta/editar-receta/editar-receta.module').then( m => m.EditarRecetaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'entradapost',
    loadChildren: () => import('./entradapost/entradapost/entradapost.module').then( m => m.EntradapostPageModule)
  },
  {
    path: 'platofuertepost',
    loadChildren: () => import('./platofuertepost/platofuertepost/platofuertepost.module').then( m => m.PlatofuertepostPageModule)
  },
  {
    path: 'postrepost',
    loadChildren: () => import('./postrepost/postrepost/postrepost.module').then( m => m.PostrepostPageModule)
  },
  {
    path: 'editar-entrada/:id',
    loadChildren: () => import('./editar-entrada/editar-entrada/editar-entrada.module').then( m => m.EditarEntradaPageModule)
  },
  {
    path: 'editar-platofuerte/:id',
    loadChildren: () => import('./editar-platofuerte/editar-platofuerte/editar-platofuerte.module').then( m => m.EditarPlatofuertePageModule)
  },
  {
    path: 'editar-postre/:id',
    loadChildren: () => import('./editar-postre/editar-postre/editar-postre.module').then( m => m.EditarPostrePageModule)
  },
  {
    path: 'mostrar-entrada/:id',
    loadChildren: () => import('./mostrar-entrada/mostrar-entrada/mostrar-entrada.module').then( m => m.MostrarEntradaPageModule)
  },
  {
    path: 'mostrar-platofuerte/:id',
    loadChildren: () => import('./mostrar-platofuerte/mostrar-platofuerte/mostrar-platofuerte.module').then( m => m.MostrarPlatofuertePageModule)
  },
  {
    path: 'mostrar-postre/:id',
    loadChildren: () => import('./mostrar-postre/mostrar-postre/mostrar-postre.module').then( m => m.MostrarPostrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
