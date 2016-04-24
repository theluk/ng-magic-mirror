import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {NgMagicMirrorApp} from './app/ng-magic-mirror';

if (environment.production) {
  enableProdMode();
}

bootstrap(NgMagicMirrorApp);
