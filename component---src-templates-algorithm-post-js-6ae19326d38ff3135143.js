(self.webpackChunk_stackrole_gatsby_starter_foundation=self.webpackChunk_stackrole_gatsby_starter_foundation||[]).push([[420],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,e,n){var o=n(7228);t.exports=function(t){if(Array.isArray(t))return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,e,n){var o=n(3646),r=n(6860),i=n(379),a=n(8206);t.exports=function(t){return o(t)||r(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,e,n){var o=n(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},9413:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(7154)),i=o(n(7316)),a=o(n(5354)),s=o(n(7294)),u=o(n(5697)),l=n(9462),d=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="moongkim-com-1",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,l.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?d():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.className,o=t.placeholder,a=(0,i.default)(t,["config","className","placeholder"]),u="disqus-comment-count"+(n?" "+n:"");return s.default.createElement("span",(0,r.default)({className:u,"data-disqus-identifier":e.identifier,"data-disqus-url":e.url},a),o)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string,className:u.default.string}},6748:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(7154)),i=o(n(7316)),a=o(n(5354)),s=o(n(7294)),u=o(n(5697)),l=function(t){function e(){return t.apply(this,arguments)||this}(0,a.default)(e,t);var n=e.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var t=this.props,e=(t.commentId,t.showMedia,t.showParentComment,(0,i.default)(t,["commentId","showMedia","showParentComment"]));return s.default.createElement("iframe",(0,r.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},e))},e}(s.default.Component);e.default=l,l.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},l.propTypes={commentId:u.default.oneOfType([u.default.number,u.default.string]).isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}},4838:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.default=void 0;var r=o(n(7154)),i=o(n(7316)),a=o(n(5354)),s=o(n(7294)),u=o(n(5697)),l=n(9462),d=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="moongkim-com-1",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,l.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(t){return function(){this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,this.language=t.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(o){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);var e=window.document.querySelector('[id^="dsq-app"]');if(e){var n=window.document.getElementById(e.id);n.parentNode.removeChild(n)}},n.render=function(){var t=this.props,e=(t.config,(0,i.default)(t,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},e))},e}(s.default.Component);e.default=d,d.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string})}},4332:function(t,e,n){"use strict";var o=n(5318);var r=o(n(4838));e.h$=r.default,o(n(9413)).default,o(n(6748)).default,r.default},9462:function(t,e,n){"use strict";var o=n(5318);e.__esModule=!0,e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=this,u=function(){o=null,n||t.apply(s,i)},l=n&&!o;window.clearTimeout(o),o=setTimeout(u,e),l&&t.apply(s,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var o,i=new Set(Object.keys(e).concat(Object.keys(n))),s=(o=[]).concat.apply(o,(0,r.default)(i)).filter((function(o){if("object"==typeof e[o]){if(t(e[o],n[o]))return!0}else if(e[o]!==n[o]&&!a(e[o]))return!0;return!1}));return 0!==s.length};var r=o(n(319)),i=o(n(7294));function a(t){return!!i.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return i.default.isValidElement(t)}))}},3889:function(t,e,n){"use strict";n.r(e);var o=n(9226),r=n(5444),i=n(7416),a=n(7791),s=n(3751),u=n(4332),l={"article blockquote":{"background-color":"cardBg"},pagination:{a:{color:"muted","&.is-active":{color:"text"},"&:hover":{color:"text"}}}},d=function(t){return(0,o.tZ)("div",{className:"pagination -post",sx:l.pagination},(0,o.tZ)("ul",null,t.previous&&"algorithm-post"===t.previous.frontmatter.template&&(0,o.tZ)("li",null,(0,o.tZ)(r.Link,{to:t.previous.frontmatter.slug,rel:"prev"},(0,o.tZ)("p",{sx:{color:"muted"}},(0,o.tZ)("span",{className:"icon -left"},(0,o.tZ)(i.YG0,null))," ","Previous"),(0,o.tZ)("span",{className:"page-title"},t.previous.frontmatter.title))),t.next&&"algorithm-post"===t.next.frontmatter.template&&(0,o.tZ)("li",null,(0,o.tZ)(r.Link,{to:t.next.frontmatter.slug,rel:"next"},(0,o.tZ)("p",{sx:{color:"muted"}},"Next"," ",(0,o.tZ)("span",{className:"icon -right"},(0,o.tZ)(i.nzV,null))),(0,o.tZ)("span",{className:"page-title"},t.next.frontmatter.title)))))};e.default=function(t){var e=t.data,n=t.pageContext,r=e.markdownRemark,i=r.frontmatter,c=r.html,p=r.excerpt,f=n.previous,m=n.next,h={previous:f,next:m},g={url:n.url,identifier:n.identifier,title:n.title};return(0,o.tZ)(a.Z,{className:"page"},(0,o.tZ)(s.Z,{title:i.title,description:i.description?i.description:p,image:"",article:!0}),(0,o.tZ)("article",{className:"blog-post"},(0,o.tZ)("header",{className:"featured-banner"},(0,o.tZ)("section",{className:"article-header"},(0,o.tZ)("h1",null,i.title),(0,o.tZ)("time",{sx:{color:"muted"}},i.date))),(0,o.tZ)("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:c}})),(f||m)&&(0,o.tZ)(d,h),(0,o.tZ)("div",{className:l.post__comments},(0,o.tZ)(u.h$,{config:g})))}}}]);
//# sourceMappingURL=component---src-templates-algorithm-post-js-6ae19326d38ff3135143.js.map