webpackJsonp([5],{"26dS":function(t,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=o("Dd8w"),s=o.n(i),a=o("NYxO"),e=o("Du/2"),g=o("R5/K"),l=o("F11V"),c=(s()({},Object(a.b)(["language"]),{lang:{get:function(){return this.language},set:function(t){this.setLanguage(t)}}}),s()({},Object(a.c)({setLanguage:e.c}),{doToast:function(){common.Util.toast("toast...")},doAlert:function(){this.$util.alert("alert...")},doAnimation:function(){g.a.registerPlugin(l.a),g.a.from(".g-banner",{scrollTrigger:{trigger:".g-banner"},opacity:0,duration:2}),g.a.from(".g-title",{scrollTrigger:{trigger:".g-title"},opacity:0,duration:2,delay:1.2,ease:"back"}),g.a.from(".g-subtitle",{opacity:0,duration:2,delay:1.8,ease:"back"}),g.a.from(".g-banner-slide",{scrollTrigger:{trigger:".g-banner-slide"},y:-40,opacity:0,delay:2.4,duration:1.2}),g.a.from(".g-fadeinLeft",{scrollTrigger:{trigger:"#block2",start:"top 75%",toggleActions:"restart"},x:-30,opacity:0,duration:.6}),g.a.to(".g-fadeinLeft",{scrollTrigger:{trigger:"#block2",start:"top bottom",toggleActions:"restart"},x:-30,opacity:0,duration:.2}),g.a.from(".g-fadein1",{scrollTrigger:{trigger:".g-fadein1",start:"top 75%",toggleActions:"restart"},delay:.2,opacity:0,duration:1}),g.a.to(".g-fadein1",{scrollTrigger:{trigger:".g-fadein1",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadein2",{scrollTrigger:{trigger:".g-fadein2",start:"top 75%",toggleActions:"restart"},delay:.4,opacity:0,duration:1}),g.a.to(".g-fadein2",{scrollTrigger:{trigger:".g-fadein2",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadein3",{scrollTrigger:{trigger:".g-fadein3",start:"top 75%",toggleActions:"restart"},delay:.6,opacity:0,duration:1}),g.a.to(".g-fadein3",{scrollTrigger:{trigger:".g-fadein3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadeinSlide",{scrollTrigger:{trigger:"#block2",start:"top 75%",toggleActions:"restart"},y:-10,opacity:0,duration:1.2}),g.a.to(".g-fadeinSlide",{scrollTrigger:{trigger:"#block2",start:"top bottom",toggleActions:"restart"},y:-10,opacity:0,duration:.2}),g.a.from("#g-pic3",{scrollTrigger:{trigger:"#g-pic3",start:"top 60%",toggleActions:"restart"},x:-1e3,duration:.8}),g.a.to("#g-pic3",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},x:-1e3,duration:.2}),g.a.from("#g-text31",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text32",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text33",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text31",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text32",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text33",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text3s",{scrollTrigger:{trigger:"#g-text3s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#g-pic4",{scrollTrigger:{trigger:"#g-pic4",start:"top 60%",toggleActions:"restart"},opacity:0,delay:.2,duration:1.2}),g.a.to("#g-pic4",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text41",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text42",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text43",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text41",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text42",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text43",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text4s",{scrollTrigger:{trigger:"#g-text4s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#g-pic5",{scrollTrigger:{trigger:"#g-pic5",start:"top 60%",toggleActions:"restart"},x:-1e3,duration:.8}),g.a.to("#g-pic5",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},x:-1e3,duration:.2}),g.a.from("#g-text51",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text52",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text53",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text51",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text52",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text53",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text5s",{scrollTrigger:{trigger:"#g-text5s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#block6-title",{scrollTrigger:{trigger:"#block6",start:"top 75%",toggleActions:"restart"},x:-30,opacity:0,duration:.6}),g.a.to("#block6-title",{scrollTrigger:{trigger:"#block6",start:"top bottom",toggleActions:"restart"},x:-30,opacity:0,duration:.2}),g.a.from("#g-61-txt",{scrollTrigger:{trigger:"#g-61",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-61-txt",{scrollTrigger:{trigger:"#g-61",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-62-txt",{scrollTrigger:{trigger:"#g-62",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-62-txt",{scrollTrigger:{trigger:"#g-62",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-63-txt",{scrollTrigger:{trigger:"#g-63",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-63-txt",{scrollTrigger:{trigger:"#g-63",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-64-txt",{scrollTrigger:{trigger:"#g-64",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-64-txt",{scrollTrigger:{trigger:"#g-64",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#mask-block6-1",{scrollTrigger:{trigger:"#g-61",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-2",{scrollTrigger:{trigger:"#g-62",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-3",{scrollTrigger:{trigger:"#g-63",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-4",{scrollTrigger:{trigger:"#g-64",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block7",{scrollTrigger:{trigger:"#block7",start:"top 75%",toggleActions:"restart"},left:0,duration:1.6,delay:.2,ease:"power1.easein"}),g.a.from("#g-pic7",{scrollTrigger:{trigger:"#block7",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-text71",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.2,duration:.6}),g.a.from("#g-text72",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.2,duration:1}),g.a.from("#g-text73",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.2,duration:1.4}),g.a.to("#g-text71",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text72",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text73",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text7s",{scrollTrigger:{trigger:"#g-text7s",toggleActions:"restart"},height:0,opacity:0,delay:.4,duration:1.2}),g.a.to("#mask",{top:"100vh",height:0,duration:1.6,ease:"expo.out",delay:.5,onComplete:function(){$("#mask").remove()}})}}),{data:function(){return{}},computed:s()({},Object(a.b)(["language"]),{lang:{get:function(){return this.language},set:function(t){this.setLanguage(t)}}}),methods:s()({},Object(a.c)({setLanguage:e.c}),{doToast:function(){common.Util.toast("toast...")},doAlert:function(){this.$util.alert("alert...")},doAnimation:function(){g.a.registerPlugin(l.a),g.a.from(".g-banner",{scrollTrigger:{trigger:".g-banner"},opacity:0,duration:2}),g.a.from(".g-title",{scrollTrigger:{trigger:".g-title"},opacity:0,duration:2,delay:1.2,ease:"back"}),g.a.from(".g-subtitle",{opacity:0,duration:2,delay:1.8,ease:"back"}),g.a.from(".g-banner-slide",{scrollTrigger:{trigger:".g-banner-slide"},y:-40,opacity:0,delay:2.4,duration:1.2}),g.a.from(".g-fadeinLeft",{scrollTrigger:{trigger:"#block2",start:"top 75%",toggleActions:"restart"},x:-30,opacity:0,duration:.6}),g.a.to(".g-fadeinLeft",{scrollTrigger:{trigger:"#block2",start:"top bottom",toggleActions:"restart"},x:-30,opacity:0,duration:.2}),g.a.from(".g-fadein1",{scrollTrigger:{trigger:".g-fadein1",start:"top 75%",toggleActions:"restart"},delay:.2,opacity:0,duration:1}),g.a.to(".g-fadein1",{scrollTrigger:{trigger:".g-fadein1",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadein2",{scrollTrigger:{trigger:".g-fadein2",start:"top 75%",toggleActions:"restart"},delay:.4,opacity:0,duration:1}),g.a.to(".g-fadein2",{scrollTrigger:{trigger:".g-fadein2",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadein3",{scrollTrigger:{trigger:".g-fadein3",start:"top 75%",toggleActions:"restart"},delay:.6,opacity:0,duration:1}),g.a.to(".g-fadein3",{scrollTrigger:{trigger:".g-fadein3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from(".g-fadeinSlide",{scrollTrigger:{trigger:"#block2",start:"top 75%",toggleActions:"restart"},y:-10,opacity:0,duration:1.2}),g.a.to(".g-fadeinSlide",{scrollTrigger:{trigger:"#block2",start:"top bottom",toggleActions:"restart"},y:-10,opacity:0,duration:.2}),g.a.from("#g-pic3",{scrollTrigger:{trigger:"#g-pic3",start:"top 60%",toggleActions:"restart"},x:-1e3,duration:.8}),g.a.to("#g-pic3",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},x:-1e3,duration:.2}),g.a.from("#g-text31",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text32",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text33",{scrollTrigger:{trigger:"#block3",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text31",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text32",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text33",{scrollTrigger:{trigger:"#block3",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text3s",{scrollTrigger:{trigger:"#g-text3s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#g-pic4",{scrollTrigger:{trigger:"#g-pic4",start:"top 60%",toggleActions:"restart"},opacity:0,delay:.2,duration:1.2}),g.a.to("#g-pic4",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text41",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text42",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text43",{scrollTrigger:{trigger:"#block4",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text41",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text42",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text43",{scrollTrigger:{trigger:"#block4",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text4s",{scrollTrigger:{trigger:"#g-text4s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#g-pic5",{scrollTrigger:{trigger:"#g-pic5",start:"top 60%",toggleActions:"restart"},x:-1e3,duration:.8}),g.a.to("#g-pic5",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},x:-1e3,duration:.2}),g.a.from("#g-text51",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.8,duration:.6}),g.a.from("#g-text52",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.8,duration:1}),g.a.from("#g-text53",{scrollTrigger:{trigger:"#block5",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.8,duration:1.4}),g.a.to("#g-text51",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text52",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text53",{scrollTrigger:{trigger:"#block5",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text5s",{scrollTrigger:{trigger:"#g-text5s",toggleActions:"restart"},height:0,opacity:0,delay:1,duration:1.2}),g.a.from("#block6-title",{scrollTrigger:{trigger:"#block6",start:"top 75%",toggleActions:"restart"},x:-30,opacity:0,duration:.6}),g.a.to("#block6-title",{scrollTrigger:{trigger:"#block6",start:"top bottom",toggleActions:"restart"},x:-30,opacity:0,duration:.2}),g.a.from("#g-61-txt",{scrollTrigger:{trigger:"#g-61",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-61-txt",{scrollTrigger:{trigger:"#g-61",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-62-txt",{scrollTrigger:{trigger:"#g-62",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-62-txt",{scrollTrigger:{trigger:"#g-62",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-63-txt",{scrollTrigger:{trigger:"#g-63",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-63-txt",{scrollTrigger:{trigger:"#g-63",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-64-txt",{scrollTrigger:{trigger:"#g-64",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1,delay:.4}),g.a.to("#g-64-txt",{scrollTrigger:{trigger:"#g-64",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#mask-block6-1",{scrollTrigger:{trigger:"#g-61",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-2",{scrollTrigger:{trigger:"#g-62",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-3",{scrollTrigger:{trigger:"#g-63",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block6-4",{scrollTrigger:{trigger:"#g-64",start:"top 75%",toggleActions:"restart"},left:0,duration:2,delay:.2,ease:"power1.easein"}),g.a.from("#mask-block7",{scrollTrigger:{trigger:"#block7",start:"top 75%",toggleActions:"restart"},left:0,duration:1.6,delay:.2,ease:"power1.easein"}),g.a.from("#g-pic7",{scrollTrigger:{trigger:"#block7",start:"top 75%",toggleActions:"restart"},opacity:0,duration:.1}),g.a.from("#g-text71",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-30,opacity:0,delay:.2,duration:.6}),g.a.from("#g-text72",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-60,opacity:0,delay:.2,duration:1}),g.a.from("#g-text73",{scrollTrigger:{trigger:"#block7",start:"top 60%",toggleActions:"restart"},x:-70,opacity:0,delay:.2,duration:1.4}),g.a.to("#g-text71",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text72",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.to("#g-text73",{scrollTrigger:{trigger:"#block7",start:"top bottom",toggleActions:"restart"},opacity:0,duration:.2}),g.a.from("#g-text7s",{scrollTrigger:{trigger:"#g-text7s",toggleActions:"restart"},height:0,opacity:0,delay:.4,duration:1.2}),g.a.to("#mask",{top:"100vh",height:0,duration:1.6,ease:"expo.out",delay:.5,onComplete:function(){$("#mask").remove()}})}}),mounted:function(){this.doAnimation()},created:function(){},destroyed:function(){l.a.getAll().forEach(function(t){t.kill()})}}),n={render:function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{attrs:{id:"home-wrapper"}},[o("div",{attrs:{id:"mask"}}),t._v(" "),o("div",{staticClass:"banner g-banner"},[o("div",{staticClass:"banner__infobox"},[o("h1",{staticClass:"g-title"},[o("span",{staticClass:"banner__heading-en"},[t._v(t._s(t.$t("home.text11")))]),t._v(" "),o("span",{staticClass:"banner__heading-cht",domProps:{innerHTML:t._s(t.$t("home.text12"))}})]),t._v(" "),o("p",{staticClass:"banner__desc g-subtitle"},[o("span",{staticClass:"banner__desc-line"},[t._v(t._s(t.$t("home.text13")))]),t._v(" "),o("span",{staticClass:"banner__desc-line"},[t._v(t._s(t.$t("home.text14")))])])]),t._v(" "),o("div",{staticClass:"banner__vtl-text g-banner-slide"},[o("div",{staticClass:"banner__vtl-text__inner"},[t._v("\n                "+t._s(t.$t("home.text1s"))+"\n            ")])])]),t._v(" "),o("section",{staticClass:"section section-promo",attrs:{id:"block2"}},[o("div",{staticClass:"wrap__inner wrap__inner--1200"},[o("div",{staticClass:"box-center"},[o("h3",{staticClass:"section__subheading g-fadeinLeft"},[t._v(t._s(t.$t("home.text21")))]),t._v(" "),o("h2",{staticClass:"section__heading g-fadeinLeft"},[t._v(t._s(t.$t("home.text22")))])]),t._v(" "),o("ul",{staticClass:"promolist"},[o("li",{staticClass:"promolist__item g-fadein1"},[o("div",{staticClass:"promolist__heading text-secondary"},[o("span",{staticClass:"promolist__heading-en"},[t._v(t._s(t.$t("home.text2a1")))]),t._v(" "),o("span",{staticClass:"promolist__heading-cht"},[t._v(t._s(t.$t("home.text2a2")))])]),t._v(" "),o("p",{staticClass:"section__text text-default"},[t._v(t._s(t.$t("home.text2a3")))])]),t._v(" "),o("li",{staticClass:"promolist__item g-fadein2"},[o("div",{staticClass:"promolist__heading text-secondary"},[o("span",{staticClass:"promolist__heading-en"},[t._v(t._s(t.$t("home.text2b1")))]),t._v(" "),o("span",{staticClass:"promolist__heading-cht"},[t._v(t._s(t.$t("home.text2b2")))])]),t._v(" "),o("p",{staticClass:"section__text text-default"},[t._v(t._s(t.$t("home.text2b3")))])]),t._v(" "),o("li",{staticClass:"promolist__item g-fadein3"},[o("div",{staticClass:"promolist__heading text-secondary"},[o("span",{staticClass:"promolist__heading-en"},[t._v(t._s(t.$t("home.text2c1")))]),t._v(" "),o("span",{staticClass:"promolist__heading-cht"},[t._v(t._s(t.$t("home.text2c2")))])]),t._v(" "),o("p",{staticClass:"section__text text-default"},[t._v(t._s(t.$t("home.text2c3")))])])])]),t._v(" "),o("div",{staticClass:"section__vtl-text g-fadeinSlide"},[o("p",[t._v(t._s(t.$t("home.text2s")))])])]),t._v(" "),o("div",{staticClass:"sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md",attrs:{id:"block3"}},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"section section1 section--full"},[o("div",{staticClass:"section-img"},[o("img",{attrs:{src:t.$cdn+"/image-base/home/introImg_01.jpg",alt:"",id:"g-pic3"}})])])]),t._v(" "),o("div",{staticClass:"col-md"},[o("section",{staticClass:"section section2 section--solid d-md-flex align-items-md-center"},[o("div",{staticClass:"section__inner"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-10 offset-lg-1"},[o("div",{staticClass:"section__subheading text-default ",attrs:{id:"g-text31"}},[t._v(t._s(t.$t("home.text31")))]),t._v(" "),o("div",{staticClass:"section__heading",attrs:{id:"g-text32"}},[o("div",{domProps:{innerHTML:t._s(t.$t("home.text32"))}}),t._v(" "),o("div",[t._v(t._s(t.$t("home.text33")))])]),t._v(" "),o("div",{staticClass:"section__text text-default",attrs:{id:"g-text33"}},[o("p",{domProps:{innerHTML:t._s(t.$t("home.text34"))}})])])])]),t._v(" "),o("div",{staticClass:"section__vtl-text section__vtl-text--right",attrs:{id:"g-text3s"}},[o("div",[t._v(t._s(t.$t("home.text3s")))])])])])])]),t._v(" "),o("div",{staticClass:"sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-swap g-block",attrs:{id:"block4"}},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"section section1 section--full"},[o("div",{staticClass:"section-img"},[o("img",{attrs:{src:t.$cdn+"/image-base/home/introImg_02.jpg",alt:"",id:"g-pic4"}})])])]),t._v(" "),o("div",{staticClass:"col-md"},[o("section",{staticClass:"section section2 section--solid d-md-flex align-items-md-center"},[o("div",{staticClass:"section__inner"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-10 offset-lg-1"},[o("div",{staticClass:"section__subheading text-default",attrs:{id:"g-text41"}},[t._v(t._s(t.$t("home.text41")))]),t._v(" "),o("div",{staticClass:"section__heading",attrs:{id:"g-text42"}},[o("div",{domProps:{innerHTML:t._s(t.$t("home.text42"))}}),t._v(" "),o("div",[t._v(t._s(t.$t("home.text43")))])]),t._v(" "),o("div",{staticClass:"section__text text-default",attrs:{id:"g-text43"}},[o("p",{domProps:{innerHTML:t._s(t.$t("home.text44"))}})])])])]),t._v(" "),o("div",{staticClass:"section__vtl-text section__vtl-text--right",attrs:{id:"g-text4s"}},[o("div",[t._v(t._s(t.$t("home.text4s")))])])])])])]),t._v(" "),o("div",{staticClass:"sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-sd",attrs:{id:"block5"}},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"section section1 section--full"},[o("div",{staticClass:"section-img"},[o("img",{attrs:{src:t.$cdn+"/image-base/home/introImg_03.jpg",alt:"",id:"g-pic5"}})])])]),t._v(" "),o("div",{staticClass:"col-md"},[o("section",{staticClass:"section section2 section--solid d-md-flex align-items-md-center"},[o("div",{staticClass:"section__inner"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-10 offset-lg-1"},[o("div",{staticClass:"section__subheading text-default",attrs:{id:"g-text51"}},[t._v(t._s(t.$t("home.text51")))]),t._v(" "),o("div",{staticClass:"section__heading",attrs:{id:"g-text52"},domProps:{innerHTML:t._s(t.$t("home.text52"))}}),t._v(" "),o("div",{staticClass:"section__text text-default",attrs:{id:"g-text53"}},[o("p",[t._v(t._s(t.$t("home.text53")))])])])])]),t._v(" "),o("div",{staticClass:"section__vtl-text section__vtl-text--right",attrs:{id:"g-text5s"}},[o("div",[t._v(t._s(t.$t("home.text5s")))])])])])])]),t._v(" "),o("section",{staticClass:"section section-plan",attrs:{id:"block6"}},[o("div",{staticClass:"wrap__inner",attrs:{id:"block6-title"}},[o("div",{staticClass:"box-center"},[o("h3",{staticClass:"section__subheading subtext"},[t._v(t._s(t.$t("home.text61")))]),t._v(" "),o("h2",{staticClass:"section__heading subtext",domProps:{innerHTML:t._s(t.$t("home.text62"))}})])]),t._v(" "),o("div",{staticClass:"planlist"},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-md-6 col-lg",attrs:{id:"g-61"}},[o("div",{staticClass:"block6-pic pic1"}),t._v(" "),o("div",{staticClass:"pic-mask",attrs:{id:"mask-block6-1"}}),t._v(" "),o("div",{staticClass:"planlist__item planlist__item-buzz"},[o("div",{staticClass:"planlist__infobox",attrs:{id:"g-61-txt"}},[o("div",{staticClass:"section__subheading planlist__subheading"},[t._v(t._s(t.$t("home.text6a1")))]),t._v(" "),o("div",{staticClass:"section__heading planlist__heading"},[t._v(t._s(t.$t("home.text6a2")))]),t._v(" "),o("div",{staticClass:"section__text text-default planlist__desc",domProps:{innerHTML:t._s(t.$t("home.text6a3"))}})])])]),t._v(" "),o("div",{staticClass:"col-md-6 col-lg",attrs:{id:"g-62"}},[o("div",{staticClass:"block6-pic pic2"}),t._v(" "),o("div",{staticClass:"pic-mask",attrs:{id:"mask-block6-2"}}),t._v(" "),o("div",{staticClass:"planlist__item planlist__item-buzz"},[o("div",{staticClass:"planlist__infobox",attrs:{id:"g-62-txt"}},[o("div",{staticClass:"section__subheading planlist__subheading"},[t._v(t._s(t.$t("home.text6b1")))]),t._v(" "),o("div",{staticClass:"section__heading planlist__heading"},[t._v(t._s(t.$t("home.text6b2")))]),t._v(" "),o("div",{staticClass:"section__text text-default planlist__desc",domProps:{innerHTML:t._s(t.$t("home.text6b3"))}})])])]),t._v(" "),o("div",{staticClass:"col-md-6 col-lg",attrs:{id:"g-63"}},[o("div",{staticClass:"block6-pic pic3"}),t._v(" "),o("div",{staticClass:"pic-mask",attrs:{id:"mask-block6-3"}}),t._v(" "),o("div",{staticClass:"planlist__item planlist__item-buzz"},[o("div",{staticClass:"planlist__infobox",attrs:{id:"g-63-txt"}},[o("div",{staticClass:"section__subheading planlist__subheading"},[t._v(t._s(t.$t("home.text6c1")))]),t._v(" "),o("div",{staticClass:"section__heading planlist__heading"},[t._v(t._s(t.$t("home.text6c2")))]),t._v(" "),o("div",{staticClass:"section__text text-default planlist__desc",domProps:{innerHTML:t._s(t.$t("home.text6c3"))}})])])]),t._v(" "),o("div",{staticClass:"col-md-6 col-lg",attrs:{id:"g-64"}},[o("div",{staticClass:"block6-pic pic4"}),t._v(" "),o("div",{staticClass:"pic-mask",attrs:{id:"mask-block6-4"}}),t._v(" "),o("div",{staticClass:"planlist__item planlist__item-buzz"},[o("div",{staticClass:"planlist__infobox",attrs:{id:"g-64-txt"}},[o("div",{staticClass:"section__subheading planlist__subheading"},[t._v(t._s(t.$t("home.text6d1")))]),t._v(" "),o("div",{staticClass:"section__heading planlist__heading"},[t._v(t._s(t.$t("home.text6d2")))]),t._v(" "),o("div",{staticClass:"section__text text-default planlist__desc",domProps:{innerHTML:t._s(t.$t("home.text6d3"))}})])])])])])]),t._v(" "),o("div",{staticClass:"sections-wrap bg-primary sections-wrap--overlay-xs sections-wrap--overlay-md bg-primary-swap g-block",attrs:{id:"block7"}},[o("div",{staticClass:"row no-gutters"},[o("div",{staticClass:"col-md"},[o("div",{staticClass:"section section1 section--full"},[o("div",{staticClass:"section-img"},[o("img",{attrs:{src:t.$cdn+"/image-base/home/introImg_04.jpg",alt:"",id:"g-pic7"}})]),t._v(" "),o("div",{staticClass:"pic-mask",attrs:{id:"mask-block7"}})])]),t._v(" "),o("div",{staticClass:"col-md"},[o("section",{staticClass:"section section2 section--solid d-md-flex align-items-md-center"},[o("div",{staticClass:"section__inner"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-10 offset-lg-1"},[o("div",{staticClass:"section__subheading text-default",attrs:{id:"g-text71"}},[t._v(t._s(t.$t("home.text71")))]),t._v(" "),o("div",{staticClass:"section__heading",attrs:{id:"g-text72"},domProps:{innerHTML:t._s(t.$t("home.text72"))}}),t._v(" "),o("div",{staticClass:"section__text text-default",attrs:{id:"g-text73"}},[o("p",[t._v(t._s(t.$t("home.text73")))])])])])]),t._v(" "),o("div",{staticClass:"section__vtl-text section__vtl-text--right",attrs:{id:"g-text7s"}},[o("div",[t._v(t._s(t.$t("home.text7s")))])])])])])])])},staticRenderFns:[]};var d=o("VU/8")(c,n,!1,function(t){o("g41H")},null,null);r.default=d.exports},g41H:function(t,r){}});