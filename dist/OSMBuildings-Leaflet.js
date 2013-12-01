var OSMBuildings=function(){function Oa(a,c){var b=a.x-c.x,d=a.y-c.y;return b*b+d*d}function wa(a,c){var b={};a/=V;c/=V;b[ub]=0>=c?90:1<=c?-90:Pa*(2*vb(wb(J*(1-2*c)))-O);b[xb]=360*(1===a?1:(a%1+1)%1)-180;return b}function Qa(a,c,b){function d(a){if("XDomainRequest"in ga&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return c[b]||a});var e="XDomainRequest"in ga?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=
500;e.statusText="Error";d(4)};e.ontimeout=function(){e.status=408;e.statusText="Timeout";d(4)};e.onprogress=function(){d(3)};e.onload=function(){e.status=200;e.statusText="Ok";d(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};d(0);e.open("GET",a);d(1);e.send(null);d(2);return e}function W(){X.render();ha.render();Ra()}function Ra(){l.clearRect(0,0,z,y);if(!(D<ia||Y)){var a,c,b,d,e,g,f,h=ha.MAX_HEIGHT,
k={x:Z+t,y:$+v},u=t,j=t+z,r=v,m=v+y,n,q,s,p,ja;x.sort(function(a,b){return a.minHeight-b.minHeight||Oa(b.center,k)-Oa(a.center,k)||b.height-a.height});a=0;for(c=x.length;a<c;a++)if(e=x[a],!(e.height+e.roofHeight<=h)){g=!1;n=e.footprint;b=0;for(d=n.length-1;b<d;b+=2)g||(g=n[b]>u&&n[b]<j&&n[b+1]>r&&n[b+1]<m);if(g)if(b=1>e.scale?e.height*e.scale:e.height,g=E/(E-b),f=d=0,e.minHeight&&(d=1>e.scale?e.minHeight*e.scale:e.minHeight,f=E/(E-d)),s=e.wallColor||xa,p=e.altColor||ka,ja=e.roofColor||aa,l.strokeStyle=
p,"cylinder"===e.shape)n=Sa({x:e.center.x-t,y:e.center.y-v},e.radius,b,d,s,p),"cylinder"===e.roofShape&&(n=Sa({x:e.center.x-t,y:e.center.y-v},e.radius,b+e.roofHeight,b,ja)),l.fillStyle=ja,e=n.c,g=n.r,l.beginPath(),l.arc(e.x,e.y,g,0,2*J),l.stroke(),l.fill();else{n=Ta(n,g,f,s,p);q=[];if(e.holes){b=0;for(d=e.holes.length;b<d;b++)q[b]=Ta(e.holes[b],g,f,s,p)}l.fillStyle=ja;Ua(n,!0,q)}}}}function Ta(a,c,b,d,e){for(var g={x:0,y:0},f={x:0,y:0},h,k,u=[],j=0,r=a.length-3;j<r;j+=2)g.x=a[j]-t,g.y=a[j+1]-v,f.x=
a[j+2]-t,f.y=a[j+3]-v,h=P(g.x,g.y,c),k=P(f.x,f.y,c),b&&(g=P(g.x,g.y,b),f=P(f.x,f.y,b)),(f.x-g.x)*(h.y-g.y)>(h.x-g.x)*(f.y-g.y)&&(l.fillStyle=g.x<f.x&&g.y<f.y||g.x>f.x&&g.y>f.y?e:d,Ua([f.x,f.y,g.x,g.y,h.x,h.y,k.x,k.y])),u[j]=h.x,u[j+1]=h.y;return u}function Ua(a,c,b){if(a.length){var d,e,g,f;l.beginPath();l.moveTo(a[0],a[1]);d=2;for(e=a.length;d<e;d+=2)l.lineTo(a[d],a[d+1]);if(b){d=0;for(e=b.length;d<e;d++){a=b[d];l.moveTo(a[0],a[1]);g=2;for(f=a.length;g<f;g+=2)l.lineTo(a[g],a[g+1])}}l.closePath();
c&&l.stroke();l.fill()}}function P(a,c,b){return{x:(a-Z)*b+Z<<0,y:(c-$)*b+$<<0}}function Sa(a,c,b,d,e,g){var f=E/(E-b);b=P(a.x,a.y,f);var f=c*f,h;d&&(d=E/(E-d),a=P(a.x,a.y,d),c*=d);if(h=Va(a,c,b,f))d=la(h[0].y1-a.y,h[0].x1-a.x),h=la(h[1].y1-a.y,h[1].x1-a.x),g||(g=H.parse(e),g=""+g.setLightness(0.8)),l.fillStyle=e,l.beginPath(),l.arc(b.x,b.y,f,O,d,!0),l.arc(a.x,a.y,c,d,O),l.closePath(),l.fill(),l.fillStyle=g,l.beginPath(),l.arc(b.x,b.y,f,h,O,!0),l.arc(a.x,a.y,c,O,h),l.closePath(),l.fill();return{c:b,
r:f}}function Va(a,c,b,d){var e=a.x-b.x,g=a.y-b.y,f=c-d,h=e*e+g*g;if(!(h<=f*f)){var h=Wa(h),e=-e/h,g=-g/h,f=f/h,h=[],k,u,j;k=Wa(Q(0,1-f*f));for(var r=1;-1<=r;r-=2)u=e*f-r*k*g,j=g*f+r*k*e,h.push({x1:a.x+c*u<<0,y1:a.y+c*j<<0,x2:b.x+d*u<<0,y2:b.y+d*j<<0});return h}}function ya(a){Z=ma+a.x;$=y+a.y}function Xa(a){z=a.w;y=a.h;ma=z/2<<0;Ya=y/2<<0;Z=ma;$=y;K.setSize(z,y);za=E-50}function Za(a){D=a;V=yb<<D;a=D;var c=ia,b=Aa;a=ba(Q(a,c),b);A=1-ba(Q(0+0.3*((a-c)/(b-c)),0),0.3);xa=I.setAlpha(A)+"";ka=na.setAlpha(A)+
"";aa=R.setAlpha(A)+""}var $a=$a||Array,ab=ab||Array,p=Math,wb=p.exp,zb=p.log,Ab=p.sin,Bb=p.cos,bb=p.tan,vb=p.atan,la=p.atan2,ba=p.min,Q=p.max,Wa=p.sqrt,cb=p.ceil,db=p.floor,Cb=p.round,ga=window,eb=document;ga.console||(ga.console={log:function(){},warn:function(){}});var H,fb=function(a){var c,b,d;if(0===a.s)c=b=d=a.l;else{d=0.5>a.l?a.l*(1+a.s):a.l+a.s-a.l*a.s;var e=2*a.l-d;a.h/=360;c=Ba(e,d,a.h+1/3);b=Ba(e,d,a.h);d=Ba(e,d,a.h-1/3)}return new F(255*c<<0,255*b<<0,255*d<<0,a.a)},Ba=function(a,c,b){0>
b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a},F=function(a,c,b,d){this.r=a;this.g=c;this.b=b;this.a=4>arguments.length?1:d},Db={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",
cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",
floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",
lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",
mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",
seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},Ca=F.prototype;Ca.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};Ca.setLightness=
function(a){var c=F.toHSLA(this);c.l*=a;c.l=Math.min(1,Math.max(0,c.l));return fb(c)};Ca.setAlpha=function(a){return new F(this.r,this.g,this.b,this.a*a)};F.parse=function(a){var c;a+="";a=Db[a]||a;if(~a.indexOf("#")&&(c=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/)))return new F(parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16),c[4]?parseInt(c[4],16)/255:1);if(c=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new F(parseInt(c[1],10),parseInt(c[2],10),parseInt(c[3],10),c[4]?parseFloat(c[5]):
1);if(c=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return fb({h:parseInt(c[1],10),s:parseFloat(c[2]),l:parseFloat(c[3]),a:c[4]?parseFloat(c[5]):1})};F.toHSLA=function(a){var c=a.r/255,b=a.g/255,d=a.b/255,e=Math.max(c,b,d),g=Math.min(c,b,d),f,h=(e+g)/2,k;if(e===g)f=g=0;else{k=e-g;g=0.5<h?k/(2-e-g):k/(e+g);switch(e){case c:f=(b-d)/k+(b<d?6:0);break;case b:f=(d-c)/k+2;break;case d:f=(c-b)/k+4}f/=6}return{h:360*f,s:g,l:h,a:a.a}};H=F;var gb,S=Math,Da=S.PI,w=S.sin,G=S.cos,hb=S.tan,
ib=S.asin,jb=S.atan2,M=Da/180,oa=23.4397*M;gb=function(a,c,b){b=M*-b;c*=M;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=M*(357.5291+0.98560028*a),e=M*(1.9148*w(d)+0.02*w(2*d)+3E-4*w(3*d)),e=d+e+102.9372*M+Da,d=ib(w(0)*G(oa)+G(0)*w(oa)*w(e)),e=jb(w(e)*G(oa)-hb(0)*w(oa),G(e));b=M*(280.16+360.9856235*a)-b-e;return{altitude:ib(w(c)*w(d)+G(c)*G(d)*G(b)),azimuth:jb(w(b),G(b)*w(c)-hb(d)*G(c))-Da/2}};var mb=function(a,c){var b,d,e,g,f=0,h,k;h=0;for(k=a.length-3;h<k;h+=2)b=a[h],d=a[h+1],e=a[h+2],g=a[h+3],
f+=b*g-e*d;if((0<f/2?kb:lb)===c)return a;b=[];for(d=a.length-2;0<=d;d-=2)b.push(a[d],a[d+1]);return b},m={DEFAULT_HEIGHT:5},kb="CW",lb="CCW";m.windOuterPolygon=function(a){return mb(a,kb)};m.windInnerPolygon=function(a){return mb(a,lb)};m.YARD_TO_METER=0.9144;m.FOOT_TO_METER=0.3048;m.INCH_TO_METER=0.0254;m.METERS_PER_LEVEL=3;m.toMeters=function(a){a=""+a;var c=parseFloat(a);return c===a||~a.indexOf("m")?c<<0:~a.indexOf("yd")?c*m.YARD_TO_METER<<0:~a.indexOf("ft")?c*m.FOOT_TO_METER<<0:~a.indexOf("'")?
(a=a.split("'"),a[0]*m.FOOT_TO_METER+a[1]*m.INCH_TO_METER<<0):c<<0};m.getRadius=function(a){for(var c=90,b=-90,d=0,e=a.length;d<e;d+=2)c=ba(c,a[d]),b=Q(b,a[d]);return Cb(6378137*((b-c)/Pa)/2)};var Eb={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},Fb={asphalt:"tar_paper",
bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"};m.getMaterialColor=function(a){a=a.toLowerCase();return"#"===a[0]?
a:Eb[Fb[a]||a]||null};var nb,ob=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},Fa=function(a){if(a){for(var c=[],b,d=0,e=a.length;d<e;d++)b=Ea[a[d]],c.push(b[0],b[1]);c[c.length-2]!==c[0]&&c[c.length-1]!==c[1]&&c.push(c[0],c[1]);if(!(8>c.length))return c}},Gb=function(a,c){for(var b in c)a[b]||(a[b]=c[b]);return a},Ga=function(a,c){var b={},d=a.tags;a.id&&(b.id=a.id);c&&(b.footprint=m.windOuterPolygon(c));d.height&&(b.height=m.toMeters(d.height));
!b.height&&d["building:height"]&&(b.height=m.toMeters(d["building:height"]));!b.height&&d.levels&&(b.height=d.levels*m.METERS_PER_LEVEL<<0);!b.height&&d["building:levels"]&&(b.height=d["building:levels"]*m.METERS_PER_LEVEL<<0);d.min_height&&(b.minHeight=m.toMeters(d.min_height));!b.minHeight&&d["building:min_height"]&&(b.minHeight=m.toMeters(d["building:min_height"]));!b.minHeight&&d.min_level&&(b.minHeight=d.min_level*m.METERS_PER_LEVEL<<0);!b.minHeight&&d["building:min_level"]&&(b.minHeight=d["building:min_level"]*
m.METERS_PER_LEVEL<<0);d["building:material"]&&(b.wallColor=m.getMaterialColor(d["building:material"]));d["building:facade:material"]&&(b.wallColor=m.getMaterialColor(d["building:facade:material"]));d["building:cladding"]&&(b.wallColor=m.getMaterialColor(d["building:cladding"]));d["building:color"]&&(b.wallColor=d["building:color"]);d["building:colour"]&&(b.wallColor=d["building:colour"]);d["roof:material"]&&(b.roofColor=m.getMaterialColor(d["roof:material"]));d["building:roof:material"]&&(b.roofColor=
m.getMaterialColor(d["building:roof:material"]));d["roof:color"]&&(b.roofColor=d["roof:color"]);d["roof:colour"]&&(b.roofColor=d["roof:colour"]);d["building:roof:color"]&&(b.roofColor=d["building:roof:color"]);d["building:roof:colour"]&&(b.roofColor=d["building:roof:colour"]);b.height=b.height||m.DEFAULT_HEIGHT;if("dome"===d["roof:shape"]||"cylinder"===d["building:shape"]||"sphere"===d["building:shape"])b.shape="cylinder",b.radius=m.getRadius(b.footprint),"dome"===d["roof:shape"]&&d["roof:height"]&&
(b.roofShape="cylinder",b.roofHeight=m.toMeters(d["roof:height"]),b.height=Q(0,b.height-b.roofHeight));return b},Ea,ca,pa,qa;nb=function(a,c){Ea={};ca={};pa=[];qa=c;for(var b,d=0,e=a.length;d<e;d++)switch(b=a[d],b.type){case "node":Ea[b.id]=[b.lat,b.lon];break;case "way":if(ob(b)){var g=void 0,g=void 0;if((g=Fa(b.nodes))&&!1!==qa(b))g=Ga(b,g),pa.push(g)}else if(g=b.tags,!g||!g.highway&&!g.railway&&!g.landuse)ca[b.id]=b;break;case "relation":var f=b,h=void 0,k=void 0;b=[];var u=k=void 0,j=void 0,g=
void 0;if(ob(f)&&!("multipolygon"!==f.tags.type&&"building"!==f.tags.type||!1===qa(f))){for(var h=f.members,k=u=void 0,j=[],r=0,l=h.length;r<l;r++)u=h[r],"way"===u.type&&ca[u.ref]&&(!u.role||"outer"===u.role?k=ca[u.ref]:("inner"===u.role||"enclave"===u.role)&&j.push(ca[u.ref]));h=k&&k.tags?{outer:k,inner:j}:void 0;if(h&&(u=Ga(f),k=h.outer))if((j=Fa(k.nodes))&&!1!==qa(k)){k=Ga(k,j);f=0;for(j=h.inner.length;f<j;f++)(g=Fa(h.inner[f].nodes))&&b.push(m.windInnerPolygon(g));b.length&&(k.holes=b);pa.push(Gb(k,
u))}}}return pa};var J=Math.PI,O=J/2,Hb=J/4,Pa=180/J,yb=256,ub="latitude",xb="longitude",z=0,y=0,ma=0,Ya=0,t=0,v=0,D,V,l,I=new H(200,190,180),na=I.setLightness(0.8),R=I.setLightness(1.2),xa=I+"",ka=na+"",aa=R+"",ra,A=1,ia=15,Aa=20,za,Z,$,E=450,Y,Ha=new Date,T={},Ia={add:function(a,c){T[c]={data:a,time:Date.now()}},get:function(a){return T[a]&&T[a].data},purge:function(){Ha.setMinutes(Ha.getMinutes()-5);for(var a in T)T[a].time<Ha&&delete T[a]}},N,Ib=function(a){for(var c=0,b=0,d=0,e=a.length-3;d<
e;d+=2)c+=a[d],b+=a[d+1];a=(a.length-2)/2;return{x:c/a<<0,y:b/a<<0}},pb=function(a){for(var c,b,d=new $a(a.length),e=0,g=a.length-1;e<g;e+=2)c=a[e+1],b=ba(1,Q(0,0.5-zb(bb(Hb+O*a[e]/180))/J/2)),c=(c/360+0.5)*V<<0,b=b*V<<0,d[e]=c,d[e+1]=b;a=d;d=a.length/2;e=new ab(d);g=0;c=d-1;var f,h,k,u=[],j=[],r=[];for(e[g]=e[c]=1;c;){f=0;for(b=g+1;b<c;b++){h=a[2*b];var m=a[2*b+1],n=a[2*g],l=a[2*g+1],q=a[2*c],s=a[2*c+1],p=q-n,t=s-l,v=void 0;if(0!==p||0!==t)v=((h-n)*p+(m-l)*t)/(p*p+t*t),1<v?(n=q,l=s):0<v&&(n+=p*v,
l+=t*v);p=h-n;t=m-l;h=p*p+t*t;h>f&&(k=b,f=h)}2<f&&(e[k]=1,u.push(g),j.push(k),u.push(k),j.push(c));g=u.pop();c=j.pop()}for(b=0;b<d;b++)e[b]&&r.push(a[2*b],a[2*b+1]);d=r;if(!(8>d.length))return d},Jb=function(a){return function(c){c=Ja(c);Ia.add(c,a);da(c,!0)}},Ja=function(a){var c;if(a)if("FeatureCollection"===a.type){a=a.features;var b=sa.each,d,e,g,f,h,k,u=[],j,r,l,n;d=0;for(e=a.length;d<e;d++)if(g=a[d],"Feature"===g.type&&(n={},f=g.geometry,j=g.properties,"LineString"===f.type&&(r=c.length-1,c[0][0]===
c[r][0]&&c[0][1]===c[r][1]&&(c=f.coordinates)),"Polygon"===f.type&&(c=f.coordinates),"MultiPolygon"===f.type&&(c=f.coordinates[0]),c&&!1!==b(g))){r=c[0];h=[];g=0;for(f=r.length;g<f;g++)h.push(r[g][1],r[g][0]);n.id=j.id||[h[0],h[1],j.height,j.minHeight].join();n.footprint=m.windOuterPolygon(h);l=[];g=1;for(f=c.length;g<f;g++){r=c[g];l[g-1]=[];h=0;for(k=r.length;h<k;h++)l[g-1].push(r[h][1],r[h][0]);l[g-1]=m.windInnerPolygon(l[g-1])}l.length&&(n.holes=l);n.height=m.toMeters(j.height)||m.DEFAULT_HEIGHT;
j.minHeight&&(n.minHeight=m.toMeters(j.minHeight));if(j.color||j.wallColor)n.wallColor=j.color||j.wallColor;j.roofColor&&(n.roofColor=j.roofColor);u.push(n)}c=u}else c=a.osm3s?nb(a.elements,sa.each):[];else c=[];return c},da=function(a,c){var b,d,e,g,f=[],h,k,l,j,r,m,n,q,p,t=Aa-D,s=156412/Math.pow(2,D)/1.5;b=0;for(d=a.length;b<d;b++)if(h=a[b],k=h.height>>t,l=h.minHeight>>t,!(l>za)&&(j=pb(h.footprint))){q=[];if(h.holes){e=0;for(g=h.holes.length;e<g;e++)(p=pb(h.holes[e]))&&q.push(p)}g=e=null;if(h.wallColor&&
(r=H.parse(h.wallColor)))e=r.setAlpha(A),g=""+e.setLightness(0.8),e=""+e;m=null;if(h.roofColor&&(r=H.parse(h.roofColor)))m=""+r.setAlpha(A);n=h.roofHeight>>t;k<=l&&0>=n||f.push({id:h.id,footprint:j,height:ba(k,za),minHeight:l,wallColor:e,altColor:g,roofColor:m,roofShape:h.roofShape,roofHeight:n,center:Ib(j),holes:q.length?q:null,shape:h.shape,radius:h.radius/s})}d=0;for(h=f.length;d<h;d++)b=f[d],ea[b.id]||(b.scale=c?0:1,x.push(b),ea[b.id]=1);ra||(ra=setInterval(function(){for(var a,b=!1,c=0,d=x.length;c<
d;c++)a=x[c],1>a.scale&&(a.scale+=0.1,1<a.scale&&(a.scale=1),b=!0);W();b||(clearInterval(ra),ra=null)},33))},fa,Ka,La,ea={},sa={set:function(a){Ka=!0;x=[];ea={};da(La=Ja(a),!0)},load:function(a){fa=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(Ka=!/(.+\{[nesw]\}){4,}/.test(fa))?(x=[],ea={},Qa(fa,{},function(a){da(La=
Ja(a),!0)})):sa.update()},update:function(){x=[];ea={};if(!(15>D))if(Ka)da(La);else if(fa){var a,c,b,d,e=wa(t,v);a=wa(t+z,v+y);var g=0.0075*cb(e.latitude/0.0075),f=0.015*cb(a.longitude/0.015);a=0.0075*db(a.latitude/0.0075);for(e=0.015*db(e.longitude/0.015);a<=g;a+=0.0075)for(c=e;c<=f;c+=0.015)a=parseFloat(a.toFixed(5)),c=parseFloat(c.toFixed(5)),d=a+","+c,(b=Ia.get(d))?da(b):Qa(fa,{n:parseFloat((a+0.0075).toFixed(5)),e:parseFloat((c+0.015).toFixed(5)),s:a,w:c},Jb(d));Ia.purge()}},each:function(){}};
N=sa;var x=[],X,U=function(a,c,b){return{x:a+ta.x*b,y:c+ta.y*b}},q,qb=!0,rb=new H(0,0,0),sb=null,ta={x:0,y:0},Ma={setContext:function(a){q=a;Ma.setDate((new Date).setHours(10))},enable:function(a){qb=!!a},render:function(){var a,c,b;q.clearRect(0,0,z,y);if(qb&&!(D<ia||Y))if(a=wa(t+ma,v+Ya),a=gb(sb,a.latitude,a.longitude),!(0>=a.altitude)){c=1/bb(a.altitude);b=0.4/c;ta.x=Bb(a.azimuth)*c;ta.y=Ab(a.azimuth)*c;rb.a=b;b=rb+"";var d,e,g,f,h,k,l,j,m,p,n,s,w;a=[];c=[];q.fillStyle=b;q.beginPath();b=0;for(d=
x.length;b<d;b++){f=x[b];m=!1;h=f.footprint;j=[];e=0;for(g=h.length-1;e<g;e+=2)j[e]=k=h[e]-t,j[e+1]=l=h[e+1]-v,m||(m=0<k&&k<z&&0<l&&l<y);if(m)if(h=1>f.scale?f.height*f.scale:f.height,k=0,f.minHeight&&(k=1>f.scale?f.minHeight*f.scale:f.minHeight),"cylinder"===f.shape)"cylinder"===f.roofShape&&(h+=f.roofHeight),a.push({shape:f.shape,center:{x:f.center.x-t,y:f.center.y-v},radius:f.radius,h:h,mh:k});else{f=null;e=0;for(g=j.length-3;e<g;e+=2)l=j[e],p=j[e+1],m=j[e+2],n=j[e+3],s=U(l,p,h),w=U(m,n,h),k&&(p=
U(l,p,k),n=U(m,n,k),l=p.x,p=p.y,m=n.x,n=n.y),(m-l)*(s.y-p)>(s.x-l)*(n-p)?(1===f&&q.lineTo(l,p),f=0,e||q.moveTo(l,p),q.lineTo(m,n)):(0===f&&q.lineTo(s.x,s.y),f=1,e||q.moveTo(s.x,s.y),q.lineTo(w.x,w.y));k||c.push(j)}}b=0;for(d=a.length;b<d;b++)if(f=a[b],"cylinder"===f.shape&&(e=f.center,g=f.radius,j=f.mh,h=U(e.x,e.y,f.h),f=k=void 0,j&&(e=U(e.x,e.y,j)),j=Va(e,g,h,g)))k=la(j[0].y1-e.y,j[0].x1-e.x),f=la(j[1].y1-e.y,j[1].x1-e.x),q.moveTo(j[1].x2,j[1].y2),q.arc(h.x,h.y,g,f,k),q.arc(e.x,e.y,g,k,f);q.fill();
q.globalCompositeOperation="destination-out";q.beginPath();b=0;for(d=c.length;b<d;b++){j=c[b];q.moveTo(j[0],j[1]);e=2;for(g=j.length;e<g;e+=2)q.lineTo(j[e],j[e+1]);q.lineTo(j[0],j[1])}b=0;for(d=a.length;b<d;b++)f=a[b],"cylinder"===f.shape&&!f.mh&&(q.moveTo(f.center.x+f.radius,f.center.y),q.arc(f.center.x,f.center.y,f.radius,0,2*J));q.fillStyle="#00ff00";q.fill();q.globalCompositeOperation="source-over"}},setDate:function(a){sb=a;Ma.render()}};X=Ma;var ha,B,tb={MAX_HEIGHT:8,setContext:function(a){B=
a},render:function(){B.clearRect(0,0,z,y);if(!(D<ia||Y)){var a,c,b,d,e,g,f,h,k;B.beginPath();a=0;for(c=x.length;a<c;a++)if(b=x[a],!(b.height+b.roofHeight>tb.MAX_HEIGHT)){k=!1;e=b.footprint;h=[];b=0;for(d=e.length-1;b<d;b+=2)h[b]=g=e[b]-t,h[b+1]=f=e[b+1]-v,k||(k=0<g&&g<z&&0<f&&f<y);if(k){B.moveTo(h[0],h[1]);b=2;for(d=h.length-3;b<d;b+=2)B.lineTo(h[b],h[b+1]);B.closePath()}}B.fillStyle=aa;B.strokeStyle=ka;B.stroke();B.fill()}}};ha=tb;var K,Na=function(){var a=eb.createElement("CANVAS");a.style.webkitTransform=
"translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var c=a.getContext("2d");c.lineCap="round";c.lineJoin="round";c.lineWidth=1;c.mozImageSmoothingEnabled=!1;c.webkitImageSmoothingEnabled=!1;ua.push(a);C.appendChild(a);return c},C=eb.createElement("DIV");C.style.pointerEvents="none";C.style.position="absolute";C.style.left=0;C.style.top=0;var ua=[];X.setContext(Na());ha.setContext(Na());l=Na();K={appendTo:function(a){a.appendChild(C)},
remove:function(){C.parentNode.removeChild(C)},setSize:function(a,c){for(var b=0,d=ua.length;b<d;b++)ua[b].width=a,ua[b].height=c},setPosition:function(a,c){C.style.left=a+"px";C.style.top=c+"px"}};var va=function(a){this.offset={x:0,y:0};a.addLayer(this)},s=va.prototype;s.onAdd=function(a){this.map=a;K.appendTo(a._panes.overlayPane);Aa=a._layersMaxZoom;var c=this.getOffset(),b=a.getPixelOrigin();Xa({w:a._size.x,h:a._size.y});var d=b.y-c.y;t=b.x-c.x;v=d;Za(a._zoom);K.setPosition(-c.x,-c.y);a.on({move:this.onMove,
moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');N.update()};s.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,
moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);K.remove()};s.onMove=function(){var a=this.getOffset();ya({x:this.offset.x-a.x,y:this.offset.y-a.y});Ra()};s.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,c=this.getOffset(),b=a.getPixelOrigin();this.offset=c;K.setPosition(-c.x,-c.y);ya({x:0,y:0});Xa({w:a._size.x,h:a._size.y});
a=b.y-c.y;t=b.x-c.x;v=a;W();N.update()}};s.onZoomStart=function(){Y=!0;W()};s.onZoom=function(){};s.onZoomEnd=function(){var a=this.map,c=this.getOffset(),b=a.getPixelOrigin(),d=b.y-c.y;t=b.x-c.x;v=d;a=a._zoom;Y=!1;Za(a);N.update();W();this.skipMoveEnd=!0};s.onResize=function(){};s.onViewReset=function(){var a=this.getOffset();this.offset=a;K.setPosition(-a.x,-a.y);ya({x:0,y:0})};s.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};s.setStyle=function(a){a=a||{};if(a.color||a.wallColor)I=
H.parse(a.color||a.wallColor),xa=""+I.setAlpha(A),na=I.setLightness(0.8),ka=""+na.setAlpha(A),R=I.setLightness(1.2),aa=""+R.setAlpha(A);a.roofColor&&(R=H.parse(a.roofColor),aa=""+R.setAlpha(A));void 0!==a.shadows&&X.enable(a.shadows);W();return this};s.setDate=function(a){X.setDate(a);return this};s.loadData=function(a){N.load(a);return this};s.setData=function(a){N.set(a);return this};s.each=function(a,c){N.each=function(b){return a.call(c,b)};return this};va.VERSION="0.1.9a";va.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';
return va}();
