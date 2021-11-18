(window.webpackJsonp=window.webpackJsonp||[]).push([[21,8],{446:function(e,t,n){"use strict";n.r(t);n(9),n(6),n(7),n(13),n(8),n(14);var r=n(5),o=n(2),c=(n(156),n(79),n(102));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"MessageConfig",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Message",align:"start",sortable:!1,value:"message"},{text:"Offer",value:"offer.caption",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{name:null,shop:null,contact:null,location:null},defaultItem:{name:"",shop:"",contact:"",location:""}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({formTitle:function(){return-1===this.editedIndex?"New Message":"Edit Message"}},Object(c.b)({messageconfigs:"brands/messageconfigs",offers:"brands/offers"})),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.fetchMerchants()},methods:{fetchMerchants:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("brands/fetchMessageConfigs");case 2:return t.next=4,e.$store.dispatch("brands/fetchOffers");case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return data={message:e.editedItem.message,offer_id:parseInt(e.editedItem.offer_id)},t.next=3,e.$store.dispatch("brands/addMessageConfig",data);case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()}}},f=d,v=n(71),m=n(88),h=n.n(m),x=n(206),_=n(418),O=n(412),I=n(508),k=n(411),C=n(512),w=n(510),j=n(397),y=n(179),D=n(511),V=n(458),M=n(48),T=n(409),$=n(417),P=n(49),S=n(189),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",[n("v-data-table",{staticClass:"elevation-1 thin-poppins",attrs:{headers:e.headers,items:e.messageconfigs},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Message Configurations")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[n("div",{staticClass:"medium-poppins"},[e._v("\n                Add New Message\n              ")])])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"message"},model:{value:e.editedItem.message,callback:function(t){e.$set(e.editedItem,"message",t)},expression:"editedItem.message"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-select",{attrs:{items:e.offers,"item-text":"caption","item-value":"offer_id",label:"Offers"},model:{value:e.editedItem.offer_id,callback:function(t){e.$set(e.editedItem,"offer_id",t)},expression:"editedItem.offer_id"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                Cancel\n              ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                Save\n              ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var r=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"8b09ddcc",null);t.default=component.exports;h()(component,{VBtn:x.a,VCard:_.a,VCardActions:O.a,VCardText:O.b,VCardTitle:O.c,VCol:I.a,VContainer:k.a,VDataTable:C.a,VDialog:w.a,VDivider:j.a,VIcon:y.a,VRow:D.a,VSelect:V.a,VSheet:M.a,VSpacer:T.a,VTextField:$.a,VToolbar:P.a,VToolbarTitle:S.a})},520:function(e,t,n){"use strict";n.r(t);var r={name:"message_config",components:{MessageConfig:n(446).default}},o=n(71),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("MessageConfig")}),[],!1,null,"93db5462",null);t.default=component.exports;installComponents(component,{MessageConfig:n(446).default})}}]);