(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,a,t){},,,,,function(e){e.exports=[{id:0,image:"images/bugsbunny.jpg",clicked:!1},{id:1,image:"images/daffyduck.png",clicked:!1},{id:2,image:"images/elmerfudd.jpg",clicked:!1},{id:3,image:"images/foghornleghorn.png",clicked:!1},{id:4,image:"images/granny.jpg",clicked:!1},{id:5,image:"images/tweetybird.png",clicked:!1},{id:6,image:"images/yosemitesam.png",clicked:!1},{id:7,image:"images/porkypig.png",clicked:!1},{id:8,image:"images/sylvester.jpg",clicked:!1},{id:9,image:"images/taz.jpg",clicked:!1},{id:10,image:"images/roadrunner.jpg",clicked:!1},{id:11,image:"images/wileecoyote.jpg",clicked:!1}]},,,,function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),n=t(3),r=t.n(n);t(17);var s=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(2);var m=function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"bgJumbo"},i.a.createElement("img",{src:"/images/taz.jpg",alt:"taz",className:"formatPics"}),i.a.createElement("img",{src:"/images/sylvester.jpg",alt:"sylvesterpig",className:"formatPics"}),i.a.createElement("img",{src:"/images/granny.jpg",alt:"granny",className:"formatPics"}),i.a.createElement("img",{src:"/images/tweetybird.png",alt:"tweetybird",className:"formatPics"}),i.a.createElement("img",{src:"/images/elmerfudd.jpg",alt:"elmerfudd",className:"formatPics"}),i.a.createElement("img",{src:"/images/bugsbunny.jpg",alt:"bugsbunny",className:"formatPics"}),i.a.createElement("img",{src:"/images/looneytoonsbackground.jpg",alt:"looneytoons",width:"300",height:"200"}),i.a.createElement("img",{src:"/images/daffyduck.png",alt:"daffyduck",className:"formatPics"}),i.a.createElement("img",{src:"/images/foghornleghorn.png",alt:"foghornleghorn",className:"formatPics"}),i.a.createElement("img",{src:"/images/porkypig.png",alt:"porkypig",className:"formatPics"}),i.a.createElement("img",{src:"/images/roadrunner.jpg",alt:"roadrunner",className:"formatPics"}),i.a.createElement("img",{src:"/images/wileecoyote.jpg",alt:"wileecoyote",className:"formatPics"}),i.a.createElement("img",{src:"/images/yosemitesam.png",alt:"porkypig",className:"formatPics"}))};t(18);var l=function(){return i.a.createElement("div",{className:"container container-fluid"},i.a.createElement("div",{className:"card-header text-white center",id:"bgTitle"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"headerformat"},"Clicky Game"),i.a.createElement("h2",null,"Test Your Memory"),i.a.createElement("h5",null,"Click on an image to earn points, but don't click on any image more than once!"))))},o=t(8),g=t(4),d=t(5),u=t(9),p=t(6),f=t(10),k=(t(19),t(7)),y=12,h=0,E=function(e){function a(){var e,t;Object(g.a)(this,a);for(var c=arguments.length,i=new Array(c),n=0;n<c;n++)i[n]=arguments[n];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(i)))).state={count:0,topScore:0,message:"",pictures:k},t.checkClicks=function(e){var a=parseInt(e.target.id),c=Object(o.a)(t.state.pictures),i="",n=0;c[a].clicked?(i="You Lose, Try Again",n=0,c.map(function(e){return e.clicked=!1})):(c[a].clicked=!0,(n=t.state.count+1)===y?(i="Congratulations - You Win!",h=y,n=0,c.map(function(e){return e.clicked=!1})):i="");var r=c.map(function(e){return[Math.random(),e]}).sort(function(e,a){return e[0]-a[0]}).map(function(e){return e[1]});c=r,h<n&&(h=n),t.setState({count:n,pictures:c,message:i,topScore:h})},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"card-text",id:"msgformat"},this.state.message),i.a.createElement("h4",{id:"score"},"Score: ",this.state.count,"/Top Score: ",this.state.topScore),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},this.state.pictures.map(function(a,t){return i.a.createElement("div",{className:"col-md-4",id:"imgBorder",key:a.id},i.a.createElement("img",{src:a.image,alt:"",width:215,height:215,id:t,onClick:e.checkClicks}))}))))}}]),a}(i.a.Component);var b=function(){return i.a.createElement(s,null,i.a.createElement(m,null),i.a.createElement(l,null),i.a.createElement(E,null))};r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.731477b3.chunk.js.map