(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=a(9),i=a(7),s=a.n(i),m=function(e,t,a){e.preventDefault(),s.a.polyfill();var n=document.getElementById(e.target.dataset.sect).getBoundingClientRect().top;t&&a(!t),window.scrollTo({top:n-30,left:0,behavior:"smooth"})},u=function(e){var t=e.open,a=e.setOpen;return function(e){Object(n.useLayoutEffect)((function(){if(e){var t=document.querySelector(".burger"),a=t.getBoundingClientRect().top,n=window.getComputedStyle(t).marginTop;return Math.sign(a)<0&&(t.style.marginTop="".concat(parseInt(n.split("px")[0])+Math.abs(a)+10,"px")),function(){return t.style.marginTop=n}}}))}(t),r.a.createElement("button",{className:"burger ".concat(t?"open":""),open:t,onClick:function(){return a(!t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))},d=function(e){var t=e.text,a=e.dataValue,n=e.setOpen,c=e.open;return r.a.createElement("a",{href:"/",onClick:function(e){return m(e,c,n)},"data-sect":a},t)},p=function(e){var t=e.open,a=e.setOpen;return function(e){Object(n.useLayoutEffect)((function(){if(e){var t=window.innerWidth-document.querySelector("body").offsetWidth,a=window.getComputedStyle(document.body).overflow;return document.body.style.paddingRight=t+"px",document.body.style.overflow="hidden",function(){return[document.body.style.overflow=a,document.body.style.paddingRight="0px"]}}}))}(t),function(e){Object(n.useLayoutEffect)((function(){var t=document.querySelector("nav"),a=t.getBoundingClientRect().bottom,n=window.innerHeight;if(e&&a<n)return t.style.height="calc(100vh + ".concat(n-a,"px)"),function(){return t.style.height="100vh"}}))}(t),r.a.createElement("nav",{className:"menu ".concat(t?"open":"")},r.a.createElement(d,{text:"About",setOpen:a,open:t,dataValue:"about"}),r.a.createElement(d,{text:"Work",setOpen:a,open:t,dataValue:"work"}),r.a.createElement(d,{text:"Contact",setOpen:a,open:t,dataValue:"contact"}))},h=function(e){var t,a,c=e.open,o=e.setOpen,l=Object(n.useRef)();return t=l,a=function(){return o(!1)},Object(n.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&a(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,a]),r.a.createElement("header",null,r.a.createElement("a",{className:"logo",href:"/portfolio-v2"},"ES"),r.a.createElement("div",{className:"menu_container",ref:l},r.a.createElement(u,{open:c,setOpen:o}),r.a.createElement(p,{open:c,setOpen:o})))},g=a(1),f=a(2),E=a(4),v=a(3),b=function(e){var t=e.src;return r.a.createElement("img",{className:"banner_img",src:t,alt:"Eric Smith, Web Developer."})},y=function(e){var t=e.text;return r.a.createElement("h2",{className:"banner_bio"},t)},N=function(e){var t=e.dataValue;return r.a.createElement("button",{onClick:function(e){return m(e)},className:"banner_anchor","data-sect":t},"View Recent Projects")},_=function(){return r.a.createElement("div",{class:"banner_loader"},"Loading...")},k=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={me:{}},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/ericsmith92").then((function(e){return e.json()})).then((function(t){e.setState({me:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object.keys(this.state.me).length?r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner_inner"},this.state.me?r.a.createElement(b,{src:this.state.me.avatar_url}):"",this.state.me?r.a.createElement(y,{text:this.state.me.bio}):"",r.a.createElement(N,{dataValue:"work"}))):r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner_inner"},r.a.createElement(_,null)))}}]),a}(r.a.Component),w=function(){return r.a.createElement("section",{className:"about",id:"about"},r.a.createElement("h1",{className:"heading_main"},"Hey there, ",r.a.createElement("span",{className:"break"},"I'm ",r.a.createElement("strong",null,"Eric Smith"))),r.a.createElement("h2",{className:"heading_secondary"},"A ",r.a.createElement("strong",null,"Web Developer")," who enjoys exploring new technologies through Project-Based learning."),r.a.createElement("p",null,"I started programming about 4 years ago, and I've garnered much of my professional experience working at agencies operating in the automotive space. I'm comfortable using traditional web building blocks like HTML5, CSS3, JavaScript(ES5, ",r.a.createElement("strong",null,"ES6+"),", JQuery), PHP, MySQL, and WordPress, but in my free time I like working primarily with modern JavaScript, building projects using ",r.a.createElement("strong",null,"React")," and ",r.a.createElement("strong",null,"Node"),". Have a look around, you might see something you like."))},j=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){return Object(g.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props.toggleCardState;return r.a.createElement("button",{className:"card_toggle",onClick:function(){return e()}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))}}]),a}(r.a.Component),S=a(8),O=a.n(S),C=function(e){var t=e.toggleCardState,a=e.accomplishments,n=e.githubURL,c=e.projectURL,o=["Node","Node JS","JavaScript","JAMstack","React","stitching","PUG","Express","Unsplash API","technical documentation","WordPress","WPGraphQL","GraphQL"],l=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(O.a,{highlightClassName:"card_reveal__mark",searchWords:o,autoEscape:!0,textToHighlight:e}))}));return r.a.createElement("div",{className:"card_reveal"},r.a.createElement("div",{className:"card_reveal__heading"},r.a.createElement("h3",{className:"heading_tertiary"},"Accomplishments"),r.a.createElement("button",{className:"card_reveal__close",onClick:function(){return t()}},"\xd7")),r.a.createElement("div",{className:"card_reveal__body"},r.a.createElement("ul",{className:"card_reveal__ul"},l)),r.a.createElement("div",{className:"card_reveal__footing"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},r.a.createElement("i",{className:"fa fa-github"})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c},r.a.createElement("i",{className:"fa fa-link"}))))},R=function(e){Object(E.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={active:!1},e.toggleCardState=function(){e.state.active?e.setState({active:!1}):e.setState({active:!0})},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.title,n=e.description,c=e.accomplishments,o=e.githubURL,l=e.projectURL;return r.a.createElement("div",{className:"card ".concat(this.state.active?"active":"")},r.a.createElement("div",{className:"card_top"},r.a.createElement("img",{className:"card_img",src:t,alt:"",title:""})),r.a.createElement("div",{className:"card_bottom"},r.a.createElement("h3",{className:"heading_tertiary"},a),r.a.createElement(j,{toggleCardState:this.toggleCardState}),r.a.createElement("p",null,n)),r.a.createElement(C,{toggleCardState:this.toggleCardState,accomplishments:c,githubURL:o,projectURL:l}))}}]),a}(r.a.Component),L=function(){return r.a.createElement("section",{className:"work",id:"work"},r.a.createElement("div",{className:"work_inner"},r.a.createElement("h2",{className:"heading_secondary heading_secondary__decorated"},r.a.createElement("span",null,"Recent"),r.a.createElement("span",null,"Work")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1-of-3"},r.a.createElement(R,{src:"/portfolio-v2/images/harness-inspection-cover.png",title:"Harness Inspection App",description:"A fullstack app that guides you through a safety harness inspection that I worked on with another developer.",accomplishments:["Authored a custom WordPress plugin allowing for querying and creation of custom post type data via GraphQL","Built an interactive React SVG component that guides a user through each harness point needing inspection","Sign Up for free and test it out!"],githubURL:"https://github.com/harness-software/harness-inspection",projectURL:"https://inspections.harnessup.com/harness-inspection/register"})),r.a.createElement("div",{className:"col-1-of-3"},r.a.createElement(R,{src:"/portfolio-v2/images/covid-19-banner.png",title:"Covid-19 Tracker",description:"Interact with countries on a map to retrieve Covid-19 data.",accomplishments:["JAMstack project with React front-end","Error handling and displaying using React Portals","Dusted off some highschool math to derive lat and long from an XY coordinate on mouseclick"],githubURL:"https://github.com/ericsmith92/web-mercator/",projectURL:"https://ericsmith92.github.io/web-mercator/"})),r.a.createElement("div",{className:"col-1-of-3"},r.a.createElement(R,{src:"/portfolio-v2/images/instapaper-banner.png",title:"Instapaper",description:"Rearrange and stitch together random photos from a search term to make a wallpaper.",accomplishments:["Node JS Express backend","PUG templating engine used on the front-end","Images retrieved using the Unsplash API","Image writing, resizing, and stitching on the fly. Images can be rearranged on the front-end to change the order"],githubURL:"https://github.com/ericsmith92/collage-maker",projectURL:"http://instapapier.herokuapp.com/"})))))},x=function(){return r.a.createElement("section",{className:"contact",id:"contact"},r.a.createElement("a",{className:"contact_btn",href:"mailto:ericsmth884@gmail.com"},"Contact Me"))},I=function(){return r.a.createElement("ul",{className:"footer_social"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ericsmith92"},r.a.createElement("i",{className:"fa fa-github brand-icon"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/smitheric92/"},r.a.createElement("i",{className:"fa fa-linkedin-square brand-icon"}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/file/d/1jEuoDuCtq8BvN38TAGeL6udGGIevEFXd/view?usp=sharing"},r.a.createElement("i",{className:"fa fa-file-text","aria-hidden":"true"}))))},U=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement(I,null),r.a.createElement("span",{className:"footer_copyright"},"Made with ",r.a.createElement("i",{className:"fa fa-heart"})," by Eric Smith"))},A=(a(15),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement(h,{open:a,setOpen:c}),r.a.createElement(k,null),r.a.createElement(w,null),r.a.createElement(L,null),r.a.createElement(x,null),r.a.createElement(U,null))});o.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c7789253.chunk.js.map