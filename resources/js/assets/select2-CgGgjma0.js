(function(){$(".js-example-basic-single").select2(),$(".js-example-basic-multiple").select2(),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"ltr"}),$(".js-example-placeholder-multiple").select2({placeholder:"Select a state"});function i(l){if(!l.id)return l.text;var t="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2",e=$('<span><img src="'+t+"/"+l.element.value.toLowerCase()+'.jpg" class="img-flag" /> '+l.text+"</span>");return e}$(".js-example-templating").select2({templateResult:i,placeholder:"Choose Customer"});function r(l){if(!l.id)return l.text;var t=$('<span><img src="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2/'+l.element.value.toLowerCase()+'.jpg" /> '+l.text+"</span>");return t}$(".select2-client-search").select2({templateResult:r,templateSelection:r,placeholder:"Choose Client",escapeMarkup:function(l){return l}}),$(".js-example-basic-multiple-limit-max").select2({maximumSelectionLength:3,placeholder:"Choose Person"}),$(".js-example-disabled").select2(),$(".js-example-disabled-multi").select2(),$(".js-programmatic-enable").on("click",function(){$(".js-example-disabled").prop("disabled",!1),$(".js-example-disabled-multi").prop("disabled",!1)}),$(".js-programmatic-disable").on("click",function(){$(".js-example-disabled").prop("disabled",!0),$(".js-example-disabled-multi").prop("disabled",!0)}),document.querySelector("#switcher-rtl").addEventListener("click",()=>{$(".js-example-basic-single").select2(),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"rtl"}),$(".js-example-basic-single").select2({dir:"rtl"}),$(".js-example-basic-multiple").select2({dir:"rtl"}),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"rtl"}),$(".js-example-placeholder-multiple").select2({placeholder:"Select a state",dir:"rtl"});function l(e){if(!e.id)return e.text;var a="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2",s=$('<span><img src="'+a+"/"+e.element.value.toLowerCase()+'.jpg" class="img-flag" /> '+e.text+"</span>");return s}$(".js-example-templating").select2({templateResult:l,placeholder:"Choose Customer",dir:"rtl"});function t(e){if(!e.id)return e.text;var a=$('<span><img src="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2/'+e.element.value.toLowerCase()+'.jpg" /> '+e.text+"</span>");return a}$(".select2-client-search").select2({templateResult:t,templateSelection:t,placeholder:"Choose Client",dir:"rtl",escapeMarkup:function(e){return e}}),$(".js-example-basic-multiple-limit-max").select2({maximumSelectionLength:3,placeholder:"Choose Person",dir:"rtl"}),$(".js-example-disabled").select2({dir:"rtl"}),$(".js-example-disabled-multi").select2({dir:"rtl"}),$(".js-programmatic-enable").on("click",function(){$(".js-example-disabled").prop("disabled",!1),$(".js-example-disabled-multi").prop("disabled",!1)}),$(".js-programmatic-disable").on("click",function(){$(".js-example-disabled").prop("disabled",!0),$(".js-example-disabled-multi").prop("disabled",!0)})}),document.querySelector("#switcher-ltr").addEventListener("click",()=>{$(".js-example-basic-single").select2(),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"ltr"}),$(".js-example-basic-single").select2({dir:"ltr"}),$(".js-example-basic-multiple").select2({dir:"ltr"}),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"ltr"}),$(".js-example-placeholder-multiple").select2({placeholder:"Select a state",dir:"ltr"});function l(e){if(!e.id)return e.text;var a="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2",s=$('<span><img src="'+a+"/"+e.element.value.toLowerCase()+'.jpg" class="img-flag" /> '+e.text+"</span>");return s}$(".js-example-templating").select2({templateResult:l,placeholder:"Choose Customer",dir:"ltr"});function t(e){if(!e.id)return e.text;var a=$('<span><img src="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2/'+e.element.value.toLowerCase()+'.jpg" /> '+e.text+"</span>");return a}$(".select2-client-search").select2({templateResult:t,templateSelection:t,placeholder:"Choose Client",dir:"ltr",escapeMarkup:function(e){return e}}),$(".js-example-basic-multiple-limit-max").select2({maximumSelectionLength:3,placeholder:"Choose Person",dir:"ltr"}),$(".js-example-disabled").select2({dir:"ltr"}),$(".js-example-disabled-multi").select2({dir:"ltr"}),$(".js-programmatic-enable").on("click",function(){$(".js-example-disabled").prop("disabled",!1),$(".js-example-disabled-multi").prop("disabled",!1)}),$(".js-programmatic-disable").on("click",function(){$(".js-example-disabled").prop("disabled",!0),$(".js-example-disabled-multi").prop("disabled",!0)})}),document.querySelector("#reset-all").addEventListener("click",()=>{$(".js-example-basic-single").select2(),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"ltr"}),$(".js-example-basic-single").select2({dir:"ltr"}),$(".js-example-basic-multiple").select2({dir:"ltr"}),$(".js-example-placeholder-single").select2({placeholder:"Select a state",allowClear:!0,dir:"ltr"}),$(".js-example-placeholder-multiple").select2({placeholder:"Select a state",dir:"ltr"});function l(e){if(!e.id)return e.text;var a="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2",s=$('<span><img src="'+a+"/"+e.element.value.toLowerCase()+'.jpg" class="img-flag" /> '+e.text+"</span>");return s}$(".js-example-templating").select2({templateResult:l,placeholder:"Choose Customer",dir:"ltr"});function t(e){if(!e.id)return e.text;var a=$('<span><img src="https://laravelui.spruko.com/tailwind/valex/build/assets/images/faces/select2/'+e.element.value.toLowerCase()+'.jpg" /> '+e.text+"</span>");return a}$(".select2-client-search").select2({templateResult:t,templateSelection:t,placeholder:"Choose Client",dir:"ltr",escapeMarkup:function(e){return e}}),$(".js-example-basic-multiple-limit-max").select2({maximumSelectionLength:3,placeholder:"Choose Person",dir:"ltr"}),$(".js-example-disabled").select2({dir:"ltr"}),$(".js-example-disabled-multi").select2({dir:"ltr"}),$(".js-programmatic-enable").on("click",function(){$(".js-example-disabled").prop("disabled",!1),$(".js-example-disabled-multi").prop("disabled",!1)}),$(".js-programmatic-disable").on("click",function(){$(".js-example-disabled").prop("disabled",!0),$(".js-example-disabled-multi").prop("disabled",!0)})})})();
