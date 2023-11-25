/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_38d1d41e.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="../../public/assets/img/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/webs/LucasMarks/src/layouts/Layout.astro", void 0);

const $$Astro$9 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full  items-start justify-around bg-slate-50 sticky py-3 top-0 z-10 shadow-md"> <a href="" class="cursor-pointer h-[60px] grid place-items-center"> <img src=".../../public/assets/img/LucasMarks_V2-02.png" class="h-[52.8px] w-[250px] top-0"> </a> <div class="flex items-center justify-center  "> <ul class="flex items-center justify-center gap-6 h-[60px] max-[600px]:hidden"> <li><a href="" class="text-slate-950 hover:text-[#17A2B8] font-semibold text-lg">Sercicios</a></li> <li><a href="" class="text-slate-950 hover:text-[#17A2B8] font-semibold text-lg">Contacto</a></li> </ul> <div class="collapse min-[601px]:hidden p-0 "> <input type="checkbox" id="menu"> <div class="collapse-title grid place-items-center p-0 " id="menuLogo"> <svg width="32" height="32" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"></path> </svg> </div> <div class="collapse-content p-0 pb-0 "> <ul class="flex flex-col gap-2 "> <li><a href="" class="text-slate-950 hover:text-[#17A2B8] font-semibold text-md">Sercicios</a></li> <li><a href="" class="text-slate-950 hover:text-[#17A2B8] font-semibold text-md">Contacto</a></li> </ul> </div> </div> </div> </div>  `;
}, "D:/webs/LucasMarks/src/components/NavBar.astro", void 0);

const $$Astro$8 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-center items-center md:h-[500px] w-full xl:h-[600px] 2xl:h-[950px]"> <div class="h-full w-full bg-center bg-cover bg-no-repeat flex justify-center items-center" style="background-image: url(../../public/assets/img/bg_header.png);"> <p class="max-sm:text-base md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl  font-bold  text-slate-100 text-center max-w-[75%] lg:w-1/2 max-sm:m-10">
Somos intermediarios líderes entre vos y las principales compañías de seguros. Logramos los mejores costos y beneficios, garantizando muy buena atención y el respaldo que brinda un Broker Corporativo.
</p> </div> </header>`;
}, "D:/webs/LucasMarks/src/components/Header.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer p-10 text-neutral-content bg-cover bg-no-repeat max-sm:bg-center " style="background-image: url(../../public/assets/img/back_footer.png);"> <aside> <img src="../../public/assets/img/logo.png" alt=""> <p class="md:text-4xl max-sm:text-3xl font-bold text-white ">LUCAS MARKS</p> <p class="text-base font-semibold text-white ">ASESOR DE SEGUROS</p> </aside> <nav> <div class="flex gap-2"> <span> <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path fill="#FF9F00" d="M4.02 13.747A6.25 6.25 0 0 1 10.25 8h27.5a6.25 6.25 0 0 1 6.236 5.828L24.002 24.35L4.02 13.747ZM4 16.567V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V16.645L24.582 26.87a1.25 1.25 0 0 1-1.168-.002L4 16.567Z"></path> </svg> </span> <p class="text-base font-semibold text-white ">info@lucasmarks.com.ar</p> </div> <div class="flex gap-2"> <span> <svg width="30" height="30" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"> <path fill="#FF9F00" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path> </svg> </span> <p class="text-base font-semibold text-white ">11 3452 1981</p> </div> <div class="grid grid-flow-col w-full place-items-center"> <a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#FF9F00"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" fill="#FF9F00"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="#FF9F00"></path></svg></a> </div> </nav> </footer>`;
}, "D:/webs/LucasMarks/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$CardServicio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardServicio;
  const { icon, title, body, visible } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg  shadow-xl w-[300px]  flex lg:h-[400px] lg:flex-col max-sm:w-[90%] sm:h-72 md:w-3/4  max-sm:h-auto"> <figure class="w-full grid place-items-center max-sm:w-[90px]  "> <img class="max-sm:h-[80px] max-sm:w-[80px] max-[770px]:h-[120px] max-[770px]:w-[120px] h-[140px] w-[140px] 2xl:w-[180px] 2xl:h-[180px] px-1"${addAttribute(icon, "src")}${addAttribute(title, "alt")}> </figure> <div class="flex flex-col justify-center lg:w-full items-center text-center text-slate-950  lg:mt-3 2xl:mt-8 md:m-0 px-2  lg:gap-5 max-sm:p-3 max-sm:w-[200px] max-md:gap-3 md:gap-3"> <h2 class="card-title lg:h-[56px] mb-1 2xl:text-4xl 2xl:mb-3 lg:pt-0">${title}</h2> <p class="h-auto grid place-items-center text-sm leading-tight 2xl:text-2xl ">${body}</p> <a href="#"${addAttribute(`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300    ${visible}`, "class")}>
Denuncia
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div>`;
}, "D:/webs/LucasMarks/src/components/CardServicio.astro", void 0);

const $$Astro$5 = createAstro();
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Servicios;
  const url = "../../assets/data/CardServicio.json";
  const res = await fetch(url);
  const docs = await res.json();
  return renderTemplate`${maybeRenderHead()}<p class="text-6xl text-slate-800">Servicios</p> <div class="flex items-center justify-evenly  my-10 lg:my-15 md:gap-4 max-[900px]:flex-col lg:gap-6 lg:flex-row w-full px-4"> ${docs.map((doc) => renderTemplate`${renderComponent($$result, "CardServicio", $$CardServicio, { "title": doc.title, "icon": doc.icon, "body": doc.body, "visible": doc.visible })}`)} </div>`;
}, "D:/webs/LucasMarks/src/components/Servicios.astro", void 0);

const $$Astro$4 = createAstro();
const $$CarrouselCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CarrouselCard;
  const { img, btn, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="h-[95%] w-[95%] bg-center bg-cover bg-no-repeat grid place-items-center mx-1 "${addAttribute(`background-image: url(${img});`, "style")} data-astro-cid-xbwgfsns> <div class=" h-full md:h-[80%] flex flex-col justify-end items-center gap-3 mb-12 p-1" data-astro-cid-xbwgfsns> <p class="text-2xl text-center font-bold uppercase texto" data-astro-cid-xbwgfsns>${title}</p> <a class="btn btn-wide lg:hover:bg-yellow-700 bg-[#FF9F00] " target="_blank"${addAttribute(btn, "href")} data-astro-cid-xbwgfsns>Consultar</a> </div> </div> `;
}, "D:/webs/LucasMarks/src/components/CarrouselCard.astro", void 0);

const $$Astro$3 = createAstro();
const $$Carrousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Carrousel;
  const url = "../../assets/data/CardSlider.json";
  const res = await fetch(url);
  const docs = await res.json();
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center mb-4  gap-6" data-astro-cid-bgoom2kq> <p class="text-slate-800 text-6xl" data-astro-cid-bgoom2kq>Riesgos</p> <p class=" text-sm text-center text-slate-700 p-2" data-astro-cid-bgoom2kq>Contamos con los planes más solicitados y con el respaldo que brinda
    un Broker Corporativo como Makler S.A.</p> </div> <div class="splide h-[270px] sm:h-[350px] w-full  " role="group" data-astro-cid-bgoom2kq> <div class="splide__track " data-astro-cid-bgoom2kq> <ul class="splide__list w-full  " data-astro-cid-bgoom2kq> ${docs.map((doc) => renderTemplate`<li class="splide__slide grid place-items-center h-[200px] md:h-[300px] " data-astro-cid-bgoom2kq> ${renderComponent($$result, "CarrouselCard", $$CarrouselCard, { "title": doc.title, "img": doc.img, "btn": doc.btn, "data-astro-cid-bgoom2kq": true })} </li>`)} </ul> </div> </div>  `;
}, "D:/webs/LucasMarks/src/components/Carrousel.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardDetalle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardDetalle;
  const { icon, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card w-[250px] 2xl:w-[500px] flex lg:flex-col " data-astro-cid-mrjbwomz> <figure data-astro-cid-mrjbwomz> <img${addAttribute(icon, "src")}${addAttribute(title, "alt")} class="max-sm:h-[100px] max-sm:w-[100px] max-[770px]:h-[120px] max-[770px]:w-[120px] h-[140px] w-[140px] 2xl:w-[180px] 2xl:h-[180px] " data-astro-cid-mrjbwomz> </figure> <div class="card-body items-center text-center text-slate-950 p-0 lg:mt-3 2xl:mt-8 md:m-0 " data-astro-cid-mrjbwomz> <h2 class="card-title h-5 mb-1 2xl:text-4xl 2xl:mb-3" data-astro-cid-mrjbwomz>${title}</h2> <p class="h-28 text-sm leading-tight 2xl:text-2xl" data-astro-cid-mrjbwomz>${body}</p> </div> </div> `;
}, "D:/webs/LucasMarks/src/components/CardDetalle.astro", void 0);

const $$Astro$1 = createAstro();
const $$Detalle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Detalle;
  const url = "../../assets/data/CardDetalle.json";
  const res = await fetch(url);
  const docs = await res.json();
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-evenly max-sm:flex-col mt-10 lg:mt-20 lg:mb-10 md:gap-4 md:flex-row lg:gap-14 lg:flex-row  w-[90%]" id="cardSlot"> ${docs.map((doc) => renderTemplate`${renderComponent($$result, "CardDetalle", $$CardDetalle, { "title": doc.title, "icon": doc.icon, "body": doc.body })}`)} </div>`;
}, "D:/webs/LucasMarks/src/components/Detalle.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lucas Marks - Productor, asesor de seguros", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<header data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} </header> <main class="flex flex-col" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Detalle", $$Detalle, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Carrousel", $$Carrousel, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Servicios", $$Servicios, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contacto", null, { "client:only": true, "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "D:/webs/LucasMarks/src/components/react/Contacto.jsx", "client:component-export": "default" })}</main> <footer data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </footer> ` })} 
../components/Contacto.jsx`;
}, "D:/webs/LucasMarks/src/pages/index.astro", void 0);

const $$file = "D:/webs/LucasMarks/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
