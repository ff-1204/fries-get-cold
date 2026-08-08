(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="178",Xu=0,hl=1,qu=2,Lc=1,Dc=2,Gn=3,ai=0,tn=1,Tn=2,si=0,Ki=1,fl=2,dl=3,pl=4,Yu=5,Mi=100,$u=101,Ku=102,Zu=103,ju=104,Ju=200,Qu=201,th=202,eh=203,Lo=204,Do=205,nh=206,ih=207,sh=208,rh=209,oh=210,ah=211,lh=212,ch=213,uh=214,Io=0,Uo=1,No=2,ts=3,Fo=4,Oo=5,Bo=6,zo=7,Ic=0,hh=1,fh=2,ri=0,dh=1,ph=2,mh=3,Uc=4,gh=5,_h=6,vh=7,Nc=300,es=301,ns=302,ko=303,Ho=304,Dr=306,is=1e3,Vn=1001,Go=1002,An=1003,xh=1004,Vs=1005,Ln=1006,Hr=1007,wi=1008,Un=1009,Fc=1010,Oc=1011,Cs=1012,Aa=1013,Ci=1014,Wn=1015,Fs=1016,Ra=1017,Ca=1018,Ps=1020,Bc=35902,zc=1021,kc=1022,wn=1023,Ls=1026,Ds=1027,Hc=1028,Pa=1029,Gc=1030,La=1031,Da=1033,gr=33776,_r=33777,vr=33778,xr=33779,Vo=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,$o=37492,Ko=37496,Zo=37808,jo=37809,Jo=37810,Qo=37811,ta=37812,ea=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,la=37820,ca=37821,Mr=36492,ua=36494,ha=36495,Vc=36283,fa=36284,da=36285,pa=36286,Mh=3200,Sh=3201,Wc=0,yh=1,ni="",Ze="srgb",ss="srgb-linear",yr="linear",he="srgb",Ui=7680,ml=519,Eh=512,Th=513,bh=514,Xc=515,wh=516,Ah=517,Rh=518,Ch=519,gl=35044,_l="300 es",Xn=2e3,Er=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,ma=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function Ph(n,t){return(n%t+t)%t}function Vr(n,t,e){return(1-e)*n+e*t}function gs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,b=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const C=Math.sqrt(w),E=Math.atan2(C,d*b);p=Math.sin(p*E)/C,a=Math.sin(a*E)/C}const M=a*b;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-a*m,t[e+2]=c*g+u*m+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wr.copy(this).projectOnVector(t),this.sub(Wr)}reflect(t){return this.sub(Wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wr=new N,vl=new Bs;class Ht{constructor(t,e,i,s,r,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],d=s[6],b=s[1],w=s[4],M=s[7],C=s[2],E=s[5],T=s[8];return r[0]=o*_+a*b+l*C,r[3]=o*p+a*w+l*E,r[6]=o*d+a*M+l*T,r[1]=c*_+u*b+h*C,r[4]=c*p+u*w+h*E,r[7]=c*d+u*M+h*T,r[2]=f*_+m*b+g*C,r[5]=f*p+m*w+g*E,r[8]=f*d+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=e*h+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Ht;function qc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lh(){const n=Tr("canvas");return n.style.display="block",n}const xl={};function Zi(n){n in xl||(xl[n]=!0,console.warn(n))}function Dh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ih(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ml=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){const n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ss]:{primaries:t,whitePoint:i,transfer:yr,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:he,toXYZ:Ml,fromXYZ:Sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}const se=Nh();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class Fh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ni===void 0&&(Ni=Tr("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ni}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yn(e[i]/255)*255):e[i]=Yn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Oh=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qr(s[o].image)):r.push(qr(s[o]))}else r=qr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function qr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bh=0;const Yr=new N;class en extends cs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=Vn,s=Vn,r=Ln,o=wi,a=wn,l=Un,c=en.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Os(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yr).x}get height(){return this.source.getSize(Yr).y}get depth(){return this.source.getSize(Yr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Nc;en.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,M=(m+1)/2,C=(d+1)/2,E=(u+f)/4,T=(h+_)/4,P=(g+p)/4;return w>M&&w>C?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=T/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=P/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=T/r,s=P/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends cs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new en(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends zh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Yc extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Xs.subVectors(this.max,_s),Fi.subVectors(t.a,_s),Oi.subVectors(t.b,_s),Bi.subVectors(t.c,_s),$n.subVectors(Oi,Fi),Kn.subVectors(Bi,Oi),fi.subVectors(Fi,Bi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!$r(e,Fi,Oi,Bi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,Fi,Oi,Bi,Xs))?!1:(qs.crossVectors($n,Kn),e=[qs.x,qs.y,qs.z],$r(e,Fi,Oi,Bi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new N,new N,new N,new N,new N,new N,new N,new N],Mn=new N,Ws=new us,Fi=new N,Oi=new N,Bi=new N,$n=new N,Kn=new N,fi=new N,_s=new N,Xs=new N,qs=new N,di=new N;function $r(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),u=i.dot(di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hh=new us,vs=new N,Kr=new N;class Ir{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Hh.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(vs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Kr)),this.expandByPoint(vs.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Bn=new N,Zr=new N,Ys=new N,Zn=new N,jr=new N,$s=new N,Jr=new N;class Ua{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zr.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Zr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=Zn.dot(this.direction),l=-Zn.dot(Ys),c=Zn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Zr).addScaledVector(Ys,f),m}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,s,r){jr.subVectors(e,t),$s.subVectors(i,t),Jr.crossVectors(jr,$s);let o=this.direction.dot(Jr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);const l=a*this.direction.dot($s.crossVectors(Zn,$s));if(l<0)return null;const c=a*this.direction.dot(jr.cross(Zn));if(c<0||l+c>o)return null;const u=-a*Zn.dot(Jr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gh,t,Vh)}lookAt(t,e,i){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),jn.crossVectors(i,un),jn.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),jn.crossVectors(i,un)),jn.normalize(),Ks.crossVectors(un,jn),s[0]=jn.x,s[4]=Ks.x,s[8]=un.x,s[1]=jn.y,s[5]=Ks.y,s[9]=un.y,s[2]=jn.z,s[6]=Ks.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],d=i[14],b=i[3],w=i[7],M=i[11],C=i[15],E=s[0],T=s[4],P=s[8],y=s[12],x=s[1],R=s[5],W=s[9],H=s[13],k=s[2],V=s[6],G=s[10],X=s[14],B=s[3],Q=s[7],st=s[11],ut=s[15];return r[0]=o*E+a*x+l*k+c*B,r[4]=o*T+a*R+l*V+c*Q,r[8]=o*P+a*W+l*G+c*st,r[12]=o*y+a*H+l*X+c*ut,r[1]=u*E+h*x+f*k+m*B,r[5]=u*T+h*R+f*V+m*Q,r[9]=u*P+h*W+f*G+m*st,r[13]=u*y+h*H+f*X+m*ut,r[2]=g*E+_*x+p*k+d*B,r[6]=g*T+_*R+p*V+d*Q,r[10]=g*P+_*W+p*G+d*st,r[14]=g*y+_*H+p*X+d*ut,r[3]=b*E+w*x+M*k+C*B,r[7]=b*T+w*R+M*V+C*Q,r[11]=b*P+w*W+M*G+C*st,r[15]=b*y+w*H+M*X+C*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],b=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,w=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,M=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,C=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,E=e*b+i*w+s*M+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=b*T,t[1]=(_*f*r-h*p*r-_*s*m+i*p*m+h*s*d-i*f*d)*T,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*d+i*l*d)*T,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*T,t[4]=w*T,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*d+e*f*d)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*d-e*l*d)*T,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*T,t[8]=M*T,t[9]=(g*h*r-u*_*r-g*i*m+e*_*m+u*i*d-e*h*d)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*T,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*T,t[12]=C*T,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*p+e*h*p)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*T,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,_=o*u,p=o*h,d=a*h,b=l*c,w=l*u,M=l*h,C=i.x,E=i.y,T=i.z;return s[0]=(1-(_+d))*C,s[1]=(m+M)*C,s[2]=(g-w)*C,s[3]=0,s[4]=(m-M)*E,s[5]=(1-(f+d))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(g+w)*T,s[9]=(p-b)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,u=1/o,h=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=h,Sn.elements[9]*=h,Sn.elements[10]*=h,e.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Xn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(a===Xn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Er)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Xn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u;let g,_;if(a===Xn)g=(o+r)*h,_=-2*h;else if(a===Er)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new N,Sn=new ye,Gh=new N(0,0,0),Vh=new N(1,1,1),jn=new N,Ks=new N,un=new N,yl=new ye,El=new Bs;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wh=0;const Tl=new N,ki=new Bs,zn=new ye,Zs=new N,xs=new N,Xh=new N,qh=new Bs,bl=new N(1,0,0),wl=new N(0,1,0),Al=new N(0,0,1),Rl={type:"added"},Yh={type:"removed"},Hi={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Xe extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xe.DEFAULT_UP.clone();const t=new N,e=new Nn,i=new Bs,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Ht}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(bl,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bl,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zs.copy(t):Zs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(xs,Zs,this.up):zn.lookAt(Zs,xs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(zn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yh),Qr.child=t,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Xh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Xe.DEFAULT_UP=new N(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new N,kn=new N,to=new N,Hn=new N,Gi=new N,Vi=new N,Cl=new N,eo=new N,no=new N,io=new N,so=new fe,ro=new fe,oo=new fe;class bn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),kn.subVectors(i,e),to.subVectors(t,e);const o=yn.dot(yn),a=yn.dot(kn),l=yn.dot(to),c=kn.dot(kn),u=kn.dot(to),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return so.setScalar(0),ro.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(t,e),ro.fromBufferAttribute(t,i),oo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(so,r.x),o.addScaledVector(ro,r.y),o.addScaledVector(oo,r.z),o}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),kn.subVectors(t,e),yn.cross(kn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),yn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,i),Vi.subVectors(r,i),eo.subVectors(t,i);const l=Gi.dot(eo),c=Vi.dot(eo);if(l<=0&&c<=0)return e.copy(i);no.subVectors(t,s);const u=Gi.dot(no),h=Vi.dot(no);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Gi,o);io.subVectors(t,r);const m=Gi.dot(io),g=Vi.dot(io);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Vi,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Cl.subVectors(r,s),a=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(Cl,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Gi,o).addScaledVector(Vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},js={h:0,s:0,l:0};function ao(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=Ph(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ao(o,r,t+1/3),this.g=ao(o,r,t),this.b=ao(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const i=$c[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return se.workingToColorSpace($e.copy(this),t),Math.round(Jt($e.r*255,0,255))*65536+Math.round(Jt($e.g*255,0,255))*256+Math.round(Jt($e.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ze){se.workingToColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(js);const i=Vr(Jn.h,js.h,e),s=Vr(Jn.s,js.s,e),r=Vr(Jn.l,js.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Kt;Kt.NAMES=$c;let $h=0;class hs extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ki,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lo,this.blendDst=Do,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lo&&(i.blendSrc=this.blendSrc),this.blendDst!==Do&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rs extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new N,Js=new Zt;let Kh=0;class Dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=gl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gl&&(t.usage=this.usage),t}}class Kc extends Dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Zc extends Dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class De extends Dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zh=0;const _n=new ye,lo=new Xe,Wi=new N,hn=new us,Ms=new us,He=new N;class pn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qc(t)?Zc:Kc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return lo.lookAt(t),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(hn.min,Ms.min),hn.expandByPoint(He),He.addVectors(hn.max,Ms.max),hn.expandByPoint(He)):(hn.expandByPoint(Ms.min),hn.expandByPoint(Ms.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)He.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),He.add(Wi)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,u=new N,h=new N,f=new Zt,m=new Zt,g=new Zt,_=new N,p=new N;function d(P,y,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,x),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(R),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),a[P].add(_),a[y].add(_),a[x].add(_),l[P].add(p),l[y].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,y=b.length;P<y;++P){const x=b[P],R=x.start,W=x.count;for(let H=R,k=R+W;H<k;H+=3)d(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const w=new N,M=new N,C=new N,E=new N;function T(P){C.fromBufferAttribute(s,P),E.copy(C);const y=a[P];w.copy(y),w.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(E,y);const R=M.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,R)}for(let P=0,y=b.length;P<y;++P){const x=b[P],R=x.start,W=x.count;for(let H=R,k=R+W;H<k;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new Dn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pl=new ye,pi=new Ua,Qs=new Ir,Ll=new N,tr=new N,er=new N,nr=new N,co=new N,ir=new N,Dl=new N,sr=new N;class at extends Xe{constructor(t=new pn,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(co.fromBufferAttribute(h,t),o?ir.addScaledVector(co,u):ir.addScaledVector(co.sub(e),u))}e.add(ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(Qs.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Qs,Ll)===null||pi.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Pl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Pl),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,C=w;M<C;M+=3){const E=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);s=rr(this,d,t,i,c,u,h,E,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const b=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);s=rr(this,o,t,i,c,u,h,b,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],b=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=b,C=w;M<C;M+=3){const E=M,T=M+1,P=M+2;s=rr(this,d,t,i,c,u,h,E,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const b=p,w=p+1,M=p+2;s=rr(this,o,t,i,c,u,h,b,w,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function jh(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ai,a),l===null)return null;sr.copy(a),sr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:n}}function rr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,tr),n.getVertexPosition(l,er),n.getVertexPosition(c,nr);const u=jh(n,t,e,i,tr,er,nr,Dl);if(u){const h=new N;bn.getBarycoord(Dl,tr,er,nr,h),s&&(u.uv=bn.getInterpolatedAttribute(s,a,l,c,h,new Zt)),r&&(u.uv1=bn.getInterpolatedAttribute(r,a,l,c,h,new Zt)),o&&(u.normal=bn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};bn.getNormal(tr,er,nr,f.normal),u.face=f,u.barycoord=h}return u}class Gt extends pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function g(_,p,d,b,w,M,C,E,T,P,y){const x=M/T,R=C/P,W=M/2,H=C/2,k=E/2,V=T+1,G=P+1;let X=0,B=0;const Q=new N;for(let st=0;st<G;st++){const ut=st*R-H;for(let Nt=0;Nt<V;Nt++){const ee=Nt*x-W;Q[_]=ee*b,Q[p]=ut*w,Q[d]=k,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[d]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Nt/T),h.push(1-st/P),X+=1}}for(let st=0;st<P;st++)for(let ut=0;ut<T;ut++){const Nt=f+ut+V*st,ee=f+ut+V*(st+1),Z=f+(ut+1)+V*(st+1),ot=f+(ut+1)+V*st;l.push(Nt,ee,ot),l.push(ee,Z,ot),B+=6}a.addGroup(m,B,y),m+=B,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=os(n[e]);for(const s in i)t[s]=i[s]}return t}function Jh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function jc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Qh={clone:os,merge:Qe};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Jc extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new N,Il=new Zt,Ul=new Zt;class fn extends Jc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ma*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,Il,Ul),e.subVectors(Ul,Il)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class nf extends Xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new fn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const o=new fn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const a=new fn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const l=new fn(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new fn(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qc extends en{constructor(t=[],e=es,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Qc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:si});r.uniforms.tEquirect.value=e;const o=new at(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ln),new nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class Qt extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Fa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new Fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class of extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ho=new N,af=new N,lf=new Ht;class vi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ho.subVectors(i,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ho),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lf.getNormalMatrix(t),s=this.coplanarPoint(ho).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Ir,cf=new Zt(.5,.5),or=new N;class Oa{constructor(t=new vi,e=new vi,i=new vi,s=new vi,r=new vi,o=new vi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],b=s[13],w=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,p-m,M-d).normalize(),i[1].setComponents(l+r,f+c,p+m,M+d).normalize(),i[2].setComponents(l+o,f+u,p+g,M+b).normalize(),i[3].setComponents(l-o,f-u,p-g,M-b).normalize(),i[4].setComponents(l-a,f-h,p-_,M-w).normalize(),e===Xn)i[5].setComponents(l+a,f+h,p+_,M+w).normalize();else if(e===Er)i[5].setComponents(a,h,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=cf.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tu extends hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new N,wr=new N,Nl=new ye,Ss=new Ua,ar=new Ir,fo=new N,Fl=new N;class uf extends Xe{constructor(t=new pn,e=new tu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)br.fromBufferAttribute(e,s-1),wr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=br.distanceTo(wr);t.setAttribute("lineDistance",new De(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Nl.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(Nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=u.getX(_),b=u.getX(_+1),w=lr(this,t,Ss,l,d,b,_);w&&e.push(w)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),d=lr(this,t,Ss,l,_,p,g-1);d&&e.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=lr(this,t,Ss,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=lr(this,t,Ss,l,g-1,m,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(br.fromBufferAttribute(a,s),wr.fromBufferAttribute(a,r),e.distanceSqToSegment(br,wr,fo,Fl)>i)return;fo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(fo);if(!(c<t.near||c>t.far))return{distance:c,point:Fl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ol=new N,Bl=new N;class hf extends uf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ol.fromBufferAttribute(e,s),Bl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ol.distanceTo(Bl);t.setAttribute("lineDistance",new De(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ur extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eu extends en{constructor(t,e,i=Ci,s,r,o,a=An,l=An,c,u=Ls,h=1){if(u!==Ls&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zs extends pn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,u=new Zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(a,3)),this.setAttribute("uv",new De(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ba extends pn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const _=[],p=i/2;let d=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new De(h,3)),this.setAttribute("normal",new De(f,3)),this.setAttribute("uv",new De(m,2));function b(){const M=new N,C=new N;let E=0;const T=(e-t)/i;for(let P=0;P<=r;P++){const y=[],x=P/r,R=x*(e-t)+t;for(let W=0;W<=s;W++){const H=W/s,k=H*l+a,V=Math.sin(k),G=Math.cos(k);C.x=R*V,C.y=-x*i+p,C.z=R*G,h.push(C.x,C.y,C.z),M.set(V,T,G).normalize(),f.push(M.x,M.y,M.z),m.push(H,1-x),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const x=_[y][P],R=_[y+1][P],W=_[y+1][P+1],H=_[y][P+1];(t>0||y!==0)&&(u.push(x,R,H),E+=3),(e>0||y!==r-1)&&(u.push(R,W,H),E+=3)}c.addGroup(d,E,0),d+=E}function w(M){const C=g,E=new Zt,T=new N;let P=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let W=0;W<=s;W++){const k=W/s*l+a,V=Math.cos(k),G=Math.sin(k);T.x=y*G,T.y=p*x,T.z=y*V,h.push(T.x,T.y,T.z),f.push(0,x,0),E.x=V*.5+.5,E.y=G*.5*x+.5,m.push(E.x,E.y),g++}for(let W=0;W<s;W++){const H=C+W,k=R+W;M===!0?u.push(k,k+1,H):u.push(k+1,k,H),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends Ba{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new za(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class we extends pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const b=d*f-o;for(let w=0;w<c;w++){const M=w*h-r;g.push(M,-b,0),_.push(0,0,1),p.push(w/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const w=b+c*d,M=b+c*(d+1),C=b+1+c*(d+1),E=b+1+c*d;m.push(w,M,E),m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends pn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const f=(e-t)/s,m=new N,g=new Zt;for(let _=0;_<=s;_++){for(let p=0;p<=i;p++){const d=r+p/i*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const p=_*(i+1);for(let d=0;d<i;d++){const b=d+p,w=b,M=b+i+1,C=b+i+2,E=b+1;a.push(w,M,E),a.push(M,C,E)}}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rn extends pn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,m=[],g=[],_=[],p=[];for(let d=0;d<=i;d++){const b=[],w=d/i;let M=0;d===0&&o===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const E=C/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+w*a),h.y=t*Math.cos(o+w*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(E+M,1-w),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){const w=u[d][b+1],M=u[d][b],C=u[d+1][b],E=u[d+1][b+1];(d!==0||o>0)&&m.push(w,M,E),(d!==i-1||l<Math.PI)&&m.push(M,C,E)}this.setIndex(m),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class It extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ff extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class df extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ha extends Xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const po=new ye,zl=new N,kl=new N;class nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(zl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hl=new ye,ys=new N,mo=new N;class pf extends nu{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),i.position.copy(ys),mo.copy(i.position),mo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(mo),i.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Hl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class Rn extends Ha{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iu extends Jc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mf extends nu{constructor(){super(new iu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gf extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xe.DEFAULT_UP),this.updateMatrix(),this.target=new Xe,this.shadow=new mf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _f extends Ha{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class vf extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class xf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Gl=new ye;class su{constructor(t,e,i=0,s=1/0){this.ray=new Ua(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(t,e=!0,i=[]){return ga(t,this,i,e),i.sort(Vl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ga(t[s],this,i,e);return i.sort(Vl),i}}function Vl(n,t){return n.distance-t.distance}function ga(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)ga(r[o],t,e,!0)}}function Wl(n,t,e,i){const s=Mf(i);switch(e){case zc:return n*t;case Hc:return n*t/s.components*s.byteLength;case Pa:return n*t/s.components*s.byteLength;case Gc:return n*t*2/s.components*s.byteLength;case La:return n*t*2/s.components*s.byteLength;case kc:return n*t*3/s.components*s.byteLength;case wn:return n*t*4/s.components*s.byteLength;case Da:return n*t*4/s.components*s.byteLength;case gr:case _r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vr:case xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wo:case qo:return Math.max(n,16)*Math.max(t,8)/4;case Vo:case Xo:return Math.max(n,8)*Math.max(t,8)/2;case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case na:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ra:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case oa:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case aa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Mr:case ua:case ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vc:case fa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case da:case pa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mf(n){switch(n){case Un:case Fc:return{byteLength:1,components:1};case Cs:case Oc:case Fs:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case Ci:case Aa:case Wn:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ru(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sf(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
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
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
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
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
#endif`,Lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xf=`#define PI 3.141592653589793
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
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,rd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dd=`uniform bool receiveShadow;
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
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_d=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xd=`PhysicalMaterial material;
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
#endif`,Md=`struct PhysicalMaterial {
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
}`,Sd=`
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ld=`#if defined( USE_POINTS_UV )
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
#endif`,Dd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
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
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$d=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,op=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define LAMBERT
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
}`,zp=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Hp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Wp=`#define PHONG
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define STANDARD
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
}`,Yp=`#define TOON
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
}`,$p=`#define TOON
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
}`,Kp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,Qp=`uniform float rotation;
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
}`,tm=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:yf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:bf,alphatest_fragment:wf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:Lf,begin_vertex:Df,beginnormal_vertex:If,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:zf,clipping_planes_vertex:kf,color_fragment:Hf,color_pars_fragment:Gf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:$f,displacementmap_vertex:Kf,emissivemap_fragment:Zf,emissivemap_pars_fragment:jf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:td,envmap_common_pars_fragment:ed,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:pd,envmap_vertex:sd,fog_vertex:rd,fog_pars_vertex:od,fog_fragment:ad,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_pars_fragment:ud,lights_lambert_fragment:hd,lights_lambert_pars_fragment:fd,lights_pars_begin:dd,lights_toon_fragment:md,lights_toon_pars_fragment:gd,lights_phong_fragment:_d,lights_phong_pars_fragment:vd,lights_physical_fragment:xd,lights_physical_pars_fragment:Md,lights_fragment_begin:Sd,lights_fragment_maps:yd,lights_fragment_end:Ed,logdepthbuf_fragment:Td,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Ad,map_fragment:Rd,map_pars_fragment:Cd,map_particle_fragment:Pd,map_particle_pars_fragment:Ld,metalnessmap_fragment:Dd,metalnessmap_pars_fragment:Id,morphinstance_vertex:Ud,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:Bd,normal_fragment_begin:zd,normal_fragment_maps:kd,normal_pars_fragment:Hd,normal_pars_vertex:Gd,normal_vertex:Vd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:Yd,iridescence_pars_fragment:$d,opaque_fragment:Kd,packing:Zd,premultiplied_alpha_fragment:jd,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:tp,roughnessmap_fragment:ep,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:op,skinbase_vertex:ap,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:up,specularmap_fragment:hp,specularmap_pars_fragment:fp,tonemapping_fragment:dp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:vp,uv_vertex:xp,worldpos_vertex:Mp,background_vert:Sp,background_frag:yp,backgroundCube_vert:Ep,backgroundCube_frag:Tp,cube_vert:bp,cube_frag:wp,depth_vert:Ap,depth_frag:Rp,distanceRGBA_vert:Cp,distanceRGBA_frag:Pp,equirect_vert:Lp,equirect_frag:Dp,linedashed_vert:Ip,linedashed_frag:Up,meshbasic_vert:Np,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:Bp,meshmatcap_vert:zp,meshmatcap_frag:kp,meshnormal_vert:Hp,meshnormal_frag:Gp,meshphong_vert:Vp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:qp,meshtoon_vert:Yp,meshtoon_frag:$p,points_vert:Kp,points_frag:Zp,shadow_vert:jp,shadow_frag:Jp,sprite_vert:Qp,sprite_frag:tm},ct={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Pn={basic:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Qe([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Qe([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Qe([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Qe([ct.common,ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Qe([ct.lights,ct.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Pn.physical={uniforms:Qe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const cr={r:0,b:0,g:0},gi=new Nn,em=new ye;function nm(n,t,e,i,s,r,o){const a=new Kt(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function _(w){let M=!1;const C=g(w);C===null?d(a,l):C&&C.isColor&&(d(C,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Dr)?(u===void 0&&(u=new at(new Gt(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:os(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(M.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(gi)),u.material.toneMapped=se.getTransfer(C.colorSpace)!==he,(h!==C||f!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,f=C.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new at(new we(2,2),new li({name:"BackgroundMaterial",uniforms:os(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=se.getTransfer(C.colorSpace)!==he,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||f!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,f=C.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,M){w.getRGB(cr,jc(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:_,addToRenderList:p,dispose:b}}function im(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,R,W,H,k){let V=!1;const G=h(H,W,R);r!==G&&(r=G,c(r.object)),V=m(x,H,W,k),V&&g(x,H,W,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,M(x,R,W,H),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,R,W){const H=W.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let V=k[R.id];V===void 0&&(V={},k[R.id]=V);let G=V[H];return G===void 0&&(G=f(l()),V[H]=G),G}function f(x){const R=[],W=[],H=[];for(let k=0;k<e;k++)R[k]=0,W[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,R,W,H){const k=r.attributes,V=R.attributes;let G=0;const X=W.getAttributes();for(const B in X)if(X[B].location>=0){const st=k[B];let ut=V[B];if(ut===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;G++}return r.attributesNum!==G||r.index!==H}function g(x,R,W,H){const k={},V=R.attributes;let G=0;const X=W.getAttributes();for(const B in X)if(X[B].location>=0){let st=V[B];st===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),k[B]=ut,G++}r.attributes=k,r.attributesNum=G,r.index=H}function _(){const x=r.newAttributes;for(let R=0,W=x.length;R<W;R++)x[R]=0}function p(x){d(x,0)}function d(x,R){const W=r.newAttributes,H=r.enabledAttributes,k=r.attributeDivisors;W[x]=1,H[x]===0&&(n.enableVertexAttribArray(x),H[x]=1),k[x]!==R&&(n.vertexAttribDivisor(x,R),k[x]=R)}function b(){const x=r.newAttributes,R=r.enabledAttributes;for(let W=0,H=R.length;W<H;W++)R[W]!==x[W]&&(n.disableVertexAttribArray(W),R[W]=0)}function w(x,R,W,H,k,V,G){G===!0?n.vertexAttribIPointer(x,R,W,k,V):n.vertexAttribPointer(x,R,W,H,k,V)}function M(x,R,W,H){_();const k=H.attributes,V=W.getAttributes(),G=R.defaultAttributeValues;for(const X in V){const B=V[X];if(B.location>=0){let Q=k[X];if(Q===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor)),Q!==void 0){const st=Q.normalized,ut=Q.itemSize,Nt=t.get(Q);if(Nt===void 0)continue;const ee=Nt.buffer,Z=Nt.type,ot=Nt.bytesPerElement,Tt=Z===n.INT||Z===n.UNSIGNED_INT||Q.gpuType===Aa;if(Q.isInterleavedBufferAttribute){const ft=Q.data,xt=ft.stride,qt=Q.offset;if(ft.isInstancedInterleavedBuffer){for(let Pt=0;Pt<B.locationSize;Pt++)d(B.location+Pt,ft.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Pt=0;Pt<B.locationSize;Pt++)p(B.location+Pt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Pt=0;Pt<B.locationSize;Pt++)w(B.location+Pt,ut/B.locationSize,Z,st,xt*ot,(qt+ut/B.locationSize*Pt)*ot,Tt)}else{if(Q.isInstancedBufferAttribute){for(let ft=0;ft<B.locationSize;ft++)d(B.location+ft,Q.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let ft=0;ft<B.locationSize;ft++)w(B.location+ft,ut/B.locationSize,Z,st,ut*ot,ut/B.locationSize*ft*ot,Tt)}}else if(G!==void 0){const st=G[X];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(B.location,st);break;case 3:n.vertexAttrib3fv(B.location,st);break;case 4:n.vertexAttrib4fv(B.location,st);break;default:n.vertexAttrib1fv(B.location,st)}}}}b()}function C(){P();for(const x in i){const R=i[x];for(const W in R){const H=R[W];for(const k in H)u(H[k].object),delete H[k];delete R[W]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const W in R){const H=R[W];for(const k in H)u(H[k].object),delete H[k];delete R[W]}delete i[x.id]}function T(x){for(const R in i){const W=i[R];if(W[x.id]===void 0)continue;const H=W[x.id];for(const k in H)u(H[k].object),delete H[k];delete W[x.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function sm(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];e.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==wn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wn&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:C,maxSamples:E}}function om(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vi,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:i,w=b*4;let M=d.clippingState||null;l.value=M,M=u(g,f,w,m);for(let C=0;C!==w;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let w=0,M=m;w!==_;++w,M+=4)o.copy(h[w]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function am(n){let t=new WeakMap;function e(o,a){return a===ko?o.mapping=es:a===Ho&&(o.mapping=ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ko||a===Ho)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sf(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const $i=4,Xl=[.125,.215,.35,.446,.526,.582],Si=20,go=new iu,ql=new Kt;let _o=null,vo=0,xo=0,Mo=!1;const xi=(1+Math.sqrt(5))/2,Yi=1/xi,Yl=[new N(-xi,Yi,0),new N(xi,Yi,0),new N(-Yi,0,xi),new N(Yi,0,xi),new N(0,xi,-Yi),new N(0,xi,Yi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],lm=new N;class $l{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=lm}=r;_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,vo,xo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Fs,format:wn,colorSpace:ss,depthBuffer:!1},s=Kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(r)),this._blurMaterial=um(r,t,e)}return s}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,i,s,r){const l=new fn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(ql),h.toneMapping=ri,h.autoClear=!1;const g=new rs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new at(new Gt,g);let p=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,p=!0):(g.color.copy(ql),p=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const M=this._cubeSize;ur(s,w*M,b>2?M:0,M,M),h.setRenderTarget(s),p&&h.render(_,l),h.render(t,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=m,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,go)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const d=[];let b=0;for(let T=0;T<Si;++T){const P=T/_,y=Math.exp(-P*P/2);d.push(y),T===0?b+=y:T<p&&(b+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const M=this._sizeLods[s],C=3*M*(s>w-$i?s-w+$i:0),E=4*(this._cubeSize-M);ur(e,C,E,3*M,2*M),l.setRenderTarget(e),l.render(h,go)}}function cm(n){const t=[],e=[],i=[];let s=n;const r=n-$i+1+Xl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-$i?l=Xl[o-n+$i-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,b=new Float32Array(_*g*m),w=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,P=E>2?0:-1,y=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(y,_*g*E),w.set(f,p*g*E);const x=[E,E,E,E,E,E];M.set(x,d*g*E)}const C=new pn;C.setAttribute("position",new Dn(b,_)),C.setAttribute("uv",new Dn(w,p)),C.setAttribute("faceIndex",new Dn(M,d)),t.push(C),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Kl(n,t,e){const i=new Pi(n,t,e);return i.texture.mapping=Dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function um(n,t,e){const i=new Float32Array(Si),s=new N(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function jl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function hm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ko||l===Ho,u=l===es||l===ns;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $l(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new $l(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function fm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Zi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dm(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)t.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let w=0,M=b.length;w<M;w+=3){const C=b[w+0],E=b[w+1],T=b[w+2];f.push(C,E,E,T,T,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let w=0,M=b.length/3-1;w<M;w+=3){const C=w+0,E=w+1,T=w+2;f.push(C,E,E,T,T,C)}}else return;const p=new(qc(f)?Zc:Kc)(f,1);p.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pm(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,r,f*o),e.update(m,i,1)}function c(f,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,f*o,g),e.update(m,i,g))}function u(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,i,1)}function h(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=m[b]*_[b];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function gm(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let C=a.attributes.position.count*M,E=1;C>t.maxTextureSize&&(E=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*E*4*h),P=new Yc(T,C,E,h);P.type=Wn,P.needsUpdate=!0;const y=M*4;for(let R=0;R<h;R++){const W=d[R],H=b[R],k=w[R],V=C*E*4*R;for(let G=0;G<W.count;G++){const X=G*y;g===!0&&(s.fromBufferAttribute(W,G),T[V+X+0]=s.x,T[V+X+1]=s.y,T[V+X+2]=s.z,T[V+X+3]=0),_===!0&&(s.fromBufferAttribute(H,G),T[V+X+4]=s.x,T[V+X+5]=s.y,T[V+X+6]=s.z,T[V+X+7]=0),p===!0&&(s.fromBufferAttribute(k,G),T[V+X+8]=s.x,T[V+X+9]=s.y,T[V+X+10]=s.z,T[V+X+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new Zt(C,E)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function _m(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ou=new en,Jl=new eu(1,1),au=new Yc,lu=new kh,cu=new Qc,Ql=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function fs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Ql[s];if(r===void 0&&(r=new Float32Array(s),Ql[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Nr(n,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function vm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function ym(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;ic.set(i),n.uniformMatrix2fv(this.addr,!1,ic),ze(e,i)}}function Em(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;nc.set(i),n.uniformMatrix3fv(this.addr,!1,nc),ze(e,i)}}function Tm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;ec.set(i),n.uniformMatrix4fv(this.addr,!1,ec),ze(e,i)}}function bm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function Am(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function Rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function Cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function Lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function Im(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jl.compareFunction=Xc,r=Jl):r=ou,e.setTexture2D(t||r,s)}function Um(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||lu,s)}function Nm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||cu,s)}function Fm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||au,s)}function Om(n){switch(n){case 5126:return vm;case 35664:return xm;case 35665:return Mm;case 35666:return Sm;case 35674:return ym;case 35675:return Em;case 35676:return Tm;case 5124:case 35670:return bm;case 35667:case 35671:return wm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Cm;case 36294:return Pm;case 36295:return Lm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}function Bm(n,t){n.uniform1fv(this.addr,t)}function zm(n,t){const e=fs(t,this.size,2);n.uniform2fv(this.addr,e)}function km(n,t){const e=fs(t,this.size,3);n.uniform3fv(this.addr,e)}function Hm(n,t){const e=fs(t,this.size,4);n.uniform4fv(this.addr,e)}function Gm(n,t){const e=fs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Vm(n,t){const e=fs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Wm(n,t){const e=fs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Xm(n,t){n.uniform1iv(this.addr,t)}function qm(n,t){n.uniform2iv(this.addr,t)}function Ym(n,t){n.uniform3iv(this.addr,t)}function $m(n,t){n.uniform4iv(this.addr,t)}function Km(n,t){n.uniform1uiv(this.addr,t)}function Zm(n,t){n.uniform2uiv(this.addr,t)}function jm(n,t){n.uniform3uiv(this.addr,t)}function Jm(n,t){n.uniform4uiv(this.addr,t)}function Qm(n,t,e){const i=this.cache,s=t.length,r=Nr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ou,r[o])}function t0(n,t,e){const i=this.cache,s=t.length,r=Nr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lu,r[o])}function e0(n,t,e){const i=this.cache,s=t.length,r=Nr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cu,r[o])}function n0(n,t,e){const i=this.cache,s=t.length,r=Nr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||au,r[o])}function i0(n){switch(n){case 5126:return Bm;case 35664:return zm;case 35665:return km;case 35666:return Hm;case 35674:return Gm;case 35675:return Vm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Zm;case 36295:return jm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}class s0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Om(e.type)}}class r0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function sc(n,t){n.seq.push(t),n.map[t.id]=t}function a0(n,t,e){const i=n.name,s=i.length;for(So.lastIndex=0;;){const r=So.exec(i),o=So.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sc(e,c===void 0?new s0(a,n,t):new r0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new o0(a),sc(e,h)),e=h}}}class Sr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);a0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function rc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const l0=37297;let c0=0;function u0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const oc=new Ht;function h0(n){se._getMatrix(oc,se.workingColorSpace,n);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case yr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ac(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+u0(n.getShaderSource(t),o)}else return s}function f0(n,t){const e=h0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function d0(n,t){let e;switch(t){case dh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="Cineon";break;case Uc:e="ACESFilmic";break;case _h:e="AgX";break;case vh:e="Neutral";break;case gh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new N;function p0(){se.getLuminanceCoefficients(hr);const n=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function g0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function _0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function bs(n){return n!==""}function lc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(n){return n.replace(v0,M0)}const x0=new Map;function M0(n,t){let e=Vt[t];if(e===void 0){const i=x0.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _a(e)}const S0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(S0,y0)}function y0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function E0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function T0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function w0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ic:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function A0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function R0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=E0(e),c=T0(e),u=b0(e),h=w0(e),f=A0(e),m=m0(e),g=g0(r),_=s.createProgram();let p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),d.length>0&&(d+=`
`)):(p=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),d=[hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ri?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,f0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=_a(o),o=lc(o,e),o=cc(o,e),a=_a(a),a=lc(a,e),a=cc(a,e),o=uc(o),a=uc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=b+p+o,M=b+d+a,C=rc(s,s.VERTEX_SHADER,w),E=rc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(C).trim(),k=s.getShaderInfoLog(E).trim();let V=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,E);else{const X=ac(s,C,"vertex"),B=ac(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+X+`
`+B)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||k==="")&&(G=!1);G&&(R.diagnostics={runnable:V,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:k,prefix:d}})}s.deleteShader(C),s.deleteShader(E),P=new Sr(s,_),y=_0(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,l0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=E,this}let C0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new L0(t),e.set(t,i)),i}}class L0{constructor(t){this.id=C0++,this.code=t,this.usedTimes=0}}function D0(n,t,e,i,s,r,o){const a=new Na,l=new P0,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,R,W,H){const k=W.fog,V=H.geometry,G=y.isMeshStandardMaterial?W.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),B=X&&X.mapping===Dr?X.image.height:null,Q=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=st!==void 0?st.length:0;let Nt=0;V.morphAttributes.position!==void 0&&(Nt=1),V.morphAttributes.normal!==void 0&&(Nt=2),V.morphAttributes.color!==void 0&&(Nt=3);let ee,Z,ot,Tt;if(Q){const oe=Pn[Q];ee=oe.vertexShader,Z=oe.fragmentShader}else ee=y.vertexShader,Z=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),Tt=l.getFragmentShaderID(y);const ft=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),qt=H.isInstancedMesh===!0,Pt=H.isBatchedMesh===!0,_e=!!y.map,ce=!!y.matcap,Bt=!!X,D=!!y.aoMap,ke=!!y.lightMap,te=!!y.bumpMap,re=!!y.normalMap,yt=!!y.displacementMap,jt=!!y.emissiveMap,At=!!y.metalnessMap,kt=!!y.roughnessMap,Ie=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,z=y.iridescence>0,j=y.sheen>0,tt=y.transmission>0,K=Ie&&!!y.anisotropyMap,bt=A&&!!y.clearcoatMap,ht=A&&!!y.clearcoatNormalMap,Et=A&&!!y.clearcoatRoughnessMap,wt=z&&!!y.iridescenceMap,et=z&&!!y.iridescenceThicknessMap,gt=j&&!!y.sheenColorMap,Dt=j&&!!y.sheenRoughnessMap,Lt=!!y.specularMap,lt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,I=tt&&!!y.transmissionMap,dt=tt&&!!y.thicknessMap,nt=!!y.gradientMap,vt=!!y.alphaMap,it=y.alphaTest>0,J=!!y.alphaHash,Mt=!!y.extensions;let zt=ri;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(zt=n.toneMapping);const Me={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Z,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:Tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&H._colorsTexture!==null,instancing:qt,instancingColor:qt&&H.instanceColor!==null,instancingMorph:qt&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ss,alphaToCoverage:!!y.alphaToCoverage,map:_e,matcap:ce,envMap:Bt,envMapMode:Bt&&X.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:ke,bumpMap:te,normalMap:re,displacementMap:f&&yt,emissiveMap:jt,normalMapObjectSpace:re&&y.normalMapType===yh,normalMapTangentSpace:re&&y.normalMapType===Wc,metalnessMap:At,roughnessMap:kt,anisotropy:Ie,anisotropyMap:K,clearcoat:A,clearcoatMap:bt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Et,dispersion:v,iridescence:z,iridescenceMap:wt,iridescenceThicknessMap:et,sheen:j,sheenColorMap:gt,sheenRoughnessMap:Dt,specularMap:Lt,specularColorMap:lt,specularIntensityMap:Ot,transmission:tt,transmissionMap:I,thicknessMap:dt,gradientMap:nt,opaque:y.transparent===!1&&y.blending===Ki&&y.alphaToCoverage===!1,alphaMap:vt,alphaTest:it,alphaHash:J,combine:y.combine,mapUv:_e&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:ke&&_(y.lightMap.channel),bumpMapUv:te&&_(y.bumpMap.channel),normalMapUv:re&&_(y.normalMap.channel),displacementMapUv:yt&&_(y.displacementMap.channel),emissiveMapUv:jt&&_(y.emissiveMap.channel),metalnessMapUv:At&&_(y.metalnessMap.channel),roughnessMapUv:kt&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:bt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Lt&&_(y.specularMap.channel),specularColorMapUv:lt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ot&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:dt&&_(y.thicknessMap.channel),alphaMapUv:vt&&_(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(re||Ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(_e||vt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xt,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:zt,decodeVideoTexture:_e&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(x,y),w(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function b(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function w(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let R;if(x){const W=Pn[x];R=Qh.clone(W.uniforms)}else R=y.uniforms;return R}function C(y,x){let R;for(let W=0,H=u.length;W<H;W++){const k=u[W];if(k.cacheKey===x){R=k,++R.usedTimes;break}}return R===void 0&&(R=new R0(n,x,y,r),u.push(R)),R}function E(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:P}}function I0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function U0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,g,_,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),t++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||U0),i.length>1&&i.sort(f||fc),s.length>1&&s.sort(f||fc)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function N0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new dc,n.set(i,[o])):s>=r.length?(o=new dc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function F0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function O0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let B0=0;function z0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function k0(n){const t=new F0,e=O0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new ye,o=new ye;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,b=0,w=0,M=0,C=0,E=0,T=0;c.sort(z0);for(let y=0,x=c.length;y<x;y++){const R=c[y],W=R.color,H=R.intensity,k=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=W.r*H,h+=W.g*H,f+=W.b*H;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],H);T++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,B=e.get(R);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=G,m++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(W).multiplyScalar(H),G.distance=k,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[_]=G;const X=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,X.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[_]=X.matrix,R.castShadow){const B=e.get(R);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=V,M++}_++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(W).multiplyScalar(H),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[p]=G,p++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const X=R.shadow,B=e.get(R);B.shadowIntensity=X.intensity,B.shadowBias=X.bias,B.shadowNormalBias=X.normalBias,B.shadowRadius=X.radius,B.shadowMapSize=X.mapSize,B.shadowCameraNear=X.camera.near,B.shadowCameraFar=X.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(H),G.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[d]=G,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=M+C-E,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=T,i.version=B0++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const w=c[d];if(w.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function pc(n){const t=new k0(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function H0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pc(n),t.set(s,[a])):r>=o.length?(a=new pc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const G0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
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
}`;function W0(n,t,e){let i=new Oa;const s=new Zt,r=new Zt,o=new fe,a=new ff({depthPacking:Sh}),l=new df,c={},u=e.maxTextureSize,h={[ai]:tn,[tn]:ai,[Tn]:Tn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:G0,fragmentShader:V0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new at(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let d=this.type;this.render=function(E,T,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),W=n.state;W.setBlending(si),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=d!==Gn&&this.type===Gn,k=d===Gn&&this.type!==Gn;for(let V=0,G=E.length;V<G;V++){const X=E[V],B=X.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||H===!0||k===!0){const ut=this.type!==Gn?{minFilter:An,magFilter:An}:{};B.map!==null&&B.map.dispose(),B.map=new Pi(s.x,s.y,ut),B.map.texture.name=X.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const st=B.getViewportCount();for(let ut=0;ut<st;ut++){const Nt=B.getViewport(ut);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),W.viewport(o),B.updateMatrices(X,ut),i=B.getFrustum(),M(T,P,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Gn&&b(B,P),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,x,R)};function b(E,T){const P=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Pi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,_,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,P,m,_,null)}function w(E,T,P,y){let x=null;const R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const W=x.uuid,H=T.uuid;let k=c[W];k===void 0&&(k={},c[W]=k);let V=k[H];V===void 0&&(V=x.clone(),k[H]=V,T.addEventListener("dispose",C)),x=V}if(x.visible=T.visible,x.wireframe=T.wireframe,y===Gn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=P}return x}function M(E,T,P,y,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Gn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const H=t.update(E),k=E.material;if(Array.isArray(k)){const V=H.groups;for(let G=0,X=V.length;G<X;G++){const B=V[G],Q=k[B.materialIndex];if(Q&&Q.visible){const st=w(E,Q,y,x);E.onBeforeShadow(n,E,T,P,H,st,B),n.renderBufferDirect(P,null,H,st,E,B),E.onAfterShadow(n,E,T,P,H,st,B)}}}else if(k.visible){const V=w(E,k,y,x);E.onBeforeShadow(n,E,T,P,H,V,null),n.renderBufferDirect(P,null,H,V,E,null),E.onAfterShadow(n,E,T,P,H,V,null)}}const W=E.children;for(let H=0,k=W.length;H<k;H++)M(W[H],T,P,y,x)}function C(E){E.target.removeEventListener("dispose",C);for(const P in c){const y=c[P],x=E.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const X0={[Io]:Uo,[No]:Bo,[Fo]:zo,[ts]:Oo,[Uo]:Io,[Bo]:No,[zo]:Fo,[Oo]:ts};function q0(n,t){function e(){let I=!1;const dt=new fe;let nt=null;const vt=new fe(0,0,0,0);return{setMask:function(it){nt!==it&&!I&&(n.colorMask(it,it,it,it),nt=it)},setLocked:function(it){I=it},setClear:function(it,J,Mt,zt,Me){Me===!0&&(it*=zt,J*=zt,Mt*=zt),dt.set(it,J,Mt,zt),vt.equals(dt)===!1&&(n.clearColor(it,J,Mt,zt),vt.copy(dt))},reset:function(){I=!1,nt=null,vt.set(-1,0,0,0)}}}function i(){let I=!1,dt=!1,nt=null,vt=null,it=null;return{setReversed:function(J){if(dt!==J){const Mt=t.get("EXT_clip_control");J?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const zt=it;it=null,this.setClear(zt)}},getReversed:function(){return dt},setTest:function(J){J?ft(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(J){nt!==J&&!I&&(n.depthMask(J),nt=J)},setFunc:function(J){if(dt&&(J=X0[J]),vt!==J){switch(J){case Io:n.depthFunc(n.NEVER);break;case Uo:n.depthFunc(n.ALWAYS);break;case No:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case Fo:n.depthFunc(n.EQUAL);break;case Oo:n.depthFunc(n.GEQUAL);break;case Bo:n.depthFunc(n.GREATER);break;case zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=J}},setLocked:function(J){I=J},setClear:function(J){it!==J&&(dt&&(J=1-J),n.clearDepth(J),it=J)},reset:function(){I=!1,nt=null,vt=null,it=null,dt=!1}}}function s(){let I=!1,dt=null,nt=null,vt=null,it=null,J=null,Mt=null,zt=null,Me=null;return{setTest:function(oe){I||(oe?ft(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(oe){dt!==oe&&!I&&(n.stencilMask(oe),dt=oe)},setFunc:function(oe,xn,Fn){(nt!==oe||vt!==xn||it!==Fn)&&(n.stencilFunc(oe,xn,Fn),nt=oe,vt=xn,it=Fn)},setOp:function(oe,xn,Fn){(J!==oe||Mt!==xn||zt!==Fn)&&(n.stencilOp(oe,xn,Fn),J=oe,Mt=xn,zt=Fn)},setLocked:function(oe){I=oe},setClear:function(oe){Me!==oe&&(n.clearStencil(oe),Me=oe)},reset:function(){I=!1,dt=null,nt=null,vt=null,it=null,J=null,Mt=null,zt=null,Me=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,b=null,w=null,M=null,C=null,E=null,T=new Kt(0,0,0),P=0,y=!1,x=null,R=null,W=null,H=null,k=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=X>=2);let Q=null,st={};const ut=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),ee=new fe().fromArray(ut),Z=new fe().fromArray(Nt);function ot(I,dt,nt,vt){const it=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Mt=0;Mt<nt;Mt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(dt+Mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return J}const Tt={};Tt[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),Tt[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Tt[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),o.setFunc(ts),te(!1),re(hl),ft(n.CULL_FACE),D(si);function ft(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function xt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function qt(I,dt){return h[I]!==dt?(n.bindFramebuffer(I,dt),h[I]=dt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=dt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Pt(I,dt){let nt=m,vt=!1;if(I){nt=f.get(dt),nt===void 0&&(nt=[],f.set(dt,nt));const it=I.textures;if(nt.length!==it.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Mt=it.length;J<Mt;J++)nt[J]=n.COLOR_ATTACHMENT0+J;nt.length=it.length,vt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(nt)}function _e(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const ce={[Mi]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[Ku]:n.FUNC_REVERSE_SUBTRACT};ce[Zu]=n.MIN,ce[ju]=n.MAX;const Bt={[Ju]:n.ZERO,[Qu]:n.ONE,[th]:n.SRC_COLOR,[Lo]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[sh]:n.DST_COLOR,[nh]:n.DST_ALPHA,[eh]:n.ONE_MINUS_SRC_COLOR,[Do]:n.ONE_MINUS_SRC_ALPHA,[rh]:n.ONE_MINUS_DST_COLOR,[ih]:n.ONE_MINUS_DST_ALPHA,[ah]:n.CONSTANT_COLOR,[lh]:n.ONE_MINUS_CONSTANT_COLOR,[ch]:n.CONSTANT_ALPHA,[uh]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,dt,nt,vt,it,J,Mt,zt,Me,oe){if(I===si){_===!0&&(xt(n.BLEND),_=!1);return}if(_===!1&&(ft(n.BLEND),_=!0),I!==Yu){if(I!==p||oe!==y){if((d!==Mi||M!==Mi)&&(n.blendEquation(n.FUNC_ADD),d=Mi,M=Mi),oe)switch(I){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case dl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,w=null,C=null,E=null,T.set(0,0,0),P=0,p=I,y=oe}return}it=it||dt,J=J||nt,Mt=Mt||vt,(dt!==d||it!==M)&&(n.blendEquationSeparate(ce[dt],ce[it]),d=dt,M=it),(nt!==b||vt!==w||J!==C||Mt!==E)&&(n.blendFuncSeparate(Bt[nt],Bt[vt],Bt[J],Bt[Mt]),b=nt,w=vt,C=J,E=Mt),(zt.equals(T)===!1||Me!==P)&&(n.blendColor(zt.r,zt.g,zt.b,Me),T.copy(zt),P=Me),p=I,y=!1}function ke(I,dt){I.side===Tn?xt(n.CULL_FACE):ft(n.CULL_FACE);let nt=I.side===tn;dt&&(nt=!nt),te(nt),I.blending===Ki&&I.transparent===!1?D(si):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const vt=I.stencilWrite;a.setTest(vt),vt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function re(I){I!==Xu?(ft(n.CULL_FACE),I!==R&&(I===hl?n.cullFace(n.BACK):I===qu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),R=I}function yt(I){I!==W&&(G&&n.lineWidth(I),W=I)}function jt(I,dt,nt){I?(ft(n.POLYGON_OFFSET_FILL),(H!==dt||k!==nt)&&(n.polygonOffset(dt,nt),H=dt,k=nt)):xt(n.POLYGON_OFFSET_FILL)}function At(I){I?ft(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function kt(I){I===void 0&&(I=n.TEXTURE0+V-1),Q!==I&&(n.activeTexture(I),Q=I)}function Ie(I,dt,nt){nt===void 0&&(Q===null?nt=n.TEXTURE0+V-1:nt=Q);let vt=st[nt];vt===void 0&&(vt={type:void 0,texture:void 0},st[nt]=vt),(vt.type!==I||vt.texture!==dt)&&(Q!==nt&&(n.activeTexture(nt),Q=nt),n.bindTexture(I,dt||Tt[I]),vt.type=I,vt.texture=dt)}function A(){const I=st[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(I){ee.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Dt(I){Z.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Lt(I,dt){let nt=c.get(dt);nt===void 0&&(nt=new WeakMap,c.set(dt,nt));let vt=nt.get(I);vt===void 0&&(vt=n.getUniformBlockIndex(dt,I.name),nt.set(I,vt))}function lt(I,dt){const vt=c.get(dt).get(I);l.get(dt)!==vt&&(n.uniformBlockBinding(dt,vt,I.__bindingPointIndex),l.set(dt,vt))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,st={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,b=null,w=null,M=null,C=null,E=null,T=new Kt(0,0,0),P=0,y=!1,x=null,R=null,W=null,H=null,k=null,ee.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:xt,bindFramebuffer:qt,drawBuffers:Pt,useProgram:_e,setBlending:D,setMaterial:ke,setFlipSided:te,setCullFace:re,setLineWidth:yt,setPolygonOffset:jt,setScissorTest:At,activeTexture:kt,bindTexture:Ie,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:wt,texImage3D:et,updateUBOMapping:Lt,uniformBlockBinding:lt,texStorage2D:ht,texStorage3D:Et,texSubImage2D:j,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:bt,scissor:gt,viewport:Dt,reset:Ot}}function Y0(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zt,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):Tr("canvas")}function _(A,v,z){let j=1;const tt=Ie(A);if((tt.width>z||tt.height>z)&&(j=z/Math.max(tt.width,tt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(j*tt.width),bt=Math.floor(j*tt.height);h===void 0&&(h=g(K,bt));const ht=v?g(K,bt):h;return ht.width=K,ht.height=bt,ht.getContext("2d").drawImage(A,0,0,K,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+bt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,v,z,j,tt=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=v;if(v===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),v===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),v===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const bt=tt?yr:se.getTransfer(j);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=bt===he?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(A,v){let z;return A?v===null||v===Ci||v===Ps?z=n.DEPTH24_STENCIL8:v===Wn?z=n.DEPTH32F_STENCIL8:v===Cs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Ps?z=n.DEPTH_COMPONENT24:v===Wn?z=n.DEPTH_COMPONENT32F:v===Cs&&(z=n.DEPTH_COMPONENT16),z}function C(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==An&&A.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){const v=A.target;v.removeEventListener("dispose",E),P(v),v.isVideoTexture&&u.delete(v)}function T(A){const v=A.target;v.removeEventListener("dispose",T),x(v)}function P(A){const v=i.get(A);if(v.__webglInit===void 0)return;const z=A.source,j=f.get(z);if(j){const tt=j[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(A),Object.keys(j).length===0&&f.delete(z)}i.remove(A)}function y(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const z=A.source,j=f.get(z);delete j[v.__cacheKey],o.memory.textures--}function x(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let tt=0;tt<v.__webglFramebuffer[j].length;tt++)n.deleteFramebuffer(v.__webglFramebuffer[j][tt]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,tt=z.length;j<tt;j++){const K=i.get(z[j]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(A)}let R=0;function W(){R=0}function H(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function k(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function V(A,v){const z=i.get(A);if(A.isVideoTexture&&At(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(z,A,v);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function G(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Tt(z,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function X(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){Tt(z,A,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function B(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ft(z,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const Q={[is]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[Go]:n.MIRRORED_REPEAT},st={[An]:n.NEAREST,[xh]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[Hr]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ut={[Eh]:n.NEVER,[Ch]:n.ALWAYS,[Th]:n.LESS,[Xc]:n.LEQUAL,[bh]:n.EQUAL,[Rh]:n.GEQUAL,[wh]:n.GREATER,[Ah]:n.NOTEQUAL};function Nt(A,v){if(v.type===Wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===Hr||v.magFilter===Vs||v.magFilter===wi||v.minFilter===Ln||v.minFilter===Hr||v.minFilter===Vs||v.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Q[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Q[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Q[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,st[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,st[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==Vs&&v.minFilter!==wi||v.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ee(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));const j=v.source;let tt=f.get(j);tt===void 0&&(tt={},f.set(j,tt));const K=k(v);if(K!==A.__cacheKey){tt[K]===void 0&&(tt[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[K].usedTimes++;const bt=tt[A.__cacheKey];bt!==void 0&&(tt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&y(v)),A.__cacheKey=K,A.__webglTexture=tt[K].texture}return z}function Z(A,v,z){return Math.floor(Math.floor(A/z)/v)}function ot(A,v,z,j){const K=A.updateRanges;if(K.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,j,v.data);else{K.sort((et,gt)=>et.start-gt.start);let bt=0;for(let et=1;et<K.length;et++){const gt=K[bt],Dt=K[et],Lt=gt.start+gt.count,lt=Z(Dt.start,v.width,4),Ot=Z(gt.start,v.width,4);Dt.start<=Lt+1&&lt===Ot&&Z(Dt.start+Dt.count-1,v.width,4)===lt?gt.count=Math.max(gt.count,Dt.start+Dt.count-gt.start):(++bt,K[bt]=Dt)}K.length=bt+1;const ht=n.getParameter(n.UNPACK_ROW_LENGTH),Et=n.getParameter(n.UNPACK_SKIP_PIXELS),wt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let et=0,gt=K.length;et<gt;et++){const Dt=K[et],Lt=Math.floor(Dt.start/4),lt=Math.ceil(Dt.count/4),Ot=Lt%v.width,I=Math.floor(Lt/v.width),dt=lt,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ot,I,dt,nt,z,j,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ht),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(n.UNPACK_SKIP_ROWS,wt)}}function Tt(A,v,z){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const tt=ee(A,v),K=v.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+z);const bt=i.get(K);if(K.version!==bt.__version||tt===!0){e.activeTexture(n.TEXTURE0+z);const ht=se.getPrimaries(se.workingColorSpace),Et=v.colorSpace===ni?null:se.getPrimaries(v.colorSpace),wt=v.colorSpace===ni||ht===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let et=_(v.image,!1,s.maxTextureSize);et=kt(v,et);const gt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type);let Lt=w(v.internalFormat,gt,Dt,v.colorSpace,v.isVideoTexture);Nt(j,v);let lt;const Ot=v.mipmaps,I=v.isVideoTexture!==!0,dt=bt.__version===void 0||tt===!0,nt=K.dataReady,vt=C(v,et);if(v.isDepthTexture)Lt=M(v.format===Ds,v.type),dt&&(I?e.texStorage2D(n.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Lt,et.width,et.height,0,gt,Dt,null));else if(v.isDataTexture)if(Ot.length>0){I&&dt&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,Ot[0].width,Ot[0].height);for(let it=0,J=Ot.length;it<J;it++)lt=Ot[it],I?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,lt.width,lt.height,gt,Dt,lt.data):e.texImage2D(n.TEXTURE_2D,it,Lt,lt.width,lt.height,0,gt,Dt,lt.data);v.generateMipmaps=!1}else I?(dt&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,et.width,et.height),nt&&ot(v,et,gt,Dt)):e.texImage2D(n.TEXTURE_2D,0,Lt,et.width,et.height,0,gt,Dt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Lt,Ot[0].width,Ot[0].height,et.depth);for(let it=0,J=Ot.length;it<J;it++)if(lt=Ot[it],v.format!==wn)if(gt!==null)if(I){if(nt)if(v.layerUpdates.size>0){const Mt=Wl(lt.width,lt.height,v.format,v.type);for(const zt of v.layerUpdates){const Me=lt.data.subarray(zt*Mt/lt.data.BYTES_PER_ELEMENT,(zt+1)*Mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,zt,lt.width,lt.height,1,gt,Me)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,lt.width,lt.height,et.depth,gt,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,Lt,lt.width,lt.height,et.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,lt.width,lt.height,et.depth,gt,Dt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,Lt,lt.width,lt.height,et.depth,0,gt,Dt,lt.data)}else{I&&dt&&e.texStorage2D(n.TEXTURE_2D,vt,Lt,Ot[0].width,Ot[0].height);for(let it=0,J=Ot.length;it<J;it++)lt=Ot[it],v.format!==wn?gt!==null?I?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,lt.width,lt.height,gt,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,Lt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,lt.width,lt.height,gt,Dt,lt.data):e.texImage2D(n.TEXTURE_2D,it,Lt,lt.width,lt.height,0,gt,Dt,lt.data)}else if(v.isDataArrayTexture)if(I){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,Lt,et.width,et.height,et.depth),nt)if(v.layerUpdates.size>0){const it=Wl(et.width,et.height,v.format,v.type);for(const J of v.layerUpdates){const Mt=et.data.subarray(J*it/et.data.BYTES_PER_ELEMENT,(J+1)*it/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,gt,Dt,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Dt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,gt,Dt,et.data);else if(v.isData3DTexture)I?(dt&&e.texStorage3D(n.TEXTURE_3D,vt,Lt,et.width,et.height,et.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Dt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,gt,Dt,et.data);else if(v.isFramebufferTexture){if(dt)if(I)e.texStorage2D(n.TEXTURE_2D,vt,Lt,et.width,et.height);else{let it=et.width,J=et.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,Lt,it,J,0,gt,Dt,null),it>>=1,J>>=1}}else if(Ot.length>0){if(I&&dt){const it=Ie(Ot[0]);e.texStorage2D(n.TEXTURE_2D,vt,Lt,it.width,it.height)}for(let it=0,J=Ot.length;it<J;it++)lt=Ot[it],I?nt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,gt,Dt,lt):e.texImage2D(n.TEXTURE_2D,it,Lt,gt,Dt,lt);v.generateMipmaps=!1}else if(I){if(dt){const it=Ie(et);e.texStorage2D(n.TEXTURE_2D,vt,Lt,it.width,it.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Dt,et)}else e.texImage2D(n.TEXTURE_2D,0,Lt,gt,Dt,et);p(v)&&d(j),bt.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ft(A,v,z){if(v.image.length!==6)return;const j=ee(A,v),tt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const K=i.get(tt);if(tt.version!==K.__version||j===!0){e.activeTexture(n.TEXTURE0+z);const bt=se.getPrimaries(se.workingColorSpace),ht=v.colorSpace===ni?null:se.getPrimaries(v.colorSpace),Et=v.colorSpace===ni||bt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const wt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!wt&&!et?gt[J]=_(v.image[J],!0,s.maxCubemapSize):gt[J]=et?v.image[J].image:v.image[J],gt[J]=kt(v,gt[J]);const Dt=gt[0],Lt=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),Ot=w(v.internalFormat,Lt,lt,v.colorSpace),I=v.isVideoTexture!==!0,dt=K.__version===void 0||j===!0,nt=tt.dataReady;let vt=C(v,Dt);Nt(n.TEXTURE_CUBE_MAP,v);let it;if(wt){I&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ot,Dt.width,Dt.height);for(let J=0;J<6;J++){it=gt[J].mipmaps;for(let Mt=0;Mt<it.length;Mt++){const zt=it[Mt];v.format!==wn?Lt!==null?I?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,zt.width,zt.height,Lt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,Ot,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,0,0,zt.width,zt.height,Lt,lt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt,Ot,zt.width,zt.height,0,Lt,lt,zt.data)}}}else{if(it=v.mipmaps,I&&dt){it.length>0&&vt++;const J=Ie(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ot,J.width,J.height)}for(let J=0;J<6;J++)if(et){I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Lt,lt,gt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,gt[J].width,gt[J].height,0,Lt,lt,gt[J].data);for(let Mt=0;Mt<it.length;Mt++){const Me=it[Mt].image[J].image;I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Me.width,Me.height,Lt,lt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,Ot,Me.width,Me.height,0,Lt,lt,Me.data)}}else{I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,lt,gt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ot,Lt,lt,gt[J]);for(let Mt=0;Mt<it.length;Mt++){const zt=it[Mt];I?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,0,0,Lt,lt,zt.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Mt+1,Ot,Lt,lt,zt.image[J])}}}p(v)&&d(n.TEXTURE_CUBE_MAP),K.__version=tt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function xt(A,v,z,j,tt,K){const bt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),Et=w(z.internalFormat,bt,ht,z.colorSpace),wt=i.get(v),et=i.get(z);if(et.__renderTarget=v,!wt.__hasExternalTextures){const gt=Math.max(1,v.width>>K),Dt=Math.max(1,v.height>>K);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,Et,gt,Dt,v.depth,0,bt,ht,null):e.texImage2D(tt,K,Et,gt,Dt,0,bt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,tt,et.__webglTexture,0,yt(v)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,tt,et.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(A,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,tt=j&&j.isDepthTexture?j.type:null,K=M(v.stencilBuffer,tt),bt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=yt(v);jt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,K,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,A)}else{const j=v.textures;for(let tt=0;tt<j.length;tt++){const K=j[tt],bt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),Et=w(K.internalFormat,bt,ht,K.colorSpace),wt=yt(v);z&&jt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,Et,v.width,v.height):jt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,wt,Et,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Et,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const tt=j.__webglTexture,K=yt(v);if(v.depthTexture.format===Ls)jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Ds)jt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function _e(A){const v=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",tt)};j.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?Pt(v.__webglFramebuffer[0],A):Pt(v.__webglFramebuffer,A)}else if(z){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),qt(v.__webglDepthbuffer[j],A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),qt(v.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,K)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(A,v,z){const j=i.get(A);v!==void 0&&xt(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&_e(A)}function Bt(A){const v=A.texture,z=i.get(A),j=i.get(v);A.addEventListener("dispose",T);const tt=A.textures,K=A.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let Et=0;Et<v.mipmaps.length;Et++)z.__webglFramebuffer[ht][Et]=n.createFramebuffer()}else z.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)z.__webglFramebuffer[ht]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(bt)for(let ht=0,Et=tt.length;ht<Et;ht++){const wt=i.get(tt[ht]);wt.__webglTexture===void 0&&(wt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&jt(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const Et=tt[ht];z.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);const wt=r.convert(Et.format,Et.colorSpace),et=r.convert(Et.type),gt=w(Et.internalFormat,wt,et,Et.colorSpace,A.isXRRenderTarget===!0),Dt=yt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,gt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)xt(z.__webglFramebuffer[ht][Et],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Et);else xt(z.__webglFramebuffer[ht],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,Et=tt.length;ht<Et;ht++){const wt=tt[ht],et=i.get(wt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),Nt(n.TEXTURE_2D,wt),xt(z.__webglFramebuffer,A,wt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),p(wt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Nt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let Et=0;Et<v.mipmaps.length;Et++)xt(z.__webglFramebuffer[Et],A,v,n.COLOR_ATTACHMENT0,ht,Et);else xt(z.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ht,0);p(v)&&d(ht),e.unbindTexture()}A.depthBuffer&&_e(A)}function D(A){const v=A.textures;for(let z=0,j=v.length;z<j;z++){const tt=v[z];if(p(tt)){const K=b(A),bt=i.get(tt).__webglTexture;e.bindTexture(K,bt),d(K),e.unbindTexture()}}}const ke=[],te=[];function re(A){if(A.samples>0){if(jt(A)===!1){const v=A.textures,z=A.width,j=A.height;let tt=n.COLOR_BUFFER_BIT;const K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(A),ht=v.length>1;if(ht)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const Et=A.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const et=i.get(v[wt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,tt,n.NEAREST),l===!0&&(ke.length=0,te.length=0,ke.push(n.COLOR_ATTACHMENT0+wt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(K),te.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);const et=i.get(v[wt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+wt,n.TEXTURE_2D,et,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function yt(A){return Math.min(s.maxSamples,A.samples)}function jt(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(A){const v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function kt(A,v){const z=A.colorSpace,j=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ss&&z!==ni&&(se.getTransfer(z)===he?(j!==wn||tt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=B,this.rebindTextures=ce,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt}function $0(n,t){function e(i,s=ni){let r;const o=se.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ca)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fc)return n.BYTE;if(i===Oc)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===Aa)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Fs)return n.HALF_FLOAT;if(i===zc)return n.ALPHA;if(i===kc)return n.RGB;if(i===wn)return n.RGBA;if(i===Ls)return n.DEPTH_COMPONENT;if(i===Ds)return n.DEPTH_STENCIL;if(i===Hc)return n.RED;if(i===Pa)return n.RED_INTEGER;if(i===Gc)return n.RG;if(i===La)return n.RG_INTEGER;if(i===Da)return n.RGBA_INTEGER;if(i===gr||i===_r||i===vr||i===xr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Wo||i===Xo||i===qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yo||i===$o||i===Ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yo||i===$o)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zo||i===jo||i===Jo||i===Qo||i===ta||i===ea||i===na||i===ia||i===sa||i===ra||i===oa||i===aa||i===la||i===ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mr||i===ua||i===ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Mr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===fa||i===da||i===pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const K0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new li({vertexShader:K0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new we(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends cs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new j0,p=e.getContextAttributes();let d=null,b=null;const w=[],M=[],C=new Zt;let E=null;const T=new fn;T.viewport=new fe;const P=new fn;P.viewport=new fe;const y=[T,P],x=new vf;let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ot=w[Z];return ot===void 0&&(ot=new uo,w[Z]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Z){let ot=w[Z];return ot===void 0&&(ot=new uo,w[Z]=ot),ot.getGripSpace()},this.getHand=function(Z){let ot=w[Z];return ot===void 0&&(ot=new uo,w[Z]=ot),ot.getHandSpace()};function H(Z){const ot=M.indexOf(Z.inputSource);if(ot===-1)return;const Tt=w[ot];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,c||o),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<w.length;Z++){const ot=M[Z];ot!==null&&(M[Z]=null,w[Z].disconnect(ot))}R=null,W=null,_.reset(),t.setRenderTarget(d),m=null,f=null,h=null,s=null,b=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",k),s.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,ft=null,xt=null;p.depth&&(xt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=p.stencil?Ds:Ls,ft=p.stencil?Ps:Ci);const qt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Pi(f.textureWidth,f.textureHeight,{format:wn,type:Un,depthTexture:new eu(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Pi(m.framebufferWidth,m.framebufferHeight,{format:wn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Z){for(let ot=0;ot<Z.removed.length;ot++){const Tt=Z.removed[ot],ft=M.indexOf(Tt);ft>=0&&(M[ft]=null,w[ft].disconnect(Tt))}for(let ot=0;ot<Z.added.length;ot++){const Tt=Z.added[ot];let ft=M.indexOf(Tt);if(ft===-1){for(let qt=0;qt<w.length;qt++)if(qt>=M.length){M.push(Tt),ft=qt;break}else if(M[qt]===null){M[qt]=Tt,ft=qt;break}if(ft===-1)break}const xt=w[ft];xt&&xt.connect(Tt)}}const G=new N,X=new N;function B(Z,ot,Tt){G.setFromMatrixPosition(ot.matrixWorld),X.setFromMatrixPosition(Tt.matrixWorld);const ft=G.distanceTo(X),xt=ot.projectionMatrix.elements,qt=Tt.projectionMatrix.elements,Pt=xt[14]/(xt[10]-1),_e=xt[14]/(xt[10]+1),ce=(xt[9]+1)/xt[5],Bt=(xt[9]-1)/xt[5],D=(xt[8]-1)/xt[0],ke=(qt[8]+1)/qt[0],te=Pt*D,re=Pt*ke,yt=ft/(-D+ke),jt=yt*-D;if(ot.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(jt),Z.translateZ(yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xt[10]===-1)Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const At=Pt+yt,kt=_e+yt,Ie=te-jt,A=re+(ft-jt),v=ce*_e/kt*At,z=Bt*_e/kt*At;Z.projectionMatrix.makePerspective(Ie,A,v,z,At,kt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Q(Z,ot){ot===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ot.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ot=Z.near,Tt=Z.far;_.texture!==null&&(_.depthNear>0&&(ot=_.depthNear),_.depthFar>0&&(Tt=_.depthFar)),x.near=P.near=T.near=ot,x.far=P.far=T.far=Tt,(R!==x.near||W!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,W=x.far),T.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const ft=Z.parent,xt=x.cameras;Q(x,ft);for(let qt=0;qt<xt.length;qt++)Q(xt[qt],ft);xt.length===2?B(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),st(Z,x,ft)};function st(Z,ot,Tt){Tt===null?Z.matrix.copy(ot.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ot.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ot.projectionMatrix),Z.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ma*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ut=null;function Nt(Z,ot){if(u=ot.getViewerPose(c||o),g=ot,u!==null){const Tt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let ft=!1;Tt.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let Pt=0;Pt<Tt.length;Pt++){const _e=Tt[Pt];let ce=null;if(m!==null)ce=m.getViewport(_e);else{const D=h.getViewSubImage(f,_e);ce=D.viewport,Pt===0&&(t.setRenderTargetTextures(b,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(b))}let Bt=y[Pt];Bt===void 0&&(Bt=new fn,Bt.layers.enable(Pt),Bt.viewport=new fe,y[Pt]=Bt),Bt.matrix.fromArray(_e.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(_e.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(Bt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Pt=h.getDepthInformation(Tt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let Tt=0;Tt<w.length;Tt++){const ft=M[Tt],xt=w[Tt];ft!==null&&xt!==void 0&&xt.update(ft,ot,c||o)}ut&&ut(Z,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),g=null}const ee=new ru;ee.setAnimationLoop(Nt),this.setAnimationLoop=function(Z){ut=Z},this.dispose=function(){}}}const _i=new Nn,Q0=new ye;function tg(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,jc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,w,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,b,w):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===tn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===tn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=t.get(d),w=b.envMap,M=b.envMapRotation;w&&(p.envMap.value=w,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(_i)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=w*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eg(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const M=w.program;i.uniformBlockBinding(b,M)}function c(b,w){let M=s[b.id];M===void 0&&(g(b),M=u(b),s[b.id]=M,b.addEventListener("dispose",p));const C=w.program;i.updateUBOMapping(b,C);const E=t.render.frame;r[b.id]!==E&&(f(b),r[b.id]=E)}function u(b){const w=h();b.__bindingPointIndex=w;const M=n.createBuffer(),C=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const w=s[b.id],M=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,T=M.length;E<T;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,x=P.length;y<x;y++){const R=P[y];if(m(R,E,y,C)===!0){const W=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let V=0;V<H.length;V++){const G=H[V],X=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,W+k,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,w,M,C){const E=b.value,T=w+"_"+M;if(C[T]===void 0)return typeof E=="number"||typeof E=="boolean"?C[T]=E:C[T]=E.clone(),!0;{const P=C[T];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return C[T]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(b){const w=b.uniforms;let M=0;const C=16;for(let T=0,P=w.length;T<P;T++){const y=Array.isArray(w[T])?w[T]:[w[T]];for(let x=0,R=y.length;x<R;x++){const W=y[x],H=Array.isArray(W.value)?W.value:[W.value];for(let k=0,V=H.length;k<V;k++){const G=H[k],X=_(G),B=M%C,Q=B%X.boundary,st=B+Q;M+=Q,st!==0&&C-st<X.storage&&(M+=C-st),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=X.storage}}}const E=M%C;return E>0&&(M+=C-E),b.__size=M,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function p(b){const w=b.target;w.removeEventListener("dispose",p);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class ng{constructor(t={}){const{canvas:e=Lh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Ze;let E=0,T=0,P=null,y=-1,x=null;const R=new fe,W=new fe;let H=null;const k=new Kt(0);let V=0,G=e.width,X=e.height,B=1,Q=null,st=null;const ut=new fe(0,0,G,X),Nt=new fe(0,0,G,X);let ee=!1;const Z=new Oa;let ot=!1,Tt=!1;const ft=new ye,xt=new ye,qt=new N,Pt=new fe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Bt(){return P===null?B:1}let D=i;function ke(S,F){return e.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",it,!1),e.addEventListener("webglcontextcreationerror",J,!1),D===null){const F="webgl2";if(D=ke(F,S),D===null)throw ke(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let te,re,yt,jt,At,kt,Ie,A,v,z,j,tt,K,bt,ht,Et,wt,et,gt,Dt,Lt,lt,Ot,I;function dt(){te=new fm(D),te.init(),lt=new $0(D,te),re=new rm(D,te,t,lt),yt=new q0(D,te),re.reverseDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),jt=new mm(D),At=new I0,kt=new Y0(D,te,yt,At,re,lt,jt),Ie=new am(M),A=new hm(M),v=new Sf(D),Ot=new im(D,v),z=new dm(D,v,jt,Ot),j=new _m(D,z,v,jt),gt=new gm(D,re,kt),Et=new om(At),tt=new D0(M,Ie,A,te,re,Ot,Et),K=new tg(M,At),bt=new N0,ht=new H0(te),et=new nm(M,Ie,A,yt,j,m,l),wt=new W0(M,j,re),I=new eg(D,jt,re,yt),Dt=new sm(D,te,jt),Lt=new pm(D,te,jt),jt.programs=tt.programs,M.capabilities=re,M.extensions=te,M.properties=At,M.renderLists=bt,M.shadowMap=wt,M.state=yt,M.info=jt}dt();const nt=new J0(M,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(G,X,!1))},this.getSize=function(S){return S.set(G,X)},this.setSize=function(S,F,q=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,X=F,e.width=Math.floor(S*B),e.height=Math.floor(F*B),q===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(G*B,X*B).floor()},this.setDrawingBufferSize=function(S,F,q){G=S,X=F,B=q,e.width=Math.floor(S*q),e.height=Math.floor(F*q),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(ut)},this.setViewport=function(S,F,q,Y){S.isVector4?ut.set(S.x,S.y,S.z,S.w):ut.set(S,F,q,Y),yt.viewport(R.copy(ut).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(Nt)},this.setScissor=function(S,F,q,Y){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,F,q,Y),yt.scissor(W.copy(Nt).multiplyScalar(B).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(S){yt.setScissorTest(ee=S)},this.setOpaqueSort=function(S){Q=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,q=!0){let Y=0;if(S){let O=!1;if(P!==null){const rt=P.texture.format;O=rt===Da||rt===La||rt===Pa}if(O){const rt=P.texture.type,pt=rt===Un||rt===Ci||rt===Cs||rt===Ps||rt===Ra||rt===Ca,St=et.getClearColor(),_t=et.getClearAlpha(),Ut=St.r,Ft=St.g,Rt=St.b;pt?(g[0]=Ut,g[1]=Ft,g[2]=Rt,g[3]=_t,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ut,_[1]=Ft,_[2]=Rt,_[3]=_t,D.clearBufferiv(D.COLOR,0,_))}else Y|=D.COLOR_BUFFER_BIT}F&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",it,!1),e.removeEventListener("webglcontextcreationerror",J,!1),et.dispose(),bt.dispose(),ht.dispose(),At.dispose(),Ie.dispose(),A.dispose(),j.dispose(),Ot.dispose(),I.dispose(),tt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",sl),nt.removeEventListener("sessionend",rl),ui.stop()};function vt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=jt.autoReset,F=wt.enabled,q=wt.autoUpdate,Y=wt.needsUpdate,O=wt.type;dt(),jt.autoReset=S,wt.enabled=F,wt.autoUpdate=q,wt.needsUpdate=Y,wt.type=O}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Mt(S){const F=S.target;F.removeEventListener("dispose",Mt),zt(F)}function zt(S){Me(S),At.remove(S)}function Me(S){const F=At.get(S).programs;F!==void 0&&(F.forEach(function(q){tt.releaseProgram(q)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,q,Y,O,rt){F===null&&(F=_e);const pt=O.isMesh&&O.matrixWorld.determinant()<0,St=zu(S,F,q,Y,O);yt.setMaterial(Y,pt);let _t=q.index,Ut=1;if(Y.wireframe===!0){if(_t=z.getWireframeAttribute(q),_t===void 0)return;Ut=2}const Ft=q.drawRange,Rt=q.attributes.position;let Yt=Ft.start*Ut,ue=(Ft.start+Ft.count)*Ut;rt!==null&&(Yt=Math.max(Yt,rt.start*Ut),ue=Math.min(ue,(rt.start+rt.count)*Ut)),_t!==null?(Yt=Math.max(Yt,0),ue=Math.min(ue,_t.count)):Rt!=null&&(Yt=Math.max(Yt,0),ue=Math.min(ue,Rt.count));const Le=ue-Yt;if(Le<0||Le===1/0)return;Ot.setup(O,Y,St,q,_t);let Se,pe=Dt;if(_t!==null&&(Se=v.get(_t),pe=Lt,pe.setIndex(Se)),O.isMesh)Y.wireframe===!0?(yt.setLineWidth(Y.wireframeLinewidth*Bt()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(O.isLine){let Ct=Y.linewidth;Ct===void 0&&(Ct=1),yt.setLineWidth(Ct*Bt()),O.isLineSegments?pe.setMode(D.LINES):O.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else O.isPoints?pe.setMode(D.POINTS):O.isSprite&&pe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))pe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ct=O._multiDrawStarts,Re=O._multiDrawCounts,ne=O._multiDrawCount,ln=_t?v.get(_t).bytesPerElement:1,Ii=At.get(Y).currentProgram.getUniforms();for(let cn=0;cn<ne;cn++)Ii.setValue(D,"_gl_DrawID",cn),pe.render(Ct[cn]/ln,Re[cn])}else if(O.isInstancedMesh)pe.renderInstances(Yt,Le,O.count);else if(q.isInstancedBufferGeometry){const Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,Ct);pe.renderInstances(Yt,Le,Re)}else pe.render(Yt,Le)};function oe(S,F,q){S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Gs(S,F,q),S.side=ai,S.needsUpdate=!0,Gs(S,F,q),S.side=Tn):Gs(S,F,q)}this.compile=function(S,F,q=null){q===null&&(q=S),d=ht.get(q),d.init(F),w.push(d),q.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),S!==q&&S.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const Y=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const St=rt[pt];oe(St,q,O),Y.add(St)}else oe(rt,q,O),Y.add(rt)}),d=w.pop(),Y},this.compileAsync=function(S,F,q=null){const Y=this.compile(S,F,q);return new Promise(O=>{function rt(){if(Y.forEach(function(pt){At.get(pt).currentProgram.isReady()&&Y.delete(pt)}),Y.size===0){O(S);return}setTimeout(rt,10)}te.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let xn=null;function Fn(S){xn&&xn(S)}function sl(){ui.stop()}function rl(){ui.start()}const ui=new ru;ui.setAnimationLoop(Fn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){xn=S,nt.setAnimationLoop(S),S===null?ui.stop():ui.start()},nt.addEventListener("sessionstart",sl),nt.addEventListener("sessionend",rl),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(F),F=nt.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,F,P),d=ht.get(S,w.length),d.init(F),w.push(d),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(xt),Tt=this.localClippingEnabled,ot=Et.init(this.clippingPlanes,Tt),p=bt.get(S,b.length),p.init(),b.push(p),nt.enabled===!0&&nt.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&zr(rt,F,-1/0,M.sortObjects)}zr(S,F,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(Q,st),ce=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,ce&&et.addToRenderList(p,S),this.info.render.frame++,ot===!0&&Et.beginShadows();const q=d.state.shadowsArray;wt.render(q,S,F),ot===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,O=p.transmissive;if(d.setupLights(),F.isArrayCamera){const rt=F.cameras;if(O.length>0)for(let pt=0,St=rt.length;pt<St;pt++){const _t=rt[pt];al(Y,O,S,_t)}ce&&et.render(S);for(let pt=0,St=rt.length;pt<St;pt++){const _t=rt[pt];ol(p,S,_t,_t.viewport)}}else O.length>0&&al(Y,O,S,F),ce&&et.render(S),ol(p,S,F);P!==null&&T===0&&(kt.updateMultisampleRenderTarget(P),kt.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,F),Ot.resetDefaultState(),y=-1,x=null,w.pop(),w.length>0?(d=w[w.length-1],ot===!0&&Et.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function zr(S,F,q,Y){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){Y&&Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);const pt=j.update(S),St=S.material;St.visible&&p.push(S,pt,St,q,Pt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){const pt=j.update(S),St=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Pt.copy(pt.boundingSphere.center)),Pt.applyMatrix4(S.matrixWorld).applyMatrix4(xt)),Array.isArray(St)){const _t=pt.groups;for(let Ut=0,Ft=_t.length;Ut<Ft;Ut++){const Rt=_t[Ut],Yt=St[Rt.materialIndex];Yt&&Yt.visible&&p.push(S,pt,Yt,q,Pt.z,Rt)}}else St.visible&&p.push(S,pt,St,q,Pt.z,null)}}const rt=S.children;for(let pt=0,St=rt.length;pt<St;pt++)zr(rt[pt],F,q,Y)}function ol(S,F,q,Y){const O=S.opaque,rt=S.transmissive,pt=S.transparent;d.setupLightsView(q),ot===!0&&Et.setGlobalState(M.clippingPlanes,q),Y&&yt.viewport(R.copy(Y)),O.length>0&&Hs(O,F,q),rt.length>0&&Hs(rt,F,q),pt.length>0&&Hs(pt,F,q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function al(S,F,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new Pi(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Fs:Un,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const rt=d.state.transmissionRenderTarget[Y.id],pt=Y.viewport||R;rt.setSize(pt.z*M.transmissionResolutionScale,pt.w*M.transmissionResolutionScale);const St=M.getRenderTarget(),_t=M.getActiveCubeFace(),Ut=M.getActiveMipmapLevel();M.setRenderTarget(rt),M.getClearColor(k),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),ce&&et.render(q);const Ft=M.toneMapping;M.toneMapping=ri;const Rt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),ot===!0&&Et.setGlobalState(M.clippingPlanes,Y),Hs(S,q,Y),kt.updateMultisampleRenderTarget(rt),kt.updateRenderTargetMipmap(rt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ue=0,Le=F.length;ue<Le;ue++){const Se=F[ue],pe=Se.object,Ct=Se.geometry,Re=Se.material,ne=Se.group;if(Re.side===Tn&&pe.layers.test(Y.layers)){const ln=Re.side;Re.side=tn,Re.needsUpdate=!0,ll(pe,q,Y,Ct,Re,ne),Re.side=ln,Re.needsUpdate=!0,Yt=!0}}Yt===!0&&(kt.updateMultisampleRenderTarget(rt),kt.updateRenderTargetMipmap(rt))}M.setRenderTarget(St,_t,Ut),M.setClearColor(k,V),Rt!==void 0&&(Y.viewport=Rt),M.toneMapping=Ft}function Hs(S,F,q){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=S.length;O<rt;O++){const pt=S[O],St=pt.object,_t=pt.geometry,Ut=pt.group;let Ft=pt.material;Ft.allowOverride===!0&&Y!==null&&(Ft=Y),St.layers.test(q.layers)&&ll(St,F,q,_t,Ft,Ut)}}function ll(S,F,q,Y,O,rt){S.onBeforeRender(M,F,q,Y,O,rt),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(M,F,q,Y,S,rt),O.transparent===!0&&O.side===Tn&&O.forceSinglePass===!1?(O.side=tn,O.needsUpdate=!0,M.renderBufferDirect(q,F,Y,O,S,rt),O.side=ai,O.needsUpdate=!0,M.renderBufferDirect(q,F,Y,O,S,rt),O.side=Tn):M.renderBufferDirect(q,F,Y,O,S,rt),S.onAfterRender(M,F,q,Y,O,rt)}function Gs(S,F,q){F.isScene!==!0&&(F=_e);const Y=At.get(S),O=d.state.lights,rt=d.state.shadowsArray,pt=O.state.version,St=tt.getParameters(S,O.state,rt,F,q),_t=tt.getProgramCacheKey(St);let Ut=Y.programs;Y.environment=S.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(S.isMeshStandardMaterial?A:Ie).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Mt),Ut=new Map,Y.programs=Ut);let Ft=Ut.get(_t);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===pt)return ul(S,St),Ft}else St.uniforms=tt.getUniforms(S),S.onBeforeCompile(St,M),Ft=tt.acquireProgram(St,_t),Ut.set(_t,Ft),Y.uniforms=St.uniforms;const Rt=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Et.uniform),ul(S,St),Y.needsLights=Hu(S),Y.lightsStateVersion=pt,Y.needsLights&&(Rt.ambientLightColor.value=O.state.ambient,Rt.lightProbe.value=O.state.probe,Rt.directionalLights.value=O.state.directional,Rt.directionalLightShadows.value=O.state.directionalShadow,Rt.spotLights.value=O.state.spot,Rt.spotLightShadows.value=O.state.spotShadow,Rt.rectAreaLights.value=O.state.rectArea,Rt.ltc_1.value=O.state.rectAreaLTC1,Rt.ltc_2.value=O.state.rectAreaLTC2,Rt.pointLights.value=O.state.point,Rt.pointLightShadows.value=O.state.pointShadow,Rt.hemisphereLights.value=O.state.hemi,Rt.directionalShadowMap.value=O.state.directionalShadowMap,Rt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Rt.spotShadowMap.value=O.state.spotShadowMap,Rt.spotLightMatrix.value=O.state.spotLightMatrix,Rt.spotLightMap.value=O.state.spotLightMap,Rt.pointShadowMap.value=O.state.pointShadowMap,Rt.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function cl(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Sr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function ul(S,F){const q=At.get(S);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function zu(S,F,q,Y,O){F.isScene!==!0&&(F=_e),kt.resetTextureUnits();const rt=F.fog,pt=Y.isMeshStandardMaterial?F.environment:null,St=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,_t=(Y.isMeshStandardMaterial?A:Ie).get(Y.envMap||pt),Ut=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Rt=!!q.morphAttributes.position,Yt=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Le=ri;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Le=M.toneMapping);const Se=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=Se!==void 0?Se.length:0,Ct=At.get(Y),Re=d.state.lights;if(ot===!0&&(Tt===!0||S!==x)){const Je=S===x&&Y.id===y;Et.setState(Y,S,Je)}let ne=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Re.state.version||Ct.outputColorSpace!==St||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==_t||Y.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Et.numPlanes||Ct.numIntersection!==Et.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ft||Ct.morphTargets!==Rt||Ct.morphNormals!==Yt||Ct.morphColors!==ue||Ct.toneMapping!==Le||Ct.morphTargetsCount!==pe)&&(ne=!0):(ne=!0,Ct.__version=Y.version);let ln=Ct.currentProgram;ne===!0&&(ln=Gs(Y,F,O));let Ii=!1,cn=!1,ms=!1;const Ee=ln.getUniforms(),mn=Ct.uniforms;if(yt.useProgram(ln.program)&&(Ii=!0,cn=!0,ms=!0),Y.id!==y&&(y=Y.id,cn=!0),Ii||x!==S){yt.buffers.depth.getReversed()?(ft.copy(S.projectionMatrix),Ih(ft),Uh(ft),Ee.setValue(D,"projectionMatrix",ft)):Ee.setValue(D,"projectionMatrix",S.projectionMatrix),Ee.setValue(D,"viewMatrix",S.matrixWorldInverse);const nn=Ee.map.cameraPosition;nn!==void 0&&nn.setValue(D,qt.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,cn=!0,ms=!0)}if(O.isSkinnedMesh){Ee.setOptional(D,O,"bindMatrix"),Ee.setOptional(D,O,"bindMatrixInverse");const Je=O.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),Ee.setValue(D,"boneTexture",Je.boneTexture,kt))}O.isBatchedMesh&&(Ee.setOptional(D,O,"batchingTexture"),Ee.setValue(D,"batchingTexture",O._matricesTexture,kt),Ee.setOptional(D,O,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",O._indirectTexture,kt),Ee.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",O._colorsTexture,kt));const gn=q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&gt.update(O,q,ln),(cn||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,Ee.setValue(D,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mn.envMap.value=_t,mn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(mn.envMapIntensity.value=F.environmentIntensity),cn&&(Ee.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&ku(mn,ms),rt&&Y.fog===!0&&K.refreshFogUniforms(mn,rt),K.refreshMaterialUniforms(mn,Y,B,X,d.state.transmissionRenderTarget[S.id]),Sr.upload(D,cl(Ct),mn,kt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Sr.upload(D,cl(Ct),mn,kt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(D,"center",O.center),Ee.setValue(D,"modelViewMatrix",O.modelViewMatrix),Ee.setValue(D,"normalMatrix",O.normalMatrix),Ee.setValue(D,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Je=Y.uniformsGroups;for(let nn=0,kr=Je.length;nn<kr;nn++){const hi=Je[nn];I.update(hi,ln),I.bind(hi,ln)}}return ln}function ku(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Hu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,F,q){const Y=At.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),At.get(S.texture).__webglTexture=F,At.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const q=At.get(S);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0};const Gu=D.createFramebuffer();this.setRenderTarget=function(S,F=0,q=0){P=S,E=F,T=q;let Y=!0,O=null,rt=!1,pt=!1;if(S){const _t=At.get(S);if(_t.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(_t.__webglFramebuffer===void 0)kt.setupRenderTarget(S);else if(_t.__hasExternalTextures)kt.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(_t.__boundDepthTexture!==Rt){if(Rt!==null&&At.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Ft=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?O=Ft[F][q]:O=Ft[F],rt=!0):S.samples>0&&kt.useMultisampledRTT(S)===!1?O=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[q]:O=Ft,R.copy(S.viewport),W.copy(S.scissor),H=S.scissorTest}else R.copy(ut).multiplyScalar(B).floor(),W.copy(Nt).multiplyScalar(B).floor(),H=ee;if(q!==0&&(O=Gu),yt.bindFramebuffer(D.FRAMEBUFFER,O)&&Y&&yt.drawBuffers(S,O),yt.viewport(R),yt.scissor(W),yt.setScissorTest(H),rt){const _t=At.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_t.__webglTexture,q)}else if(pt){const _t=At.get(S.texture),Ut=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,q,Ut)}else if(S!==null&&q!==0){const _t=At.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(S,F,q,Y,O,rt,pt,St=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t){yt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const Ut=S.textures[St],Ft=Ut.format,Rt=Ut.type;if(!re.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-Y&&q>=0&&q<=S.height-O&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(F,q,Y,O,lt.convert(Ft),lt.convert(Rt),rt))}finally{const Ut=P!==null?At.get(P).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,F,q,Y,O,rt,pt,St=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(_t=_t[pt]),_t)if(F>=0&&F<=S.width-Y&&q>=0&&q<=S.height-O){yt.bindFramebuffer(D.FRAMEBUFFER,_t);const Ut=S.textures[St],Ft=Ut.format,Rt=Ut.type;if(!re.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St),D.readPixels(F,q,Y,O,lt.convert(Ft),lt.convert(Rt),0);const ue=P!==null?At.get(P).__webglFramebuffer:null;yt.bindFramebuffer(D.FRAMEBUFFER,ue);const Le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Dh(D,Le,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Yt),D.deleteSync(Le),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,q=0){const Y=Math.pow(2,-q),O=Math.floor(S.image.width*Y),rt=Math.floor(S.image.height*Y),pt=F!==null?F.x:0,St=F!==null?F.y:0;kt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,pt,St,O,rt),yt.unbindTexture()};const Vu=D.createFramebuffer(),Wu=D.createFramebuffer();this.copyTextureToTexture=function(S,F,q=null,Y=null,O=0,rt=null){rt===null&&(O!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=O,O=0):rt=0);let pt,St,_t,Ut,Ft,Rt,Yt,ue,Le;const Se=S.isCompressedTexture?S.mipmaps[rt]:S.image;if(q!==null)pt=q.max.x-q.min.x,St=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,Ft=q.min.y,Rt=q.isBox3?q.min.z:0;else{const gn=Math.pow(2,-O);pt=Math.floor(Se.width*gn),St=Math.floor(Se.height*gn),S.isDataArrayTexture?_t=Se.depth:S.isData3DTexture?_t=Math.floor(Se.depth*gn):_t=1,Ut=0,Ft=0,Rt=0}Y!==null?(Yt=Y.x,ue=Y.y,Le=Y.z):(Yt=0,ue=0,Le=0);const pe=lt.convert(F.format),Ct=lt.convert(F.type);let Re;F.isData3DTexture?(kt.setTexture3D(F,0),Re=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(kt.setTexture2DArray(F,0),Re=D.TEXTURE_2D_ARRAY):(kt.setTexture2D(F,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),ms=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ft),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const Ee=S.isDataArrayTexture||S.isData3DTexture,mn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const gn=At.get(S),Je=At.get(F),nn=At.get(gn.__renderTarget),kr=At.get(Je.__renderTarget);yt.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let hi=0;hi<_t;hi++)Ee&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(S).__webglTexture,O,Rt+hi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,At.get(F).__webglTexture,rt,Le+hi)),D.blitFramebuffer(Ut,Ft,pt,St,Yt,ue,pt,St,D.DEPTH_BUFFER_BIT,D.NEAREST);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||At.has(S)){const gn=At.get(S),Je=At.get(F);yt.bindFramebuffer(D.READ_FRAMEBUFFER,Vu),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wu);for(let nn=0;nn<_t;nn++)Ee?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,O,Rt+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,O),mn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Je.__webglTexture,rt,Le+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Je.__webglTexture,rt),O!==0?D.blitFramebuffer(Ut,Ft,pt,St,Yt,ue,pt,St,D.COLOR_BUFFER_BIT,D.NEAREST):mn?D.copyTexSubImage3D(Re,rt,Yt,ue,Le+nn,Ut,Ft,pt,St):D.copyTexSubImage2D(Re,rt,Yt,ue,Ut,Ft,pt,St);yt.bindFramebuffer(D.READ_FRAMEBUFFER,null),yt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Re,rt,Yt,ue,Le,pt,St,_t,pe,Ct,Se.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,rt,Yt,ue,Le,pt,St,_t,pe,Se.data):D.texSubImage3D(Re,rt,Yt,ue,Le,pt,St,_t,pe,Ct,Se):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,rt,Yt,ue,pt,St,pe,Ct,Se.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,rt,Yt,ue,Se.width,Se.height,pe,Se.data):D.texSubImage2D(D.TEXTURE_2D,rt,Yt,ue,pt,St,pe,Ct,Se);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ms),rt===0&&F.generateMipmaps&&D.generateMipmap(Re),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,F,q=null,Y=null,O=0){return Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,q,Y,O)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){E=0,T=0,P=null,yt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const ig=[{id:"H-001",night:1,segment:1,category:"OBJ",rule:"gaze",effect:"blood_trail",reveal:"…바닥의 검붉은 자국은, 원래 없던 것이었다."},{id:"H-002",night:2,segment:1,category:"OBJ",rule:"gaze",effect:"skull",reveal:"…배출장 위에 놓여 있던 것. 그건, 쓰레기가 아니었다."},{id:"H-003",night:2,segment:1,category:"HUM",rule:"avert",effect:"face_window",reveal:"…창문에서 내려다보던 얼굴. 그 집은, 빈집이다."},{id:"H-004",night:1,segment:2,category:"OBJ",rule:"gaze",effect:"handprints",reveal:"…세탁소 셔터의 손자국들은, 안쪽에서 찍힌 것이었다."},{id:"H-005",night:1,segment:3,category:"HUM",rule:"avert",effect:"swing_figure",reveal:"…그네에 앉아 있던 것은, 아이가 아니었다."},{id:"H-006",night:2,segment:3,category:"HUM",rule:"avert",effect:"eyes",reveal:"…펜스 뒤 어둠에서, 눈이 이쪽을 보고 있었다."},{id:"H-007",night:1,segment:4,category:"HUM",rule:"avert",effect:"bus_figure",reveal:"…정류장에 앉아 있던 사람. 버스는, 새벽에 안 다닌다."},{id:"H-008",night:1,segment:5,category:"OBJ",rule:"gaze",effect:"drag_mark",reveal:"…무언가를 끌고 간 자국이, 어둠 쪽으로 이어져 있었다."},{id:"H-009",night:2,segment:0,category:"HUM",rule:"avert",effect:"figure",reveal:"…등을 돌리고 서 있던 사람. 다시 봤을 때는, 없었다."},{id:"H-010",night:3,segment:1,category:"OBJ",rule:"gaze",effect:"shoes",reveal:"…계단 앞에 가지런히 놓인 신발은, 누구의 것도 아니었다."},{id:"H-011",night:3,segment:2,category:"LGT",rule:"gaze",effect:"shutter_glow",reveal:"…닫힌 셔터 밑에서 새어 나오던 빛은, 안에서 켠 것이었다."},{id:"H-012",night:3,segment:3,category:"HUM",rule:"avert",effect:"slide_figure",reveal:"…미끄럼틀 지붕 위에 서 있던 것은, 올라갈 수 없는 자리에 있었다."},{id:"H-015",night:3,segment:5,category:"OBJ",rule:"gaze",effect:"open_shutter",reveal:"…반쯤 올라간 셔터 안은, 불도 사람도 없었다."},{id:"H-016",night:4,segment:4,category:"OBJ",rule:"gaze",effect:"bench_shoes",reveal:"…벤치 위에 신발만 가지런히. 신고 갈 사람이, 없었다."},{id:"H-017",night:5,segment:2,category:"LGT",rule:"gaze",effect:"sign_lit",reveal:"…다 꺼진 상가에서, 그 간판 하나만 켜져 있었다."},{id:"H-013",night:4,segment:1,category:"HUM",rule:"avert",effect:"bike_figure",reveal:"…오토바이에 걸터앉아 있던 것은, 내가 지나갈 때까지 그대로였다."},{id:"H-014",night:4,segment:4,category:"HUM",rule:"avert",effect:"across_figure",reveal:"…길 건너에 서 있던 것은, 신호가 바뀌어도 건너지 않았다."},{id:"H-019",night:2,segment:2,category:"OBJ",rule:"gaze",effect:"lone_shadow",reveal:"…가로등 밑에, 그림자만 있었다. 그걸 만든 것은 없었다."},{id:"H-020",night:3,segment:3,category:"HUM",rule:"avert",effect:"fence_hands",reveal:"…펜스를 잡은 손이, 넷이었다."}],sg=[{night:1,onboarding:!0,intro:`튀김을 먹고 나왔다. 배가 부르다.
집까지 걸어가면 된다. 그것뿐이다.`,epilogue:`문을 잠갔다. 두 번 잠갔다.
…새로 생긴 가게가, 왜 24시간을 하지.`,beats:[{at:0,z:-13,text:"…생각보다, 어둡다."},{at:2,z:-15,text:`이 길이 맞나.
낮에는 걸어본 적이 없으니까.`},{at:-1,z:-17,text:`거의 다 왔다.
오늘은, 그냥 씻고 자야지.`}]},{night:2,onboarding:!1,intro:`두 번째 밤. 어제 걸었던 길이다.
…어제 걸었던 길이어야 한다.`,epilogue:`사장님이 "또 오셨네요" 했다.
두 번째인데, "또"라니.`,beats:[{at:0,z:-13,text:`어제도 이 길이었다.
어제는 좀 더 짧지 않았나.`},{at:2,z:-15,text:`편의점 문에 뭐가 붙어 있었는데.
…읽고 올걸.`},{at:-1,z:-17,text:`어제는 저 집에 불이 켜져 있었다.
오늘은 없다.`}]},{night:3,onboarding:!1,intro:`사장님이 "조심히 들어가세요" 했다.
…뭘 조심하라는 거지.`,epilogue:`도장 세 개.
…내가 안 간 날짜에, 하나 더 찍혀 있는 것 같다.`,pressure:{chanceBonus:.05},beats:[{at:0,z:-13,text:`가로등이 하나 나가 있다.
어제는 켜져 있었는데.`},{at:2,z:-15,text:`전단지에 적힌 번호가,
내 번호랑 두 자리만 달랐다.`},{at:-1,z:-17,text:`도장이 세 개다. 두 개 남았다.
남았다는 게, 왜 안심이 되지.`}]},{night:4,onboarding:!1,intro:`오늘은 안 오려고 했는데.
정신을 차려 보니 다 먹고 있었다. 이제, 집에 간다.`,epilogue:`주머니에 영수증이 두 장 들어 있다.
한 장은 오늘 날짜. 한 장은, 내일 날짜.`,pressure:{chanceBonus:.1,swarmFloor:1},beats:[{at:0,z:-13,text:`손에 봉투가 없다.
…언제 버렸지.`},{at:2,z:-15,text:`발이 먼저 간다.
이 길을 외운 게 내가 맞나.`},{at:-1,z:-17,text:`영수증이 두 장이었다.
한 장은, 내일 날짜였다.`}]},{night:5,onboarding:!1,intro:`마지막 도장을 찍었다.
이제 집에 가기만 하면 된다. 가기만 하면.`,epilogue:`도장을 다 채웠다. 칸이 꽉 찼다.
…이제, 안 가도 되는 거겠지.`,pressure:{chanceBonus:.15,swarmFloor:1},beats:[{at:0,z:-11,text:`사장님이 마지막으로 한 말이 걸린다.
…오늘은 좀 서둘러 가라고 했다.`},{at:2,z:-15,text:`오늘은 가는 게 아니라,
돌아오는 게 목표다.`},{at:-1,z:-17,text:`칸이 다 찼다. 이제 안 가도 된다.
…안 가도 되나.`}]}],$t={segments:5,segLength:36,corridorHalfWidth:3,walkSpeed:3.2,strafeFactor:.5,backFactor:.65,baseAnomalyChance:.4,chancePerMinute:.06,depthLimit:6,stretchDepthCost:2,swarmMax:2,stillGrowSec:4,stillDrainMul:.6,growDepthCost:1},ws=1.4,va=ig;function rg(n){const t=ci(n).pressure??{};return{chanceBonus:t.chanceBonus??0,swarmFloor:t.swarmFloor??0}}const uu=sg,ii=uu.length;function ci(n){return uu[Math.min(Math.max(n,1),ii)-1]}const Xt={nightLabel:n=>`밤 ${n}`,segNames:["원룸 골목","상가 골목","놀이터 옆길","정류장 앞","먹자골목 입구"],segLabel:(n,t,e)=>`${n}/${t} — ${Xt.segNames[e-1]}`,tutBeats:[{theme:4,z:0,text:"힘든 하루였다."},{theme:4,z:-11,text:"…저 앞에 현수막이 보인다."},{theme:4,z:-19,text:`FF-1204.
…XXXXL 감자튀김이다.`},{theme:4,z:-28.6,text:"…이건 못 참지."},{theme:5,z:-12,text:`먹자골목 입구.
현수막에 불이 비친다.`}],tutShopArrive:`FF-1204. 새 가게 냄새와 기름 냄새.
"어서오세요 — 첫 도장이시네요."`,tutShopBtn:"자리에서 먹고 간다",tutDusk:`맛있었다. 정신없이 먹었다.
…나와 보니, 깜깜하다.`,tutDuskBtn:"집으로 걷는다",nightOpen:n=>n>=5?`다섯 번째 밤. 도장 칸이 다 찼다.
마지막 한 입까지 먹고, 일어선다.`:`${n}번째 밤이다. 또 왔다.
튀김을 먹었다. 이제 집에 가야 한다.`,nightOpenBtn:"가게를 나선다",startBtnFirst:"퇴근하기!",startBtnResume:"가게를 나선다",homeArrive:`골목이 끝났다. 현관문이 보인다.
열쇠를 꺼내는 손이, 조금 떨린다.`,homeOpen:"문을 열고 들어간다",homeEnd:"불을 끄고 눕는다",homeSit:"신발을 벗는다",homeGauge:{crispy:"🏠 곧장 왔다",lukewarm:"🏠 조금 돌았다",soggy:"🏠 한참 걸렸다"},homeCrispy:`한 번도 멈추지 않고 왔다.
오늘 밤은, 이걸로 됐다.`,homeLukewarm:`몇 번인가, 같은 곳을 다시 걸었다.
…길이 좀, 길었으니까.`,homeSoggy:`한참을 헤맸다. 다리가 무겁다.
오늘 골목은, 유난히 길었다.`,hintMovePc:"W — 앞으로 · 마우스 — 둘러보기",hintMoveTouch:"버튼을 누르는 동안 걷습니다 · 화면을 쓸면 주변을 봅니다",carComing:`…빛이 온다.
이 시간에, 차가?`,carHitDay:"차에 치인 것 같은 꿈을 꿨다.",carHit:"차에 치인 것 같은 꿈을 꾼 것 같다.",turnedBack:`…돌아가려던 참이었는데.
어느새 다시, 이쪽을 보고 있다.`,stretchNotice:"…같은 골목이다. 걸어온 만큼, 늘어나 있다.",softFail:`…여기가 어디지.

정신을 차려 보니, 가게 앞이다.
걸어온 길이, 하나도 기억나지 않는다.`,softFailBtn:"…다시 걷는다",couponOverflow:"…여섯 번째 도장은, 칸 밖에 찍혀 있다."};function og(n){return n<=0?"crispy":n<=2?"lukewarm":"soggy"}function ag(n){return 1+Math.min($t.swarmMax,n)}const mc=2.4;class lg{constructor(t){this.yaw=0,this.pitch=0,this.touchForward=0,this.touchStrafe=0,this.keys=new Set,this.locked=!1,this.lookTouch=null,this.usesTouch=!1,this.canvas=t,window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas}),document.addEventListener("mousemove",e=>{this.locked&&this.applyLook(e.movementX,e.movementY)}),t.addEventListener("pointerdown",e=>this.onPointerDown(e)),t.addEventListener("pointermove",e=>this.onPointerMove(e)),t.addEventListener("pointerup",e=>this.onPointerEnd(e)),t.addEventListener("pointercancel",e=>this.onPointerEnd(e))}activate(){var t,e;this.usesTouch||(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}applyLook(t,e){this.yaw-=t*.0024,this.pitch-=e*.0024;const s=Math.PI/2-.05;this.pitch=Math.max(-s,Math.min(s,this.pitch))}onPointerDown(t){var e,i;if(t.pointerType==="mouse"){this.locked||(i=(e=this.canvas).requestPointerLock)==null||i.call(e);return}this.usesTouch=!0,this.lookTouch||(this.lookTouch={id:t.pointerId,x:t.clientX,y:t.clientY})}onPointerMove(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.applyLook((t.clientX-this.lookTouch.x)*mc,(t.clientY-this.lookTouch.y)*mc),this.lookTouch.x=t.clientX,this.lookTouch.y=t.clientY)}onPointerEnd(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.lookTouch=null)}isDown(t){return this.keys.has(t)}getMove(){let t=0,e=0;return(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.touchForward,e+=this.touchStrafe,{forward:Math.max(-1,Math.min(1,t)),strafe:Math.max(-1,Math.min(1,e))}}}class cg{constructor(){this.status=document.getElementById("status"),this.msg=document.getElementById("msg"),this.fade=document.getElementById("fade"),this.touchHint=document.getElementById("touch-hint"),this.msgTimer=0,this.hintTimer=0}setStatus(t){this.status.textContent=t}setStatusStretch(t){this.status.style.opacity="0",setTimeout(()=>{this.status.textContent=t,this.status.style.opacity="1"},320)}showHint(t,e){this.touchHint.textContent=t,this.touchHint.style.display="block",window.clearTimeout(this.hintTimer),e&&(this.hintTimer=window.setTimeout(()=>this.hideHint(),e))}hideHint(){this.touchHint.style.display="none"}say(t,e=2600){this.msg.textContent=t,this.msg.style.opacity="1",window.clearTimeout(this.msgTimer),this.msgTimer=window.setTimeout(()=>{this.msg.style.opacity="0"},e)}async fadeOut(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="1",await new Promise(e=>setTimeout(e,t+60))}async fadeIn(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="0",await new Promise(e=>setTimeout(e,t+60))}async arrivalScene(t){var a;(a=document.exitPointerLock)==null||a.call(document);const e=document.createElement("div");e.className="overlay",e.style.opacity="0",e.style.background=t.bg,e.style.transitionDuration="1.4s";const i=document.createElement("div");i.className="sub",i.textContent=t.gauge;const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.style.transition="opacity 1.1s",s.textContent=t.result;const r=document.createElement("button");r.textContent=t.steps[0],e.append(i,s,r),document.body.append(e),requestAnimationFrame(()=>e.style.opacity="1");let o=0;await new Promise(l=>{r.addEventListener("click",()=>{if(o>=2){l();return}if(t.onBite(o),o+=1,o<2){r.textContent=t.steps[1];return}r.disabled=!0,r.style.opacity="0.4",setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{s.textContent=t.epilogue,s.style.opacity="1",r.textContent=t.endLabel,r.disabled=!1,r.style.opacity=""},1150)},1400)})}),e.style.opacity="0",setTimeout(()=>e.remove(),1500)}async blackScreen(t,e){var o;(o=document.exitPointerLock)==null||o.call(document);const i=document.createElement("div");i.className="overlay",i.style.opacity="0",i.style.background="#000";const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.textContent=t;const r=document.createElement("button");r.textContent=e,i.append(s,r),document.body.append(i),requestAnimationFrame(()=>i.style.opacity="1"),await new Promise(a=>{r.addEventListener("click",()=>a(),{once:!0})}),i.style.opacity="0",setTimeout(()=>i.remove(),900)}}const ug="#05070e",hg="#0d1424",fg="#04060c",dg="#03050a",pg="#090d16",mg="#ffb23e";function gg(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function _g(n,t,e){const i=gg(12040);n.clearRect(0,0,t,e);const s=t*.5,r=e>t,o=e*(r?.62:.76),a=r?Math.max(t,e*.52):t,l=n.createLinearGradient(0,0,0,e);l.addColorStop(0,ug),l.addColorStop(.62,hg),l.addColorStop(1,"#070a12"),n.fillStyle=l,n.fillRect(0,0,t,e);const c=n.createRadialGradient(s,o,0,s,o,t*.62);c.addColorStop(0,"rgba(58,78,120,0.36)"),c.addColorStop(.45,"rgba(38,52,86,0.16)"),c.addColorStop(1,"rgba(20,28,48,0)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.fillStyle=pg,n.beginPath(),n.moveTo(0,e),n.lineTo(s-t*.055,o),n.lineTo(s+t*.055,o),n.lineTo(t,e),n.closePath(),n.fill();const u=9;for(const C of[-1,1])for(let E=0;E<u;E++){const T=E/u,P=(E+1)/u,y=X=>s+C*(t*.05+a*.62*Math.pow(1-X,1.7)),x=y(T),R=y(P),W=X=>o-e*(.62*Math.pow(1-X,1.25)+.02),H=(.5-i())*e*.1*(1-T),k=W(T)+H;n.fillStyle=C<0?fg:dg,n.fillRect(Math.min(x,R),k,Math.abs(R-x)+1,e-k);const V=Math.max(1,Math.round(2*(1-T)+1)),G=Math.max(1.5,(R-x)*C*.16);for(let X=0;X<V;X++){const B=x+(R-x)*((X+.5)/V);for(let Q=0;Q<4;Q++){const st=k+(e-k)*(.12+Q*.15);if(st>e*.95)break;const ut=i();n.fillStyle=ut>.9?"rgba(150,172,208,0.30)":"rgba(120,140,178,0.075)",n.fillRect(B-G/2,st,Math.abs(G),Math.abs(G)*1.3)}}}n.strokeStyle="rgba(2,3,7,0.92)",n.lineCap="butt";for(const C of[-1,1]){for(let E=0;E<4;E++){const T=.06+E*.21,P=s+C*(t*.05+a*.58*Math.pow(1-T,1.7)),y=o-e*(.6*Math.pow(1-T,1.15)+.05);n.lineWidth=Math.max(1,t*.0045*(1-T)+.8),n.beginPath(),n.moveTo(P,y),n.lineTo(P,e),n.stroke(),n.lineWidth=Math.max(.8,t*.003*(1-T)+.6),n.beginPath(),n.moveTo(P-t*.022*(1-T)-2,y+e*.018),n.lineTo(P+t*.022*(1-T)+2,y+e*.018),n.stroke()}for(let E=0;E<3;E++){const T=e*(.012+E*.016);n.lineWidth=Math.max(.6,t*.0012),n.beginPath();const P=s+C*(t*.05+a*.58),y=o-e*.6+T,x=s+C*t*.05,R=o-e*.09+T*.3;n.moveTo(P,y),n.quadraticCurveTo((P+x)/2,(y+R)/2+e*.05,x,R),n.stroke()}}const h=s+t*.2,f=o-e*.1,m=n.createRadialGradient(h,f,0,h,f,t*.16);m.addColorStop(0,"rgba(255,178,62,0.26)"),m.addColorStop(.35,"rgba(255,150,60,0.08)"),m.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=m,n.fillRect(h-t*.17,f-t*.17,t*.34,t*.34),n.fillStyle=mg,n.globalAlpha=.8,n.fillRect(h-t*.0035,f-e*.01,t*.007,e*.02),n.globalAlpha=1,n.fillStyle="#0b0f18",n.fillRect(h-t*.0013,f,t*.0026,e);const g=n.createRadialGradient(h,o+e*.12,0,h,o+e*.12,t*.11);g.addColorStop(0,"rgba(255,170,70,0.11)"),g.addColorStop(1,"rgba(255,170,70,0)"),n.fillStyle=g,n.fillRect(h-t*.12,o,t*.24,e*.3);const _=e*.075,p=h-t*.075,d=o+e*.055;n.fillStyle="#03050a",n.beginPath(),n.ellipse(p,d-_*.88,_*.13,_*.15,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(p-_*.19,d),n.lineTo(p-_*.15,d-_*.72),n.lineTo(p+_*.15,d-_*.72),n.lineTo(p+_*.19,d),n.closePath(),n.fill();const b=n.createRadialGradient(s,o-e*.02,0,s,o-e*.02,t*.14);b.addColorStop(0,"rgba(2,3,6,0.97)"),b.addColorStop(1,"rgba(2,3,6,0)"),n.fillStyle=b,n.fillRect(s-t*.16,o-e*.18,t*.32,e*.3);const w=n.createLinearGradient(0,0,0,e*.66);w.addColorStop(0,"rgba(4,6,12,0.62)"),w.addColorStop(.5,"rgba(4,6,12,0.44)"),w.addColorStop(1,"rgba(4,6,12,0)"),n.fillStyle=w,n.fillRect(0,0,t,e*.66);const M=n.createRadialGradient(s,o*.92,e*.16,s,o*.92,Math.max(t,e)*.78);M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(1,"rgba(0,0,0,0.84)"),n.fillStyle=M,n.fillRect(0,0,t,e),n.globalCompositeOperation="lighter",n.fillStyle="rgba(30,44,74,0.10)",n.fillRect(0,0,t,e),n.globalCompositeOperation="source-over"}function vg(){const n=document.getElementById("start");if(!n)return;const t=document.createElement("canvas");t.id="title-art",n.insertBefore(t,n.firstChild);const e=()=>{const r=Math.min(window.devicePixelRatio||1,1.5),o=n.clientWidth||window.innerWidth,a=n.clientHeight||window.innerHeight;t.width=Math.max(1,Math.round(o*r)),t.height=Math.max(1,Math.round(a*r));const l=t.getContext("2d");l&&(l.setTransform(r,0,0,r,0,0),_g(l,o,a))};e();let i;const s=()=>{window.clearTimeout(i),i=window.setTimeout(e,120)};window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}const gc=.9;class xg{constructor(){this.ctx=null,this.master=null,this.ambGain=null,this.stepTimer=0,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:gc,this.master.connect(t.destination);const e=t.createBufferSource();e.buffer=this.noiseBuffer(4),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=320;const s=t.createOscillator();s.frequency.value=.07;const r=t.createGain();r.gain.value=140,s.connect(r).connect(i.frequency),this.ambGain=t.createGain(),this.ambGain.gain.value=.05,e.connect(i).connect(this.ambGain).connect(this.master),e.start(),s.start()}suspend(){var t;(t=this.ctx)==null||t.suspend()}resume(){var t;(t=this.ctx)==null||t.resume()}setMuted(t){if(this.muted=t,!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(t?0:gc,e+.15)}duck(t){if(!this.ctx||!this.ambGain)return;const e=this.ctx.currentTime;this.ambGain.gain.cancelScheduledValues(e),this.ambGain.gain.setValueAtTime(this.ambGain.gain.value,e),this.ambGain.gain.linearRampToValueAtTime(t?.006:.05,e+2.2)}update(t,e){if(this.ctx){if(!e){this.stepTimer=.12;return}this.stepTimer-=t,this.stepTimer<=0&&(this.footstep(),this.stepTimer=.6)}}stretch(){const t=this.ctx;if(!t||!this.master)return;const e=t.currentTime,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(96,e),i.frequency.exponentialRampToValueAtTime(27,e+1.5);const s=t.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.1,e+.12),s.gain.exponentialRampToValueAtTime(1e-4,e+1.6),i.connect(s).connect(this.master),i.start(e),i.stop(e+1.7);const r=t.createBufferSource();r.buffer=this.noiseBuffer(1.4);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(700,e),o.frequency.linearRampToValueAtTime(140,e+1.3);const a=t.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.05,e+.35),a.gain.exponentialRampToValueAtTime(1e-4,e+1.35),r.connect(o).connect(a).connect(this.master),r.start(e),r.stop(e+1.45)}footstep(){const t=this.ctx;if(!t||!this.master)return;const e=t.createBufferSource();e.buffer=this.noiseBuffer(.08);const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=170+Math.random()*60,i.Q.value=1.2;const s=t.createGain(),r=t.currentTime;s.gain.setValueAtTime(.1,r),s.gain.exponentialRampToValueAtTime(.001,r+.09),e.connect(i).connect(s).connect(this.master),e.start(),e.stop(r+.1)}crunch(t){const e=this.ctx;if(!e||!this.master)return;const i=Math.max(0,Math.min(1,t)),s=i>.6?3:i>.3?2:1;for(let r=0;r<s;r++){const o=e.currentTime+r*.5,a=5+Math.floor(i*7);for(let l=0;l<a;l++){const c=e.createBufferSource();c.buffer=this.noiseBuffer(.03);const u=e.createBiquadFilter();u.type="highpass",u.frequency.value=1200+i*2500+Math.random()*800;const h=e.createGain(),f=o+l*(.028+Math.random()*.02);h.gain.setValueAtTime(1e-4,f),h.gain.exponentialRampToValueAtTime(.07+i*.06,f+.006),h.gain.exponentialRampToValueAtTime(.001,f+.03),c.connect(u).connect(h).connect(this.master),c.start(f),c.stop(f+.05)}}}carPass(t){const e=this.ctx;if(!e||!this.master)return;const i=e.currentTime,s=e.createBufferSource();s.buffer=this.noiseBuffer(t+.2);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(240,i),r.frequency.linearRampToValueAtTime(900,i+t*.45),r.frequency.linearRampToValueAtTime(220,i+t);const o=e.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.16,i+t*.45),o.gain.exponentialRampToValueAtTime(8e-4,i+t),s.connect(r).connect(o).connect(this.master),s.start(i),s.stop(i+t+.2)}noiseBuffer(t){const e=this.ctx,i=Math.max(1,Math.floor(e.sampleRate*t)),s=e.createBuffer(1,i,e.sampleRate),r=s.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;o=(o+.02*l)/1.02,r[a]=o*3.2}return s}}const Ae='"Malgun Gothic", "Apple SD Gothic Neo", sans-serif';function an(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const s=i.getContext("2d");e(s);const r=new Ur(i);return r.colorSpace=Ze,r.anisotropy=4,r}function _c(n){return an(256,352,t=>{t.fillStyle="#b3ad9c",t.fillRect(0,0,256,352),t.fillStyle="#2a2620",t.textAlign="center",t.font=`bold 46px ${Ae}`,t.fillText("과외",128,84),t.fillText("구합니다",128,140),t.font=`24px ${Ae}`,t.fillText("수학 · 영어 — 초·중등",128,196),t.font=`bold 31px ${Ae}`,t.fillText(n,128,268),t.strokeStyle="#6d675a",t.setLineDash([5,5]);for(let e=32;e<256;e+=32)t.beginPath(),t.moveTo(e,300),t.lineTo(e,352),t.stroke()})}function vc(n){return an(512,384,t=>{t.fillStyle="#0d1220",t.fillRect(0,0,512,384),t.strokeStyle="#2a3148",t.lineWidth=10,t.strokeRect(5,5,502,374),[["희망빌라 302",n?"급구":"월세 35"],["동아주택 B01","월세 30"],["한빛빌라 201","전세 8,500"],["성원빌라 402","월세 28"]].forEach(([i,s],r)=>{const o=28+r%2*240,a=32+Math.floor(r/2)*168;t.fillStyle="#c6c1b1",t.fillRect(o,a,216,140),t.textAlign="center",t.fillStyle="#33302a",t.font=`22px ${Ae}`,t.fillText(i,o+108,a+44),t.font=`bold 40px ${Ae}`,t.fillText(s,o+108,a+102)})})}function Mg(){return an(256,320,n=>{n.fillStyle="#0d1220",n.fillRect(0,0,256,320);const t=n.createRadialGradient(128,150,20,128,150,95);t.addColorStop(0,"rgba(214, 209, 192, 1)"),t.addColorStop(.72,"rgba(198, 192, 176, 0.95)"),t.addColorStop(1,"rgba(150, 145, 130, 0)"),n.fillStyle=t,n.beginPath(),n.ellipse(128,150,72,100,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(10, 12, 18, 0.9)";for(const e of[98,158])n.beginPath(),n.ellipse(e,128,11,16,0,0,Math.PI*2),n.fill()})}function Sg(){return an(1024,512,n=>{n.clearRect(0,0,1024,512);const t=[[190,260,.28,.85],[340,180,-.2,.7],[520,300,.5,.9],[660,210,-.4,.6],[810,290,.15,.8],[430,400,-.1,.5]];for(const[e,i,s,r]of t){n.save(),n.translate(e,i),n.rotate(s),n.fillStyle=`rgba(90, 15, 15, ${r})`,n.beginPath(),n.ellipse(0,0,38,50,0,0,Math.PI*2),n.fill();for(let o=0;o<5;o++){const a=-.7+o*.35;n.beginPath(),n.ellipse(Math.sin(a)*50,-Math.cos(a)*64,10,25,a,0,Math.PI*2),n.fill()}n.restore()}})}function yg(){return an(1024,176,e=>{e.fillStyle="#f4e7cd",e.fillRect(0,0,1024,176),e.fillStyle="#e6d4b2",e.fillRect(0,0,1024,9),e.fillRect(0,167,1024,9),e.fillStyle="#ffb23e",e.fillRect(0,12,1024,8),e.fillRect(0,156,1024,8),e.fillStyle="#ffb23e",e.fillRect(20,20,168,136);const i=104,s=176/2+6;e.fillStyle="#fff4dc";for(const[r,o,a]of[[-26,58,-.16],[-9,70,-.05],[8,66,.06],[25,54,.17]])e.save(),e.translate(i+r,s-28),e.rotate(a),e.fillRect(-7,-o/2,14,o),e.restore();e.fillStyle="#8a5a22",e.beginPath(),e.moveTo(i-40,s-20),e.lineTo(i+40,s-20),e.lineTo(i+30,s+40),e.lineTo(i-30,s+40),e.closePath(),e.fill(),e.fillStyle="#fff4dc",e.fillRect(i-34,s-2,68,9),e.textAlign="left",e.fillStyle="#3f2a14",e.font=`bold 72px ${Ae}`,e.fillText("XXXXL 감자튀김",210,176/2-2),e.font=`bold 44px ${Ae}`,e.fillStyle="#5a3c16",e.fillText("신장개업  FF-1204",214,176/2+48);for(const r of[26,998])for(const o of[24,152])e.fillStyle="#8b8577",e.beginPath(),e.arc(r,o,9,0,Math.PI*2),e.fill(),e.fillStyle="#4a4a48",e.beginPath(),e.arc(r,o,5,0,Math.PI*2),e.fill()})}function Eg(){return an(288,512,e=>{e.fillStyle="#ffb23e",e.fillRect(0,0,288,512),e.fillStyle="#f4e7cd",e.fillRect(0,0,288,74),e.fillRect(0,416,288,96);const i=288/2,s=300;e.fillStyle="#fff4dc";for(const[r,o,a]of[[-52,150,-.17],[-18,182,-.05],[18,172,.06],[52,140,.18]])e.save(),e.translate(i+r,s-78),e.rotate(a),e.fillRect(-16,-o/2,32,o),e.restore();e.fillStyle="#8a5a22",e.beginPath(),e.moveTo(i-86,s-58),e.lineTo(i+86,s-58),e.lineTo(i+64,s+92),e.lineTo(i-64,s+92),e.closePath(),e.fill(),e.fillStyle="#fff4dc",e.fillRect(i-74,s-6,148,20),e.textAlign="center",e.fillStyle="#3f2a14",e.font=`bold 46px ${Ae}`,e.fillText("XXXXL",288/2,52),e.font=`bold 40px ${Ae}`,e.fillText("감자튀김",288/2,460),e.font=`bold 24px ${Ae}`,e.fillStyle="#7a5a2c",e.fillText("FF-1204  신장개업",288/2,494)})}function Tg(){return an(288,512,e=>{e.fillStyle="#e9eaec",e.fillRect(0,0,288,512),e.strokeStyle="#9aa0a8",e.lineWidth=3,e.strokeRect(12,12,264,488),e.textAlign="center",e.fillStyle="#2b2f36",e.font=`bold 30px ${Ae}`,e.fillText("사람을 찾습니다",288/2,74),e.fillStyle="#6b7280",e.fillRect(40,96,208,3),e.fillStyle="#cfd3d8",e.fillRect(64,122,160,200),e.fillStyle="#9aa0a8",e.beginPath(),e.arc(288/2,208,40,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(288/2-62,322),e.quadraticCurveTo(288/2,244,288/2+62,322),e.closePath(),e.fill(),e.fillStyle="#3a4048",e.font=`bold 23px ${Ae}`,e.fillText("원룸 골목 일대",288/2,366),e.fillText("새벽 1시경 마지막 목격",288/2,400),e.fillStyle="#8b9098",e.font=`18px ${Ae}`,e.fillText("보신 분은 가까운 지구대로",288/2,438),e.fillStyle="#b9bec5";for(let i=0;i<3;i++)e.fillRect(52,458+i*11,184,4)})}function xc(){return an(192,48,n=>{n.fillStyle="#14161d",n.fillRect(0,0,192,48),n.textAlign="center",n.fillStyle="#d8b268",n.font=`bold 34px ${Ae}`,n.fillText("택시",96,36)})}function bg(n){return an(512,144,t=>{t.fillStyle="#140d05",t.fillRect(0,0,512,144),t.textAlign="center",t.fillStyle="#ffd9a0";const e=n.split(`
`);let i=e.length===1?60:46;t.font=`bold ${i}px ${Ae}`;const s=Math.max(...e.map(a=>t.measureText(a).width));s>470&&(i=Math.floor(i*470/s),t.font=`bold ${i}px ${Ae}`);const r=i*1.12,o=72-(e.length-1)*r/2;e.forEach((a,l)=>t.fillText(a,256,o+l*r+i*.4))})}function wg(){return an(512,256,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,256),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,240),n.textAlign="center",n.fillStyle="#9a8a6a",n.font=`34px ${Ae}`,n.fillText("영업시간",256,74),n.fillStyle="#ffd9a0",n.font=`bold 72px ${Ae}`,n.fillText("24시간",256,156),n.fillStyle="#9a8a6a",n.font=`32px ${Ae}`,n.fillText("연중무휴",256,210)})}function Ag(){return an(512,192,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,192),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#ffd9a0",n.font=`bold 34px ${Ae}`,n.fillText("감자튀김",28,54),n.font=`26px ${Ae}`,[["XXXXL","9,900"],["XXL","6,900"],["L","4,900"]].forEach(([e,i],s)=>{const r=96+s*34;n.fillStyle=s===0?"#ffd9a0":"#9a8a6a",n.fillText(e,40,r),n.textAlign="right",n.fillText(i,472,r),n.textAlign="left"})})}function Rg(){return an(256,320,n=>{n.fillStyle="#e8e0cc",n.fillRect(0,0,256,320),n.fillStyle="#33302a",n.textAlign="center",n.font=`bold 30px ${Ae}`,n.fillText("방문 도장",128,58),n.font=`20px ${Ae}`,n.fillText("오실 때마다",128,96),n.strokeStyle="#5c5648",n.lineWidth=3;for(let t=0;t<5;t++){const e=52+t%3*52,i=150+Math.floor(t/3)*62;n.beginPath(),n.arc(e,i,21,0,Math.PI*2),n.stroke()}n.font=`17px ${Ae}`,n.fillText("다섯 칸",128,292)})}function Cg(){return an(96,128,e=>{e.fillStyle="#6b7080",e.fillRect(0,0,96,128);const i=e.createLinearGradient(96*.34,0,96*.86,0);i.addColorStop(0,"#8f95a6"),i.addColorStop(.34,"#c3c8d4"),i.addColorStop(1,"#5b606e"),e.fillStyle=i,e.fillRect(96*.34,0,96*.52,128),e.fillStyle="#3f434e",e.fillRect(0,119,96,9),e.fillStyle="#9aa0ae",e.fillRect(96*.34,119,96*.52,4)})}function Pg(){return an(256,256,e=>{e.fillStyle="#f0d49a",e.fillRect(0,0,256,256);for(let i=0;i<7;i++)e.fillStyle=i%2?"#f7e2b8":"#e3c184",e.beginPath(),e.arc(i*79%256,i*113%256,46,0,Math.PI*2),e.fill();e.fillStyle="#3a2a1a";for(let i=1;i<9;i++)e.fillRect(i*(256/9)-4,0,8,256);for(let i=1;i<4;i++)e.fillRect(0,i*(256/4)-5,256,10);e.fillStyle="#2b1f13",e.lineWidth=0,e.fillRect(0,0,256,11),e.fillRect(0,245,256,11),e.fillRect(0,0,11,256),e.fillRect(245,0,11,256)})}function hu(n){var e;const t=((e=new Error().stack)==null?void 0:e.split(`
`))??[];for(const i of t.slice(1)){const s=/\/([\w.-]+\.ts)(?:\?[^:]*)?:(\d+):\d+/.exec(i);if(s&&s[1]!=="kit.ts"){n.userData.src=`${s[1]}:${s[2]}`;return}}}function Lg(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function As(n,t,e){const i=Lg(e),s=new Float32Array(t*t);for(let l=0;l<s.length;l++)s[l]=i();const r=new Float32Array(n*n),o=n/t,a=l=>l*l*(3-2*l);for(let l=0;l<n;l++){const c=l/o,u=Math.floor(c)%t,h=(u+1)%t,f=a(c-Math.floor(c));for(let m=0;m<n;m++){const g=m/o,_=Math.floor(g)%t,p=(_+1)%t,d=a(g-Math.floor(g)),b=s[u*t+_]+(s[u*t+p]-s[u*t+_])*d,w=s[h*t+_]+(s[h*t+p]-s[h*t+_])*d;r[l*n+m]=b+(w-b)*f}}return r}const Dg=256;function fu(n){const t=Dg,e=new Float32Array(t*t).fill(1);n(e,t);const i=document.createElement("canvas");i.width=i.height=t;const s=i.getContext("2d"),r=s.createImageData(t,t);for(let a=0;a<e.length;a++){const l=Math.max(0,Math.min(1,e[a]))*255;r.data[a*4]=r.data[a*4+1]=r.data[a*4+2]=l,r.data[a*4+3]=255}s.putImageData(r,0,0);const o=new Ur(i);return o.wrapS=o.wrapT=is,o.colorSpace=Ze,o}function Va(){return fu((n,t)=>{const e=As(t,8,7311),i=As(t,64,4409);for(let s=0;s<n.length;s++)n[s]=1-(e[s]-.5)*.15-(i[s]-.5)*.14})}function Wa(){return fu((n,t)=>{const e=As(t,6,1187),i=As(t,24,9041),s=As(t,48,2273);for(let r=0;r<t;r++)for(let o=0;o<t;o++){const a=r*t+o,l=i[r%8*t+o];n[a]=1-(e[a]-.5)*.12-(l-.5)*.09-(s[a]-.5)*.06}})}function Ig(){const e=document.createElement("canvas");e.width=512,e.height=256;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,"#8d92bd"),s.addColorStop(.16,"#a89cc0"),s.addColorStop(.3,"#c9a8bd"),s.addColorStop(.4,"#e0b0bd"),s.addColorStop(.47,"#eabfc0"),s.addColorStop(.52,"#e2b3a8"),s.addColorStop(1,"#b08b7a"),i.fillStyle=s,i.fillRect(0,0,512,256);const r=512*.75,o=256*.4,a=i.createRadialGradient(r,o,0,r,o,512*.19);a.addColorStop(0,"rgba(255, 244, 214, 0.95)"),a.addColorStop(.1,"rgba(255, 226, 172, 0.78)"),a.addColorStop(.3,"rgba(250, 196, 158, 0.38)"),a.addColorStop(.62,"rgba(238, 180, 168, 0.13)"),a.addColorStop(1,"rgba(230, 175, 175, 0)"),i.fillStyle=a,i.fillRect(0,0,512,256);const l=new Ur(e);return l.wrapS=is,l.wrapT=Vn,l.colorSpace=Ze,l}function Ug(){const e=document.createElement("canvas");e.width=512,e.height=256;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,"#4a86c8"),s.addColorStop(.3,"#63a0d8"),s.addColorStop(.44,"#86bce8"),s.addColorStop(.5,"#a8cfee"),s.addColorStop(1,"#cfe0ee"),i.fillStyle=s,i.fillRect(0,0,512,256),i.fillStyle="rgba(255, 255, 255, 0.5)";for(const[o,a,l,c]of[[.16,.16,.085,.02],[.3,.27,.055,.014],[.52,.13,.07,.017],[.93,.22,.06,.015]])i.beginPath(),i.ellipse(512*o,256*a,512*l,256*c,0,0,Math.PI*2),i.fill();const r=new Ur(e);return r.wrapS=is,r.wrapT=Vn,r.colorSpace=Ze,r}const Is=2.5,qn=3;function oi(n,t,e,i){const s=t.clone();s.needsUpdate=!0,s.repeat.set(e,i);const r=new It({color:n,roughness:.95,map:s});return r.userData.surface=!0,r}function ie(n,t,e,i,s,r,o,a){const l=new at(new Gt(n,t,e),new It({color:i,roughness:.95}));return l.position.set(s,r,o),hu(l),a.add(l),l}function U(n,t,e,i,s,r,o,a){const l=new at(new Gt(t,e,i),n);return l.position.set(s,r,o),hu(l),a.add(l),l}const mt=n=>new It({color:n,roughness:.95});function Ng(){return{blood:new It({color:7017492,roughness:.16,metalness:.25,emissive:3346190}),bloodWall:new It({color:1902345,roughness:.5}),darkFigure:new It({color:724502,roughness:1,flatShading:!0}),pale:new It({color:12169892,roughness:.9,emissive:1381391})}}const L=$t.segLength,$=$t.corridorHalfWidth,Ge=7,Te=-L*.68,vn=3.2,yo=-L*.585,Xa=9,Fg=3.5,du=6;function Us(n){return n%Xa<du}function Og(n){const t=n%Xa;return t>=Fg&&t<du}const xa=44,pu=3.8,Bg=18,zg=9,kg=4.6,Ve=9,We=3.4,mu=1.5,Hg=-36-Ve/2,Gg=[1.8,Ve/2],gu=12371672,qa=8160924,_u=3.2,Vg=16764829,Wg=7.5,Xg=6244134,qg=16777215,Yg=11054256,$g=16777215,Kg=11054256,Zg=4,jg=11,vu=Math.PI/2,Jg=0,xu=[[1.6,-L*.26],[-1.9,-L*.36],[2.1,-L*.49],[-1.4,-L*.58],[.9,-L*.71],[-2.1,-L*.81]],Mu=new N(-2.35,.28,-L*.46),Qg=new N(.5,.28,-L*.42),Ns=[26,20,14,9,5.5,3],Li=658970,Mc=.4,In=n=>[n+Mc,(n-Mc)/2],Rs=new N(0,1,-L/2),fr=28,Su=15713222,yu=14269629,Eu=10470632,Tu=13623278,t_=16774888,e_=4.2,n_=14674164,i_=2.8,ve=-L-6.6;function Sc(n=!1){const t=new Qt,e={road:mt(1580072),wall:mt(2304056),shutter:mt(2765123),tile:mt(7236190),steel:mt(9080470),dark:mt(1317154),awning:mt(8133922),wood:mt(4863271),woodDark:mt(3023129),stone:mt(5790300)},i=new It({color:16757310,emissive:16757310,emissiveIntensity:.55,roughness:.4}),s=Cg(),r=3093826,o=Pg(),a=new It({map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:.45,roughness:.92});U(e.road,12,.2,12,0,-.18,ve+3.4,t);const l=8,c=3.6,u=ve-c;U(e.tile,l,3.4,.2,0,1.7,u,t);for(const k of[-1,1])U(e.tile,.2,3.4,c,k*(l/2),1.7,ve-c/2,t);U(e.dark,l+.4,.25,c,0,3.5,ve-c/2,t),U(e.woodDark,l+.4,1.1,.4,0,3,ve,t);const h=new at(new we(l-.6,.86),a);h.position.set(0,3.02,ve+.21),t.add(h);for(const k of[-1,1]){const V=new at(new we(1.5,1.25),a);V.position.set(k*(l/2-.12),2.05,ve-c/2),V.rotation.y=-k*Math.PI/2,t.add(V)}U(e.steel,l-1,1.05,.7,0,.525,ve-.5,t),U(e.tile,l-.8,.08,.85,0,1.09,ve-.5,t),U(e.dark,.46,.05,.34,-1,1.16,ve-.42,t),U(e.dark,.46,.05,.34,-.45,1.16,ve-.55,t),U(e.tile,.3,.42,.22,1.15,1.34,ve-.5,t),U(e.steel,.11,.2,.11,1.62,1.23,ve-.44,t),U(e.steel,.11,.2,.11,1.8,1.23,ve-.48,t);for(const k of[-2.1,2.35]){U(e.steel,.36,.06,.36,k,.62,ve+.85,t);for(const V of[-1,1])U(e.steel,.05,.62,.05,k+V*.13,.31,ve+.85,t)}for(const k of[-1,1]){U(e.steel,1.25,.95,.85,k*1.5,1.5,u+.75,t);const V=new at(new Gt(1.02,.05,.62),i);V.position.set(k*1.5,1.99,u+.75),t.add(V),U(e.steel,.06,.5,.06,k*1.5,2.25,u+1.1,t),U(e.dark,.62,.07,.44,k*1.5,k>0?2.02:2.14,u+.72,t)}U(e.dark,3.6,.55,1.1,0,2.75,u+.75,t),U(e.dark,.6,.62,.6,0,3.28,u+.75,t);const f=new at(new we(2.7,1),new It({map:Ag(),roughness:.9}));f.position.set(-1.5,1.92,ve-.25),t.add(f);const m=new at(new we(1.15,.62),new It({map:wg(),roughness:.9}));m.position.set(1.85,1.92,ve-.25),t.add(m);const g=new at(new we(.72,.9),new It({map:Rg(),roughness:.95}));g.position.set(2.6,1.75,u+.11),t.add(g);for(const k of[2.15,2.62])U(e.steel,2.2,.06,.34,2.6,k,u+.28,t);const _=4.6,p=ve+3.4;for(const k of[-1,1]){U(e.wall,.5,7,7.6,k*_,3.5,p,t),U(e.shutter,.16,2.4,5.4,k*(_-.32),1.2,p,t);for(let V=0;V<4;V++)U(e.dark,.17,.05,5.4,k*(_-.32),.5+V*.55,p,t)}const d=6.1,b=ve-c/2,w=3.45,M=ve+2,C=8.6;U(e.dark,l+6,3,.6,0,4.5,b-1.2,t);const E=M-b,T=d-w,P=Math.atan2(T,E),y=oi(r,s,C/.34,Math.hypot(E,T)/.9),x=new at(new Gt(C,.34,Math.hypot(E,T)),[e.woodDark,e.woodDark,y,e.woodDark,e.woodDark,e.woodDark]);x.position.set(0,(w+d)/2,(M+b)/2),x.rotation.x=P,t.add(x);const R=2.6,W=1.8,H=new at(new Gt(C,.34,Math.hypot(R,W)),oi(r,s,C/.34,Math.hypot(R,W)/.9));H.position.set(0,d-W/2,b-R/2),H.rotation.x=-Math.atan2(W,R),t.add(H),U(e.woodDark,C+.1,.4,.66,0,d+.14,b,t);for(const k of[-1,1]){const V=U(e.woodDark,1.7,.3,.62,k*3.75,w-.02,M,t);V.rotation.z=k*.3}U(e.woodDark,C+.1,.22,.28,0,w-.1,M+.02,t);for(let k=0;k<9;k++){const V=U(e.wood,.17,.17,2.4,-3.6+k*.9,3.82,M-1,t);V.rotation.x=P}for(const k of[-1,1])U(e.stone,.46,.36,.46,k*3.85,.11,ve+.05,t),U(e.wood,.26,2.73,.26,k*3.85,1.65,ve+.05,t);if(U(e.wood,6.4,.16,1.3,0,0,ve+1.1,t),n){const k=bg(`감자튀김 전문점!!
ff-1204`),V=new It({color:16777215,map:k,emissiveMap:k,emissive:16777215}),G=mt(1314053),X=new at(new Gt(2.6,.72,.22),[G,G,G,G,V,G]);X.position.set(0,2.7,ve+1.57),t.add(X);const B=new Rn(16757310,20,26,2);B.position.set(0,3,ve+.6),t.add(B)}return t.visible=!1,t}const Oe=-L-6;function s_(){const n=new Qt,t={road:mt(1580072),wall:mt(2304056),villa:mt(2501694),trim:mt(2896452),door:mt(1119519),dark:mt(1317154),crate:mt(2765122)},e=new It({color:16767392,emissive:16762503,emissiveIntensity:1}),i=new It({color:6970434,emissive:16757310,emissiveIntensity:.35,roughness:.6}),s=new It({color:3814440,emissive:16757310,emissiveIntensity:.18}),r=4.6,o=Oe+3.4;U(t.road,12,.2,12,0,-.18,o,n);for(const u of[-1,1])U(t.wall,.5,7,7.6,u*r,3.5,o,n);const a=9;U(t.villa,a,7,.6,0,3.5,Oe-.3,n),U(t.trim,a+.6,.3,.9,0,7.1,Oe-.3,n),U(t.trim,3.4,.22,1.3,0,2.62,Oe+.45,n);for(const u of[-1,1])U(t.trim,.16,2.5,.16,u*1.5,1.25,Oe+.95,n);U(t.trim,2.3,2.5,.2,0,1.25,Oe+.02,n),U(t.door,1.6,2.2,.14,0,1.1,Oe+.1,n);const l=new at(new Gt(.44,1.05,.06),i);l.position.set(0,1.52,Oe+.17),n.add(l);for(const u of[1.16,1.52,1.88])U(t.door,.5,.05,.09,0,u,Oe+.19,n);U(t.trim,.46,.1,.26,0,2.53,Oe+.19,n);const c=new at(new Gt(.3,.11,.14),e);c.position.set(0,2.44,Oe+.17),n.add(c),U(t.trim,1,.55,.16,-1.75,1.35,Oe+.05,n);for(let u=0;u<3;u++)U(t.dark,.26,.34,.04,-2.05+u*.3,1.35,Oe+.14,n);return U(t.trim,.5,.26,.06,1.7,2.15,Oe+.03,n),[3.6,5.1,6.3].forEach((u,h)=>{U(t.dark,.9,1.1,.12,2.6,u,Oe+.02,n);const f=new at(new Gt(.8,1,.06),h===1?s:t.dark);f.position.set(-2.6,u,Oe+.02),n.add(f)}),U(t.trim,.85,.6,.4,3,4.4,Oe+.2,n),U(t.crate,1.7,.5,1,-3.3,.25,Oe+1.5,n),U(t.crate,.75,.36,.62,-3.5,.86,Oe+1.45,n),n.visible=!1,n}function dr(n,t,e){const i=new Map;return(s,r)=>{const o=`${s.toFixed(2)}|${r.toFixed(2)}`;let a=i.get(o);return a||(a=oi(n,t,s/e,r/e),i.set(o,a)),a}}function r_(){const n=Va(),t=Wa();return{wall:dr(2106938,t,qn),portal:dr(2304056,t,qn),deck:dr(1711915,t,qn),base:mt(1448741),trim:mt(2436157),girder:mt(1317154),groove:mt(1119517),road:dr(1580072,n,Is),fog:[.22,.32,.45,.6,.75].map(e=>new rs({color:263690,transparent:!0,opacity:e,depthWrite:!1,fog:!1,side:Tn}))}}let o_=null;const bu=()=>o_??(o_=r_());function yc(n,t,e,i,s){const r=new Qt,o=p=>n+t*p,a=mu,l=Ve/2,c=Ve+2,u=o(l+1);U(i.road(20,Ve+6),20,.2,Ve+6,0,-.1,o(l),r);for(const p of[2.2,4.4])U(i.groove,a*2+.6,.04,.08,0,.02,o(p),r);for(const p of[-1,1]){const d=p*(a+.45),[b,w]=In(We);U(i.wall(c,b),.9,b,c,d,w,u,r),U(i.base,1,.5,c,p*(a+.43),.25,u,r),U(i.trim,1,.14,c,p*(a+.43),We-.3,u,r);for(const M of[1.2,2.6,4,5.4])U(i.groove,.07,We-1,.09,p*(a-.02),(We+.5)/2,o(M),r);U(i.groove,.34,.06,c,p*(a-.17),.035,u,r)}U(i.deck(a*2+2,c),a*2+2,.9,c,0,We+.45,u,r);for(const p of[1,3,5,7])U(i.girder,a*2+1.2,.3,.4,0,We-.13,o(p),r);const h=.125;for(const p of[-1,1]){const[d,b]=In(We+.62);U(i.portal(.78,d),.78,d,.85,p*(a+.39),b,o(h),r)}U(i.portal(a*2+1.9,.62),a*2+1.9,.62,.9,0,We+.31,o(h),r),U(i.trim,a*2+2.4,.16,1.12,0,We+.7,o(h-.08),r);for(const p of[.1,Ve-.1])U(i.portal(20,.62),20,.62,.62,0,We+1,o(p),r),U(i.portal(20,1.15),20,1.15,.44,0,We+1.89,o(p),r);for(let p=-3.6;p<=3.61;p+=.9)U(i.trim,.16,.6,.3,p,We+2.76,o(.1),r);U(i.trim,20,.16,.38,0,We+3.14,o(.1),r);for(const p of Gg)U(i.girder,.44,.16,.24,0,We-.44,o(p),r),U(s,.3,.05,.15,0,We-.545,o(p),r);const f=new Rn(gu,_u,11,2);f.position.set(0,We-.7,o(l)),r.add(f),(t>0?[.9,1.7,2.6,3.6,4.6]:[3.2,4.2,5.2,6.4,7.8]).forEach((p,d)=>{const b=new at(new we(14,11),i.fog[d]);b.position.set(0,We/2,o(p)),r.add(b)});const[g,_]=In(Ge);return U(i.portal(20,g),20,g,1,0,_,o(Ve+e),r),{group:r,light:f}}function a_(n,t){const i=[[2.85,-L*.16],[-2.85,-L*.42],[2.85,-L*.63],[2.85,-L*.93]],[s,r]=In(9.4);for(const[f,m]of i){U(t.pole,.26,s,.26,f,r,m,n);const g=Math.sign(f);U(t.arm,1.5,.1,.1,f-g*.7,9.4-.75,m,n),U(t.arm,1.1,.09,.09,f-g*.5,9.4-1.5,m,n)}U(t.arm,.46,.72,.46,2.85-.5,9.4-2.7,-L*.63,n);const o=[],a=(f,m,g,_,p,d,b)=>{let M=f,C=m,E=g;for(let T=1;T<=6;T++){const P=T/6,y=f+(_-f)*P,x=g+(d-g)*P,R=m+(p-m)*P-b*4*P*(1-P);o.push(M,C,E,y,R,x),M=y,C=R,E=x}},l=9.4-.75,c=Ve+8;for(const[f,m]of[[-1.3,0],[-.7,-.06],[-.1,.02],[-.95,-.72]])a(2.85+f,l+m,-L*.16,2.85+f,l+m,-L*.63,.55),a(2.85+f,l+m,-L*.63,2.85+f,l+m,-L*.93,.36),a(2.85+f,l+m,-L*.16,2.85+f,l+m+.5,c,.9),a(2.85+f,l+m,-L*.93,2.85+f,l+m+.5,-L-c,.9);a(2.85-.7,l,-L*.16,-2.85+.7,l-.9,-L*.42,.7),a(2.85-.7,l-.75,-L*.63,-2.85+.7,l-1.5,-L*.42,.6),a(-2.85+.7,l-.9,-L*.42,2.85-.7,l-.4,-L*.93,.8),a(2.85-.7,l-1.5,-L*.63,3,4.6,-L*.52,.15),a(-2.85+.7,l-1.5,-L*.42,-3,4.2,-L*.34,.15);const u=new pn;u.setAttribute("position",new De(o,3));const h=new hf(u,new tu({color:1316381,transparent:!0,opacity:.92}));n.add(h)}function l_(n,t){n.background=new Kt(Li),n.fog=new Fa(Li,.044);const e=new _f(3752286,2.2);n.add(e);const i=new gf(8425664,.75);i.position.copy(Rs).add(new N(4,10,2)),i.target.position.copy(Rs),n.add(i),n.add(i.target);const s=i.shadow;s.camera.left=-fr,s.camera.right=fr,s.camera.top=fr,s.camera.bottom=-fr,s.camera.near=.5,s.camera.far=90,s.mapSize.set(2048,2048),s.bias=-25e-5,s.normalBias=0,i.castShadow=!1;const r=new Qt;n.add(r);const o=Ig(),a=Ug(),l=new at(new rn(80,24,16),new rs({map:a,side:tn,fog:!1,depthWrite:!1}));l.position.set(0,0,-L/2),l.renderOrder=-1,l.visible=!1,n.add(l);const c=Va(),u=Wa(),h=$*2+14,f=L+14;U(oi(1580072,c,h/Is,f/Is),h,.2,f,0,-.1,-L/2,r);const m=21.28,g=L+(Te-vn),[_,p]=In(Ge),d=(v,z)=>oi(v,u,z/qn,_/qn);for(const[v,z]of[[$+.5,2304056],[-$-.5,2106938]])U(d(z,m),1,_,m,v,p,-m/2,r),U(d(z,g),1,_,g,v,p,Te-vn-g/2,r);const b=new Qt;r.add(b),a_(b,{pole:mt(2830400),arm:mt(2304056)});const w=$-ws+1;for(const v of[-L-.5,.5])for(const z of[-1,1])ie(w,_,1,2304056,z*(ws+w/2),p,v,r);const M=bu(),C=new It({color:2830912,emissive:qa}),E=yc(-L,-1,4,M,C),T=yc(0,1,.6,M,C),P=E.group,y=T.group;r.add(y),r.add(P);const x=[E.light,T.light],R=-L*.45,W=new Qt;r.add(W);const H=ie(.15,5,.15,3817815,$-.4,2.5,R,W);ie(.62,.1,.1,3817815,$-.7,4.95,R,W);const V=ie(.5,.14,.26,2765122,$-.9,4.86,R,W).material;V.emissive.setHex(3811858);const G=new Rn(16762503,22,18,1.8);G.position.set($-.9,4.8,R),W.add(G);const X=new Rn(16757310,0,26,2);X.position.set(0,3,-L-6),r.add(X);const B=new Qt,Q=new at(new Gt(.46,1.22,.28),t.darkFigure);Q.position.y=.9;const st=new at(new rn(.15,10,8),t.darkFigure);st.position.y=1.66;for(const v of[-.27,.27]){const z=new at(new Gt(.09,.14,.1),t.pale);z.position.set(v,.74,.02),B.add(z)}const ut=new at(new Gt(.15,.1,.1),t.pale);ut.position.set(0,1.5,-.02),B.add(ut),B.add(Q,st),B.visible=!1,r.add(B);const Nt=new at(new ka(.42,.5,24),new rs({color:9146536,transparent:!0,opacity:.32}));Nt.rotation.x=-Math.PI/2,Nt.position.set(.9,.03,-5.5),Nt.visible=!1,r.add(Nt);const ee=yg(),Z=new It({color:16777215,map:ee,emissiveMap:ee,emissive:0}),ot=5.6,Tt=.96,ft=new we(ot,Tt,12,2),xt=ft.attributes.position;for(let v=0;v<xt.count;v++){const z=xt.getX(v)/(ot/2);xt.setY(v,xt.getY(v)-(1-z*z)*.13),xt.setZ(v,xt.getZ(v)+(1-z*z)*.05)}ft.computeVertexNormals(),Z.shadowSide=Tn;const qt=new at(ft,Z);qt.position.set(0,4.6,-L+.45),r.add(qt);for(const v of[-1,1])U(mt(1316637),.04,.04,.55,v*(ot/2),5.05,-L+.45,r);const Pt=Sc(),_e=s_();r.add(Pt,_e);const ce=Sc(!0);ce.rotation.y=Math.PI,ce.position.z=-L,r.add(ce);const Bt=new Qt,D={roughness:.26,metalness:.15},ke=new at(new Gt(4.1,.95,1.75),new It({color:987154,...D}));ke.position.y=.72;const te=new at(new Gt(2.1,.62,1.6),new It({color:789775,...D}));te.position.set(-.25,1.45,0),Bt.add(ke,te);const re=new at(new Gt(2.16,.3,1.64),new It({color:592396,roughness:.1,metalness:.2}));re.position.set(-.25,1.3,0),Bt.add(re);const yt=new It({color:12172999,roughness:.18,metalness:.5});for(const v of[-.83,.83])U(yt,2.16,.045,.03,-.25,1.15,v,Bt);const jt=new It({map:xc(),emissiveMap:xc(),emissive:0,roughness:.6}),At=new at(new Gt(.62,.17,.3),jt);At.position.set(-.25,1.85,0),Bt.add(At);const kt=new It({color:10125641,roughness:.3,metalness:.45});for(const v of[-.88,.88])U(kt,3.5,.07,.03,0,.62,v,Bt);const Ie=new It({color:16774872,emissive:16773320});for(const v of[-.6,.6]){const z=new at(new Gt(.14,.22,.3),Ie);z.position.set(2.02,.78,v),Bt.add(z)}const A=new Rn(16771512,0,16,2);return A.position.set(2.6,.9,0),Bt.add(A),Bt.position.set(0,0,Te),Bt.visible=!1,r.add(Bt),{refs:{group:r,scene:n,moon:i,skyDome:l,skyAfternoon:a,skyDusk:o,tunnel:P,backTunnel:y,tunnelLights:x,tunnelLampMat:C,car:Bt,carLight:A,carSignMat:jt,ambient:e,stretchMark:Nt,lamp:W,lampLight:G,lampHeadMat:V,poles:b,shopGlow:X,banner:qt,bannerMat:Z,shopFront:Pt,homeFront:_e,shopBack:ce,figure:B},hit:{lamp_flicker:[H],shop_typo:[qt],figure:[B]}}}function c_(n,t){const e=bu(),i=vn,s=kg,r=zg,o=_=>n*(Bg+_),a=o(r/2+1),[l,c]=In(s),[u,h]=In(s+.62),[f,m]=In(Ge);for(const _ of[-1,1])U(e.wall(r+2,l),r+2,l,.9,a,c,Te+_*(i+.45),t),U(e.base,r+2,.5,1,a,.25,Te+_*(i+.43),t);U(e.deck(r+2,i*2+2),r+2,.9,i*2+2,a,s+.45,Te,t);for(const _ of[1.4,4])U(e.girder,.4,.3,i*2+1.2,o(_),s-.13,Te,t);for(const _ of[-1,1])U(e.portal(.78,u),.85,u,.78,o(.1),h,Te+_*(i+.39),t);U(e.portal(i*2+1.9,.62),.9,.62,i*2+1.9,o(.1),s+.31,Te,t),U(e.trim,1.12,.16,i*2+2.4,o(.02),s+.7,Te,t);const g=new It({color:2830912,emissive:qa});U(e.girder,.24,.16,.5,o(1.5),s-.44,Te,t),U(g,.17,.05,.38,o(1.5),s-.55,Te,t),U(e.portal(i*2+2,Ge-(s+.9)),1,Ge-(s+.9),i*2+2,o(.5),(s+.9+Ge)/2,Te,t),[1.2,2.4,3.8,5.4,7].forEach((_,p)=>{const d=new at(new we(i*2+1,s+.8),e.fog[p]);d.position.set(o(_),s/2,Te),d.rotation.y=Math.PI/2,t.add(d)}),U(e.portal(i*2+2,f),1,f,i*2+2,o(r+2),m,Te,t)}function u_(n){const[t,e]=In(Ge);ie(1,t,vn*2,2304056,$+.5,e,Te,n),ie(1,t,vn*2,2106938,-$-.5,e,Te,n)}function h_(n){const t=new Qt,e={pipe:mt(4079944),meter:mt(3158585),dark:mt(1315864),prop:mt(2763826),paper:mt(4868686),bin:mt(3092535),binTop:mt(2763825),ac:mt(3026998),sensor:mt(2105895),wire:mt(1250327)},i=new Qt,s=[[2.05,-L*.455,.34],[1.5,-L*.45,.28],[.95,-L*.443,.3],[.4,-L*.432,.24],[-.15,-L*.425,.27],[-.75,-L*.415,.2],[-1.35,-L*.408,.23],[-1.9,-L*.4,.15]];for(const[B,Q,st]of s){const ut=new at(new zs(st,14),n.blood);ut.rotation.x=-Math.PI/2,ut.position.set(B,.015,Q),i.add(ut)}const r=new at(new we(2,2.5),n.bloodWall);r.position.set($-.06,1.15,-L*.458),r.rotation.y=-Math.PI/2,i.add(r),i.visible=!1,t.add(i);const o=new Qt,a=new It({color:14077884,roughness:.85,emissive:1512976,flatShading:!0}),l=new at(new rn(.17,12,10),a);l.position.y=.14,l.scale.set(1,.92,1.08);const c=new at(new Gt(.2,.09,.16),a);c.position.set(0,-.02,.04);const u=new It({color:658450,roughness:1,flatShading:!0});for(const B of[-.062,.062]){const Q=new at(new rn(.042,8,6),u);Q.position.set(B,.15,.145),o.add(Q)}o.add(l,c),o.position.set(-$+.8,1.06,-L*.33),o.scale.setScalar(1.38),o.rotation.y=Math.PI/6,o.visible=!1,t.add(o);const h=Mg(),f=new at(new we(1,1.28),new It({map:h,emissiveMap:h,emissive:4867644}));f.position.set($-.03,3.4,-L*.68),f.rotation.y=-Math.PI/2,f.visible=!1,t.add(f),U(e.bin,1.6,.5,1,-$+1,.25,-L*.34,t),U(e.binTop,.7,.35,.6,-$+.8,.85,-L*.33,t);const m=new Qt,g=ie(.06,1.3,.06,5593968,0,.65,0,m);g.rotation.z=.5;const _=new at(new za(.55,.5,8),new It({color:7017760,roughness:.8,flatShading:!0}));_.position.set(-.35,1.35,0),_.rotation.z=.5,m.add(_),m.position.set(-$+1.8,0,-L*.38),m.visible=!1,t.add(m);const p=U(e.sensor,.45,.22,.16,-$+.12,1.7,-L*.3,t),d=p.material,b=new Rn(15260080,0,6,1.8);b.position.set(-$+.5,1.7,-L*.3),t.add(b);const w=new at(new we(1.1,1.4),new It({color:1119263,emissive:0}));w.position.set($-.02,3.4,-L*.68),w.rotation.y=-Math.PI/2,t.add(w);const M=w.material,C=[_c("010-4172-8956"),_c("010-417-8956")],E=new It({map:C[0],roughness:.9}),T=new at(new we(.55,.75),E);T.position.set($-.01,1.55,-L*.4),T.rotation.y=-Math.PI/2,t.add(T),U(e.meter,.24,6.8,.24,$-.35,3.4,-L*.15,t),U(e.meter,.24,6.8,.24,-$+.35,3.4,-L*.72,t),U(e.wire,.035,.035,L*.85,$-.35,6.3,-L*.5,t);const P=$-.35-(-$+.35),y=-L*.15- -L*.72,x=U(e.wire,.035,.035,Math.hypot(P,y),0,6,(-L*.15+-L*.72)/2,t);x.rotation.y=Math.atan2(P,y),U(e.ac,.85,.6,.38,$-.35,2.5,-L*.58,t),U(e.ac,.85,.6,.38,-$+.35,2.2,-L*.33,t),U(e.dark,.12,2.4,1.5,-$+.05,1.2,-L*.22,t),U(e.meter,.2,.16,1.9,-$+.1,2.5,-L*.22,t);const R=.14,W=(B,Q,st)=>{const ut=B*($-R*1.15);U(e.pipe,R,5.2,R,ut,2.6,Q,t);for(const ee of[1.35,3.1,4.6])U(e.meter,R*.6,R*1.5,R*2.2,B*($-R*.4),ee,Q,t);if(st===0)return;const Nt=Q+st/2;U(e.pipe,R*.72,R*.72,Math.abs(st),ut,2.9,Nt,t),U(e.pipe,R,R,R,ut,2.9,Q,t),U(e.pipe,R*.72,1.15,R*.72,ut,2.32,Q+st,t),U(e.meter,R*1.3,.5,.42,B*($-R),1.6,Q+st,t)};W(-1,-L*.52,-L*.15),W(1,-L*.24,-L*.14),W(-1,-L*.82,0),U(e.dark,.12,2.4,1.5,$-.05,1.2,-L*.86,t),U(e.meter,.2,.16,1.9,$-.1,2.5,-L*.86,t),U(e.meter,.16,.6,.9,$-.12,1.7,-L*.78,t);for(let B=0;B<4;B++)U(e.prop,.14,.26,.22,$-.14,1.45,-L*.75+B*.28,t);U(e.meter,.16,.55,.8,-$+.12,1.75,-L*.29,t),U(e.prop,.42,.55,1.5,$-.42,.42,-L*.66,t),U(e.prop,.3,.35,.3,$-.42,.9,-L*.62,t),U(e.prop,.5,.42,.5,-$+.35,.21,-L*.62,t),U(e.prop,.45,.38,.45,-$+.38,.6,-L*.63,t);for(const[B,Q,st]of[[-1,-L*.72,1.5],[1,-L*.48,1.35],[-1,-L*.46,1.9]])U(e.paper,.02,.34,.24,B*($-.02),st,Q,t);const H=new Qt;for(const B of[-.11,.11]){const Q=U(mt(14210248),.24,.11,.34,0,.055,0,H);Q.position.x=B}H.position.set($-.55,0,-L*.86+.15),H.visible=!1,t.add(H);const k=new Qt,V=new at(new Gt(.4,.72,.26),n.darkFigure);V.position.y=1.24;const G=new at(new rn(.14,10,8),n.darkFigure);G.position.set(0,1.74,.02);const X=new at(new Gt(.34,.5,.5),n.darkFigure);X.position.set(0,.78,.24);for(const B of[-.17,.17]){const Q=new at(new Gt(.1,.11,.15),n.pale);Q.position.set(B,1.16,.3),k.add(Q)}return k.add(V,G,X),k.position.set($-.42,0,-L*.655),k.visible=!1,t.add(k),{group:t,refs:{umbrella:m,sensorMat:d,sensorLight:b,windowMat:M,flyerMat:E,flyerTex:C,bloodTrail:i,skull:o,facePlane:f,shoes:H,bikeFigure:k},hit:{umbrella:[m],sensor_on:[p],window_red:[w],flyer_digits:[T],blood_trail:[i],skull:[o],face_window:[f],shoes:[H],bike_figure:[k]}}}function f_(){const n=new Qt,t=ie(.08,2,2.6,1316900,$-.06,1.25,-L*.39,n),e=t.material,i=ie(.12,2.2,2.7,2830916,$-.18,1.25,-L*.39,n),s=new Rn(13623528,0,8,1.8);s.position.set($-.9,1.3,-L*.39),n.add(s);const r=new at(new we(2.4,1.7),new It({map:Sg(),transparent:!0,roughness:1}));r.position.set($-.25,1.25,-L*.39),r.rotation.y=-Math.PI/2,r.visible=!1,n.add(r);const o=ie(1.7,.65,.14,1975348,$-.1,3.2,-L*.5,n),a=o.material;ie(1.5,.6,.14,1843504,$-.1,3.4,-L*.29,n),ie(1.9,.7,.14,2106938,$-.1,3.1,-L*.62,n);const l=[vc(!1),vc(!0)],c=new It({map:l[0],roughness:.85}),u=new at(new we(1.5,1.1),c);u.position.set(-$+.01,1.5,-L*.5),u.rotation.y=Math.PI/2,n.add(u);const h={shutter:mt(2895668),slat:mt(1842722),awning:mt(2500653),awningUnder:mt(9080728),curb:mt(2369067),sign:mt(2171945),steel:mt(3487807),prop:mt(2566704),dark:mt(1710879)},f=2.3,m=[[-1,-L*.3],[-1,-L*.68],[-1,-L*.86],[1,-L*.19],[1,-L*.76]];for(const[V,G]of m){const X=V*($-.1);U(h.shutter,.12,2.1,f,X,1.15,G,n);for(let st=0;st<4;st++)U(h.slat,.13,.05,f,X,.45+st*.5,G,n);const B=U(h.awning,.85,.07,f+.2,V*($-.5),2.65,G,n);B.rotation.z=V*.3;const Q=U(h.awningUnder,.78,.03,f+.12,V*($-.5),2.61,G,n);Q.rotation.z=V*.3,U(h.awning,.06,.18,f+.2,V*($-.88),2.5,G,n);for(const st of[-1,1])U(h.steel,.04,.62,.04,V*($-.86),2.92,G+st*(f/2-.1),n);U(h.sign,.14,.5,f-.3,V*($-.12),3.05,G,n)}const g=-L*.68,_=new It({color:1119260,roughness:1}),p=new at(new we(1.7,2),_);p.rotation.x=-Math.PI/2,p.position.set(-1.45,.02,g),n.add(p);const d=new It({color:1119260}),b=new at(new Gt(.06,.1,2.1),d);b.position.set(-2.7,.18,g),n.add(b);const w=new Rn(16769192,0,6.5,2);w.position.set(-2.1,.5,g),n.add(w);const M=(V,G,X)=>U(h.curb,.55,.14,X+1.5,V*($-.28),.07,G,n);for(const[V,G]of m)M(V,G,f);M(1,-L*.39,2.7);const C=-L*.91,E=$-.19;U(h.shutter,.38,1.9,1.05,E,.95,C,n),U(h.steel,.4,.06,1.11,E,1.93,C,n);const T=new It({color:7240326,roughness:.5});T.emissive.setHex(8228512),U(T,.05,.92,.86,E-.2,1.24,C,n);for(let V=0;V<3;V++)for(let G=0;G<2;G++)U(h.dark,.03,.2,.16,E-.23,1.5-G*.44,C-.26+V*.26,n);U(h.dark,.06,.22,.66,E-.19,.42,C,n);const P=new Rn(11059416,3.4,5.5,2);P.position.set(E-.75,1.3,C),n.add(P),U(h.dark,.9,.3,1.8,-$+.55,.02,-L*.44,n);for(const V of[-L*.41,-L*.47])U(h.steel,.06,.9,.06,-$+1,.45,V,n);U(h.steel,.06,.06,1.3,-$+1,.88,-L*.44,n);for(const[V,G]of[[1,-L*.42],[1,-L*.58],[-1,-L*.55]])U(h.prop,.5,.42,.8,V*($-.28),1.9,G,n);U(h.steel,.16,4.6,.16,$-.2,2.3,-L*.35,n),U(h.steel,.12,.12,L*.4,$-.2,2.55,-L*.55,n);const y=U(h.prop,.16,1,.7,-$+.32,.5,-L*.24,n);y.rotation.z=-.12;for(const[V,G]of[[-L*.63,.34],[-L*.66,.28]])U(h.prop,.42,G,.6,-$+.34,G/2,V,n);const x=new Qt,R=new rs({color:263691}),W=new at(new we(2.7,.98),R);W.rotation.x=-Math.PI/2,W.position.set(.75,.02,-L*.45);const H=new at(new zs(.42,16),R);H.rotation.x=-Math.PI/2,H.position.set(-.78,.02,-L*.45);const k=new at(new we(1.25,.34),R);return k.rotation.x=-Math.PI/2,k.rotation.z=-.55,k.position.set(.7,.02,-L*.417),x.add(W,H,k),x.visible=!1,n.add(x),{group:n,refs:{laundryShutter:i,laundryMat:e,laundryLight:s,storeSignMat:a,realtyMat:c,realtyTex:l,handprints:r,shutterGlowMat:_,shutterGlowSlitMat:d,shutterGlowLight:w,loneShadow:x},hit:{laundry_open:[i,t],sign_lit:[o],realty_urgent:[u],handprints:[r],shutter_glow:[p,b],lone_shadow:[x]}}}function d_(n){const t=new Qt,e={fence:mt(3356221),rail:mt(4211788),swing:mt(4079944),rope:mt(5658978),gear:mt(2895669),play:mt(5659492),wall2:mt(2171688),dark:mt(1645086),prop:mt(2632240)};for(const E of[-L*.32,-L*.375,-L*.43,-L*.485])U(e.fence,.07,.85,1.7,-$+.85,.45,E,t);U(e.swing,.1,2.3,.1,-$+.22,1.15,-L*.365,t),U(e.swing,.1,2.3,.1,-$+.22,1.15,-L*.42,t),U(e.swing,.08,.08,2.2,-$+.22,2.3,-L*.393,t);const i=new Qt;i.position.set(-$+.22,2.26,-L*.393),U(e.rope,.03,1.5,.03,0,-.75,-.22,i),U(e.rope,.03,1.5,.03,0,-.75,.22,i),U(e.rope,.14,.06,.55,0,-1.5,0,i),t.add(i);const s=new at(new rn(.28,12,10),new It({color:7173256,roughness:.85,flatShading:!0}));s.position.copy(Mu),t.add(s);const r=new Qt,o=new at(new Gt(.4,.62,.26),n.darkFigure);o.position.y=1.12;const a=new at(new rn(.13,10,8),n.darkFigure);a.position.set(.05,1.56,0);const l=new at(new Gt(.34,.52,.16),n.darkFigure);l.position.set(.2,.56,0),l.rotation.z=.25;for(const E of[-.19,.19]){const T=new at(new Gt(.09,.13,.1),n.pale);T.position.set(E,1.3,.02),r.add(T)}r.add(o,a,l),r.position.set(-$+.22,0,-L*.393),r.visible=!1,t.add(r);const c=new Qt,u=new It({color:724502,emissive:9410220,emissiveIntensity:.9,flatShading:!0});for(const E of[-.09,.09]){const T=new at(new rn(.045,8,6),u);T.position.x=E,c.add(T)}c.position.set(-$+.38,1.42,-L*.55),c.visible=!1,t.add(c);const h=new It({color:1514015,roughness:1,flatShading:!0});for(const[E,T]of[[-L*.25,1.6],[-L*.42,2],[-L*.58,1.5],[-L*.78,1.8]]){const P=new at(new rn(1,7,5),h);P.scale.set(T,T*.75,T),P.position.set(-$-.9,Ge+1.1,E),t.add(P)}const f=new It({color:3093306,roughness:.6,emissive:3491946}),m=(E,T,P)=>{const y=U(e.gear,.13,4.6,.13,-$-1.7,2.3,E,t);y.name="놀이터 보안등";const x=new at(new Gt(.44,.18,.44),f);x.position.set(-$-1.7,4.55,E),t.add(x);const R=new Rn(10467032,T,P,2);R.position.set(-$-1.4,4.2,E),t.add(R)};m(-L*.5,6.5,12),m(-L*.78,4.2,9);const g=-$-.55;U(e.play,.12,3,.12,g,Ge+1.5,-L*.34,t),U(e.play,1.5,.12,.9,g-.6,Ge+3,-L*.34,t);const _=U(e.play,2.4,.1,.66,g-1.5,Ge+1.7,-L*.34,t);_.rotation.z=.52;for(let E=0;E<4;E++)U(e.play,.5,.07,.07,g+.3,Ge+.6+E*.55,-L*.34,t);const p=new Qt,d=new at(new Gt(.42,1.2,.26),n.darkFigure);d.position.y=.6;const b=new at(new rn(.15,10,8),n.darkFigure);b.position.y=1.35;for(const E of[-.11,.11]){const T=new at(new Gt(.11,.07,.2),n.pale);T.position.set(E,.035,.03),p.add(T)}p.add(d,b),p.position.set(-$+.15,Ge,-L*.36),p.visible=!1,t.add(p);for(const E of[-L*.62,-L*.7])for(const T of[g,g-1.4])U(e.play,.09,2.2,.09,T,Ge+1.1,E,t);const w=L*.08;for(const E of[Ge+.3,Ge+1.1,Ge+1.9]){U(e.play,1.5,.09,.09,g-.7,E,-L*.62,t),U(e.play,1.5,.09,.09,g-.7,E,-L*.7,t);for(const T of[g,g-1.4])U(e.play,.09,.09,w,T,E,-L*.66,t)}for(const E of[-L*.15,-L*.21,-L*.265,-L*.54,-L*.595,-L*.65,-L*.72,-L*.79,-L*.86])U(e.fence,.07,.85,1.7,-$+.85,.45,E,t);U(e.rail,.05,.06,L*.78,-$+.85,.88,-L*.5,t),U(e.prop,.5,.1,1.6,-$+.5,.45,-L*.24,t);for(const E of[-L*.215,-L*.265])U(e.prop,.45,.45,.08,-$+.5,.22,E,t);U(e.prop,.42,.7,.42,-$+.45,.35,-L*.75,t),U(e.dark,.1,2.2,1.3,$-.05,1.1,-L*.7,t),U(e.wall2,.16,.2,1.6,$-.12,2.3,-L*.7,t),U(e.wall2,.14,.5,.4,$-.1,1.5,-L*.58,t);for(const E of[-L*.3,-L*.38,-L*.46])U(e.prop,.34,.3,.34,$-.25,2.3,E,t),U(e.gear,.3,.34,.3,$-.25,2.6,E,t);U(e.wall2,.5,.16,L*.5,$-.3,2.12,-L*.4,t),U(e.prop,.3,.75,.3,$-.25,.37,-L*.86,t),U(e.wall2,.12,1.1,.5,$-.08,1.6,-L*.86,t);const M=new Qt,C=new It({color:12169892,roughness:.9,emissive:1381391});for(const[E,T]of[[-$+.85,-L*.3],[-$+.85,-L*.345],[-$+.85,-L*.62],[-$+.85,-L*.665]]){const P=new at(new Gt(.1,.12,.17),C);P.position.set(E,.9,T),M.add(P);for(let y=0;y<4;y++){const x=new at(new Gt(.11,.035,.032),C);x.position.set(E+.05,.855,T-.06+y*.04),x.rotation.z=-.5,M.add(x)}}return M.visible=!1,t.add(M),{group:t,refs:{swingPivot:i,ball:s,swingFigure:r,eyes:c,slideFigure:p,fenceHands:M},hit:{swing:[i],ball_out:[s],swing_figure:[r],eyes:[c],slide_figure:[p],fence_hands:[M]}}}function p_(n){const t=new Qt,e=1909033,i=11844290,s=921878,r=$-.05,o=2.62,a=-L*.32,l=4.2,c=1.45;U(new It({color:s,roughness:.12,metalness:.2}),.06,2.35,l-.16,r,1.28,a,t);for(const X of[-1,1])ie(.09,2.45,.1,e,r,1.3,a+X*(l/2-.05),t);ie(.09,.1,l,e,r,.1,a,t),ie(1.15,.09,l,e,$-.62,o,a,t),ie(1.03,.03,l-.14,i,$-.62,o-.06,a,t),ie(.1,.3,l,e,$-1.15,o-.2,a,t);for(const X of[-1,1])ie(1.15,.16,.09,e,$-.62,o-.12,a+X*(l/2),t);for(const X of[-1,1])ie(.1,o,.1,e,$-.34,o/2,a+X*(l/2-.12),t);ie(.35,.08,1.8,e,$-.32,.55,a,t);const u=(X,B,Q)=>{const st=new It({map:X,emissiveMap:X,emissive:7304316,roughness:.5}),ut=new at(new we(.95,1.69),st);ut.position.set(r-.05,1.52,B),ut.rotation.y=-Math.PI/2,ut.name=Q,t.add(ut),ie(.05,1.81,1.07,e,r-.02,1.52,B,t)};u(Eg(),a-c,"정류장 광고(감자튀김)"),u(Tg(),a+c,"정류장 광고(실종 전단)"),ie(.04,.72,1.1,13817564,r-.05,1.58,a,t);const h=new It({color:6969884,roughness:.45});h.emissive.setHex(9072676),U(h,.03,1.15,.16,$-.4,1.62,a-(l/2-.12),t);const f=new It({color:e,roughness:.5});f.emissive.setHex(9414340);for(const X of[-1,0,1])U(f,.3,.05,l-.8,$-.42-X*.34,2.46,a,t);const m=new Rn(12374250,9,8.5,2);m.position.set($-.7,2.2,-L*.32),t.add(m);const g=new Qt,_=new at(new Gt(.42,.6,.26),n.darkFigure);_.position.y=.95;const p=new at(new rn(.13,10,8),n.darkFigure);p.position.set(-.06,1.38,0);const d=new at(new Gt(.4,.5,.18),n.darkFigure);d.position.set(-.2,.35,0),g.add(_,p,d),g.position.set($-.42,0,-L*.32),g.visible=!1,t.add(g);const b=new Qt,w=new at(new Gt(.44,1.2,.26),n.darkFigure);w.position.y=.9;const M=new at(new rn(.15,10,8),n.darkFigure);M.position.y=1.64;for(const X of[-.26,.26]){const B=new at(new Gt(.09,.14,.1),n.pale);B.position.set(X,.72,.03),b.add(B)}b.add(w,M),b.position.set(-1.1,0,Te-vn-.6),b.visible=!1,t.add(b);const C=[],E=[],T=[],P=-L*.55,y=Te-vn-.9;for(const[X,B,Q]of[[$-.4,y,1],[-2.6,P,-1]]){ie(.12,3.4,.12,3817815,X,1.7,B,t),T.push(ie(.3,.66,.24,1843760,X,3.55,B,t));const st=ie(.16,.16,.06,3477780,X,3.7,B+.14*Q,t),ut=ie(.16,.16,.06,1124378,X,3.42,B+.14*Q,t);C.push(st.material),E.push(ut.material)}const x=Va(),R=Wa();U(oi(1843244,x,60/Is,vn*2/Is),60,.2,vn*2,0,-.1,Te,t);const[W,H]=In(Ge),k=oi(2304056,R,15/qn,W/qn),V=oi(2106938,R,15/qn,W/qn);for(const X of[-1,1])U(k,15,W,1,X*11,H,Te-vn-.5,t),U(V,15,W,1,X*11,H,Te+vn+.5,t),c_(X,t);for(let X=0;X<4;X++)ie($*2-1.2,.03,.6,8949922,0,.02,-L*.62-X*1.15,t);ie($*2-1.2,.03,.35,8949922,0,.02,-L*.585,t),ie(.16,.7,.16,3752282,$-.7,.35,-L*.24,t),ie(.16,.7,.16,3752282,$-.7,.35,-L*.4,t),ie(.5,.14,l+1.6,2304056,$-.25,.07,a,t);const G=new Qt;for(const X of[-.19,.19]){const B=ie(.24,.11,.34,14210248,0,.055,X,G);B.position.z=X}return G.position.set($-.32,.59,-L*.32+.62),G.visible=!1,t.add(G),{group:t,refs:{trafficRed:C,trafficGreen:E,busFigure:g,boothLight:m,boothTubeMat:f,acrossFigure:b,benchShoes:G},hit:{traffic_red:T,bus_figure:[g],across_figure:[b],bench_shoes:[G]}}}function m_(n){const t=new Qt,e=new Qt;e.position.set(-$+.75,0,-L*.55),e.rotation.y=vu,t.add(e);const i=new Qt,s=new at(new zs(.42,16),n.blood);s.rotation.x=-Math.PI/2,s.position.set(1.75,.015,-L*.452);const r=new at(new we(.4,5.4),n.blood);r.rotation.x=-Math.PI/2,r.rotation.z=1.16,r.position.set(-.35,.015,-L*.437);const o=new at(new we(1.4,1.9),n.bloodWall);o.position.set($-.38,.9,-L*.452),o.rotation.y=-Math.PI/2;const a=new It({color:11055293,roughness:.4,emissive:1448480});for(const[M,C,E]of[[-.34,.66,.34],[.24,.98,.42]]){const T=new at(new Gt(.16+E,.26,.72),a);T.position.set($-.28-E/2,C,-L*.452+M),T.rotation.z=.18,i.add(T)}i.add(s,r,o),i.visible=!1,t.add(i);const l={front:mt(2304056),shutter:mt(2765123),slat:mt(2041140),steel:mt(3817815),wire:mt(1119261),paver:mt(2764602),ghost:mt(1776931),bolt:mt(921620),board:mt(4867389),batten:mt(3880751),paper:mt(7238522)};U(l.paver,$*2+1.4,.04,L+2,0,.02,-L/2,t),U(l.wire,.34,.05,L+2,0,.035,-L/2,t);for(let M=0;M<9;M++)U(l.steel,.4,.06,.09,0,.04,-L*.06-M*(L*.1),t);const c=-L*.452,u=3.2,h=new Qt;t.add(h),U(l.front,.2,4.2,u,$-.1,2.1,c,t),U(l.shutter,.16,2.3,u-.5,$-.26,1.15,c,h);for(let M=0;M<3;M++)U(l.slat,.17,.05,u-.5,$-.26,.62+M*.62,c,h);const f=(M,C,E,T,P)=>{U(l.ghost,.04,T,E,M*($-.02),P,C,t);for(const y of[-1,1])for(const x of[-1,1])U(l.bolt,.07,.09,.09,M*($-.05),P+x*(T/2-.14),C+y*(E/2-.14),t)},m=(M,C,E,T,P)=>{U(l.board,.1,T,E,M*($-.06),P,C,t);for(const y of[1,-1]){const x=U(l.batten,.06,.16,Math.hypot(E,T)-.2,M*($-.12),P,C,t);x.rotation.x=y*Math.atan2(T,E)}},g=(M,C,E,T=.42)=>{U(l.paper,.03,T*1.41,T,M*($-.03),E,C,t)};f(1,c,u-.2,.86,4.72),f(-1,-L*.14,2.6,.72,4.35),f(1,-L*.245,1.9,.95,4.9),f(-1,-L*.585,3.1,.66,4.5),f(1,-L*.8,2.2,.8,4.62),m(-1,-L*.31,1.5,2.05,1.35),m(1,-L*.365,1.15,1.35,1.72),g(-1,-L*.2,1.55);const _=c,p=u-.5,d=new Qt;U(l.shutter,.16,.95,p,$-.26,1.83,_,d);for(let M=0;M<2;M++)U(l.slat,.17,.05,p,$-.26,1.55+M*.4,_,d);U(mt(263690),.06,1.35,p,$-.36,.68,_,d);const b=new It({color:10134192,roughness:.45,emissive:1316637}),w=new at(new Gt(.26,.17,p),b);return w.position.set($-.28,1.33,_),d.add(w),d.visible=!1,t.add(d),{group:t,refs:{sign:e,dragMark:i,openShutter:d,closedShutter:h},hit:{sign_turn:[e],drag_mark:[i],open_shutter:[d]}}}function Ke(n){return{reset:t=>{n(t).visible=!1},apply:t=>{n(t).visible=!0}}}const Ec={shoes:Ke(n=>n.shoes),bench_shoes:Ke(n=>n.benchShoes),bike_figure:Ke(n=>n.bikeFigure),lone_shadow:Ke(n=>n.loneShadow),fence_hands:Ke(n=>n.fenceHands),slide_figure:Ke(n=>n.slideFigure),across_figure:Ke(n=>n.acrossFigure),open_shutter:{reset:n=>{n.openShutter.visible=!1,n.closedShutter.visible=!0},apply:n=>{n.openShutter.visible=!0,n.closedShutter.visible=!1}},shutter_glow:{reset:n=>{n.shutterGlowMat.color.setHex(1119260),n.shutterGlowSlitMat.emissive.setHex(0),n.shutterGlowLight.intensity=0},apply:n=>{n.shutterGlowMat.color.setHex(9077362),n.shutterGlowSlitMat.emissive.setHex(16764810),n.shutterGlowLight.intensity=5.5}},umbrella:Ke(n=>n.umbrella),sensor_on:{reset:n=>{n.sensorMat.emissive.setHex(0),n.sensorLight.intensity=0},apply:n=>{n.sensorMat.emissive.setHex(13615780),n.sensorLight.intensity=4}},window_red:{reset:n=>{n.windowMat.emissive.setHex(0)},apply:n=>{n.windowMat.emissive.setHex(7999504)}},laundry_open:{reset:n=>{n.laundryShutter.position.y=1.25,n.laundryShutter.scale.y=1,n.laundryMat.emissive.setHex(0),n.laundryLight.intensity=0},apply:n=>{n.laundryShutter.position.y=2,n.laundryShutter.scale.y=.42,n.laundryMat.emissive.setHex(7833487),n.laundryLight.intensity=6}},sign_lit:{reset:n=>{n.storeSignMat.emissive.setHex(0)},apply:n=>{n.storeSignMat.emissive.setHex(7214100)}},swing:{reset:n=>{n.swingPivot.rotation.x=0}},lamp_flicker:{reset:n=>{n.lampLight.intensity=n.group.userData.morning?0:n.group.userData.lampBase??Ns[0]}},traffic_red:{reset:()=>{}},ball_out:{reset:n=>{n.ball.position.copy(Mu)},apply:n=>{n.ball.position.copy(Qg)}},sign_turn:{reset:n=>{n.sign.rotation.y=vu},apply:n=>{n.sign.rotation.y=Jg}},flyer_digits:{reset:n=>{n.flyerMat.map=n.flyerTex[0]},apply:n=>{n.flyerMat.map=n.flyerTex[1]}},realty_urgent:{reset:n=>{n.realtyMat.map=n.realtyTex[0]},apply:n=>{n.realtyMat.map=n.realtyTex[1]}},shop_typo:{reset:()=>{}},figure:{reset:n=>{n.figure.visible=!1},apply:n=>{const[t,e]=xu[n.group.userData.figureAnchor??0];n.figure.position.set(t,0,e),n.figure.rotation.y=Math.random()<.5?Math.PI:Math.PI*.85,n.figure.visible=!0}},blood_trail:Ke(n=>n.bloodTrail),skull:Ke(n=>n.skull),face_window:Ke(n=>n.facePlane),handprints:Ke(n=>n.handprints),swing_figure:Ke(n=>n.swingFigure),eyes:Ke(n=>n.eyes),bus_figure:Ke(n=>n.busFigure),drag_mark:Ke(n=>n.dragMark)};function g_(n,t){var e,i;for(const s of Object.values(Ec))s.reset(n);n.group.userData.effects=t;for(const s of t)(i=(e=Ec[s]).apply)==null||i.call(e,n)}function Tc(n,t,e,i){n.position.set(Rs.x+t,Rs.y+e,Rs.z+i)}const __=new Kt(Li),Es={h:0,s:0,l:0},bc=new Kt,v_={hue:.075,hueMix:.58,satBase:.045,satMix:.3,satMax:.14,lift:.11,gain:.95,lmax:.92},x_={hue:.075,hueMix:.12,satBase:.02,satMix:.32,satMax:.13,lift:.06,gain:1.35,lmax:.84};function M_(n,t){bc.setHex(n).getHSL(Es);let e=t.hue-Es.h;e>.5?e-=1:e<-.5&&(e+=1);const i=((Es.h+e*t.hueMix)%1+1)%1,s=Math.min(t.satMax,t.satBase+Es.s*t.satMix),r=Math.min(t.lmax,Es.l*t.gain+t.lift);return bc.setHSL(i,s,r).getHex()}function S_(n,t,e){n.traverse(i=>{const s=i;if(!s.isMesh)return;const r=Array.isArray(s.material)?s.material:[s.material];for(const o of r){const a=o;if(!(a!=null&&a.color)||!a.isMeshStandardMaterial||a.userData.keepColor||a.map&&!a.userData.surface||a.emissive&&a.emissive.getHex()!==0)continue;a.userData.nightColor===void 0&&(a.userData.nightColor=a.color.getHex());const c=a.userData.nightColor;a.color.setHex(t?M_(c,e):c)}})}function y_(n,t){n.themes.forEach((e,i)=>e.visible=i===t-1)}function wu(n,t){if(n.group.userData.morning)return;const e=Ns[Math.min(t,Ns.length-1)];n.group.userData.lampBase=e,n.lampLight.intensity=e,n.ambient.intensity=Math.max(1.1,2.2-t*.18),n.group.userData.ambientBase=n.ambient.intensity,Au(n,9-t*.7)}function Au(n,t,e=!1){n.boothLight.intensity=Math.max(0,t),n.boothLight.color.setHex(e?$g:12374250),n.boothTubeMat.emissive.setHex(t>.1?e?Kg:9414340:0)}function Fr(n,t,e="dusk"){n.group.userData.morning=t,n.group.userData.tod=e;const i=e==="afternoon";S_(n.scene,t,i?x_:v_);const s=i?Eu:Su,r=i?Tu:yu;n.scene.background.setHex(t?s:Li);const o=n.scene.fog;o.color.setHex(t?r:Li),o.density=t?i?.007:.012:.044,n.ambient.color.setHex(t?i?n_:15656166:3752286),n.ambient.intensity=t?i?i_:1.95:2.2,n.group.userData.ambientBase=n.ambient.intensity,n.moon.color.setHex(t?i?t_:16767424:8425664),n.moon.intensity=t?i?e_:4.6:.75,n.moon.castShadow=t,t?Tc(n.moon,i?9:11,i?13:6,i?4:3):Tc(n.moon,4,10,2),n.skyDome.visible=t;const a=n.skyDome.material;a.map=i?n.skyAfternoon:n.skyDusk,a.color.setScalar(1),n.lampLight.color.setHex(t?Vg:16762503),n.lampLight.intensity=t?i?0:Wg:Ns[0],n.lampHeadMat.emissive.setHex(t&&i?0:t?Xg:3811858),Au(n,t?i?1.1:Zg:9,t)}function Ar(n,t,e){const i=n.scene.fog,s=Math.max(0,Math.min(1,t));i.density=e+s*s*1.4;const r=!!n.group.userData.morning,o=Math.pow(1-s,2.2),a=(u,h)=>{u.setHex(h),r&&s>0&&u.lerp(__,Math.min(1,s*2.5)),u.multiplyScalar(o)},l=r&&n.group.userData.tod==="afternoon";a(i.color,r?l?Tu:yu:Li),a(n.scene.background,r?l?Eu:Su:Li),r&&n.skyDome.material.color.setScalar(o);for(const u of n.tunnelLights)u.color.setHex(r?qg:gu),u.intensity=_u*(1-s);n.tunnelLampMat.emissive.setHex(r?Yg:qa).multiplyScalar(1-s);const c=n.group.userData.ambientBase??2.2;n.ambient.intensity=c*(1-s*.92)}function E_(n,t,e){n.lamp.visible=!(t&&e)}function T_(n,t){n.stretchMark.visible=t}function Ru(n,t,e=!0){const i=!!n.group.userData.morning;n.tunnel.visible=!t,n.shopFront.visible=t&&e,n.homeFront.visible=t&&!e,n.shopGlow.intensity=t?e?26:30:i?0:4,n.bannerMat.emissive.setHex(t&&e?16777215:0)}function b_(n,t){n.backTunnel.visible=!t,n.shopBack.visible=t}function w_(n,t){n.banner.position.set(0,5.25,t?-L+.25:-.25),n.banner.rotation.y=t?0:Math.PI}const A_=9049622,R_=3111498;function C_(n,t){const e=n.group.userData.effects??[];if(e.includes("lamp_flicker")){const s=n.group.userData.lampBase??Ns[0],r=t%1.6,o=!(r<.12||r>.24&&r<.36);n.lampLight.intensity=o?s:Math.min(2,s)}if(e.includes("swing")&&(n.swingPivot.rotation.x=Math.sin(t*2.2)*.38),n.themes[3].visible){const s=e.includes("traffic_red"),r=Og(t)?Math.floor(t*4)%2===0:!0,o=!s&&Us(t)&&r,a=s||!Us(t);for(const l of n.trafficGreen)l.emissive.setHex(o?R_:0);for(const l of n.trafficRed)l.emissive.setHex(a?A_:0)}const i=n.group.userData.carStart;if(i!==void 0){const s=(t-i)/pu;if(s>=1||!n.themes[3].visible)n.car.visible=!1,n.carLight.intensity=0,n.group.userData.carStart=void 0;else{const r=n.group.userData.carDir??1;n.car.position.x=r*(-xa/2+xa*s),n.car.rotation.y=r>0?0:Math.PI,n.car.visible=!0;const o=!!n.group.userData.morning;n.carLight.intensity=o?jg:26,n.carSignMat.emissive.setHex(o?14201448:0)}}}function P_(n){n.group.userData.carStart=void 0,n.car.visible=!1,n.carLight.intensity=0}function L_(n,t,e=1){n.group.userData.carStart=t,n.group.userData.carDir=e,n.car.position.set(e*-xa/2,0,Te),n.car.visible=!0}function D_(n){return n.car.visible&&Math.abs(n.car.position.x)<$+2.2}function I_(n){const t=Ng(),e=l_(n,t),i=h_(t),s=f_(),r=d_(t),o=p_(t),a=m_(t),c=[i,s,r,o,a].map(f=>f.group);c.forEach((f,m)=>{m!==3&&u_(f),f.visible=!1,f.name=`테마${m+1}`,e.refs.group.add(f)}),e.refs.group.name="골목",e.refs.tunnel.name="앞터널",e.refs.backTunnel.name="뒤터널",e.refs.shopFront.name="FF-1204(앞)",e.refs.shopBack.name="FF-1204(뒤)",e.refs.homeFront.name="집",e.refs.figure.name="그림자사람",e.refs.car.name="차",e.refs.banner.name="개업 현수막",o.refs.busFigure.name="정류장의 형체",a.refs.sign.name="입간판",a.refs.dragMark.name="끌린 자국",i.refs.bloodTrail.name="핏자국",i.refs.skull.name="백골",i.refs.umbrella.name="우산",s.refs.handprints.name="손자국",r.refs.swingFigure.name="그네의 형체",r.refs.eyes.name="어둠의 눈",r.refs.ball.name="공";const u=(f,m)=>{const g=f.name?m?`${m}/${f.name}`:f.name:m;f.children.forEach((_,p)=>{_.isMesh&&!_.userData.src&&(_.userData.src=`${g||"?"}#${p}`),u(_,g)})};u(e.refs.group,""),e.refs.group.traverse(f=>{const m=f;!m.isMesh||!(Array.isArray(m.material)?m.material:[m.material]).some(p=>p==null?void 0:p.isMeshStandardMaterial)||(m.castShadow=!0,m.receiveShadow=!0)});const h={...e.hit,...i.hit,...s.hit,...r.hit,...o.hit,...a.hit};return{...e.refs,...i.refs,...s.refs,...r.refs,...o.refs,...a.refs,themes:c,hit:h}}const Ya="fries.save.v1",Rr={night:1,tut:!1,misses:0,results:[],brightness:1,muted:!1};function U_(n){const t={...Rr,results:[]};if(typeof n!="object"||n===null)return t;const e=n;return typeof e.night=="number"&&Number.isInteger(e.night)&&e.night>=1&&e.night<=99&&(t.night=e.night),typeof e.tut=="boolean"&&(t.tut=e.tut),t.night>1&&(t.tut=!0),typeof e.misses=="number"&&Number.isInteger(e.misses)&&e.misses>=0&&(t.misses=e.misses),Array.isArray(e.results)&&(t.results=e.results.slice(0,99).map(i=>i==="crispy"||i==="lukewarm"||i==="soggy"?i:null)),typeof e.brightness=="number"&&e.brightness>=.6&&e.brightness<=1.9&&(t.brightness=e.brightness),typeof e.muted=="boolean"&&(t.muted=e.muted),t}function N_(){try{const n=localStorage.getItem(Ya);return n?U_(JSON.parse(n)):{...Rr,results:[]}}catch{return{...Rr,results:[]}}}const le=N_();function ds(){try{localStorage.setItem(Ya,JSON.stringify(le))}catch{}}function F_(){Object.assign(le,Rr,{results:[]});try{localStorage.removeItem(Ya)}catch{}}function O_(){return le.night>1||le.misses>0||le.tut}const B_=`
#adm-hud, #adm-panel { position: fixed; z-index: 60; color: #cfe3ff;
  font: 12px/1.55 ui-monospace, "Cascadia Mono", Consolas, monospace; }
/* ⚠ body가 user-select: none이라(index.html) 상속을 끊지 않으면 좌표를 드래그로 못 집는다.
   HUD는 **읽어서 가져가라고** 있는 것이므로 여기서만 되돌린다 — pointer-events도 함께다
   (none이면 애초에 선택이 시작되지 않는다). 게임 화면 쪽 금지는 그대로 둔다. */
#adm-hud { left: 10px; top: 44px; max-width: 46ch; white-space: pre-wrap;
  background: #05070ccc; border: 1px solid #2b6cb055; border-radius: 6px;
  padding: 7px 9px; text-shadow: 0 1px 2px #000;
  pointer-events: auto; user-select: text; -webkit-user-select: text; cursor: text; }
#adm-hud .k { color: #7f9bbd; }
#adm-hud .v { color: #ffd48a; }
#adm-hud .o { color: #8ef0b4; }
/* ⭐ 정중앙 조준점 (v0.11.61) — 아래 '조준' 줄이 **무엇을 겨눈 것인지** 화면에서 보이게.
   레이캐스트는 화면 정중앙에서 쏘는데(this.center = (0,0)) 그 지점에 표시가 없어서,
   좌표를 뜨려면 감으로 겨눠야 했다.
   ⚠ 게임 화면에는 십자선을 두지 않는다 — 짚는 동사가 없어진 뒤(v0.11.50) 십자선은
     '조준할 것이 있다'는 거짓말이 되기 때문이다 (hud.ts 주석). 그래서 **관리자 모드 전용**이고
     이 요소는 모드를 켤 때만 붙는다.
   ⚠ 가는 십자 + 가운데 점. 점만 두면 어두운 배경에서 사라지고, 십자만 두면 정확한 한 픽셀이
     어디인지 모른다. mix-blend-mode: difference 로 밝은 벽에서도 어두운 골목에서도 남는다.
   ⚠⚠ 이 CSS는 템플릿 리터럴이다 — 주석에 백틱을 쓰면 문자열이 거기서 끊긴다 (실제로 겪었다) */
#adm-cross { position: fixed; z-index: 61; left: 50%; top: 50%; width: 21px; height: 21px;
  transform: translate(-50%, -50%); pointer-events: none; mix-blend-mode: difference; }
#adm-cross i { position: absolute; background: #fff; }
#adm-cross .h { left: 0; top: 10px; width: 21px; height: 1px; }
#adm-cross .v { left: 10px; top: 0; width: 1px; height: 21px; }
#adm-cross .d { left: 9px; top: 9px; width: 3px; height: 3px; }
#adm-badge { position: fixed; z-index: 61; right: 10px; top: 44px; padding: 3px 8px;
  border-radius: 4px; background: #7a1010; color: #ffe3e3; letter-spacing: .12em;
  font: 700 11px/1.4 ui-monospace, Consolas, monospace; pointer-events: none; }
#adm-panel { left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(92vw, 430px);
  background: #070a12f2; border: 1px solid #2b6cb0aa; border-radius: 10px; padding: 14px 16px;
  box-shadow: 0 18px 60px #000c;
  user-select: text; -webkit-user-select: text; }
#adm-panel h3 { margin: 0 0 10px; font-size: 13px; color: #ffd48a; letter-spacing: .06em; }
#adm-panel label { display: flex; align-items: center; gap: 8px; margin: 7px 0; }
#adm-panel label > span:first-child { flex: 0 0 6.5em; color: #7f9bbd; }
#adm-panel select, #adm-panel input[type=number] { flex: 1; background: #111826; color: #cfe3ff;
  border: 1px solid #2b6cb066; border-radius: 4px; padding: 4px 6px; font: inherit; }
#adm-panel input[type=range] { flex: 1; }
#adm-panel .row { display: flex; gap: 8px; margin-top: 12px; }
#adm-panel button { flex: 1; background: #16233a; color: #cfe3ff; border: 1px solid #2b6cb066;
  border-radius: 5px; padding: 7px; font: inherit; cursor: pointer; }
#adm-panel button:hover { background: #1e3050; }
#adm-panel button.warn { background: #3a1418; border-color: #7a101088; }
#adm-panel .help { margin-top: 11px; color: #6d84a3; font-size: 11px; line-height: 1.7; }
`,xe=(n,t=2)=>n.toFixed(t);class z_{constructor(t){this.active=!1,this.clearView=!0,this.lit="auto",this.panel=null,this.ray=new su,this.center=new Zt(0,0),this.speed=7,this.lastTapAt=0,this.line="",this.host=t;const e=document.createElement("style");e.textContent=B_,document.head.appendChild(e),this.hud=document.createElement("div"),this.hud.id="adm-hud",this.badge=document.createElement("div"),this.badge.id="adm-badge",this.badge.textContent="ADMIN",this.cross=document.createElement("div"),this.cross.id="adm-cross",this.cross.innerHTML='<i class="h"></i><i class="v"></i><i class="d"></i>',window.addEventListener("keydown",i=>this.onKey(i)),window.addEventListener("wheel",i=>{!this.active||this.panel||(this.speed=Math.max(.5,Math.min(60,this.speed*(i.deltaY>0?.85:1.18))))},{passive:!0})}onKey(t){if(t.ctrlKey&&t.code==="Space"){t.preventDefault();const e=performance.now();e-this.lastTapAt<600?(this.lastTapAt=0,this.toggle()):this.lastTapAt=e;return}if(this.active){if(t.code==="Escape"){this.panel?this.closePanel():this.openPanel();return}t.code==="KeyC"&&!this.panel&&!t.ctrlKey&&!t.metaKey&&(t.preventDefault(),this.copyLine())}}async copyLine(){try{if(!navigator.clipboard)throw new Error("no clipboard api");await navigator.clipboard.writeText(this.line),this.flash("좌표 복사됨")}catch{const t=document.createElement("textarea");t.value=this.line,t.setAttribute("readonly",""),t.style.cssText="position:fixed;top:-9999px;opacity:0",document.body.appendChild(t),t.select();const e=document.execCommand("copy");t.remove(),this.flash(e?"좌표 복사됨":"복사 실패 — HUD에서 직접 선택")}}toggle(){this.active=!this.active,this.active?document.body.append(this.hud,this.badge,this.cross):(this.closePanel(),this.hud.remove(),this.badge.remove(),this.cross.remove())}flash(t){this.badge.textContent=t,setTimeout(()=>this.badge.textContent="ADMIN",900)}fly(t,e,i,s){if(this.panel)return;const r=s("AltLeft")||s("AltRight")?4:1,o=this.speed*r*t;let a=0,l=0,c=0;(s("KeyW")||s("ArrowUp"))&&(a+=1),(s("KeyS")||s("ArrowDown"))&&(a-=1),(s("KeyD")||s("ArrowRight"))&&(l+=1),(s("KeyA")||s("ArrowLeft"))&&(l-=1),s("Space")&&(c+=1),(s("ShiftLeft")||s("ShiftRight"))&&(c-=1);const u=this.host.camera,h=Math.cos(i);u.position.x+=(Math.sin(e)*-a*h+Math.cos(e)*l)*o,u.position.z+=(-Math.cos(e)*a*h-Math.sin(e)*l)*o,u.position.y+=(Math.sin(i)*a+c)*o}update(){if(!this.active)return;const t=this.host.camera,e=this.host.snapshot(),i=t.position,s=this.host.segLength,r=i.z<.5&&i.z>-s*1.4?`  (-L*${xe(-i.z/s,3)})`:"",o=new N;t.getWorldDirection(o);const a=(Math.atan2(-o.x,-o.z)*180/Math.PI+360)%360,l=Math.asin(Math.max(-1,Math.min(1,o.y)))*180/Math.PI;this.line=`x ${xe(i.x)}  y ${xe(i.y)}  z ${xe(i.z)}${r}`;const c=this.pick();this.hud.innerHTML=`<span class="k">좌표</span> <span class="v">x ${xe(i.x)}  y ${xe(i.y)}  z ${xe(i.z)}</span><span class="k">${r}</span>
<span class="k">시선</span> yaw ${xe(a,1)}°  pitch ${xe(l,1)}°   <span class="k">속도</span> ${xe(this.speed,1)}
<span class="k">상태</span> ${e.morning?"아침(퇴근길)":`밤 ${e.night}`}  구간 ${e.done+1}/${e.total}  테마 ${e.theme}  깊이 ${e.depth}  늘어남 ${e.stretches}
<span class="k">이동</span> <span class="o">Esc</span> — 밤·테마·이상현상·깊이 골라서 점프   <span class="k">C</span> 좌표 복사
<span class="k">조준</span> ${c}`}pick(){var g;this.ray.setFromCamera(this.center,this.host.camera);const e=this.ray.intersectObjects(this.host.scene.children,!0).find(_=>{if(!_.object.isMesh)return!1;for(let p=_.object;p;p=p.parent)if(!p.visible)return!1;return!0});if(!e)return'<span class="k">(없음)</span>';const i=e.object,s=[];for(let _=i;_;_=_.parent)_.name&&s.unshift(_.name);const r=i.geometry,o=r.parameters;let a=r.type??"?";o&&(r.type==="BoxGeometry"?a=`Box ${xe(o.width)}×${xe(o.height)}×${xe(o.depth)}`:r.type==="PlaneGeometry"?a=`Plane ${xe(o.width)}×${xe(o.height)}`:r.type==="SphereGeometry"?a=`Sphere r${xe(o.radius)}`:r.type==="CylinderGeometry"&&(a=`Cyl r${xe(o.radiusTop)} h${xe(o.height)}`));const l=i.material,c=Array.isArray(l)?"(면별 재질)":"#"+(((g=l.color)==null?void 0:g.getHexString())??"??????"),u=i.getWorldPosition(new N),h=this.host.segLength,f=u.z<.5&&u.z>-h*1.4?` = -L*${xe(-u.z/h,3)}`:"",m=typeof i.userData.src=="string"?i.userData.src:"";return this.line+=`
${s.join(" › ")} | ${m} | ${a} ${c} | x ${xe(u.x)} y ${xe(u.y)} z ${xe(u.z)}${f}`,`<span class="o">${s.join(" › ")||"(이름 없음)"}</span>
`+(m?`     <span class="o">${m}</span>
`:"")+`     ${a}  ${c}  <span class="k">${xe(e.distance,1)}m</span>
     <span class="v">x ${xe(u.x)}  y ${xe(u.y)}  z ${xe(u.z)}</span><span class="k">${f}</span>`}openPanel(){var a,l,c,u;(a=document.exitPointerLock)==null||a.call(document),this.cross.style.display="none";const t=this.host.snapshot(),e=document.createElement("div");e.id="adm-panel";const i=this.host.anomalies.map(h=>`<option value="${h.effect}">${h.segment?`구간 ${h.segment}`:"전 구간"} · ${h.label}</option>`).join(""),s=k_(this.host.nights,this.host.segments);e.innerHTML=`
      <h3>관리자 — 콘솔</h3>
      <label><span>스테이지</span><select id="adm-stop">${s.map((h,f)=>{const m=h.morning===t.morning&&h.theme===t.theme&&(h.morning||h.night===t.night);return`<option value="${f}"${m?" selected":""}>${f+1}. ${h.label}</option>`}).join("")}</select></label>
      <label><span>이상현상</span><select id="adm-eff">
        <option value="">강제 안 함 (확률대로)</option>
        <option value="none">항상 정상</option>
        ${i}
      </select></label>
      <label><span>깊이</span><input id="adm-depth" type="range" min="0" max="5" step="1" value="${t.depth}">
        <span id="adm-depth-v" class="v">${t.depth}</span></label>
      <label><span>조명</span><select id="adm-lit">
        <option value="auto"${this.lit==="auto"?" selected":""}>스테이지 기본 (퇴근길=낮 / 밤=밤)</option>
        <option value="day"${this.lit==="day"?" selected":""}>낮 강제 — 어느 밤이든 대낮으로</option>
        <option value="night"${this.lit==="night"?" selected":""}>밤 강제 — 퇴근길도 밤으로</option>
      </select></label>
      <label><span>시야</span><select id="adm-view">
        <option value="clear"${this.clearView?" selected":""}>안개·터널 암전 끔 (구조 확인용)</option>
        <option value="game"${this.clearView?"":" selected"}>게임 그대로</option>
      </select></label>
      <div class="row"><button id="adm-go">이동</button><button id="adm-close">닫기</button></div>
      <div class="row"><button id="adm-off" class="warn">관리자 모드 끄기</button></div>
      <div class="help">비행 WASD · Space 상승 · Shift 하강 · Alt 가속 · 휠 속도<br>
        C 좌표+조준 대상 복사 · Esc 이 창 · Ctrl+Space Space 모드 전환<br>
        관리자 모드에서는 머무름·치임·늘어남·구간 전환이 전부 멈춘다</div>`,document.body.appendChild(e),this.panel=e;const r=e.querySelector("#adm-depth"),o=e.querySelector("#adm-depth-v");r.addEventListener("input",()=>o.textContent=r.value),(l=e.querySelector("#adm-go"))==null||l.addEventListener("click",()=>{const h=e.querySelector("#adm-eff").value;this.clearView=e.querySelector("#adm-view").value==="clear";const f=s[Number(e.querySelector("#adm-stop").value)]??s[0];this.lit=e.querySelector("#adm-lit").value;const m=this.host.anomalies.find(_=>_.effect===h),g=m&&m.segment?m.segment:f.theme;this.host.jump({night:f.night,morning:f.morning,theme:g,daylight:this.lit==="auto"?void 0:this.lit==="day",depth:Number(r.value),effect:h===""?null:h}),g!==f.theme&&this.flash(`이상현상에 맞춰 구간 테마 ${g}로 이동`),this.closePanel()}),(c=e.querySelector("#adm-close"))==null||c.addEventListener("click",()=>this.closePanel()),(u=e.querySelector("#adm-off"))==null||u.addEventListener("click",()=>{this.closePanel(),this.toggle()})}closePanel(){var t;(t=this.panel)==null||t.remove(),this.panel=null,this.cross.style.display="",this.active&&this.host.relock()}}const wc={1:"원룸 골목 (집)",2:"상가 골목",3:"놀이터 옆길",4:"정류장 앞 (차도)",5:"먹자골목 입구 (가게)"};function k_(n,t){const e=[];for(let i=1;i<=2;i++){const s=t-2+i;e.push({night:1,morning:!0,theme:s,label:`퇴근길 ${i}/2 · ${wc[s]}`})}for(let i=1;i<=n;i++)for(let s=1;s<=t;s++){const r=t+1-s;e.push({night:i,morning:!1,theme:r,label:`밤 ${i} — ${s}/${t} · ${wc[r]}`})}return e}const H_=document.getElementById("app"),dn=new ng({antialias:!0});dn.setPixelRatio(Math.min(window.devicePixelRatio,2));dn.setSize(window.innerWidth,window.innerHeight);dn.toneMapping=Uc;dn.shadowMap.enabled=!0;dn.shadowMap.type=Dc;H_.appendChild(dn.domElement);const Ma=1.35,ei=document.getElementById("bright"),$a=document.getElementById("start");let Cu=0;function Ac(){window.clearTimeout(Cu),$a.classList.add("peek")}function Eo(){$a.classList.remove("peek")}ei&&(ei.value=String(le.brightness),dn.toneMappingExposure=le.brightness*Ma,ei.addEventListener("pointerdown",Ac),window.addEventListener("pointerup",Eo),window.addEventListener("pointercancel",Eo),ei.addEventListener("input",()=>{dn.toneMappingExposure=parseFloat(ei.value)*Ma,le.brightness=parseFloat(ei.value),ds(),Ac(),Cu=window.setTimeout(Eo,1e3)}));const Or=new of,Pe=new fn(72,window.innerWidth/window.innerHeight,.1,120),me=I_(Or),ae=new lg(dn.domElement),ge=new cg;vg();const on=new xg,Cr=new xf,To=document.getElementById("pain");function Ka(n){To&&(To.style.opacity=String(Math.min(.55,n*.09)),To.classList.toggle("acute",n>=4))}const Ji=document.getElementById("sound-btn");function Za(){on.setMuted(le.muted),Ji&&(Ji.textContent=le.muted?"🔇":"🔊",Ji.setAttribute("aria-label",le.muted?"소리 켜기":"소리 끄기"))}function Pu(){le.muted=!le.muted,ds(),Za()}Ji==null||Ji.addEventListener("click",Pu);window.addEventListener("keydown",n=>{n.code==="KeyM"&&Pu()});Za();let Fe="gate",de="return",as=!1,bo=!1,Ce=le.night,Ue=0,qe=$t.segments,be=1,je=0,ps=0,Br=!1,yi=0,Pr=0,Di=0,Lr=-1,Ei=0,Ti=0,ls=0,Cn=[],Sa=new Set,ya=0;const Wt={x:0,z:0};function Lu(){return de==="tutorial"?{chanceBonus:0,swarmFloor:0}:rg(Ce)}function G_(){const{chanceBonus:n}=Lu();return Math.min(.8+n,$t.baseAnomalyChance+n+ls/60*$t.chancePerMinute)}const ja=new URLSearchParams(location.search),Ja=ja.get("a"),V_=ja.has("t"),W_=Math.max(0,Math.min(5,Number(ja.get("anchor")??2)||0));let Du=null;const pr=()=>Du??Ja;let wo=!1;const Iu={camera:Pe,scene:Or,segLength:$t.segLength,corridorHalfWidth:$t.corridorHalfWidth,segments:$t.segments,nights:ii,anomalies:va.map(n=>({id:n.id,effect:n.effect,segment:n.segment,label:`${n.id} ${n.effect} (${n.rule==="avert"?"형체":"흔적"})`})),snapshot:()=>({night:Ce,done:Ue,total:qe,theme:be,depth:je,stretches:ps,morning:de==="tutorial"}),relock:()=>ae.activate(),jump:n=>{n.effect!==void 0&&(Du=n.effect),n.night!==void 0&&(Ce=Math.max(1,Math.floor(n.night))),n.morning!==void 0&&(de=n.morning?"tutorial":"return"),Fr(me,n.daylight??de==="tutorial"),tl(),n.theme!==void 0&&(be=Math.max(1,Math.min($t.segments,n.theme))),Ue=de==="return"?$t.segments-be:be-1,n.depth!==void 0&&(je=Math.max(0,Math.min($t.depthLimit-1,n.depth))),Ei=Xt.tutBeats.length,Ti=Number.MAX_SAFE_INTEGER,ks(),Ka(je),Fe="walk"}},Qi=new z_(Iu);function Qa(){return Ue===qe-1?"dusk":"afternoon"}function Ea(){return Qa()==="afternoon"?.007:.012}function ks(n=!1,t=-.5){Wt.x=0,Wt.z=t,ae.yaw=0,ae.pitch=0,Fu(),ba(Cc()),y_(me,be);const e=de==="tutorial",i=va.filter(a=>(a.segment===be||a.segment===0)&&a.night<=Ce&&!Sa.has(a.id)),s=ci(Ce).onboarding,r=!pr()&&s&&Ue===0,o=s&&ya===0&&(de==="return"?be<=2:be>=$t.segments-1);if(e)Cn=[];else if(pr()){const a=va.filter(c=>c.effect===pr()&&(c.segment===be||c.segment===0)),l=a.find(c=>c.night<=Ce)??a[0];Cn=l?[l]:[]}else if(i.length>0&&!r&&(o||Math.random()<G_())){const a=Math.min(ag(Di+Lu().swarmFloor),i.length),l=[...i].sort(()=>Math.random()-.5),c={gaze:l.filter(f=>f.rule==="gaze"),avert:l.filter(f=>f.rule==="avert")},u=[];let h=Math.random()<.5?"gaze":"avert";for(;u.length<a;){const f=h==="gaze"?"avert":"gaze",m=c[h].shift()??c[f].shift();if(!m)break;u.push(m),h=f}Cn=u,ya+=u.length}else Cn=[];Sa=new Set(Cn.map(a=>a.id)),Cn.some(a=>a.effect==="figure")&&(me.group.userData.figureAnchor=pr()?W_:Math.floor(Math.random()*xu.length)),P_(me),Lr=-1,e&&Fr(me,!0,Qa()),E_(me,be===$t.segments,e),wu(me,je),Ka(je),g_(me,Cn.map(a=>a.effect)),T_(me,Br&&!e),on.duck(Cn.length>0),Ru(me,Ue===qe-1,de!=="return"),b_(me,de==="return"&&Ue===0),w_(me,de!=="return"),ba(Cc()),n?(ge.setStatusStretch(Ta()),on.stretch()):ge.setStatus(Ta())}function Ta(){return de==="tutorial"?`퇴근길 — ${Xt.segLabel(Ue+1,qe,be)}`:de==="return"?`${Xt.nightLabel(Ce)} — 돌아가는 길 ${Xt.segLabel(Ue+1,qe,be)}`:`${Xt.nightLabel(Ce)} — ${Xt.segLabel(Ue+1,qe,be)}`}function X_(){qe+=1,Pr+=1,ps+=1,Di=Math.min($t.swarmMax,Di+1),je+=$t.growDepthCost,le.misses+=1,ds(),Ru(me,Ue===qe-1,de!=="return"),wu(me,je),Ka(je),ge.setStatusStretch(Ta()),on.stretch(),je>=$t.depthLimit&&nl()}const Ri={move:!1,hintZ:0},Uu=()=>ae.usesTouch||"ontouchstart"in window;function tl(){Ue=0,qe=$t.segments,be=1,je=0,ps=0,Di=0,Br=!1,ls=0,Sa=new Set,ya=0,yi=0,Pr=0,Lr=-1}async function q_(){de="tutorial",tl(),Ue=$t.segments-2,be=$t.segments-1,Fr(me,!0,Qa()),ks(!1,-36*.24),Fe="walk",Ei=0,Ri.move||(Ri.hintZ=Wt.z,ge.showHint(Uu()?Xt.hintMoveTouch:Xt.hintMovePc))}async function el(){de="return",tl(),be=$t.segments,Fr(me,!1),ks(),Fe="walk",Ti=0,ge.say(ci(Ce).intro,4200),ci(Ce).onboarding&&!Ri.move&&(Ri.hintZ=Wt.z,ge.showHint(Uu()?Xt.hintMoveTouch:Xt.hintMovePc))}async function Nu(){ci(Ce).onboarding&&!Ja&&(V_||!le.tut)?await q_():await el()}async function nl(){Fe="transition",await ge.fadeOut(1400),await ge.blackScreen(Xt.softFail,Xt.softFailBtn),ae.activate(),await Nu(),await ge.fadeIn(900)}async function Y_(){Fe="transition",await ge.fadeOut(800),await ge.blackScreen(Xt.tutShopArrive,Xt.tutShopBtn),le.tut=!0,ds(),await ge.blackScreen(Xt.tutDusk,Xt.tutDuskBtn),ae.activate(),await el(),await ge.fadeIn(1100)}async function $_(){Fe="transition",await ge.fadeOut(800);const n=og(ps),t=n==="crispy"?Xt.homeCrispy:n==="lukewarm"?Xt.homeLukewarm:Xt.homeSoggy;le.results[Ce-1]=n,le.night=Ce+1,ds(),await ge.blackScreen(Xt.homeArrive,Xt.homeOpen);const e=Ce>ii?"…도장 찍을 칸이, 이제 없다":`도장 ${"●".repeat(Ce)}${"○".repeat(ii-Ce)}`;await ge.arrivalScene({gauge:`${Xt.homeGauge[n]} · ${e}`,result:t,epilogue:ci(Ce).epilogue,steps:[Xt.homeSit,Xt.homeEnd],endLabel:Xt.homeEnd,bg:n==="crispy"?"#181008":n==="lukewarm"?"#100e12":"#0a0d16",onBite:()=>{}}),ae.activate(),Ce+=1,await ge.blackScreen(Xt.nightOpen(Ce),Xt.nightOpenBtn),ae.activate(),await el(),await ge.fadeIn(900)}async function K_(){Fe==="walk"&&(Fe="transition",Ar(me,1,de==="tutorial"?.008:.044),on.duck(!0),await new Promise(n=>setTimeout(n,900)),ae.yaw=0,ae.pitch=0,Wt.z=Ve*.42,ge.say(Xt.turnedBack,3400),Fe="walk")}async function Z_(){Fe==="walk"&&await j_(de==="tutorial"?Xt.carHitDay:Xt.carHit)}async function j_(n){if(Fe==="walk"){if(Fe="transition",ps+=1,qe+=1,je+=$t.stretchDepthCost,Di=Math.min($t.swarmMax,Di+1),le.misses+=1,ds(),on.duck(!0),await ge.fadeOut(700),Ue+=1,je>=$t.depthLimit){await nl();return}Br=!0,ks(!0),ge.say(de==="tutorial"?n:`${n}
${Xt.stretchNotice}`,3800),Fe="walk",await ge.fadeIn(700)}}async function J_(){if(Ue+=1,je>=$t.depthLimit){await nl();return}if(Ue>=qe){de==="tutorial"?await Y_():await $_();return}const n=Pr>0;n&&(Pr-=1),Br=n,n||(be=de==="return"?Math.max(be-1,1):Math.min(be+1,$t.segments)),ks(n,Ve*.6)}const Ts=new N,En=new us,Ao=new N,Rc=new su;function Q_(n,t){for(let e=n;e;e=e.parent)if(e===t)return!0;return!1}function tv(n){for(let t=n;t;t=t.parent)if(!t.visible)return!1;return!0}function ev(){return Cn.map(n=>{const t=me.hit[n.effect],e=[];for(const l of t)l.traverse(c=>{c.isMesh&&e.push(c)});let i=!1,s=1/0,r=null;for(const l of e){if(En.setFromObject(l),En.isEmpty())continue;En.getCenter(Ao),s=Math.min(s,Ao.distanceTo(Pe.position)),Rc.set(Pe.position,Ao.clone().sub(Pe.position).normalize());const c=Rc.intersectObject(Or,!0).find(u=>tv(u.object));c&&t.some(u=>Q_(c.object,u))?i=!0:r===null&&c&&(r=Math.round(c.distance*10)/10)}const o=l=>Math.round(l*1e3)/1e3,a=[];for(const l of e){if(En.setFromObject(l),En.isEmpty())continue;let c=1/0,u=1/0,h=-1/0,f=-1/0,m=!1;for(let g=0;g<8;g++){if(Ts.set(g&1?En.max.x:En.min.x,g&2?En.max.y:En.min.y,g&4?En.max.z:En.min.z),Ts.project(Pe),Ts.z>=1){m=!1;break}m=!0;const _=(Ts.x+1)/2,p=(1-Ts.y)/2;c=Math.min(c,_),h=Math.max(h,_),u=Math.min(u,p),f=Math.max(f,p)}m&&a.push({x0:o(c),y0:o(u),x1:o(h),y1:o(f)})}return{id:n.id,rule:n.rule,parts:e.length,dist:Math.round(s*10)/10,clear:i,blockedAt:i?null:r,rects:a}})}const ti=document.getElementById("walk-btn");if(ti){let t=null;const e={x:0,y:0},i=s=>{s.pointerId===t&&(t=null,ae.touchForward=0,ae.touchStrafe=0,ti.classList.remove("held"))};ti.addEventListener("pointerdown",s=>{t=s.pointerId,ae.usesTouch=!0,ae.touchForward=1,ae.touchStrafe=0,e.x=s.clientX,e.y=s.clientY,ti.classList.add("held"),ti.setPointerCapture(s.pointerId)}),ti.addEventListener("pointermove",s=>{if(s.pointerId!==t)return;const r=s.clientX-e.x,o=s.clientY-e.y,a=Math.abs(o)>=16?-Math.sign(o):0,l=Math.abs(r)>=16?Math.sign(r):0;ae.touchForward=a===0&&l===0?1:a,ae.touchStrafe=l}),ti.addEventListener("pointerup",i),ti.addEventListener("pointercancel",i)}const mr=$t.corridorHalfWidth;function ba(n){const e=Ue===qe-1?0:Math.max(0,(-36-Wt.z)/Ve),i=Math.max(0,Wt.z/Ve);Ar(me,Math.min(1,Math.max(e,i)*2),n)}function Cc(){return de==="tutorial"?Ea():.044+Math.min(.018,ls/60*.0035)+Math.min(.02,je*.0035)}function Fu(){Pe.position.set(Wt.x,1.65,Wt.z),Pe.rotation.set(0,0,0),Pe.rotateY(ae.yaw),Pe.rotateX(ae.pitch)}function nv(n){if(Qi.active){Qi.fly(n,ae.yaw,ae.pitch,u=>ae.isDown(u));const c=de==="tutorial"?Ea():.044;if(Qi.clearView)Ar(me,0,.004);else{const u=Math.max(Ue===qe-1?0:Math.max(0,(-36-Pe.position.z)/Ve),Math.max(0,Pe.position.z/Ve));Ar(me,Math.min(1,u*2),c)}Pe.rotation.set(0,0,0),Pe.rotateY(ae.yaw),Pe.rotateX(ae.pitch),wo=!0;return}wo&&(wo=!1,Wt.x=Math.max(-mr+.4,Math.min(mr-.4,Pe.position.x)),Wt.z=Math.max(-36+.6,Math.min(Ve-.7,Pe.position.z))),ls+=n;const t=ae.getMove(),e=Math.abs(t.forward)+Math.abs(t.strafe)>.1;if(on.update(n,e),de==="return"){const c=be===4&&!Us(Ai)&&Wt.z>yo&&Wt.z<yo+6;if(e?yi=Math.max(0,yi-n*$t.stillDrainMul):c||(yi+=n),yi>=$t.stillGrowSec&&(yi-=$t.stillGrowSec,X_(),Fe!=="walk"))return}const i=de==="tutorial"?Ea():.044+Math.min(.018,ls/60*.0035)+Math.min(.02,je*.0035);ba(i);const s=Math.sin(ae.yaw),r=Math.cos(ae.yaw),o=t.forward*$t.walkSpeed*(t.forward<0?$t.backFactor:1),a=t.strafe*$t.walkSpeed*$t.strafeFactor;if(Wt.x+=(s*-o+r*a)*n,Wt.z+=(-r*o-s*a)*n,Wt.x=Math.max(-mr+.4,Math.min(mr-.4,Wt.x)),Wt.z=Math.min(Ve-.7,Wt.z),de==="tutorial"){for(;Ei<Xt.tutBeats.length&&Xt.tutBeats[Ei].theme<be;)Ei+=1;const c=Xt.tutBeats[Ei];c&&c.theme===be&&Wt.z<=c.z&&(ge.say(c.text,3600),Ei+=1)}else if(de==="return"){const c=ci(Ce).beats??[],u=f=>f<0?qe-1:f;for(;Ti<c.length&&u(c[Ti].at)<Ue;)Ti+=1;const h=c[Ti];h&&u(h.at)===Ue&&Wt.z<=h.z&&(ge.say(h.text,3800),Ti+=1)}if(be===4){const c=Wt.z<yo&&Wt.z>Te-vn-1,u=Math.floor(Ai/Xa);if(!Us(Ai)&&Lr!==u&&(Lr=u,L_(me,Ai,u%2===0?1:-1),on.carPass(pu),de!=="tutorial"&&c&&ge.say(Xt.carComing,2e3)),c&&D_(me)&&Math.abs(Wt.z-me.car.position.z)<2.4){Z_();return}}if(ci(Ce).onboarding&&!Ri.move&&Ri.hintZ-Wt.z>6&&(Ri.move=!0,ge.hideHint()),Wt.z>=Ve*.72){K_();return}const l=Ue===qe-1?-36-.2:Hg;if(Wt.z<l&&Math.abs(Wt.x)<ws+.4){J_();return}if(Wt.z<-36+.5&&Math.abs(Wt.x)>=ws&&(Wt.z=-36+.5),Wt.z>-.5&&Math.abs(Wt.x)>=ws&&(Wt.z=-.5),Wt.z<-36||Wt.z>0){const c=mu-.25;Wt.x=Math.max(-c,Math.min(c,Wt.x))}Fu()}let Ai=0;function Ou(){const n=Math.min(Cr.getDelta(),.1);Ai+=n,Fe==="walk"&&nv(n),Qi.update(),C_(me,Ai),dn.render(Or,Pe),requestAnimationFrame(Ou)}async function iv(){Fe!=="walk"||bo||(bo=!0,Fe="transition",on.suspend(),await ge.blackScreen("…잠깐 골목 구석에서 숨을 골랐다.","계속 걷는다"),on.resume(),ae.activate(),Fe="walk",bo=!1)}$a.classList.remove("hidden");const Ro=document.getElementById("settings-panel");var Pc;(Pc=document.getElementById("settings-btn"))==null||Pc.addEventListener("click",()=>{Ro==null||Ro.classList.toggle("open")});const Co=document.getElementById("continue-info"),bi=document.getElementById("reset-btn"),sv="기록 삭제 · 처음부터";function Bu(){if(!Co||!bi)return;const n=O_();if(Co.style.display=n?"block":"none",bi.style.display=n?"inline-block":"none",n){const e=le.misses>0?` 그동안 ${le.misses}번, 골목이 늘어났다.`:"";Co.textContent=`이어하기 — ${Xt.nightLabel(le.night)}.${e}`}const t=document.getElementById("start-btn");t&&(t.textContent=le.tut?Xt.startBtnResume:Xt.startBtnFirst),rv()}function rv(){const n=document.getElementById("coupon"),t=document.querySelector("#coupon .c-stamps"),e=document.querySelector("#coupon .c-note");if(!n||!t||!e)return;n.style.display=le.night>1?"flex":"none";const i=le.night-1,s=Math.min(i,ii);t.innerHTML="●".repeat(s)+`<span class="empty">${"○".repeat(ii-s)}</span>`+(i>ii?" ●":""),e.textContent=i>ii?Xt.couponOverflow:"밤마다 하나씩"}let Po=!1;bi==null||bi.addEventListener("click",()=>{if(!Po){Po=!0,bi.textContent="정말 삭제할까요? (한 번 더 누르면 삭제)";return}F_(),Po=!1,bi.textContent=sv,Ce=le.night,ei&&(ei.value=String(le.brightness),dn.toneMappingExposure=le.brightness*Ma),Za(),Bu()});Bu();document.getElementById("start-btn").addEventListener("click",async()=>{var t;if(as)return;document.getElementById("start").classList.add("hidden"),as=!0,(t=document.activeElement)==null||t.blur(),on.start(),ae.activate(),il(),history.pushState({fries:1},""),await Nu()});window.addEventListener("popstate",()=>{as&&(history.pushState({fries:1},""),iv())});window.addEventListener("beforeunload",n=>{as&&Fe==="walk"&&n.preventDefault()});function il(){var t;(t=navigator.wakeLock)==null||t.request("screen").catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.hidden?(Cr.stop(),on.suspend()):(Cr.start(),on.resume(),as&&il())});window.addEventListener("pageshow",n=>{n.persisted&&(Cr.start(),on.resume(),as&&il())});document.addEventListener("gesturestart",n=>n.preventDefault());dn.domElement.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{Pe.aspect=window.innerWidth/window.innerHeight,Pe.updateProjectionMatrix(),dn.setSize(window.innerWidth,window.innerHeight)});window.__fries={state:()=>({phase:Fe,mode:de,night:Ce,done:Ue,total:qe,theme:be,depth:je,stretches:ps,swarm:Di,active:Cn.length,still:Math.round(yi*100)/100,grown:qe-$t.segments,green:Us(Ai),carX:me.car.visible?Math.round(me.car.position.x*10)/10:null,elapsed:Math.round(ls*10)/10,x:Math.round(Wt.x*100)/100,z:Math.round(Wt.z*100)/100}),config:()=>({...$t}),admin:{on:()=>Qi.active,cam:()=>({x:Pe.position.x,y:Pe.position.y,z:Pe.position.z}),toggle:()=>Qi.toggle(),jump:n=>Iu.jump(n)},...Ja!==null?{occlusion:()=>ev()}:{}};Pe.position.set(0,1.65,0);Ou();
