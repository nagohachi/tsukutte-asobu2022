(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("6f7f25f0",content,!0,{sourceMap:!1})},287:function(t,e,n){"use strict";n(281)},288:function(t,e,n){var o=n(109)(!1);o.push([t.i,'.neko-page-speech-container[data-v-3c0c12f6]{position:absolute;width:100%;bottom:10px;display:flex}.neko-name[data-v-3c0c12f6]{font-size:1.4vw}.neko-name[data-v-3c0c12f6],.neko-speech[data-v-3c0c12f6]{font-weight:700;color:#4f4f4f}.neko-speech[data-v-3c0c12f6]{font-size:2vw;font-family:"Source Sans Pro","ヒラギノ角ゴシック Pro","Hiragino Kaku Gothic Pro",sans-serif}.hukidashi[data-v-3c0c12f6]{position:relative;width:100%;bottom:0;z-index:100;background:linear-gradient(transparent,hsla(0,0%,94.1%,.85) 5%,hsla(0,0%,94.1%,.85));padding:4vw;border-radius:4px;cursor:pointer;transform:translateY(10px);min-height:4vh}.speech-box[data-v-3c0c12f6]{display:flex;justify-content:space-between}.next-button[data-v-3c0c12f6]{background:none;font-size:1.4vw;font-weight:700;color:#4f4f4f;border:none;cursor:pointer}',""]),t.exports=o},296:function(t,e,n){"use strict";n.r(e);var o=n(1),r=["何やお前","勝手に触んなや","まあゆっくりしてけや。この猫八さまに謁見できるんやからな","来よったわ。まあ世話させたらんでもないけどな ","またおまえか。貴重な時間使ったってるんやから、感謝しいや","何や飯係か。ちゃっちゃと用意したってや ","白って200色あんねん","最初の画面と顔違う？画像はイメージです言うとるやろ、そんなんもわからんの？","（笑）（笑）（笑）","それセクハラやで。炎上させたろか？","はらへった","こんなことせんともっと有益なことに時間使ったほうがいいんとちゃいます？","お前船降りろ"],c=["お前、飯持ってくるのサボったやろ","あとちょっとで死ぬところやったでほんま","あー、傷ついた。めっちゃ傷ついたわ。どないしてくれるねん","ごめんで済んだら警察いらんねん","謝罪文書いてもらうわ","１文字でも間違えたら許さへんで"],h=["うわー！こいつほんまに書きよった！おもろ！"],d=["まっず","お、飯来たわ。この猫八さまに給仕させて頂けること、光栄に思いや","やっとかいな。結構待ったでぇ。ちゃんと用意したみたいやし、許したるわ ","ちょい遅いんちゃうか。猫八さまは忙しいんやし、あんま怒らせなや","飯や飯！あ、もう帰ってええで","うわ！安モンや！"],f=["ビビったやろ","お前が飯持ってこーへんからブルスクにしてやったわ"],l=["おい！飯は？","全くこれだから最近の若造は...","まあこの問題解けたら許したるわ"],m=["え？解けたん？","おもんな"],v=o.a.extend({name:"NekoPageSpeech",props:{mode:{type:String,default:"normal"},angryMode:{type:String,default:""}},data:function(){return{scripts:r,scriptIndex:0,currentScript:""}},watch:{mode:function(){if("doAngry"!==this.mode&&(this.scriptIndex=0),"startAngry"===this.mode)switch(Math.floor(3*Math.random())){case 0:this.scripts=c,this.$emit("change-angry-mode","hanseibun");break;case 1:this.$emit("change-mode","doAngry"),this.$emit("change-angry-mode","bluescreen");break;case 2:this.scripts=l,this.$emit("change-angry-mode","quiz")}"endAngry"===this.mode&&("hanseibun"===this.angryMode&&(this.scripts=h),"bluescreen"===this.angryMode&&(this.scripts=f),"quiz"===this.angryMode&&(this.scripts=m)),"normal"===this.mode&&(this.scripts=r),"feed"===this.mode&&(this.scripts=[],this.scripts.push(d[Math.floor(Math.random()*d.length)]))}},methods:{proceedScript:function(){"normal"===this.mode?this.scriptIndex=Math.floor(Math.random()*r.length):this.scriptIndex+=1,this.scripts.length<=this.scriptIndex&&("startAngry"===this.mode&&(this.scriptIndex=this.scripts.length-1,this.$emit("change-mode","doAngry")),"doAngry"===this.mode&&(this.scriptIndex=this.scripts.length-1),"endAngry"===this.mode&&(this.$emit("change-mode","normal"),this.$emit("change-angry-mode","")),"feed"===this.mode&&this.$emit("change-mode","normal"))}}}),y=(n(287),n(46)),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"neko-page-speech-container"},[e("div",{staticClass:"hukidashi",on:{click:t.proceedScript}},[e("div",{staticClass:"neko-name"},[t._v("猫八さん")]),t._v(" "),e("div",{staticClass:"speech-box"},[e("p",{staticClass:"neko-speech"},[t._v("\n        "+t._s(t.scripts[t.scriptIndex])+"\n      ")]),t._v(" "),e("button",{staticClass:"next-button"},[t._v("NEXT")])])])])}),[],!1,null,"3c0c12f6",null);e.default=component.exports}}]);