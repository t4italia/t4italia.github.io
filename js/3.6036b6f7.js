(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2a7b":function(t,e,n){"use strict";n("6751")},5207:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"bg-grey-3"},[n("div",{staticClass:"row full-width"},t._l(t.productsFiltered,(function(t){return n("div",{key:t.id,staticClass:"q-pa-md col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"},[n("Product",{attrs:{product:t}})],1)})),0)])},s=[],o=n("ded3"),r=n.n(o),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-card",{attrs:{flat:"",bordered:""}},[n("q-img",{staticStyle:{height:"200px"},attrs:{contain:"","spinner-color":"secondary",src:t.product.image},on:{click:function(e){t.expanded=!t.expanded}}}),n("q-card-section",[n("div",{staticClass:"row items-center justify-between"},[n("div",{staticClass:"text-overline text-orange-9 overflow"},[t._v("\n          "+t._s(t.product.code)+"\n        ")]),n("q-btn",{attrs:{disable:"",color:"warning",unelevated:"",dense:"",label:t.product.category.name}})],1),n("div",{staticClass:"text-h5 q-mt-sm q-mb-xs acapo"},[t._v("\n        "+t._s(t.product.name)+"\n      ")]),n("div",{staticClass:"text-caption text-grey"},[t._v("\n        "+t._s(t._f("currency")(t.product.price))+" IVA Esclusa\n      ")]),n("div",{staticClass:"text-caption text-grey"},[t._v("\n        "+t._s(t._f("currency")(1.22*t.product.price))+" IVA Inclusa\n      ")])]),n("q-card-actions",{staticClass:"row justify-between"},[n("q-btn",{attrs:{color:"grey",round:"",flat:"",label:"Info",dense:"",icon:t.expanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(e){t.expanded=!t.expanded}}}),n("q-btn",{attrs:{"no-caps":"",size:"lg",color:"secondary",label:"Prenota",dense:""},on:{click:function(e){t.isDialogOpen=!0}}})],1),n("q-slide-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"expanded"}]},[n("q-separator"),n("div",{staticClass:"text-subitle2 acapo q-pa-md"},[t._v("\n          "+t._s(t.product.description)+"\n        ")]),n("div",{staticClass:"row justify-center q-my-md"},[t.product.link?n("q-btn",{attrs:{color:"warning",unelevated:"",icon:"launch","no-caps":"",type:"a",label:"Info",target:"__blank",href:t.product.link}}):t._e()],1)],1)])],1),n("q-dialog",{model:{value:t.isDialogOpen,callback:function(e){t.isDialogOpen=e},expression:"isDialogOpen"}},[n("q-card",{staticClass:"q-pa-md"},[n("q-card-section",[n("span",{staticClass:"text-h6"},[t._v("Prenotazione ART. "),n("span",{staticClass:"text-weight-light text-subtitle1"},[t._v(t._s(t.product.code))])])]),n("q-card-section",[n("q-form",{on:{submit:t.onSubmit}},[n("q-input",{attrs:{dense:"",label:"Nome / Ragione Sociale","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Error"}]},model:{value:t.customerName,callback:function(e){t.customerName=e},expression:"customerName"}}),n("q-input",{attrs:{dense:"",label:"Telefono","lazy-rules":"",rules:[function(t){return t&&t.length>5&&!isNaN(t)||"Error"}]},model:{value:t.customerPhone,callback:function(e){t.customerPhone=e},expression:"customerPhone"}}),n("q-input",{attrs:{dense:"",label:"Email",type:"email","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Error"}]},model:{value:t.customerEmail,callback:function(e){t.customerEmail=e},expression:"customerEmail"}}),n("q-input",{attrs:{dense:"",label:"Quantità","lazy-rules":"",rules:[function(t){return t&&parseInt(t)>0&&t.length>0&&!isNaN(t)||"Error"}]},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}}),t.noteOpen?t._e():n("q-btn",{attrs:{"no-caps":"",dense:"",color:"warning",unelevated:"",label:"Aggiungi Nota"},on:{click:function(e){t.noteOpen=!0}}}),t.noteOpen?n("q-input",{attrs:{dense:"",type:"textarea",label:"Nota","lazy-rules":""},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}}):t._e(),n("div",{staticClass:"q-gutter-md q-my-md"},[n("div",[t._v("\n              Prezzo Unitario\n              "),n("span",{staticClass:"row text-positive text-bold"},[t._v(t._s(t._f("currency")(t.product.price))+" IVA Esclusa")]),n("span",{staticClass:"row text-positive text-bold"},[t._v(t._s(t._f("currency")(1.22*t.product.price))+" IVA Inclusa")])]),t.quantity>1?n("div",[t._v("\n              Prezzo Totale\n              "),n("span",{staticClass:"row text-positive text-bold"},[t._v(t._s(t._f("currency")(t.quantity*t.product.price))+" IVA Esclusa")]),n("span",{staticClass:"row text-positive text-bold"},[t._v(t._s(t._f("currency")(t.quantity*t.product.price*1.22))+" IVA Inclusa")])]):t._e()]),n("div",{staticClass:"row justify-between"},[n("q-btn",{attrs:{disable:t.pending,label:"Invia Prenotazione",type:"submit",color:"primary"}}),t.pending?n("q-spinner-oval",{attrs:{size:"lg",color:"positive"}}):t._e()],1)],1)],1)],1)],1)],1)},c=[],l=(n("a79d"),n("e6cf"),n("2f62")),u={name:"Product",props:{product:{type:Object,default:Object}},data(){return{note:"",noteOpen:!1,quantity:null,pending:!1,expanded:!1,isDialogOpen:!1}},computed:{customerName:{get(){return this.$store.state.customerName},set(t){this.$store.commit("updateCustomerName",t)}},customerPhone:{get(){return this.$store.state.customerPhone},set(t){this.$store.commit("updateCustomerPhone",t)}},customerEmail:{get(){return this.$store.state.customerEmail},set(t){this.$store.commit("updateCustomerEmail",t)}}},methods:r()(r()({},Object(l["b"])(["postOrder"])),{},{onSubmit(){const t={};t.product_code=this.product.code,t.product_price=this.product.price,t.product_name=this.product.name,t.name=this.customerName,t.phone=this.customerPhone,t.email=this.customerEmail,t.quantity=this.quantity,t.note=this.note,this.pending=!0,this.postOrder(t).then((()=>{this.$q.notify({message:"Prenotazione Inviata!",color:"positive"}),this.isDialogOpen=!1,this.quantity=null,this.note=""})).catch((t=>{this.$q.notify({message:"Errore!",color:"negative"})})).finally((()=>this.pending=!1))}})},d=u,p=(n("2a7b"),n("2877")),m=n("f09f"),b=n("068f"),v=n("a370"),h=n("9c40"),f=n("4b7e"),g=n("e9c1"),y=n("eb85"),_=n("24e8"),q=n("0378"),x=n("27f9"),w=n("1b41"),C=n("eebe"),O=n.n(C),k=Object(p["a"])(d,i,c,!1,null,"2eb00020",null),E=k.exports;O()(k,"components",{QCard:m["a"],QImg:b["a"],QCardSection:v["a"],QBtn:h["a"],QCardActions:f["a"],QSlideTransition:g["a"],QSeparator:y["a"],QDialog:_["a"],QForm:q["a"],QInput:x["a"],QSpinnerOval:w["a"]});var P={name:"ProductSet",components:{Product:E},computed:r()(r()({},Object(l["d"])(["categorySelected"])),Object(l["c"])(["productsFiltered"])),created(){this.categorySelected||this.$router.push("/")}},I=P,N=n("9989"),z=Object(p["a"])(I,a,s,!1,null,null,null);e["default"]=z.exports;O()(z,"components",{QPage:N["a"]})},6751:function(t,e,n){}}]);