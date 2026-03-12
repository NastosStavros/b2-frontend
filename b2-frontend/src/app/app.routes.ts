import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Lesen } from './pages/lesen/lesen';
import { LesenTeil1Einweisung } from './pages/lesen-teil1-einweisung/lesen-teil1-einweisung';
import { LesenTeil1Modelltest } from './pages/lesen-teil1-modelltest/lesen-teil1-modelltest';
import { LesenTeil2Modelltest } from './pages/lesen-teil2-modelltest/lesen-teil2-modelltest';
import { Hoeren } from './pages/hoeren/hoeren';
import { Schreiben } from './pages/schreiben/schreiben';
import { Sprechen } from './pages/sprechen/sprechen';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'lesen', component: Lesen },
  { path: 'hoeren', component: Hoeren },
  { path: 'schreiben', component: Schreiben },
  { path: 'sprechen', component: Sprechen },
  { path: 'lesen-teil1-einweisung', component: LesenTeil1Einweisung },
  { path: 'lesen-teil1-modelltest', component: LesenTeil1Modelltest },
  { path: 'lesen-teil2-modelltest', component: LesenTeil2Modelltest },
];