System.register("chunks:///_virtual/Background.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,a,r,s,o,p,h,u,c,l,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,o=t.Node,p=t.Label,h=t.Prefab,u=t.instantiate,c=t.Vec3,l=t.randomRangeInt,d=t.Component}],execute:function(){var g,f,b,P,k,y,v,m,x;r._RF.push({},"ed1f8xFc6lFJoUgmf4xijik","Background",void 0);var L=s.ccclass,S=s.property;t("Background",(g=L("Background"),f=S({type:o}),b=S({type:p}),P=S({type:h}),g((v=e((y=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,n(e,"parentBackground",v,a(e)),n(e,"skorLabel",m,a(e)),e.hitungPipa=0,e.skorAkhir=0,e.cekStop=!1,n(e,"prefabPipa",x,a(e)),e.pipa=[],e.temp=300,e.increaseSpeed=1,e}i(e,t);var r=e.prototype;return r.hitung=function(t){this.hitungPipa=t,this.skorLabel.string=""+this.hitungPipa},r.tambah=function(){this.hitungPipa=Math.floor(this.hitungPipa+1),this.skorLabel.string=""+this.hitungPipa},r.berhenti=function(t){return t<0},r.start=function(){var t=u(this.prefabPipa);t.setParent(this.node.parent),t.setPosition(new c(200,0,0)),this.pipa.push(t),t.setParent(this.node.parent),t.setPosition(new c(300,0,0)),this.pipa.push(t);var e=new o;e.setParent(this.node.parent),this.skorLabel.node.setParent(e),e.addChild(this.skorLabel.node)},r.update=function(t){this.tambah();var e=this.node.getPosition();if(e.x-=57.6*this.increaseSpeed*t,this.hitungPipa>this.temp&&(this.increaseSpeed+=.2,this.temp+=200),e.x<=-288){e.x+=288;var i=u(this.prefabPipa);i.setParent(this.node.parent),i.setPosition(new c(200,-60,0)),this.pipa.push(i)}this.node.setPosition(e);for(var n=0;n<this.pipa.length;n++){var a=this.pipa[n].getPosition();a.x-=60*this.increaseSpeed*t,this.berhenti(a.x)&&!this.cekStop&&(this.cekStop=!0),a.x<=-200&&(a.x+=400,a.y=l(-50,100),this.cekStop=!1),this.pipa[n].setPosition(a)}},e}(d)).prototype,"parentBackground",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=e(y.prototype,"skorLabel",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(y.prototype,"prefabPipa",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=y))||k));r._RF.pop()}}}));

System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,r,s,o,a,h,u;return{setters:[function(e){t=e.inheritsLoose},function(e){i=e.cclegacy,n=e._decorator,r=e.input,s=e.Input,o=e.Collider2D,a=e.Contact2DType,h=e.director,u=e.Component}],execute:function(){var c;i._RF.push({},"988deD2vUZDNa41M/ghvh+5","Bird",void 0);var v=n.ccclass;n.property,e("Bird",v("Bird")(c=function(e){function i(){for(var t,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).gameOver=null,t.isGameOver=!1,t.speedTurun=100,t}t(i,e);var n=i.prototype;return n.start=function(){r.on(s.EventType.TOUCH_START,this.onInputReceived,this),this.node.getComponent(o).on(a.BEGIN_CONTACT,this.onCollide,this),this.gameOver=this.node.parent.getChildByName("gameover"),this.gameOver&&(this.gameOver.active=!1,this.gameOver.parent&&this.gameOver.setSiblingIndex(this.gameOver.parent.children.length-1))},n.onCollide=function(e,t){this.isGameOver||0!=t.tag||(this.gameOver&&(this.gameOver.active=!0,this.gameOver.parent&&this.gameOver.setSiblingIndex(this.gameOver.parent.children.length-1),h.pause()),this.isGameOver=!0,r.off(s.EventType.TOUCH_START,this.onInputReceived,this))},n.onInputReceived=function(e){this.speedTurun=250},n.update=function(e){var t=this.node.getPosition();this.speedTurun-=300*e,t.y+=this.speedTurun*e,this.node.setPosition(t)},i}(u))||c);i._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Ground.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,n,a,o,s,u,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.Prefab,u=e.instantiate,c=e.Component}],execute:function(){var p,l,d,f,h;a._RF.push({},"bed5c5G6EJBT7KRvpY6yUAo","Ground",void 0);var b=o.ccclass,y=o.property;e("Ground",(p=b("Ground"),l=y({type:s}),p((h=t((f=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"prefabBase",h,n(t)),t.baseNode=void 0,t.currentTime=0,t}r(t,e);var a=t.prototype;return a.start=function(){this.baseNode=u(this.prefabBase),this.baseNode.setParent(this.node.parent),this.schedule(this.updateTime,1)},a.updateTime=function(){this.currentTime+=1},a.update=function(e){},t}(c)).prototype,"prefabBase",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./Background.ts","./Bird.ts","./Ground.ts","./Pause.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Pause.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,s,a,r,o,u,l,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,o=e.Button,u=e.Label,l=e.director,c=e.Component}],execute:function(){var p,h,d,f,P;a._RF.push({},"7ce0axWos9NMq2R6+aVr//Q","Pause",void 0);var g=r.ccclass,b=r.property;e("Pause",(p=g("Pause"),h=b({type:o}),p((P=t((f=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,n(t,"pauseLabel",P,s(t)),t.ifPaused=!1,t}i(t,e);var a=t.prototype;return a.start=function(){this.node.getChildByName("PauseButton").on("click",this.isPaused,this),this.pauseLabel=this.node.getComponentInChildren(u),this.node.setSiblingIndex(this.node.parent.children.length-1)},a.isPaused=function(){this.ifPaused?(this.ifPaused=!1,l.resume(),this.pauseLabel.string="PAUSE"):(this.ifPaused=!0,this.pauseLabel.string="RESUME",l.pause()),console.log("masuk")},a.update=function(e){},t}(c)).prototype,"pauseLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=f))||d));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});