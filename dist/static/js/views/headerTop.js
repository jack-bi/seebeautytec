webpackJsonp([16],{TXGW:function(e,n){},Yj4l:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("Dd8w"),s=a.n(t),i=a("0cpf"),r=a("NYxO"),u=a("Du/2"),o=(s()({},Object(r.c)({setLanguage:u.c}),{menuSelect:i.default.Menu.menuSelect,mouseEnter:i.default.Menu.mouseEnter,mouseLeave:i.default.Menu.mouseLeave,goHome:i.default.Menu.goHome,langDo:function(e){this.setLanguage(e),this.setLangClass(e),this.showLangList=!1},setLangClass:function(e){$("body").removeClass(),$("body").toggleClass(e)}}),s()({},Object(r.b)(["language","menuItems","currentMenu","langList"]),{langText:function(){var e=this;return e.langList.find(function(n){return n.enName===e.language}).cnName}}),{data:function(){return{showLangList:!1,menuOpen:!1,menubg:""}},methods:s()({},Object(r.c)({setLanguage:u.c}),{menuSelect:i.default.Menu.menuSelect,mouseEnter:i.default.Menu.mouseEnter,mouseLeave:i.default.Menu.mouseLeave,goHome:i.default.Menu.goHome,langDo:function(e){this.setLanguage(e),this.setLangClass(e),this.showLangList=!1},setLangClass:function(e){$("body").removeClass(),$("body").toggleClass(e)}}),computed:s()({},Object(r.b)(["language","menuItems","currentMenu","langList"]),{langText:function(){var e=this;return e.langList.find(function(n){return n.enName===e.language}).cnName}}),mounted:function(){i.default.Menu.headerFadeIn()},created:function(){}}),l={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("header",{staticClass:"header g-header",class:{"header--open":e.menuOpen}},[a("div",{staticClass:"header__inner"},[a("div",{staticClass:"header__logo logo",on:{click:function(n){return e.goHome()}}},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(n){return e.$router.push({name:"home"})}}},[a("img",{attrs:{src:e.$cdn+"/image-base/common/logo_title.png",alt:""}}),e._v(" "),a("img",{attrs:{src:e.$cdn+"/image-base/common/logo_title_h5.png",alt:""}})])]),e._v(" "),a("div",{staticClass:"header__inner-bar"},[a("div",{staticClass:"header__navbar navbar"},[a("nav",{staticClass:"nav-wrap",class:{"nav-wrap--open":e.menuOpen},attrs:{id:"menulist"}},[a("a",{staticClass:"nav-wrap__trigger",attrs:{href:"javascript:void(0)"},on:{click:function(n){e.menuOpen=!e.menuOpen}}},[a("div",{staticClass:"nav-wrap__trigger-line"}),e._v(" "),a("div",{staticClass:"nav-wrap__trigger-line"}),e._v(" "),a("div",{staticClass:"nav-wrap__trigger-line"})]),e._v(" "),a("div",{staticClass:"nav-wrap__dropbox-overlay"},[a("div",{staticClass:"nav-wrap__dropbox"},[a("ul",{staticClass:"nav"},e._l(e.menuItems,function(n,t){return a("li",{key:t,staticClass:"nav__item",class:{active:n.num===e.currentMenu},attrs:{id:n.id}},[a("a",{staticClass:"nav__link",attrs:{href:"javascript:void(0)"},on:{click:function(a){return e.menuSelect(n,n.num)},mouseenter:function(a){return e.mouseEnter(n.menubg)},mouseleave:function(n){return e.mouseLeave()}}},[e._v("\n                    "+e._s(e.$t(""+n.text))+"\n                  ")]),e._v(" "),a("div",{staticClass:"li-background",attrs:{id:n.menubg}})])}),0),e._v(" "),a("span",{staticClass:"nav__item-border"})])]),e._v(" "),a("div",{staticClass:"langselect",on:{click:function(n){e.showLangList=!e.showLangList}}},[a("span",[e._v(e._s(e.langText))]),e._v(" "),a("div",{staticClass:"arrow",class:{"arrow-up":e.showLangList},attrs:{id:"lang-arrow"}})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLangList,expression:"showLangList"}],staticClass:"langListshow"},[a("ul",[e._l(e.langList,function(n,t){return a("li",{key:t,class:{nonClick:n.enName===e.language},on:{click:function(a){return e.langDo(n.enName,n.cnName,t)}}},[a("span",[e._v(e._s(n.cnName))])])}),e._v(" "),a("li",{staticClass:"langclose",attrs:{id:"langCLOSE"},on:{click:function(n){e.showLangList=!1}}},[a("span",[e._v(e._s(e.$t("common.text1")))])])],2)])])])])]),e._v(" "),a("div",{staticClass:"header-bg"})])},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(e){a("TXGW")},null,null);n.default=c.exports}});