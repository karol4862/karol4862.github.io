(window.webpackJsonp=window.webpackJsonp||[]).push([["managePointsOfSale"],{"0016":function(t,e,a){"use strict";a.r(e);var o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),n=(a("7f7f"),a("96cf"),a("3b8d")),i=a("d30a"),r=a("6191"),s=a.n(r),l=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}var u={data:function(){return{isLoad:!1,editButtons:[{hint:this.L("Edytuj"),icon:"edit",onClick:this.editClick},{hint:"Usuń",icon:"trash",onClick:this.deleteClick}],deleteObject:{}}},methods:{createClick:function(t){this.$router.push({path:"punkty_sprzedazy/dodaj"})},editClick:function(t){this.$router.push({path:"punkty_sprzedazy/edytuj/".concat(t.row.data.id)})},deleteClick:function(t){this.deleteObject=t.row.data,this.$refs.modalDelete.show()},confirmDelete:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoad=!0,e=this,a={id:this.deleteObject.id},t.next=5,this.$store.dispatch("pointsOfSale/delete",a);case 5:return e.$notify("success filled","Usunięcie punktu sprzedaży","Punkt sprzedaży ".concat(this.deleteObject.name," został usunięty"),{duration:3e3,permanent:!1}),e.$refs.modalDelete.hide(),t.next=9,this.getAllPointsOfSale();case 9:e.isLoad=!1;case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),onToolbarPreparing:function(t){t.toolbarOptions.items.unshift({location:"after",widget:"dxButton",options:{icon:"add",onClick:this.createClick}})},getAllPointsOfSale:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoad=!0,e=this,t.next=4,this.$store.dispatch("pointsOfSale/getAllPointsOfSale").then((function(t){e.isLoad=!1})).catch((function(t){e.isLoad=!1}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){Object(o.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(l.b)({products:"pointsOfSale/getAllPointsOfSale",totalCount:"pointsOfSale/getTotalCount",pageSize:"pointsOfSale/getPageSize",pageSizes:"pointsOfSale/getPageSizes"})),created:function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getAllPointsOfSale();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),watch:{products:function(t){this.isLoad=!1}},components:{DxDataGrid:i.DxDataGrid,DxColumn:i.DxColumn,DxEditing:i.DxEditing,DxButton:s.a,DxPager:i.DxPager,DxPaging:i.DxPaging,DxSearchPanel:i.DxSearchPanel,DxSummary:i.DxSummary,DxTotalItem:i.DxTotalItem,DxLoadPanel:i.DxLoadPanel}},p=a("2877"),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoad?a("div",{staticClass:"loading"}):t._e(),t._v(" "),a("b-container",[a("b-row",[a("b-colxx",{attrs:{xxs:"12"}},[a("piaf-breadcrumb",{attrs:{heading:t._f("l")("Punkty sprzedaży")}})],1)],1)],1),t._v(" "),a("b-container",[a("b-row",[a("b-colxx",{attrs:{xxs:"12"}},[a("dx-data-grid",{attrs:{"data-source":t.products,"show-row-lines":!0,"row-alternation-enabled":!0,noDataText:t._f("l")("Brak danych...")},on:{"toolbar-preparing":function(e){return t.onToolbarPreparing(e)}}},[a("dx-search-panel",{attrs:{visible:!0,width:250,placeholder:t._f("l")("Szukaj...")}}),t._v(" "),a("dx-paging",{attrs:{"page-size":t.pageSize}}),t._v(" "),a("dx-pager",{attrs:{"show-page-size-selector":!0,"allowed-page-sizes":t.pageSizes,"show-info":!0,infoText:t._f("l")("Strona {0} z {1} dostępnych ({2} pozycji)")}}),t._v(" "),a("dx-column",{attrs:{buttons:t.editButtons,type:"buttons"}}),t._v(" "),a("dx-column",{attrs:{caption:t._f("l")("Kod"),"allow-editing":!1,"data-field":"code"}}),t._v(" "),a("dx-column",{attrs:{caption:t._f("l")("Nazwa"),"allow-editing":!1,"data-field":"name"}}),t._v(" "),a("dx-column",{attrs:{caption:t._f("l")("Miasto"),"allow-editing":!1,"data-field":"city"}}),t._v(" "),a("dx-column",{attrs:{caption:t._f("l")("Ulica"),"allow-editing":!1,"data-field":"street"}}),t._v(" "),a("dx-summary",[a("dx-total-item",{attrs:{column:"code","summary-type":"count",displayFormat:t._f("l")("Ilość: {0}")}})],1)],1)],1)],1)],1),t._v(" "),a("b-modal",{ref:"modalDelete",attrs:{id:"modalDelete",size:"lg",title:t._f("l")("Zarządzaj punktem sprzedaży"),centered:"","no-close-on-esc":"","no-close-on-backdrop":"","hide-header-close":""}},[a("b-form",{ref:"formDelete",attrs:{id:"formDelete"},on:{submit:function(e){return e.preventDefault(),t.confirmDelete(e)}}},[a("b-row",[a("b-colxx",{attrs:{xs:"12"}},[a("h6",[t._v(t._s(t._f("l")("Czy chcesz usunąć punkt sprzedaży?")))])])],1)],1),t._v(" "),a("template",{slot:"modal-footer"},[a("b-button",{attrs:{type:"button",variant:"outline-primary"},on:{click:function(e){return t.$refs.modalDelete.hide()}}},[t._v(t._s(t._f("l")("Nie")))]),t._v(" "),a("b-button",{attrs:{type:"submit",variant:"primary",form:"formDelete"}},[t._v(t._s(t._f("l")("Tak")))])],1)],2)],1)}),[],!1,null,null,null);e.default=d.exports},1798:function(t,e,a){"use strict";var o=a("5d61");a.n(o).a},"5c47":function(t,e,a){"use strict";var o=a("bd86"),n={name:"switches",props:{typeBold:{default:!1},value:{default:!1},disabled:{default:!1},label:{default:""},textEnabled:{default:""},textDisabled:{default:""},color:{default:"default"},theme:{default:"default"},emitOnMount:{default:!0}},mounted:function(){this.emitOnMount&&this.$emit("input",this.value)},methods:{trigger:function(t){this.$emit("input",t.target.checked)}},computed:{classObject:function(){var t,e=this.color,a=this.value,n=this.theme,i=this.typeBold,r=this.disabled;return t={"vue-switcher":!0},Object(o.a)(t,"vue-switcher--unchecked",!a),Object(o.a)(t,"vue-switcher--disabled",r),Object(o.a)(t,"vue-switcher--bold",i),Object(o.a)(t,"vue-switcher--bold--unchecked",i&&!a),Object(o.a)(t,"vue-switcher-theme--".concat(n),e),Object(o.a)(t,"vue-switcher-color--".concat(e),e),t},shouldShowLabel:function(){return""!==this.label||""!==this.textEnabled||""!==this.textDisabled}}},i=(a("1798"),a("2877")),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{class:t.classObject},[t.shouldShowLabel?a("span",{staticClass:"vue-switcher__label"},[t.label?a("span",{domProps:{textContent:t._s(t.label)}}):t._e(),t._v(" "),!t.label&&t.value?a("span",{domProps:{textContent:t._s(t.textEnabled)}}):t._e(),t._v(" "),t.label||t.value?t._e():a("span",{domProps:{textContent:t._s(t.textDisabled)}})]):t._e(),t._v(" "),a("input",{attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:t.value},on:{change:t.trigger}}),t._v(" "),a("div")])}),[],!1,null,null,null);e.a=r.exports},"5d61":function(t,e,a){},6191:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("2b0e"),n=o.default||o,i=a("5cf5"),r=a("d710"),s=n.extend({extends:r.DxComponent,props:{accessKey:String,activeStateEnabled:Boolean,disabled:Boolean,elementAttr:Object,focusStateEnabled:Boolean,height:[Function,Number,String],hint:String,hoverStateEnabled:Boolean,icon:String,onClick:Function,onContentReady:Function,onDisposing:Function,onInitialized:Function,onOptionChanged:Function,rtlEnabled:Boolean,stylingMode:String,tabIndex:Number,template:{},text:String,type:String,useSubmitBehavior:Boolean,validationGroup:String,visible:Boolean,width:[Function,Number,String]},computed:{instance:function(){return this.$_instance}},beforeCreate:function(){this.$_WidgetClass=i.default}});e.DxButton=s,e.default=s},f15f:function(t,e,a){"use strict";a.r(e);var o=(a("96cf"),a("3b8d")),n=(a("7f7f"),a("a481"),a("5c47")),i={data:function(){return{isLoad:!1,typeNav:"",pointOfSale:{}}},methods:{cancelPointOfSale:function(){this.$router.replace({name:"punkty_sprzedazy"})},getPointOfSale:function(t){this.isLoad=!0;var e={id:t},a=this;this.$store.dispatch("pointsOfSale/getPointOfSale",e).then((function(t){a.pointOfSale=Object.assign({},t),a.isLoad=!1})).catch((function(t){a.isLoad=!1}))},savePointOfSale:function(){this.isLoad=!0;var t={id:this.pointOfSale.id,active:this.pointOfSale.active,code:this.pointOfSale.code,name:this.pointOfSale.name,city:this.pointOfSale.city,street:this.pointOfSale.street,houseNumber:this.pointOfSale.houseNumber,apartmentNumber:this.pointOfSale.apartmentNumber,postOffice:this.pointOfSale.postOffice,postalCode:this.pointOfSale.postalCode,nip:this.pointOfSale.nip,email:this.pointOfSale.email,phone:this.pointOfSale.phone,openingHours1:this.pointOfSale.openingHours1,openingHours2:this.pointOfSale.openingHours2,openingHours3:this.pointOfSale.openingHours3,ns:this.pointOfSale.ns,ew:this.pointOfSale.ew},e=this;void 0===this.pointOfSale.id?this.$store.dispatch("pointsOfSale/create",t).then((function(t){e.$notify("success filled","Zapis punktu sprzedaży","Punkt sprzedaży ".concat(e.pointOfSale.name," został zapisany prawidłowo"),{duration:2e3,permanent:!1}),e.isLoad=!1,e.$router.replace({name:"punkty_sprzedazy"})})).catch((function(t){e.isLoad=!1})):this.$store.dispatch("pointsOfSale/update",t).then((function(t){e.$notify("success filled","Zapis punktu sprzedaży","Punkt sprzedaży ".concat(e.pointOfSale.name," został zapisany prawidłowo"),{duration:2e3,permanent:!1}),e.isLoad=!1,e.$router.replace({name:"punkty_sprzedazy"})})).catch((function(t){e.isLoad=!1}))}},created:function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"punkty_sprzedazy_dodaj"==this.$route.name?this.typeNav="dodaj":"punkty_sprzedazy_edytuj"==this.$route.name&&(this.typeNav="edytuj",this.getPointOfSale(this.$route.params.pointOfSaleId));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),components:{Switches:n.a}},r=a("2877"),s=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isLoad?a("div",{staticClass:"loading"}):t._e(),t._v(" "),a("b-row",[a("b-colxx",{attrs:{xxs:"12"}},[a("piaf-breadcrumb")],1)],1),t._v(" "),a("b-form",{ref:"formPointsOfSale",attrs:{id:"formPointsOfSale"},on:{submit:function(e){return e.preventDefault(),t.savePointOfSale(e)}}},[a("b-row",[a("b-colxx",{attrs:{xs:"12"}},[a("b-form-group",{attrs:{label:"Status"}},[a("div",{staticClass:"d-flex align-items-center"},[a("switches",{staticClass:"mb-0",attrs:{theme:"custom",color:"primary-inverse"},model:{value:t.pointOfSale.active,callback:function(e){t.$set(t.pointOfSale,"active",e)},expression:"pointOfSale.active"}}),t._v(" "),a("p",{staticClass:"mb-0 pl-2",staticStyle:{cursor:"pointer"}},[t.pointOfSale.active?a("span",[t._v(t._s(t._f("l")("aktywny")))]):a("span",[t._v(t._s(t._f("l")("nieaktywny")))])])],1)])],1),t._v(" "),a("b-colxx",{staticClass:"py-2",attrs:{xxs:"12"}},[a("div",{staticClass:"d-flex border-bottom border-dark"},[a("div",{staticClass:"align-self-center"},[a("h6",{staticClass:"mb-0"},[t._v(t._s(t._f("l")("Podstawowe informacje")))])])])]),t._v(" "),a("b-colxx",{attrs:{xxs:"12"}},[a("b-form-group",{attrs:{label:t._f("l")("Kod punktu sprzedaży")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Kod"),type:"text",disabled:"edytuj"===t.typeNav},model:{value:t.pointOfSale.code,callback:function(e){t.$set(t.pointOfSale,"code",e)},expression:"pointOfSale.code"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12"}},[a("b-form-group",{attrs:{label:t._f("l")("Nazwa punktu sprzedaży")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Nazwa"),type:"text"},model:{value:t.pointOfSale.name,callback:function(e){t.$set(t.pointOfSale,"name",e)},expression:"pointOfSale.name"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12",md:"6"}},[a("b-form-group",{attrs:{label:t._f("l")("Adres e-mail")}},[a("b-form-input",{attrs:{placeholder:t._f("l")("Adres e-mail"),type:"email"},model:{value:t.pointOfSale.email,callback:function(e){t.$set(t.pointOfSale,"email",e)},expression:"pointOfSale.email"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12",md:"6"}},[a("b-form-group",{attrs:{label:t._f("l")("Numer telefonu")}},[a("b-form-input",{attrs:{placeholder:t._f("l")("Numer telefonu"),type:"text"},model:{value:t.pointOfSale.phone,callback:function(e){t.$set(t.pointOfSale,"phone",e)},expression:"pointOfSale.phone"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12"}},[a("b-form-group",{attrs:{label:t._f("l")("Miasto")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Miasto"),type:"text"},model:{value:t.pointOfSale.city,callback:function(e){t.$set(t.pointOfSale,"city",e)},expression:"pointOfSale.city"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12",md:"6"}},[a("b-form-group",{attrs:{label:t._f("l")("Ulica")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Ulica"),type:"text"},model:{value:t.pointOfSale.street,callback:function(e){t.$set(t.pointOfSale,"street",e)},expression:"pointOfSale.street"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"6",md:"3"}},[a("b-form-group",{attrs:{label:t._f("l")("Numer domu")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Numer domu"),type:"text"},model:{value:t.pointOfSale.houseNumber,callback:function(e){t.$set(t.pointOfSale,"houseNumber",e)},expression:"pointOfSale.houseNumber"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"6",md:"3"}},[a("b-form-group",{attrs:{label:t._f("l")("Numer mieszkania")}},[a("b-form-input",{attrs:{placeholder:t._f("l")("Numer mieszkania"),type:"text"},model:{value:t.pointOfSale.apartmentNumber,callback:function(e){t.$set(t.pointOfSale,"apartmentNumber",e)},expression:"pointOfSale.apartmentNumber"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12",md:"6"}},[a("b-form-group",{attrs:{label:t._f("l")("Kod pocztowy")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Kod pocztowy"),type:"text"},model:{value:t.pointOfSale.postalCode,callback:function(e){t.$set(t.pointOfSale,"postalCode",e)},expression:"pointOfSale.postalCode"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"12",md:"6"}},[a("b-form-group",{attrs:{label:t._f("l")("Poczta")}},[a("b-form-input",{attrs:{required:"",placeholder:t._f("l")("Poczta"),type:"text"},model:{value:t.pointOfSale.postOffice,callback:function(e){t.$set(t.pointOfSale,"postOffice",e)},expression:"pointOfSale.postOffice"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"6",md:"3"}},[a("b-form-group",{attrs:{label:t._f("l")("Współrzędne NS")}},[a("b-form-input",{attrs:{required:"",placeholder:"NS",type:"text"},model:{value:t.pointOfSale.ns,callback:function(e){t.$set(t.pointOfSale,"ns",e)},expression:"pointOfSale.ns"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"6",md:"3"}},[a("b-form-group",{attrs:{label:t._f("l")("Współrzędne EW")}},[a("b-form-input",{attrs:{required:"",placeholder:"EW",type:"text"},model:{value:t.pointOfSale.ew,callback:function(e){t.$set(t.pointOfSale,"ew",e)},expression:"pointOfSale.ew"}})],1)],1)],1),t._v(" "),a("b-row",[a("b-colxx",{staticClass:"py-2",attrs:{xss:"12",md:"6"}},[a("div",{staticClass:"d-flex border-bottom border-dark"},[a("div",{staticClass:"align-self-center"},[a("h6",{staticClass:"mb-0"},[t._v(t._s(t._f("l")("Godziny otwarcia")))])])]),t._v(" "),a("b-row",{staticClass:"pt-1"},[a("b-colxx",{attrs:{xxs:"4"}},[a("b-form-group",{attrs:{label:t._f("l")("Poniedziałek - piątek")}},[a("b-form-input",{attrs:{placeholder:"08:00 - 16:00",type:"text"},model:{value:t.pointOfSale.openingHours1,callback:function(e){t.$set(t.pointOfSale,"openingHours1",e)},expression:"pointOfSale.openingHours1"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"4"}},[a("b-form-group",{attrs:{label:t._f("l")("Sobota")}},[a("b-form-input",{attrs:{placeholder:"08:00 - 16:00",type:"text"},model:{value:t.pointOfSale.openingHours2,callback:function(e){t.$set(t.pointOfSale,"openingHours2",e)},expression:"pointOfSale.openingHours2"}})],1)],1),t._v(" "),a("b-colxx",{attrs:{xxs:"4"}},[a("b-form-group",{attrs:{label:t._f("l")("Niedziela")}},[a("b-form-input",{attrs:{placeholder:"08:00 - 16:00",type:"text"},model:{value:t.pointOfSale.openingHours3,callback:function(e){t.$set(t.pointOfSale,"openingHours3",e)},expression:"pointOfSale.openingHours3"}})],1)],1)],1)],1)],1)],1),t._v(" "),a("b-row",[a("b-colxx",{staticClass:"border-top border-dark py-2 text-right",attrs:{xxs:"12"}},[a("b-button",{staticClass:"squared",attrs:{type:"button",variant:"outline-primary"},on:{click:function(e){return e.preventDefault(),t.cancelPointOfSale()}}},[t._v(t._s(t._f("l")("Anuluj")))]),t._v(" "),a("b-button",{staticClass:"squared",attrs:{type:"submit",variant:"primary",form:"formPointsOfSale"}},[t._v(t._s(t._f("l")("Zapisz")))])],1)],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);