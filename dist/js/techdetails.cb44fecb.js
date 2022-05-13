"use strict";(self["webpackChunkthe_anything_blog"]=self["webpackChunkthe_anything_blog"]||[]).push([[736],{8025:(e,t,l)=>{l.r(t),l.d(t,{default:()=>q});var a=l(3396),n=l(7139),o=l(5010),c={class:"container"},r={key:0,class:"row d-flex justify-content-center"},i={class:"container"},s={class:"card"},u={class:"card__header"},d=["src"],m={class:"card__body"},h={class:"tag tag-blue"},_={class:"card__footer"},p={class:"user"},f=["src"],g={class:"user__info"},b={class:"make-button"},M=(0,a._)("button",{color:"black",onclick:"history.back(-1)",class:"link-button link-back-button"}," Back ",-1),y={key:1},v=(0,a.uE)('<p class="m-5">Loading techs...</p><div class="orbit-spinner"><div class="orbit"></div><div class="orbit"></div><div class="orbit"></div></div>',2),B=[v],w={class:"container"},k=(0,a._)("h1",null,"Comment:",-1),D=(0,a._)("textarea",{name:"message",id:"textarea",cols:"30",rows:"10",placeholder:"Comment"},"\r\n      ",-1),U=(0,a._)("br",null,null,-1),x=(0,a.Uk)("Update Blog"),C={class:"mb-3"},T=(0,a._)("label",{for:"title",class:"form-label"},"Title",-1),V={class:"mb-3"},W=(0,a._)("label",{for:"subtitle",class:"form-label"},"Subtitle",-1),z={class:"mb-3"},j=(0,a._)("label",{for:"category",class:"form-label"},"Category",-1),F=(0,a._)("option",{value:"tech"},"tech",-1),H=[F],S={class:"mb-3"},I=(0,a._)("label",{for:"image",class:"form-label"},"Image URL",-1),L={class:"mb-3"},A=(0,a._)("label",{for:"desc",class:"form-label"},"Description",-1),$=(0,a.Uk)("Close"),E=(0,a.Uk)("Update");function G(e,t,l,v,F,G){var J=(0,a.up)("router-link"),N=(0,a.up)("MDBModalTitle"),O=(0,a.up)("MDBModalHeader"),P=(0,a.up)("MDBModalBody"),R=(0,a.up)("MDBBtn"),Y=(0,a.up)("MDBModalFooter"),Z=(0,a.up)("MDBModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[F.techs?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a._)("div",s,[(0,a._)("div",u,[(0,a._)("img",{src:F.techs.main_image,alt:"card__image",class:"card__image",width:"600"},null,8,d)]),(0,a._)("div",m,[(0,a._)("span",h,(0,n.zw)(F.techs.category),1),(0,a._)("h1",null,(0,n.zw)(F.techs.title),1),(0,a._)("h3",null,(0,n.zw)(F.techs.subtitle),1),(0,a._)("p",null,(0,n.zw)(F.techs.desc),1)]),(0,a._)("div",_,[(0,a._)("div",p,[(0,a._)("img",{src:F.techs.user_image,alt:"user__image",class:"user__image"},null,8,f),(0,a._)("div",g,[(0,a._)("h5",null,(0,n.zw)(F.techs.created_by),1)])])]),(0,a._)("div",b,[(0,a._)("button",{color:"black","aria-controls":"exampleModal1",onClick:t[0]||(t[0]=function(e){return v.exampleModal1=!0})}," Update "),(0,a.Wm)(J,{to:{name:"techblogs"}},{default:(0,a.w5)((function(){return[(0,a._)("button",{tag:"a",href:"#!",color:"danger",onClick:t[1]||(t[1]=(0,o.iM)((function(e){return G.deleteBlog(F.techs._id)}),["prevent"]))}," Delete ")]})),_:1}),M])])])])):((0,a.wg)(),(0,a.iD)("div",y,B))]),(0,a._)("div",w,[k,(0,a._)("form",null,[D,U,(0,a._)("button",{tag:"a",href:"#!",color:"danger",onClick:t[2]||(t[2]=(0,o.iM)((function(t){return e.addComment(e.game._id)}),["prevent"]))}," Add Comment ")])]),(0,a.Wm)(Z,{id:"exampleModal1",tabindex:"-1",labelledby:"exampleModalLabel1",modelValue:v.exampleModal1,"onUpdate:modelValue":t[10]||(t[10]=function(e){return v.exampleModal1=e})},{default:(0,a.w5)((function(){return[(0,a.Wm)(O,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(N,{id:"exampleModalLabel1"},{default:(0,a.w5)((function(){return[x]})),_:1})]})),_:1}),(0,a.Wm)(P,null,{default:(0,a.w5)((function(){return[(0,a._)("div",C,[T,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"title",id:"title","onUpdate:modelValue":t[3]||(t[3]=function(e){return F.title=e})},null,512),[[o.nr,F.title]])]),(0,a._)("div",V,[W,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"subtitle",id:"subtitle","onUpdate:modelValue":t[4]||(t[4]=function(e){return F.subtitle=e})},null,512),[[o.nr,F.subtitle]])]),(0,a._)("div",z,[j,(0,a.wy)((0,a._)("select",{class:"form-select",name:"category",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return F.category=e})},H,512),[[o.bM,F.category]])]),(0,a._)("div",S,[I,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"image",id:"image","onUpdate:modelValue":t[6]||(t[6]=function(e){return F.main_image=e})},null,512),[[o.nr,F.main_image]])]),(0,a._)("div",L,[A,(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"desc",id:"desc","onUpdate:modelValue":t[7]||(t[7]=function(e){return F.desc=e})},null,512),[[o.nr,F.desc]])])]})),_:1}),(0,a.Wm)(Y,null,{default:(0,a.w5)((function(){return[(0,a.Wm)(R,{color:"secondary",onClick:t[8]||(t[8]=function(e){return v.exampleModal1=!1})},{default:(0,a.w5)((function(){return[$]})),_:1}),(0,a.Wm)(R,{color:"primary",onClick:t[9]||(t[9]=function(e){return G.updateBlog()})},{default:(0,a.w5)((function(){return[E]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])],64)}l(1539),l(8862);var J=l(6265),N=l.n(J),O=l(6818),P=l(4870);const R={props:["id"],components:{MDBModal:O.MDBModal,MDBModalHeader:O.MDBModalHeader,MDBModalTitle:O.MDBModalTitle,MDBModalBody:O.MDBModalBody,MDBModalFooter:O.MDBModalFooter,MDBBtn:O.MDBBtn},data:function(){return{techs:null,main_image:"",title:"",subtitle:"",category:"",desc:""}},mounted:function(){var e=this;fetch("https://the-anything-blog1.herokuapp.com/tech/"+this.id,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(t){e.techs=t}))["catch"]((function(e){alert(console.log(e))}))},setup:function(){var e=(0,P.iH)(!1);return{exampleModal1:e}},methods:{updateBlog:function(){var e=this;if(!localStorage.getItem("access"))return alert("User not logged in"),this.$router.push({name:"signin"});fetch("https://the-anything-blog1.herokuapp.com/tech/"+this.id,{method:"PUT",body:JSON.stringify({main_image:this.main_image,title:this.title,subtitle:this.subtitle,desc:this.desc,category:this.category}),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("access"))}}).then((function(e){return e.json()})).then((function(t){e.techs=t,alert("Blog Updated!"),e.$router.push({name:"techblogs"}),location.reload()}))["catch"]((function(e){alert(e)}))},deleteBlog:function(e){var t=this,l={headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Bearer ".concat(localStorage.getItem("access"))}},a="https://the-anything-blog1.herokuapp.com/tech/".concat(e);window.confirm("Do you really want to delete?")&&N()["delete"](a,l).then((function(){alert("Blog Deleted!"),t.$router.push({name:"techblogs"})}))["catch"]((function(e){console.log(e)}))}}};var Y=l(89);const Z=(0,Y.Z)(R,[["render",G]]),q=Z}}]);
//# sourceMappingURL=techdetails.cb44fecb.js.map