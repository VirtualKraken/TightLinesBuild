(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9FTp":function(o,n,t){"use strict";t.d(n,"a",function(){return i});class i{constructor(){this.url="http://localhost:53746/api",this.AssetUrl="http://localhost:53746"}}},HMhz:function(o,n,t){"use strict";t.r(n),t.d(n,"ViewOtherUserPageModule",function(){return O});var i=t("ofXK"),e=t("3Pt+"),s=t("TEn/"),r=t("tyNb"),l=t("mrSG"),c=t("9FTp"),a=t("AwAX"),b=t("2jHR"),u=t("ZfzJ"),d=t("fXoL"),h=t("awxR"),p=t("PBJf");function f(o,n){1&o&&d.Nb(0,"ion-spinner",17)}function g(o,n){if(1&o){const o=d.Sb();d.Rb(0,"ion-button",15),d.Zb("click",function(){return d.lc(o),d.bc().Follow()}),d.Rb(1,"ion-text",8),d.qc(2,"Follow "),d.Qb(),d.pc(3,f,1,0,"ion-spinner",16),d.Qb()}if(2&o){const o=d.bc();d.Cb(3),d.gc("ngIf",o.followspinner)}}function w(o,n){1&o&&d.Nb(0,"ion-spinner",17)}function m(o,n){if(1&o){const o=d.Sb();d.Rb(0,"ion-button",15),d.Zb("click",function(){return d.lc(o),d.bc().Unfollow()}),d.Rb(1,"ion-text",8),d.qc(2,"Unfollow "),d.Qb(),d.pc(3,w,1,0,"ion-spinner",16),d.Qb()}if(2&o){const o=d.bc();d.Cb(3),d.gc("ngIf",o.followspinner)}}function C(o,n){1&o&&d.Nb(0,"ion-spinner",18)}function x(o,n){if(1&o&&(d.Rb(0,"ion-col",22),d.Nb(1,"img",23),d.Qb()),2&o){const o=n.$implicit,t=d.bc(2);d.Cb(1),d.gc("src",t.appconfig.AssetUrl+"/assets/Images/Posts/"+o.Id+"1.jpg",d.mc)}}function P(o,n){if(1&o&&(d.Rb(0,"ion-grid",19),d.Rb(1,"ion-row",20),d.pc(2,x,2,1,"ion-col",21),d.Qb(),d.Qb()),2&o){const o=d.bc();d.Cb(2),d.gc("ngForOf",o.otherusersposts)}}const I=[{path:"",component:(()=>{class o{constructor(o,n,t,i,e){this.modalController=o,this.postsservice=n,this.activatedRoute=t,this.router=i,this.followservice=e,this.appconfig=new c.a,this.showSpinner=!1,this.followspinner=!1,this.user=new b.b,this.followobj=new a.a,this.unfoll=new a.b,this.otherusersposts=[],this.followdetails=[],this.activatedRoute.queryParams.subscribe(o=>{this.router.getCurrentNavigation().extras.state&&this.router.getCurrentNavigation().extras.state.Item&&(this.user.Id=this.router.getCurrentNavigation().extras.state.Item,this.user.Id>0?console.log(this.user.Id):this.router.navigate(["tabs/tab2"]))})}ngOnInit(){null==this.user.Id?(console.log(this.user.Id),this.router.navigate(["tabs/tab2"])):(this.GetPosts(),this.CheckFollowing(),console.log("oninitfn"))}openmenuhalfmoal(){return Object(l.a)(this,void 0,void 0,function*(){const o=yield this.modalController.create({component:u.a,cssClass:"half-modal"});return yield o.present()})}dismiss(){this.modalController.dismiss({dismissed:!0})}GetPosts(){this.showSpinner=!0,this.otheruserId=this.user.Id,this.postsservice.Getposts(this.otheruserId).subscribe(o=>{this.showSpinner=!1,this.otherusersposts=o})}CheckFollowing(){this.userid=JSON.parse(localStorage.getItem("user")).Id,this.otheruserId=this.user.Id,this.followservice.Getfollowdetails(this.otheruserId,this.userid).subscribe(o=>{this.followdetails=o,this.followobj=this.followdetails[0],console.log(this.followobj),this.follow=!(this.followobj.UserFollowCheck>0)})}Follow(){this.followspinner=!0,this.unfoll.Followerid=JSON.parse(localStorage.getItem("user")).Id,this.unfoll.Userid=this.user.Id,this.followservice.followauser(this.unfoll).subscribe(o=>{this.followspinner=!1,this.followdetails=o,this.CheckFollowing()})}Unfollow(){this.followspinner=!0,this.unfoll.Userid=JSON.parse(localStorage.getItem("user")).Id,this.unfoll.Followerid=this.user.Id,this.followservice.unfollow(this.unfoll).subscribe(o=>{this.followspinner=!1,this.followdetails=o,this.CheckFollowing()})}goback(){this.router.navigate(["tabs/tab2"])}}return o.\u0275fac=function(n){return new(n||o)(d.Mb(s.P),d.Mb(h.a),d.Mb(r.a),d.Mb(r.g),d.Mb(p.a))},o.\u0275cmp=d.Gb({type:o,selectors:[["app-view-other-user"]],decls:29,vars:7,consts:[[1,"ion-no-border"],["slot","start","name","arrow-back-outline",2,"font-size","26px","margin-right","1px",3,"click"],["id","maybe",2,"margin-left","-10px"],["slot","end","name","menu-outline",1,"menuicon",3,"click"],[1,"image"],[1,"cardrow"],["size","6","offset","5"],["mode","ios","shape","round","expand","block","size","small","fill","outline","color","medium",1,"btnincard"],["color","dark"],["height","130px","width","130px","src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrS-HW-3YP23yZ_3kqPRSldl_a9gfjEJPSjA&usqp=CAU",1,"imgincard"],[2,"margin-top","-42px"],["mode","ios","shape","round","expand","block","size","small","fill","outline","color","medium",3,"click",4,"ngIf"],[2,"font-size","16px"],["class","spinnerdown",4,"ngIf"],["class","ion-no-padding",4,"ngIf"],["mode","ios","shape","round","expand","block","size","small","fill","outline","color","medium",3,"click"],["name","dots",4,"ngIf"],["name","dots"],[1,"spinnerdown"],[1,"ion-no-padding"],[1,"container-fluid"],["size","4",4,"ngFor","ngForOf"],["size","4"],[3,"src"]],template:function(o,n){1&o&&(d.Rb(0,"ion-header",0),d.Rb(1,"ion-toolbar"),d.Rb(2,"ion-icon",1),d.Zb("click",function(){return n.goback()}),d.Qb(),d.Rb(3,"ion-title",2),d.qc(4),d.Qb(),d.Rb(5,"ion-icon",3),d.Zb("click",function(){return n.openmenuhalfmoal()}),d.Qb(),d.Qb(),d.Qb(),d.Rb(6,"ion-content"),d.Rb(7,"div",4),d.Rb(8,"ion-card"),d.Rb(9,"ion-card-header"),d.Rb(10,"ion-row",5),d.Rb(11,"ion-col",6),d.Rb(12,"ion-button",7),d.Rb(13,"ion-text",8),d.qc(14),d.Nb(15,"br"),d.Nb(16,"br"),d.qc(17),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Nb(18,"img",9),d.Rb(19,"ion-row",10),d.Rb(20,"ion-col",6),d.pc(21,g,4,1,"ion-button",11),d.pc(22,m,4,1,"ion-button",11),d.Qb(),d.Qb(),d.Rb(23,"ion-card-title",12),d.qc(24,"Location"),d.Qb(),d.Qb(),d.Rb(25,"ion-card-content"),d.qc(26," Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean. "),d.Qb(),d.Qb(),d.Qb(),d.pc(27,C,1,0,"ion-spinner",13),d.pc(28,P,3,1,"ion-grid",14),d.Qb()),2&o&&(d.Cb(4),d.rc(n.user.Name),d.Cb(10),d.sc(" Followers : ",n.followobj.Followers," "),d.Cb(3),d.sc("Following : ",n.followobj.Following," "),d.Cb(4),d.gc("ngIf",n.follow),d.Cb(1),d.gc("ngIf",!n.follow),d.Cb(5),d.gc("ngIf",n.showSpinner),d.Cb(1),d.gc("ngIf",!n.showSpinner))},directives:[s.p,s.L,s.q,s.J,s.k,s.e,s.g,s.x,s.j,s.d,s.H,i.k,s.i,s.f,s.D,s.o,i.j],styles:[".photo-grid[_ngcontent-%COMP%]{margin:8px 5px 10vh;padding:0}.photo-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:2px}.photo-grid[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{background-size:cover;min-height:100px}.photo-grid[_ngcontent-%COMP%]   .image-container1[_ngcontent-%COMP%]{min-height:200px}.photo-grid[_ngcontent-%COMP%]   .ct1[_ngcontent-%COMP%]{min-height:98.5px;margin-bottom:2.5px}.photo-grid[_ngcontent-%COMP%]   .ct2[_ngcontent-%COMP%]{min-height:99px;margin-top:2.5px}.noPadding[_ngcontent-%COMP%]{padding:0}.efitbtn[_ngcontent-%COMP%]{width:100px;margin:-45px auto auto}ion-content[_ngcontent-%COMP%], ion-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}ion-title[_ngcontent-%COMP%]{font-weight:700}ion-card[_ngcontent-%COMP%]{border-radius:20px;margin-left:4px;margin-right:4px}.sam[_ngcontent-%COMP%]{color:#7fffd4}.follow[_ngcontent-%COMP%]{position:absolute;font-weight:700;border:1px solid #b3b2b2;border-radius:15px;padding:10px 40px;margin-left:-12px}.menuicon[_ngcontent-%COMP%]{font-size:30px;padding-right:5px}.cardrow[_ngcontent-%COMP%]{margin-bottom:-90px}.btnincard[_ngcontent-%COMP%]{height:70px;font-size:medium}.imgincard[_ngcontent-%COMP%]{border-radius:50%;object-fit:cover}.spinnerdown[_ngcontent-%COMP%]{animation-duration:1.4s;position:absolute;left:47%}ion-fab[_ngcontent-%COMP%]{position:absolute;bottom:60px}ion-fab-button[_ngcontent-%COMP%]{opacity:.6;border:2px solid #f0f8ff;border-radius:30px}"]}),o})()}];let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=d.Kb({type:o}),o.\u0275inj=d.Jb({imports:[[r.i.forChild(I)],r.i]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=d.Kb({type:o}),o.\u0275inj=d.Jb({imports:[[i.c,e.b,s.M,M]]}),o})()},mrSG:function(o,n,t){"use strict";function i(o,n,t,i){return new(t||(t=Promise))(function(e,s){function r(o){try{c(i.next(o))}catch(n){s(n)}}function l(o){try{c(i.throw(o))}catch(n){s(n)}}function c(o){var n;o.done?e(o.value):(n=o.value,n instanceof t?n:new t(function(o){o(n)})).then(r,l)}c((i=i.apply(o,n||[])).next())})}t.d(n,"a",function(){return i})}}]);