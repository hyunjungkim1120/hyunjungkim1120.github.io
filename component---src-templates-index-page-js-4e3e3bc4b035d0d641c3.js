"use strict";(self.webpackChunk_stackrole_gatsby_starter_foundation=self.webpackChunk_stackrole_gatsby_starter_foundation||[]).push([[999],{8845:function(t,a,n){var e=n(9226),l=n(5444),r=n(6125);a.Z=function(t){var a=t.data;return(0,e.tZ)("article",{className:"post-card",sx:{bg:"cardBg"}},a.frontmatter.featuredImage?(0,e.tZ)(l.Link,{to:a.frontmatter.slug},(0,e.tZ)(r.G,{image:a.frontmatter.featuredImage.childImageSharp.gatsbyImageData,alt:a.frontmatter.title+" - Featured image",className:"featured-image"})):"",(0,e.tZ)("div",{className:"post-content"},(0,e.tZ)("h2",{className:"title"},(0,e.tZ)(l.Link,{to:a.frontmatter.slug,sx:{variant:"links.postLink"}},a.frontmatter.title)),(0,e.tZ)("p",{className:"meta",sx:{color:"muted"}},(0,e.tZ)("time",null,a.frontmatter.date)),a.frontmatter.tags?(0,e.tZ)("p",{className:"meta",sx:{color:"borderColor",textAlignLast:"right"}},a.frontmatter.tags):""))}},2535:function(t,a,n){n.r(a),n.d(a,{default:function(){return k}});var e=n(9226),l=n(5444),r=n(6125),i=n(7416),o=n(3201),s=n(7791),u=n(8845);function c(t){var a=t.data.edges.filter((function(t){return!!t.node.frontmatter.date})).map((function(t){return(0,e.tZ)(u.Z,{key:t.node.id,data:t.node})}));return(0,e.tZ)(Z,{data:a})}var Z=function(t){var a=t.data;return(0,e.tZ)("section",{className:"home-posts"},(0,e.tZ)("h2",null,"Latest in ",(0,e.tZ)("strong",null,"Blog")," ",(0,e.tZ)("span",{className:"icon -right"},(0,e.tZ)(i.dtO,null))),(0,e.tZ)("div",{className:"grids col-1 sm-2 lg-3"},a),(0,e.tZ)(l.Link,{className:"button",to:"/blog",sx:{variant:"variants.button"}},"See more",(0,e.tZ)("span",{className:"icon -right"},(0,e.tZ)(i.jfD,null))))},m=n(3751),g=JSON.parse('{"R":[{"icon":"github","url":"https://github.com/hyunjungkim1120"},{"icon":"linkedin","url":"https://www.linkedin.com/in/현정-김-6a2450231"}]}'),k=function(t){var a=t.data,n=a.markdownRemark,u=a.posts,Z=n.frontmatter,k=n.html,d=Z.featuredImage?Z.featuredImage.childImageSharp.gatsbyImageData:"",b=g.R.map((function(t,a){return(0,e.tZ)("div",{key:"social icons"+a},"facebook"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.e5d,null)):"","twitter"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.x2F,null)):"","linkedin"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.tsq,null)):"","youtube"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.oK$,null)):"","instagram"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.Nrw,null)):"","rss"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.$kE,null)):"","github"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.q7V,null)):"","telegram"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.jll,null)):"","pinterest"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.J4B,null)):"","snapchat"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.G$$,null)):"","skype"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.hqH,null)):"","wordpress"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(o.k7O,null)):"","dribbble"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.w6U,null)):"","medium"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.sG0,null)):"","behance"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(i.fRc,null)):"","vk"===t.icon?(0,e.tZ)(l.Link,{to:t.url,target:"_blank"},(0,e.tZ)(o.J_S,null)):"")}));return(0,e.tZ)(s.Z,null,(0,e.tZ)(m.Z,null),(0,e.tZ)("div",{className:"home-banner grids col-1 sm-2"},(0,e.tZ)("div",null,(0,e.tZ)("h1",{className:"title"},Z.title),(0,e.tZ)("p",{className:"tagline",sx:{color:"muted"}},Z.tagline),(0,e.tZ)("div",{className:"description",dangerouslySetInnerHTML:{__html:k}}),(0,e.tZ)(l.Link,{to:Z.cta.ctaLink,className:"button",sx:{variant:"variants.button"}},Z.cta.ctaText,(0,e.tZ)("span",{className:"icon -right"},(0,e.tZ)(i.jfD,null))),(0,e.tZ)("div",{className:"social-icons",sx:{variant:"variants.socialIcons"}},b)),(0,e.tZ)("div",null,d?(0,e.tZ)(r.G,{image:d,alt:Z.title+" - Featured image",className:"featured-image"}):"")),(0,e.tZ)(c,{data:u}))}}}]);
//# sourceMappingURL=component---src-templates-index-page-js-4e3e3bc4b035d0d641c3.js.map