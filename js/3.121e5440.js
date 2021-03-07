(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"40bd":function(e,t,r){"use strict";r("5514")},5207:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"bg-grey-3"},[r("div",{staticClass:"row full-width"},e._l(e.productsFiltered,(function(e){return r("div",{key:e.id,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[r("Product",{attrs:{product:e}})],1)})),0)])},n=[],s=r("ded3"),o=r.n(s),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-card",{attrs:{flat:"",bordered:""}},[r("q-img",{staticStyle:{height:"200px"},attrs:{contain:"","spinner-color":"secondary",src:e.product.image}}),r("q-card-section",[r("div",{staticClass:"row items-center justify-between"},[r("div",{staticClass:"text-overline text-orange-9 overflow"},[e._v("\n          "+e._s(e.product.code)+"\n        ")]),r("div",[r("q-btn",{attrs:{disable:"",color:"warning",unelevated:"",dense:"",label:e.product.category.name}})],1)]),r("div",{staticClass:"text-h5 q-mt-sm q-mb-xs overflow"},[e._v("\n        "+e._s(e.product.name)+"\n      ")]),r("div",{staticClass:"text-caption text-grey"},[e._v("\n        "+e._s(e._f("currency")(e.product.price))+" IVA Esclusa\n      ")]),r("div",{staticClass:"text-caption text-grey"},[e._v("\n        "+e._s(e._f("currency")(1.22*e.product.price))+" IVA Inclusa\n      ")])]),r("q-card-actions",{staticClass:"row justify-between"},[r("q-btn",{attrs:{color:"grey",round:"",flat:"",label:"info",dense:"",icon:e.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(t){e.expanded=!e.expanded}}}),r("q-btn",{attrs:{"no-caps":"",size:"lg",color:"secondary",label:"Prenota",dense:""},on:{click:function(t){e.isDialogOpen=!0}}})],1),r("q-slide-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}]},[r("q-separator"),r("div",{staticClass:"text-subitle2 acapo q-pa-md"},[e._v("\n          "+e._s(e.product.description)+"\n        ")])],1)])],1),r("q-dialog",{model:{value:e.isDialogOpen,callback:function(t){e.isDialogOpen=t},expression:"isDialogOpen"}},[r("q-card",{staticClass:"q-pa-md"},[r("q-card-section",[r("span",{staticClass:"text-h6"},[e._v("Prenotazione ART. "),r("span",{staticClass:"text-weight-light text-subtitle1"},[e._v(e._s(e.product.code))])])]),r("q-card-section",[r("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[r("q-input",{attrs:{dense:"",label:"Nome / Ragione Sociale","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Error"}]},model:{value:e.order.name,callback:function(t){e.$set(e.order,"name",t)},expression:"order.name"}}),r("q-input",{attrs:{dense:"",label:"Telefono","lazy-rules":"",rules:[function(e){return e&&e.length>5&&!isNaN(e)||"Error"}]},model:{value:e.order.phone,callback:function(t){e.$set(e.order,"phone",t)},expression:"order.phone"}}),r("q-input",{attrs:{dense:"",label:"Email",type:"email","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Error"}]},model:{value:e.order.email,callback:function(t){e.$set(e.order,"email",t)},expression:"order.email"}}),r("q-input",{attrs:{dense:"",label:"Quantità","lazy-rules":"",rules:[function(e){return e&&parseInt(e)>0&&e.length>0&&!isNaN(e)||"Error"}]},model:{value:e.order.quantity,callback:function(t){e.$set(e.order,"quantity",t)},expression:"order.quantity"}}),r("div",[e._v("\n            Prezzo Unitario\n            "),r("span",{staticClass:"row text-positive text-bold"},[e._v(e._s(e._f("currency")(e.product.price))+" IVA Esclusa")]),r("span",{staticClass:"row text-positive text-bold"},[e._v(e._s(e._f("currency")(1.22*e.product.price))+" IVA Inclusa")])]),e.order.quantity>0?r("div",[e._v("\n            Prezzo Totale\n            "),r("span",{staticClass:"row text-positive text-bold"},[e._v(e._s(e._f("currency")(e.order.quantity*e.product.price))+" IVA Esclusa")]),r("span",{staticClass:"row text-positive text-bold"},[e._v(e._s(e._f("currency")(e.order.quantity*e.product.price*1.22))+" IVA Inclusa")])]):e._e(),r("div",{staticClass:"row justify-between"},[r("q-btn",{attrs:{disable:e.pending,label:"Invia Prenotazione",type:"submit",color:"primary"}}),e.pending?r("q-spinner-oval",{attrs:{size:"lg",color:"positive"}}):e._e()],1)],1)],1)],1)],1)],1)},c=[],l=(r("a79d"),r("e6cf"),r("2f62")),d={name:"Product",props:{product:{type:Object,default:Object}},data(){return{order:{name:"",phone:"",email:"",quantity:null},pending:!1,expanded:!1,isDialogOpen:!1}},methods:o()(o()({},Object(l["b"])(["postOrder"])),{},{onSubmit(){this.order.product_code=this.product.code,this.order.product_price=this.product.price,this.order.product_name=this.product.name,this.pending=!0,this.postOrder(this.order).then((()=>{this.$q.notify({message:"Prenotazione Inviata!",color:"positive"}),this.isDialogOpen=!1,this.order.name="",this.order.phone="",this.order.email="",this.order.quantity=null})).catch((e=>{this.$q.notify({message:"Errore!",color:"negative"})})).finally((()=>this.pending=!1))}})},u=d,p=(r("40bd"),r("2877")),m=r("f09f"),v=r("068f"),b=r("a370"),f=r("9c40"),h=r("4b7e"),g=r("e9c1"),_=r("eb85"),y=r("24e8"),q=r("0378"),x=r("27f9"),w=r("1b41"),C=r("eebe"),O=r.n(C),I=Object(p["a"])(u,i,c,!1,null,"0226ac40",null),z=I.exports;O()(I,"components",{QCard:m["a"],QImg:v["a"],QCardSection:b["a"],QBtn:f["a"],QCardActions:h["a"],QSlideTransition:g["a"],QSeparator:_["a"],QDialog:y["a"],QForm:q["a"],QInput:x["a"],QSpinnerOval:w["a"]});var Q={name:"ProductSet",components:{Product:z},computed:o()(o()({},Object(l["c"])(["products","categorySelected"])),{},{productsFiltered(){return this.products[this.categorySelected]}}),created(){this.categorySelected||this.$router.push("/")}},k=Q,S=r("9989"),E=Object(p["a"])(k,a,n,!1,null,null,null);t["default"]=E.exports;O()(E,"components",{QPage:S["a"]})},5514:function(e,t,r){}}]);