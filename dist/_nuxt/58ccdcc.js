(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{413:function(t,e,n){"use strict";var r=n(417);e.a=r.a},420:function(t,e,n){var content=n(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("83ff91dc",content,!0,{sourceMap:!1})},421:function(t,e,n){var r=n(15)(!1);r.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=r},444:function(t,e,n){"use strict";n.r(e);n(9),n(7),n(13),n(8),n(14);var r=n(5),l=n(2),o=(n(156),n(6),n(51),n(29),n(79),n(102));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"Brands",data:function(){return{dialog:!1,dialogDelete:!1,editing:!1,headers:[{text:"Title",align:"start",sortable:!1,value:"title"},{text:"Description",value:"description"},{text:"Logo",value:"logo"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{title:null,description:null,logo:null,category_id:null},defaultItem:{title:"",description:0,logo:0}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({formTitle:function(){return-1===this.editedIndex?"New Brand":"Edit Brand"}},Object(o.b)({brands:"brands/brands",brand_categories:"brands/brand_categories"})),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.fetchBrands()},methods:{fetchBrands:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("brands/fetchBrands");case 2:return e.next=4,t.$store.dispatch("brands/fetchCategories");case 4:case"end":return e.stop()}}),e)})))()},editItem:function(t){this.editing=!0,this.editedIndex=this.brands.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.closeDelete()},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(data=JSON.stringify({title:t.editedItem.title,description:t.editedItem.description,category_id:t.editedItem.category_id}),!t.editedItem.logo){e.next=15;break}if((n=new FormData).append("file",t.editedItem.logo,t.editedItem.logo.name),n.append("data",data),!t.editing){e.next=11;break}return e.next=8,t.$store.dispatch("brands/editBrand",{data:n,id:t.editedItem.brand_id});case 8:t.editing=!1,e.next=13;break;case 11:return e.next=13,t.$store.dispatch("brands/addBrand",n);case 13:e.next=16;break;case 15:console.log("You must upload a logo");case 16:t.close();case 17:case"end":return e.stop()}}),e)})))()},deleteBrand:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("brands/deleteBrand",t);case 2:case"end":return n.stop()}}),n)})))()}}},f=d,h=n(71),v=n(88),m=n.n(v),x=n(206),_=n(418),y=n(412),O=n(507),I=n(411),w=n(511),j=n(509),k=n(397),S=n(455),V=n(179),C=n(510),D=n(457),$=n(48),B=n(409),P=n(417),T=n(49),z=n(189),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("v-data-table",{staticClass:"elevation-1 thin-poppins",attrs:{headers:t.headers,items:t.brands},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[t._v("Brands")]),t._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),r),[n("div",{staticClass:"medium-poppins"},[t._v("\n                Add Brand\n              ")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",{staticClass:"thin-poppins"},[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v(t._s(t.formTitle))])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Brand title"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-text-field",{attrs:{label:"Description"},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-select",{attrs:{items:t.brand_categories,"item-text":"title","item-value":"id",label:"Categories"},model:{value:t.editedItem.category_id,callback:function(e){t.$set(t.editedItem,"category_id",e)},expression:"editedItem.category_id"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[n("v-file-input",{attrs:{"truncate-length":"15",label:"Upload Image"},model:{value:t.editedItem.logo,callback:function(e){t.$set(t.editedItem,"logo",e)},expression:"editedItem.logo"}})],1)],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("\n                Cancel\n              ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("\n                Save\n              ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteBrand(r.brand_id)}}},[t._v("\n        mdi-delete\n      ")])]}}])})],1)}),[],!1,null,"11ca3ca3",null);e.default=component.exports;m()(component,{VBtn:x.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCardTitle:y.c,VCol:O.a,VContainer:I.a,VDataTable:w.a,VDialog:j.a,VDivider:k.a,VFileInput:S.a,VIcon:V.a,VRow:C.a,VSelect:D.a,VSheet:$.a,VSpacer:B.a,VTextField:P.a,VToolbar:T.a,VToolbarTitle:z.a})},455:function(t,e,n){"use strict";n(9),n(6),n(7),n(13),n(14);var r=n(120),l=n(2),o=n(22),c=(n(25),n(50),n(60),n(29),n(26),n(156),n(8),n(38),n(420),n(413)),d=n(450),f=n(1),h=n(10),v=n(81);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(f.F)(t).every((function(t){return null!=t&&"object"===Object(o.a)(t)}))}}},computed:{classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(f.v)(e,1024===this.base))},internalArrayValue:function(){return Object(f.F)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,l=e.size,o=void 0===l?0:l,c=t.truncateText(r);return t.showSize?"".concat(c," (").concat(Object(f.v)(o,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(h.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(f.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(d.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(v.c)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=x(x({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(r.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},514:function(t,e,n){"use strict";n.r(e);var r={components:{Brands:n(444).default},computed:{},created:function(){},methods:{}},l=n(71),o=n(88),c=n.n(o),d=n(507),f=n(510),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("Brands")],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Brands:n(444).default}),c()(component,{VCol:d.a,VRow:f.a})}}]);