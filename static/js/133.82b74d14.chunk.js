"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133],{4377:function(t,n,e){e.d(n,{Df:function(){return i},Oy:function(){return f},V0:function(){return u},dB:function(){return a},l$:function(){return s}});var c=e(4569),o=e.n(c);o().defaults.baseURL="https://api.themoviedb.org/3/";var r="4011fa8e17c3cf2b74c3654f226f8a87",i=function(){return o().get("trending/movie/week?api_key=".concat(r))},a=function(t){return o().get("movie/".concat(t,"?api_key=").concat(r))},s=function(t){return o().get("movie/".concat(t,"/credits?api_key=").concat(r))},f=function(t){return o().get("movie/".concat(t,"/reviews?api_key=").concat(r))},u=function(t){return o().get("search/movie?api_key=".concat(r,"&query=").concat(t))}},3133:function(t,n,e){e.r(n),e.d(n,{Home:function(){return w}});var c,o,r,i,a,s=e(885),f=e(2791),u=e(4377),l=e(470),p=e(168),d=e(3842),h=e(6731),v=d.Z.div(c||(c=(0,p.Z)(["\n\tdisplay: contents;\n\ttext-align: center;\n\talign-items: center;\n"]))),g=d.Z.h1(o||(o=(0,p.Z)(["\n\tcolor: #fdfdfd;\n\ttext-shadow: 4px 4px 4px #c7c7c7;\n"]))),m=d.Z.ul(r||(r=(0,p.Z)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tgap: 30px;\n"]))),x=(0,d.Z)(h.rU)(i||(i=(0,p.Z)(["\n\tcolor: white;\n\ttext-decoration: none;\n\t&.active {\n\t\tborder-bottom: solid 3px #00ffff;\n\t\tcolor: #099fff;\n\t}\n\t:hover:not(.active) {\n\t\tcolor: #099fff;\n\t}\n"]))),k=d.Z.img(a||(a=(0,p.Z)(["\n\tdisplay: block;\n\twidth: 250px;\n\theight: 400px;\n"]))),_=e(184),w=function(){var t=(0,f.useState)(null),n=(0,s.Z)(t,2),e=n[0],c=n[1],o=(0,l.TH)();return(0,f.useEffect)((function(){(0,u.Df)().then((function(t){var n=t.data;c(n.results),console.log(n.results)}))}),[]),(0,_.jsxs)(v,{children:[(0,_.jsx)(g,{children:"Trending Today"}),(0,_.jsx)(m,{children:e&&e.map((function(t){var n=t.id,e=t.poster_path,c=t.title,r=e?"http://image.tmdb.org/t/p/w500".concat(e):"https://socialvk.ru/800/600/https/mapsrb.ru/magistration/img/2432-oshibka-4-vk.jpg";return(0,_.jsx)(x,{to:"movies/".concat(n),state:{from:o},children:(0,_.jsxs)("li",{children:[(0,_.jsx)(k,{src:r,alt:c}),(0,_.jsx)("p",{children:c})]})},e)}))})]})}}}]);
//# sourceMappingURL=133.82b74d14.chunk.js.map