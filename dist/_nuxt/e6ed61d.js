(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11],{464:function(e,t,n){"use strict";n.r(t);n(9),n(6),n(7),n(13),n(8),n(14);var o=n(5),r=n(2),l=(n(156),n(79),n(102));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={name:"User",data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"User Name",align:"start",sortable:!1,value:"username"},{text:"email",value:"email",sortable:!1},{text:"phone",value:"phone_number",sortable:!1},{text:"date joined",value:"date_joined",sortable:!1},{text:"is admin",value:"admin"},{text:"active",value:"is_active"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{name:null,shop:null,contact:null,location:null},defaultItem:{name:"",shop:"",contact:"",location:""}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({formTitle:function(){return-1===this.editedIndex?"New Merchant":"Edit Merchant"}},Object(l.b)({users:"brands/users"})),watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.fetchMerchants(),console.log("fetching merchants"),console.log(this.merchants)},methods:{fetchMerchants:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("brands/fetchUsers");case 2:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))}}},v=d,m=n(71),f=n(88),h=n.n(f),x=n(207),_=n(421),I=n(415),O=n(511),k=n(414),j=n(515),w=n(513),y=n(400),C=n(179),D=n(514),V=n(48),T=n(412),$=n(420),P=n(49),S=n(190),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-sheet",[n("v-data-table",{staticClass:"elevation-1 thin-poppins",attrs:{headers:e.headers,items:e.users},scopedSlots:e._u([{key:"item.date_joined",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(e.$moment(n.date_joined).calendar())+"\n    ")]}},{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Users")]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),o),[n("div",{staticClass:"medium-poppins"},[e._v("\n                Add Admin User\n              ")])])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Merchant Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Shop"},model:{value:e.editedItem.shop,callback:function(t){e.$set(e.editedItem,"shop",t)},expression:"editedItem.shop"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Location"},model:{value:e.editedItem.location,callback:function(t){e.$set(e.editedItem,"location",t)},expression:"editedItem.location"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Contact"},model:{value:e.editedItem.contact,callback:function(t){e.$set(e.editedItem,"contact",t)},expression:"editedItem.contact"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                Cancel\n              ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                Save\n              ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"798d4808",null);t.default=component.exports;h()(component,{VBtn:x.a,VCard:_.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VCol:O.a,VContainer:k.a,VDataTable:j.a,VDialog:w.a,VDivider:y.a,VIcon:C.a,VRow:D.a,VSheet:V.a,VSpacer:T.a,VTextField:$.a,VToolbar:P.a,VToolbarTitle:S.a})},525:function(e,t,n){"use strict";n.r(t);var o={name:"users"},r=n(71),component=Object(r.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("User")}),[],!1,null,"164bd4a0",null);t.default=component.exports;installComponents(component,{User:n(464).default})}}]);