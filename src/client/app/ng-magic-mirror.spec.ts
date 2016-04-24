import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {NgMagicMirrorApp} from '../app/ng-magic-mirror';

beforeEachProviders(() => [NgMagicMirrorApp]);

describe('App: NgMagicMirror', () => {
  it('should have the `defaultMeaning` as 42', inject([NgMagicMirrorApp], (app: NgMagicMirrorApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([NgMagicMirrorApp], (app: NgMagicMirrorApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

