import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_510e24cb.mjs';

const _page0  = () => import('./chunks/generic_2e9feb41.mjs');
const _page1  = () => import('./chunks/index_e01ce01c.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
