(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{B1dQ:function(t,n,e){"use strict";e.r(n),e.d(n,"WaiterModule",(function(){return L}));var o=e("ofXK"),i=e("3Pt+"),c=e("PCNd"),a=e("tyNb"),r=e("fXoL"),s=e("Byxa"),l=e("PSD3"),b=e.n(l);let d=(()=>{class t{constructor(){this.name="",this.table=""}ngOnInit(){}sendToLocalStorage(){""!==this.name&&""!==this.table?(localStorage.setItem("client",this.name),localStorage.setItem("table",this.table),this.name="",this.table=""):b.a.fire({icon:"error",text:"Completa los campos!"})}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-input-section"]],decls:7,vars:2,consts:[[1,"container"],["for","name",1,"container__label"],["placeholder","Cliente","type","text",3,"ngModel","ngModelChange"],["for","table",1,"container__label"],["placeholder","# de mesa","type","text",3,"ngModel","ngModelChange"],[3,"click"]],template:function(t,n){1&t&&(r.Mb(0,"div",0),r.Mb(1,"label",1),r.Mb(2,"input",2),r.Tb("ngModelChange",(function(t){return n.name=t})),r.Lb(),r.Lb(),r.Mb(3,"label",3),r.Mb(4,"input",4),r.Tb("ngModelChange",(function(t){return n.table=t})),r.Lb(),r.Lb(),r.Mb(5,"button",5),r.Tb("click",(function(){return n.sendToLocalStorage()})),r.fc(6,"Ok"),r.Lb(),r.Lb()),2&t&&(r.yb(2),r.Zb("ngModel",n.name),r.yb(2),r.Zb("ngModel",n.table))},directives:[i.a,i.f,i.h],styles:[".container__label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.7);border:none;height:45px;padding:0 10px;outline:none;font-size:1.6rem;border-radius:5px}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%]{font-size:62.5%}body[_ngcontent-%COMP%]{background-color:#fafafa}.container[_ngcontent-%COMP%]{width:50vw;display:flex;justify-content:space-between}.container[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}button[_ngcontent-%COMP%]{width:30px;border:none;outline:none;color:#fafafa;font-weight:700;border-radius:5px;background:#f7473a}"]}),t})(),u=(()=>{class t{constructor(){this.tabChange=new r.n}handleTabChange(t){this.tabChange.emit(t)}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Cb({type:t,selectors:[["app-header-nav"]],outputs:{tabChange:"tabChange"},decls:7,vars:0,consts:[[1,"child1",3,"click"],[1,"child2",3,"click"],[1,"child3",3,"click"]],template:function(t,n){1&t&&(r.Mb(0,"nav"),r.Mb(1,"button",0),r.Tb("click",(function(){return n.handleTabChange(0)})),r.fc(2,"Desayuno"),r.Lb(),r.Mb(3,"button",1),r.Tb("click",(function(){return n.handleTabChange(1)})),r.fc(4,"Comida"),r.Lb(),r.Mb(5,"button",2),r.Tb("click",(function(){return n.handleTabChange(2)})),r.fc(6,"Bebidas"),r.Lb(),r.Lb())},styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%]{font-size:62.5%}body[_ngcontent-%COMP%]{background-color:#fafafa}button[_ngcontent-%COMP%]{background-color:initial;border:none;padding:1rem;font-family:Cinzel,serif;font-size:2rem;outline:none;color:#2f3132}button[_ngcontent-%COMP%]:hover{cursor:pointer}button[_ngcontent-%COMP%]:focus{font-weight:700}.child1[_ngcontent-%COMP%]:after, .child2[_ngcontent-%COMP%]:after{content:" \u2022 ";color:#f7473a}']}),t})();var p=e("VLny"),f=e("2Vo4");let h=(()=>{class t{constructor(){this.products=[],this.total=new f.a([]),this.total$=this.total.asObservable()}addToTotal(t,n){const e=this.products.findIndex(n=>n.id===t.id);-1!==e?(this.products[e].quantity++,this.products[e].priceByQty=this.products[e].price*this.products[e].quantity):(t.quantity=1,t.priceByQty=t.price,this.products=[...this.products,t]),this.products=this.products.filter(t=>t.quantity>0),this.total.next(this.products)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=e("I/3d");function y(t,n){if(1&t){const t=r.Nb();r.Mb(0,"li"),r.fc(1),r.Xb(2,"currency"),r.Mb(3,"button",4),r.Tb("click",(function(){r.bc(t);const e=n.$implicit;return r.Wb().subtraction(e.id)})),r.fc(4,"-"),r.Lb(),r.Mb(5,"p"),r.fc(6),r.Lb(),r.Mb(7,"button",4),r.Tb("click",(function(){r.bc(t);const e=n.$implicit;return r.Wb().sum(e.id)})),r.fc(8,"+"),r.Lb(),r.Lb()}if(2&t){const t=n.$implicit;r.yb(1),r.ic(" ",t.title," ",r.Yb(2,3,t.priceByQty)," "),r.yb(5),r.gc(t.quantity)}}let m=(()=>{class t{constructor(t,n){this.totalService=t,this.firestore=n,this.total=[],this.totalToPay=0,this.totalService.total$.subscribe(t=>{this.total=t,t.length>0&&(this.totalToPay=t.map(t=>t.priceByQty).reduce((t,n)=>t+n))}),this.collection=this.firestore.collection("order")}ngOnInit(){}sendOrder(){const t=this.firestore.createId(),n=localStorage.getItem("client"),e=localStorage.getItem("table"),o={id:t,products:this.total,total:this.totalToPay,date:new Date,client:n,table:e,status:p.a.inProcess};return this.total=[],this.totalService.products=[],this.totalToPay=0,b.a.fire("Enviado!","Tu pedido se esta preparando!","success"),this.collection.doc(t).set(o)}subtraction(t){this.total.find(n=>n.id===t).quantity>1?this.total=this.total.map(n=>(n.id===t&&(n.quantity--,this.totalToPay-=n.price,n.priceByQty=n.price*n.quantity),n)):(this.total=this.total.map(n=>(n.id===t&&n.quantity--,n)).filter(n=>n.id!==t),this.totalToPay=this.total.length>0?this.total.map(t=>t.priceByQty).reduce((t,n)=>t+n):0)}sum(t){const n=this.total.find(n=>n.id===t);console.log(n),n.quantity>0&&(this.total=this.total.map(n=>(n.id===t&&(n.quantity++,this.totalToPay+=n.price,n.priceByQty=n.price*n.quantity),n)))}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(h),r.Ib(g.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-total-list"]],decls:11,vars:4,consts:[[1,"container"],[1,"container__products"],[4,"ngFor","ngForOf"],[1,"container__pay"],[3,"click"]],template:function(t,n){1&t&&(r.Mb(0,"h4"),r.fc(1,"Tu orden"),r.Lb(),r.Mb(2,"div",0),r.Mb(3,"ul",1),r.ec(4,y,9,5,"li",2),r.Lb(),r.Mb(5,"div",3),r.Mb(6,"button",4),r.Tb("click",(function(){return n.sendOrder()})),r.fc(7,"Enviar"),r.Lb(),r.Mb(8,"h3"),r.fc(9),r.Xb(10,"currency"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.yb(4),r.Zb("ngForOf",n.total),r.yb(5),r.hc("Total ",r.Yb(10,2,n.totalToPay),""))},directives:[o.j],pipes:[o.d],styles:[".container__pay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:200px;height:45px;border:none;outline:none;font-family:Roboto,sans-serif;color:#fafafa;font-weight:700;border-radius:5px}*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%]{font-size:62.5%}body[_ngcontent-%COMP%]{background-color:#fafafa}[_nghost-%COMP%]{color:#2f3132}h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-size:1.6rem;font-family:Cinzel,serif}.container__products[_ngcontent-%COMP%]{height:410px}.container__products[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:space-between;list-style:none;margin:10px 0;font-size:1.8rem;font-family:Roboto,sans-serif}.container__products[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:2rem;width:3rem;height:3rem;border:none;border-radius:50px;background-color:#d1d2d2;color:#f7473a;outline:none}.container__pay[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.container__pay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#f7473a}"]}),t})(),M=(()=>{class t{constructor(t,n){this.fs=t,this.totalService=n}ngOnInit(){}addToTotal(){if("HeWtfLtGwLfNlPWE7wJ3"===this.product.id||"rXwwGWvHHQXMm0KtiDyb"===this.product.id){const t={};this.fs.collection("types").get().subscribe(n=>{n.forEach(n=>{t[n.id]=n.data().type}),b.a.fire({title:"De que quieres tu hamburguesa?",input:"select",inputOptions:{options:t},inputPlaceholder:"Tu proteina",showCancelButton:!0}).then(({value:t})=>{this.product.type||(this.product.type=[]),this.product.type.push(t),this.totalService.addToTotal(this.product)})})}else this.totalService.addToTotal(this.product)}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(g.a),r.Ib(h))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-lunch-products"]],inputs:{product:"product"},decls:10,vars:7,consts:[[3,"click"],[3,"src","alt"],[1,"title-container"]],template:function(t,n){1&t&&(r.Mb(0,"a",0),r.Tb("click",(function(){return n.addToTotal()})),r.Jb(1,"img",1),r.Lb(),r.Mb(2,"div",2),r.Mb(3,"h2"),r.fc(4),r.Lb(),r.Mb(5,"h2"),r.fc(6),r.Xb(7,"currency"),r.Lb(),r.Lb(),r.Mb(8,"p"),r.fc(9),r.Lb()),2&t&&(r.yb(1),r.Zb("src",n.product.image,r.cc)("alt",n.product.title),r.yb(3),r.hc(" ",n.product.title," "),r.yb(2),r.hc(" ",r.Yb(7,5,n.product.price)," "),r.yb(3),r.hc(" ",n.product.description," "))},pipes:[o.d],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%]{font-size:62.5%}body[_ngcontent-%COMP%]{background-color:#fafafa}[_nghost-%COMP%]{font-family:Roboto,sans-serif;display:flex;flex-direction:column}[_nghost-%COMP%], img[_ngcontent-%COMP%]{width:20.6rem}p[_ngcontent-%COMP%]{font-size:1.4rem;margin-top:1rem}.title-container[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:space-between}.title-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:400}"]}),t})();function _(t,n){1&t&&r.Jb(0,"app-lunch-products",8),2&t&&r.Zb("product",n.$implicit)}function C(t,n){if(1&t&&(r.Mb(0,"div",6),r.ec(1,_,1,1,"app-lunch-products",7),r.Lb()),2&t){const t=r.Wb();r.yb(1),r.Zb("ngForOf",t.breakfastProducts)}}function P(t,n){1&t&&r.Jb(0,"app-lunch-products",8),2&t&&r.Zb("product",n.$implicit)}function O(t,n){if(1&t&&(r.Mb(0,"div",6),r.ec(1,P,1,1,"app-lunch-products",7),r.Lb()),2&t){const t=r.Wb();r.yb(1),r.Zb("ngForOf",t.lunchProducts)}}function w(t,n){1&t&&r.Jb(0,"app-lunch-products",8),2&t&&r.Zb("product",n.$implicit)}function v(t,n){if(1&t&&(r.Mb(0,"div",6),r.ec(1,w,1,1,"app-lunch-products",7),r.Lb()),2&t){const t=r.Wb();r.yb(1),r.Zb("ngForOf",t.drinksProducts)}}const x=[{path:"",component:(()=>{class t{constructor(t){this.productService=t,this.breakfastProducts=[],this.lunchProducts=[],this.drinksProducts=[],this.tab=0}ngOnInit(){this.fetchProducts()}changeTab(t){this.tab=t}fetchProducts(){this.productService.getAllProducts().subscribe(({response:t})=>{this.breakfastProducts=t.filter(t=>0===t.category),this.lunchProducts=t.filter(t=>1===t.category),this.drinksProducts=t.filter(t=>2===t.category)})}}return t.\u0275fac=function(n){return new(n||t)(r.Ib(s.a))},t.\u0275cmp=r.Cb({type:t,selectors:[["app-waiter-view"]],decls:11,vars:3,consts:[[3,"tabChange"],[1,"main--container"],[1,"main--products"],["class","main--products__item",4,"ngIf"],[1,"main--total"],[1,"main--total__container"],[1,"main--products__item"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(t,n){1&t&&(r.Jb(0,"app-input-section"),r.Mb(1,"div"),r.Mb(2,"app-header-nav",0),r.Tb("tabChange",(function(t){return n.changeTab(t)})),r.Lb(),r.Lb(),r.Mb(3,"section",1),r.Mb(4,"div",2),r.ec(5,C,2,1,"div",3),r.ec(6,O,2,1,"div",3),r.ec(7,v,2,1,"div",3),r.Lb(),r.Mb(8,"div",4),r.Mb(9,"div",5),r.Jb(10,"app-total-list"),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.yb(5),r.Zb("ngIf",0===n.tab),r.yb(1),r.Zb("ngIf",1===n.tab),r.yb(1),r.Zb("ngIf",2===n.tab))},directives:[d,u,o.k,m,o.j,M],styles:["*[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0}html[_ngcontent-%COMP%]{font-size:62.5%}body[_ngcontent-%COMP%]{background-color:#fafafa}[_nghost-%COMP%]{width:100%}.main--container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%}.main--products[_ngcontent-%COMP%]{width:50vw}.main--products__item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.main--total[_ngcontent-%COMP%]{height:calc(100vh - 215px);width:40vw;max-width:418px;display:flex;align-items:center;justify-content:center;background-color:#f7b21f}.main--total__container[_ngcontent-%COMP%]{width:90%;height:90%;background-color:hsla(0,0%,100%,.7);border-radius:5px;padding:10px}"]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[a.d.forChild(x)],a.d]}),t})(),L=(()=>{class t{}return t.\u0275mod=r.Gb({type:t}),t.\u0275inj=r.Fb({factory:function(n){return new(n||t)},imports:[[i.e,o.c,T,c.a]]}),t})()}}]);