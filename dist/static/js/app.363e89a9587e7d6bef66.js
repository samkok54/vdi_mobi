webpackJsonp([1],{0:function(e,t){},"5h2J":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(e){s("PeNR")},null,null).exports,l=s("/ocq"),o={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",fullName:"",phone:"",mail:"",username:"",password:""}},methods:{submit:function(){""!==this.fullName&&""!==this.phone&&""!==this.mail&&""!==this.username&&""!==this.password?this.$http.post("http://203.154.59.151:5000/createuserapi",{username:this.username,password:this.password}).then(function(e){alert("finish!!")},function(e){console.log("error")}):""!==this.fullName&&""!==this.phone&&""!==this.mail&&""!==this.username&&""!==this.password||alert("there are empty fields")}}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("div",{staticClass:"ui steps"}),e._v(" "),s("div",{staticClass:"ui three column grid"},[s("div",{staticClass:"column"}),e._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"ui segment"},[e._m(0),e._v(" "),s("div",{staticClass:"ui form"},[s("div",{staticClass:"field"},[s("label",[e._v("Full Name")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{name:"Full-Name",type:"text",placeholder:"Full Name",value:""},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",[e._v("Telephone Numbers")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{name:"Telephone Number",type:"Number",placeholder:"Telephone Numbers",value:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",[e._v("E-Mail")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{name:"E-Mail",type:"text",placeholder:"E-Mail",value:""},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{name:"Username",type:"text",placeholder:"Username",value:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"field"},[s("label",[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{name:"Password",type:"password",placeholder:"Password",value:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),s("button",{staticClass:"ui button",attrs:{type:"submit"},on:{click:e.submit}},[e._v("Register")]),e._v(" "),s("input",{staticClass:"ui button",attrs:{type:"button",onclick:"location.href='https://vdicpsm.inet.co.th';",value:"Go to Login"}})])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"ui center aligned icon header"},[t("i",{staticClass:"circular users icon"}),this._v("\n          Account Settings\n        ")])}]};var u=s("VU/8")(o,r,!1,function(e){s("5h2J")},"data-v-341555fc",null).exports,c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("div",{staticClass:"ui three column grid"},[s("div",{staticClass:"column"}),e._v(" "),s("div",{staticClass:"column"},[s("div",{staticClass:"ui segment"},[e._m(0),e._v(" "),s("div",{staticClass:"field"},[s("label",[e._v("OTP Code")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.Password,expression:"Password"}],attrs:{name:"Password",type:"password",placeholder:"",value:""},domProps:{value:e.Password},on:{input:function(t){t.target.composing||(e.Password=t.target.value)}}}),e._v(" "),s("input",{staticClass:"ui button",attrs:{type:"button",onclick:"location.href='https://vdicpsm.inet.co.th';",value:"Submit"}})])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"ui icon header"},[t("i",{staticClass:"settings icon"}),this._v(" "),t("div",{staticClass:"content"},[this._v("\n              Enter OTP Code\n                "),t("div",{staticClass:"sub header"},[this._v("We will send the OTP Code to you via Telephone.")])])])}]};var m=s("VU/8")(null,c,!1,function(e){s("ldOH")},"data-v-05aa75f6",null).exports;a.a.use(l.a);var d=new l.a({routes:[{path:"/",component:u},{path:"/finish",component:m}]}),p=(s("kVq8"),s("Cw2q"),s("t2+U")),v=s.n(p);a.a.use(v.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:n},template:"<App/>"})},PeNR:function(e,t){},kVq8:function(e,t){},ldOH:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.363e89a9587e7d6bef66.js.map