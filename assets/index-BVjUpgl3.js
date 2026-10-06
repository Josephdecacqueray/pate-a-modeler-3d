(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="170",As={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,Xl=1,Zu=2,qh=1,Xh=2,fi=3,Jn=0,_n=1,Kn=2,cn=0,Cs=1,Ra=2,jl=3,Yl=4,jh=5,mi=100,$u=101,Ju=102,Qu=103,td=104,Pa=200,ed=201,nd=202,id=203,La=204,Ia=205,Yh=206,sd=207,Kh=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,Da=0,Na=1,Ua=2,Is=3,Fa=4,Ba=5,Oa=6,ka=7,wo=0,ud=1,dd=2,Ui=0,Zh=1,$h=2,Jh=3,bl=4,fd=5,Qh=6,tu=7,Kl="attached",pd="detached",eu=300,Ds=301,Ns=302,za=303,Ga=304,To=306,gn=1e3,Gn=1001,Va=1002,hn=1003,md=1004,Ar=1005,bn=1006,Oo=1007,_i=1008,Mi=1009,nu=1010,iu=1011,pr=1012,Sl=1013,Qi=1014,Vn=1015,Wn=1016,El=1017,wl=1018,ts=1020,su=35902,ru=1021,ou=1022,Rn=1023,au=1024,lu=1025,Rs=1026,es=1027,Tl=1028,Al=1029,cu=1030,Cl=1031,Rl=1033,ho=33776,uo=33777,fo=33778,po=33779,Ha=35840,Wa=35841,qa=35842,Xa=35843,ja=36196,Ya=37492,Ka=37496,Za=37808,$a=37809,Ja=37810,Qa=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,ol=37818,al=37819,ll=37820,cl=37821,mo=36492,hl=36494,ul=36495,hu=36283,dl=36284,fl=36285,pl=36286,_o=2300,ml=2301,ko=2302,Zl=2400,$l=2401,Jl=2402,gd=2500,_d=3200,vd=3201,gr=0,xd=1,Ni="",Pe="srgb",Vs="srgb-linear",Ao="linear",we="srgb",ls=7680,Ql=519,yd=512,Md=513,bd=514,uu=515,Sd=516,Ed=517,wd=518,Td=519,tc=35044,ec="300 es",vi=2e3,vo=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const cr=Math.PI/180,Us=180/Math.PI;function Oi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function en(r,t,e){return Math.max(t,Math.min(e,r))}function Pl(r,t){return(r%t+t)%t}function Ad(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Cd(r,t,e){return r!==t?(e-r)/(t-r):0}function hr(r,t,e){return(1-e)*r+e*t}function Rd(r,t,e,n){return hr(r,t,1-Math.exp(-e*n))}function Pd(r,t=1){return t-Math.abs(Pl(r,t*2)-t)}function Ld(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Id(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Dd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Nd(r,t){return r+Math.random()*(t-r)}function Ud(r){return r*(.5-Math.random())}function Fd(r){r!==void 0&&(nc=r);let t=nc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bd(r){return r*cr}function Od(r){return r*Us}function kd(r){return(r&r-1)===0&&r!==0}function zd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Gd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Vd(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),u=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*d,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*d,a*c);break;case"ZXZ":r.set(l*d,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Es(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function an(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mn={DEG2RAD:cr,RAD2DEG:Us,generateUUID:Oi,clamp:en,euclideanModulo:Pl,mapLinear:Ad,inverseLerp:Cd,lerp:hr,damp:Rd,pingpong:Pd,smoothstep:Ld,smootherstep:Id,randInt:Dd,randFloat:Nd,randFloatSpread:Ud,seededRandom:Fd,degToRad:Bd,radToDeg:Od,isPowerOfTwo:kd,ceilPowerOfTwo:zd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Vd,normalize:an,denormalize:Es};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,e,n,i,s,o,a,l,c){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],D=i[2],C=i[5],I=i[8];return s[0]=o*_+a*v+l*D,s[3]=o*m+a*y+l*C,s[6]=o*p+a*x+l*I,s[1]=c*_+h*v+d*D,s[4]=c*m+h*y+d*C,s[7]=c*p+h*x+d*I,s[2]=u*_+f*v+g*D,s[5]=u*m+f*y+g*C,s[8]=u*p+f*x+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new le;function du(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hd(){const r=mr("canvas");return r.style.display="block",r}const ic={};function ar(r){r in ic||(ic[r]=!0,console.warn(r))}function Wd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qd(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ce={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?Ao:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const sc=[.64,.33,.3,.6,.15,.06],rc=[.2126,.7152,.0722],oc=[.3127,.329],ac=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[Vs]:{primaries:sc,whitePoint:oc,transfer:Ao,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:rc,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:sc,whitePoint:oc,transfer:we,toXYZ:ac,fromXYZ:lc,luminanceCoefficients:rc,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});let cs;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=mr("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yd=0;class fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Go(i[o].image)):s.push(Go(i[o]))}else s=Go(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Go(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;class Je extends ns{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Gn,i=Gn,s=bn,o=_i,a=Rn,l=Mi,c=Je.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Oi(),this.name="",this.source=new fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case Gn:t.x=t.x<0?0:1;break;case Va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case Gn:t.y=t.y<0?0:1;break;case Va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=eu;Je.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,D=(p+1)/2,C=(h+u)/4,I=(d+_)/4,N=(g+m)/4;return y>x&&y>D?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=I/n):x>D?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=C/i,s=N/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=I/s,i=N/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pu extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let bi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-a;const p=l*u+c*f+h*g+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),C=Math.atan2(D,p*v);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const x=a*v;if(l=l*m+u*x,c=c*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vo.copy(this).projectOnVector(t),this.sub(Vo)}reflect(t){return this.sub(Vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new k,cc=new bi;class Fi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Rr.subVectors(this.max,$s),hs.subVectors(t.a,$s),us.subVectors(t.b,$s),ds.subVectors(t.c,$s),Ti.subVectors(us,hs),Ai.subVectors(ds,us),Gi.subVectors(hs,ds);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-Gi.z,Gi.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,Gi.z,0,-Gi.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-Gi.y,Gi.x,0];return!Ho(e,hs,us,ds,Rr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,hs,us,ds,Rr))?!1:(Pr.crossVectors(Ti,Ai),e=[Pr.x,Pr.y,Pr.z],Ho(e,hs,us,ds,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new k,new k,new k,new k,new k,new k,new k,new k],Fn=new k,Cr=new Fi,hs=new k,us=new k,ds=new k,Ti=new k,Ai=new k,Gi=new k,$s=new k,Rr=new k,Pr=new k,Vi=new k;function Ho(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Vi.fromArray(r,s);const a=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=n.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jd=new Fi,Js=new k,Wo=new k;let is=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);const e=Js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(Wo)),this.expandByPoint(Js.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const ii=new k,qo=new k,Lr=new k,Ci=new k,Xo=new k,Ir=new k,jo=new k;let Hs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qo.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(qo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=Ci.dot(this.direction),l=-Ci.dot(Lr),c=Ci.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(qo).addScaledVector(Lr,u),f}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,s){Xo.subVectors(e,t),Ir.subVectors(n,t),jo.crossVectors(Xo,Ir);let o=this.direction.dot(jo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Ir.crossVectors(Ci,Ir));if(l<0)return null;const c=a*this.direction.dot(Xo.cross(Ci));if(c<0||l+c>o)return null;const h=-a*Ci.dot(jo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class te{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fs.setFromMatrixColumn(t,0).length(),s=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,tf)}lookAt(t,e,n){const i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ri.crossVectors(n,xn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ri.crossVectors(n,xn)),Ri.normalize(),Dr.crossVectors(xn,Ri),i[0]=Ri.x,i[4]=Dr.x,i[8]=xn.x,i[1]=Ri.y,i[5]=Dr.y,i[9]=xn.y,i[2]=Ri.z,i[6]=Dr.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],D=n[15],C=i[0],I=i[4],N=i[8],E=i[12],b=i[1],U=i[5],G=i[9],O=i[13],z=i[2],H=i[6],F=i[10],$=i[14],V=i[3],Z=i[7],ct=i[11],ht=i[15];return s[0]=o*C+a*b+l*z+c*V,s[4]=o*I+a*U+l*H+c*Z,s[8]=o*N+a*G+l*F+c*ct,s[12]=o*E+a*O+l*$+c*ht,s[1]=h*C+d*b+u*z+f*V,s[5]=h*I+d*U+u*H+f*Z,s[9]=h*N+d*G+u*F+f*ct,s[13]=h*E+d*O+u*$+f*ht,s[2]=g*C+_*b+m*z+p*V,s[6]=g*I+_*U+m*H+p*Z,s[10]=g*N+_*G+m*F+p*ct,s[14]=g*E+_*O+m*$+p*ht,s[3]=v*C+y*b+x*z+D*V,s[7]=v*I+y*U+x*H+D*Z,s[11]=v*N+y*G+x*F+D*ct,s[15]=v*E+y*O+x*$+D*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,y=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,x=h*_*c-g*d*c+g*a*f-o*_*f-h*a*p+o*d*p,D=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,C=e*v+n*y+i*x+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return t[0]=v*I,t[1]=(_*u*s-d*m*s-_*i*f+n*m*f+d*i*p-n*u*p)*I,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*I,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*I,t[4]=y*I,t[5]=(h*m*s-g*u*s+g*i*f-e*m*f-h*i*p+e*u*p)*I,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*I,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*I,t[8]=x*I,t[9]=(g*d*s-h*_*s-g*n*f+e*_*f+h*n*p-e*d*p)*I,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*I,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*I,t[12]=D*I,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*I,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*I,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,g=s*d,_=o*h,m=o*d,p=a*d,v=l*c,y=l*h,x=l*d,D=n.x,C=n.y,I=n.z;return i[0]=(1-(_+p))*D,i[1]=(f+x)*D,i[2]=(g-y)*D,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(u+p))*C,i[6]=(m+v)*C,i[7]=0,i[8]=(g+y)*I,i[9]=(m-v)*I,i[10]=(1-(u+_))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);const c=1/s,h=1/o,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=vi){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===vi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=vi){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h;let g,_;if(a===vi)g=(o+s)*d,_=-2*d;else if(a===vo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new k,Bn=new te,Qd=new k(0,0,0),tf=new k(1,1,1),Ri=new k,Dr=new k,xn=new k,hc=new te,uc=new bi;class Ln{constructor(t=0,e=0,n=0,i=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ef=0;const dc=new k,ps=new bi,si=new te,Nr=new k,Qs=new k,nf=new k,sf=new bi,fc=new k(1,0,0),pc=new k(0,1,0),mc=new k(0,0,1),gc={type:"added"},rf={type:"removed"},ms={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Fe extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new k,e=new Ln,n=new bi,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new le}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(fc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return dc.copy(t).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Qs,Nr,this.up):si.lookAt(Nr,Qs,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(si),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Fe.DEFAULT_UP=new k(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new k,ri=new k,Ko=new k,oi=new k,gs=new k,_s=new k,_c=new k,Zo=new k,$o=new k,Jo=new k,Qo=new be,ta=new be,ea=new be;class zn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),On.subVectors(t,e),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){On.subVectors(i,e),ri.subVectors(n,e),Ko.subVectors(t,e);const o=On.dot(On),a=On.dot(ri),l=On.dot(Ko),c=ri.dot(ri),h=ri.dot(Ko),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Qo.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qo.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qo,s.x),o.addScaledVector(ta,s.y),o.addScaledVector(ea,s.z),o}static isFrontFacing(t,e,n,i){return On.subVectors(n,e),ri.subVectors(t,e),On.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return zn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(s,n),Zo.subVectors(t,n);const l=gs.dot(Zo),c=_s.dot(Zo);if(l<=0&&c<=0)return e.copy(n);$o.subVectors(t,i);const h=gs.dot($o),d=_s.dot($o);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Jo.subVectors(t,s);const f=gs.dot(Jo),g=_s.dot(Jo);if(g>=0&&f<=g)return e.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_s,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return _c.subVectors(s,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(_c,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function na(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Pl(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=na(o,s,t+1/3),this.g=na(o,s,t),this.b=na(o,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ce.fromWorkingColorSpace(tn.copy(this),t),Math.round(en(tn.r*255,0,255))*65536+Math.round(en(tn.g*255,0,255))*256+Math.round(en(tn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,s=tn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Pe){ce.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,i=tn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Ur);const n=hr(Pi.h,Ur.h,e),i=hr(Pi.s,Ur.s,e),s=hr(Pi.l,Ur.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Yt;Yt.NAMES=mu;let of=0,In=class extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Oi(),this.name="",this.blending=Cs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Bi extends In{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new k,Fr=new It;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tc&&(t.usage=this.usage),t}}class gu extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _u extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let af=0;const Tn=new te,ia=new Fe,vs=new k,yn=new Fi,tr=new Fi,Ke=new k;class $e extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(du(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new le().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(yn.min,tr.min),yn.expandByPoint(Ke),Ke.addVectors(yn.max,tr.max),yn.expandByPoint(Ke)):(yn.expandByPoint(tr.min),yn.expandByPoint(tr.max))}yn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ke.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(t,c),Ke.add(vs)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new k,l[N]=new k;const c=new k,h=new k,d=new k,u=new It,f=new It,g=new It,_=new k,m=new k;function p(N,E,b){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),u.fromBufferAttribute(s,N),f.fromBufferAttribute(s,E),g.fromBufferAttribute(s,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[N].add(_),a[E].add(_),a[b].add(_),l[N].add(m),l[E].add(m),l[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let N=0,E=v.length;N<E;++N){const b=v[N],U=b.start,G=b.count;for(let O=U,z=U+G;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new k,x=new k,D=new k,C=new k;function I(N){D.fromBufferAttribute(i,N),C.copy(D);const E=a[N];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),x.crossVectors(C,E);const U=x.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,U)}for(let N=0,E=v.length;N<E;++N){const b=v[N],U=b.start,G=b.count;for(let O=U,z=U+G;O<z;O+=3)I(t.getX(O+0)),I(t.getX(O+1)),I(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Pn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vc=new te,Hi=new Hs,Br=new is,xc=new k,Or=new k,kr=new k,zr=new k,sa=new k,Gr=new k,yc=new k,Vr=new k;class Qt extends Fe{constructor(t=new $e,e=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(sa.fromBufferAttribute(d,t),o?Gr.addScaledVector(sa,h):Gr.addScaledVector(sa.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Hi.copy(t.ray).recast(t.near),!(Br.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Br,xc)===null||Hi.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(vc.copy(s).invert(),Hi.copy(t.ray).applyMatrix4(vc),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,D=y;x<D;x+=3){const C=a.getX(x),I=a.getX(x+1),N=a.getX(x+2);i=Hr(this,p,t,n,c,h,d,C,I,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Hr(this,o,t,n,c,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,D=y;x<D;x+=3){const C=x,I=x+1,N=x+2;i=Hr(this,p,t,n,c,h,d,C,I,N),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=Hr(this,o,t,n,c,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function lf(r,t,e,n,i,s,o,a){let l;if(t.side===_n?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Jn,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Vr);return c<e.near||c>e.far?null:{distance:c,point:Vr.clone(),object:r}}function Hr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Or),r.getVertexPosition(l,kr),r.getVertexPosition(c,zr);const h=lf(r,t,e,n,Or,kr,zr,yc);if(h){const d=new k;zn.getBarycoord(yc,Or,kr,zr,d),i&&(h.uv=zn.getInterpolatedAttribute(i,a,l,c,d,new It)),s&&(h.uv1=zn.getInterpolatedAttribute(s,a,l,c,d,new It)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,l,c,d,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new k,materialIndex:0};zn.getNormal(Or,kr,zr,u.normal),h.face=u,h.barycoord=d}return h}class Zn extends $e{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(_,m,p,v,y,x,D,C,I,N,E){const b=x/I,U=D/N,G=x/2,O=D/2,z=C/2,H=I+1,F=N+1;let $=0,V=0;const Z=new k;for(let ct=0;ct<F;ct++){const ht=ct*U-O;for(let ot=0;ot<H;ot++){const _t=ot*b-G;Z[_]=_t*v,Z[m]=ht*y,Z[p]=z,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=C>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ot/I),d.push(1-ct/N),$+=1}}for(let ct=0;ct<N;ct++)for(let ht=0;ht<I;ht++){const ot=u+ht+H*ct,_t=u+ht+H*(ct+1),Y=u+(ht+1)+H*(ct+1),J=u+(ht+1)+H*ct;l.push(ot,_t,J),l.push(_t,Y,J),V+=6}a.addGroup(f,V,E),f+=V,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ln(r){const t={};for(let e=0;e<r.length;e++){const n=Fs(r[e]);for(const i in n)t[i]=n[i]}return t}function cf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function vu(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const xi={clone:Fs,merge:ln};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends In{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new k,Mc=new It,bc=new It;class nn extends xu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Mc,bc),e.subVectors(bc,Mc)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,ys=1;class df extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new nn(xs,ys,t,e);i.layers=this.layers,this.add(i);const s=new nn(xs,ys,t,e);s.layers=this.layers,this.add(s);const o=new nn(xs,ys,t,e);o.layers=this.layers,this.add(o);const a=new nn(xs,ys,t,e);a.layers=this.layers,this.add(a);const l=new nn(xs,ys,t,e);l.layers=this.layers,this.add(l);const c=new nn(xs,ys,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yu extends Je{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zn(5,5,5),s=new We({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:cn});s.uniforms.tEquirect.value=e;const o=new Qt(i,s),a=e.minFilter;return e.minFilter===_i&&(e.minFilter=bn),new df(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ra=new k,pf=new k,mf=new le;let pi=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ra.subVectors(n,e).cross(pf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ra),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mf.getNormalMatrix(t),i=this.coplanarPoint(ra).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Wi=new is,Wr=new k;class Il{constructor(t=new pi,e=new pi,n=new pi,i=new pi,s=new pi,o=new pi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,u-c,m-f,x-p).normalize(),n[1].setComponents(l+s,u+c,m+f,x+p).normalize(),n[2].setComponents(l+o,u+h,m+g,x+v).normalize(),n[3].setComponents(l-o,u-h,m-g,x-v).normalize(),n[4].setComponents(l-a,u-d,m-_,x-y).normalize(),e===vi)n[5].setComponents(l+a,u+d,m+_,x+y).normalize();else if(e===vo)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gf(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class Bs extends $e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,x=v+c*(p+1),D=v+1+c*(p+1),C=v+1+c*p;f.push(y,x,C),f.push(x,D,C)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Up=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:_f,alphahash_pars_fragment:vf,alphamap_fragment:xf,alphamap_pars_fragment:yf,alphatest_fragment:Mf,alphatest_pars_fragment:bf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:wf,batching_vertex:Tf,begin_vertex:Af,beginnormal_vertex:Cf,bsdfs:Rf,iridescence_fragment:Pf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Uf,color_fragment:Ff,color_pars_fragment:Bf,color_pars_vertex:Of,color_vertex:kf,common:zf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Wf,emissivemap_fragment:qf,emissivemap_pars_fragment:Xf,colorspace_fragment:jf,colorspace_pars_fragment:Yf,envmap_fragment:Kf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:$f,envmap_pars_vertex:Jf,envmap_physical_pars_fragment:cp,envmap_vertex:Qf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:bp,map_fragment:Sp,map_pars_fragment:Ep,map_particle_fragment:wp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Rp,morphcolor_vertex:Pp,morphnormal_vertex:Lp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Dp,normal_fragment_begin:Np,normal_fragment_maps:Up,normal_pars_fragment:Fp,normal_pars_vertex:Bp,normal_vertex:Op,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Hp,opaque_fragment:Wp,packing:qp,premultiplied_alpha_fragment:Xp,project_vertex:jp,dithering_fragment:Yp,dithering_pars_fragment:Kp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:dm,uv_pars_vertex:fm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:vm,backgroundCube_frag:xm,cube_vert:ym,cube_frag:Mm,depth_vert:bm,depth_frag:Sm,distanceRGBA_vert:Em,distanceRGBA_frag:wm,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Cm,linedashed_frag:Rm,meshbasic_vert:Pm,meshbasic_frag:Lm,meshlambert_vert:Im,meshlambert_frag:Dm,meshmatcap_vert:Nm,meshmatcap_frag:Um,meshnormal_vert:Fm,meshnormal_frag:Bm,meshphong_vert:Om,meshphong_frag:km,meshphysical_vert:zm,meshphysical_frag:Gm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Wm,points_frag:qm,shadow_vert:Xm,shadow_frag:jm,sprite_vert:Ym,sprite_frag:Km},Mt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Yn={basic:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:ln([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:ln([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:ln([Mt.points,Mt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:ln([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:ln([Mt.common,Mt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:ln([Mt.sprite,Mt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:ln([Mt.common,Mt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:ln([Mt.lights,Mt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Yn.physical={uniforms:ln([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const qr={r:0,b:0,g:0},qi=new Ln,Zm=new te;function $m(r,t,e,n,i,s,o){const a=new Yt(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===To)?(h===void 0&&(h=new Qt(new Zn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Fs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(qi)),h.material.toneMapped=ce.getTransfer(x.colorSpace)!==we,(d!==x||u!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Qt(new Bs(2,2),new We({name:"BackgroundMaterial",uniforms:Fs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==we,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(qr,vu(r)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m}}function Jm(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,o=!1;function a(b,U,G,O,z){let H=!1;const F=d(O,G,U);s!==F&&(s=F,c(s.object)),H=f(b,O,G,z),H&&g(b,O,G,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(b,U,G,O),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function d(b,U,G){const O=G.wireframe===!0;let z=n[b.id];z===void 0&&(z={},n[b.id]=z);let H=z[U.id];H===void 0&&(H={},z[U.id]=H);let F=H[O];return F===void 0&&(F=u(l()),H[O]=F),F}function u(b){const U=[],G=[],O=[];for(let z=0;z<e;z++)U[z]=0,G[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,U,G,O){const z=s.attributes,H=U.attributes;let F=0;const $=G.getAttributes();for(const V in $)if($[V].location>=0){const ct=z[V];let ht=H[V];if(ht===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor)),ct===void 0||ct.attribute!==ht||ht&&ct.data!==ht.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function g(b,U,G,O){const z={},H=U.attributes;let F=0;const $=G.getAttributes();for(const V in $)if($[V].location>=0){let ct=H[V];ct===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor));const ht={};ht.attribute=ct,ct&&ct.data&&(ht.data=ct.data),z[V]=ht,F++}s.attributes=z,s.attributesNum=F,s.index=O}function _(){const b=s.newAttributes;for(let U=0,G=b.length;U<G;U++)b[U]=0}function m(b){p(b,0)}function p(b,U){const G=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;G[b]=1,O[b]===0&&(r.enableVertexAttribArray(b),O[b]=1),z[b]!==U&&(r.vertexAttribDivisor(b,U),z[b]=U)}function v(){const b=s.newAttributes,U=s.enabledAttributes;for(let G=0,O=U.length;G<O;G++)U[G]!==b[G]&&(r.disableVertexAttribArray(G),U[G]=0)}function y(b,U,G,O,z,H,F){F===!0?r.vertexAttribIPointer(b,U,G,z,H):r.vertexAttribPointer(b,U,G,O,z,H)}function x(b,U,G,O){_();const z=O.attributes,H=G.getAttributes(),F=U.defaultAttributeValues;for(const $ in H){const V=H[$];if(V.location>=0){let Z=z[$];if(Z===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(Z=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(Z=b.instanceColor)),Z!==void 0){const ct=Z.normalized,ht=Z.itemSize,ot=t.get(Z);if(ot===void 0)continue;const _t=ot.buffer,Y=ot.type,J=ot.bytesPerElement,st=Y===r.INT||Y===r.UNSIGNED_INT||Z.gpuType===Sl;if(Z.isInterleavedBufferAttribute){const it=Z.data,gt=it.stride,Dt=Z.offset;if(it.isInstancedInterleavedBuffer){for(let qt=0;qt<V.locationSize;qt++)p(V.location+qt,it.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let qt=0;qt<V.locationSize;qt++)m(V.location+qt);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let qt=0;qt<V.locationSize;qt++)y(V.location+qt,ht/V.locationSize,Y,ct,gt*J,(Dt+ht/V.locationSize*qt)*J,st)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)p(V.location+it,Z.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);r.bindBuffer(r.ARRAY_BUFFER,_t);for(let it=0;it<V.locationSize;it++)y(V.location+it,ht/V.locationSize,Y,ct,ht*J,ht/V.locationSize*it*J,st)}}else if(F!==void 0){const ct=F[$];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(V.location,ct);break;case 3:r.vertexAttrib3fv(V.location,ct);break;case 4:r.vertexAttrib4fv(V.location,ct);break;default:r.vertexAttrib1fv(V.location,ct)}}}}v()}function D(){N();for(const b in n){const U=n[b];for(const G in U){const O=U[G];for(const z in O)h(O[z].object),delete O[z];delete U[G]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const G in U){const O=U[G];for(const z in O)h(O[z].object),delete O[z];delete U[G]}delete n[b.id]}function I(b){for(const U in n){const G=n[U];if(G[b.id]===void 0)continue;const O=G[b.id];for(const z in O)h(O[z].object),delete O[z];delete G[b.id]}}function N(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Qm(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(I){return!(I!==Rn&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const N=I===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Mi&&n.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vn&&!N)}function l(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:D,maxSamples:C}}function eg(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new pi,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=h(g,u,y,f);for(let D=0;D!==y;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ng(r){let t=new WeakMap;function e(o,a){return a===za?o.mapping=Ds:a===Ga&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ff(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Co extends xu{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ts=4,Sc=[.125,.215,.35,.446,.526,.582],Zi=20,oa=new Co,Ec=new Yt;let aa=null,la=0,ca=0,ha=!1;const Ki=(1+Math.sqrt(5))/2,Ms=1/Ki,wc=[new k(-Ki,Ms,0),new k(Ki,Ms,0),new k(-Ms,0,Ki),new k(Ms,0,Ki),new k(0,Ki,-Ms),new k(0,Ki,Ms),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ha,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Wn,format:Rn,colorSpace:Vs,depthBuffer:!1},i=Ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,i){const a=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Ec),h.toneMapping=Ui,h.autoClear=!1;const f=new Bi({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Qt(new Zn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Ec),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Xr(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ds||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Xr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wc[(i-s-1)%wc.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let v=0;for(let I=0;I<Zi;++I){const N=I/_,E=Math.exp(-N*N/2);p.push(E),I===0?v+=E:I<m&&(v+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],D=3*x*(i>y-Ts?i-y+Ts:0),C=4*(this._cubeSize-x);Xr(e,D,C,3*x,2*x),l.setRenderTarget(e),l.render(d,oa)}}function ig(r){const t=[],e=[],n=[];let i=r;const s=r-Ts+1+Sc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ts?l=Sc[o-r+Ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let C=0;C<f;C++){const I=C%3*2/3-1,N=C>2?0:-1,E=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];v.set(E,_*g*C),y.set(u,m*g*C);const b=[C,C,C,C,C,C];x.set(b,p*g*C)}const D=new $e;D.setAttribute("position",new Pn(v,_)),D.setAttribute("uv",new Pn(y,m)),D.setAttribute("faceIndex",new Pn(x,p)),t.push(D),i>Ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ac(r,t,e){const n=new Sn(r,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sg(r,t,e){const n=new Float32Array(Zi),i=new k(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Cc(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Rc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===Ga,h=l===Ds||l===Ns;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Tc(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Tc(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function og(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ag(r,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const D=v[y+0],C=v[y+1],I=v[y+2];u.push(D,C,C,I,I,D)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const D=y+0,C=y+1,I=y+2;u.push(D,C,C,I,I,D)}}else return;const m=new(du(u)?_u:gu)(u,1);m.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function lg(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function cg(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hg(r,t,e){const n=new WeakMap,i=new be;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let b=function(){N.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let D=a.attributes.position.count*x,C=1;D>t.maxTextureSize&&(C=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const I=new Float32Array(D*C*4*d),N=new pu(I,D,C,d);N.type=Vn,N.needsUpdate=!0;const E=x*4;for(let U=0;U<d;U++){const G=p[U],O=v[U],z=y[U],H=D*C*4*U;for(let F=0;F<G.count;F++){const $=F*E;g===!0&&(i.fromBufferAttribute(G,F),I[H+$+0]=i.x,I[H+$+1]=i.y,I[H+$+2]=i.z,I[H+$+3]=0),_===!0&&(i.fromBufferAttribute(O,F),I[H+$+4]=i.x,I[H+$+5]=i.y,I[H+$+6]=i.z,I[H+$+7]=0),m===!0&&(i.fromBufferAttribute(z,F),I[H+$+8]=i.x,I[H+$+9]=i.y,I[H+$+10]=i.z,I[H+$+11]=z.itemSize===4?i.w:1)}}u={count:d,texture:N,size:new It(D,C)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function ug(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Nl extends Je{constructor(t,e,n,i,s,o,a,l,c,h=Rs){if(h!==Rs&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Rs&&(n=Qi),n===void 0&&h===es&&(n=ts),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const bu=new Je,Pc=new Nl(1,1),Su=new pu,Eu=new $d,wu=new yu,Lc=[],Ic=[],Dc=new Float32Array(16),Nc=new Float32Array(9),Uc=new Float32Array(4);function Ws(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Lc[i];if(s===void 0&&(s=new Float32Array(i),Lc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ro(r,t){let e=Ic[t];e===void 0&&(e=new Int32Array(t),Ic[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function dg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function fg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function pg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function gg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;Uc.set(n),r.uniformMatrix2fv(this.addr,!1,Uc),Xe(e,n)}}function _g(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;Nc.set(n),r.uniformMatrix3fv(this.addr,!1,Nc),Xe(e,n)}}function vg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(qe(e,n))return;Dc.set(n),r.uniformMatrix4fv(this.addr,!1,Dc),Xe(e,n)}}function xg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function Mg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function bg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function Sg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Eg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function wg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function Tg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function Ag(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pc.compareFunction=uu,s=Pc):s=bu,e.setTexture2D(t||s,i)}function Cg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Eu,i)}function Rg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||wu,i)}function Pg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Su,i)}function Lg(r){switch(r){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return Sg;case 36294:return Eg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ig(r,t){r.uniform1fv(this.addr,t)}function Dg(r,t){const e=Ws(t,this.size,2);r.uniform2fv(this.addr,e)}function Ng(r,t){const e=Ws(t,this.size,3);r.uniform3fv(this.addr,e)}function Ug(r,t){const e=Ws(t,this.size,4);r.uniform4fv(this.addr,e)}function Fg(r,t){const e=Ws(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Bg(r,t){const e=Ws(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Og(r,t){const e=Ws(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function kg(r,t){r.uniform1iv(this.addr,t)}function zg(r,t){r.uniform2iv(this.addr,t)}function Gg(r,t){r.uniform3iv(this.addr,t)}function Vg(r,t){r.uniform4iv(this.addr,t)}function Hg(r,t){r.uniform1uiv(this.addr,t)}function Wg(r,t){r.uniform2uiv(this.addr,t)}function qg(r,t){r.uniform3uiv(this.addr,t)}function Xg(r,t){r.uniform4uiv(this.addr,t)}function jg(r,t,e){const n=this.cache,i=t.length,s=Ro(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||bu,s[o])}function Yg(r,t,e){const n=this.cache,i=t.length,s=Ro(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Eu,s[o])}function Kg(r,t,e){const n=this.cache,i=t.length,s=Ro(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||wu,s[o])}function Zg(r,t,e){const n=this.cache,i=t.length,s=Ro(e,i);qe(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Su,s[o])}function $g(r){switch(r){case 5126:return Ig;case 35664:return Dg;case 35665:return Ng;case 35666:return Ug;case 35674:return Fg;case 35675:return Bg;case 35676:return Og;case 5124:case 35670:return kg;case 35667:case 35671:return zg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return Hg;case 36294:return Wg;case 36295:return qg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lg(e.type)}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class t0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Fc(r,t){r.seq.push(t),r.map[t.id]=t}function e0(r,t,e){const n=r.name,i=n.length;for(ua.lastIndex=0;;){const s=ua.exec(n),o=ua.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fc(e,c===void 0?new Jg(a,r,t):new Qg(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new t0(a),Fc(e,d)),e=d}}}class go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);e0(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const n0=37297;let i0=0;function s0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Oc=new le;function r0(r){ce._getMatrix(Oc,ce.workingColorSpace,r);const t=`mat3( ${Oc.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(r)){case Ao:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function kc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+s0(r.getShaderSource(t),o)}else return i}function o0(r,t){const e=r0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a0(r,t){let e;switch(t){case Zh:e="Linear";break;case $h:e="Reinhard";break;case Jh:e="Cineon";break;case bl:e="ACESFilmic";break;case Qh:e="AgX";break;case tu:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new k;function l0(){ce.getLuminanceCoefficients(jr);const r=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function h0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function lr(r){return r!==""}function zc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(r){return r.replace(d0,p0)}const f0=new Map;function p0(r,t){let e=he[t];if(e===void 0){const n=f0.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}const m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vc(r){return r.replace(m0,g0)}function g0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ds:case Ns:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function y0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wo:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function M0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=_0(e),c=v0(e),h=x0(e),d=y0(e),u=M0(e),f=c0(e),g=h0(s),_=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),p=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?he.tonemapping_pars_fragment:"",e.toneMapping!==Ui?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,o0("linearToOutputTexel",e.outputColorSpace),l0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(lr).join(`
`)),o=gl(o),o=zc(o,e),o=Gc(o,e),a=gl(a),a=zc(a,e),a=Gc(a,e),o=Vc(o),a=Vc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,D=Bc(i,i.VERTEX_SHADER,y),C=Bc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,D),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function I(U){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(D).trim(),z=i.getShaderInfoLog(C).trim();let H=!0,F=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,D,C);else{const $=kc(i,D,"vertex"),V=kc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+G+`
`+$+`
`+V)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||z==="")&&(F=!1);F&&(U.diagnostics={runnable:H,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(D),i.deleteShader(C),N=new go(i,_),E=u0(i,_)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,n0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let S0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w0(t),e.set(t,n)),n}}class w0{constructor(t){this.id=S0++,this.code=t,this.usedTimes=0}}function T0(r,t,e,n,i,s,o){const a=new Ll,l=new E0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,U,G,O){const z=G.fog,H=O.geometry,F=E.isMeshStandardMaterial?G.environment:null,$=(E.isMeshStandardMaterial?e:t).get(E.envMap||F),V=$&&$.mapping===To?$.image.height:null,Z=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ht=ct!==void 0?ct.length:0;let ot=0;H.morphAttributes.position!==void 0&&(ot=1),H.morphAttributes.normal!==void 0&&(ot=2),H.morphAttributes.color!==void 0&&(ot=3);let _t,Y,J,st;if(Z){const ae=Yn[Z];_t=ae.vertexShader,Y=ae.fragmentShader}else _t=E.vertexShader,Y=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),st=l.getFragmentShaderID(E);const it=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,qt=O.isBatchedMesh===!0,Te=!!E.map,ue=!!E.matcap,Re=!!$,X=!!E.aoMap,je=!!E.lightMap,se=!!E.bumpMap,re=!!E.normalMap,Ht=!!E.displacementMap,ye=!!E.emissiveMap,Vt=!!E.metalnessMap,B=!!E.roughnessMap,T=E.anisotropy>0,K=E.clearcoat>0,lt=E.dispersion>0,dt=E.iridescence>0,at=E.sheen>0,Nt=E.transmission>0,yt=T&&!!E.anisotropyMap,St=K&&!!E.clearcoatMap,oe=K&&!!E.clearcoatNormalMap,pt=K&&!!E.clearcoatRoughnessMap,At=dt&&!!E.iridescenceMap,Xt=dt&&!!E.iridescenceThicknessMap,Kt=at&&!!E.sheenColorMap,Ct=at&&!!E.sheenRoughnessMap,de=!!E.specularMap,$t=!!E.specularColorMap,fe=!!E.specularIntensityMap,W=Nt&&!!E.transmissionMap,vt=Nt&&!!E.thicknessMap,nt=!!E.gradientMap,ut=!!E.alphaMap,Tt=E.alphaTest>0,Et=!!E.alphaHash,ne=!!E.extensions;let Le=Ui;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Le=r.toneMapping);const Ye={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:_t,fragmentShader:Y,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:qt,batchingColor:qt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Vs,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:ue,envMap:Re,envMapMode:Re&&$.mapping,envMapCubeUVHeight:V,aoMap:X,lightMap:je,bumpMap:se,normalMap:re,displacementMap:u&&Ht,emissiveMap:ye,normalMapObjectSpace:re&&E.normalMapType===xd,normalMapTangentSpace:re&&E.normalMapType===gr,metalnessMap:Vt,roughnessMap:B,anisotropy:T,anisotropyMap:yt,clearcoat:K,clearcoatMap:St,clearcoatNormalMap:oe,clearcoatRoughnessMap:pt,dispersion:lt,iridescence:dt,iridescenceMap:At,iridescenceThicknessMap:Xt,sheen:at,sheenColorMap:Kt,sheenRoughnessMap:Ct,specularMap:de,specularColorMap:$t,specularIntensityMap:fe,transmission:Nt,transmissionMap:W,thicknessMap:vt,gradientMap:nt,opaque:E.transparent===!1&&E.blending===Cs&&E.alphaToCoverage===!1,alphaMap:ut,alphaTest:Tt,alphaHash:Et,combine:E.combine,mapUv:Te&&_(E.map.channel),aoMapUv:X&&_(E.aoMap.channel),lightMapUv:je&&_(E.lightMap.channel),bumpMapUv:se&&_(E.bumpMap.channel),normalMapUv:re&&_(E.normalMap.channel),displacementMapUv:Ht&&_(E.displacementMap.channel),emissiveMapUv:ye&&_(E.emissiveMap.channel),metalnessMapUv:Vt&&_(E.metalnessMap.channel),roughnessMapUv:B&&_(E.roughnessMap.channel),anisotropyMapUv:yt&&_(E.anisotropyMap.channel),clearcoatMapUv:St&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(E.sheenRoughnessMap.channel),specularMapUv:de&&_(E.specularMap.channel),specularColorMapUv:$t&&_(E.specularColorMap.channel),specularIntensityMapUv:fe&&_(E.specularIntensityMap.channel),transmissionMapUv:W&&_(E.transmissionMap.channel),thicknessMapUv:vt&&_(E.thicknessMap.channel),alphaMapUv:ut&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(re||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Te||ut),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:gt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===we,decodeVideoTextureEmissive:ye&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Kn,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ne&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&E.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function p(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(b,E),y(b,E),b.push(r.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function v(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const b=g[E.type];let U;if(b){const G=Yn[b];U=xi.clone(G.uniforms)}else U=E.uniforms;return U}function D(E,b){let U;for(let G=0,O=h.length;G<O;G++){const z=h[G];if(z.cacheKey===b){U=z,++U.usedTimes;break}}return U===void 0&&(U=new b0(r,b,E,s),h.push(U)),U}function C(E){if(--E.usedTimes===0){const b=h.indexOf(E);h[b]=h[h.length-1],h.pop(),E.destroy()}}function I(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:N}}function A0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function C0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function qc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||C0),n.length>1&&n.sort(u||Wc),i.length>1&&i.sort(u||Wc)}function h(){for(let d=t,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function R0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new qc,r.set(n,[o])):i>=s.length?(o=new qc,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function P0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function L0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let I0=0;function D0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function N0(r){const t=new P0,e=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,s=new te,o=new te;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,D=0,C=0,I=0;c.sort(D0);for(let E=0,b=c.length;E<b;E++){const U=c[E],G=U.color,O=U.intensity,z=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=G.r*O,d+=G.g*O,u+=G.b*O;else if(U.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(U.sh.coefficients[F],O);I++}else if(U.isDirectionalLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,V=e.get(U);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=U.shadow.matrix,v++}n.directional[f]=F,f++}else if(U.isSpotLight){const F=t.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(G).multiplyScalar(O),F.distance=z,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,n.spot[_]=F;const $=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,$.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[_]=$.matrix,U.castShadow){const V=e.get(U);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=H,x++}_++}else if(U.isRectAreaLight){const F=t.get(U);F.color.copy(G).multiplyScalar(O),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=F,m++}else if(U.isPointLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const $=U.shadow,V=e.get(U);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=F,g++}else if(U.isHemisphereLight){const F=t.get(U);F.skyColor.copy(U.color).multiplyScalar(O),F.groundColor.copy(U.groundColor).multiplyScalar(O),n.hemi[p]=F,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==x||N.numSpotMaps!==D||N.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+D-C,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,N.directionalLength=f,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=x,N.numSpotMaps=D,N.numLightProbes=I,n.version=I0++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xc(r){const t=new N0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function U0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Xc(r),t.set(i,[a])):s>=o.length?(a=new Xc(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class F0 extends In{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class B0 extends In{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function z0(r,t,e){let n=new Il;const i=new It,s=new It,o=new be,a=new F0({depthPacking:vd}),l=new B0,c={},h=e.maxTextureSize,d={[Jn]:_n,[_n]:Jn,[Kn]:Kn},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:O0,fragmentShader:k0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new $e;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(C,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=r.getRenderTarget(),b=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),G=r.state;G.setBlending(cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=p!==fi&&this.type===fi,z=p===fi&&this.type!==fi;for(let H=0,F=C.length;H<F;H++){const $=C[H],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||O===!0||z===!0){const ht=this.type!==fi?{minFilter:hn,magFilter:hn}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(i.x,i.y,ht),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const ct=V.getViewportCount();for(let ht=0;ht<ct;ht++){const ot=V.getViewport(ht);o.set(s.x*ot.x,s.y*ot.y,s.x*ot.z,s.y*ot.w),G.viewport(o),V.updateMatrices($,ht),n=V.getFrustum(),x(I,N,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===fi&&v(V,N),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(E,b,U)};function v(C,I){const N=t.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(I,null,N,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(I,null,N,f,_,null)}function y(C,I,N,E){let b=null;const U=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=N.isPointLight===!0?l:a,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const G=b.uuid,O=I.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let H=z[O];H===void 0&&(H=b.clone(),z[O]=H,I.addEventListener("dispose",D)),b=H}if(b.visible=I.visible,b.wireframe=I.wireframe,E===fi?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:d[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=r.properties.get(b);G.light=N}return b}function x(C,I,N,E,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===fi)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const O=t.update(C),z=C.material;if(Array.isArray(z)){const H=O.groups;for(let F=0,$=H.length;F<$;F++){const V=H[F],Z=z[V.materialIndex];if(Z&&Z.visible){const ct=y(C,Z,E,b);C.onBeforeShadow(r,C,I,N,O,ct,V),r.renderBufferDirect(N,null,O,ct,C,V),C.onAfterShadow(r,C,I,N,O,ct,V)}}}else if(z.visible){const H=y(C,z,E,b);C.onBeforeShadow(r,C,I,N,O,H,null),r.renderBufferDirect(N,null,O,H,C,null),C.onAfterShadow(r,C,I,N,O,H,null)}}const G=C.children;for(let O=0,z=G.length;O<z;O++)x(G[O],I,N,E,b)}function D(C){C.target.removeEventListener("dispose",D);for(const N in c){const E=c[N],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const G0={[Da]:Na,[Ua]:Oa,[Fa]:ka,[Is]:Ba,[Na]:Da,[Oa]:Ua,[ka]:Fa,[Ba]:Is};function V0(r,t){function e(){let W=!1;const vt=new be;let nt=null;const ut=new be(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!W&&(r.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,Et,ne,Le,Ye){Ye===!0&&(Tt*=Le,Et*=Le,ne*=Le),vt.set(Tt,Et,ne,Le),ut.equals(vt)===!1&&(r.clearColor(Tt,Et,ne,Le),ut.copy(vt))},reset:function(){W=!1,nt=null,ut.set(-1,0,0,0)}}}function n(){let W=!1,vt=!1,nt=null,ut=null,Tt=null;return{setReversed:function(Et){if(vt!==Et){const ne=t.get("EXT_clip_control");vt?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const Le=Tt;Tt=null,this.setClear(Le)}vt=Et},getReversed:function(){return vt},setTest:function(Et){Et?it(r.DEPTH_TEST):gt(r.DEPTH_TEST)},setMask:function(Et){nt!==Et&&!W&&(r.depthMask(Et),nt=Et)},setFunc:function(Et){if(vt&&(Et=G0[Et]),ut!==Et){switch(Et){case Da:r.depthFunc(r.NEVER);break;case Na:r.depthFunc(r.ALWAYS);break;case Ua:r.depthFunc(r.LESS);break;case Is:r.depthFunc(r.LEQUAL);break;case Fa:r.depthFunc(r.EQUAL);break;case Ba:r.depthFunc(r.GEQUAL);break;case Oa:r.depthFunc(r.GREATER);break;case ka:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=Et}},setLocked:function(Et){W=Et},setClear:function(Et){Tt!==Et&&(vt&&(Et=1-Et),r.clearDepth(Et),Tt=Et)},reset:function(){W=!1,nt=null,ut=null,Tt=null,vt=!1}}}function i(){let W=!1,vt=null,nt=null,ut=null,Tt=null,Et=null,ne=null,Le=null,Ye=null;return{setTest:function(ae){W||(ae?it(r.STENCIL_TEST):gt(r.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!W&&(r.stencilMask(ae),vt=ae)},setFunc:function(ae,un,Dn){(nt!==ae||ut!==un||Tt!==Dn)&&(r.stencilFunc(ae,un,Dn),nt=ae,ut=un,Tt=Dn)},setOp:function(ae,un,Dn){(Et!==ae||ne!==un||Le!==Dn)&&(r.stencilOp(ae,un,Dn),Et=ae,ne=un,Le=Dn)},setLocked:function(ae){W=ae},setClear:function(ae){Ye!==ae&&(r.clearStencil(ae),Ye=ae)},reset:function(){W=!1,vt=null,nt=null,ut=null,Tt=null,Et=null,ne=null,Le=null,Ye=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,D=null,C=null,I=new Yt(0,0,0),N=0,E=!1,b=null,U=null,G=null,O=null,z=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=$>=2);let Z=null,ct={};const ht=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),_t=new be().fromArray(ht),Y=new be().fromArray(ot);function J(W,vt,nt,ut){const Tt=new Uint8Array(4),Et=r.createTexture();r.bindTexture(W,Et),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<nt;ne++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(vt,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(vt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return Et}const st={};st[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),st[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),st[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(r.DEPTH_TEST),o.setFunc(Is),se(!1),re(Xl),it(r.CULL_FACE),X(cn);function it(W){h[W]!==!0&&(r.enable(W),h[W]=!0)}function gt(W){h[W]!==!1&&(r.disable(W),h[W]=!1)}function Dt(W,vt){return d[W]!==vt?(r.bindFramebuffer(W,vt),d[W]=vt,W===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=vt),W===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=vt),!0):!1}function qt(W,vt){let nt=f,ut=!1;if(W){nt=u.get(vt),nt===void 0&&(nt=[],u.set(vt,nt));const Tt=W.textures;if(nt.length!==Tt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,ne=Tt.length;Et<ne;Et++)nt[Et]=r.COLOR_ATTACHMENT0+Et;nt.length=Tt.length,ut=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,ut=!0);ut&&r.drawBuffers(nt)}function Te(W){return g!==W?(r.useProgram(W),g=W,!0):!1}const ue={[mi]:r.FUNC_ADD,[$u]:r.FUNC_SUBTRACT,[Ju]:r.FUNC_REVERSE_SUBTRACT};ue[Qu]=r.MIN,ue[td]=r.MAX;const Re={[Pa]:r.ZERO,[ed]:r.ONE,[nd]:r.SRC_COLOR,[La]:r.SRC_ALPHA,[od]:r.SRC_ALPHA_SATURATE,[Kh]:r.DST_COLOR,[Yh]:r.DST_ALPHA,[id]:r.ONE_MINUS_SRC_COLOR,[Ia]:r.ONE_MINUS_SRC_ALPHA,[rd]:r.ONE_MINUS_DST_COLOR,[sd]:r.ONE_MINUS_DST_ALPHA,[ad]:r.CONSTANT_COLOR,[ld]:r.ONE_MINUS_CONSTANT_COLOR,[cd]:r.CONSTANT_ALPHA,[hd]:r.ONE_MINUS_CONSTANT_ALPHA};function X(W,vt,nt,ut,Tt,Et,ne,Le,Ye,ae){if(W===cn){_===!0&&(gt(r.BLEND),_=!1);return}if(_===!1&&(it(r.BLEND),_=!0),W!==jh){if(W!==m||ae!==E){if((p!==mi||x!==mi)&&(r.blendEquation(r.FUNC_ADD),p=mi,x=mi),ae)switch(W){case Cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.ONE,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ra:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}v=null,y=null,D=null,C=null,I.set(0,0,0),N=0,m=W,E=ae}return}Tt=Tt||vt,Et=Et||nt,ne=ne||ut,(vt!==p||Tt!==x)&&(r.blendEquationSeparate(ue[vt],ue[Tt]),p=vt,x=Tt),(nt!==v||ut!==y||Et!==D||ne!==C)&&(r.blendFuncSeparate(Re[nt],Re[ut],Re[Et],Re[ne]),v=nt,y=ut,D=Et,C=ne),(Le.equals(I)===!1||Ye!==N)&&(r.blendColor(Le.r,Le.g,Le.b,Ye),I.copy(Le),N=Ye),m=W,E=!1}function je(W,vt){W.side===Kn?gt(r.CULL_FACE):it(r.CULL_FACE);let nt=W.side===_n;vt&&(nt=!nt),se(nt),W.blending===Cs&&W.transparent===!1?X(cn):X(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),s.setMask(W.colorWrite);const ut=W.stencilWrite;a.setTest(ut),ut&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ye(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):gt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){b!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),b=W)}function re(W){W!==Ku?(it(r.CULL_FACE),W!==U&&(W===Xl?r.cullFace(r.BACK):W===Zu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):gt(r.CULL_FACE),U=W}function Ht(W){W!==G&&(F&&r.lineWidth(W),G=W)}function ye(W,vt,nt){W?(it(r.POLYGON_OFFSET_FILL),(O!==vt||z!==nt)&&(r.polygonOffset(vt,nt),O=vt,z=nt)):gt(r.POLYGON_OFFSET_FILL)}function Vt(W){W?it(r.SCISSOR_TEST):gt(r.SCISSOR_TEST)}function B(W){W===void 0&&(W=r.TEXTURE0+H-1),Z!==W&&(r.activeTexture(W),Z=W)}function T(W,vt,nt){nt===void 0&&(Z===null?nt=r.TEXTURE0+H-1:nt=Z);let ut=ct[nt];ut===void 0&&(ut={type:void 0,texture:void 0},ct[nt]=ut),(ut.type!==W||ut.texture!==vt)&&(Z!==nt&&(r.activeTexture(nt),Z=nt),r.bindTexture(W,vt||st[W]),ut.type=W,ut.texture=vt)}function K(){const W=ct[Z];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function lt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{r.texSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Nt(){try{r.texSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{r.texStorage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{r.texImage3D.apply(r,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(W){_t.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),_t.copy(W))}function Ct(W){Y.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function de(W,vt){let nt=c.get(vt);nt===void 0&&(nt=new WeakMap,c.set(vt,nt));let ut=nt.get(W);ut===void 0&&(ut=r.getUniformBlockIndex(vt,W.name),nt.set(W,ut))}function $t(W,vt){const ut=c.get(vt).get(W);l.get(vt)!==ut&&(r.uniformBlockBinding(vt,ut,W.__bindingPointIndex),l.set(vt,ut))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Z=null,ct={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,D=null,C=null,I=new Yt(0,0,0),N=0,E=!1,b=null,U=null,G=null,O=null,z=null,_t.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:gt,bindFramebuffer:Dt,drawBuffers:qt,useProgram:Te,setBlending:X,setMaterial:je,setFlipSided:se,setCullFace:re,setLineWidth:Ht,setPolygonOffset:ye,setScissorTest:Vt,activeTexture:B,bindTexture:T,unbindTexture:K,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:At,texImage3D:Xt,updateUBOMapping:de,uniformBlockBinding:$t,texStorage2D:oe,texStorage3D:pt,texSubImage2D:at,texSubImage3D:Nt,compressedTexSubImage2D:yt,compressedTexSubImage3D:St,scissor:Kt,viewport:Ct,reset:fe}}function jc(r,t,e,n){const i=H0(n);switch(e){case ru:return r*t;case au:return r*t;case lu:return r*t*2;case Tl:return r*t/i.components*i.byteLength;case Al:return r*t/i.components*i.byteLength;case cu:return r*t*2/i.components*i.byteLength;case Cl:return r*t*2/i.components*i.byteLength;case ou:return r*t*3/i.components*i.byteLength;case Rn:return r*t*4/i.components*i.byteLength;case Rl:return r*t*4/i.components*i.byteLength;case ho:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Xa:return Math.max(r,16)*Math.max(t,8)/4;case Ha:case qa:return Math.max(r,8)*Math.max(t,8)/2;case ja:case Ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case al:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mo:case hl:case ul:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hu:case dl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fl:case pl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(r){switch(r){case Mi:case nu:return{byteLength:1,components:1};case pr:case iu:case Wn:return{byteLength:2,components:1};case El:case wl:return{byteLength:2,components:4};case Qi:case Sl:case Vn:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function W0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,T){return f?new OffscreenCanvas(B,T):mr("canvas")}function _(B,T,K){let lt=1;const dt=Vt(B);if((dt.width>K||dt.height>K)&&(lt=K/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const at=Math.floor(lt*dt.width),Nt=Math.floor(lt*dt.height);d===void 0&&(d=g(at,Nt));const yt=T?g(at,Nt):d;return yt.width=at,yt.height=Nt,yt.getContext("2d").drawImage(B,0,0,at,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+at+"x"+Nt+")."),yt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),B;return B}function m(B){return B.generateMipmaps}function p(B){r.generateMipmap(B)}function v(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(B,T,K,lt,dt=!1){if(B!==null){if(r[B]!==void 0)return r[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let at=T;if(T===r.RED&&(K===r.FLOAT&&(at=r.R32F),K===r.HALF_FLOAT&&(at=r.R16F),K===r.UNSIGNED_BYTE&&(at=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(at=r.R8UI),K===r.UNSIGNED_SHORT&&(at=r.R16UI),K===r.UNSIGNED_INT&&(at=r.R32UI),K===r.BYTE&&(at=r.R8I),K===r.SHORT&&(at=r.R16I),K===r.INT&&(at=r.R32I)),T===r.RG&&(K===r.FLOAT&&(at=r.RG32F),K===r.HALF_FLOAT&&(at=r.RG16F),K===r.UNSIGNED_BYTE&&(at=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(at=r.RG8UI),K===r.UNSIGNED_SHORT&&(at=r.RG16UI),K===r.UNSIGNED_INT&&(at=r.RG32UI),K===r.BYTE&&(at=r.RG8I),K===r.SHORT&&(at=r.RG16I),K===r.INT&&(at=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(at=r.RGB8UI),K===r.UNSIGNED_SHORT&&(at=r.RGB16UI),K===r.UNSIGNED_INT&&(at=r.RGB32UI),K===r.BYTE&&(at=r.RGB8I),K===r.SHORT&&(at=r.RGB16I),K===r.INT&&(at=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(at=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(at=r.RGBA16UI),K===r.UNSIGNED_INT&&(at=r.RGBA32UI),K===r.BYTE&&(at=r.RGBA8I),K===r.SHORT&&(at=r.RGBA16I),K===r.INT&&(at=r.RGBA32I)),T===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(at=r.RGB9_E5),T===r.RGBA){const Nt=dt?Ao:ce.getTransfer(lt);K===r.FLOAT&&(at=r.RGBA32F),K===r.HALF_FLOAT&&(at=r.RGBA16F),K===r.UNSIGNED_BYTE&&(at=Nt===we?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(at=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(at=r.RGB5_A1)}return(at===r.R16F||at===r.R32F||at===r.RG16F||at===r.RG32F||at===r.RGBA16F||at===r.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(B,T){let K;return B?T===null||T===Qi||T===ts?K=r.DEPTH24_STENCIL8:T===Vn?K=r.DEPTH32F_STENCIL8:T===pr&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qi||T===ts?K=r.DEPTH_COMPONENT24:T===Vn?K=r.DEPTH_COMPONENT32F:T===pr&&(K=r.DEPTH_COMPONENT16),K}function D(B,T){return m(B)===!0||B.isFramebufferTexture&&B.minFilter!==hn&&B.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function C(B){const T=B.target;T.removeEventListener("dispose",C),N(T),T.isVideoTexture&&h.delete(T)}function I(B){const T=B.target;T.removeEventListener("dispose",I),b(T)}function N(B){const T=n.get(B);if(T.__webglInit===void 0)return;const K=B.source,lt=u.get(K);if(lt){const dt=lt[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&E(B),Object.keys(lt).length===0&&u.delete(K)}n.remove(B)}function E(B){const T=n.get(B);r.deleteTexture(T.__webglTexture);const K=B.source,lt=u.get(K);delete lt[T.__cacheKey],o.memory.textures--}function b(B){const T=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let dt=0;dt<T.__webglFramebuffer[lt].length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[lt][dt]);else r.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)r.deleteFramebuffer(T.__webglFramebuffer[lt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=B.textures;for(let lt=0,dt=K.length;lt<dt;lt++){const at=n.get(K[lt]);at.__webglTexture&&(r.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(K[lt])}n.remove(B)}let U=0;function G(){U=0}function O(){const B=U;return B>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+i.maxTextures),U+=1,B}function z(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function H(B,T){const K=n.get(B);if(B.isVideoTexture&&Ht(B),B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){const lt=B.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(K,B,T);return}}e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function F(B,T){const K=n.get(B);if(B.version>0&&K.__version!==B.version){Y(K,B,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function $(B,T){const K=n.get(B);if(B.version>0&&K.__version!==B.version){Y(K,B,T);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function V(B,T){const K=n.get(B);if(B.version>0&&K.__version!==B.version){J(K,B,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const Z={[gn]:r.REPEAT,[Gn]:r.CLAMP_TO_EDGE,[Va]:r.MIRRORED_REPEAT},ct={[hn]:r.NEAREST,[md]:r.NEAREST_MIPMAP_NEAREST,[Ar]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[Oo]:r.LINEAR_MIPMAP_NEAREST,[_i]:r.LINEAR_MIPMAP_LINEAR},ht={[yd]:r.NEVER,[Td]:r.ALWAYS,[Md]:r.LESS,[uu]:r.LEQUAL,[bd]:r.EQUAL,[wd]:r.GEQUAL,[Sd]:r.GREATER,[Ed]:r.NOTEQUAL};function ot(B,T){if(T.type===Vn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===Oo||T.magFilter===Ar||T.magFilter===_i||T.minFilter===bn||T.minFilter===Oo||T.minFilter===Ar||T.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,Z[T.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,Z[T.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,Z[T.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,ct[T.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,ct[T.minFilter]),T.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,ht[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Ar&&T.minFilter!==_i||T.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function _t(B,T){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",C));const lt=T.source;let dt=u.get(lt);dt===void 0&&(dt={},u.set(lt,dt));const at=z(T);if(at!==B.__cacheKey){dt[at]===void 0&&(dt[at]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),dt[at].usedTimes++;const Nt=dt[B.__cacheKey];Nt!==void 0&&(dt[B.__cacheKey].usedTimes--,Nt.usedTimes===0&&E(T)),B.__cacheKey=at,B.__webglTexture=dt[at].texture}return K}function Y(B,T,K){let lt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=r.TEXTURE_3D);const dt=_t(B,T),at=T.source;e.bindTexture(lt,B.__webglTexture,r.TEXTURE0+K);const Nt=n.get(at);if(at.version!==Nt.__version||dt===!0){e.activeTexture(r.TEXTURE0+K);const yt=ce.getPrimaries(ce.workingColorSpace),St=T.colorSpace===Ni?null:ce.getPrimaries(T.colorSpace),oe=T.colorSpace===Ni||yt===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let pt=_(T.image,!1,i.maxTextureSize);pt=ye(T,pt);const At=s.convert(T.format,T.colorSpace),Xt=s.convert(T.type);let Kt=y(T.internalFormat,At,Xt,T.colorSpace,T.isVideoTexture);ot(lt,T);let Ct;const de=T.mipmaps,$t=T.isVideoTexture!==!0,fe=Nt.__version===void 0||dt===!0,W=at.dataReady,vt=D(T,pt);if(T.isDepthTexture)Kt=x(T.format===es,T.type),fe&&($t?e.texStorage2D(r.TEXTURE_2D,1,Kt,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Kt,pt.width,pt.height,0,At,Xt,null));else if(T.isDataTexture)if(de.length>0){$t&&fe&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,de[0].width,de[0].height);for(let nt=0,ut=de.length;nt<ut;nt++)Ct=de[nt],$t?W&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,At,Xt,Ct.data):e.texImage2D(r.TEXTURE_2D,nt,Kt,Ct.width,Ct.height,0,At,Xt,Ct.data);T.generateMipmaps=!1}else $t?(fe&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,pt.width,pt.height),W&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt.width,pt.height,At,Xt,pt.data)):e.texImage2D(r.TEXTURE_2D,0,Kt,pt.width,pt.height,0,At,Xt,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$t&&fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Kt,de[0].width,de[0].height,pt.depth);for(let nt=0,ut=de.length;nt<ut;nt++)if(Ct=de[nt],T.format!==Rn)if(At!==null)if($t){if(W)if(T.layerUpdates.size>0){const Tt=jc(Ct.width,Ct.height,T.format,T.type);for(const Et of T.layerUpdates){const ne=Ct.data.subarray(Et*Tt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*Tt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Et,Ct.width,Ct.height,1,At,ne)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Ct.width,Ct.height,pt.depth,At,Ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Kt,Ct.width,Ct.height,pt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?W&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Ct.width,Ct.height,pt.depth,At,Xt,Ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Kt,Ct.width,Ct.height,pt.depth,0,At,Xt,Ct.data)}else{$t&&fe&&e.texStorage2D(r.TEXTURE_2D,vt,Kt,de[0].width,de[0].height);for(let nt=0,ut=de.length;nt<ut;nt++)Ct=de[nt],T.format!==Rn?At!==null?$t?W&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?W&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Ct.width,Ct.height,At,Xt,Ct.data):e.texImage2D(r.TEXTURE_2D,nt,Kt,Ct.width,Ct.height,0,At,Xt,Ct.data)}else if(T.isDataArrayTexture)if($t){if(fe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,Kt,pt.width,pt.height,pt.depth),W)if(T.layerUpdates.size>0){const nt=jc(pt.width,pt.height,T.format,T.type);for(const ut of T.layerUpdates){const Tt=pt.data.subarray(ut*nt/pt.data.BYTES_PER_ELEMENT,(ut+1)*nt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,pt.width,pt.height,1,At,Xt,Tt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,At,Xt,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Kt,pt.width,pt.height,pt.depth,0,At,Xt,pt.data);else if(T.isData3DTexture)$t?(fe&&e.texStorage3D(r.TEXTURE_3D,vt,Kt,pt.width,pt.height,pt.depth),W&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,At,Xt,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Kt,pt.width,pt.height,pt.depth,0,At,Xt,pt.data);else if(T.isFramebufferTexture){if(fe)if($t)e.texStorage2D(r.TEXTURE_2D,vt,Kt,pt.width,pt.height);else{let nt=pt.width,ut=pt.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,Kt,nt,ut,0,At,Xt,null),nt>>=1,ut>>=1}}else if(de.length>0){if($t&&fe){const nt=Vt(de[0]);e.texStorage2D(r.TEXTURE_2D,vt,Kt,nt.width,nt.height)}for(let nt=0,ut=de.length;nt<ut;nt++)Ct=de[nt],$t?W&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,At,Xt,Ct):e.texImage2D(r.TEXTURE_2D,nt,Kt,At,Xt,Ct);T.generateMipmaps=!1}else if($t){if(fe){const nt=Vt(pt);e.texStorage2D(r.TEXTURE_2D,vt,Kt,nt.width,nt.height)}W&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Xt,pt)}else e.texImage2D(r.TEXTURE_2D,0,Kt,At,Xt,pt);m(T)&&p(lt),Nt.__version=at.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function J(B,T,K){if(T.image.length!==6)return;const lt=_t(B,T),dt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+K);const at=n.get(dt);if(dt.version!==at.__version||lt===!0){e.activeTexture(r.TEXTURE0+K);const Nt=ce.getPrimaries(ce.workingColorSpace),yt=T.colorSpace===Ni?null:ce.getPrimaries(T.colorSpace),St=T.colorSpace===Ni||Nt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const oe=T.isCompressedTexture||T.image[0].isCompressedTexture,pt=T.image[0]&&T.image[0].isDataTexture,At=[];for(let ut=0;ut<6;ut++)!oe&&!pt?At[ut]=_(T.image[ut],!0,i.maxCubemapSize):At[ut]=pt?T.image[ut].image:T.image[ut],At[ut]=ye(T,At[ut]);const Xt=At[0],Kt=s.convert(T.format,T.colorSpace),Ct=s.convert(T.type),de=y(T.internalFormat,Kt,Ct,T.colorSpace),$t=T.isVideoTexture!==!0,fe=at.__version===void 0||lt===!0,W=dt.dataReady;let vt=D(T,Xt);ot(r.TEXTURE_CUBE_MAP,T);let nt;if(oe){$t&&fe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,de,Xt.width,Xt.height);for(let ut=0;ut<6;ut++){nt=At[ut].mipmaps;for(let Tt=0;Tt<nt.length;Tt++){const Et=nt[Tt];T.format!==Rn?Kt!==null?$t?W&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Kt,Et.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,de,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,0,0,Et.width,Et.height,Kt,Ct,Et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt,de,Et.width,Et.height,0,Kt,Ct,Et.data)}}}else{if(nt=T.mipmaps,$t&&fe){nt.length>0&&vt++;const ut=Vt(At[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,vt,de,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(pt){$t?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,At[ut].width,At[ut].height,Kt,Ct,At[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,de,At[ut].width,At[ut].height,0,Kt,Ct,At[ut].data);for(let Tt=0;Tt<nt.length;Tt++){const ne=nt[Tt].image[ut].image;$t?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,ne.width,ne.height,Kt,Ct,ne.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,de,ne.width,ne.height,0,Kt,Ct,ne.data)}}else{$t?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Kt,Ct,At[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,de,Kt,Ct,At[ut]);for(let Tt=0;Tt<nt.length;Tt++){const Et=nt[Tt];$t?W&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,0,0,Kt,Ct,Et.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Tt+1,de,Kt,Ct,Et.image[ut])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),at.__version=dt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function st(B,T,K,lt,dt,at){const Nt=s.convert(K.format,K.colorSpace),yt=s.convert(K.type),St=y(K.internalFormat,Nt,yt,K.colorSpace),oe=n.get(T),pt=n.get(K);if(pt.__renderTarget=T,!oe.__hasExternalTextures){const At=Math.max(1,T.width>>at),Xt=Math.max(1,T.height>>at);dt===r.TEXTURE_3D||dt===r.TEXTURE_2D_ARRAY?e.texImage3D(dt,at,St,At,Xt,T.depth,0,Nt,yt,null):e.texImage2D(dt,at,St,At,Xt,0,Nt,yt,null)}e.bindFramebuffer(r.FRAMEBUFFER,B),re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,lt,dt,pt.__webglTexture,0,se(T)):(dt===r.TEXTURE_2D||dt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,lt,dt,pt.__webglTexture,at),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(B,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,B),T.depthBuffer){const lt=T.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,at=x(T.stencilBuffer,dt),Nt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=se(T);re(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,yt,at,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,at,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,at,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,B)}else{const lt=T.textures;for(let dt=0;dt<lt.length;dt++){const at=lt[dt],Nt=s.convert(at.format,at.colorSpace),yt=s.convert(at.type),St=y(at.internalFormat,Nt,yt,at.colorSpace),oe=se(T);K&&re(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,St,T.width,T.height):re(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,St,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,St,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(B,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(T.depthTexture);lt.__renderTarget=T,(!lt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const dt=lt.__webglTexture,at=se(T);if(T.depthTexture.format===Rs)re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,dt,0);else if(T.depthTexture.format===es)re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Dt(B){const T=n.get(B),K=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const lt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=lt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");gt(T.__webglFramebuffer,B)}else if(K){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=r.createRenderbuffer(),it(T.__webglDepthbuffer[lt],B,!1);else{const dt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=T.__webglDepthbuffer[lt];r.bindRenderbuffer(r.RENDERBUFFER,at),r.framebufferRenderbuffer(r.FRAMEBUFFER,dt,r.RENDERBUFFER,at)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),it(T.__webglDepthbuffer,B,!1);else{const lt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,dt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(B,T,K){const lt=n.get(B);T!==void 0&&st(lt.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Dt(B)}function Te(B){const T=B.texture,K=n.get(B),lt=n.get(T);B.addEventListener("dispose",I);const dt=B.textures,at=B.isWebGLCubeRenderTarget===!0,Nt=dt.length>1;if(Nt||(lt.__webglTexture===void 0&&(lt.__webglTexture=r.createTexture()),lt.__version=T.version,o.memory.textures++),at){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let St=0;St<T.mipmaps.length;St++)K.__webglFramebuffer[yt][St]=r.createFramebuffer()}else K.__webglFramebuffer[yt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<T.mipmaps.length;yt++)K.__webglFramebuffer[yt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let yt=0,St=dt.length;yt<St;yt++){const oe=n.get(dt[yt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}if(B.samples>0&&re(B)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<dt.length;yt++){const St=dt[yt];K.__webglColorRenderbuffer[yt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);const oe=s.convert(St.format,St.colorSpace),pt=s.convert(St.type),At=y(St.internalFormat,oe,pt,St.colorSpace,B.isXRRenderTarget===!0),Xt=se(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,At,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),it(K.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(at){e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),ot(r.TEXTURE_CUBE_MAP,T);for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)st(K.__webglFramebuffer[yt][St],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,St);else st(K.__webglFramebuffer[yt],B,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let yt=0,St=dt.length;yt<St;yt++){const oe=dt[yt],pt=n.get(oe);e.bindTexture(r.TEXTURE_2D,pt.__webglTexture),ot(r.TEXTURE_2D,oe),st(K.__webglFramebuffer,B,oe,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,0),m(oe)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let yt=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(yt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(yt,lt.__webglTexture),ot(yt,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)st(K.__webglFramebuffer[St],B,T,r.COLOR_ATTACHMENT0,yt,St);else st(K.__webglFramebuffer,B,T,r.COLOR_ATTACHMENT0,yt,0);m(T)&&p(yt),e.unbindTexture()}B.depthBuffer&&Dt(B)}function ue(B){const T=B.textures;for(let K=0,lt=T.length;K<lt;K++){const dt=T[K];if(m(dt)){const at=v(B),Nt=n.get(dt).__webglTexture;e.bindTexture(at,Nt),p(at),e.unbindTexture()}}}const Re=[],X=[];function je(B){if(B.samples>0){if(re(B)===!1){const T=B.textures,K=B.width,lt=B.height;let dt=r.COLOR_BUFFER_BIT;const at=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=n.get(B),yt=T.length>1;if(yt)for(let St=0;St<T.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let St=0;St<T.length;St++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(dt|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(dt|=r.STENCIL_BUFFER_BIT)),yt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);const oe=n.get(T[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,K,lt,0,0,K,lt,dt,r.NEAREST),l===!0&&(Re.length=0,X.length=0,Re.push(r.COLOR_ATTACHMENT0+St),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Re.push(at),X.push(at),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,X)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),yt)for(let St=0;St<T.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);const oe=n.get(T[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,oe,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const T=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function se(B){return Math.min(i.maxSamples,B.samples)}function re(B){const T=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ht(B){const T=o.render.frame;h.get(B)!==T&&(h.set(B,T),B.update())}function ye(B,T){const K=B.colorSpace,lt=B.format,dt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==Vs&&K!==Ni&&(ce.getTransfer(K)===we?(lt!==Rn||dt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Vt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(c.width=B.naturalWidth||B.width,c.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(c.width=B.displayWidth,c.height=B.displayHeight):(c.width=B.width,c.height=B.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=qt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=re}function q0(r,t){function e(n,i=Ni){let s;const o=ce.getTransfer(i);if(n===Mi)return r.UNSIGNED_BYTE;if(n===El)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===su)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return r.BYTE;if(n===iu)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===Sl)return r.INT;if(n===Qi)return r.UNSIGNED_INT;if(n===Vn)return r.FLOAT;if(n===Wn)return r.HALF_FLOAT;if(n===ru)return r.ALPHA;if(n===ou)return r.RGB;if(n===Rn)return r.RGBA;if(n===au)return r.LUMINANCE;if(n===lu)return r.LUMINANCE_ALPHA;if(n===Rs)return r.DEPTH_COMPONENT;if(n===es)return r.DEPTH_STENCIL;if(n===Tl)return r.RED;if(n===Al)return r.RED_INTEGER;if(n===cu)return r.RG;if(n===Cl)return r.RG_INTEGER;if(n===Rl)return r.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===qa||n===Xa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Ya||n===Ka)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ja||n===Ya)return o===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Za||n===$a||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Za)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return o===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===hl||n===ul)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===mo)return o===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===dl||n===fl||n===pl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class X0 extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Je,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:Y0,fragmentShader:K0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $0 extends ns{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Z0,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],D=new It;let C=null;const I=new nn;I.viewport=new be;const N=new nn;N.viewport=new be;const E=[I,N],b=new X0;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=y[Y];return J===void 0&&(J=new da,y[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=y[Y];return J===void 0&&(J=new da,y[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=y[Y];return J===void 0&&(J=new da,y[Y]=J),J.getHandSpace()};function O(Y){const J=x.indexOf(Y.inputSource);if(J===-1)return;const st=y[J];st!==void 0&&(st.update(Y.inputSource,Y.frame,c||o),st.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<y.length;Y++){const J=x[Y];J!==null&&(x[Y]=null,y[Y].disconnect(J))}U=null,G=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(D),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Sn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,st=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?es:Rs,st=m.stencil?ts:Qi);const gt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(gt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Sn(u.textureWidth,u.textureHeight,{format:Rn,type:Mi,depthTexture:new Nl(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_t.setContext(i),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let J=0;J<Y.removed.length;J++){const st=Y.removed[J],it=x.indexOf(st);it>=0&&(x[it]=null,y[it].disconnect(st))}for(let J=0;J<Y.added.length;J++){const st=Y.added[J];let it=x.indexOf(st);if(it===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=x.length){x.push(st),it=Dt;break}else if(x[Dt]===null){x[Dt]=st,it=Dt;break}if(it===-1)break}const gt=y[it];gt&&gt.connect(st)}}const F=new k,$=new k;function V(Y,J,st){F.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(st.matrixWorld);const it=F.distanceTo($),gt=J.projectionMatrix.elements,Dt=st.projectionMatrix.elements,qt=gt[14]/(gt[10]-1),Te=gt[14]/(gt[10]+1),ue=(gt[9]+1)/gt[5],Re=(gt[9]-1)/gt[5],X=(gt[8]-1)/gt[0],je=(Dt[8]+1)/Dt[0],se=qt*X,re=qt*je,Ht=it/(-X+je),ye=Ht*-X;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ye),Y.translateZ(Ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),gt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Vt=qt+Ht,B=Te+Ht,T=se-ye,K=re+(it-ye),lt=ue*Te/B*Vt,dt=Re*Te/B*Vt;Y.projectionMatrix.makePerspective(T,K,lt,dt,Vt,B),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Z(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,st=Y.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(st=_.depthFar)),b.near=N.near=I.near=J,b.far=N.far=I.far=st,(U!==b.near||G!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,G=b.far),I.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,b.layers.mask=I.layers.mask|N.layers.mask;const it=Y.parent,gt=b.cameras;Z(b,it);for(let Dt=0;Dt<gt.length;Dt++)Z(gt[Dt],it);gt.length===2?V(b,I,N):b.projectionMatrix.copy(I.projectionMatrix),ct(Y,b,it)};function ct(Y,J,st){st===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let ht=null;function ot(Y,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const st=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let it=!1;st.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let Dt=0;Dt<st.length;Dt++){const qt=st[Dt];let Te=null;if(f!==null)Te=f.getViewport(qt);else{const Re=d.getViewSubImage(u,qt);Te=Re.viewport,Dt===0&&(t.setRenderTargetTextures(v,Re.colorTexture,u.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(v))}let ue=E[Dt];ue===void 0&&(ue=new nn,ue.layers.enable(Dt),ue.viewport=new be,E[Dt]=ue),ue.matrix.fromArray(qt.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(qt.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Te.x,Te.y,Te.width,Te.height),Dt===0&&(b.matrix.copy(ue.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(ue)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Dt=d.getDepthInformation(st[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let st=0;st<y.length;st++){const it=x[st],gt=y[st];it!==null&&gt!==void 0&&gt.update(it,J,c||o)}ht&&ht(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const _t=new Mu;_t.setAnimationLoop(ot),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}}const Xi=new Ln,J0=new te;function Q0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===_n&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===_n&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Xi.copy(x),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(Xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===_n&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function t_(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const D=y.program;n.updateUBOMapping(v,D);const C=t.render.frame;s[v.id]!==C&&(u(v),s[v.id]=C)}function h(v){const y=d();v.__bindingPointIndex=y;const x=r.createBuffer(),D=v.__size,C=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,D,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,D=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let C=0,I=x.length;C<I;C++){const N=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,b=N.length;E<b;E++){const U=N[E];if(f(U,C,E,D)===!0){const G=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let z=0;for(let H=0;H<O.length;H++){const F=O[H],$=_(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,r.bufferSubData(r.UNIFORM_BUFFER,G+z,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,x,D){const C=v.value,I=y+"_"+x;if(D[I]===void 0)return typeof C=="number"||typeof C=="boolean"?D[I]=C:D[I]=C.clone(),!0;{const N=D[I];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[I]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(v){const y=v.uniforms;let x=0;const D=16;for(let I=0,N=y.length;I<N;I++){const E=Array.isArray(y[I])?y[I]:[y[I]];for(let b=0,U=E.length;b<U;b++){const G=E[b],O=Array.isArray(G.value)?G.value:[G.value];for(let z=0,H=O.length;z<H;z++){const F=O[z],$=_(F),V=x%D,Z=V%$.boundary,ct=V+Z;x+=Z,ct!==0&&D-ct<$.storage&&(x+=D-ct),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=$.storage}}}const C=x%D;return C>0&&(x+=D-C),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class e_{constructor(t={}){const{canvas:e=Hd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=Ui,this.toneMappingExposure=1;const x=this;let D=!1,C=0,I=0,N=null,E=-1,b=null;const U=new be,G=new be;let O=null;const z=new Yt(0);let H=0,F=e.width,$=e.height,V=1,Z=null,ct=null;const ht=new be(0,0,F,$),ot=new be(0,0,F,$);let _t=!1;const Y=new Il;let J=!1,st=!1;const it=new te,gt=new te,Dt=new k,qt=new be,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Re(){return N===null?V:1}let X=n;function je(P,j){return e.getContext(P,j)}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ml}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),X===null){const j="webgl2";if(X=je(j,P),X===null)throw je(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let se,re,Ht,ye,Vt,B,T,K,lt,dt,at,Nt,yt,St,oe,pt,At,Xt,Kt,Ct,de,$t,fe,W;function vt(){se=new og(X),se.init(),$t=new q0(X,se),re=new tg(X,se,t,$t),Ht=new V0(X,se),re.reverseDepthBuffer&&u&&Ht.buffers.depth.setReversed(!0),ye=new cg(X),Vt=new A0,B=new W0(X,se,Ht,Vt,re,$t,ye),T=new ng(x),K=new rg(x),lt=new gf(X),fe=new Jm(X,lt),dt=new ag(X,lt,ye,fe),at=new ug(X,dt,lt,ye),Kt=new hg(X,re,B),pt=new eg(Vt),Nt=new T0(x,T,K,se,re,fe,pt),yt=new Q0(x,Vt),St=new R0,oe=new U0(se),Xt=new $m(x,T,K,Ht,at,f,l),At=new z0(x,at,re),W=new t_(X,ye,re,Ht),Ct=new Qm(X,se,ye),de=new lg(X,se,ye),ye.programs=Nt.programs,x.capabilities=re,x.extensions=se,x.properties=Vt,x.renderLists=St,x.shadowMap=At,x.state=Ht,x.info=ye}vt();const nt=new $0(x,X);this.xr=nt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const P=se.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=se.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(F,$,!1))},this.getSize=function(P){return P.set(F,$)},this.setSize=function(P,j,Q=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,$=j,e.width=Math.floor(P*V),e.height=Math.floor(j*V),Q===!0&&(e.style.width=P+"px",e.style.height=j+"px"),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(F*V,$*V).floor()},this.setDrawingBufferSize=function(P,j,Q){F=P,$=j,V=Q,e.width=Math.floor(P*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,P,j)},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ht)},this.setViewport=function(P,j,Q,tt){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,j,Q,tt),Ht.viewport(U.copy(ht).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ot)},this.setScissor=function(P,j,Q,tt){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,j,Q,tt),Ht.scissor(G.copy(ot).multiplyScalar(V).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(P){Ht.setScissorTest(_t=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){ct=P},this.getClearColor=function(P){return P.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(P=!0,j=!0,Q=!0){let tt=0;if(P){let q=!1;if(N!==null){const mt=N.texture.format;q=mt===Rl||mt===Cl||mt===Al}if(q){const mt=N.texture.type,bt=mt===Mi||mt===Qi||mt===pr||mt===ts||mt===El||mt===wl,Ft=Xt.getClearColor(),Bt=Xt.getClearAlpha(),Jt=Ft.r,ie=Ft.g,Ot=Ft.b;bt?(g[0]=Jt,g[1]=ie,g[2]=Ot,g[3]=Bt,X.clearBufferuiv(X.COLOR,0,g)):(_[0]=Jt,_[1]=ie,_[2]=Ot,_[3]=Bt,X.clearBufferiv(X.COLOR,0,_))}else tt|=X.COLOR_BUFFER_BIT}j&&(tt|=X.DEPTH_BUFFER_BIT),Q&&(tt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),St.dispose(),oe.dispose(),Vt.dispose(),T.dispose(),K.dispose(),at.dispose(),fe.dispose(),W.dispose(),Nt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",yr),nt.removeEventListener("sessionend",Mr),ti.stop()};function ut(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const P=ye.autoReset,j=At.enabled,Q=At.autoUpdate,tt=At.needsUpdate,q=At.type;vt(),ye.autoReset=P,At.enabled=j,At.autoUpdate=Q,At.needsUpdate=tt,At.type=q}function Et(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ne(P){const j=P.target;j.removeEventListener("dispose",ne),Le(j)}function Le(P){Ye(P),Vt.remove(P)}function Ye(P){const j=Vt.get(P).programs;j!==void 0&&(j.forEach(function(Q){Nt.releaseProgram(Q)}),P.isShaderMaterial&&Nt.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,Q,tt,q,mt){j===null&&(j=Te);const bt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=Uo(P,j,Q,tt,q);Ht.setMaterial(tt,bt);let Bt=Q.index,Jt=1;if(tt.wireframe===!0){if(Bt=dt.getWireframeAttribute(Q),Bt===void 0)return;Jt=2}const ie=Q.drawRange,Ot=Q.attributes.position;let pe=ie.start*Jt,Se=(ie.start+ie.count)*Jt;mt!==null&&(pe=Math.max(pe,mt.start*Jt),Se=Math.min(Se,(mt.start+mt.count)*Jt)),Bt!==null?(pe=Math.max(pe,0),Se=Math.min(Se,Bt.count)):Ot!=null&&(pe=Math.max(pe,0),Se=Math.min(Se,Ot.count));const Ae=Se-pe;if(Ae<0||Ae===1/0)return;fe.setup(q,tt,Ft,Q,Bt);let Ue,_e=Ct;if(Bt!==null&&(Ue=lt.get(Bt),_e=de,_e.setIndex(Ue)),q.isMesh)tt.wireframe===!0?(Ht.setLineWidth(tt.wireframeLinewidth*Re()),_e.setMode(X.LINES)):_e.setMode(X.TRIANGLES);else if(q.isLine){let kt=tt.linewidth;kt===void 0&&(kt=1),Ht.setLineWidth(kt*Re()),q.isLineSegments?_e.setMode(X.LINES):q.isLineLoop?_e.setMode(X.LINE_LOOP):_e.setMode(X.LINE_STRIP)}else q.isPoints?_e.setMode(X.POINTS):q.isSprite&&_e.setMode(X.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)_e.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const kt=q._multiDrawStarts,Nn=q._multiDrawCounts,me=q._multiDrawCount,vn=Bt?lt.get(Bt).bytesPerElement:1,Ei=Vt.get(tt).currentProgram.getUniforms();for(let rn=0;rn<me;rn++)Ei.setValue(X,"_gl_DrawID",rn),_e.render(kt[rn]/vn,Nn[rn])}else if(q.isInstancedMesh)_e.renderInstances(pe,Ae,q.count);else if(Q.isInstancedBufferGeometry){const kt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Nn=Math.min(Q.instanceCount,kt);_e.renderInstances(pe,Ae,Nn)}else _e.render(pe,Ae)};function ae(P,j,Q){P.transparent===!0&&P.side===Kn&&P.forceSinglePass===!1?(P.side=_n,P.needsUpdate=!0,os(P,j,Q),P.side=Jn,P.needsUpdate=!0,os(P,j,Q),P.side=Kn):os(P,j,Q)}this.compile=function(P,j,Q=null){Q===null&&(Q=P),p=oe.get(Q),p.init(j),y.push(p),Q.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==Q&&P.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const tt=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Ft=mt[bt];ae(Ft,Q,q),tt.add(Ft)}else ae(mt,Q,q),tt.add(mt)}),y.pop(),p=null,tt},this.compileAsync=function(P,j,Q=null){const tt=this.compile(P,j,Q);return new Promise(q=>{function mt(){if(tt.forEach(function(bt){Vt.get(bt).currentProgram.isReady()&&tt.delete(bt)}),tt.size===0){q(P);return}setTimeout(mt,10)}se.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let un=null;function Dn(P){un&&un(P)}function yr(){ti.stop()}function Mr(){ti.start()}const ti=new Mu;ti.setAnimationLoop(Dn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(P){un=P,nt.setAnimationLoop(P),P===null?ti.stop():ti.start()},nt.addEventListener("sessionstart",yr),nt.addEventListener("sessionend",Mr),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(j),j=nt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,j,N),p=oe.get(P,y.length),p.init(j),y.push(p),gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(gt),st=this.localClippingEnabled,J=pt.init(this.clippingPlanes,st),m=St.get(P,v.length),m.init(),v.push(m),nt.enabled===!0&&nt.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&Ys(mt,j,-1/0,x.sortObjects)}Ys(P,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Z,ct),ue=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ue&&Xt.addToRenderList(m,P),this.info.render.frame++,J===!0&&pt.beginShadows();const Q=p.state.shadowsArray;At.render(Q,P,j),J===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=m.opaque,q=m.transmissive;if(p.setupLights(),j.isArrayCamera){const mt=j.cameras;if(q.length>0)for(let bt=0,Ft=mt.length;bt<Ft;bt++){const Bt=mt[bt];Ks(tt,q,P,Bt)}ue&&Xt.render(P);for(let bt=0,Ft=mt.length;bt<Ft;bt++){const Bt=mt[bt];br(m,P,Bt,Bt.viewport)}}else q.length>0&&Ks(tt,q,P,j),ue&&Xt.render(P),br(m,P,j);N!==null&&(B.updateMultisampleRenderTarget(N),B.updateRenderTargetMipmap(N)),P.isScene===!0&&P.onAfterRender(x,P,j),fe.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&pt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ys(P,j,Q,tt){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){tt&&qt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(gt);const bt=at.update(P),Ft=P.material;Ft.visible&&m.push(P,bt,Ft,Q,qt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const bt=at.update(P),Ft=P.material;if(tt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),qt.copy(P.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),qt.copy(bt.boundingSphere.center)),qt.applyMatrix4(P.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){const Bt=bt.groups;for(let Jt=0,ie=Bt.length;Jt<ie;Jt++){const Ot=Bt[Jt],pe=Ft[Ot.materialIndex];pe&&pe.visible&&m.push(P,bt,pe,Q,qt.z,Ot)}}else Ft.visible&&m.push(P,bt,Ft,Q,qt.z,null)}}const mt=P.children;for(let bt=0,Ft=mt.length;bt<Ft;bt++)Ys(mt[bt],j,Q,tt)}function br(P,j,Q,tt){const q=P.opaque,mt=P.transmissive,bt=P.transparent;p.setupLightsView(Q),J===!0&&pt.setGlobalState(x.clippingPlanes,Q),tt&&Ht.viewport(U.copy(tt)),q.length>0&&rs(q,j,Q),mt.length>0&&rs(mt,j,Q),bt.length>0&&rs(bt,j,Q),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ks(P,j,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new Sn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Wn:Mi,minFilter:_i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));const mt=p.state.transmissionRenderTarget[tt.id],bt=tt.viewport||U;mt.setSize(bt.z,bt.w);const Ft=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(z),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),ue&&Xt.render(Q);const Bt=x.toneMapping;x.toneMapping=Ui;const Jt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),J===!0&&pt.setGlobalState(x.clippingPlanes,tt),rs(P,Q,tt),B.updateMultisampleRenderTarget(mt),B.updateRenderTargetMipmap(mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Ot=0,pe=j.length;Ot<pe;Ot++){const Se=j[Ot],Ae=Se.object,Ue=Se.geometry,_e=Se.material,kt=Se.group;if(_e.side===Kn&&Ae.layers.test(tt.layers)){const Nn=_e.side;_e.side=_n,_e.needsUpdate=!0,Zs(Ae,Q,tt,Ue,_e,kt),_e.side=Nn,_e.needsUpdate=!0,ie=!0}}ie===!0&&(B.updateMultisampleRenderTarget(mt),B.updateRenderTargetMipmap(mt))}x.setRenderTarget(Ft),x.setClearColor(z,H),Jt!==void 0&&(tt.viewport=Jt),x.toneMapping=Bt}function rs(P,j,Q){const tt=j.isScene===!0?j.overrideMaterial:null;for(let q=0,mt=P.length;q<mt;q++){const bt=P[q],Ft=bt.object,Bt=bt.geometry,Jt=tt===null?bt.material:tt,ie=bt.group;Ft.layers.test(Q.layers)&&Zs(Ft,j,Q,Bt,Jt,ie)}}function Zs(P,j,Q,tt,q,mt){P.onBeforeRender(x,j,Q,tt,q,mt),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,j,Q,tt,P,mt),q.transparent===!0&&q.side===Kn&&q.forceSinglePass===!1?(q.side=_n,q.needsUpdate=!0,x.renderBufferDirect(Q,j,tt,q,P,mt),q.side=Jn,q.needsUpdate=!0,x.renderBufferDirect(Q,j,tt,q,P,mt),q.side=Kn):x.renderBufferDirect(Q,j,tt,q,P,mt),P.onAfterRender(x,j,Q,tt,q,mt)}function os(P,j,Q){j.isScene!==!0&&(j=Te);const tt=Vt.get(P),q=p.state.lights,mt=p.state.shadowsArray,bt=q.state.version,Ft=Nt.getParameters(P,q.state,mt,j,Q),Bt=Nt.getProgramCacheKey(Ft);let Jt=tt.programs;tt.environment=P.isMeshStandardMaterial?j.environment:null,tt.fog=j.fog,tt.envMap=(P.isMeshStandardMaterial?K:T).get(P.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,Jt===void 0&&(P.addEventListener("dispose",ne),Jt=new Map,tt.programs=Jt);let ie=Jt.get(Bt);if(ie!==void 0){if(tt.currentProgram===ie&&tt.lightsStateVersion===bt)return Er(P,Ft),ie}else Ft.uniforms=Nt.getUniforms(P),P.onBeforeCompile(Ft,x),ie=Nt.acquireProgram(Ft,Bt),Jt.set(Bt,ie),tt.uniforms=Ft.uniforms;const Ot=tt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=pt.uniform),Er(P,Ft),tt.needsLights=Bo(P),tt.lightsStateVersion=bt,tt.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.directionalShadowMap.value=q.state.directionalShadowMap,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotShadowMap.value=q.state.spotShadowMap,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMap.value=q.state.pointShadowMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),tt.currentProgram=ie,tt.uniformsList=null,ie}function Sr(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=go.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function Er(P,j){const Q=Vt.get(P);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Uo(P,j,Q,tt,q){j.isScene!==!0&&(j=Te),B.resetTextureUnits();const mt=j.fog,bt=tt.isMeshStandardMaterial?j.environment:null,Ft=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Vs,Bt=(tt.isMeshStandardMaterial?K:T).get(tt.envMap||bt),Jt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ie=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ot=!!Q.morphAttributes.position,pe=!!Q.morphAttributes.normal,Se=!!Q.morphAttributes.color;let Ae=Ui;tt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const Ue=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=Ue!==void 0?Ue.length:0,kt=Vt.get(tt),Nn=p.state.lights;if(J===!0&&(st===!0||P!==b)){const on=P===b&&tt.id===E;pt.setState(tt,P,on)}let me=!1;tt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Nn.state.version||kt.outputColorSpace!==Ft||q.isBatchedMesh&&kt.batching===!1||!q.isBatchedMesh&&kt.batching===!0||q.isBatchedMesh&&kt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&kt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&kt.instancing===!1||!q.isInstancedMesh&&kt.instancing===!0||q.isSkinnedMesh&&kt.skinning===!1||!q.isSkinnedMesh&&kt.skinning===!0||q.isInstancedMesh&&kt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&kt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&kt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&kt.instancingMorph===!1&&q.morphTexture!==null||kt.envMap!==Bt||tt.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==pt.numPlanes||kt.numIntersection!==pt.numIntersection)||kt.vertexAlphas!==Jt||kt.vertexTangents!==ie||kt.morphTargets!==Ot||kt.morphNormals!==pe||kt.morphColors!==Se||kt.toneMapping!==Ae||kt.morphTargetsCount!==_e)&&(me=!0):(me=!0,kt.__version=tt.version);let vn=kt.currentProgram;me===!0&&(vn=os(tt,j,q));let Ei=!1,rn=!1,wi=!1;const ee=vn.getUniforms(),dn=kt.uniforms;if(Ht.useProgram(vn.program)&&(Ei=!0,rn=!0,wi=!0),tt.id!==E&&(E=tt.id,rn=!0),Ei||b!==P){Ht.buffers.depth.getReversed()?(it.copy(P.projectionMatrix),qd(it),Xd(it),ee.setValue(X,"projectionMatrix",it)):ee.setValue(X,"projectionMatrix",P.projectionMatrix),ee.setValue(X,"viewMatrix",P.matrixWorldInverse);const Un=ee.map.cameraPosition;Un!==void 0&&Un.setValue(X,Dt.setFromMatrixPosition(P.matrixWorld)),re.logarithmicDepthBuffer&&ee.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ee.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,rn=!0,wi=!0)}if(q.isSkinnedMesh){ee.setOptional(X,q,"bindMatrix"),ee.setOptional(X,q,"bindMatrixInverse");const on=q.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ee.setValue(X,"boneTexture",on.boneTexture,B))}q.isBatchedMesh&&(ee.setOptional(X,q,"batchingTexture"),ee.setValue(X,"batchingTexture",q._matricesTexture,B),ee.setOptional(X,q,"batchingIdTexture"),ee.setValue(X,"batchingIdTexture",q._indirectTexture,B),ee.setOptional(X,q,"batchingColorTexture"),q._colorsTexture!==null&&ee.setValue(X,"batchingColorTexture",q._colorsTexture,B));const ki=Q.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&Kt.update(q,Q,vn),(rn||kt.receiveShadow!==q.receiveShadow)&&(kt.receiveShadow=q.receiveShadow,ee.setValue(X,"receiveShadow",q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(dn.envMap.value=Bt,dn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&j.environment!==null&&(dn.envMapIntensity.value=j.environmentIntensity),rn&&(ee.setValue(X,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Fo(dn,wi),mt&&tt.fog===!0&&yt.refreshFogUniforms(dn,mt),yt.refreshMaterialUniforms(dn,tt,V,$,p.state.transmissionRenderTarget[P.id]),go.upload(X,Sr(kt),dn,B)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(go.upload(X,Sr(kt),dn,B),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ee.setValue(X,"center",q.center),ee.setValue(X,"modelViewMatrix",q.modelViewMatrix),ee.setValue(X,"normalMatrix",q.normalMatrix),ee.setValue(X,"modelMatrix",q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const on=tt.uniformsGroups;for(let Un=0,wn=on.length;Un<wn;Un++){const zi=on[Un];W.update(zi,vn),W.bind(zi,vn)}}return vn}function Fo(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Bo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(P,j,Q){Vt.get(P.texture).__webglTexture=j,Vt.get(P.depthTexture).__webglTexture=Q;const tt=Vt.get(P);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,j){const Q=Vt.get(P);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(P,j=0,Q=0){N=P,C=j,I=Q;let tt=!0,q=null,mt=!1,bt=!1;if(P){const Bt=Vt.get(P);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(X.FRAMEBUFFER,null),tt=!1;else if(Bt.__webglFramebuffer===void 0)B.setupRenderTarget(P);else if(Bt.__hasExternalTextures)B.rebindTextures(P,Vt.get(P.texture).__webglTexture,Vt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ot=P.depthTexture;if(Bt.__boundDepthTexture!==Ot){if(Ot!==null&&Vt.has(Ot)&&(P.width!==Ot.image.width||P.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(P)}}const Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(bt=!0);const ie=Vt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ie[j])?q=ie[j][Q]:q=ie[j],mt=!0):P.samples>0&&B.useMultisampledRTT(P)===!1?q=Vt.get(P).__webglMultisampledFramebuffer:Array.isArray(ie)?q=ie[Q]:q=ie,U.copy(P.viewport),G.copy(P.scissor),O=P.scissorTest}else U.copy(ht).multiplyScalar(V).floor(),G.copy(ot).multiplyScalar(V).floor(),O=_t;if(Ht.bindFramebuffer(X.FRAMEBUFFER,q)&&tt&&Ht.drawBuffers(P,q),Ht.viewport(U),Ht.scissor(G),Ht.setScissorTest(O),mt){const Bt=Vt.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,Q)}else if(bt){const Bt=Vt.get(P.texture),Jt=j||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.__webglTexture,Q||0,Jt)}E=-1},this.readRenderTargetPixels=function(P,j,Q,tt,q,mt,bt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Vt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&bt!==void 0&&(Ft=Ft[bt]),Ft){Ht.bindFramebuffer(X.FRAMEBUFFER,Ft);try{const Bt=P.texture,Jt=Bt.format,ie=Bt.type;if(!re.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-tt&&Q>=0&&Q<=P.height-q&&X.readPixels(j,Q,tt,q,$t.convert(Jt),$t.convert(ie),mt)}finally{const Bt=N!==null?Vt.get(N).__webglFramebuffer:null;Ht.bindFramebuffer(X.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(P,j,Q,tt,q,mt,bt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Vt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&bt!==void 0&&(Ft=Ft[bt]),Ft){const Bt=P.texture,Jt=Bt.format,ie=Bt.type;if(!re.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=P.width-tt&&Q>=0&&Q<=P.height-q){Ht.bindFramebuffer(X.FRAMEBUFFER,Ft);const Ot=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ot),X.bufferData(X.PIXEL_PACK_BUFFER,mt.byteLength,X.STREAM_READ),X.readPixels(j,Q,tt,q,$t.convert(Jt),$t.convert(ie),0);const pe=N!==null?Vt.get(N).__webglFramebuffer:null;Ht.bindFramebuffer(X.FRAMEBUFFER,pe);const Se=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Wd(X,Se,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ot),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,mt),X.deleteBuffer(Ot),X.deleteSync(Se),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,j=null,Q=0){P.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1]);const tt=Math.pow(2,-Q),q=Math.floor(P.image.width*tt),mt=Math.floor(P.image.height*tt),bt=j!==null?j.x:0,Ft=j!==null?j.y:0;B.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,bt,Ft,q,mt),Ht.unbindTexture()},this.copyTextureToTexture=function(P,j,Q=null,tt=null,q=0){P.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,P=arguments[1],j=arguments[2],q=arguments[3]||0,Q=null);let mt,bt,Ft,Bt,Jt,ie,Ot,pe,Se;const Ae=P.isCompressedTexture?P.mipmaps[q]:P.image;Q!==null?(mt=Q.max.x-Q.min.x,bt=Q.max.y-Q.min.y,Ft=Q.isBox3?Q.max.z-Q.min.z:1,Bt=Q.min.x,Jt=Q.min.y,ie=Q.isBox3?Q.min.z:0):(mt=Ae.width,bt=Ae.height,Ft=Ae.depth||1,Bt=0,Jt=0,ie=0),tt!==null?(Ot=tt.x,pe=tt.y,Se=tt.z):(Ot=0,pe=0,Se=0);const Ue=$t.convert(j.format),_e=$t.convert(j.type);let kt;j.isData3DTexture?(B.setTexture3D(j,0),kt=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(B.setTexture2DArray(j,0),kt=X.TEXTURE_2D_ARRAY):(B.setTexture2D(j,0),kt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Nn=X.getParameter(X.UNPACK_ROW_LENGTH),me=X.getParameter(X.UNPACK_IMAGE_HEIGHT),vn=X.getParameter(X.UNPACK_SKIP_PIXELS),Ei=X.getParameter(X.UNPACK_SKIP_ROWS),rn=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ae.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ae.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Bt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,ie);const wi=P.isDataArrayTexture||P.isData3DTexture,ee=j.isDataArrayTexture||j.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const dn=Vt.get(P),ki=Vt.get(j),on=Vt.get(dn.__renderTarget),Un=Vt.get(ki.__renderTarget);Ht.bindFramebuffer(X.READ_FRAMEBUFFER,on.__webglFramebuffer),Ht.bindFramebuffer(X.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let wn=0;wn<Ft;wn++)wi&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Vt.get(P).__webglTexture,q,ie+wn),P.isDepthTexture?(ee&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Vt.get(j).__webglTexture,q,Se+wn),X.blitFramebuffer(Bt,Jt,mt,bt,Ot,pe,mt,bt,X.DEPTH_BUFFER_BIT,X.NEAREST)):ee?X.copyTexSubImage3D(kt,q,Ot,pe,Se+wn,Bt,Jt,mt,bt):X.copyTexSubImage2D(kt,q,Ot,pe,Se+wn,Bt,Jt,mt,bt);Ht.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ee?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(kt,q,Ot,pe,Se,mt,bt,Ft,Ue,_e,Ae.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(kt,q,Ot,pe,Se,mt,bt,Ft,Ue,Ae.data):X.texSubImage3D(kt,q,Ot,pe,Se,mt,bt,Ft,Ue,_e,Ae):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,q,Ot,pe,mt,bt,Ue,_e,Ae.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,q,Ot,pe,Ae.width,Ae.height,Ue,Ae.data):X.texSubImage2D(X.TEXTURE_2D,q,Ot,pe,mt,bt,Ue,_e,Ae);X.pixelStorei(X.UNPACK_ROW_LENGTH,Nn),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,me),X.pixelStorei(X.UNPACK_SKIP_PIXELS,vn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ei),X.pixelStorei(X.UNPACK_SKIP_IMAGES,rn),q===0&&j.generateMipmaps&&X.generateMipmap(kt),Ht.unbindTexture()},this.copyTextureToTexture3D=function(P,j,Q=null,tt=null,q=0){return P.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,P=arguments[2],j=arguments[3],q=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,j,Q,tt,q)},this.initRenderTarget=function(P){Vt.get(P).__webglFramebuffer===void 0&&B.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?B.setTextureCube(P,0):P.isData3DTexture?B.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?B.setTexture2DArray(P,0):B.setTexture2D(P,0),Ht.unbindTexture()},this.resetState=function(){C=0,I=0,N=null,Ht.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}class Tu extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Yc=new k,Kc=new be,Zc=new be,n_=new k,$c=new te,Yr=new k,fa=new is,Jc=new te,pa=new Hs;class i_ extends Qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kl,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new is),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),t.ray.intersectsSphere(fa)!==!1&&(Jc.copy(i).invert(),pa.copy(t.ray).applyMatrix4(Jc),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,pa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new be,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Kc.fromBufferAttribute(i.attributes.skinIndex,t),Zc.fromBufferAttribute(i.attributes.skinWeight,t),Yc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Zc.getComponent(s);if(o!==0){const a=Kc.getComponent(s);$c.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(n_.copy(Yc).applyMatrix4($c),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Au extends Fe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ul extends Je{constructor(t=null,e=1,n=1,i,s,o,a,l,c=hn,h=hn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=new te,s_=new te;class Fl{constructor(t=[],e=[]){this.uuid=Oi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){const a=t[s]?t[s].matrixWorld:s_;Qc.multiplyMatrices(a,e[s]),Qc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ul(e,t,t,Rn,Vn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let o=e[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Au),this.bones.push(o),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Ls extends In{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xo=new k,yo=new k,th=new te,er=new Hs,Kr=new is,ma=new k,eh=new k;class Cu extends Fe{constructor(t=new $e,e=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)xo.fromBufferAttribute(e,i-1),yo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xo.distanceTo(yo);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=s,t.ray.intersectsSphere(Kr)===!1)return;th.copy(i).invert(),er.copy(t.ray).applyMatrix4(th);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),y=Zr(this,t,er,l,p,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Zr(this,t,er,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Zr(this,t,er,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Zr(this,t,er,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zr(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(xo.fromBufferAttribute(o,i),yo.fromBufferAttribute(o,s),e.distanceSqToSegment(xo,yo,ma,eh)>n)return;ma.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:eh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const nh=new k,ih=new k;class _l extends Cu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nh.distanceTo(ih);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ji extends In{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sh=new te,vl=new Hs,$r=new is,Jr=new k;class ur extends Fe{constructor(t=new $e,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,t.ray.intersectsSphere($r)===!1)return;sh.copy(i).invert(),vl.copy(t.ray).applyMatrix4(sh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=c.getX(g);Jr.fromBufferAttribute(d,m),rh(Jr,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Jr.fromBufferAttribute(d,g),rh(Jr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rh(r,t,e,n,i,s,o){const a=vl.distanceSqToPoint(r);if(a<e){const l=new k;vl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class oh extends Je{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn extends $e{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function v(){const x=new k,D=new k;let C=0;const I=(e-t)/n;for(let N=0;N<=s;N++){const E=[],b=N/s,U=b*(e-t)+t;for(let G=0;G<=i;G++){const O=G/i,z=O*l+a,H=Math.sin(z),F=Math.cos(z);D.x=U*H,D.y=-b*n+m,D.z=U*F,d.push(D.x,D.y,D.z),x.set(H,I,F).normalize(),u.push(x.x,x.y,x.z),f.push(O,1-b),E.push(g++)}_.push(E)}for(let N=0;N<i;N++)for(let E=0;E<s;E++){const b=_[E][N],U=_[E+1][N],G=_[E+1][N+1],O=_[E][N+1];(t>0||E!==0)&&(h.push(b,U,O),C+=3),(e>0||E!==s-1)&&(h.push(U,G,O),C+=3)}c.addGroup(p,C,0),p+=C}function y(x){const D=g,C=new It,I=new k;let N=0;const E=x===!0?t:e,b=x===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;const U=g;for(let G=0;G<=i;G++){const z=G/i*l+a,H=Math.cos(z),F=Math.sin(z);I.x=E*F,I.y=m*b,I.z=E*H,d.push(I.x,I.y,I.z),u.push(0,b,0),C.x=H*.5+.5,C.y=F*.5*b+.5,f.push(C.x,C.y),g++}for(let G=0;G<i;G++){const O=D+G,z=U+G;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),N+=3}c.addGroup(p,N,x===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qs extends sn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new qs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bl extends $e{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new k,g=new It;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,x=v+n+1,D=v+n+2,C=v+1;a.push(y,x,C),a.push(x,D,C)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class $n extends $e{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new k,u=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const C=D/e;d.x=-t*Math.cos(i+C*s)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+C*s)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(C+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],x=h[p][v],D=h[p+1][v],C=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,C),(p!==n-1||l<Math.PI)&&f.push(x,D,C)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class r_ extends We{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Os extends In{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mo extends In{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Yt(16777215),this.specular=new Yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class o_ extends In{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class a_ extends In{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gr,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Qr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function l_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function c_(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ah(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Ru(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}class Po{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class h_ extends Po{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $l:s=t,a=2*e-n;break;case Jl:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:o=t,l=2*n-e;break;case Jl:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let D=0;D!==a;++D)s[D]=p*o[h+D]+v*o[c+D]+y*o[l+D]+x*o[d+D];return s}}class u_ extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}}class d_ extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Qn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new d_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new u_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new h_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case ml:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&l_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ko,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=ml;class Xs extends Qn{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=_o;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Pu extends Qn{}Pu.prototype.ValueTypeName="color";class bo extends Qn{}bo.prototype.ValueTypeName="number";class f_ extends Po{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)bi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _r extends Qn{InterpolantFactoryMethodLinear(t){return new f_(this.times,this.values,this.getValueSize(),t)}}_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Qn{constructor(t,e,n){super(t,e,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=_o;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Qn{}ks.prototype.ValueTypeName="vector";class lh{constructor(t="",e=-1,n=[],i=gd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Oi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(m_(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(Qn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=c_(l);l=ah(l,1,h),c=ah(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new bo(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const m=[],p=[];Ru(f,m,p,g),m.length!==0&&_.push(new d(u,m,p))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==u[g].morphTargets.length;++v){const y=u[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new bo(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+e[d].name+"]";n(ks,f+".position",u,"pos",i),n(_r,f+".quaternion",u,"rot",i),n(ks,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function p_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bo;case"vector":case"vector2":case"vector3":case"vector4":return ks;case"color":return Pu;case"quaternion":return _r;case"bool":case"boolean":return Xs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function m_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=p_(r.type);if(r.times===void 0){const e=[],n=[];Ru(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const So={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class g_{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Lu=new g_;class Si{constructor(t){this.manager=t!==void 0?t:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Si.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class __ extends Error{constructor(t,e){super(t),this.response=e}}class Lo extends Si{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=So.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ai[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){d.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,I=h.length;C<I;C++){const N=h[C];N.onProgress&&N.onProgress(D)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new __(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{So.add(t,c);const h=ai[t];delete ai[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ai[t];if(h===void 0)throw this.manager.itemError(t),c;delete ai[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class v_ extends Si{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=So.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=mr("img");function l(){h(),So.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class x_ extends Si{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Ul,a=new Lo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Gn,o.wrapT=c.wrapT!==void 0?c.wrapT:Gn,o.magFilter=c.magFilter!==void 0?c.magFilter:bn,o.minFilter=c.minFilter!==void 0?c.minFilter:bn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=_i),c.mipmapCount===1&&(o.minFilter=bn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class Ol extends Si{constructor(t){super(t)}load(t,e,n,i){const s=new Je,o=new v_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Io extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ga=new te,ch=new k,hh=new k;class kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ch.setFromMatrixPosition(t.matrixWorld),e.position.copy(ch),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class y_ extends kl{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class M_ extends Io{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const uh=new te,nr=new k,_a=new k;class b_ extends kl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),_a.copy(n.position),_a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_a),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh)}}class Iu extends Io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new b_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class S_ extends kl{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xl extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new S_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Du extends Io{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Nu{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Uu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=dh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function dh(){return performance.now()}const fh=new te;class E_{constructor(t,e,n=0,i=1/0){this.ray=new Hs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fh),this}intersectObject(t,e=!0,n=[]){return yl(t,this,n,e),n.sort(ph),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)yl(t[i],this,n,e);return n.sort(ph),n}}function ph(r,t){return r.distance-t.distance}function yl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)yl(s[o],t,e,!0)}}class mh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(en(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w_ extends ns{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const dr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T_=new Co(-1,1,1,-1,0,1);class A_ extends $e{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const C_=new A_;class Do{constructor(t){this._mesh=new Qt(C_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class R_ extends ss{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xi.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Do(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gh extends ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class P_ extends ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class L_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new R_(dr),this.copyPass.material.blending=cn,this.clock=new Uu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gh!==void 0&&(o instanceof gh?n=!0:o instanceof P_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class I_ extends ss{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Yt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const D_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class N_ extends ss{constructor(){super();const t=D_;this.uniforms=xi.clone(t.uniforms),this.material=new r_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Do(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ce.getTransfer(this._outputColorSpace)===we&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const U_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Yt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zs extends ss{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new Yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(s,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Sn(s,o,{type:Wn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Sn(s,o,{type:Wn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=U_;this.highPassUniforms=xi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new It(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=dr;this.copyUniforms=xi.clone(h.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ra,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Yt,this.oldClearAlpha=1,this.basic=new Bi,this.fsQuad=new Do(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new It(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=zs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zs.BlurDirectionX=new It(1,0);zs.BlurDirectionY=new It(0,1);class F_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=t-u,_=e-f;let m,p;g>_?(m=1,p=0):(m=0,p=1);const v=g-m+h,y=_-p+h,x=g-1+2*h,D=_-1+2*h,C=l&255,I=c&255,N=this.perm[C+this.perm[I]]%12,E=this.perm[C+m+this.perm[I+p]]%12,b=this.perm[C+1+this.perm[I+1]]%12;let U=.5-g*g-_*_;U<0?n=0:(U*=U,n=U*U*this.dot(this.grad3[N],g,_));let G=.5-v*v-y*y;G<0?i=0:(G*=G,i=G*G*this.dot(this.grad3[E],v,y));let O=.5-x*x-D*D;return O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[b],x,D)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),d=Math.floor(e+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,_=h-g,m=d-g,p=u-g,v=t-_,y=e-m,x=n-p;let D,C,I,N,E,b;v>=y?y>=x?(D=1,C=0,I=0,N=1,E=1,b=0):v>=x?(D=1,C=0,I=0,N=1,E=0,b=1):(D=0,C=0,I=1,N=1,E=0,b=1):y<x?(D=0,C=0,I=1,N=0,E=1,b=1):v<x?(D=0,C=1,I=0,N=0,E=1,b=1):(D=0,C=1,I=0,N=1,E=1,b=0);const U=v-D+f,G=y-C+f,O=x-I+f,z=v-N+2*f,H=y-E+2*f,F=x-b+2*f,$=v-1+3*f,V=y-1+3*f,Z=x-1+3*f,ct=h&255,ht=d&255,ot=u&255,_t=this.perm[ct+this.perm[ht+this.perm[ot]]]%12,Y=this.perm[ct+D+this.perm[ht+C+this.perm[ot+I]]]%12,J=this.perm[ct+N+this.perm[ht+E+this.perm[ot+b]]]%12,st=this.perm[ct+1+this.perm[ht+1+this.perm[ot+1]]]%12;let it=.6-v*v-y*y-x*x;it<0?i=0:(it*=it,i=it*it*this.dot3(this.grad3[_t],v,y,x));let gt=.6-U*U-G*G-O*O;gt<0?s=0:(gt*=gt,s=gt*gt*this.dot3(this.grad3[Y],U,G,O));let Dt=.6-z*z-H*H-F*F;Dt<0?o=0:(Dt*=Dt,o=Dt*Dt*this.dot3(this.grad3[J],z,H,F));let qt=.6-$*$-V*V-Z*Z;return qt<0?a=0:(qt*=qt,a=qt*qt*this.dot3(this.grad3[st],$,V,Z)),32*(i+s+o+a)}noise4d(t,e,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,f,g;const _=(t+e+n+i)*l,m=Math.floor(t+_),p=Math.floor(e+_),v=Math.floor(n+_),y=Math.floor(i+_),x=(m+p+v+y)*c,D=m-x,C=p-x,I=v-x,N=y-x,E=t-D,b=e-C,U=n-I,G=i-N,O=E>b?32:0,z=E>U?16:0,H=b>U?8:0,F=E>G?4:0,$=b>G?2:0,V=U>G?1:0,Z=O+z+H+F+$+V,ct=o[Z][0]>=3?1:0,ht=o[Z][1]>=3?1:0,ot=o[Z][2]>=3?1:0,_t=o[Z][3]>=3?1:0,Y=o[Z][0]>=2?1:0,J=o[Z][1]>=2?1:0,st=o[Z][2]>=2?1:0,it=o[Z][3]>=2?1:0,gt=o[Z][0]>=1?1:0,Dt=o[Z][1]>=1?1:0,qt=o[Z][2]>=1?1:0,Te=o[Z][3]>=1?1:0,ue=E-ct+c,Re=b-ht+c,X=U-ot+c,je=G-_t+c,se=E-Y+2*c,re=b-J+2*c,Ht=U-st+2*c,ye=G-it+2*c,Vt=E-gt+3*c,B=b-Dt+3*c,T=U-qt+3*c,K=G-Te+3*c,lt=E-1+4*c,dt=b-1+4*c,at=U-1+4*c,Nt=G-1+4*c,yt=m&255,St=p&255,oe=v&255,pt=y&255,At=a[yt+a[St+a[oe+a[pt]]]]%32,Xt=a[yt+ct+a[St+ht+a[oe+ot+a[pt+_t]]]]%32,Kt=a[yt+Y+a[St+J+a[oe+st+a[pt+it]]]]%32,Ct=a[yt+gt+a[St+Dt+a[oe+qt+a[pt+Te]]]]%32,de=a[yt+1+a[St+1+a[oe+1+a[pt+1]]]]%32;let $t=.6-E*E-b*b-U*U-G*G;$t<0?h=0:($t*=$t,h=$t*$t*this.dot4(s[At],E,b,U,G));let fe=.6-ue*ue-Re*Re-X*X-je*je;fe<0?d=0:(fe*=fe,d=fe*fe*this.dot4(s[Xt],ue,Re,X,je));let W=.6-se*se-re*re-Ht*Ht-ye*ye;W<0?u=0:(W*=W,u=W*W*this.dot4(s[Kt],se,re,Ht,ye));let vt=.6-Vt*Vt-B*B-T*T-K*K;vt<0?f=0:(vt*=vt,f=vt*vt*this.dot4(s[Ct],Vt,B,T,K));let nt=.6-lt*lt-dt*dt-at*at-Nt*Nt;return nt<0?g=0:(nt*=nt,g=nt*nt*this.dot4(s[de],lt,dt,at,Nt)),27*(h+d+u+f+g)}}const to={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new It},cameraProjectionMatrix:{value:new te},cameraInverseProjectionMatrix:{value:new te},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background
				
			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},eo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},no={uniforms:{tDiffuse:{value:null},resolution:{value:new It}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class gi extends ss{constructor(t,e,n,i,s=32){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(s),this.generateRandomKernelRotations();const o=new Nl;o.format=es,o.type=ts,this.normalRenderTarget=new Sn(this.width,this.height,{minFilter:hn,magFilter:hn,type:Wn,depthTexture:o}),this.ssaoRenderTarget=new Sn(this.width,this.height,{type:Wn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new We({defines:Object.assign({},to.defines),uniforms:xi.clone(to.uniforms),vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,blending:cn}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new o_,this.normalMaterial.blending=cn,this.blurMaterial=new We({defines:Object.assign({},no.defines),uniforms:xi.clone(no.uniforms),vertexShader:no.vertexShader,fragmentShader:no.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new We({defines:Object.assign({},eo.defines),uniforms:xi.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,blending:cn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new We({uniforms:xi.clone(dr.uniforms),vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Kh,blendDst:Pa,blendEquation:mi,blendSrcAlpha:Yh,blendDstAlpha:Pa,blendEquationAlpha:mi}),this.fsQuad=new Do(null),this.originalClearColor=new Yt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(t,e,n){switch(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case gi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case gi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case gi.OUTPUT.Depth:this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case gi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=cn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case gi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=jh,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const i=new k;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let s=n/t;s=Mn.lerp(.1,1,s*s),i.multiplyScalar(s),e.push(i)}}generateRandomKernelRotations(){const n=new F_,i=4*4,s=new Float32Array(i);for(let o=0;o<i;o++){const a=Math.random()*2-1,l=Math.random()*2-1,c=0;s[o]=n.noise3d(a,l,c)}this.noiseTexture=new Ul(s,4,4,Tl,Vn),this.noiseTexture.wrapS=gn,this.noiseTexture.wrapT=gn,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const i=e.get(n);n.visible=i}),e.clear()}}gi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const _h={type:"change"},zl={type:"start"},Fu={type:"end"},io=new Hs,vh=new pi,B_=Math.cos(70*Mn.DEG2RAD),Ve=new k,pn=2*Math.PI,Ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},va=1e-6;class O_ extends w_{constructor(t,e=null){super(t,e),this.state=Ce.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new bi,this._lastTargetPosition=new k,this._quat=new bi().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mh,this._sphericalDelta=new mh,this._scale=1,this._panOffset=new k,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new k,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z_.bind(this),this._onPointerDown=k_.bind(this),this._onPointerUp=G_.bind(this),this._onContextMenu=Y_.bind(this),this._onMouseWheel=W_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=H_.bind(this),this._interceptControlDown=K_.bind(this),this._interceptControlUp=Z_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_h),this.update(),this.state=Ce.NONE}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===Ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(io.origin.copy(this.object.position),io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(io.direction))<B_?this.object.lookAt(this.target):(vh.setFromNormalAndCoplanarPoint(this.object.up,this.target),io.intersectPlane(vh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>va||this._lastTargetPosition.distanceToSquared(this.target)>va?(this.dispatchEvent(_h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ve.copy(i).sub(this.target);let s=Ve.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function k_(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function z_(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function G_(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fu),this.state=Ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V_(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ce.DOLLY;break;case As.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ce.ROTATE}break;case As.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ce.PAN}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zl)}function H_(r){switch(this.state){case Ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function W_(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ce.NONE||(r.preventDefault(),this.dispatchEvent(zl),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fu))}function q_(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function X_(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ce.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ce.TOUCH_PAN;break;default:this.state=Ce.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ce.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ce.TOUCH_DOLLY_ROTATE;break;default:this.state=Ce.NONE}break;default:this.state=Ce.NONE}this.state!==Ce.NONE&&this.dispatchEvent(zl)}function j_(r){switch(this._trackPointer(r),this.state){case Ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ce.NONE}}function Y_(r){this.enabled!==!1&&r.preventDefault()}function K_(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z_(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let xa=null,ya=null;function Bu(){if(xa&&ya)return{bumpMap:xa,normalMap:ya};const r=2048,t=document.createElement("canvas");t.width=r,t.height=r;const e=t.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,r,r);const n=e.getImageData(0,0,r,r),i=n.data;for(let g=0;g<i.length;g+=4){const _=(Math.random()-.5)*32,m=Math.min(255,Math.max(0,128+_));i[g]=m,i[g+1]=m,i[g+2]=m}e.putImageData(n,0,0);const s=36;for(let g=0;g<s;g++){const _=Math.random()*r,m=Math.random()*r,p=60+Math.random()*80,v=Math.random()*Math.PI*2;e.save(),e.translate(_,m),e.rotate(v);for(let y=5;y<p;y+=3.5){const x=.18+Math.random()*.2;e.strokeStyle=Math.random()>.45?`rgba(240, 240, 240, ${x})`:`rgba(15, 15, 15, ${x})`,e.lineWidth=2,e.beginPath();const D=54;for(let C=0;C<=D;C++){const I=C/D*Math.PI*2,N=Math.sin(I*5+g)*4+Math.cos(I*8)*2.5,E=Math.cos(I)*(y+N),b=Math.sin(I)*(y*1.5+N);C===0?e.moveTo(E,b):e.lineTo(E,b)}e.stroke()}e.restore()}for(let g=0;g<28;g++){const _=Math.random()*r,m=Math.random()*r,p=18+Math.random()*26,v=Math.random()*Math.PI*2;e.save(),e.translate(_,m),e.rotate(v),e.strokeStyle="rgba(20, 20, 20, 0.48)",e.lineWidth=2.6,e.beginPath(),e.arc(0,0,p,.2,Math.PI-.2),e.stroke(),e.strokeStyle="rgba(240, 240, 240, 0.40)",e.lineWidth=2.2,e.beginPath(),e.arc(0,2,p,.2,Math.PI-.2),e.stroke(),e.restore()}for(let g=0;g<22;g++){const _=Math.random()*r,m=Math.random()*r,p=80+Math.random()*120,v=Math.random()*Math.PI*2;e.save(),e.translate(_,m),e.rotate(v);for(let y=-14;y<=14;y+=4){const x=e.createLinearGradient(0,y,p,y);x.addColorStop(0,"rgba(128,128,128,0)"),x.addColorStop(.3,Math.random()>.5?"rgba(220,220,220,0.26)":"rgba(40,40,40,0.24)"),x.addColorStop(.7,Math.random()>.5?"rgba(220,220,220,0.26)":"rgba(40,40,40,0.24)"),x.addColorStop(1,"rgba(128,128,128,0)"),e.strokeStyle=x,e.lineWidth=2.4,e.beginPath(),e.moveTo(0,y),e.lineTo(p,y),e.stroke()}e.restore()}const o=new oh(t);o.wrapS=gn,o.wrapT=gn,o.repeat.set(3,3),o.needsUpdate=!0;const a=document.createElement("canvas");a.width=r,a.height=r;const l=a.getContext("2d"),c=e.getImageData(0,0,r,r).data,h=l.createImageData(r,r),d=h.data,u=1.8;for(let g=0;g<r;g++)for(let _=0;_<r;_++){const m=(g*r+_)*4,p=_>0?_-1:r-1,v=_<r-1?_+1:0,y=g>0?g-1:r-1,x=g<r-1?g+1:0,D=c[(g*r+p)*4]/255,C=c[(g*r+v)*4]/255,I=c[(y*r+_)*4]/255,N=c[(x*r+_)*4]/255,E=(C-D)*u,b=(N-I)*u,U=1,G=Math.sqrt(E*E+b*b+U*U);d[m]=Math.floor((E/G*.5+.5)*255),d[m+1]=Math.floor((-b/G*.5+.5)*255),d[m+2]=Math.floor((U/G*.5+.5)*255),d[m+3]=255}l.putImageData(h,0,0);const f=new oh(a);return f.wrapS=gn,f.wrapT=gn,f.repeat.set(3,3),f.needsUpdate=!0,xa=o,ya=f,{bumpMap:o,normalMap:f}}const Ze={turfGreen:3706428,turfGreenDark:3046706,menhirRock:8622482,menhirMoss:2600544,goldChalice:16101441,candleWax:16577487,ballWhite:16316921,ballBlack:1515562,tunicWhite:16645886,gauloisYellow:15965202,altarStone:9807270,altarWood:7220224};function ze(r,t={}){const{bumpMap:e,normalMap:n}=Bu(),i=r??13421772,s=t.roughness!==void 0?t.roughness:.85,o=t.metalness!==void 0?t.metalness:.02,a=t.bumpScale!==void 0?t.bumpScale:.045,l=new Os({color:i,roughness:s,metalness:o,bumpMap:e,bumpScale:a,normalMap:n,normalScale:new It(.4,.4),...t});return l.onBeforeCompile=c=>{c.uniforms.sssColor={value:new Yt(16747586)},c.uniforms.sssIntensity={value:t.sssIntensity!==void 0?t.sssIntensity:.35},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
       varying vec3 vViewNormalClay;
       varying vec3 vViewPosClay;`),c.vertexShader=c.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
       vViewNormalClay = normalize(transformedNormal);`),c.vertexShader=c.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
       vViewPosClay = -mvPosition.xyz;`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
       uniform vec3 sssColor;
       uniform float sssIntensity;
       varying vec3 vViewNormalClay;
       varying vec3 vViewPosClay;`),c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
       vec3 nClay = normalize(vViewNormalClay);
       vec3 vClay = normalize(vViewPosClay);
       float sssFresnel = 1.0 - max(dot(nClay, vClay), 0.0);
       sssFresnel = pow(sssFresnel, 2.8);
       gl_FragColor.rgb += sssColor * sssFresnel * sssIntensity;`)},l}const $_=/^[og]\s*(.+)?/,J_=/^mtllib /,Q_=/^usemtl /,tv=/^usemap /,xh=/\s+/,yh=new k,Ma=new k,Mh=new k,bh=new k,An=new k,so=new Yt;function ev(){const r={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const i=this.vertices,s=this.object.geometry.vertices;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const i=this.normals,s=this.object.geometry.normals;s.push(i[t+0],i[t+1],i[t+2]),s.push(i[e+0],i[e+1],i[e+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(t,e,n){const i=this.vertices,s=this.object.geometry.normals;yh.fromArray(i,t),Ma.fromArray(i,e),Mh.fromArray(i,n),An.subVectors(Mh,Ma),bh.subVectors(yh,Ma),An.cross(bh),An.normalize(),s.push(An.x,An.y,An.z),s.push(An.x,An.y,An.z),s.push(An.x,An.y,An.z)},addColor:function(t,e,n){const i=this.colors,s=this.object.geometry.colors;i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(t,e,n){const i=this.uvs,s=this.object.geometry.uvs;s.push(i[t+0],i[t+1]),s.push(i[e+0],i[e+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,i,s,o,a,l,c){const h=this.vertices.length;let d=this.parseVertexIndex(t,h),u=this.parseVertexIndex(e,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),a!==void 0&&a!==""){const g=this.normals.length;d=this.parseNormalIndex(a,g),u=this.parseNormalIndex(l,g),f=this.parseNormalIndex(c,g),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==""){const g=this.uvs.length;d=this.parseUVIndex(i,g),u=this.parseUVIndex(s,g),f=this.parseUVIndex(o,g),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,i=t.length;n<i;n++){const s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,i=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],i))}};return r.startObject("",!1),r}class nv extends Si{constructor(t){super(t),this.materials=null}load(t,e,n,i){const s=this,o=new Lo(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new ev;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let i=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const d=c.split(xh);switch(d[0]){case"v":e.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(so.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),Pe),e.colors.push(so.r,so.g,so.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":e.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(h==="f"){const u=c.slice(1).trim().split(xh),f=[];for(let _=0,m=u.length;_<m;_++){const p=u[_];if(p.length>0){const v=p.split("/");f.push(v)}}const g=f[0];for(let _=1,m=f.length-1;_<m;_++){const p=f[_],v=f[_+1];e.addFace(g[0],p[0],v[0],g[1],p[1],v[1],g[2],p[2],v[2])}}else if(h==="l"){const d=c.substring(1).trim().split(" ");let u=[];const f=[];if(c.indexOf("/")===-1)u=d;else for(let g=0,_=d.length;g<_;g++){const m=d[g].split("/");m[0]!==""&&u.push(m[0]),m[1]!==""&&f.push(m[1])}e.addLineGeometry(u,f)}else if(h==="p"){const u=c.slice(1).trim().split(" ");e.addPointGeometry(u)}else if((i=$_.exec(c))!==null){const d=(" "+i[0].slice(1).trim()).slice(1);e.startObject(d)}else if(Q_.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(J_.test(c))e.materialLibraries.push(c.substring(7).trim());else if(tv.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(i=c.split(" "),i.length>1){const u=i[1].trim().toLowerCase();e.object.smooth=u!=="0"&&u!=="off"}else e.object.smooth=!0;const d=e.object.currentMaterial();d&&(d.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const s=new De;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],h=c.geometry,d=c.materials,u=h.type==="Line",f=h.type==="Points";let g=!1;if(h.vertices.length===0)continue;const _=new $e;_.setAttribute("position",new ge(h.vertices,3)),h.normals.length>0&&_.setAttribute("normal",new ge(h.normals,3)),h.colors.length>0&&(g=!0,_.setAttribute("color",new ge(h.colors,3))),h.hasUVIndices===!0&&_.setAttribute("uv",new ge(h.uvs,2));const m=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],D=x.name+"_"+x.smooth+"_"+g;let C=e.materials[D];if(this.materials!==null){if(C=this.materials.create(x.name),u&&C&&!(C instanceof Ls)){const I=new Ls;In.prototype.copy.call(I,C),I.color.copy(C.color),C=I}else if(f&&C&&!(C instanceof Ji)){const I=new Ji({size:10,sizeAttenuation:!1});In.prototype.copy.call(I,C),I.color.copy(C.color),I.map=C.map,C=I}}C===void 0&&(u?C=new Ls:f?C=new Ji({size:1,sizeAttenuation:!1}):C=new Mo,C.name=x.name,C.flatShading=!x.smooth,C.vertexColors=g,e.materials[D]=C),m.push(C)}let p;if(m.length>1){for(let v=0,y=d.length;v<y;v++){const x=d[v];_.addGroup(x.groupStart,x.groupCount,v)}u?p=new _l(_,m):f?p=new ur(_,m):p=new Qt(_,m)}else u?p=new _l(_,m[0]):f?p=new ur(_,m[0]):p=new Qt(_,m[0]);p.name=c.name,s.add(p)}else if(e.vertices.length>0){const a=new Ji({size:1,sizeAttenuation:!1}),l=new $e;l.setAttribute("position",new ge(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ge(e.colors,3)),a.vertexColors=!0);const c=new ur(l,a);s.add(c)}return s}}class iv extends Si{constructor(t){super(t)}load(t,e,n,i){const s=this,o=this.path===""?Nu.extractUrlBase(t):this.path,a=new Lo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const n=t.split(`
`);let i={};const s=/\s+/,o={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let d=h>=0?c.substring(0,h):c;d=d.toLowerCase();let u=h>=0?c.substring(h+1):"";if(u=u.trim(),d==="newmtl")i={name:u},o[u]=i;else if(d==="ka"||d==="kd"||d==="ks"||d==="ke"){const f=u.split(s,3);i[d]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else i[d]=u}const a=new sv(this.resourcePath||e,this.materialOptions);return a.setCrossOrigin(this.crossOrigin),a.setManager(this.manager),a.setMaterials(o),a}}class sv{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:Jn,this.wrap=this.options.wrap!==void 0?this.options.wrap:gn}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const n in t){const i=t[n],s={};e[n]=s;for(const o in i){let a=!0,l=i[o];const c=o.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(a=!1);break}a&&(s[c]=l)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,n=this.materialsInfo[t],i={name:t,side:this.side};function s(a,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:a+l}function o(a,l){if(i[a])return;const c=e.getTextureParams(l,i),h=e.loadTexture(s(e.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(a==="map"||a==="emissiveMap")&&(h.colorSpace=Pe),i[a]=h}for(const a in n){const l=n[a];let c;if(l!=="")switch(a.toLowerCase()){case"kd":i.color=ce.toWorkingColorSpace(new Yt().fromArray(l),Pe);break;case"ks":i.specular=ce.toWorkingColorSpace(new Yt().fromArray(l),Pe);break;case"ke":i.emissive=ce.toWorkingColorSpace(new Yt().fromArray(l),Pe);break;case"map_kd":o("map",l);break;case"map_ks":o("specularMap",l);break;case"map_ke":o("emissiveMap",l);break;case"norm":o("normalMap",l);break;case"map_bump":case"bump":o("bumpMap",l);break;case"map_d":o("alphaMap",l),i.transparent=!0;break;case"ns":i.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(i.opacity=c,i.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(i.opacity=1-c,i.transparent=!0);break}}return this.materials[t]=new Mo(i),this.materials[t]}getTextureParams(t,e){const n={scale:new It(1,1),offset:new It(0,0)},i=t.split(/\s+/);let s;return s=i.indexOf("-bm"),s>=0&&(e.bumpScale=parseFloat(i[s+1]),i.splice(s,2)),s=i.indexOf("-s"),s>=0&&(n.scale.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),s=i.indexOf("-o"),s>=0&&(n.offset.set(parseFloat(i[s+1]),parseFloat(i[s+2])),i.splice(s,4)),n.url=i.join(" ").trim(),n}loadTexture(t,e,n,i,s){const o=this.manager!==void 0?this.manager:Lu;let a=o.getHandler(t);a===null&&(a=new Ol(o)),a.setCrossOrigin&&a.setCrossOrigin(this.crossOrigin);const l=a.load(t,n,i,s);return e!==void 0&&(l.mapping=e),l}}class Sh extends x_{constructor(t){super(t)}parse(t){function e(F){switch(F.image_type){case u:case _:if(F.colormap_length>256||F.colormap_size!==24||F.colormap_type!==1)throw new Error("THREE.TGALoader: Invalid type colormap data for indexed type.");break;case f:case g:case m:case p:if(F.colormap_type)throw new Error("THREE.TGALoader: Invalid type colormap data for colormap type.");break;case d:throw new Error("THREE.TGALoader: No data.");default:throw new Error("THREE.TGALoader: Invalid type "+F.image_type)}if(F.width<=0||F.height<=0)throw new Error("THREE.TGALoader: Invalid image size.");if(F.pixel_size!==8&&F.pixel_size!==16&&F.pixel_size!==24&&F.pixel_size!==32)throw new Error("THREE.TGALoader: Invalid pixel size "+F.pixel_size)}function n(F,$,V,Z,ct){let ht,ot;const _t=V.pixel_size>>3,Y=V.width*V.height*_t;if($&&(ot=ct.subarray(Z,Z+=V.colormap_length*(V.colormap_size>>3))),F){ht=new Uint8Array(Y);let J,st,it,gt=0;const Dt=new Uint8Array(_t);for(;gt<Y;)if(J=ct[Z++],st=(J&127)+1,J&128){for(it=0;it<_t;++it)Dt[it]=ct[Z++];for(it=0;it<st;++it)ht.set(Dt,gt+it*_t);gt+=_t*st}else{for(st*=_t,it=0;it<st;++it)ht[gt+it]=ct[Z++];gt+=st}}else ht=ct.subarray(Z,Z+=$?V.width*V.height:Y);return{pixel_data:ht,palettes:ot}}function i(F,$,V,Z,ct,ht,ot,_t,Y){const J=Y;let st,it=0,gt,Dt;const qt=b.width;for(Dt=$;Dt!==Z;Dt+=V)for(gt=ct;gt!==ot;gt+=ht,it++)st=_t[it],F[(gt+qt*Dt)*4+3]=255,F[(gt+qt*Dt)*4+2]=J[st*3+0],F[(gt+qt*Dt)*4+1]=J[st*3+1],F[(gt+qt*Dt)*4+0]=J[st*3+2];return F}function s(F,$,V,Z,ct,ht,ot,_t){let Y,J=0,st,it;const gt=b.width;for(it=$;it!==Z;it+=V)for(st=ct;st!==ot;st+=ht,J+=2)Y=_t[J+0]+(_t[J+1]<<8),F[(st+gt*it)*4+0]=(Y&31744)>>7,F[(st+gt*it)*4+1]=(Y&992)>>2,F[(st+gt*it)*4+2]=(Y&31)<<3,F[(st+gt*it)*4+3]=Y&32768?0:255;return F}function o(F,$,V,Z,ct,ht,ot,_t){let Y=0,J,st;const it=b.width;for(st=$;st!==Z;st+=V)for(J=ct;J!==ot;J+=ht,Y+=3)F[(J+it*st)*4+3]=255,F[(J+it*st)*4+2]=_t[Y+0],F[(J+it*st)*4+1]=_t[Y+1],F[(J+it*st)*4+0]=_t[Y+2];return F}function a(F,$,V,Z,ct,ht,ot,_t){let Y=0,J,st;const it=b.width;for(st=$;st!==Z;st+=V)for(J=ct;J!==ot;J+=ht,Y+=4)F[(J+it*st)*4+2]=_t[Y+0],F[(J+it*st)*4+1]=_t[Y+1],F[(J+it*st)*4+0]=_t[Y+2],F[(J+it*st)*4+3]=_t[Y+3];return F}function l(F,$,V,Z,ct,ht,ot,_t){let Y,J=0,st,it;const gt=b.width;for(it=$;it!==Z;it+=V)for(st=ct;st!==ot;st+=ht,J++)Y=_t[J],F[(st+gt*it)*4+0]=Y,F[(st+gt*it)*4+1]=Y,F[(st+gt*it)*4+2]=Y,F[(st+gt*it)*4+3]=255;return F}function c(F,$,V,Z,ct,ht,ot,_t){let Y=0,J,st;const it=b.width;for(st=$;st!==Z;st+=V)for(J=ct;J!==ot;J+=ht,Y+=2)F[(J+it*st)*4+0]=_t[Y+0],F[(J+it*st)*4+1]=_t[Y+0],F[(J+it*st)*4+2]=_t[Y+0],F[(J+it*st)*4+3]=_t[Y+1];return F}function h(F,$,V,Z,ct){let ht,ot,_t,Y,J,st;switch((b.flags&v)>>y){default:case C:ht=0,_t=1,J=$,ot=0,Y=1,st=V;break;case x:ht=0,_t=1,J=$,ot=V-1,Y=-1,st=-1;break;case I:ht=$-1,_t=-1,J=-1,ot=0,Y=1,st=V;break;case D:ht=$-1,_t=-1,J=-1,ot=V-1,Y=-1,st=-1;break}if(O)switch(b.pixel_size){case 8:l(F,ot,Y,st,ht,_t,J,Z);break;case 16:c(F,ot,Y,st,ht,_t,J,Z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}else switch(b.pixel_size){case 8:i(F,ot,Y,st,ht,_t,J,Z,ct);break;case 16:s(F,ot,Y,st,ht,_t,J,Z);break;case 24:o(F,ot,Y,st,ht,_t,J,Z);break;case 32:a(F,ot,Y,st,ht,_t,J,Z);break;default:throw new Error("THREE.TGALoader: Format not supported.")}return F}const d=0,u=1,f=2,g=3,_=9,m=10,p=11,v=48,y=4,x=0,D=1,C=2,I=3;if(t.length<19)throw new Error("THREE.TGALoader: Not enough data to contain header.");let N=0;const E=new Uint8Array(t),b={id_length:E[N++],colormap_type:E[N++],image_type:E[N++],colormap_index:E[N++]|E[N++]<<8,colormap_length:E[N++]|E[N++]<<8,colormap_size:E[N++],origin:[E[N++]|E[N++]<<8,E[N++]|E[N++]<<8],width:E[N++]|E[N++]<<8,height:E[N++]|E[N++]<<8,pixel_size:E[N++],flags:E[N++]};if(e(b),b.id_length+N>t.length)throw new Error("THREE.TGALoader: No data.");N+=b.id_length;let U=!1,G=!1,O=!1;switch(b.image_type){case _:U=!0,G=!0;break;case u:G=!0;break;case m:U=!0;break;case f:break;case p:U=!0,O=!0;break;case g:O=!0;break}const z=new Uint8Array(b.width*b.height*4),H=n(U,G,b,N,E);return h(z,b.width,b.height,H.pixel_data,H.palettes),{data:z,width:b.width,height:b.height,flipY:!0,generateMipmaps:!0,minFilter:_i}}}class rv extends Si{load(t,e,n,i){const s=this,o=s.path===""?Nu.extractUrlBase(t):s.path,a=new Lo(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(l){try{e(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(t)}},n,i)}parse(t,e){function n(S,M){const R=[],A=S.childNodes;for(let L=0,et=A.length;L<et;L++){const rt=A[L];rt.nodeName===M&&R.push(rt)}return R}function i(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),R=new Array(M.length);for(let A=0,L=M.length;A<L;A++)R[A]=M[A];return R}function s(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),R=new Array(M.length);for(let A=0,L=M.length;A<L;A++)R[A]=parseFloat(M[A]);return R}function o(S){if(S.length===0)return[];const M=S.trim().split(/\s+/),R=new Array(M.length);for(let A=0,L=M.length;A<L;A++)R[A]=parseInt(M[A]);return R}function a(S){return S.substring(1)}function l(){return"three_default_"+ju++}function c(S){return Object.keys(S).length===0}function h(S){return{unit:d(n(S,"unit")[0]),upAxis:u(n(S,"up_axis")[0])}}function d(S){return S!==void 0&&S.hasAttribute("meter")===!0?parseFloat(S.getAttribute("meter")):1}function u(S){return S!==void 0?S.textContent:"Y_UP"}function f(S,M,R,A){const L=n(S,M)[0];if(L!==void 0){const et=n(L,R);for(let rt=0;rt<et.length;rt++)A(et[rt])}}function g(S,M){for(const R in S){const A=S[R];A.build=M(S[R])}}function _(S,M){return S.build!==void 0||(S.build=M(S)),S.build}function m(S){const M={sources:{},samplers:{},channels:{}};let R=!1;for(let A=0,L=S.childNodes.length;A<L;A++){const et=S.childNodes[A];if(et.nodeType!==1)continue;let rt;switch(et.nodeName){case"source":rt=et.getAttribute("id"),M.sources[rt]=nt(et);break;case"sampler":rt=et.getAttribute("id"),M.samplers[rt]=p(et);break;case"channel":rt=et.getAttribute("target"),M.channels[rt]=v(et);break;case"animation":m(et),R=!0;break;default:console.log(et)}}R===!1&&(Zt.animations[S.getAttribute("id")||Mn.generateUUID()]=M)}function p(S){const M={inputs:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"input":const et=a(L.getAttribute("source")),rt=L.getAttribute("semantic");M.inputs[rt]=et;break}}return M}function v(S){const M={};let A=S.getAttribute("target").split("/");const L=A.shift();let et=A.shift();const rt=et.indexOf("(")!==-1,Rt=et.indexOf(".")!==-1;if(Rt)A=et.split("."),et=A.shift(),M.member=A.shift();else if(rt){const xt=et.split("(");et=xt.shift();for(let wt=0;wt<xt.length;wt++)xt[wt]=parseInt(xt[wt].replace(/\)/,""));M.indices=xt}return M.id=L,M.sid=et,M.arraySyntax=rt,M.memberSyntax=Rt,M.sampler=a(S.getAttribute("source")),M}function y(S){const M=[],R=S.channels,A=S.samplers,L=S.sources;for(const et in R)if(R.hasOwnProperty(et)){const rt=R[et],Rt=A[rt.sampler],xt=Rt.inputs.INPUT,wt=Rt.inputs.OUTPUT,Gt=L[xt],ft=L[wt],zt=D(rt,Gt,ft);b(zt,M)}return M}function x(S){return _(Zt.animations[S],y)}function D(S,M,R){const A=Zt.nodes[S.id],L=Ue(A.id),et=A.transforms[S.sid],rt=A.matrix.clone().transpose();let Rt,xt,wt,Gt,ft,zt;const Ut={};switch(et){case"matrix":for(wt=0,Gt=M.array.length;wt<Gt;wt++)if(Rt=M.array[wt],xt=wt*R.stride,Ut[Rt]===void 0&&(Ut[Rt]={}),S.arraySyntax===!0){const Ne=R.array[xt],Ee=S.indices[0]+4*S.indices[1];Ut[Rt][Ee]=Ne}else for(ft=0,zt=R.stride;ft<zt;ft++)Ut[Rt][ft]=R.array[xt+ft];break;case"translate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',et);break;case"rotate":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',et);break;case"scale":console.warn('THREE.ColladaLoader: Animation transform type "%s" not yet implemented.',et);break}const jt=C(Ut,rt);return{name:L.uuid,keyframes:jt}}function C(S,M){const R=[];for(const L in S)R.push({time:parseFloat(L),value:S[L]});R.sort(A);for(let L=0;L<16;L++)U(R,L,M.elements[L]);return R;function A(L,et){return L.time-et.time}}const I=new k,N=new k,E=new bi;function b(S,M){const R=S.keyframes,A=S.name,L=[],et=[],rt=[],Rt=[];for(let xt=0,wt=R.length;xt<wt;xt++){const Gt=R[xt],ft=Gt.time,zt=Gt.value;q.fromArray(zt).transpose(),q.decompose(I,E,N),L.push(ft),et.push(I.x,I.y,I.z),rt.push(E.x,E.y,E.z,E.w),Rt.push(N.x,N.y,N.z)}return et.length>0&&M.push(new ks(A+".position",L,et)),rt.length>0&&M.push(new _r(A+".quaternion",L,rt)),Rt.length>0&&M.push(new ks(A+".scale",L,Rt)),M}function U(S,M,R){let A,L=!0,et,rt;for(et=0,rt=S.length;et<rt;et++)A=S[et],A.value[M]===void 0?A.value[M]=null:L=!1;if(L===!0)for(et=0,rt=S.length;et<rt;et++)A=S[et],A.value[M]=R;else G(S,M)}function G(S,M){let R,A;for(let L=0,et=S.length;L<et;L++){const rt=S[L];if(rt.value[M]===null){if(R=O(S,L,M),A=z(S,L,M),R===null){rt.value[M]=A.value[M];continue}if(A===null){rt.value[M]=R.value[M];continue}H(rt,R,A,M)}}}function O(S,M,R){for(;M>=0;){const A=S[M];if(A.value[R]!==null)return A;M--}return null}function z(S,M,R){for(;M<S.length;){const A=S[M];if(A.value[R]!==null)return A;M++}return null}function H(S,M,R,A){if(R.time-M.time===0){S.value[A]=M.value[A];return}S.value[A]=(S.time-M.time)*(R.value[A]-M.value[A])/(R.time-M.time)+M.value[A]}function F(S){const M={name:S.getAttribute("id")||"default",start:parseFloat(S.getAttribute("start")||0),end:parseFloat(S.getAttribute("end")||0),animations:[]};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"instance_animation":M.animations.push(a(L.getAttribute("url")));break}}Zt.clips[S.getAttribute("id")]=M}function $(S){const M=[],R=S.name,A=S.end-S.start||-1,L=S.animations;for(let et=0,rt=L.length;et<rt;et++){const Rt=x(L[et]);for(let xt=0,wt=Rt.length;xt<wt;xt++)M.push(Rt[xt])}return new lh(R,A,M)}function V(S){return _(Zt.clips[S],$)}function Z(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"skin":M.id=a(L.getAttribute("source")),M.skin=ct(L);break;case"morph":M.id=a(L.getAttribute("source")),console.warn("THREE.ColladaLoader: Morph target animation not supported yet.");break}}Zt.controllers[S.getAttribute("id")]=M}function ct(S){const M={sources:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"bind_shape_matrix":M.bindShapeMatrix=s(L.textContent);break;case"source":const et=L.getAttribute("id");M.sources[et]=nt(L);break;case"joints":M.joints=ht(L);break;case"vertex_weights":M.vertexWeights=ot(L);break}}return M}function ht(S){const M={inputs:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"input":const et=L.getAttribute("semantic"),rt=a(L.getAttribute("source"));M.inputs[et]=rt;break}}return M}function ot(S){const M={inputs:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"input":const et=L.getAttribute("semantic"),rt=a(L.getAttribute("source")),Rt=parseInt(L.getAttribute("offset"));M.inputs[et]={id:rt,offset:Rt};break;case"vcount":M.vcount=o(L.textContent);break;case"v":M.v=o(L.textContent);break}}return M}function _t(S){const M={id:S.id},R=Zt.geometries[M.id];return S.skin!==void 0&&(M.skin=Y(S.skin),R.sources.skinIndices=M.skin.indices,R.sources.skinWeights=M.skin.weights),M}function Y(S){const R={joints:[],indices:{array:[],stride:4},weights:{array:[],stride:4}},A=S.sources,L=S.vertexWeights,et=L.vcount,rt=L.v,Rt=L.inputs.JOINT.offset,xt=L.inputs.WEIGHT.offset,wt=S.sources[S.joints.inputs.JOINT],Gt=S.sources[S.joints.inputs.INV_BIND_MATRIX],ft=A[L.inputs.WEIGHT.id].array;let zt=0,Ut,jt,Wt;for(Ut=0,Wt=et.length;Ut<Wt;Ut++){const Ee=et[Ut],ve=[];for(jt=0;jt<Ee;jt++){const xe=rt[zt+Rt],ei=rt[zt+xt],fn=ft[ei];ve.push({index:xe,weight:fn}),zt+=2}for(ve.sort(Ne),jt=0;jt<4;jt++){const xe=ve[jt];xe!==void 0?(R.indices.array.push(xe.index),R.weights.array.push(xe.weight)):(R.indices.array.push(0),R.weights.array.push(0))}}for(S.bindShapeMatrix?R.bindMatrix=new te().fromArray(S.bindShapeMatrix).transpose():R.bindMatrix=new te().identity(),Ut=0,Wt=wt.array.length;Ut<Wt;Ut++){const Ee=wt.array[Ut],ve=new te().fromArray(Gt.array,Ut*Gt.stride).transpose();R.joints.push({name:Ee,boneInverse:ve})}return R;function Ne(Ee,ve){return ve.weight-Ee.weight}}function J(S){return _(Zt.controllers[S],_t)}function st(S){const M={init_from:n(S,"init_from")[0].textContent};Zt.images[S.getAttribute("id")]=M}function it(S){return S.build!==void 0?S.build:S.init_from}function gt(S){const M=Zt.images[S];return M!==void 0?_(M,it):(console.warn("THREE.ColladaLoader: Couldn't find image with ID:",S),null)}function Dt(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"profile_COMMON":M.profile=qt(L);break}}Zt.effects[S.getAttribute("id")]=M}function qt(S){const M={surfaces:{},samplers:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"newparam":Te(L,M);break;case"technique":M.technique=X(L);break;case"extra":M.extra=Vt(L);break}}return M}function Te(S,M){const R=S.getAttribute("sid");for(let A=0,L=S.childNodes.length;A<L;A++){const et=S.childNodes[A];if(et.nodeType===1)switch(et.nodeName){case"surface":M.surfaces[R]=ue(et);break;case"sampler2D":M.samplers[R]=Re(et);break}}}function ue(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"init_from":M.init_from=L.textContent;break}}return M}function Re(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"source":M.source=L.textContent;break}}return M}function X(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"constant":case"lambert":case"blinn":case"phong":M.type=L.nodeName,M.parameters=je(L);break;case"extra":M.extra=Vt(L);break}}return M}function je(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"emission":case"diffuse":case"specular":case"bump":case"ambient":case"shininess":case"transparency":M[L.nodeName]=se(L);break;case"transparent":M[L.nodeName]={opaque:L.hasAttribute("opaque")?L.getAttribute("opaque"):"A_ONE",data:se(L)};break}}return M}function se(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"color":M[L.nodeName]=s(L.textContent);break;case"float":M[L.nodeName]=parseFloat(L.textContent);break;case"texture":M[L.nodeName]={id:L.getAttribute("texture"),extra:re(L)};break}}return M}function re(S){const M={technique:{}};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"extra":Ht(L,M);break}}return M}function Ht(S,M){for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"technique":ye(L,M);break}}}function ye(S,M){for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":M.technique[L.nodeName]=parseFloat(L.textContent);break;case"wrapU":case"wrapV":L.textContent.toUpperCase()==="TRUE"?M.technique[L.nodeName]=1:L.textContent.toUpperCase()==="FALSE"?M.technique[L.nodeName]=0:M.technique[L.nodeName]=parseInt(L.textContent);break;case"bump":M[L.nodeName]=T(L);break}}}function Vt(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"technique":M.technique=B(L);break}}return M}function B(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"double_sided":M[L.nodeName]=parseInt(L.textContent);break;case"bump":M[L.nodeName]=T(L);break}}return M}function T(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"texture":M[L.nodeName]={id:L.getAttribute("texture"),texcoord:L.getAttribute("texcoord"),extra:re(L)};break}}return M}function K(S){return S}function lt(S){return _(Zt.effects[S],K)}function dt(S){const M={name:S.getAttribute("name")};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"instance_effect":M.url=a(L.getAttribute("url"));break}}Zt.materials[S.getAttribute("id")]=M}function at(S){let M,R=S.slice((S.lastIndexOf(".")-1>>>0)+2);switch(R=R.toLowerCase(),R){case"tga":M=wn;break;default:M=Un}return M}function Nt(S){const M=lt(S.url),R=M.profile.technique;let A;switch(R.type){case"phong":case"blinn":A=new Mo;break;case"lambert":A=new a_;break;default:A=new Bi;break}A.name=S.name||"";function L(xt,wt=null){const Gt=M.profile.samplers[xt.id];let ft=null;if(Gt!==void 0){const zt=M.profile.surfaces[Gt.source];ft=gt(zt.init_from)}else console.warn("THREE.ColladaLoader: Undefined sampler. Access image directly (see #12530)."),ft=gt(xt.id);if(ft!==null){const zt=at(ft);if(zt!==void 0){const Ut=zt.load(ft),jt=xt.extra;if(jt!==void 0&&jt.technique!==void 0&&c(jt.technique)===!1){const Wt=jt.technique;Ut.wrapS=Wt.wrapU?gn:Gn,Ut.wrapT=Wt.wrapV?gn:Gn,Ut.offset.set(Wt.offsetU||0,Wt.offsetV||0),Ut.repeat.set(Wt.repeatU||1,Wt.repeatV||1)}else Ut.wrapS=gn,Ut.wrapT=gn;return wt!==null&&(Ut.colorSpace=wt),Ut}else return console.warn("THREE.ColladaLoader: Loader for texture %s not found.",ft),null}else return console.warn("THREE.ColladaLoader: Couldn't create texture with ID:",xt.id),null}const et=R.parameters;for(const xt in et){const wt=et[xt];switch(xt){case"diffuse":wt.color&&A.color.fromArray(wt.color),wt.texture&&(A.map=L(wt.texture,Pe));break;case"specular":wt.color&&A.specular&&A.specular.fromArray(wt.color),wt.texture&&(A.specularMap=L(wt.texture));break;case"bump":wt.texture&&(A.normalMap=L(wt.texture));break;case"ambient":wt.texture&&(A.lightMap=L(wt.texture,Pe));break;case"shininess":wt.float&&A.shininess&&(A.shininess=wt.float);break;case"emission":wt.color&&A.emissive&&A.emissive.fromArray(wt.color),wt.texture&&(A.emissiveMap=L(wt.texture,Pe));break}}ce.toWorkingColorSpace(A.color,Pe),A.specular&&ce.toWorkingColorSpace(A.specular,Pe),A.emissive&&ce.toWorkingColorSpace(A.emissive,Pe);let rt=et.transparent,Rt=et.transparency;if(Rt===void 0&&rt&&(Rt={float:1}),rt===void 0&&Rt&&(rt={opaque:"A_ONE",data:{color:[1,1,1,1]}}),rt&&Rt)if(rt.data.texture)A.transparent=!0;else{const xt=rt.data.color;switch(rt.opaque){case"A_ONE":A.opacity=xt[3]*Rt.float;break;case"RGB_ZERO":A.opacity=1-xt[0]*Rt.float;break;case"A_ZERO":A.opacity=1-xt[3]*Rt.float;break;case"RGB_ONE":A.opacity=xt[0]*Rt.float;break;default:console.warn('THREE.ColladaLoader: Invalid opaque type "%s" of transparent tag.',rt.opaque)}A.opacity<1&&(A.transparent=!0)}if(R.extra!==void 0&&R.extra.technique!==void 0){const xt=R.extra.technique;for(const wt in xt){const Gt=xt[wt];switch(wt){case"double_sided":A.side=Gt===1?Kn:Jn;break;case"bump":A.normalMap=L(Gt.texture),A.normalScale=new It(1,1);break}}}return A}function yt(S){return _(Zt.materials[S],Nt)}function St(S){const M={name:S.getAttribute("name")};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"optics":M.optics=oe(L);break}}Zt.cameras[S.getAttribute("id")]=M}function oe(S){for(let M=0;M<S.childNodes.length;M++){const R=S.childNodes[M];switch(R.nodeName){case"technique_common":return pt(R)}}return{}}function pt(S){const M={};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];switch(A.nodeName){case"perspective":case"orthographic":M.technique=A.nodeName,M.parameters=At(A);break}}return M}function At(S){const M={};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];switch(A.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":M[A.nodeName]=parseFloat(A.textContent);break}}return M}function Xt(S){let M;switch(S.optics.technique){case"perspective":M=new nn(S.optics.parameters.yfov,S.optics.parameters.aspect_ratio,S.optics.parameters.znear,S.optics.parameters.zfar);break;case"orthographic":let R=S.optics.parameters.ymag,A=S.optics.parameters.xmag;const L=S.optics.parameters.aspect_ratio;A=A===void 0?R*L:A,R=R===void 0?A/L:R,A*=.5,R*=.5,M=new Co(-A,A,R,-R,S.optics.parameters.znear,S.optics.parameters.zfar);break;default:M=new nn;break}return M.name=S.name||"",M}function Kt(S){const M=Zt.cameras[S];return M!==void 0?_(M,Xt):(console.warn("THREE.ColladaLoader: Couldn't find camera with ID:",S),null)}function Ct(S){let M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"technique_common":M=de(L);break}}Zt.lights[S.getAttribute("id")]=M}function de(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"directional":case"point":case"spot":case"ambient":M.technique=L.nodeName,M.parameters=$t(L)}}return M}function $t(S){const M={};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"color":const et=s(L.textContent);M.color=new Yt().fromArray(et),ce.toWorkingColorSpace(M.color,Pe);break;case"falloff_angle":M.falloffAngle=parseFloat(L.textContent);break;case"quadratic_attenuation":const rt=parseFloat(L.textContent);M.distance=rt?Math.sqrt(1/rt):0;break}}return M}function fe(S){let M;switch(S.technique){case"directional":M=new xl;break;case"point":M=new Iu;break;case"spot":M=new M_;break;case"ambient":M=new Du;break}return S.parameters.color&&M.color.copy(S.parameters.color),S.parameters.distance&&(M.distance=S.parameters.distance),M}function W(S){const M=Zt.lights[S];return M!==void 0?_(M,fe):(console.warn("THREE.ColladaLoader: Couldn't find light with ID:",S),null)}function vt(S){const M={name:S.getAttribute("name"),sources:{},vertices:{},primitives:[]},R=n(S,"mesh")[0];if(R!==void 0){for(let A=0;A<R.childNodes.length;A++){const L=R.childNodes[A];if(L.nodeType!==1)continue;const et=L.getAttribute("id");switch(L.nodeName){case"source":M.sources[et]=nt(L);break;case"vertices":M.vertices=ut(L);break;case"polygons":console.warn("THREE.ColladaLoader: Unsupported primitive type: ",L.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":M.primitives.push(Tt(L));break;default:console.log(L)}}Zt.geometries[S.getAttribute("id")]=M}}function nt(S){const M={array:[],stride:3};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"float_array":M.array=s(A.textContent);break;case"Name_array":M.array=i(A.textContent);break;case"technique_common":const L=n(A,"accessor")[0];L!==void 0&&(M.stride=parseInt(L.getAttribute("stride")));break}}return M}function ut(S){const M={};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];A.nodeType===1&&(M[A.getAttribute("semantic")]=a(A.getAttribute("source")))}return M}function Tt(S){const M={type:S.nodeName,material:S.getAttribute("material"),count:parseInt(S.getAttribute("count")),inputs:{},stride:0,hasUV:!1};for(let R=0,A=S.childNodes.length;R<A;R++){const L=S.childNodes[R];if(L.nodeType===1)switch(L.nodeName){case"input":const et=a(L.getAttribute("source")),rt=L.getAttribute("semantic"),Rt=parseInt(L.getAttribute("offset")),xt=parseInt(L.getAttribute("set")),wt=xt>0?rt+xt:rt;M.inputs[wt]={id:et,offset:Rt},M.stride=Math.max(M.stride,Rt+1),rt==="TEXCOORD"&&(M.hasUV=!0);break;case"vcount":M.vcount=o(L.textContent);break;case"p":M.p=o(L.textContent);break}}return M}function Et(S){const M={};for(let R=0;R<S.length;R++){const A=S[R];M[A.type]===void 0&&(M[A.type]=[]),M[A.type].push(A)}return M}function ne(S){let M=0;for(let R=0,A=S.length;R<A;R++)S[R].hasUV===!0&&M++;M>0&&M<S.length&&(S.uvsNeedsFix=!0)}function Le(S){const M={},R=S.sources,A=S.vertices,L=S.primitives;if(L.length===0)return{};const et=Et(L);for(const rt in et){const Rt=et[rt];ne(Rt),M[rt]=Ye(Rt,R,A)}return M}function Ye(S,M,R){const A={},L={array:[],stride:0},et={array:[],stride:0},rt={array:[],stride:0},Rt={array:[],stride:0},xt={array:[],stride:0},wt={array:[],stride:4},Gt={array:[],stride:4},ft=new $e,zt=[];let Ut=0;for(let jt=0;jt<S.length;jt++){const Wt=S[jt],Ne=Wt.inputs;let Ee=0;switch(Wt.type){case"lines":case"linestrips":Ee=Wt.count*2;break;case"triangles":Ee=Wt.count*3;break;case"polylist":for(let ve=0;ve<Wt.count;ve++){const xe=Wt.vcount[ve];switch(xe){case 3:Ee+=3;break;case 4:Ee+=6;break;default:Ee+=(xe-2)*3;break}}break;default:console.warn("THREE.ColladaLoader: Unknow primitive type:",Wt.type)}ft.addGroup(Ut,Ee,jt),Ut+=Ee,Wt.material&&zt.push(Wt.material);for(const ve in Ne){const xe=Ne[ve];switch(ve){case"VERTEX":for(const ei in R){const fn=R[ei];switch(ei){case"POSITION":const as=L.array.length;if(ae(Wt,M[fn],xe.offset,L.array),L.stride=M[fn].stride,M.skinWeights&&M.skinIndices&&(ae(Wt,M.skinIndices,xe.offset,wt.array),ae(Wt,M.skinWeights,xe.offset,Gt.array)),Wt.hasUV===!1&&S.uvsNeedsFix===!0){const Yu=(L.array.length-as)/L.stride;for(let ql=0;ql<Yu;ql++)rt.array.push(0,0)}break;case"NORMAL":ae(Wt,M[fn],xe.offset,et.array),et.stride=M[fn].stride;break;case"COLOR":ae(Wt,M[fn],xe.offset,xt.array),xt.stride=M[fn].stride;break;case"TEXCOORD":ae(Wt,M[fn],xe.offset,rt.array),rt.stride=M[fn].stride;break;case"TEXCOORD1":ae(Wt,M[fn],xe.offset,Rt.array),rt.stride=M[fn].stride;break;default:console.warn('THREE.ColladaLoader: Semantic "%s" not handled in geometry build process.',ei)}}break;case"NORMAL":ae(Wt,M[xe.id],xe.offset,et.array),et.stride=M[xe.id].stride;break;case"COLOR":ae(Wt,M[xe.id],xe.offset,xt.array,!0),xt.stride=M[xe.id].stride;break;case"TEXCOORD":ae(Wt,M[xe.id],xe.offset,rt.array),rt.stride=M[xe.id].stride;break;case"TEXCOORD1":ae(Wt,M[xe.id],xe.offset,Rt.array),Rt.stride=M[xe.id].stride;break}}}return L.array.length>0&&ft.setAttribute("position",new ge(L.array,L.stride)),et.array.length>0&&ft.setAttribute("normal",new ge(et.array,et.stride)),xt.array.length>0&&ft.setAttribute("color",new ge(xt.array,xt.stride)),rt.array.length>0&&ft.setAttribute("uv",new ge(rt.array,rt.stride)),Rt.array.length>0&&ft.setAttribute("uv1",new ge(Rt.array,Rt.stride)),wt.array.length>0&&ft.setAttribute("skinIndex",new ge(wt.array,wt.stride)),Gt.array.length>0&&ft.setAttribute("skinWeight",new ge(Gt.array,Gt.stride)),A.data=ft,A.type=S[0].type,A.materialKeys=zt,A}function ae(S,M,R,A,L=!1){const et=S.p,rt=S.stride,Rt=S.vcount;function xt(ft){let zt=et[ft+R]*Gt;const Ut=zt+Gt;for(;zt<Ut;zt++)A.push(wt[zt]);if(L){const jt=A.length-Gt-1;zi.setRGB(A[jt+0],A[jt+1],A[jt+2],Pe),A[jt+0]=zi.r,A[jt+1]=zi.g,A[jt+2]=zi.b}}const wt=M.array,Gt=M.stride;if(S.vcount!==void 0){let ft=0;for(let zt=0,Ut=Rt.length;zt<Ut;zt++){const jt=Rt[zt];if(jt===4){const Wt=ft+rt*0,Ne=ft+rt*1,Ee=ft+rt*2,ve=ft+rt*3;xt(Wt),xt(Ne),xt(ve),xt(Ne),xt(Ee),xt(ve)}else if(jt===3){const Wt=ft+rt*0,Ne=ft+rt*1,Ee=ft+rt*2;xt(Wt),xt(Ne),xt(Ee)}else if(jt>4)for(let Wt=1,Ne=jt-2;Wt<=Ne;Wt++){const Ee=ft+rt*0,ve=ft+rt*Wt,xe=ft+rt*(Wt+1);xt(Ee),xt(ve),xt(xe)}ft+=rt*jt}}else for(let ft=0,zt=et.length;ft<zt;ft+=rt)xt(ft)}function un(S){return _(Zt.geometries[S],Le)}function Dn(S){const M={name:S.getAttribute("name")||"",joints:{},links:[]};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"technique_common":ti(A,M);break}}Zt.kinematicsModels[S.getAttribute("id")]=M}function yr(S){return S.build!==void 0?S.build:S}function Mr(S){return _(Zt.kinematicsModels[S],yr)}function ti(S,M){for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"joint":M.joints[A.getAttribute("sid")]=Ys(A);break;case"link":M.links.push(Ks(A));break}}}function Ys(S){let M;for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"prismatic":case"revolute":M=br(A);break}}return M}function br(S){const M={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",axis:new k,limits:{min:0,max:0},type:S.nodeName,static:!1,zeroPosition:0,middlePosition:0};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"axis":const L=s(A.textContent);M.axis.fromArray(L);break;case"limits":const et=A.getElementsByTagName("max")[0],rt=A.getElementsByTagName("min")[0];M.limits.max=parseFloat(et.textContent),M.limits.min=parseFloat(rt.textContent);break}}return M.limits.min>=M.limits.max&&(M.static=!0),M.middlePosition=(M.limits.min+M.limits.max)/2,M}function Ks(S){const M={sid:S.getAttribute("sid"),name:S.getAttribute("name")||"",attachments:[],transforms:[]};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"attachment_full":M.attachments.push(rs(A));break;case"matrix":case"translate":case"rotate":M.transforms.push(Zs(A));break}}return M}function rs(S){const M={joint:S.getAttribute("joint").split("/").pop(),transforms:[],links:[]};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"link":M.links.push(Ks(A));break;case"matrix":case"translate":case"rotate":M.transforms.push(Zs(A));break}}return M}function Zs(S){const M={type:S.nodeName},R=s(S.textContent);switch(M.type){case"matrix":M.obj=new te,M.obj.fromArray(R).transpose();break;case"translate":M.obj=new k,M.obj.fromArray(R);break;case"rotate":M.obj=new k,M.obj.fromArray(R),M.angle=Mn.degToRad(R[3]);break}return M}function os(S){const M={name:S.getAttribute("name")||"",rigidBodies:{}};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"rigid_body":M.rigidBodies[A.getAttribute("name")]={},Sr(A,M.rigidBodies[A.getAttribute("name")]);break}}Zt.physicsModels[S.getAttribute("id")]=M}function Sr(S,M){for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"technique_common":Er(A,M);break}}}function Er(S,M){for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"inertia":M.inertia=s(A.textContent);break;case"mass":M.mass=s(A.textContent)[0];break}}}function Uo(S){const M={bindJointAxis:[]};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"bind_joint_axis":M.bindJointAxis.push(Fo(A));break}}Zt.kinematicsScenes[a(S.getAttribute("url"))]=M}function Fo(S){const M={target:S.getAttribute("target").split("/").pop()};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType===1)switch(A.nodeName){case"axis":const L=A.getElementsByTagName("param")[0];M.axis=L.textContent;const et=M.axis.split("inst_").pop().split("axis")[0];M.jointIndex=et.substring(0,et.length-1);break}}return M}function Bo(S){return S.build!==void 0?S.build:S}function P(S){return _(Zt.kinematicsScenes[S],Bo)}function j(){const S=Object.keys(Zt.kinematicsModels)[0],M=Object.keys(Zt.kinematicsScenes)[0],R=Object.keys(Zt.visualScenes)[0];if(S===void 0||M===void 0)return;const A=Mr(S),L=P(M),et=me(R),rt=L.bindJointAxis,Rt={};for(let Gt=0,ft=rt.length;Gt<ft;Gt++){const zt=rt[Gt],Ut=ee.querySelector('[sid="'+zt.target+'"]');if(Ut){const jt=Ut.parentElement;xt(zt.jointIndex,jt)}}function xt(Gt,ft){const zt=ft.getAttribute("name"),Ut=A.joints[Gt];et.traverse(function(jt){jt.name===zt&&(Rt[Gt]={object:jt,transforms:Q(ft),joint:Ut,position:Ut.zeroPosition})})}const wt=new te;Wl={joints:A&&A.joints,getJointValue:function(Gt){const ft=Rt[Gt];if(ft)return ft.position;console.warn("THREE.ColladaLoader: Joint "+Gt+" doesn't exist.")},setJointValue:function(Gt,ft){const zt=Rt[Gt];if(zt){const Ut=zt.joint;if(ft>Ut.limits.max||ft<Ut.limits.min)console.warn("THREE.ColladaLoader: Joint "+Gt+" value "+ft+" outside of limits (min: "+Ut.limits.min+", max: "+Ut.limits.max+").");else if(Ut.static)console.warn("THREE.ColladaLoader: Joint "+Gt+" is static.");else{const jt=zt.object,Wt=Ut.axis,Ne=zt.transforms;q.identity();for(let Ee=0;Ee<Ne.length;Ee++){const ve=Ne[Ee];if(ve.sid&&ve.sid.indexOf(Gt)!==-1)switch(Ut.type){case"revolute":q.multiply(wt.makeRotationAxis(Wt,Mn.degToRad(ft)));break;case"prismatic":q.multiply(wt.makeTranslation(Wt.x*ft,Wt.y*ft,Wt.z*ft));break;default:console.warn("THREE.ColladaLoader: Unknown joint type: "+Ut.type);break}else switch(ve.type){case"matrix":q.multiply(ve.obj);break;case"translate":q.multiply(wt.makeTranslation(ve.obj.x,ve.obj.y,ve.obj.z));break;case"scale":q.scale(ve.obj);break;case"rotate":q.multiply(wt.makeRotationAxis(ve.obj,ve.angle));break}}jt.matrix.copy(q),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),Rt[Gt].position=ft}}else console.log("THREE.ColladaLoader: "+Gt+" does not exist.")}}}function Q(S){const M=[],R=ee.querySelector('[id="'+S.id+'"]');for(let A=0;A<R.childNodes.length;A++){const L=R.childNodes[A];if(L.nodeType!==1)continue;let et,rt;switch(L.nodeName){case"matrix":et=s(L.textContent);const Rt=new te().fromArray(et).transpose();M.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:Rt});break;case"translate":case"scale":et=s(L.textContent),rt=new k().fromArray(et),M.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:rt});break;case"rotate":et=s(L.textContent),rt=new k().fromArray(et);const xt=Mn.degToRad(et[3]);M.push({sid:L.getAttribute("sid"),type:L.nodeName,obj:rt,angle:xt});break}}return M}function tt(S){const M=S.getElementsByTagName("node");for(let R=0;R<M.length;R++){const A=M[R];A.hasAttribute("id")===!1&&A.setAttribute("id",l())}}const q=new te,mt=new k;function bt(S){const M={name:S.getAttribute("name")||"",type:S.getAttribute("type"),id:S.getAttribute("id"),sid:S.getAttribute("sid"),matrix:new te,nodes:[],instanceCameras:[],instanceControllers:[],instanceLights:[],instanceGeometries:[],instanceNodes:[],transforms:{}};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];if(A.nodeType!==1)continue;let L;switch(A.nodeName){case"node":M.nodes.push(A.getAttribute("id")),bt(A);break;case"instance_camera":M.instanceCameras.push(a(A.getAttribute("url")));break;case"instance_controller":M.instanceControllers.push(Ft(A));break;case"instance_light":M.instanceLights.push(a(A.getAttribute("url")));break;case"instance_geometry":M.instanceGeometries.push(Ft(A));break;case"instance_node":M.instanceNodes.push(a(A.getAttribute("url")));break;case"matrix":L=s(A.textContent),M.matrix.multiply(q.fromArray(L).transpose()),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"translate":L=s(A.textContent),mt.fromArray(L),M.matrix.multiply(q.makeTranslation(mt.x,mt.y,mt.z)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"rotate":L=s(A.textContent);const et=Mn.degToRad(L[3]);M.matrix.multiply(q.makeRotationAxis(mt.fromArray(L),et)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"scale":L=s(A.textContent),M.matrix.scale(mt.fromArray(L)),M.transforms[A.getAttribute("sid")]=A.nodeName;break;case"extra":break;default:console.log(A)}}return Ae(M.id)?console.warn("THREE.ColladaLoader: There is already a node with ID %s. Exclude current node from further processing.",M.id):Zt.nodes[M.id]=M,M}function Ft(S){const M={id:a(S.getAttribute("url")),materials:{},skeletons:[]};for(let R=0;R<S.childNodes.length;R++){const A=S.childNodes[R];switch(A.nodeName){case"bind_material":const L=A.getElementsByTagName("instance_material");for(let et=0;et<L.length;et++){const rt=L[et],Rt=rt.getAttribute("symbol"),xt=rt.getAttribute("target");M.materials[Rt]=a(xt)}break;case"skeleton":M.skeletons.push(a(A.textContent));break}}return M}function Bt(S,M){const R=[],A=[];let L,et,rt;for(L=0;L<S.length;L++){const wt=S[L];let Gt;if(Ae(wt))Gt=Ue(wt),Jt(Gt,M,R);else if(Nn(wt)){const zt=Zt.visualScenes[wt].children;for(let Ut=0;Ut<zt.length;Ut++){const jt=zt[Ut];if(jt.type==="JOINT"){const Wt=Ue(jt.id);Jt(Wt,M,R)}}}else console.error("THREE.ColladaLoader: Unable to find root bone of skeleton with ID:",wt)}for(L=0;L<M.length;L++)for(et=0;et<R.length;et++)if(rt=R[et],rt.bone.name===M[L].name){A[L]=rt,rt.processed=!0;break}for(L=0;L<R.length;L++)rt=R[L],rt.processed===!1&&(A.push(rt),rt.processed=!0);const Rt=[],xt=[];for(L=0;L<A.length;L++)rt=A[L],Rt.push(rt.bone),xt.push(rt.boneInverse);return new Fl(Rt,xt)}function Jt(S,M,R){S.traverse(function(A){if(A.isBone===!0){let L;for(let et=0;et<M.length;et++){const rt=M[et];if(rt.name===A.name){L=rt.boneInverse;break}}L===void 0&&(L=new te),R.push({bone:A,boneInverse:L,processed:!1})}})}function ie(S){const M=[],R=S.matrix,A=S.nodes,L=S.type,et=S.instanceCameras,rt=S.instanceControllers,Rt=S.instanceLights,xt=S.instanceGeometries,wt=S.instanceNodes;for(let ft=0,zt=A.length;ft<zt;ft++)M.push(Ue(A[ft]));for(let ft=0,zt=et.length;ft<zt;ft++){const Ut=Kt(et[ft]);Ut!==null&&M.push(Ut.clone())}for(let ft=0,zt=rt.length;ft<zt;ft++){const Ut=rt[ft],jt=J(Ut.id),Wt=un(jt.id),Ne=Se(Wt,Ut.materials),Ee=Ut.skeletons,ve=jt.skin.joints,xe=Bt(Ee,ve);for(let ei=0,fn=Ne.length;ei<fn;ei++){const as=Ne[ei];as.isSkinnedMesh&&(as.bind(xe,jt.skin.bindMatrix),as.normalizeSkinWeights()),M.push(as)}}for(let ft=0,zt=Rt.length;ft<zt;ft++){const Ut=W(Rt[ft]);Ut!==null&&M.push(Ut.clone())}for(let ft=0,zt=xt.length;ft<zt;ft++){const Ut=xt[ft],jt=un(Ut.id),Wt=Se(jt,Ut.materials);for(let Ne=0,Ee=Wt.length;Ne<Ee;Ne++)M.push(Wt[Ne])}for(let ft=0,zt=wt.length;ft<zt;ft++)M.push(Ue(wt[ft]).clone());let Gt;if(A.length===0&&M.length===1)Gt=M[0];else{Gt=L==="JOINT"?new Au:new De;for(let ft=0;ft<M.length;ft++)Gt.add(M[ft])}return Gt.name=L==="JOINT"?S.sid:S.name,Gt.matrix.copy(R),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt}const Ot=new Bi({name:Si.DEFAULT_MATERIAL_NAME,color:16711935});function pe(S,M){const R=[];for(let A=0,L=S.length;A<L;A++){const et=M[S[A]];et===void 0?(console.warn("THREE.ColladaLoader: Material with key %s not found. Apply fallback material.",S[A]),R.push(Ot)):R.push(yt(et))}return R}function Se(S,M){const R=[];for(const A in S){const L=S[A],et=pe(L.materialKeys,M);if(et.length===0&&(A==="lines"||A==="linestrips"?et.push(new Ls):et.push(new Mo)),A==="lines"||A==="linestrips")for(let wt=0,Gt=et.length;wt<Gt;wt++){const ft=et[wt];if(ft.isMeshPhongMaterial===!0||ft.isMeshLambertMaterial===!0){const zt=new Ls;zt.color.copy(ft.color),zt.opacity=ft.opacity,zt.transparent=ft.transparent,et[wt]=zt}}const rt=L.data.attributes.skinIndex!==void 0,Rt=et.length===1?et[0]:et;let xt;switch(A){case"lines":xt=new _l(L.data,Rt);break;case"linestrips":xt=new Cu(L.data,Rt);break;case"triangles":case"polylist":rt?xt=new i_(L.data,Rt):xt=new Qt(L.data,Rt);break}R.push(xt)}return R}function Ae(S){return Zt.nodes[S]!==void 0}function Ue(S){return _(Zt.nodes[S],ie)}function _e(S){const M={name:S.getAttribute("name"),children:[]};tt(S);const R=n(S,"node");for(let A=0;A<R.length;A++)M.children.push(bt(R[A]));Zt.visualScenes[S.getAttribute("id")]=M}function kt(S){const M=new De;M.name=S.name;const R=S.children;for(let A=0;A<R.length;A++){const L=R[A];M.add(Ue(L.id))}return M}function Nn(S){return Zt.visualScenes[S]!==void 0}function me(S){return _(Zt.visualScenes[S],kt)}function vn(S){const M=n(S,"instance_visual_scene")[0];return me(a(M.getAttribute("url")))}function Ei(){const S=Zt.clips;if(c(S)===!0){if(c(Zt.animations)===!1){const M=[];for(const R in Zt.animations){const A=x(R);for(let L=0,et=A.length;L<et;L++)M.push(A[L])}wr.push(new lh("default",-1,M))}}else for(const M in S)wr.push(V(M))}function rn(S){let M="";const R=[S];for(;R.length;){const A=R.shift();A.nodeType===Node.TEXT_NODE?M+=A.textContent:(M+=`
`,R.push.apply(R,A.childNodes))}return M.trim()}if(t.length===0)return{scene:new Tu};const wi=new DOMParser().parseFromString(t,"application/xml"),ee=n(wi,"COLLADA")[0],dn=wi.getElementsByTagName("parsererror")[0];if(dn!==void 0){const S=n(dn,"div")[0];let M;return S?M=S.textContent:M=rn(dn),console.error(`THREE.ColladaLoader: Failed to parse collada file.
`,M),null}const ki=ee.getAttribute("version");console.debug("THREE.ColladaLoader: File version",ki);const on=h(n(ee,"asset")[0]),Un=new Ol(this.manager);Un.setPath(this.resourcePath||e).setCrossOrigin(this.crossOrigin);let wn;Sh&&(wn=new Sh(this.manager),wn.setPath(this.resourcePath||e));const zi=new Yt,wr=[];let Wl={},ju=0;const Zt={animations:{},clips:{},controllers:{},images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{},kinematicsModels:{},physicsModels:{},kinematicsScenes:{}};f(ee,"library_animations","animation",m),f(ee,"library_animation_clips","animation_clip",F),f(ee,"library_controllers","controller",Z),f(ee,"library_images","image",st),f(ee,"library_effects","effect",Dt),f(ee,"library_materials","material",dt),f(ee,"library_cameras","camera",St),f(ee,"library_lights","light",Ct),f(ee,"library_geometries","geometry",vt),f(ee,"library_nodes","node",bt),f(ee,"library_visual_scenes","visual_scene",_e),f(ee,"library_kinematics_models","kinematics_model",Dn),f(ee,"library_physics_models","physics_model",os),f(ee,"scene","instance_kinematics_scene",Uo),g(Zt.animations,y),g(Zt.clips,$),g(Zt.controllers,_t),g(Zt.images,it),g(Zt.effects,K),g(Zt.materials,Nt),g(Zt.cameras,Xt),g(Zt.lights,fe),g(Zt.geometries,Le),g(Zt.visualScenes,kt),Ei(),j();const Tr=vn(n(ee,"scene")[0]);return Tr.animations=wr,on.upAxis==="Z_UP"&&(console.warn("THREE.ColladaLoader: You are loading an asset with a Z-UP coordinate system. The loader just rotates the asset to transform it into Y-UP. The vertex data are not converted, see #24289."),Tr.rotation.set(-Math.PI/2,0,0)),Tr.scale.multiplyScalar(on.unit),{get animations(){return console.warn("THREE.ColladaLoader: Please access animations over scene.animations now."),wr},kinematics:Wl,library:Zt,scene:Tr}}}const ba=new Map;function ov(r){if(ba.has(r))return ba.get(r);const e=new Ol().load(r);return e.colorSpace=Pe,ba.set(r,e),e}async function Ou(r,t,e={}){const n=r.endsWith("/")?r:r+"/",i=t.replace(/\.(obj|dae|mtl)$/i,""),s=t.toLowerCase().endsWith(".dae"),o=e.isObelix??(/obelix/i.test(i)||/obelix/i.test(r)),a=e.isAsterix??(/asterix/i.test(i)||/asterix/i.test(r)),l=e.isEnvironment??(/environnement/i.test(r)||/000/i.test(i));let c=null;e.mainTextureUrl?c=e.mainTextureUrl:a?c=`${n}asterix.png`:o&&(c=`${n}obelix01.png`);let h=null;c&&(h=ov(c));let d=null;if(e.applyClayShaders!==!1&&!l)try{d=Bu()}catch(m){console.warn("[UNIVERSAL-LOADER] Notice textures argile procédurales:",m.message)}async function u(){const m=new iv;m.setPath(n),m.setResourcePath(n);let p=null;try{p=await new Promise((y,x)=>{m.load(`${i}.mtl`,y,void 0,x)}),p.preload()}catch(y){console.warn(`[UNIVERSAL-LOADER] Notice MTL (${i}.mtl) : ${y.message||y}. Poursuite OBJ...`)}const v=new nv;return p&&v.setMaterials(p),v.setPath(n),v.setResourcePath(n),new Promise((y,x)=>{v.load(`${i}.obj`,y,e.onProgress,x)})}async function f(){const m=new rv;m.setPath(n),m.setResourcePath(n);const p=t.toLowerCase().endsWith(".dae")?t:`${i}.dae`;return new Promise((v,y)=>{m.load(p,x=>{v(x.scene||x)},e.onProgress,y)})}let g=null,_="obj";if(s)try{g=await f(),_="dae"}catch(m){console.warn(`[UNIVERSAL-LOADER] Échec Collada direct pour ${t}:`,m.message),g=await u(),_="obj"}else try{g=await u(),_="obj"}catch(m){console.warn(`[UNIVERSAL-LOADER] Format OBJ indisponible pour ${i} (${m.message}). Bascule automatique sur ColladaLoader (.dae)...`);try{g=await f(),_="dae"}catch(p){throw new Error(`[UNIVERSAL-LOADER] Échec critique du chargement polymorphe pour ${i} (OBJ: ${m.message} / DAE: ${p.message})`)}}if(!g)throw new Error(`[UNIVERSAL-LOADER] Aucun objet 3D n'a pu être extrait pour ${i}`);if(g.traverse(m=>{if(m.isMesh){m.castShadow=!0,m.receiveShadow=!0;const v=(Array.isArray(m.material)?m.material:[m.material]).map(y=>{if(!y)return Eh(h,o);const x=!!y.map,D=y.transparent&&y.opacity<=.05;if(!x||D)if(h){const C=new Os({map:h,roughness:.85,metalness:.05});return d&&(C.bumpMap=d.bumpMap,C.bumpScale=.02,C.normalMap=d.normalMap,C.normalScale=new It(.2,.2)),C}else return Eh(null,o,e.clayColor);return y.roughness=y.roughness!==void 0?Math.max(.75,y.roughness):.85,y.metalness=y.metalness!==void 0?Math.min(.15,y.metalness):.05,y.map&&(y.map.colorSpace=Pe),d&&!y.bumpMap&&(y.bumpMap=d.bumpMap,y.bumpScale=.015,y.normalMap=d.normalMap,y.normalScale=new It(.15,.15)),y.needsUpdate=!0,y});m.material=Array.isArray(m.material)?v:v[0]}}),l){const m=new Fi().setFromObject(g),p=m.getSize(new k);m.getCenter(new k);const y=(e.targetHeight||16)/(p.y||1);g.scale.setScalar(y),m.setFromObject(g);const x=m.getCenter(new k);g.position.x-=x.x,g.position.y-=m.min.y,g.position.z-=x.z}else{const m=new Fi().setFromObject(g),p=m.getSize(new k);m.getCenter(new k);const y=(o?2.45:e.targetHeight||1.9)/(p.y||1);g.scale.setScalar(y),m.setFromObject(g);const x=m.getCenter(new k);g.position.x-=x.x,g.position.y-=m.min.y,g.position.z-=x.z}return g.userData={folderPath:r,baseName:t,usedFormat:_,isObelix:o,isAsterix:a,isEnvironment:l},g}function Eh(r,t,e){if(r)return new Os({map:r,roughness:.85,metalness:.05});const n=e||(t?2719929:15158332);return new Os({color:n,roughness:.85,metalness:.05})}class wh{constructor(t,e={}){this.id=t,this.name=e.name||(t==="A"?"Astériclos":"Obélicon"),this.group=new De,this.group.name=`CharacterRoot_${t}`,this.modelRoot=new De,this.modelRoot.name=`ModelRoot_${t}`,this.group.add(this.modelRoot),this.currentAction="idle",this.animTime=0,this.actionProgress=0,this.currentScaleY=1,this.currentScaleXZ=1,this.currentPosY=0,this.currentRotX=0,this.currentRotY=0,this.currentRotZ=0;const n=t==="B";this.head=new De,this.head.name=`HeadAnchor_${t}`,this.head.position.y=n?2.4:1.85,this.modelRoot.add(this.head),this.isLoaded=!1,this._load3DModel()}getHeadWorldPosition(t){return this.head?this.head.getWorldPosition(t):(this.group.getWorldPosition(t),t.y+=this.id==="A"?1.85:2.4),t}_load3DModel(){const t=this.id==="B",e=t?"models/obelix":"models/asterix",n=t?"Obelix":"Asterix",i="./",o=`${i.endsWith("/")?i:i+"/"}${e}`;Ou(o,n,{isObelix:t,targetHeight:t?2.45:1.9}).then(a=>{this._setupLoadedModel(a)}).catch(a=>{console.warn(`[3D-LOADER] Échec polymorphe pour ${this.name}, fallback procédural:`,a.message),this._setupProceduralFallback()})}_setupLoadedModel(t){for(;this.modelRoot.children.length>0;){const e=this.modelRoot.children[0];if(e===this.head)break;this.modelRoot.remove(e)}this.modelMesh=t,this.modelRoot.add(t),this.modelRoot.children.includes(this.head)||this.modelRoot.add(this.head),this.isLoaded=!0}_setupProceduralFallback(){if(this.isLoaded)return;const t=new De,e=this.id==="A",n=new Os({color:e?15158332:2719929,roughness:.85}),i=new Qt(new sn(e?.35:.65,e?.45:.75,e?1.8:2.2,16),n);i.position.y=(e?1.8:2.2)*.5,i.castShadow=!0,i.receiveShadow=!0,t.add(i),this.modelRoot.add(t)}setAction(t){this.currentAction=t,this.actionProgress=0}update(t){this.animTime+=t,this.actionProgress+=t;const e=this.animTime,n=this.currentAction;let i=1,s=1,o=0,a=0,l=0,c=0;if(n==="talk"){const d=1+Math.sin(e*8)*.05;i=d,s=1/Math.sqrt(d),c=Math.sin(e*4)*.04,a=Math.sin(e*6)*.03,o=Math.max(0,Math.sin(e*8))*.03}else if(n==="move"||n==="run"||n==="kick"){const d=Math.abs(Math.sin(e*10))*.15;o=d,a=.14,c=Math.sin(e*10)*.05,i=1+(d>.08?.04:-.04),s=1/Math.sqrt(i)}else if(n==="think")c=this.id==="A"?.08:-.08,a=.06,i=1.03,s=1/Math.sqrt(i);else if(n==="shrug")i=.9,s=1/Math.sqrt(i),c=Math.sin(e*12)*.03;else if(n==="celebrate")o=Math.abs(Math.sin(e*8))*.35,i=1+Math.sin(e*8)*.08,s=1/Math.sqrt(i),l=Math.sin(e*5)*.2;else if(n==="prayTridentine"||n==="incurvatio")a=.24,i=.95,s=1/Math.sqrt(i);else if(n==="praiseEmmanuel"||n==="orans"||n==="clap")c=Math.sin(e*3.2)*.07,o=Math.abs(Math.sin(e*6.4))*.07,i=1+Math.sin(e*6.4)*.03,s=1/Math.sqrt(i);else{const d=1+Math.sin(e*2.8)*.02;i=d,s=1/Math.sqrt(d),c=Math.sin(e*1.4)*.015}const h=Math.min(1,10*t);this.currentScaleY=Mn.lerp(this.currentScaleY,i,h),this.currentScaleXZ=Mn.lerp(this.currentScaleXZ,s,h),this.currentPosY=Mn.lerp(this.currentPosY,o,h),this.currentRotX=Mn.lerp(this.currentRotX,a,h),this.currentRotY=Mn.lerp(this.currentRotY,l,h),this.currentRotZ=Mn.lerp(this.currentRotZ,c,h),this.modelRoot.scale.set(this.currentScaleXZ,this.currentScaleY,this.currentScaleXZ),this.modelRoot.position.y=this.currentPosY,this.modelRoot.rotation.x=this.currentRotX,this.modelRoot.rotation.y=this.currentRotY,this.modelRoot.rotation.z=this.currentRotZ}}const av={API_KEY:["AQ","Ab8RN6I4hGi5fDOf4OfEzJVe-X_b9XhEBx450z9i-wjOXpVSSw"].join("."),MODEL:"gemini-2.5-flash-lite",MAX_TOKENS:85};class lv{constructor(){this.config=av,this.activeModel=this.config.MODEL==="gemini-2.5-flash-lite"?"gemini-3.5-flash-lite":this.config.MODEL}get apiKey(){return this.getApiKey()}getApiKey(){try{const t=localStorage.getItem("gemini_api_key");if(t&&t.trim().length>10)return t.trim()}catch{}return this.config.API_KEY}setApiKey(t){if(t&&t.trim().length>10)try{localStorage.setItem("gemini_api_key",t.trim())}catch{}else try{localStorage.removeItem("gemini_api_key")}catch{}}hasApiKey(){return!!this.getApiKey()}getStatus(){return this.getApiKey()?{online:!0,model:this.activeModel,label:`Connecté (${this.activeModel})`}:{online:!1,model:"En attente de clé",label:"Clé requise (cliquez sur 🔑)"}}async _callGemini(t,e=this.activeModel){var h,d,u,f,g;const n=this.getApiKey();if(!n)throw new Error("Clé API Gemini non configurée.");const i=`https://generativelanguage.googleapis.com/v1beta/models/${e}:generateContent?key=${n}`,s={contents:[{role:"user",parts:[{text:t}]}],generationConfig:{maxOutputTokens:this.config.MAX_TOKENS||85,temperature:.7}};let o,a;for(let _=0;_<3;_++)try{if(o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),o&&o.ok)break}catch(m){a=m,_<2&&await new Promise(p=>setTimeout(p,600*(_+1)))}if(!o)throw new Error(`Erreur réseau Gemini: ${(a==null?void 0:a.message)||"Connexion impossible"}`);if(!o.ok){const _=await o.text();let m=`HTTP ${o.status}`;try{const p=JSON.parse(_);p.error&&p.error.message&&(m=p.error.message)}catch{}if(e!=="gemini-flash-lite-latest")return this.activeModel="gemini-flash-lite-latest",await this._callGemini(t,"gemini-flash-lite-latest");throw new Error(`[Gemini API ${o.status}] ${m}`)}const l=await o.json(),c=(g=(f=(u=(d=(h=l==null?void 0:l.candidates)==null?void 0:h[0])==null?void 0:d.content)==null?void 0:u.parts)==null?void 0:f[0])==null?void 0:g.text;if(!c||c.trim()==="")throw new Error("Réponse vide reçue de l'API Gemini.");return c.trim().replace(/^["']|["']$/g,"")}async generateTurn(t,e,n=[]){const i=n.slice(-4).map(o=>`${o.speaker==="A"?"Astériclos (Thomiste)":"Obélicon (Cartésien)"} : "${o.text}"`).join(`
`);let s="";return t==="A"?s=`Tu incarnes "Astériclos", bonhomme gaulois en pâte à modeler et philosophe ARISTOTÉLICO-THOMISTE / RÉALISTE passionné.
Tes principes :
1. La vérité est l'adéquation de l'intellect à la chose réelle (adaequatio intellectus et rei).
2. Pars toujours de l'observation concrète, de la matière sensible, du sanglier qui cuit, de ce que tes yeux et tes doigts d'argile touchent.
3. Réfute le doute excessif par le bon sens paysan gaulois.
Sujet du débat : « ${e} ».
${i?`Derniers échanges :
${i}
`:""}
Consigne stricte : Réponds en UNE seule phrase percutante (style BD Astérix, max 25 mots). Parle avec franchise, vigueur gauloise et réalisme philosophique.`:s=`Tu incarnes "Obélicon", bonhomme gaulois colossal en pâte à modeler et philosophe CARTÉSIEN / RATIONALISTE obstiné.
Tes principes :
1. Doute méthodique absolu : les sens peuvent nous tromper, le malin génie pourrait tout illusionner.
2. Seule la pensée pure prouve l'existence : "Cogito, ergo sum" (Je pense, donc je suis).
3. Remets en question la réalité de ton corps d'argile ou des menhirs : sont-ils de la res extensa illusoire ?
Sujet du débat : « ${e} ».
${i?`Derniers échanges :
${i}
`:""}
Consigne stricte : Réponds en UNE seule phrase percutante (style BD Astérix, max 25 mots). Sois naïf mais redoutablement logique dans ton doute cartésien.`,await this._callGemini(s)}async generateSoccerReaction(t,e){const n=`Contexte : Mini-match de foot gaulois en pâte à modeler.
Événement : ${t} par ${e}.
Consigne : Rédige une exclamation hilarante et courte de supporter gaulois (max 15 mots, ambiance BD).`;return await this._callGemini(n)}async generatePrayerText(t,e){if(t==="tridentine"){const n=`Contexte : Messe tridentine traditionnelle ad orientem dans un village gaulois d'argile.
Personnage : ${e}.
Consigne : Écris une courte phrase solennelle en latin ecclésiastique suivie de sa traduction française méditative (ex: "Introibo ad altare Dei..."). Max 20 mots.`;return await this._callGemini(n)}else{const n=`Contexte : Louange joyeuse du Renouveau Charismatique (Communauté de l'Emmanuel) au soleil.
Personnage : ${e}.
Consigne : Écris une courte exclamation d'action de grâce joyeuse et fraternelle (style "Il est vivant !", max 18 mots).`;return await this._callGemini(n)}}}const Cn=new lv;class cv{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.initialized=!0}catch(t){console.warn("AudioContext non supporté ou bloqué",t)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.muted}playBubblePop(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(780,t+.08),e.frequency.exponentialRampToValueAtTime(140,t+.14),n.gain.setValueAtTime(.25,t),n.gain.exponentialRampToValueAtTime(.001,t+.14),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.15)}playFootstep(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(45,t+.06),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.06),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.07)}playKick(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(240,t),e.frequency.exponentialRampToValueAtTime(38,t+.18),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.ctx.destination),e.start(t),e.stop(t+.19)}playGoal(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=[261.63,329.63,392,523.25,659.25,783.99],e=this.ctx.currentTime;t.forEach((n,i)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.value=n;const a=e+i*.07;o.gain.setValueAtTime(.2,a),o.gain.exponentialRampToValueAtTime(.001,a+.5),s.connect(o),o.connect(this.ctx.destination),s.start(a),s.stop(a+.55)})}playChurchBell(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=440,e=[.5,1,1.19,1.56,2,2.74],n=[.25,.35,.2,.15,.1,.08],i=this.ctx.currentTime;e.forEach((s,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sine",a.frequency.value=t*s;const c=2.2/(o*.4+1);l.gain.setValueAtTime(n[o],i),l.gain.exponentialRampToValueAtTime(1e-4,i+c),a.connect(l),l.connect(this.ctx.destination),a.start(i),a.stop(i+c)})}playPraiseChord(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=[293.66,369.99,440,587.33],e=this.ctx.currentTime;t.forEach((n,i)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.value=n;const a=e+i*.035;o.gain.setValueAtTime(.18,a),o.gain.exponentialRampToValueAtTime(.001,a+1.2),s.connect(o),o.connect(this.ctx.destination),s.start(a),s.stop(a+1.25)})}playClap(){if(this.muted||(this.ensureContext(),!this.ctx))return;const t=this.ctx.currentTime,e=this.ctx.sampleRate*.08,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let l=0;l<e;l++)i[l]=(Math.random()*2-1)*Math.exp(-l/(this.ctx.sampleRate*.02));const s=this.ctx.createBufferSource();s.buffer=n;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1100,o.Q.value=1.8;const a=this.ctx.createGain();a.gain.setValueAtTime(.28,t),a.gain.exponentialRampToValueAtTime(.001,t+.08),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(t)}}const Oe=new cv;class hv{constructor(t,e,n){this.charA=t,this.charB=e,this.uiCallbacks=n,this.active=!1,this.isRunning=!1,this.isGenerating=!1,this.currentTopic="Le libre arbitre existe-t-il dans un corps en argile ?",this.conversationHistory=[],this.currentSpeaker="A",this.readTimer=0,this.readDuration=4.5,this.loopCount=0,this.sceneGroup=new De,this.sceneGroup.name="DebateScene",this.sceneGroup.visible=!1,this._buildEnvironment()}_buildEnvironment(){const t=new De;t.position.set(.4,0,-3.4);const e=3.6,n=32,i=36,s=new sn(.38,1.05,e,n,i),o=s.attributes.position,a=new k;for(let v=0;v<o.count;v++){a.fromBufferAttribute(o,v);const y=(a.y+e*.5)/e,x=Math.sin(y*Math.PI*.85)*.38;a.x*=1+x,a.z*=.75+x*.7;const D=Math.atan2(a.z,a.x),C=Math.sin(D*4+a.y*3.5)*.08,I=Math.cos(D*7-a.y*5)*.045,N=Math.sin(a.y*12)*.025,E=C+I+N;if(a.x+=Math.cos(D)*E,a.z+=Math.sin(D)*E,y>.7){const b=(y-.7)/.3;a.z-=b*b*.22,a.x+=Math.sin(b*Math.PI)*.08}o.setXYZ(v,a.x,a.y,a.z)}s.computeVertexNormals();const l=ze(Ze.menhirRock,{roughness:.88,metalness:.03,bumpScale:.06}),c=new Qt(s,l);c.position.y=e*.5-.15,c.rotation.y=.35,c.castShadow=!0,c.receiveShadow=!0,t.add(c);const h=ze(Ze.menhirMoss,{roughness:.92,bumpScale:.08});[{y:.8,angle:.4,scale:.32},{y:1.4,angle:-1.2,scale:.28},{y:.5,angle:2.1,scale:.38},{y:1.9,angle:.8,scale:.22}].forEach(v=>{const y=new $n(v.scale,10,8);y.scale(1.2,.4,.8);const x=new Qt(y,h),D=.85;x.position.set(Math.cos(v.angle)*D,v.y,Math.sin(v.angle)*D*.75),x.rotation.y=v.angle,x.rotation.z=.2,x.castShadow=!0,t.add(x)});const u=new sn(1.6,2.1,.35,18),f=ze(7220224,{roughness:.9}),g=new Qt(u,f);g.position.y=.12,g.receiveShadow=!0,t.add(g);for(let v=0;v<7;v++){const y=new $n(.12+Math.random()*.1,8,6);y.scale(1.3,.65,1.1);const x=new Qt(y,l),D=v/7*Math.PI*2+Math.random()*.4,C=1.3+Math.random()*.5;x.position.set(Math.cos(D)*C,.12,Math.sin(D)*C),x.rotation.y=Math.random()*Math.PI,x.castShadow=!0,t.add(x)}this.sceneGroup.add(t);const _="./",p=`${_.endsWith("/")?_:_+"/"}models/environnement`;Ou(p,"000.dae",{isEnvironment:!0,targetHeight:14}).then(v=>{v.name="GaulVillageEnvironment",v.position.set(0,-.05,-7.5),v.rotation.y=Math.PI*.15,this.sceneGroup.add(v),this.villageEnv=v}).catch(v=>{console.warn("[DEBATE-ENV] Décor environnement 000.dae:",v.message)})}enter(){this.active=!0,this.sceneGroup.visible=!0,this.charA.group.position.set(-1.6,0,0),this.charA.group.rotation.set(0,Math.PI*.35,0),this.charB.group.position.set(1.6,0,0),this.charB.group.rotation.set(0,-Math.PI*.35,0),this.charA.setAction("idle"),this.charB.setAction("idle"),this.uiCallbacks.onDebateStateChange&&this.uiCallbacks.onDebateStateChange(this.isRunning)}exit(){this.stopDebate(),this.active=!1,this.sceneGroup.visible=!1,this.uiCallbacks.hideBubbles&&this.uiCallbacks.hideBubbles()}startDebate(t){t&&t.trim().length>0&&(this.currentTopic=t.trim()),this.isRunning=!0,this.conversationHistory=[],this.currentSpeaker="A",this.readTimer=0,this.loopCount=0,this.uiCallbacks.onDebateStateChange&&this.uiCallbacks.onDebateStateChange(!0),this._triggerNextTurn()}stopDebate(){this.isRunning=!1,this.isGenerating=!1,this.readTimer=0,this.charA.setAction("idle"),this.charB.setAction("idle"),this.uiCallbacks.onDebateStateChange&&this.uiCallbacks.onDebateStateChange(!1),this.uiCallbacks.onDebateStatus&&this.uiCallbacks.onDebateStatus("Débat en pause. Cliquez sur « Lancer le débat » pour reprendre.",!1)}async _triggerNextTurn(){if(!this.active||!this.isRunning||this.isGenerating)return;this.isGenerating=!0;const t=this.currentSpeaker,e=t==="A"?"Astériclos (Thomiste)":"Obélicon (Cartésien)";t==="A"?(this.charA.setAction("think"),this.charB.setAction("idle")):(this.charB.setAction("think"),this.charA.setAction("idle")),this.uiCallbacks.onDebateStatus&&this.uiCallbacks.onDebateStatus(`${e} réfléchit en direct avec Gemini...`,!0);try{const n=await Cn.generateTurn(t,this.currentTopic,this.conversationHistory);if(!this.isRunning)return;this.conversationHistory.push({speaker:t,text:n}),this.isGenerating=!1,this.readTimer=0,this.loopCount++,Oe.playBubblePop(),t==="A"?(this.charA.setAction("talk"),this.charB.setAction("think"),this.uiCallbacks.showBubbleA&&this.uiCallbacks.showBubbleA(n),this.uiCallbacks.hideBubbleB&&this.uiCallbacks.hideBubbleB()):(this.charB.setAction("talk"),this.charA.setAction("shrug"),this.uiCallbacks.showBubbleB&&this.uiCallbacks.showBubbleB(n),this.uiCallbacks.hideBubbleA&&this.uiCallbacks.hideBubbleA()),this.uiCallbacks.onDebateStatus&&this.uiCallbacks.onDebateStatus(`Débat en cours (Échange #${this.loopCount}) : « ${this.currentTopic} »`,!1)}catch(n){console.error("[DEBATE-ERROR]",n),this.isGenerating=!1,this.uiCallbacks.onDebateError&&this.uiCallbacks.onDebateError(n.message||"Erreur de connexion à l'API Gemini."),this.stopDebate()}}update(t){!this.active||!this.isRunning||!this.isGenerating&&this.conversationHistory.length>0&&(this.readTimer+=t,this.readTimer>=this.readDuration&&(this.readTimer=0,this.currentSpeaker=this.currentSpeaker==="A"?"B":"A",this._triggerNextTurn()))}}class Hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new w);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new w);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Hn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],_=i[0],m=i[1],p=i[2],v=i[3],y=i[4],x=i[5],D=i[6],C=i[7],I=i[8];return s[0]=o*_+a*v+l*D,s[1]=o*m+a*y+l*C,s[2]=o*p+a*x+l*I,s[3]=c*_+h*v+d*D,s[4]=c*m+h*y+d*C,s[5]=c*p+h*x+d*I,s[6]=u*_+f*v+g*D,s[7]=u*m+f*y+g*C,s[8]=u*p+f*x+g*I,e}scale(t,e){e===void 0&&(e=new Hn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new w);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=d;do u=d-h,s[u+i*a]=u<=o?0:s[u+i*a]-s[u+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Hn);const e=3,n=6,i=uv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=n;let d;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do d=h-c,i[d+n*s]+=i[d+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const u=i[s+n*o]/i[s+n*s];c=h;do d=h-c,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=i*l,_=s*o,m=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-p,v[3*0+2]=d+m,v[3*1+0]=h+p,v[3*1+1]=1-(c+g),v[3*1+2]=f-_,v[3*2+0]=d-m,v[3*2+1]=f+_,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new Hn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const uv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new w(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new w(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new w);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new w);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new w),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new w),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new w),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=dv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=fv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Th),Th.almostEquals(t,e)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const dv=new w,fv=new w,Th=new w;class En{constructor(t){t===void 0&&(t={}),this.lowerBound=new w,this.upperBound=new w,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Ah),c=Ah),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new En().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=Ch,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ch,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const Ah=new w,Ch=[new w,new w,new w,new w,new w,new w,new w,new w];class Rh{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class ku{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class Ge{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new w),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=pv,i=mv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ge);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new Ge);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ge),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new w);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,d=c*i+l*n-o*s,u=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Ge(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ge);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,_,m;return f=i*l+s*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),_=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(_=1-e,m=e),n.x=_*i+m*l,n.y=_*s+m*c,n.z=_*o+m*h,n.w=_*a+m*d,n}integrate(t,e,n,i){i===void 0&&(i=new Ge);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-a*c),i.y+=u*(o*d+a*l-s*h),i.z+=u*(a*d+s*c-o*l),i.w+=u*(-s*l-o*c-a*h),i}}const pv=new w,mv=new w,gv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Lt{constructor(t){t===void 0&&(t={}),this.id=Lt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Lt.idCounter=0;Lt.types=gv;class Me{constructor(t){t===void 0&&(t={}),this.position=new w,this.quaternion=new Ge,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Me.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Me.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),n.vsub(t,i),e.conjugate(Ph),Ph.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new w),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new w),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new w),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Ph=new Ge;class fr extends Lt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:Lt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new w;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new w;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];fr.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new w,o=new w;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new w;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const f=[];for(let g=0;g<n.faces[d].length;g++){const _=n.vertices[n.faces[d][g]],m=new w;m.copy(_),s.vmult(m,m),i.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new w,h=new w,d=new w,u=new w,f=new w,g=new w;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const v=m.testSepAxis(h,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;fr.project(a,t,n,i,Sa),fr.project(e,t,s,o,Ea);const l=Sa[0],c=Sa[1],h=Ea[0],d=Ea[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){const n=new w,i=new w;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new w,c=new w,h=new w,d=new w,u=new w,f=new w,g=new w,_=new w,m=this,p=[],v=i,y=p;let x=-1,D=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){l.copy(m.faceNormals[b]),n.vmult(l,l);const U=l.dot(t);U<D&&(D=U,x=b)}if(x<0)return;const C=m.faces[x];C.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let U=0;U<m.faces[b].length;U++)C.indexOf(m.faces[b][U])!==-1&&b!==x&&C.connectedFaces.indexOf(b)===-1&&C.connectedFaces.push(b);const I=C.length;for(let b=0;b<I;b++){const U=m.vertices[C[b]],G=m.vertices[C[(b+1)%I]];U.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[x]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(U),n.vmult(f,f),e.vadd(f,f);const O=C.connectedFaces[b];g.copy(this.faceNormals[O]);const z=this.getPlaneConstantOfFace(O);_.copy(g),n.vmult(_,_);const H=z-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,H);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const N=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const E=N-_.dot(e);for(let b=0;b<v.length;b++){let U=_.dot(v[b])+E;if(U<=s&&(console.log(`clamped: depth=${U} to minDist=${s}`),U=s),U<=o){const G=v[b];if(U<=1e-6){const O={point:G,normal:_,depth:U};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const d=new w;d.copy(c),e.push(d)}else{const d=new w;l.lerp(c,s/(s-o),d),e.push(d)}else if(o<0){const d=new w;l.lerp(c,s/(s-o),d),e.push(d),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new w);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,d,u=new w;for(let f=0;f<s.length;f++){u.copy(s[f]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),i.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new w);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new w;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new w;t.vsub(l,c);const h=a.dot(c),d=new w;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=_v;let l=0,c=0;const h=vv,d=t.vertices;h.setZero(),Me.vectorToLocalFrame(n,i,e,a),Me.pointToLocalFrame(n,i,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const Sa=[],Ea=[];new w;const _v=new w,vv=new w;class No extends Lt{constructor(t){super({type:Lt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=w,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new fr({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new w),No.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Ii.set(s[o][0],s[o][1],s[o][2]),e.vmult(Ii,Ii),t.vadd(Ii,Ii),n(Ii.x,Ii.y,Ii.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;qn[0].set(s.x,s.y,s.z),qn[1].set(-s.x,s.y,s.z),qn[2].set(-s.x,-s.y,s.z),qn[3].set(-s.x,-s.y,-s.z),qn[4].set(s.x,-s.y,-s.z),qn[5].set(s.x,s.y,-s.z),qn[6].set(-s.x,s.y,-s.z),qn[7].set(s.x,-s.y,s.z);const o=qn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=qn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),d>i.z&&(i.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Ii=new w,qn=[new w,new w,new w,new w,new w,new w,new w,new w],Gl={DYNAMIC:1,STATIC:2,KINEMATIC:4},Vl={AWAKE:0,SLEEPY:1,SLEEPING:2};class Pt extends ku{constructor(t){t===void 0&&(t={}),super(),this.id=Pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new w,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new w,this.force=new w;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Pt.STATIC:Pt.DYNAMIC,typeof t.type==typeof Pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Ge,this.initQuaternion=new Ge,this.previousQuaternion=new Ge,this.interpolatedQuaternion=new Ge,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new w,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Hn,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new w(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new w(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new En,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Pt.SLEEPING&&this.dispatchEvent(Pt.wakeupEvent)}sleep(){this.sleepState=Pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===Pt.AWAKE&&n<i?(this.sleepState=Pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Pt.sleepyEvent)):e===Pt.SLEEPY&&n>i?this.wakeUp():e===Pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Pt.SLEEPING||this.type===Pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new w),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new w),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new w),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new w,s=new Ge;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=xv,o=yv,a=this.quaternion,l=this.aabb,c=Mv;for(let h=0;h!==i;h++){const d=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=bv,i=Sv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;this.sleepState===Pt.SLEEPING&&this.wakeUp();const n=Ev;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;const n=wv,i=Tv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===Pt.DYNAMIC&&(this.sleepState===Pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;this.sleepState===Pt.SLEEPING&&this.wakeUp();const n=e,i=Av;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Cv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new w),this.type!==Pt.DYNAMIC)return;const n=Rv,i=Pv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Lv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),No.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new w;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Pt.DYNAMIC||this.type===Pt.KINEMATIC)||this.sleepState===Pt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;i.x+=a.x*f*u.x,i.y+=a.y*f*u.y,i.z+=a.z*f*u.z;const g=d.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*v),s.y+=t*(g[3]*m+g[4]*p+g[5]*v),s.z+=t*(g[6]*m+g[7]*p+g[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Pt.idCounter=0;Pt.COLLIDE_EVENT_NAME="collide";Pt.DYNAMIC=Gl.DYNAMIC;Pt.STATIC=Gl.STATIC;Pt.KINEMATIC=Gl.KINEMATIC;Pt.AWAKE=Vl.AWAKE;Pt.SLEEPY=Vl.SLEEPY;Pt.SLEEPING=Vl.SLEEPING;Pt.wakeupEvent={type:"wakeup"};Pt.sleepyEvent={type:"sleepy"};Pt.sleepEvent={type:"sleep"};const xv=new w,yv=new Ge,Mv=new En,bv=new Hn,Sv=new Hn;new Hn;const Ev=new w,wv=new w,Tv=new w,Av=new w,Cv=new w,Rv=new w,Pv=new w,Lv=new w;class Iv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Pt.STATIC||t.sleepState===Pt.SLEEPING)&&(e.type&Pt.STATIC||e.sleepState===Pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Dv;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Nv,i=Uv,s=Fv,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new w;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Dv=new w;new w;new Ge;new w;const Nv={keys:[]},Uv=[],Fv=[];new w;new w;new w;class Bv extends Iv{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Eo{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let zu,Gu,Vu,Hu,Wu,qu,Xu;const Hl={CLOSEST:1,ANY:2,ALL:4};zu=Lt.types.SPHERE;Gu=Lt.types.PLANE;Vu=Lt.types.BOX;Hu=Lt.types.CYLINDER;Wu=Lt.types.CONVEXPOLYHEDRON;qu=Lt.types.HEIGHTFIELD;Xu=Lt.types.TRIMESH;class ke{get[zu](){return this._intersectSphere}get[Gu](){return this._intersectPlane}get[Vu](){return this._intersectBox}get[Hu](){return this._intersectConvex}get[Wu](){return this._intersectConvex}get[qu](){return this._intersectHeightfield}get[Xu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new w),e===void 0&&(e=new w),this.from=t.clone(),this.to=e.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ke.ANY,this.result=new Eo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||ke.ANY,this.result=e.result||new Eo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Lh),wa.length=0,t.broadphase.aabbQuery(t,Lh,wa),this.intersectBodies(wa),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=Ov,s=kv;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Qv(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new w(0,0,1);e.vmult(c,c);const h=new w;o.vsub(n,h);const d=h.dot(c);a.vsub(n,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new w,_=new w,m=new w;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,_),o.vadd(_,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=zv;o.from.copy(this.from),o.to.copy(this.to),Me.pointToLocalFrame(n,e,o.from,o.from),Me.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Gv;let l,c,h,d;l=c=0,h=d=t.data.length-1;const u=new En;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),Me.pointToWorldFrame(n,e,t.pillarOffset,ro),this._intersectConvex(t.pillarConvex,e,ro,i,s,Ih),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),Me.pointToWorldFrame(n,e,t.pillarOffset,ro),this._intersectConvex(t.pillarConvex,e,ro,i,s,Ih)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=Vv,g=Hv;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const _=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Wv,l=Dh,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const x=c?c[y]:y,D=h[x],C=u[x],I=e,N=n;l.copy(d[D[0]]),I.vmult(l,l),l.vadd(N,l),l.vsub(g,l),I.vmult(C,a);const E=f.dot(a);if(Math.abs(E)<this.precision)continue;const b=a.dot(l)/E;if(!(b<0)){f.scale(b,mn),mn.vadd(g,mn),kn.copy(d[D[0]]),I.vmult(kn,kn),N.vadd(kn,kn);for(let U=1;!v.shouldStop&&U<D.length-1;U++){Xn.copy(d[D[U]]),jn.copy(d[D[U+1]]),I.vmult(Xn,Xn),I.vmult(jn,jn),N.vadd(Xn,Xn),N.vadd(jn,jn);const G=mn.distanceTo(g);!(ke.pointInTriangle(mn,kn,Xn,jn)||ke.pointInTriangle(mn,Xn,kn,jn))||G>m||this.reportIntersection(a,mn,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=qv,l=$v,c=Jv,h=Dh,d=Xv,u=jv,f=Yv,g=Zv,_=Kv,m=t.indices;t.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Me.vectorToLocalFrame(n,e,y,d),Me.pointToLocalFrame(n,e,p,u),Me.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();const x=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let D=0,C=l.length;!this.result.shouldStop&&D!==C;D++){const I=l[D];t.getNormal(I,a),t.getVertex(m[I*3],kn),kn.vsub(u,h);const N=d.dot(a),E=a.dot(h)/N;if(E<0)continue;d.scale(E,mn),mn.vadd(u,mn),t.getVertex(m[I*3+1],Xn),t.getVertex(m[I*3+2],jn);const b=mn.distanceSquared(u);!(ke.pointInTriangle(mn,Xn,kn,jn)||ke.pointInTriangle(mn,kn,Xn,jn))||b>x||(Me.vectorToWorldFrame(e,a,_),Me.pointToWorldFrame(n,e,mn,g),this.reportIntersection(_,g,s,i,I))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ke.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case ke.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case ke.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,$i),n.vsub(e,ir),t.vsub(e,Ta);const s=$i.dot($i),o=$i.dot(ir),a=$i.dot(Ta),l=ir.dot(ir),c=ir.dot(Ta);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}ke.CLOSEST=Hl.CLOSEST;ke.ANY=Hl.ANY;ke.ALL=Hl.ALL;const Lh=new En,wa=[],ir=new w,Ta=new w,Ov=new w,kv=new Ge,mn=new w,kn=new w,Xn=new w,jn=new w;new w;new Eo;const Ih={faceList:[0]},ro=new w,zv=new ke,Gv=[],Vv=new w,Hv=new w,Wv=new w;new w;new w;const Dh=new w,qv=new w,Xv=new w,jv=new w,Yv=new w,Kv=new w,Zv=new w;new En;const $v=[],Jv=new Me,$i=new w,oo=new w;function Qv(r,t,e){e.vsub(r,$i);const n=$i.dot(t);return t.scale(n,oo),oo.vadd(r,oo),e.distanceTo(oo)}class tx{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Nh{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class vr{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=vr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Nh,this.jacobianElementB=new Nh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Uh),a.scale(h,Fh),n.invInertiaWorldSolve.vmult(o,Bh),i.invInertiaWorldSolve.vmult(l,Oh),t.multiplyVectors(Uh,Bh)+e.multiplyVectors(Fh,Oh)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,ao),c+=ao.dot(t.rotational),l.vmult(e.rotational,ao),c+=ao.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ex;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}vr.idCounter=0;const Uh=new w,Fh=new w,Bh=new w,Oh=new w,ao=new w,ex=new w;class nx extends vr{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=ix,c=sx,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=rx,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),y=this.restitution+1,x=y*u.dot(p)-y*h.dot(p)+f.dot(c)-d.dot(l),D=this.computeGiMf();return-v*e-x*n-t*D}getImpactVelocityAlongNormal(){const t=ox,e=ax,n=lx,i=cx,s=hx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const ix=new w,sx=new w,rx=new w,ox=new w,ax=new w,lx=new w,cx=new w,hx=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class kh extends vr{constructor(t,e,n){super(t,e,-n,n),this.ri=new w,this.rj=new w,this.t=new w}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=ux,o=dx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const ux=new w,dx=new w;class xr{constructor(t,e,n){n=tx.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=xr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}xr.idCounter=0;class Gs{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Gs.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Gs.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new ke;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class fx extends Lt{constructor(t){if(super({type:Lt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new w);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];n[l]=t[l]-s,i[l]=t[l]+s}}}new w;new w;new w;new w;new w;new w;new w;new w;new w;class px extends Lt{constructor(){super({type:Lt.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new w),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){li.set(0,0,1),e.vmult(li,li);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),li.x===1?i.x=t.x:li.x===-1&&(n.x=t.x),li.y===1?i.y=t.y:li.y===-1&&(n.y=t.y),li.z===1?i.z=t.z:li.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const li=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new En;new w;new En;new w;new w;new w;new w;new w;new w;new w;new En;new w;new Me;new En;class mx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class gx extends mx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let d,u,f,g,_,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=vx,v=xx,y=_x;p.length=a,v.length=a,y.length=a;for(let x=0;x!==a;x++){const D=o[x];y[x]=0,v[x]=D.computeB(h),p[x]=1/D.computeC()}if(a!==0){for(let C=0;C!==c;C++){const I=l[C],N=I.vlambda,E=I.wlambda;N.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let C=0;C!==a;C++){const I=o[C];d=v[C],u=p[C],m=y[C],_=I.computeGWlambda(),f=u*(d-_-I.eps*m),m+f<I.minForce?f=I.minForce-m:m+f>I.maxForce&&(f=I.maxForce-m),y[C]+=f,g+=f>0?f:-f,I.addToWlambda(f)}if(g*g<s)break}for(let C=0;C!==c;C++){const I=l[C],N=I.velocity,E=I.angularVelocity;I.vlambda.vmul(I.linearFactor,I.vlambda),N.vadd(I.vlambda,N),I.wlambda.vmul(I.angularFactor,I.wlambda),E.vadd(I.wlambda,E)}let x=o.length;const D=1/h;for(;x--;)o[x].multiplier=y[x]*D}return n}}const _x=[],vx=[],xx=[];class yx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Mx extends yx{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const Ie={sphereSphere:Lt.types.SPHERE,spherePlane:Lt.types.SPHERE|Lt.types.PLANE,boxBox:Lt.types.BOX|Lt.types.BOX,sphereBox:Lt.types.SPHERE|Lt.types.BOX,planeBox:Lt.types.PLANE|Lt.types.BOX,convexConvex:Lt.types.CONVEXPOLYHEDRON,sphereConvex:Lt.types.SPHERE|Lt.types.CONVEXPOLYHEDRON,planeConvex:Lt.types.PLANE|Lt.types.CONVEXPOLYHEDRON,boxConvex:Lt.types.BOX|Lt.types.CONVEXPOLYHEDRON,sphereHeightfield:Lt.types.SPHERE|Lt.types.HEIGHTFIELD,boxHeightfield:Lt.types.BOX|Lt.types.HEIGHTFIELD,convexHeightfield:Lt.types.CONVEXPOLYHEDRON|Lt.types.HEIGHTFIELD,sphereParticle:Lt.types.PARTICLE|Lt.types.SPHERE,planeParticle:Lt.types.PLANE|Lt.types.PARTICLE,boxParticle:Lt.types.BOX|Lt.types.PARTICLE,convexParticle:Lt.types.PARTICLE|Lt.types.CONVEXPOLYHEDRON,cylinderCylinder:Lt.types.CYLINDER,sphereCylinder:Lt.types.SPHERE|Lt.types.CYLINDER,planeCylinder:Lt.types.PLANE|Lt.types.CYLINDER,boxCylinder:Lt.types.BOX|Lt.types.CYLINDER,convexCylinder:Lt.types.CONVEXPOLYHEDRON|Lt.types.CYLINDER,heightfieldCylinder:Lt.types.HEIGHTFIELD|Lt.types.CYLINDER,particleCylinder:Lt.types.PARTICLE|Lt.types.CYLINDER,sphereTrimesh:Lt.types.SPHERE|Lt.types.TRIMESH,planeTrimesh:Lt.types.PLANE|Lt.types.TRIMESH};class bx{get[Ie.sphereSphere](){return this.sphereSphere}get[Ie.spherePlane](){return this.spherePlane}get[Ie.boxBox](){return this.boxBox}get[Ie.sphereBox](){return this.sphereBox}get[Ie.planeBox](){return this.planeBox}get[Ie.convexConvex](){return this.convexConvex}get[Ie.sphereConvex](){return this.sphereConvex}get[Ie.planeConvex](){return this.planeConvex}get[Ie.boxConvex](){return this.boxConvex}get[Ie.sphereHeightfield](){return this.sphereHeightfield}get[Ie.boxHeightfield](){return this.boxHeightfield}get[Ie.convexHeightfield](){return this.convexHeightfield}get[Ie.sphereParticle](){return this.sphereParticle}get[Ie.planeParticle](){return this.planeParticle}get[Ie.boxParticle](){return this.boxParticle}get[Ie.convexParticle](){return this.convexParticle}get[Ie.cylinderCylinder](){return this.convexConvex}get[Ie.sphereCylinder](){return this.sphereConvex}get[Ie.planeCylinder](){return this.planeConvex}get[Ie.boxCylinder](){return this.boxConvex}get[Ie.convexCylinder](){return this.convexConvex}get[Ie.heightfieldCylinder](){return this.heightfieldCylinder}get[Ie.particleCylinder](){return this.particleCylinder}get[Ie.sphereTrimesh](){return this.sphereTrimesh}get[Ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Mx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new nx(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,_=g.length?g.pop():new kh(n,i,u*f),m=g.length?g.pop():new kh(n,i,u*f);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-u*f,_.maxForce=m.maxForce=u*f,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];ji.setZero(),bs.setZero(),Ss.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(ji.vadd(e.ni,ji),bs.vadd(e.ri,bs),Ss.vadd(e.rj,Ss)):(ji.vsub(e.ni,ji),bs.vadd(e.rj,bs),Ss.vadd(e.ri,Ss));const o=1/t;bs.scale(o,n.ri),Ss.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),ji.normalize(),ji.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=wx,c=Tx,h=Sx,d=Ex;for(let u=0,f=t.length;u!==f;u++){const g=t[u],_=e[u];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&Pt.KINEMATIC&&_.type&Pt.STATIC||g.type&Pt.STATIC&&_.type&Pt.KINEMATIC||g.type&Pt.KINEMATIC&&_.type&Pt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],d),d.vadd(_.position,d);const D=_.shapes[x];if(!(y.collisionFilterMask&D.collisionFilterGroup&&D.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(d)>y.boundingSphereRadius+D.boundingSphereRadius)continue;let C=null;y.material&&D.material&&(C=n.getContactMaterial(y.material,D.material)||null),this.currentContactMaterial=C||m||n.defaultContactMaterial;const I=y.type|D.type,N=this[I];if(N){let E=!1;y.type<D.type?E=N.call(this,y,D,h,d,l,c,g,_,y,D,p):E=N.call(this,D,y,d,h,c,l,_,g,y,D,p),E&&p&&(n.shapeOverlapKeeper.set(y.id,D.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,lo),u.ni.scale(u.ni.dot(lo),zh),lo.vsub(zh,u.rj),-lo.dot(u.ni)<=t.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}sphereBox(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool,f=Jx;n.vsub(i,co),e.getSideNormals(f,o);const g=t.radius;let _=!1;const m=ty,p=ey,v=ny;let y=null,x=0,D=0,C=0,I=null;for(let F=0,$=f.length;F!==$&&_===!1;F++){const V=Kx;V.copy(f[F]);const Z=V.length();V.normalize();const ct=co.dot(V);if(ct<Z+g&&ct>0){const ht=Zx,ot=$x;ht.copy(f[(F+1)%3]),ot.copy(f[(F+2)%3]);const _t=ht.length(),Y=ot.length();ht.normalize(),ot.normalize();const J=co.dot(ht),st=co.dot(ot);if(J<_t&&J>-_t&&st<Y&&st>-Y){const it=Math.abs(ct-Z-g);if((I===null||it<I)&&(I=it,D=J,C=st,y=Z,m.copy(V),p.copy(ht),v.copy(ot),x++,d))return!0}}}if(x){_=!0;const F=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(y,m),p.scale(D,p),m.vadd(p,m),v.scale(C,v),m.vadd(v,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let N=u.get();const E=Qx;for(let F=0;F!==2&&!_;F++)for(let $=0;$!==2&&!_;$++)for(let V=0;V!==2&&!_;V++)if(N.set(0,0,0),F?N.vadd(f[0],N):N.vsub(f[0],N),$?N.vadd(f[1],N):N.vsub(f[1],N),V?N.vadd(f[2],N):N.vsub(f[2],N),i.vadd(N,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;_=!0;const Z=this.createContactEquation(a,l,t,e,c,h);Z.ri.copy(E),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(N),Z.ri.vadd(n,Z.ri),Z.ri.vsub(a.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(N),N=null;const b=u.get(),U=u.get(),G=u.get(),O=u.get(),z=u.get(),H=f.length;for(let F=0;F!==H&&!_;F++)for(let $=0;$!==H&&!_;$++)if(F%3!==$%3){f[$].cross(f[F],b),b.normalize(),f[F].vadd(f[$],U),G.copy(n),G.vsub(U,G),G.vsub(i,G);const V=G.dot(b);b.scale(V,O);let Z=0;for(;Z===F%3||Z===$%3;)Z++;z.copy(n),z.vsub(O,z),z.vsub(U,z),z.vsub(i,z);const ct=Math.abs(V),ht=z.length();if(ct<f[Z].length()&&ht<g){if(d)return!0;_=!0;const ot=this.createContactEquation(a,l,t,e,c,h);U.vadd(O,ot.rj),ot.rj.copy(ot.rj),z.negate(ot.ni),ot.ni.normalize(),ot.ri.copy(ot.rj),ot.ri.vadd(i,ot.ri),ot.ri.vsub(n,ot.ri),ot.ri.normalize(),ot.ri.scale(g,ot.ri),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(l.position,ot.rj),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult)}}u.release(b,U,G,O,z)}planeBox(t,e,n,i,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,d)}convexConvex(t,e,n,i,s,o,a,l,c,h,d,u,f){const g=_y;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,f)){const _=[],m=vy;t.clipAgainstHull(n,s,e,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(d)return!0;const y=this.createContactEquation(a,l,t,e,c,h),x=y.ri,D=y.rj;g.negate(y.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),D.copy(_[v].point),x.vsub(n,x),D.vsub(i,D),x.vadd(n,x),x.vsub(a.position,x),D.vadd(i,D),D.vsub(l.position,D),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,d){const u=this.v3pool;n.vsub(i,iy);const f=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const y=_[v],x=ay;o.vmult(y,x),i.vadd(x,x);const D=oy;if(x.vsub(n,D),D.lengthSquared()<m*m){if(d)return!0;p=!0;const C=this.createContactEquation(a,l,t,e,c,h);C.ri.copy(D),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(m,C.ri),x.vsub(i,C.rj),C.ri.vadd(n,C.ri),C.ri.vsub(a.position,C.ri),C.rj.vadd(i,C.rj),C.rj.vsub(l.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&p===!1;v++){const x=f[v],D=g[v],C=ly;o.vmult(x,C);const I=cy;o.vmult(_[D[0]],I),I.vadd(i,I);const N=hy;C.scale(-m,N),n.vadd(N,N);const E=uy;N.vsub(I,E);const b=E.dot(C),U=dy;if(n.vsub(I,U),b<0&&U.dot(C)>0){const G=[];for(let O=0,z=D.length;O!==z;O++){const H=u.get();o.vmult(_[D[O]],H),i.vadd(H,H),G.push(H)}if(Yx(G,C,n)){if(d)return!0;p=!0;const O=this.createContactEquation(a,l,t,e,c,h);C.scale(-m,O.ri),C.negate(O.ni);const z=u.get();C.scale(-b,z);const H=u.get();C.scale(-m,H),n.vsub(i,O.rj),O.rj.vadd(H,O.rj),O.rj.vadd(z,O.rj),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),u.release(z),u.release(H),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let F=0,$=G.length;F!==$;F++)u.release(G[F]);return}else for(let O=0;O!==D.length;O++){const z=u.get(),H=u.get();o.vmult(_[D[(O+1)%D.length]],z),o.vmult(_[D[(O+2)%D.length]],H),i.vadd(z,z),i.vadd(H,H);const F=sy;H.vsub(z,F);const $=ry;F.unit($);const V=u.get(),Z=u.get();n.vsub(z,Z);const ct=Z.dot($);$.scale(ct,V),V.vadd(z,V);const ht=u.get();if(V.vsub(n,ht),ct>0&&ct*ct<F.lengthSquared()&&ht.lengthSquared()<m*m){if(d)return!0;const ot=this.createContactEquation(a,l,t,e,c,h);V.vsub(i,ot.rj),V.vsub(n,ot.ni),ot.ni.normalize(),ot.ni.scale(m,ot.ri),ot.rj.vadd(i,ot.rj),ot.rj.vsub(l.position,ot.rj),ot.ri.vadd(n,ot.ri),ot.ri.vsub(a.position,ot.ri),this.result.push(ot),this.createFrictionEquationsFromContact(ot,this.frictionResult);for(let _t=0,Y=G.length;_t!==Y;_t++)u.release(G[_t]);u.release(z),u.release(H),u.release(V),u.release(ht),u.release(Z);return}u.release(z),u.release(H),u.release(V),u.release(ht),u.release(Z)}for(let O=0,z=G.length;O!==z;O++)u.release(G[O])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,d){const u=fy,f=py;f.set(0,0,1),s.vmult(f,f);let g=0;const _=my;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,_),f.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h),y=gy;f.scale(f.dot(_),y),u.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(f),u.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=t.radius,g=e.elementSize,_=Py,m=Ry;Me.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(v<0||x<0||p>u.length||y>u[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),x>=u[0].length&&(x=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);const D=[];e.getRectMinMax(p,y,v,x,D);const C=D[0],I=D[1];if(m.z-f>I||m.z+f<C)return;const N=this.result;for(let E=p;E<v;E++)for(let b=y;b<x;b++){const U=N.length;let G=!1;if(e.getConvexTrianglePillar(E,b,!1),Me.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&G||(e.getConvexTrianglePillar(E,b,!0),Me.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,_,s,o,a,l,t,e,d)),d&&G))return!0;if(N.length-U>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,d){const u=e.data,f=e.elementSize,g=t.boundingSphereRadius,_=Ay,m=Cy,p=Ty;Me.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,D=Math.ceil((p.y+g)/f)+1;if(y<0||D<0||v>u.length||x>u[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),D<0&&(D=0),v>=u.length&&(v=u.length-1),y>=u.length&&(y=u.length-1),D>=u[0].length&&(D=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const C=[];e.getRectMinMax(v,x,y,D,C);const I=C[0],N=C[1];if(!(p.z-g>N||p.z+g<I))for(let E=v;E<y;E++)for(let b=x;b<D;b++){let U=!1;if(e.getConvexTrianglePillar(E,b,!1),Me.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&U||(e.getConvexTrianglePillar(E,b,!0),Me.pointToWorldFrame(i,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(U=this.convexConvex(t,e.pillarConvex,n,_,s,o,a,l,null,null,d,m,null)),d&&U))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,d){const u=by;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,d){const u=xy;u.set(0,0,1),a.quaternion.vmult(u,u);const f=yy;if(i.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=My;u.scale(u.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,d)}convexParticle(t,e,n,i,s,o,a,l,c,h,d){let u=-1;const f=Ey,g=wy;let _=null;const m=Sy;if(m.copy(i),m.vsub(n,m),s.conjugate(Gh),Gh.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],Vh);const D=-x.dot(Vh);if(_===null||Math.abs(D)<Math.abs(_)){if(d)return!0;_=D,u=p,f.copy(x)}}if(u!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,d)}particleCylinder(t,e,n,i,s,o,a,l,c,h,d){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,d)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=Nx,f=Ux,g=Fx,_=Bx,m=Ox,p=kx,v=Hx,y=Dx,x=Lx,D=Wx;Me.pointToLocalFrame(i,o,n,m);const C=t.radius;v.lowerBound.set(m.x-C,m.y-C,m.z-C),v.upperBound.set(m.x+C,m.y+C,m.z+C),e.getTrianglesInAABB(v,D);const I=Ix,N=t.radius*t.radius;for(let O=0;O<D.length;O++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[D[O]*3+z],I),I.vsub(m,x),x.lengthSquared()<=N){if(y.copy(I),Me.pointToWorldFrame(i,o,y,I),I.vsub(n,x),d)return!0;let H=this.createContactEquation(a,l,t,e,c,h);H.ni.copy(x),H.ni.normalize(),H.ri.copy(H.ni),H.ri.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.copy(I),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}for(let O=0;O<D.length;O++)for(let z=0;z<3;z++){e.getVertex(e.indices[D[O]*3+z],u),e.getVertex(e.indices[D[O]*3+(z+1)%3],f),f.vsub(u,g),m.vsub(f,p);const H=p.dot(g);m.vsub(u,p);let F=p.dot(g);if(F>0&&H<0&&(m.vsub(u,p),_.copy(g),_.normalize(),F=p.dot(_),_.scale(F,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;const V=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,V.ni),V.ni.normalize(),V.ni.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),Me.pointToWorldFrame(i,o,p,p),p.vsub(l.position,V.rj),Me.vectorToWorldFrame(o,V.ni,V.ni),Me.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const E=zx,b=Gx,U=Vx,G=Px;for(let O=0,z=D.length;O!==z;O++){e.getTriangleVertices(D[O],E,b,U),e.getNormal(D[O],G),m.vsub(E,p);let H=p.dot(G);if(G.scale(H,p),m.vsub(p,p),H=p.distanceTo(m),ke.pointInTriangle(p,E,b,U)&&H<t.radius){if(d)return!0;let F=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Me.pointToWorldFrame(i,o,p,p),p.vsub(l.position,F.rj),Me.vectorToWorldFrame(o,F.ni,F.ni),Me.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}D.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,d){const u=new w,f=Ax;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const _=new w;_.copy(u),Me.pointToWorldFrame(i,o,_,u);const m=Cx;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;const v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);const y=Rx;f.scale(m.dot(f),y),u.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const ji=new w,bs=new w,Ss=new w,Sx=new w,Ex=new w,wx=new Ge,Tx=new Ge,Ax=new w,Cx=new w,Rx=new w,Px=new w,Lx=new w;new w;const Ix=new w,Dx=new w,Nx=new w,Ux=new w,Fx=new w,Bx=new w,Ox=new w,kx=new w,zx=new w,Gx=new w,Vx=new w,Hx=new En,Wx=[],lo=new w,zh=new w,qx=new w,Xx=new w,jx=new w;function Yx(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=qx;r[(s+1)%i].vsub(o,a);const l=Xx;a.cross(t,l);const c=jx;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const co=new w,Kx=new w,Zx=new w,$x=new w,Jx=[new w,new w,new w,new w,new w,new w],Qx=new w,ty=new w,ey=new w,ny=new w,iy=new w,sy=new w,ry=new w,oy=new w,ay=new w,ly=new w,cy=new w,hy=new w,uy=new w,dy=new w;new w;new w;const fy=new w,py=new w,my=new w,gy=new w,_y=new w,vy=new w,xy=new w,yy=new w,My=new w,by=new w,Gh=new Ge,Sy=new w;new w;const Ey=new w,Vh=new w,wy=new w,Ty=new w,Ay=new w,Cy=[0],Ry=new w,Py=new w;class Hh{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Wh(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Wh(e,h)}}}function Wh(r,t){r.push((t&4294901760)>>16,t&65535)}const Aa=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class Ly{constructor(){this.data={keys:[]}}get(t,e){const n=Aa(t,e);return this.data[n]}set(t,e,n){const i=Aa(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Aa(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Iy extends ku{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Bv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new gx,this.constraints=[],this.narrowphase=new bx(this),this.collisionMatrix=new Rh,this.collisionMatrixPrevious=new Rh,this.bodyOverlapKeeper=new Hh,this.shapeOverlapKeeper=new Hh,this.contactmaterials=[],this.contactMaterialTable=new Ly,this.defaultMaterial=new Gs("default"),this.defaultContactMaterial=new xr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Eo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.ALL,n.from=t,n.to=e,n.callback=i,Ca.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.ANY,n.from=t,n.to=e,n.result=i,Ca.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=ke.CLOSEST,n.from=t,n.to=e,n.result=i,Ca.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=He.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=He.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(He.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=By,i=Oy,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Pt.DYNAMIC;let u=-1/0;const f=this.constraints,g=Fy;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(u=He.now()),v=0;v!==s;v++){const O=o[v];if(O.type===d){const z=O.force,H=O.mass;z.x+=H*_,z.y+=H*m,z.z+=H*p}}for(let O=0,z=this.subsystems.length;O!==z;O++)this.subsystems[O].update();c&&(u=He.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=He.now()-u);let y=f.length;for(v=0;v!==y;v++){const O=f[v];if(!O.collideConnected)for(let z=n.length-1;z>=0;z-=1)(O.bodyA===n[z]&&O.bodyB===i[z]||O.bodyB===n[z]&&O.bodyA===i[z])&&(n.splice(z,1),i.splice(z,1))}this.collisionMatrixTick(),c&&(u=He.now());const x=Uy,D=e.length;for(v=0;v!==D;v++)x.push(e[v]);e.length=0;const C=this.frictionEquations.length;for(v=0;v!==C;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=He.now()-u),c&&(u=He.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const I=e.length;for(let O=0;O!==I;O++){const z=e[O],H=z.bi,F=z.bj,$=z.si,V=z.sj;let Z;if(H.material&&F.material?Z=this.getContactMaterial(H.material,F.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,H.material&&F.material&&(H.material.friction>=0&&F.material.friction>=0&&H.material.friction*F.material.friction,H.material.restitution>=0&&F.material.restitution>=0&&(z.restitution=H.material.restitution*F.material.restitution)),a.addEquation(z),H.allowSleep&&H.type===Pt.DYNAMIC&&H.sleepState===Pt.SLEEPING&&F.sleepState===Pt.AWAKE&&F.type!==Pt.STATIC){const ct=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),ht=F.sleepSpeedLimit**2;ct>=ht*2&&(H.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===Pt.DYNAMIC&&F.sleepState===Pt.SLEEPING&&H.sleepState===Pt.AWAKE&&H.type!==Pt.STATIC){const ct=H.velocity.lengthSquared()+H.angularVelocity.lengthSquared(),ht=H.sleepSpeedLimit**2;ct>=ht*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(H,F,!0),this.collisionMatrixPrevious.get(H,F)||(sr.body=F,sr.contact=z,H.dispatchEvent(sr),sr.body=H,F.dispatchEvent(sr)),this.bodyOverlapKeeper.set(H.id,F.id),this.shapeOverlapKeeper.set($.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=He.now()-u,u=He.now()),v=0;v!==s;v++){const O=o[v];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(y=f.length,v=0;v!==y;v++){const O=f[v];O.update();for(let z=0,H=O.equations.length;z!==H;z++){const F=O.equations[z];a.addEquation(F)}}a.solve(t,this),c&&(h.solve=He.now()-u),a.removeAllEquations();const N=Math.pow;for(v=0;v!==s;v++){const O=o[v];if(O.type&d){const z=N(1-O.linearDamping,t),H=O.velocity;H.scale(z,H);const F=O.angularVelocity;if(F){const $=N(1-O.angularDamping,t);F.scale($,F)}}}this.dispatchEvent(Ny),c&&(u=He.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,U=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(t,b,U);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=He.now()-u),this.stepnumber+=1,this.dispatchEvent(Dy);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==s;v++){const O=o[v];O.sleepTick(this.time),O.sleepState!==Pt.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ci,hi),t){for(let s=0,o=ci.length;s<o;s+=2)rr.bodyA=this.getBodyById(ci[s]),rr.bodyB=this.getBodyById(ci[s+1]),this.dispatchEvent(rr);rr.bodyA=rr.bodyB=null}if(e){for(let s=0,o=hi.length;s<o;s+=2)or.bodyA=this.getBodyById(hi[s]),or.bodyB=this.getBodyById(hi[s+1]),this.dispatchEvent(or);or.bodyA=or.bodyB=null}ci.length=hi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ci,hi),n){for(let s=0,o=ci.length;s<o;s+=2){const a=this.getShapeById(ci[s]),l=this.getShapeById(ci[s+1]);ui.shapeA=a,ui.shapeB=l,a&&(ui.bodyA=a.body),l&&(ui.bodyB=l.body),this.dispatchEvent(ui)}ui.bodyA=ui.bodyB=ui.shapeA=ui.shapeB=null}if(i){for(let s=0,o=hi.length;s<o;s+=2){const a=this.getShapeById(hi[s]),l=this.getShapeById(hi[s+1]);di.shapeA=a,di.shapeB=l,a&&(di.bodyA=a.body),l&&(di.bodyB=l.body),this.dispatchEvent(di)}di.bodyA=di.bodyB=di.shapeA=di.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new En;const Ca=new ke,He=globalThis.performance||{};if(!He.now){let r=Date.now();He.timing&&He.timing.navigationStart&&(r=He.timing.navigationStart),He.now=()=>Date.now()-r}new w;const Dy={type:"postStep"},Ny={type:"preStep"},sr={type:Pt.COLLIDE_EVENT_NAME,body:null,contact:null},Uy=[],Fy=[],By=[],Oy=[],ci=[],hi=[],rr={type:"beginContact",bodyA:null,bodyB:null},or={type:"endContact",bodyA:null,bodyB:null},ui={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},di={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class ky{constructor(t,e,n,i,s){this.charA=t,this.charB=e,this.uiCallbacks=n,this.camera=i,this.domElement=s,this.active=!1,this.scoreA=0,this.scoreB=0,this.isGoalCooldown=!1,this.sceneGroup=new De,this.sceneGroup.name="SoccerScene",this.sceneGroup.visible=!1,this.world=new Iy,this.world.gravity.set(0,-9.82,0),this.clayPhysicsMat=new Gs("clayBall"),this.turfPhysicsMat=new Gs("turfGround");const o=new xr(this.clayPhysicsMat,this.turfPhysicsMat,{friction:.52,restitution:.7});this.world.addContactMaterial(o),this.ballMesh=null,this.ballBody=null,this.kickArrow=null,this.isDragging=!1,this.dragStartPoint=new k,this.dragCurrentPoint=new k,this.raycaster=new E_,this.groundPlane=new pi(new k(0,1,0),0),this._buildField(),this._buildBall(),this._buildGoals(),this._setupInteraction()}_buildField(){const t=new Bs(12.5,8);t.rotateX(-Math.PI/2);const e=ze(Ze.turfGreen,{roughness:.82}),n=new Qt(t,e);n.position.y=.01,n.receiveShadow=!0,this.sceneGroup.add(n);const i=new Bi({color:16777215}),s=new Bl(1.2,1.25,32);s.rotateX(-Math.PI/2);const o=new Qt(s,i);o.position.y=.015,this.sceneGroup.add(o);const a=new Bs(.06,8);a.rotateX(-Math.PI/2);const l=new Qt(a,i);l.position.y=.015,this.sceneGroup.add(l);const c=new Pt({type:Pt.STATIC,shape:new px,material:this.turfPhysicsMat});c.quaternion.setFromAxisAngle(new w(1,0,0),-Math.PI/2),this.world.addBody(c);const h=(d,u,f,g)=>{const _=new Pt({type:Pt.STATIC,shape:new No(new w(f,2,g))});_.position.set(d,1,u),this.world.addBody(_)};h(0,4.2,6.8,.2),h(0,-4.2,6.8,.2),h(-6.4,0,.2,4.2),h(6.4,0,.2,4.2)}_buildGoals(){const t=ze(Ze.tunicWhite,{roughness:.65}),e=new Os({color:14540253,wireframe:!0,roughness:.9}),n=i=>{const s=new De;s.position.set(i*5.4,0,0),s.rotation.y=i>0?-Math.PI/2:Math.PI/2;const o=.065,a=1.45,l=2.5;[-l/2,l/2].forEach(f=>{const g=new sn(o,o,a,10);g.translate(0,a/2,0);const _=new Qt(g,t);_.position.set(f,0,0),s.add(_)});const c=new sn(o,o,l,10);c.rotateZ(Math.PI/2);const h=new Qt(c,t);h.position.set(0,a,0),s.add(h);const d=new Zn(l,a,.9),u=new Qt(d,e);u.position.set(0,a/2,-.45),s.add(u),this.sceneGroup.add(s)};n(-1),n(1)}_buildBall(){const e=new $n(.32,20,16),n=ze(Ze.ballWhite,{roughness:.76,bumpScale:.05});this.ballMesh=new Qt(e,n),this.ballMesh.castShadow=!0,this.sceneGroup.add(this.ballMesh);const i=ze(Ze.ballBlack,{roughness:.8}),s=new sn(.09,.09,.02,5);s.rotateX(Math.PI/2);for(let l=0;l<6;l++){const c=new Qt(s,i),h=Math.acos(-1+2*l/6),d=Math.sqrt(6*Math.PI)*h;c.position.setFromSphericalCoords(.32*.99,h,d),c.lookAt(0,0,0),this.ballMesh.add(c)}this.ballBody=new Pt({mass:.85,shape:new fx(.32),material:this.clayPhysicsMat,linearDamping:.24,angularDamping:.28}),this.ballBody.position.set(0,.35,0),this.world.addBody(this.ballBody);const o=new qs(.18,.6,8);o.rotateX(Math.PI/2);const a=new Bi({color:16771584});this.kickArrow=new Qt(o,a),this.kickArrow.visible=!1,this.sceneGroup.add(this.kickArrow)}_setupInteraction(){const t=e=>{const n=this.domElement.getBoundingClientRect(),i=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY,o=(i-n.left)/n.width*2-1,a=-((s-n.top)/n.height)*2+1;this.raycaster.setFromCamera({x:o,y:a},this.camera);const l=new k;return this.raycaster.ray.intersectPlane(this.groundPlane,l),l};this._onPointerDown=e=>{if(!this.active)return;const n=t(e);n&&(this.isDragging=!0,this.dragStartPoint.copy(n),this.dragCurrentPoint.copy(n),this.kickArrow.position.copy(this.ballMesh.position),this.kickArrow.position.y=.15,this.kickArrow.visible=!0)},this._onPointerMove=e=>{if(!this.active||!this.isDragging)return;const n=t(e);if(n){this.dragCurrentPoint.copy(n);const i=new k().subVectors(this.dragStartPoint,this.dragCurrentPoint),s=Math.min(i.length(),4.5);s>.1&&(i.y=0,i.normalize(),this.kickArrow.lookAt(this.kickArrow.position.x+i.x,this.kickArrow.position.y,this.kickArrow.position.z+i.z),this.kickArrow.scale.set(1,1,Math.max(1,s*1.5)))}},this._onPointerUp=e=>{if(!this.active||!this.isDragging)return;this.isDragging=!1,this.kickArrow.visible=!1;const n=new k().subVectors(this.dragStartPoint,this.dragCurrentPoint),i=Math.min(n.length()*4.8,20);if(i>1.2)n.y=.38*i,n.x*=4.8,n.z*=4.8,this.ballBody.applyImpulse(new w(n.x,n.y,n.z),this.ballBody.position),Oe.playKick();else{const s=new k().subVectors(this.dragStartPoint,this.ballMesh.position);s.y=.35*Math.min(s.length(),3.5);const o=Math.min(s.length()*2.8,14);s.normalize().multiplyScalar(o),this.ballBody.applyImpulse(new w(s.x,s.y+2,s.z),this.ballBody.position),Oe.playKick()}},this.domElement.addEventListener("pointerdown",this._onPointerDown),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp)}enter(){this.active=!0,this.sceneGroup.visible=!0,this.resetBall(),this.charA.group.position.set(-2.8,0,0),this.charA.group.rotation.set(0,Math.PI/2,0),this.charB.group.position.set(2.8,0,0),this.charB.group.rotation.set(0,-Math.PI/2,0),this.charA.setAction("idle"),this.charB.setAction("idle"),this._updateScoreUI()}exit(){this.active=!1,this.sceneGroup.visible=!1,this.kickArrow.visible=!1,this.isDragging=!1}resetBall(){this.ballBody.position.set(0,.8,0),this.ballBody.velocity.set(0,0,0),this.ballBody.angularVelocity.set(0,0,0),this.isGoalCooldown=!1}_updateScoreUI(){this.uiCallbacks.onSoccerScore&&this.uiCallbacks.onSoccerScore(this.scoreA,this.scoreB)}_triggerGoal(t,e){this.isGoalCooldown||(this.isGoalCooldown=!0,e==="A"?(this.scoreA++,this.charA.setAction("celebrate"),this.charB.setAction("shrug")):(this.scoreB++,this.charB.setAction("celebrate"),this.charA.setAction("shrug")),Oe.playGoal(),this._updateScoreUI(),this.uiCallbacks.onGoalBanner&&this.uiCallbacks.onGoalBanner(`⚽ BUUUUT DE ${t.toUpperCase()} ! 🎉`),Cn.generateSoccerReaction(`BUUUUT magistral de ${t} !`,t).then(n=>{e==="A"?this.uiCallbacks.showBubbleA&&this.uiCallbacks.showBubbleA(n):this.uiCallbacks.showBubbleB&&this.uiCallbacks.showBubbleB(n),setTimeout(()=>{this.uiCallbacks.hideBubbles&&this.uiCallbacks.hideBubbles()},3200)}).catch(()=>{}),setTimeout(()=>{this.resetBall(),this.charA.setAction("idle"),this.charB.setAction("idle"),this.uiCallbacks.hideGoalBanner&&this.uiCallbacks.hideGoalBanner()},3200))}update(t){if(this.active){if(this.world.step(1/60,t,3),this.ballMesh.position.copy(this.ballBody.position),this.ballMesh.quaternion.copy(this.ballBody.quaternion),!this.isGoalCooldown){const e=this.ballBody.position;e.x<-5&&Math.abs(e.z)<1.4?this._triggerGoal(this.charB.name,"B"):e.x>5&&Math.abs(e.z)<1.4&&this._triggerGoal(this.charA.name,"A")}this.isGoalCooldown||(this._updateAI(t,this.charA,-1),this._updateAI(t,this.charB,1))}}_updateAI(t,e,n){const i=this.ballMesh.position,s=e.group.position,o=s.distanceTo(i);if(n<0?i.x<1.4:i.x>-1.4){let c=(Math.atan2(i.x-s.x,i.z-s.z)-e.group.rotation.y)%(Math.PI*2);if(c<-Math.PI&&(c+=Math.PI*2),c>Math.PI&&(c-=Math.PI*2),e.group.rotation.y+=c*Math.min(1,7.5*t),o>.95){e.setAction("run");const h=new k().subVectors(i,s).normalize();s.x+=h.x*2.4*t,s.z+=h.z*2.4*t}else{e.setAction("kick"),Oe.playKick();const h=-n*5.4,d=new k(h-s.x,1.2,(Math.random()-.5)*1.6).normalize(),u=9.5+Math.random()*5;this.ballBody.applyImpulse(new w(d.x*u,3.4,d.z*u),this.ballBody.position);const f=Date.now();(!this.lastKickReactionTime||f-this.lastKickReactionTime>7500)&&(this.lastKickReactionTime=f,Cn.generateSoccerReaction("Frappe puissante vers les cages",e.name).then(g=>{n<0?this.uiCallbacks.showBubbleA&&this.uiCallbacks.showBubbleA(g):this.uiCallbacks.showBubbleB&&this.uiCallbacks.showBubbleB(g),setTimeout(()=>{this.uiCallbacks.hideBubbles&&this.uiCallbacks.hideBubbles()},2600)}).catch(()=>{}))}}else{const l=n*2.8,c=0;Math.hypot(s.x-l,s.z-c)>.45?(e.setAction("run"),e.group.lookAt(l,s.y,c),s.x+=(l-s.x)*1.5*t,s.z+=(c-s.z)*1.5*t):(e.setAction("idle"),e.group.rotation.y=n<0?Math.PI/2:-Math.PI/2)}}destroy(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp)}}const Yi=[{latin:"Introibo ad altare Dei. — Ad Deum qui laetificat juventutem meam.",french:"J'avancerai jusqu'à l'autel de Dieu. — Vers le Dieu qui réjouit ma jeunesse.",posture:"manibusIunctis",speaker:"Prêtre & Servants"},{latin:"Adjutorium nostrum in nomine Domini. — Qui fecit caelum et terram.",french:"Notre secours est dans le nom du Seigneur. — Qui a fait le ciel et la terre.",posture:"manibusIunctis",speaker:"Prêtre & Servants"},{latin:"Confiteor Deo omnipotenti, beatae Mariae semper Virgini...",french:"Je confesse à Dieu tout-puissant, à la bienheureuse Marie toujours Vierge...",posture:"incurvatio",speaker:"Incurvatio profunda (Frappe de poitrine)"},{latin:"Kyrie, eleison. Christe, eleison. Kyrie, eleison.",french:"Seigneur, prends pitié. Christ, prends pitié. Seigneur, prends pitié.",posture:"incurvatio",speaker:"Supplication Liturgique"},{latin:"Gloria in excelsis Deo, et in terra pax hominibus bonae voluntatis.",french:"Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes de bonne volonté.",posture:"manibusIunctis",speaker:"Hymne de Louange"},{latin:"Dominus vobiscum. — Et cum spiritu tuo.",french:"Le Seigneur soit avec vous. — Et avec votre esprit.",posture:"manibusIunctis",speaker:"Salutation Sacerdotale"},{latin:"Sursum corda ! — Habemus ad Dominum.",french:"Élevons nos cœurs ! — Nous les tournons vers le Seigneur.",posture:"manibusIunctis",speaker:"Préface"},{latin:"Sanctus, Sanctus, Sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua.",french:"Saint ! Saint ! Saint, le Seigneur, Dieu de l'univers ! Le ciel et la terre sont remplis de ta gloire.",posture:"incurvatio",speaker:"Sanctus (Clochette d'autel)",hasBell:!0},{latin:"Agnus Dei, qui tollis peccata mundi : miserere nobis / dona nobis pacem.",french:"Agneau de Dieu, qui enlèves les péchés du monde, prends pitié de nous / donne-nous la paix.",posture:"genuflect",speaker:"Fraction & Communion"}];class zy{constructor(t,e,n){this.charA=t,this.charB=e,this.uiCallbacks=n,this.active=!1,this.currentStep=0,this.autoPlay=!0,this.stepTimer=0,this.sceneGroup=new De,this.sceneGroup.name="TridentineScene",this.sceneGroup.visible=!1,this.candles=[],this.incenseParticles=null,this.candleLight=null,this._buildAltar(),this._buildCandles(),this._buildIncense()}_buildAltar(){const t=new De;t.position.set(0,0,-2.8);const e=new Zn(4.2,.18,1.6),n=ze(Ze.altarStone,{roughness:.9}),i=new Qt(e,n);i.position.y=.09,i.receiveShadow=!0,t.add(i);const s=new Zn(3.2,1.1,1),o=new Qt(s,n);o.position.set(0,.73,0),o.castShadow=!0,o.receiveShadow=!0,t.add(o);const a=new Zn(3.3,.08,1.05),l=ze(Ze.tunicWhite,{roughness:.75}),c=new Qt(a,l);c.position.set(0,1.32,0),t.add(c);const h=new Zn(.7,.7,.5),d=ze(Ze.goldChalice,{roughness:.45,metalness:.4}),u=new Qt(h,d);u.position.set(0,1.7,-.2),t.add(u);const f=new De;f.position.set(0,2.3,-.2);const g=ze(Ze.altarWood,{roughness:.85}),_=new sn(.05,.05,1.1,8),m=new Qt(_,g);f.add(m);const p=new sn(.045,.045,.65,8);p.rotateZ(Math.PI/2);const v=new Qt(p,g);v.position.y=.22,f.add(v);const y=new $n(.09,8,8);y.scale(.8,1.6,.6);const x=new Qt(y,d);x.position.set(0,.18,.06),f.add(x),t.add(f),this.sceneGroup.add(t)}_buildCandles(){const t=[-1.3,-.9,-.5,.5,.9,1.3],e=ze(Ze.candleWax,{roughness:.6}),n=new Bi({color:16752640});t.forEach((i,s)=>{const o=new De;o.position.set(i,1.36,-2.8);const a=new sn(.07,.12,.15,8),l=ze(Ze.goldChalice,{roughness:.5,metalness:.3}),c=new Qt(a,l);o.add(c);const h=new sn(.045,.045,.5,10);h.translate(0,.25,0);const d=new Qt(h,e);d.position.y=.08,o.add(d);const u=new qs(.035,.12,8);u.translate(0,.06,0);const f=new Qt(u,n);f.position.y=.58,o.add(f),this.sceneGroup.add(o),this.candles.push({group:o,flame:f,initialX:i,phase:s*1.1})}),this.candleLight=new Iu(16753920,1.8,8),this.candleLight.position.set(0,2.2,-2.5),this.candleLight.castShadow=!0,this.sceneGroup.add(this.candleLight)}_buildIncense(){const e=new $e,n=new Float32Array(35*3),i=[];for(let o=0;o<35;o++)n[o*3]=(Math.random()-.5)*.4,n[o*3+1]=.2+Math.random()*2.5,n[o*3+2]=-2.2+(Math.random()-.5)*.4,i.push({vy:.35+Math.random()*.4,drift:(Math.random()-.5)*.15,phase:Math.random()*Math.PI*2});e.setAttribute("position",new Pn(n,3));const s=new Ji({color:14540253,size:.22,transparent:!0,opacity:.35,depthWrite:!1});this.incensePoints=new ur(e,s),this.incenseVelocities=i,this.sceneGroup.add(this.incensePoints)}enter(){this.active=!0,this.sceneGroup.visible=!0,this.currentStep=0,this.stepTimer=0,this.charA.group.position.set(-.7,0,-1.1),this.charA.group.rotation.set(0,Math.PI,0),this.charB.group.position.set(.7,0,-1.1),this.charB.group.rotation.set(0,Math.PI,0),this._applyLiturgyStep(0)}exit(){this.active=!1,this.sceneGroup.visible=!1}_applyLiturgyStep(t){if(!this.active)return;this.currentStep=t%Yi.length;const e=Yi[this.currentStep];this.charA.setAction(e.posture),this.charB.setAction(e.posture),e.hasBell&&Oe.playChurchBell(),this.uiCallbacks.onTridentineStep&&this.uiCallbacks.onTridentineStep(e,this.currentStep+1,Yi.length)}nextStep(){this.stepTimer=0,this._applyLiturgyStep(this.currentStep+1)}prevStep(){this.stepTimer=0;const t=(this.currentStep-1+Yi.length)%Yi.length;this._applyLiturgyStep(t)}setManualPosture(t){this.charA.setAction(t),this.charB.setAction(t)}ringBell(){Oe.playChurchBell()}async generateCustomPrayer(){this.uiCallbacks.onTridentineStep&&this.uiCallbacks.onTridentineStep({latin:"Invocatio ad Deum in cursu...",french:"Génération de l'oraison solennelle en direct avec Gemini...",speaker:"Méditation en direct (IA)",posture:"incurvatio"},this.currentStep+1,Yi.length),this.charA.setAction("incurvatio"),this.charB.setAction("incurvatio");try{const t=await Cn.generatePrayerText("tridentine","Astériclos"),e=t.split(`
`).filter(s=>s.trim().length>0),n=e[0]||t,i=e[1]||"Que la grâce du Seigneur demeure toujours avec vous.";this.uiCallbacks.onTridentineStep&&this.uiCallbacks.onTridentineStep({latin:n,french:i,speaker:"Oraison Liturgique (Direct Gemini)",posture:"manibusIunctis"},this.currentStep+1,Yi.length),this.charA.setAction("manibusIunctis"),this.charB.setAction("manibusIunctis"),Oe.playChurchBell()}catch(t){console.error(t)}}update(t,e){if(this.active){if(this.candles.forEach(n=>{const i=Math.sin(e*8+n.phase)*.12+Math.cos(e*14)*.08;n.flame.scale.set(1+i*.3,1+i*.6,1+i*.3),n.flame.rotation.z=Math.sin(e*6+n.phase)*.15}),this.candleLight&&(this.candleLight.intensity=1.8+Math.sin(e*10)*.25),this.incensePoints){const n=this.incensePoints.geometry.attributes.position.array;for(let i=0;i<this.incenseVelocities.length;i++){const s=this.incenseVelocities[i];n[i*3+1]+=s.vy*t,n[i*3]+=Math.sin(e*2+s.phase)*t*.12,n[i*3+1]>3.2&&(n[i*3+1]=.2,n[i*3]=(Math.random()-.5)*.4)}this.incensePoints.geometry.attributes.position.needsUpdate=!0}this.autoPlay&&(this.stepTimer+=t,this.stepTimer>6&&(this.stepTimer=0,this.nextStep()))}}}const Di=[{refrain:"Loué sois-tu, Seigneur, pour ta gloire immense !",subtext:"Mon cœur exulte et te rend grâce, Alléluia !",posture:"orans",leadSpeaker:"Louange Spontanée"},{refrain:"Jubilez, criez de joie pour le Seigneur !",subtext:"Venez à Lui avec des chants et des acclamations !",posture:"clap",leadSpeaker:"Acclamation Festive"},{refrain:"Jésus, Roi de Gloire, Agneau Vainqueur !",subtext:"Ton amour est plus grand que tout, nous t'adorons !",posture:"orans",leadSpeaker:"Adoration Joyeuse"},{refrain:"Que ma louange monte vers Toi comme un parfum !",subtext:"En tout temps je bénirai le Seigneur, sa louange sans cesse à mes lèvres !",posture:"manibusIunctis",leadSpeaker:"Action de Grâce"},{refrain:"Viens Esprit-Saint, répands ton feu d'Amour !",subtext:"Embrase nos cœurs, donne-nous la paix et la joie !",posture:"orans",leadSpeaker:"Épiphanie de l'Esprit"},{refrain:"Célébrez le Seigneur car Il est bon !",subtext:"Éternel est son amour, fidèle à jamais !",posture:"clap",leadSpeaker:"Refrain d'Espérance"},{refrain:"Mon âme tressaille d'allégresse en Dieu mon Sauveur !",subtext:"Il a fait pour moi des merveilles, Saint est son Nom !",posture:"orans",leadSpeaker:"Magnificat Champêtre"}];class Gy{constructor(t,e,n){this.charA=t,this.charB=e,this.uiCallbacks=n,this.active=!1,this.currentStep=0,this.autoPlay=!0,this.stepTimer=0,this.clapInterval=.8,this.clapTimer=0,this.sceneGroup=new De,this.sceneGroup.name="EmmanuelScene",this.sceneGroup.visible=!1,this.sunLight=null,this.sparkles=null,this.sparkleVelocities=[],this._buildEnvironment(),this._buildGoldenDoveSymbol(),this._buildJoySparkles()}_buildEnvironment(){const t=new $n(6,24,16,0,Math.PI*2,0,Math.PI*.3),e=ze(Ze.turfGreen,{roughness:.82}),n=new Qt(t,e);n.position.set(0,-5.5,-1.5),n.receiveShadow=!0,this.sceneGroup.add(n);const i=[15158332,15965202,10181046,15844367,16777215];for(let l=0;l<22;l++){const c=new De,h=(Math.random()-.5)*5.5,d=-.5-Math.random()*3.5;c.position.set(h,.05,d);const u=ze(Ze.gauloisYellow,{roughness:.7}),f=new Qt(new $n(.06,8,8),u);c.add(f);const g=i[Math.floor(Math.random()*i.length)],_=ze(g,{roughness:.75}),m=5;for(let p=0;p<m;p++){const v=new Qt(new $n(.05,6,6),_);v.scale.set(1.4,.4,.9);const y=p/m*Math.PI*2;v.position.set(Math.cos(y)*.09,0,Math.sin(y)*.09),c.add(v)}this.sceneGroup.add(c)}const s=new sn(1.6,1.8,.15,20),o=ze(Ze.altarWood,{roughness:.78}),a=new Qt(s,o);a.position.set(0,.075,-.6),a.receiveShadow=!0,this.sceneGroup.add(a)}_buildGoldenDoveSymbol(){const t=new De;t.position.set(0,3.2,-2.4);const e=ze(Ze.goldChalice,{roughness:.35,metalness:.45}),n=new $n(.24,12,10);n.scale(1.4,.9,.7);const i=new Qt(n,e);t.add(i),[-1,1].forEach(o=>{const a=new qs(.22,.65,8);a.rotateZ(o*1.2),a.scale(1,.4,1.3);const l=new Qt(a,e);l.position.set(o*.34,.12,0),t.add(l)});const s=12;for(let o=0;o<s;o++){const a=new sn(.02,.04,.7,6),l=o/s*Math.PI*2,c=new Qt(a,e);c.position.set(Math.cos(l)*.9,Math.sin(l)*.9,-.05),c.rotation.z=l-Math.PI/2,t.add(c)}this.sceneGroup.add(t),this.doveSymbol=t}_buildJoySparkles(){const e=new $e,n=new Float32Array(45*3),i=[];for(let o=0;o<45;o++)n[o*3]=(Math.random()-.5)*4.2,n[o*3+1]=.3+Math.random()*3.5,n[o*3+2]=-.5+(Math.random()-.5)*3,i.push({vy:.4+Math.random()*.5,driftX:(Math.random()-.5)*.2,phase:Math.random()*Math.PI*2});e.setAttribute("position",new Pn(n,3));const s=new Ji({color:16771584,size:.18,transparent:!0,opacity:.65,depthWrite:!1});this.sparkles=new ur(e,s),this.sparkleVelocities=i,this.sceneGroup.add(this.sparkles)}enter(){this.active=!0,this.sceneGroup.visible=!0,this.currentStep=0,this.stepTimer=0,this.clapTimer=0,this.charA.group.position.set(-.85,.15,-.5),this.charA.group.rotation.set(0,.25,0),this.charB.group.position.set(.85,.15,-.5),this.charB.group.rotation.set(0,-.25,0),Oe.playPraiseChord(),this._applyStep(0)}exit(){this.active=!1,this.sceneGroup.visible=!1}_applyStep(t){if(!this.active)return;this.currentStep=t%Di.length;const e=Di[this.currentStep];this.charA.setAction(e.posture),this.charB.setAction(e.posture),e.posture==="clap"?Oe.playClap():e.posture==="orans"&&Oe.playPraiseChord(),this.uiCallbacks.onEmmanuelStep&&this.uiCallbacks.onEmmanuelStep(e,this.currentStep+1,Di.length)}nextStep(){this.stepTimer=0,this._applyStep(this.currentStep+1)}prevStep(){this.stepTimer=0;const t=(this.currentStep-1+Di.length)%Di.length;this._applyStep(t)}setManualPosture(t){this.charA.setAction(t),this.charB.setAction(t),t==="clap"?Oe.playClap():t==="orans"&&Oe.playPraiseChord()}triggerClap(){Oe.playClap(),this.charA.setAction("clap"),this.charB.setAction("clap")}triggerChord(){Oe.playPraiseChord()}async generateCustomPraise(){this.uiCallbacks.onEmmanuelChorus&&this.uiCallbacks.onEmmanuelChorus({refrain:"Écoute l'Esprit...",subtext:"Génération de l'acclamation de louange en direct avec Gemini...",posture:"orans",leadSpeaker:"Louange en direct (IA)"},this.currentStep+1,Di.length),this.charA.setAction("orans"),this.charB.setAction("orans");try{const t=await Cn.generatePrayerText("emmanuel","Obélicon");this.uiCallbacks.onEmmanuelChorus&&this.uiCallbacks.onEmmanuelChorus({refrain:t,subtext:"Alléluia ! Acclamez le Seigneur de tout votre cœur !",posture:"clap",leadSpeaker:"Acclamation Spontanée (Direct Gemini)"},this.currentStep+1,Di.length),this.charA.setAction("clap"),this.charB.setAction("clap"),Oe.playPraiseChord()}catch(t){console.error(t)}}update(t,e){if(!this.active)return;if(this.doveSymbol){this.doveSymbol.rotation.z=Math.sin(e*1.5)*.08;const i=1+Math.sin(e*3)*.05;this.doveSymbol.scale.set(i,i,i)}const n=Di[this.currentStep];if(n&&n.posture==="clap"&&(this.clapTimer+=t,this.clapTimer>=this.clapInterval&&(this.clapTimer=0,Oe.playClap())),this.sparkles){const i=this.sparkles.geometry.attributes.position.array;for(let s=0;s<this.sparkleVelocities.length;s++){const o=this.sparkleVelocities[s];i[s*3+1]+=o.vy*t,i[s*3]+=Math.sin(e*3+o.phase)*t*.25,i[s*3+1]>4.2&&(i[s*3+1]=.2,i[s*3]=(Math.random()-.5)*4.2)}this.sparkles.geometry.attributes.position.needsUpdate=!0}this.autoPlay&&(this.stepTimer+=t,this.stepTimer>6.5&&(this.stepTimer=0,this.nextStep()))}}class Vy{constructor(){this.container=document.getElementById("canvas-container"),this.clock=new Uu,this.scene=new Tu,this.scene.background=new Yt(14084856),this.camera=new nn(45,window.innerWidth/window.innerHeight,.1,60),this.camera.position.set(0,3.4,7.8),this.camera.lookAt(0,1.1,0),this.renderer=new e_({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xh,this.renderer.toneMapping=bl,this.renderer.toneMappingExposure=1.25,this.container.appendChild(this.renderer.domElement),this.controls=new O_(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.target.set(0,1.1,0),this.controls.minDistance=3.5,this.controls.maxDistance=16,this.controls.maxPolarAngle=Math.PI*.48,this._setupLighting(),this._setupGround(),this.charA=new wh("A",{name:"Astériclos",scale:.95}),this.charB=new wh("B",{name:"Obélicon",scale:1.28}),this.scene.add(this.charA.group),this.scene.add(this.charB.group),this._setupPostProcessing(),this.modes={debate:new hv(this.charA,this.charB,this._createDebateUICallbacks()),soccer:new ky(this.charA,this.charB,this._createSoccerUICallbacks(),this.camera,this.renderer.domElement),tridentine:new zy(this.charA,this.charB,this._createTridentineUICallbacks()),emmanuel:new Gy(this.charA,this.charB,this._createEmmanuelUICallbacks())},this.currentModeName="debate",Object.values(this.modes).forEach(t=>{this.scene.add(t.sceneGroup),t.sceneGroup.visible=!1}),this._bindUI(),this._updateApiKeyStatus(),this.switchMode("debate"),window.addEventListener("resize",()=>this._onResize()),this._animate()}_setupLighting(){this.ambientLight=new Du(16774630,.9),this.scene.add(this.ambientLight),this.dirLight=new xl(16775916,1.55),this.dirLight.position.set(4.5,9,5.5),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=.5,this.dirLight.shadow.camera.far=28,this.dirLight.shadow.camera.left=-7,this.dirLight.shadow.camera.right=7,this.dirLight.shadow.camera.top=7,this.dirLight.shadow.camera.bottom=-7,this.dirLight.shadow.bias=-1e-4,this.dirLight.shadow.normalBias=.04,this.scene.add(this.dirLight),this.rimLight=new xl(16747586,1.1),this.rimLight.position.set(-6,5,-5),this.scene.add(this.rimLight)}_setupGround(){const i=new sn(9.8,10.290000000000001,.55,64,16),s=i.attributes.position;for(let h=0;h<s.count;h++){const d=s.getY(h);if(d>.1){const u=s.getX(h),f=s.getZ(h),g=Math.sin(u*.65)*Math.cos(f*.65)*.12,_=Math.sin(u*1.4+f*1.1)*.05,m=Math.sqrt(u*u+f*f),p=Math.min(1,Math.max(0,(m-1.5)/2.5));s.setY(h,d+(g+_)*p)}}i.computeVertexNormals();const o=ze(Ze.turfGreen,{roughness:.88,bumpScale:.05});this.groundMesh=new Qt(i,o),this.groundMesh.position.y=-.28,this.groundMesh.receiveShadow=!0,this.scene.add(this.groundMesh);const a=new De,l=ze(Ze.turfGreenDark,{roughness:.86}),c=42;for(let h=0;h<c;h++){const d=h/c*Math.PI*2+(Math.random()-.5)*.3,u=2.2+Math.random()*6.2,f=Math.cos(d)*u,g=Math.sin(d)*u,_=new De;_.position.set(f,.02,g);const m=3+Math.floor(Math.random()*3);for(let p=0;p<m;p++){const v=.12+Math.random()*.15,y=new qs(.035,v,6),x=new Qt(y,l);x.position.set((p-1)*.04,v*.5,(Math.random()-.5)*.04),x.rotation.z=(Math.random()-.5)*.4,x.rotation.x=(Math.random()-.5)*.4,x.castShadow=!0,x.receiveShadow=!0,_.add(x)}a.add(_)}this.scene.add(a)}_setupPostProcessing(){const t=window.innerWidth,e=window.innerHeight;this.composer=new L_(this.renderer);const n=new I_(this.scene,this.camera);this.composer.addPass(n);try{this.ssaoPass=new gi(this.scene,this.camera,t,e),this.ssaoPass.kernelRadius=.75,this.ssaoPass.minDistance=.004,this.ssaoPass.maxDistance=.12,this.ssaoPass.output=gi.OUTPUT.Default,this.composer.addPass(this.ssaoPass)}catch(s){console.warn("SSAO non disponible, passage au rendu direct",s)}this.bloomPass=new zs(new It(t,e),.3,.45,.82),this.composer.addPass(this.bloomPass);const i=new N_;this.composer.addPass(i)}switchMode(t){this.modes[t]&&(this.currentMode&&this.currentMode.exit(),Object.values(this.modes).forEach(e=>{e.sceneGroup.visible=!1}),this.currentModeName=t,this.currentMode=this.modes[t],this._adaptAtmosphere(t),this.currentMode.enter(),this.currentMode.sceneGroup.visible=!0,document.querySelectorAll(".mode-tab").forEach(e=>{e.classList.toggle("active",e.dataset.mode===t)}),document.querySelectorAll(".mode-panel").forEach(e=>{e.classList.toggle("active",e.id===`panel-${t}`)}))}_adaptAtmosphere(t){switch(t){case"tridentine":this.scene.background.set(1709344),this.ambientLight.color.set(5917280),this.ambientLight.intensity=.4,this.dirLight.color.set(16772829),this.dirLight.intensity=.55,this.rimLight.color.set(16742178),this.rimLight.intensity=.8,this.bloomPass&&(this.bloomPass.strength=.45);break;case"emmanuel":this.scene.background.set(16775654),this.ambientLight.color.set(16774092),this.ambientLight.intensity=1.35,this.dirLight.color.set(16775917),this.dirLight.intensity=1.65,this.rimLight.color.set(16766287),this.rimLight.intensity=1.1,this.bloomPass&&(this.bloomPass.strength=.35);break;case"soccer":this.scene.background.set(8900331),this.ambientLight.color.set(16777215),this.ambientLight.intensity=1.05,this.dirLight.color.set(16777200),this.dirLight.intensity=1.55,this.rimLight.color.set(8505220),this.rimLight.intensity=.7,this.bloomPass&&(this.bloomPass.strength=.2);break;case"debate":default:this.scene.background.set(14084856),this.ambientLight.color.set(16774630),this.ambientLight.intensity=.95,this.dirLight.color.set(16773596),this.dirLight.intensity=1.5,this.rimLight.color.set(16747586),this.rimLight.intensity=.9,this.bloomPass&&(this.bloomPass.strength=.25);break}}_updateSpeechBubbles(){if(this.currentModeName!=="debate")return;const t=(e,n)=>{if(!n||n.style.display==="none")return;const i=new k;e.getHeadWorldPosition?e.getHeadWorldPosition(i):e.head?e.head.getWorldPosition(i):(e.group.getWorldPosition(i),i.y+=e.id==="A"?1.85:2.25),i.y+=.55;const s=i.project(this.camera),o=(s.x*.5+.5)*window.innerWidth,a=(-(s.y*.5)+.5)*window.innerHeight;n.style.left=`${o}px`,n.style.top=`${a}px`};t(this.charA,document.getElementById("bubble-a")),t(this.charB,document.getElementById("bubble-b"))}_createDebateUICallbacks(){const t=document.getElementById("bubble-a"),e=document.getElementById("bubble-b"),n=document.getElementById("debate-status-text"),i=document.getElementById("btn-debate-start"),s=document.getElementById("btn-debate-stop");return{showBubbleA:o=>{t&&(t.querySelector(".bubble-text").textContent=o,t.style.display="block",t.classList.add("visible"),t.classList.remove("pop-anim"),t.offsetWidth,t.classList.add("pop-anim"))},hideBubbleA:()=>{t&&(t.style.display="none",t.classList.remove("visible"))},showBubbleB:o=>{e&&(e.querySelector(".bubble-text").textContent=o,e.style.display="block",e.classList.add("visible"),e.classList.remove("pop-anim"),e.offsetWidth,e.classList.add("pop-anim"))},hideBubbleB:()=>{e&&(e.style.display="none",e.classList.remove("visible"))},hideBubbles:()=>{t&&(t.style.display="none",t.classList.remove("visible")),e&&(e.style.display="none",e.classList.remove("visible"))},onDebateStatus:(o,a)=>{n&&(n.textContent=o,n.classList.toggle("thinking",!!a),n.classList.remove("error"))},onDebateError:o=>{n&&(n.textContent=`⚠️ ${o}`,n.classList.add("error"),n.classList.remove("thinking"))},onDebateStateChange:o=>{i&&(i.style.display=o?"none":"inline-flex"),s&&(s.style.display=o?"inline-flex":"none")}}}_createSoccerUICallbacks(){const t=document.getElementById("soccer-score-display"),e=document.getElementById("soccer-goal-banner");return{onSoccerScore:(n,i)=>{t&&(t.textContent=`Astériclos  ${n} - ${i}  Obélicon`)},onGoalBanner:n=>{e&&(e.textContent=n,e.style.display="block",e.classList.remove("goal-anim"),e.offsetWidth,e.classList.add("goal-anim"))},hideGoalBanner:()=>{e&&(e.style.display="none")}}}_createTridentineUICallbacks(){const t=document.getElementById("tridentine-latin"),e=document.getElementById("tridentine-french"),n=document.getElementById("tridentine-speaker"),i=document.getElementById("tridentine-progress");return{onTridentineStep:(s,o,a)=>{t&&(t.textContent=s.latin),e&&(e.textContent=s.french),n&&(n.textContent=s.speaker),i&&(i.textContent=`${o} / ${a}`)}}}_createEmmanuelUICallbacks(){const t=document.getElementById("emmanuel-refrain"),e=document.getElementById("emmanuel-verse"),n=document.getElementById("emmanuel-category"),i=document.getElementById("emmanuel-progress");return{onEmmanuelStep:(s,o,a)=>{t&&(t.textContent=s.refrain),e&&(e.textContent=s.verse),n&&(n.textContent=s.category),i&&(i.textContent=`${o} / ${a}`)}}}_bindUI(){document.querySelectorAll(".mode-tab").forEach(z=>{z.addEventListener("click",()=>{Oe.playFootstep(),this.switchMode(z.dataset.mode)})});const t=document.getElementById("btn-sound-toggle");t&&t.addEventListener("click",()=>{const z=Oe.toggleMute();t.textContent=z?"🔇":"🔊"});const e=document.getElementById("btn-cinema-toggle");e&&e.addEventListener("click",()=>{document.body.classList.toggle("cinema-mode");const z=document.body.classList.contains("cinema-mode");e.textContent=z?"👁️ Quitter Cinéma":"🎬 Mode Cinéma"});const n=document.getElementById("btn-key-modal"),i=document.getElementById("api-key-modal"),s=document.getElementById("btn-close-modal"),o=document.getElementById("btn-save-key"),a=document.getElementById("btn-clear-key"),l=document.getElementById("input-api-key");n&&i&&n.addEventListener("click",()=>{i.classList.add("active"),Cn.apiKey&&(l.value=Cn.apiKey)}),s&&i&&s.addEventListener("click",()=>i.classList.remove("active")),o&&l&&o.addEventListener("click",()=>{const z=l.value.trim();Cn.setApiKey(z),this._updateApiKeyStatus(),i&&i.classList.remove("active")}),a&&l&&a.addEventListener("click",()=>{l.value="",Cn.setApiKey(""),this._updateApiKeyStatus(),i&&i.classList.remove("active")});const c=document.getElementById("btn-save-key-inline"),h=document.getElementById("input-api-key-inline");c&&h&&c.addEventListener("click",()=>{const z=h.value.trim();z&&(Cn.setApiKey(z),this._updateApiKeyStatus())});const d=document.getElementById("input-debate-topic"),u=document.getElementById("btn-debate-start"),f=document.getElementById("btn-debate-stop"),g=["Le libre arbitre existe-t-il dans un corps en argile ?","La forme substantielle précède-t-elle la plasticine ?","Le monde extérieur est-il l'illusion d'un malin sculpteur ?","Rien n'est dans l'intellect qui n'ait été dans les sens ?","Le doute méthodique peut-il dissoudre un menhir ?","L'âme pensante est-elle distincte de la pâte étendue ?"];u&&d&&u.addEventListener("click",()=>{const z=d.value.trim()||g[0];this.modes.debate.startDebate(z)}),f&&f.addEventListener("click",()=>{this.modes.debate.stopDebate()});const _=document.getElementById("btn-debate-random");_&&d&&_.addEventListener("click",()=>{const z=g[Math.floor(Math.random()*g.length)];d.value=z,this.modes.debate.startDebate(z)});const m=document.getElementById("btn-reset-cam");m&&m.addEventListener("click",()=>{this.camera.position.set(0,3.4,7.8),this.controls.target.set(0,1.1,0),this.controls.update()});const p=document.getElementById("btn-soccer-reset");p&&p.addEventListener("click",()=>{this.modes.soccer.resetBall(),Oe.playFootstep()});const v=document.getElementById("btn-tri-next"),y=document.getElementById("btn-tri-prev"),x=document.getElementById("btn-tri-ai"),D=document.getElementById("btn-tri-bell"),C=document.getElementById("btn-tri-genuflect"),I=document.getElementById("btn-tri-bow");v&&v.addEventListener("click",()=>this.modes.tridentine.nextStep()),y&&y.addEventListener("click",()=>this.modes.tridentine.prevStep()),x&&x.addEventListener("click",()=>this.modes.tridentine.generateCustomPrayer()),D&&D.addEventListener("click",()=>this.modes.tridentine.ringBell()),C&&C.addEventListener("click",()=>this.modes.tridentine.setManualPosture("genuflect")),I&&I.addEventListener("click",()=>this.modes.tridentine.setManualPosture("incurvatio"));const N=document.getElementById("btn-emma-next"),E=document.getElementById("btn-emma-prev"),b=document.getElementById("btn-emma-ai"),U=document.getElementById("btn-emma-orans"),G=document.getElementById("btn-emma-clap"),O=document.getElementById("btn-emma-dance");N&&N.addEventListener("click",()=>this.modes.emmanuel.nextStep()),E&&E.addEventListener("click",()=>this.modes.emmanuel.prevStep()),b&&b.addEventListener("click",()=>this.modes.emmanuel.generateCustomPraise()),U&&U.addEventListener("click",()=>this.modes.emmanuel.setPosture("orans")),G&&G.addEventListener("click",()=>this.modes.emmanuel.setPosture("clap")),O&&O.addEventListener("click",()=>this.modes.emmanuel.setPosture("celebrate"))}_updateApiKeyStatus(){const t=Cn.getStatus(),e=document.getElementById("api-status-badge"),n=document.getElementById("modal-key-status"),i=document.getElementById("api-key-banner");e&&(e.textContent=t.online?"🟢 Gemini API Réelle":"🔑 Clé requise",e.title=t.label,e.style.cursor="pointer",e.onclick=()=>{const s=document.getElementById("api-key-modal");s&&s.classList.add("active")}),n&&(n.textContent=t.label,n.className=t.online?"status-online":"status-offline"),i&&i.classList.toggle("visible",!Cn.hasApiKey())}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,t<768?(this.camera.position.set(0,3.2,10.8),this.controls.target.set(0,.95,0)):(this.camera.position.set(0,3.4,7.8),this.controls.target.set(0,1.1,0)),this.camera.updateProjectionMatrix(),this.controls.update(),this.renderer.setSize(t,e),this.composer&&this.composer.setSize(t,e),this.ssaoPass&&this.ssaoPass.setSize(t,e),this.bloomPass&&this.bloomPass.setSize(t,e)}_animate(){requestAnimationFrame(()=>this._animate());const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime();this.controls.update(),this.charA.update(t),this.charB.update(t),this.currentMode&&this.currentMode.update(t,e),this._updateSpeechBubbles(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.app=new Vy});
