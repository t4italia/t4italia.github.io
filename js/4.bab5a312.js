(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"77ac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-grey-3"},[a("div",{staticClass:"row full-width"},t._l(t.categories,(function(e){return a("div",{key:e.id,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[e.display?a("Category",{attrs:{category:e}}):t._e()],1)})),0)])},o=[],r=a("ded3"),c=a.n(r),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-card",{attrs:{flat:"",bordered:""},on:{click:t.setCategory}},[a("q-img",{staticStyle:{height:"200px"},attrs:{contain:"","spinner-color":"secondary",src:t.category.image}}),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("\n        "+t._s(t.category.name)+"\n      ")]),a("div",{staticClass:"text-overline text-orange-9"},[t._v("\n        "+t._s(t.category.description)+"\n      ")])])],1)],1)},i=[],l=a("2f62"),d={name:"Category",props:{category:{type:Object,default:Object}},data(){return{}},methods:c()(c()({},Object(l["b"])(["getProducts"])),{},{setCategory(){this.$store.commit("updateCategory",this.category.id),this.getProducts().then((()=>this.$router.push("/products")))}})},g=d,u=a("2877"),m=a("f09f"),p=a("068f"),y=a("a370"),h=a("eebe"),C=a.n(h),b=Object(u["a"])(g,n,i,!1,null,null,null),f=b.exports;C()(b,"components",{QCard:m["a"],QImg:p["a"],QCardSection:y["a"]});var v={name:"CategorySet",components:{Category:f},computed:c()({},Object(l["d"])(["categories"])),created(){this.getCategories(),this.$store.commit("updateCategory",void 0)},methods:c()({},Object(l["b"])(["getCategories","getProducts"]))},_=v,x=a("9989"),w=Object(u["a"])(_,s,o,!1,null,null,null);e["default"]=w.exports;C()(w,"components",{QPage:x["a"]})}}]);