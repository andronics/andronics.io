import{s as c}from"./service.541fc1e6.js";import{_ as h,G as l,r as f,o as r,c as d,w as p,a as _,b as i,t as o,e as s}from"./index.c6e72b79.js";const m="/api/v3",y="/api",v={name:"Radarr",mixins:[c],props:{item:Object},components:{Generic:l},data:()=>({activity:null,warnings:null,errors:null,serverError:!1}),created:function(){this.fetchConfig()},computed:{apiPath(){return this.item.legacyApi?y:m}},methods:{fetchConfig:function(){this.fetch(`${this.apiPath}/health?apikey=${this.item.apikey}`).then(t=>{this.warnings=0,this.errors=0;for(var e=0;e<t.length;e++)t[e].type=="warning"?this.warnings++:t[e].type=="error"&&this.errors++}).catch(t=>{console.error(t),this.serverError=!0}),this.fetch(`${this.apiPath}/queue?apikey=${this.item.apikey}`).then(t=>{if(this.activity=0,this.item.legacyApi)for(var e=0;e<t.length;e++)t[e].movie&&this.activity++;else this.activity=t.totalRecords}).catch(t=>{console.error(t),this.serverError=!0})}}},g={class:"notifs"},u={key:0,class:"notif activity",title:"Activity"},k={key:1,class:"notif warnings",title:"Warning"},w={key:2,class:"notif errors",title:"Error"},A={key:3,class:"notif errors",title:"Connection error to Radarr API, check url and apikey in config.yml"};function C(t,e,n,E,$,P){const a=f("Generic");return r(),d(a,{item:n.item},{indicator:p(()=>[_("div",g,[t.activity>0?(r(),i("strong",u,o(t.activity),1)):s("",!0),t.warnings>0?(r(),i("strong",k,o(t.warnings),1)):s("",!0),t.errors>0?(r(),i("strong",w,o(t.errors),1)):s("",!0),t.serverError?(r(),i("strong",A,"?")):s("",!0)])]),_:1},8,["item"])}const B=h(v,[["render",C],["__scopeId","data-v-f98dd4f0"]]);export{B as default};
