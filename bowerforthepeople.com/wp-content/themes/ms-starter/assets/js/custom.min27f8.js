"use strict";function _defineProperty(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}jQuery(document).ready(function(i){i("[title]").each(function(){i(this).data("original-title",i(this).attr("title"))}).hover(function(){i(this).attr("title","")},function(){i(this).attr("title",i(this).data("original-title"))}),AOS.init({useClassNames:!1});var e=_defineProperty({offset:20,tolerance:0},"tolerance",{up:50,down:50}),t=document.querySelector(".cta");new Headroom(t,e).init();new SmoothScroll('a[href*="#"]',{offset:0}),new FloatLabels("form",{style:2});function n(){i(".mainhed").removeClass("mainhed--active").addClass("mainhed--inactive"),i("body").removeClass("noscroll")}i(".mainhed__toggle").on("click",function(){i(".mainhed").is(".mainhed--active")?n():(i(".mainhed").removeClass("mainhed--inactive").addClass("mainhed--active"),i("body").addClass("noscroll"))}),i(".mainhed a").on("click",function(){n()}),window.onresize=function(e){n(),i(".mainhed--inactive").removeClass("mainhed--inactive")}});