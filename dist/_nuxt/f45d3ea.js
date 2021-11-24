(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10],{463:function(e,t,r){"use strict";r.r(t);r(9),r(6),r(7),r(13),r(8),r(14);var n=r(5),l=r(2),o=(r(156),r(79),r(102));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={name:"Referrals",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Referrer",align:"start",sortable:!1,value:"user.username"},{text:"Referred Contact",value:"referred_phone_no",sortable:!1},{text:"Coupon",value:"coupon_code",sortable:!1},{text:"Referred",value:"referred_name",sortable:!1},{text:"Confirmed",value:"is_used",sortable:!1},{text:"Date Referred",value:"date_sent",sortable:!0},{text:"Offer",value:"offer.caption"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{name:"",calories:0,fat:0,carbs:0,protein:0},defaultItem:{name:"",calories:0,fat:0,carbs:0,protein:0}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},Object(o.b)({referrals:"brands/referrals"})),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.fetchReferrals()},methods:{fetchReferrals:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("brands/fetchReferals");case 2:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?Object.assign(this.desserts[this.editedIndex],this.editedItem):this.desserts.push(this.editedItem),this.close()}}},v=d,f=r(71),m=r(88),h=r.n(m),x=r(207),I=r(421),_=r(415),O=r(511),k=r(414),j=r(515),w=r(513),C=r(400),D=r(179),V=r(514),y=r(48),R=r(412),T=r(420),$=r(49),P=r(190),component=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",[r("v-data-table",{staticClass:"elevation-1 thin-poppins",attrs:{headers:e.headers,items:e.referrals},scopedSlots:e._u([{key:"item.date_sent",fn:function(t){var r=t.item;return[e._v("\n      "+e._s(e.$moment(r.date_sent).calendar())+"\n    ")]}},{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Referrals")]),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Dessert name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Calories"},model:{value:e.editedItem.calories,callback:function(t){e.$set(e.editedItem,"calories",t)},expression:"editedItem.calories"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Fat (g)"},model:{value:e.editedItem.fat,callback:function(t){e.$set(e.editedItem,"fat",t)},expression:"editedItem.fat"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Carbs (g)"},model:{value:e.editedItem.carbs,callback:function(t){e.$set(e.editedItem,"carbs",t)},expression:"editedItem.carbs"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Protein (g)"},model:{value:e.editedItem.protein,callback:function(t){e.$set(e.editedItem,"protein",t)},expression:"editedItem.protein"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                Cancel\n              ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                Save\n              ")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),r("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"07737996",null);t.default=component.exports;h()(component,{VBtn:x.a,VCard:I.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:O.a,VContainer:k.a,VDataTable:j.a,VDialog:w.a,VDivider:C.a,VIcon:D.a,VRow:V.a,VSheet:y.a,VSpacer:R.a,VTextField:T.a,VToolbar:$.a,VToolbarTitle:P.a})},524:function(e,t,r){"use strict";r.r(t);var n={name:"referrals"},l=r(71),o=r(88),c=r.n(o),d=r(48),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-sheet",[t("Referrals")],1)}),[],!1,null,"3d0e57fc",null);t.default=component.exports;c()(component,{Referrals:r(463).default}),c()(component,{VSheet:d.a})}}]);