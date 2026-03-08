import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Lesen } from './pages/lesen/lesen';
import { LesenTeil1Einweisung } from './pages/lesen-teil1-einweisung/lesen-teil1-einweisung';
import { Hoeren } from './pages/hoeren/hoeren';
import { Schreiben } from './pages/schreiben/schreiben';
import { Sprechen } from './pages/sprechen/sprechen';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'lesen', component: Lesen },
  { path: 'hoeren', component: Hoeren },
  { path: 'schreiben', component: Schreiben },
  { path: 'sprechen', component: Sprechen },
  { path: 'lesen-teil1-einweisung', component: LesenTeil1Einweisung }
];