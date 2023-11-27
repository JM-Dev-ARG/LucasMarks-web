import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_5a65a9b5.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.725ea23a.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.e92e0301.css"},{"type":"external","src":"/_astro/index.5727417c.css"},{"type":"inline","content":".simbol::-webkit-calendar-picker-indicator{filter:invert(1)}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/webs/LucasMarks/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_81d8ad7f.mjs","\u0000@astrojs-manifest":"manifest_782d23a9.mjs","D:/webs/LucasMarks/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_e96f1d58.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_f101d9d3.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_f1bbc7bc.mjs","D:/webs/LucasMarks/src/components/react/Contacto.jsx":"_astro/Contacto.91e4f147.js","/astro/hoisted.js?q=0":"_astro/hoisted.725ea23a.js","@astrojs/react/client.js":"_astro/client.802dacf3.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/whatsapp.ec354617.png","/_astro/logo.a6c8c4f7.png","/_astro/LucasMarks_V2-02.1f7fdfba.png","/_astro/index.5727417c.css","/_astro/client.802dacf3.js","/_astro/Contacto.91e4f147.js","/_astro/hoisted.725ea23a.js","/_astro/hoisted.e92e0301.css","/_astro/index.ed373d49.js","/assets/img/accidenteP.png","/assets/img/agricola.png","/assets/img/autos.png","/assets/img/back_footer.png","/assets/img/bg_header.png","/assets/img/calendar.svg","/assets/img/calidad.svg","/assets/img/caucion.png","/assets/img/civil.png","/assets/img/comercio.png","/assets/img/construccion.png","/assets/img/cyber_riesgo.png","/assets/img/empresa.svg","/assets/img/favicon.svg","/assets/img/flota.png","/assets/img/funnel.svg","/assets/img/group.svg","/assets/img/hamburger-menu.svg","/assets/img/hogar.png","/assets/img/logo.png","/assets/img/LucasMarks_V2-02.png","/assets/img/premio.svg","/assets/img/riesgoT.png","/assets/img/thumb-up.svg","/assets/img/todo.png","/assets/img/transporte.png","/assets/img/vida.png","/assets/img/whatsapp.png"]});

export { manifest };
