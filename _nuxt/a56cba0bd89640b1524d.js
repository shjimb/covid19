(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{286:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("2cb42184",content,!0,{sourceMap:!1})},290:function(t,e,n){var content=n(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("97e7ab7c",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(74);var r=n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),o=(n(301),n(4)),l=n(38),c=n.n(l),d=n(278),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize/10+"rem","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},294:function(t,e,n){"use strict";var r=n(286);n.n(r).a},295:function(t,e,n){(e=n(13)(!1)).push([t.i,".header[data-v-55eabffa]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-55eabffa]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-55eabffa]{font-size:2rem}}",""]),t.exports=e},297:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(294),n(4)),l=n(38),c=n.n(l),d=n(278),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"55eabffa",null);e.a=component.exports;c()(component,{VIcon:d.a})},298:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("e882ae98",content,!0,{sourceMap:!1})},301:function(t,e,n){"use strict";var r=n(290);n.n(r).a},302:function(t,e,n){(e=n(13)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},324:function(t,e,n){"use strict";var r=n(298);n.n(r).a},325:function(t,e,n){(e=n(13)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #008830}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=e},330:function(t,e,n){"use strict";var r=n(1).a.extend(),o=(n(324),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},544:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(330),l=n(297),c=n(293),d=r.a.extend({components:{PageHeader:l.a,StaticCard:o.a,ExternalLink:c.a},head:function(){return{title:this.$t("お子様をお持ちの皆様へ")}}}),f=n(4),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("臨時休校中の新型コロナウイルス感染症対応についてのお願い"))+"\n  ")]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://tokyodouga.jp/playlist/ohayoschool.html","icon-size":24}},[t._v(t._s(t.$t("TOKYOおはようスクール"))+"\n      ")])],1),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("学校休校中の子供たちの生活や学習を応援するテレビ番組です。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.kyoiku.metro.tokyo.lg.jp/school/content/learning_support.html","icon-size":24}},[t._v(t._s(t.$t("学びの支援サイト"))+"\n      ")])],1),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("臨時休業期間における子供たちの学びを支援する様々なウェブサイトを紹介しています。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("学習の基本的な内容を身に付けられる「東京・ベーシック・ドリル」や動画教材等があります。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染予防・健康管理")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("手洗い、咳エチケット等により、感染予防に努めてください。"))),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://tokyodouga.jp/lViN9C_BS-0.html","icon-size":16}},[t._v(t._s(t.$t("【参考】感染症予防のための正しい手洗い方法（動画）"))+"\n        ")])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染症を疑う場合の対応")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("各保健所にご相談ください")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("各保健所の電話番号について"))+"\n        "),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html","icon-size":16}},[t._v(t._s(t.$t("「新型コロナウイルス感染症にかかる相談窓口について」"))+"\n        ")])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("その他")))]),t._v(" "),n("p",[t._v(t._s(t.$t("詳細は、各学校からのお知らせ等をご確認ください。")))])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);