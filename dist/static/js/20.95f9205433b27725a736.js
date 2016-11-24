webpackJsonp([20,31],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: "#";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: "!";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e,f={};c(5),d=c(3),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})},346:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2),e=c(8),f=[{value:'china',label:'\u4E2D\u56FD',children:[{value:'sichuan',label:'\u56DB\u5DDD',children:[{value:'chegndu',label:'\u6210\u90FD'},{value:'deyang',label:'\u5FB7\u9633'}]}]},{value:'America',label:'\u7F8E\u56FD',children:[{value:'California',label:'\u52A0\u5229\u798F\u5C3C\u4E9A',children:[{value:'lake',label:'\u6E56'},{value:'Los Angeles',label:'\u6D1B\u6749\u77F6'}]},{value:'Delaware',label:'\u7279\u62C9\u534E',children:[{value:'Dover',label:'\u591A\u4F5B'}]}]},{value:'china',label:'\u4E2D\u56FD',children:[{value:'sichuan',label:'\u56DB\u5DDD',children:[{value:'chegndu',label:'\u6210\u90FD'},{value:'deyang',label:'\u5FB7\u9633'}]}]},{value:'America',label:'\u7F8E\u56FD',children:[{value:'California',label:'\u52A0\u5229\u798F\u5C3C\u4E9A',children:[{value:'lake',label:'\u6E56'},{value:'Los Angeles',label:'\u6D1B\u6749\u77F6'}]},{value:'Delaware',label:'\u7279\u62C9\u534E',children:[{value:'Dover',label:'\u591A\u4F5B'}]}]},{value:'china',label:'\u4E2D\u56FD',children:[{value:'sichuan',label:'\u56DB\u5DDD',children:[{value:'chegndu',label:'\u6210\u90FD'},{value:'deyang',label:'\u5FB7\u9633'}]}]},{value:'America',label:'\u7F8E\u56FD',children:[{value:'California',label:'\u52A0\u5229\u798F\u5C3C\u4E9A',children:[{value:'lake',label:'\u6E56'},{value:'Los Angeles',label:'\u6D1B\u6749\u77F6'}]},{value:'Delaware',label:'\u7279\u62C9\u534E',children:[{value:'Dover',label:'\u591A\u4F5B'}]}]}];b.default={data:function(){return{cascader:{options:f,valueArr:[]}}},components:{rdCascader:e.rdCascader,Mark:d.Mark}}},608:function(a,b){a.exports='\n<div class="ex-content">\n    <div class="ex-card">\n     <mark>\n        <textarea class="ex-mark-text">\n# Cascader \u7EA7\u8054\u9009\u62E9\n\u7EA7\u8054\u9009\u62E9\u6846\u3002\n\n## \u4F55\u65F6\u4F7F\u7528\n\n - \u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002\n - \u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002\n - \u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002\n        </textarea>\n    </mark>\n        <p>\n            <rd-cascader :cascader="cascader"></rd-cascader>\n        </p>\n    <mark>\n        <textarea class="ex-mark-text">\n# API\n\n## cascader \ncascader \u662F\u7EA7\u8054\u7EC4\u4EF6\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u5B83\u6709\u9009\u9879\u6570\u7EC4 options \u548C \u7ED3\u679C\u6570\u7EC4 valueArr\n```\ncascader: {\n    options: options,\n    valueArr: []\n}\n\n<rd-cascader :cascader="cascader"></rd-cascader>\n```\n## options\noptions \u5E26\u9009\u53D6\u7684\u7EA7\u8054\u6570\u636E\n```\nconst options = [{\n    // label \u662F\u7EA7\u8054\u9009\u9879\u5C55\u793A\u503C\n    label: \'\u4E2D\u56FD\',\n\n    // value \u662F\u5BF9\u8C61\u81EA\u5B9A\u4E49\u5C5E\u6027\n    value: \'china\',\n    // \u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5176\u4ED6\u5C5E\u6027\n    sku: \'2234234\',\n    id: \'j4jb345jb34j5\',\n\n    // \u8BE5\u5BF9\u8C61\u7684\u5B50\u9009\u9879\u6570\u7EC4\n    children: [{\n        value: \'sichuan\',\n        label: \'\u56DB\u5DDD\',\n        children: [{\n            value: \'chegndu\',\n            label: \'\u6210\u90FD\'\n        }, {\n            value: \'deyang\',\n            label: \'\u5FB7\u9633\'\n        }]\n    }]\n}]\n```\n## valueArr\n\u9009\u62E9\u7ED3\u679C\u6570\u7EC4\n\n```\n// \u6BD4\u5982\u4E00\u6B21\u9009\u62E9 \u7F8E\u56FD \u52A0\u5229\u798F\u5C3C\u4E9A \u6D1B\u6749\u77F6 valueArr\u4F1A\u5F97\u5230\u8FD9\u6837\u7684\u6570\u7EC4\nvalueArr: [{\n    value: \'America\',\n    label: \'\u7F8E\u56FD\'\n}, {\n    value: \'California\',\n    label: \'\u52A0\u5229\u798F\u5C3C\u4E9A\'\n}, {\n    value: \'Los Angeles\',\n    label: \'\u6D1B\u6749\u77F6\'\n}]\n```\n\n        </textarea>\n    </mark>\n    <mark>\n        <textarea class="ex-mark-text">\n## \u5B8C\u6574\u793A\u4F8B\u4EE3\u7801\n```javascript\nconst options = [{\n    value: \'china\',\n    label: \'\u4E2D\u56FD\',\n    children: [{\n        value: \'sichuan\',\n        label: \'\u56DB\u5DDD\',\n        children: [{\n            value: \'chegndu\',\n            label: \'\u6210\u90FD\'\n        }, {\n            value: \'deyang\',\n            label: \'\u5FB7\u9633\'\n        }]\n    }]\n}, {\n    value: \'America\',\n    label: \'\u7F8E\u56FD\',\n    children: [{\n        value: \'California\',\n        label: \'\u52A0\u5229\u798F\u5C3C\u4E9A\',\n        children: [{\n            value: \'lake\',\n            label: \'\u6E56\'\n        }, {\n            value: \'Los Angeles\',\n            label: \'\u6D1B\u6749\u77F6\'\n        }]\n    }, {\n        value: \'Delaware\',\n        label: \'\u7279\u62C9\u534E\',\n        children: [{\n            value: \'Dover\',\n            label: \'\u591A\u4F5B\'\n        }]\n    }]\n}]\n\nexport default {\n    template: \'<rd-cascader :cascader="cascader"></rd-cascader>\',\n    data () {\n        return {\n            cascader: {\n                options: options,\n                valueArr: []\n            }\n        }\n    },\n    components: {\n        rdCascader\n    }\n}\n```\n        </textarea>\n    </mark>\n\n    </div>\n</div>\n'},642:function(a,b,c){var d,e,f={};d=c(346),d&&d.__esModule&&1<Object.keys(d).length&&console.warn('[vue-loader] docs/views/form/cascader.vue: named exports in *.vue files are ignored.'),e=c(608),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})}});