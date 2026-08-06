(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yo="178",Iu=0,sl=1,Uu=2,yc=1,Nu=2,Gn=3,oi=0,nn=1,Pn=2,ri=0,Zi=1,rl=2,al=3,ol=4,Fu=5,Si=100,Ou=101,Bu=102,zu=103,Hu=104,ku=200,Gu=201,Vu=202,Wu=203,Aa=204,Ra=205,Xu=206,qu=207,Yu=208,$u=209,Ku=210,Zu=211,ju=212,Ju=213,Qu=214,Ca=0,Pa=1,La=2,es=3,Da=4,Ia=5,Ua=6,Na=7,Ec=0,th=1,eh=2,ai=0,nh=1,ih=2,sh=3,Tc=4,rh=5,ah=6,oh=7,bc=300,ns=301,is=302,Fa=303,Oa=304,Lr=306,As=1e3,ii=1001,Ba=1002,wn=1003,lh=1004,Vs=1005,Ln=1006,zr=1007,Ai=1008,Un=1009,wc=1010,Ac=1011,Rs=1012,Eo=1013,Ci=1014,Wn=1015,Fs=1016,To=1017,bo=1018,Cs=1020,Rc=35902,Cc=1021,Pc=1022,bn=1023,Ps=1026,Ls=1027,Lc=1028,wo=1029,Dc=1030,Ao=1031,Ro=1033,mr=33776,gr=33777,_r=33778,vr=33779,za=35840,Ha=35841,ka=35842,Ga=35843,Va=36196,Wa=37492,Xa=37496,qa=37808,Ya=37809,$a=37810,Ka=37811,Za=37812,ja=37813,Ja=37814,Qa=37815,to=37816,eo=37817,no=37818,io=37819,so=37820,ro=37821,xr=36492,ao=36494,oo=36495,Ic=36283,lo=36284,co=36285,uo=36286,ch=3200,uh=3201,Uc=0,hh=1,ni="",en="srgb",ss="srgb-linear",yr="linear",fe="srgb",Ui=7680,ll=519,fh=512,dh=513,ph=514,Nc=515,mh=516,gh=517,_h=518,vh=519,cl=35044,ul="300 es",Xn=2e3,Er=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,ho=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function xh(n,t){return(n%t+t)%t}function kr(n,t,e){return(1-e)*n+e*t}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const R=Math.sqrt(E),T=Math.atan2(R,f*w);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const M=o*w;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new U,hl=new Bs;class kt{constructor(t,e,i,s,r,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],w=s[1],E=s[4],M=s[7],R=s[2],T=s[5],b=s[8];return r[0]=a*_+o*w+l*R,r[3]=a*m+o*E+l*T,r[6]=a*f+o*M+l*b,r[1]=c*_+h*w+u*R,r[4]=c*m+h*E+u*T,r[7]=c*f+h*M+u*b,r[2]=d*_+p*w+g*R,r[5]=d*m+p*E+g*T,r[8]=d*f+p*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new kt;function Fc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mh(){const n=Tr("canvas");return n.style.display="block",n}const fl={};function ji(n){n in fl||(fl[n]=!0,console.warn(n))}function Sh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function yh(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Eh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const dl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?yr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ss]:{primaries:t,whitePoint:i,transfer:yr,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),n}const ie=Th();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ni;class bh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ni===void 0&&(Ni=Tr("canvas")),Ni.width=t.width,Ni.height=t.height;const s=Ni.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ni}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qn(e[i]/255)*255):e[i]=qn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class Co{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Wr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ah=0;const Xr=new U;class sn extends ls{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ii,s=ii,r=Ln,a=Ai,o=bn,l=Un,c=sn.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Os(),this.name="",this.source=new Co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case As:t.x=t.x-Math.floor(t.x);break;case ii:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case As:t.y=t.y-Math.floor(t.y);break;case ii:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=bc;sn.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(p+1)/2,R=(f+1)/2,T=(h+d)/4,b=(u+_)/4,L=(g+m)/4;return E>M&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=b/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=b/r,s=L/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rh extends ls{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new sn(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Co(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Rh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Oc extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Xs.subVectors(this.max,gs),Fi.subVectors(t.a,gs),Oi.subVectors(t.b,gs),Bi.subVectors(t.c,gs),$n.subVectors(Oi,Fi),Kn.subVectors(Bi,Oi),fi.subVectors(Fi,Bi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!qr(e,Fi,Oi,Bi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,Fi,Oi,Bi,Xs))?!1:(qs.crossVectors($n,Kn),e=[qs.x,qs.y,qs.z],qr(e,Fi,Oi,Bi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Ws=new cs,Fi=new U,Oi=new U,Bi=new U,$n=new U,Kn=new U,fi=new U,gs=new U,Xs=new U,qs=new U,di=new U;function qr(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){di.fromArray(n,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=i.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ph=new cs,_s=new U,Yr=new U;class Dr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ph.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Yr)),this.expandByPoint(_s.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Bn=new U,$r=new U,Ys=new U,Zn=new U,Kr=new U,$s=new U,Zr=new U;class Po{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){$r.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ys),o=Zn.dot(this.direction),l=-Zn.dot(Ys),c=Zn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(Ys,d),p}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const i=Bn.dot(this.direction),s=Bn.dot(Bn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,i,s,r){Kr.subVectors(e,t),$s.subVectors(i,t),Zr.crossVectors(Kr,$s);let a=this.direction.dot(Zr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(Zn,$s));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Zn));if(c<0||l+c>a)return null;const h=-o*Zn.dot(Zr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,i,s,r,a,o,l,c,h,u,d,p,g,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,i,s,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lh,t,Dh)}lookAt(t,e,i){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),jn.crossVectors(i,fn),jn.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),jn.crossVectors(i,fn)),jn.normalize(),Ks.crossVectors(fn,jn),s[0]=jn.x,s[4]=Ks.x,s[8]=fn.x,s[1]=jn.y,s[5]=Ks.y,s[9]=fn.y,s[2]=jn.z,s[6]=Ks.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],w=i[3],E=i[7],M=i[11],R=i[15],T=s[0],b=s[4],L=s[8],y=s[12],x=s[1],P=s[5],z=s[9],O=s[13],Y=s[2],Z=s[6],X=s[10],q=s[14],H=s[3],st=s[7],at=s[11],Mt=s[15];return r[0]=a*T+o*x+l*Y+c*H,r[4]=a*b+o*P+l*Z+c*st,r[8]=a*L+o*z+l*X+c*at,r[12]=a*y+o*O+l*q+c*Mt,r[1]=h*T+u*x+d*Y+p*H,r[5]=h*b+u*P+d*Z+p*st,r[9]=h*L+u*z+d*X+p*at,r[13]=h*y+u*O+d*q+p*Mt,r[2]=g*T+_*x+m*Y+f*H,r[6]=g*b+_*P+m*Z+f*st,r[10]=g*L+_*z+m*X+f*at,r[14]=g*y+_*O+m*q+f*Mt,r[3]=w*T+E*x+M*Y+R*H,r[7]=w*b+E*P+M*Z+R*st,r[11]=w*L+E*z+M*X+R*at,r[15]=w*y+E*O+M*q+R*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*p-i*l*p)+_*(+e*l*p-e*c*d+r*a*d-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+f*(-s*o*h-e*l*u+e*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],w=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,E=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,M=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*w+i*E+s*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=w*b,t[1]=(_*d*r-u*m*r-_*s*p+i*m*p+u*s*f-i*d*f)*b,t[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*f+i*l*f)*b,t[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*p-i*l*p)*b,t[4]=E*b,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*b,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*f-e*l*f)*b,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*p+e*l*p)*b,t[8]=M*b,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*f-e*u*f)*b,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*f+e*o*f)*b,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*b,t[12]=R*b,t[13]=(h*_*s-g*u*s+g*i*d-e*_*d-h*i*m+e*u*m)*b,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*m-e*o*m)*b,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*d+e*o*d)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,w=l*c,E=l*h,M=l*u,R=i.x,T=i.y,b=i.z;return s[0]=(1-(_+f))*R,s[1]=(p+M)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(d+f))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+E)*b,s[9]=(m-w)*b,s[10]=(1-(d+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Xn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let p,g;if(o===Xn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Er)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Xn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),d=(e+t)*c,p=(i+s)*h;let g,_;if(o===Xn)g=(a+r)*u,_=-2*u;else if(o===Er)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zi=new U,Sn=new ye,Lh=new U(0,0,0),Dh=new U(1,1,1),jn=new U,Ks=new U,fn=new U,ml=new ye,gl=new Bs;class Nn{constructor(t=0,e=0,i=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Lo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ih=0;const _l=new U,Hi=new Bs,zn=new ye,Zs=new U,vs=new U,Uh=new U,Nh=new Bs,vl=new U(1,0,0),xl=new U(0,1,0),Ml=new U(0,0,1),Sl={type:"added"},Fh={type:"removed"},ki={type:"childadded",child:null},jr={type:"childremoved",child:null};class Ve extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new U,e=new Nn,i=new Bs,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new kt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zs.copy(t):Zs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(vs,Zs,this.up):zn.lookAt(Zs,vs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(zn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fh),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,Uh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new U(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new U,Hn=new U,Jr=new U,kn=new U,Gi=new U,Vi=new U,yl=new U,Qr=new U,ta=new U,ea=new U,na=new de,ia=new de,sa=new de;class En{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),Hn.subVectors(i,e),Jr.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Hn),l=yn.dot(Jr),c=Hn.dot(Hn),h=Hn.dot(Jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(na,r.x),a.addScaledVector(ia,r.y),a.addScaledVector(sa,r.z),a}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),Hn.subVectors(t,e),yn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return En.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,i),Vi.subVectors(r,i),Qr.subVectors(t,i);const l=Gi.dot(Qr),c=Vi.dot(Qr);if(l<=0&&c<=0)return e.copy(i);ta.subVectors(t,s);const h=Gi.dot(ta),u=Vi.dot(ta);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Gi,a);ea.subVectors(t,r);const p=Gi.dot(ea),g=Vi.dot(ea);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Vi,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return yl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(yl,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(i).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},js={h:0,s:0,l:0};function ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=xh(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ra(a,r,t+1/3),this.g=ra(a,r,t),this.b=ra(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const i=Bc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ie.workingToColorSpace(qe.copy(this),t),Math.round(Zt(qe.r*255,0,255))*65536+Math.round(Zt(qe.g*255,0,255))*256+Math.round(Zt(qe.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);const i=qe.r,s=qe.g,r=qe.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=en){ie.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,s=qe.b;return t!==en?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(js);const i=kr(Jn.h,js.h,e),s=kr(Jn.s,js.s,e),r=kr(Jn.l,js.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new $t;$t.NAMES=Bc;let Oh=0;class us extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Zi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=Ra,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Aa&&(i.blendSrc=this.blendSrc),this.blendDst!==Ra&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rs extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new U,Js=new Kt;let Bh=0;class Dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cl,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class zc extends Dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Hc extends Dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends Dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zh=0;const vn=new ye,aa=new Ve,Wi=new U,dn=new cs,xs=new cs,He=new U;class mn extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?Hc:zc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xs.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(dn.min,xs.min),dn.expandByPoint(He),He.addVectors(dn.max,xs.max),dn.expandByPoint(He)):(dn.expandByPoint(xs.min),dn.expandByPoint(xs.max))}dn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)He.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(He));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),He.add(Wi)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,u=new U,d=new Kt,p=new Kt,g=new Kt,_=new U,m=new U;function f(L,y,x){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[y].add(_),o[x].add(_),l[L].add(m),l[y].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,y=w.length;L<y;++L){const x=w[L],P=x.start,z=x.count;for(let O=P,Y=P+z;O<Y;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const E=new U,M=new U,R=new U,T=new U;function b(L){R.fromBufferAttribute(s,L),T.copy(R);const y=o[L];E.copy(y),E.sub(R.multiplyScalar(R.dot(y))).normalize(),M.crossVectors(T,y);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,y=w.length;L<y;++L){const x=w[L],P=x.start,z=x.count;for(let O=P,Y=P+z;O<Y;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new ye,pi=new Po,Qs=new Dr,Tl=new U,tr=new U,er=new U,nr=new U,oa=new U,ir=new U,bl=new U,sr=new U;class dt extends Ve{constructor(t=new mn,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(oa.fromBufferAttribute(u,t),a?ir.addScaledVector(oa,h):ir.addScaledVector(oa.sub(e),h))}e.add(ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(Qs.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Qs,Tl)===null||pi.origin.distanceToSquared(Tl)>(t.far-t.near)**2))&&(El.copy(r).invert(),pi.copy(t.ray).applyMatrix4(El),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=E;M<R;M+=3){const T=o.getX(M),b=o.getX(M+1),L=o.getX(M+2);s=rr(this,f,t,i,c,h,u,T,b,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=rr(this,a,t,i,c,h,u,w,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=E;M<R;M+=3){const T=M,b=M+1,L=M+2;s=rr(this,f,t,i,c,h,u,T,b,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,E=m+1,M=m+2;s=rr(this,a,t,i,c,h,u,w,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Hh(n,t,e,i,s,r,a,o){let l;if(t.side===nn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;sr.copy(o),sr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:n}}function rr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,tr),n.getVertexPosition(l,er),n.getVertexPosition(c,nr);const h=Hh(n,t,e,i,tr,er,nr,bl);if(h){const u=new U;En.getBarycoord(bl,tr,er,nr,u),s&&(h.uv=En.getInterpolatedAttribute(s,o,l,c,u,new Kt)),r&&(h.uv1=En.getInterpolatedAttribute(r,o,l,c,u,new Kt)),a&&(h.normal=En.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};En.getNormal(tr,er,nr,d.normal),h.face=d,h.barycoord=u}return h}class Jt extends mn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(_,m,f,w,E,M,R,T,b,L,y){const x=M/b,P=R/L,z=M/2,O=R/2,Y=T/2,Z=b+1,X=L+1;let q=0,H=0;const st=new U;for(let at=0;at<X;at++){const Mt=at*P-O;for(let Gt=0;Gt<Z;Gt++){const te=Gt*x-z;st[_]=te*w,st[m]=Mt*E,st[f]=Y,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[f]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(Gt/b),u.push(1-at/L),q+=1}}for(let at=0;at<L;at++)for(let Mt=0;Mt<b;Mt++){const Gt=d+Mt+Z*at,te=d+Mt+Z*(at+1),K=d+(Mt+1)+Z*(at+1),rt=d+(Mt+1)+Z*at;l.push(Gt,te,rt),l.push(te,K,rt),H+=6}o.addGroup(p,H,y),p+=H,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=as(n[e]);for(const s in i)t[s]=i[s]}return t}function kh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Gh={clone:as,merge:Qe};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=kh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Gc extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new U,wl=new Kt,Al=new Kt;class pn extends Gc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,wl,Al),e.subVectors(Al,wl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Xi=-90,qi=1;class Xh extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new pn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new pn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new pn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new pn(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new pn(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vc extends sn{constructor(t=[],e=ns,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qh extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:ri});r.uniforms.tEquirect.value=e;const a=new dt(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Ln),new Xh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}class Qt extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yh={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Do{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Do(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $h extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ca=new U,Kh=new U,Zh=new kt;class xi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ca.subVectors(i,e).cross(Kh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Zh.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Dr,jh=new Kt(.5,.5),ar=new U;class Io{constructor(t=new xi,e=new xi,i=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],w=s[13],E=s[14],M=s[15];if(i[0].setComponents(l-r,d-c,m-p,M-f).normalize(),i[1].setComponents(l+r,d+c,m+p,M+f).normalize(),i[2].setComponents(l+a,d+h,m+g,M+w).normalize(),i[3].setComponents(l-a,d-h,m-g,M-w).normalize(),i[4].setComponents(l-o,d-u,m-_,M-E).normalize(),e===Xn)i[5].setComponents(l+o,d+u,m+_,M+E).normalize();else if(e===Er)i[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){mi.center.set(0,0,0);const e=jh.distanceTo(t.center);return mi.radius=.7071067811865476+e,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wc extends us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const br=new U,wr=new U,Rl=new ye,Ms=new Po,or=new Dr,ua=new U,Cl=new U;class Jh extends Ve{constructor(t=new mn,e=new Wc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)br.fromBufferAttribute(e,s-1),wr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=br.distanceTo(wr);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),or.copy(i.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;Rl.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),w=h.getX(_+1),E=lr(this,t,Ms,l,f,w,_);E&&e.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=lr(this,t,Ms,l,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=lr(this,t,Ms,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=lr(this,t,Ms,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function lr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(br.fromBufferAttribute(o,s),wr.fromBufferAttribute(o,r),e.distanceSqToSegment(br,wr,ua,Cl)>i)return;ua.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ua);if(!(c<t.near||c>t.far))return{distance:c,point:Cl.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Pl=new U,Ll=new U;class Qh extends Jh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pl.fromBufferAttribute(e,s),Ll.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pl.distanceTo(Ll);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uo extends sn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xc extends sn{constructor(t,e,i=Ci,s,r,a,o=wn,l=wn,c,h=Ps,u=1){if(h!==Ps&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zs extends mn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new U,h=new Kt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class No extends mn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=i/2;let f=0;w(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(d,3)),this.setAttribute("uv",new Pe(p,2));function w(){const M=new U,R=new U;let T=0;const b=(e-t)/i;for(let L=0;L<=r;L++){const y=[],x=L/r,P=x*(e-t)+t;for(let z=0;z<=s;z++){const O=z/s,Y=O*l+o,Z=Math.sin(Y),X=Math.cos(Y);R.x=P*Z,R.y=-x*i+m,R.z=P*X,u.push(R.x,R.y,R.z),M.set(Z,b,X).normalize(),d.push(M.x,M.y,M.z),p.push(O,1-x),y.push(g++)}_.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const x=_[y][L],P=_[y+1][L],z=_[y+1][L+1],O=_[y][L+1];(t>0||y!==0)&&(h.push(x,P,O),T+=3),(e>0||y!==r-1)&&(h.push(P,z,O),T+=3)}c.addGroup(f,T,0),f+=T}function E(M){const R=g,T=new Kt,b=new U;let L=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const Y=z/s*l+o,Z=Math.cos(Y),X=Math.sin(Y);b.x=y*X,b.y=m*x,b.z=y*Z,u.push(b.x,b.y,b.z),d.push(0,x,0),T.x=Z*.5+.5,T.y=X*.5*x+.5,p.push(T.x,T.y),g++}for(let z=0;z<s;z++){const O=R+z,Y=P+z;M===!0?h.push(Y,Y+1,O):h.push(Y+1,Y,O),L+=3}c.addGroup(f,L,M===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends No{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const w=f*d-a;for(let E=0;E<c;E++){const M=E*u-r;g.push(M,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){const E=w+c*f,M=w+c*(f+1),R=w+1+c*(f+1),T=w+1+c*f;p.push(E,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oo extends mn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,p=new U,g=new Kt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const f=r+m/i*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let f=0;f<i;f++){const w=f+m,E=w,M=w+i+1,R=w+i+2,T=w+1;o.push(E,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class cn extends mn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const w=[],E=f/i;let M=0;f===0&&a===0?M=.5/e:f===i&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+M,1-E),w.push(c++)}h.push(w)}for(let f=0;f<i;f++)for(let w=0;w<e;w++){const E=h[f][w+1],M=h[f][w],R=h[f+1][w],T=h[f+1][w+1];(f!==0||a>0)&&p.push(E,M,T),(f!==i-1||l<Math.PI)&&p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qt extends us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tf extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ef extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bo extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ha=new ye,Dl=new U,Il=new U;class qc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Il),e.updateMatrixWorld(),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ul=new ye,Ss=new U,fa=new U;class nf extends qc{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ss),fa.copy(i.position),fa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(fa),i.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class In extends Bo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Yc extends Gc{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sf extends qc{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rf extends Bo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new sf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class af extends Bo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class of extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Nl=new ye;class $c{constructor(t,e,i=0,s=1/0){this.ray=new Po(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(t,e=!0,i=[]){return fo(t,this,i,e),i.sort(Fl),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)fo(t[s],this,i,e);return i.sort(Fl),i}}function Fl(n,t){return n.distance-t.distance}function fo(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)fo(r[a],t,e,!0)}}function Ol(n,t,e,i){const s=cf(i);switch(e){case Cc:return n*t;case Lc:return n*t/s.components*s.byteLength;case wo:return n*t/s.components*s.byteLength;case Dc:return n*t*2/s.components*s.byteLength;case Ao:return n*t*2/s.components*s.byteLength;case Pc:return n*t*3/s.components*s.byteLength;case bn:return n*t*4/s.components*s.byteLength;case Ro:return n*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Ga:return Math.max(n,16)*Math.max(t,8)/4;case za:case ka:return Math.max(n,8)*Math.max(t,8)/2;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case to:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xr:case ao:case oo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ic:case lo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case co:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cf(n){switch(n){case Un:case wc:return{byteLength:1,components:1};case Rs:case Ac:case Fs:return{byteLength:2,components:1};case To:case bo:return{byteLength:2,components:4};case Ci:case Eo:case Wn:return{byteLength:4,components:1};case Rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function uf(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,bf=`#ifdef USE_BUMPMAP
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
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
#endif`,cd=`struct PhysicalMaterial {
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
}`,ud=`
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
#endif`,hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
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
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
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
}`,_p=`#if DEPTH_PACKING == 3200
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
}`,vp=`#define DISTANCE
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
}`,xp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Ap=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Cp=`#define MATCAP
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Ip=`#define PHONG
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
}`,Up=`#define STANDARD
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define TOON
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
}`,Op=`#define TOON
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
}`,Bp=`uniform float size;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,kp=`uniform vec3 color;
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
}`,Gp=`uniform float rotation;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:hf,alphahash_pars_fragment:ff,alphamap_fragment:df,alphamap_pars_fragment:pf,alphatest_fragment:mf,alphatest_pars_fragment:gf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:xf,batching_vertex:Mf,begin_vertex:Sf,beginnormal_vertex:yf,bsdfs:Ef,iridescence_fragment:Tf,bumpmap_pars_fragment:bf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Af,clipping_planes_pars_vertex:Rf,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:If,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:zf,emissivemap_pars_fragment:Hf,colorspace_fragment:kf,colorspace_pars_fragment:Gf,envmap_fragment:Vf,envmap_common_pars_fragment:Wf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:id,envmap_vertex:Yf,fog_vertex:$f,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:jf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:td,lights_lambert_pars_fragment:ed,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:ud,lights_fragment_maps:hd,lights_fragment_end:fd,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:vd,map_particle_fragment:xd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Ed,morphcolor_vertex:Td,morphnormal_vertex:bd,morphtarget_pars_vertex:wd,morphtarget_vertex:Ad,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:Bd,packing:zd,premultiplied_alpha_fragment:Hd,project_vertex:kd,dithering_fragment:Gd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:$d,shadowmask_pars_fragment:Kd,skinbase_vertex:Zd,skinning_pars_vertex:jd,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:tp,specularmap_pars_fragment:ep,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,worldpos_vertex:cp,background_vert:up,background_frag:hp,backgroundCube_vert:fp,backgroundCube_frag:dp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:_p,distanceRGBA_vert:vp,distanceRGBA_frag:xp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:yp,linedashed_frag:Ep,meshbasic_vert:Tp,meshbasic_frag:bp,meshlambert_vert:wp,meshlambert_frag:Ap,meshmatcap_vert:Rp,meshmatcap_frag:Cp,meshnormal_vert:Pp,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:zp,shadow_vert:Hp,shadow_frag:kp,sprite_vert:Gp,sprite_frag:Vp},lt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Rn={basic:{uniforms:Qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Qe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Qe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Qe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Qe([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Qe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Qe([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Qe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Qe([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Qe([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Qe([lt.lights,lt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Rn.physical={uniforms:Qe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const cr={r:0,b:0,g:0},gi=new Nn,Wp=new ye;function Xp(n,t,e,i,s,r,a){const o=new $t(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const R=g(E);R===null?f(o,l):R&&R.isColor&&(f(R,1),M=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===Lr)?(h===void 0&&(h=new dt(new Jt(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:as(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(M.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(gi)),h.material.toneMapped=ie.getTransfer(R.colorSpace)!==fe,(u!==R||d!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new dt(new Le(2,2),new li({name:"BackgroundMaterial",uniforms:as(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(R.colorSpace)!==fe,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,M){E.getRGB(cr,kc(n)),i.buffers.color.setClear(cr.r,cr.g,cr.b,M,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(o,l)},render:_,addToRenderList:m,dispose:w}}function qp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,P,z,O,Y){let Z=!1;const X=u(O,z,P);r!==X&&(r=X,c(r.object)),Z=p(x,O,z,Y),Z&&g(x,O,z,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,M(x,P,z,O),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,P,z){const O=z.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let Z=Y[P.id];Z===void 0&&(Z={},Y[P.id]=Z);let X=Z[O];return X===void 0&&(X=d(l()),Z[O]=X),X}function d(x){const P=[],z=[],O=[];for(let Y=0;Y<e;Y++)P[Y]=0,z[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,P,z,O){const Y=r.attributes,Z=P.attributes;let X=0;const q=z.getAttributes();for(const H in q)if(q[H].location>=0){const at=Y[H];let Mt=Z[H];if(Mt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),at===void 0||at.attribute!==Mt||Mt&&at.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(x,P,z,O){const Y={},Z=P.attributes;let X=0;const q=z.getAttributes();for(const H in q)if(q[H].location>=0){let at=Z[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const Mt={};Mt.attribute=at,at&&at.data&&(Mt.data=at.data),Y[H]=Mt,X++}r.attributes=Y,r.attributesNum=X,r.index=O}function _(){const x=r.newAttributes;for(let P=0,z=x.length;P<z;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const z=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;z[x]=1,O[x]===0&&(n.enableVertexAttribArray(x),O[x]=1),Y[x]!==P&&(n.vertexAttribDivisor(x,P),Y[x]=P)}function w(){const x=r.newAttributes,P=r.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==x[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function E(x,P,z,O,Y,Z,X){X===!0?n.vertexAttribIPointer(x,P,z,Y,Z):n.vertexAttribPointer(x,P,z,O,Y,Z)}function M(x,P,z,O){_();const Y=O.attributes,Z=z.getAttributes(),X=P.defaultAttributeValues;for(const q in Z){const H=Z[q];if(H.location>=0){let st=Y[q];if(st===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const at=st.normalized,Mt=st.itemSize,Gt=t.get(st);if(Gt===void 0)continue;const te=Gt.buffer,K=Gt.type,rt=Gt.bytesPerElement,St=K===n.INT||K===n.UNSIGNED_INT||st.gpuType===Eo;if(st.isInterleavedBufferAttribute){const ft=st.data,yt=ft.stride,Vt=st.offset;if(ft.isInstancedInterleavedBuffer){for(let Tt=0;Tt<H.locationSize;Tt++)f(H.location+Tt,ft.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Tt=0;Tt<H.locationSize;Tt++)m(H.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Tt=0;Tt<H.locationSize;Tt++)E(H.location+Tt,Mt/H.locationSize,K,at,yt*rt,(Vt+Mt/H.locationSize*Tt)*rt,St)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<H.locationSize;ft++)f(H.location+ft,st.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<H.locationSize;ft++)m(H.location+ft);n.bindBuffer(n.ARRAY_BUFFER,te);for(let ft=0;ft<H.locationSize;ft++)E(H.location+ft,Mt/H.locationSize,K,at,Mt*rt,Mt/H.locationSize*ft*rt,St)}}else if(X!==void 0){const at=X[q];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(H.location,at);break;case 3:n.vertexAttrib3fv(H.location,at);break;case 4:n.vertexAttrib4fv(H.location,at);break;default:n.vertexAttrib1fv(H.location,at)}}}}w()}function R(){L();for(const x in i){const P=i[x];for(const z in P){const O=P[z];for(const Y in O)h(O[Y].object),delete O[Y];delete P[z]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const z in P){const O=P[z];for(const Y in O)h(O[Y].object),delete O[Y];delete P[z]}delete i[x.id]}function b(x){for(const P in i){const z=i[P];if(z[x.id]===void 0)continue;const O=z[x.id];for(const Y in O)h(O[Y].object),delete O[Y];delete z[x.id]}}function L(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Yp(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $p(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==bn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const L=b===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Un&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Wn&&!L)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function Kp(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new xi,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,E=w*4;let M=f.clippingState||null;l.value=M,M=h(g,d,E,p);for(let R=0;R!==E;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,M=p;E!==_;++E,M+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Zp(n){let t=new WeakMap;function e(a,o){return o===Fa?a.mapping=ns:o===Oa&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fa||o===Oa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new qh(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const $i=4,Bl=[.125,.215,.35,.446,.526,.582],yi=20,da=new Yc,zl=new $t;let pa=null,ma=0,ga=0,_a=!1;const Mi=(1+Math.sqrt(5))/2,Yi=1/Mi,Hl=[new U(-Mi,Yi,0),new U(Mi,Yi,0),new U(-Yi,0,Mi),new U(Yi,0,Mi),new U(0,Mi,-Yi),new U(0,Mi,Yi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],jp=new U;class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=jp}=r;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Fs,format:bn,colorSpace:ss,depthBuffer:!1},s=Gl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(r)),this._blurMaterial=Qp(r,t,e)}return s}_compileMaterial(t){const e=new dt(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,i,s,r){const l=new pn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(zl),u.toneMapping=ai,u.autoClear=!1;const g=new rs({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new dt(new Jt,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(zl),m=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):E===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const M=this._cubeSize;ur(s,E*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ns||t.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,da)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Hl[(s-r-1)%Hl.length];this._blur(t,r-1,r,a,o)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new dt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const f=[];let w=0;for(let b=0;b<yi;++b){const L=b/_,y=Math.exp(-L*L/2);f.push(y),b===0?w+=y:b<m&&(w+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const M=this._sizeLods[s],R=3*M*(s>E-$i?s-E+$i:0),T=4*(this._cubeSize-M);ur(e,R,T,3*M,2*M),l.setRenderTarget(e),l.render(u,da)}}function Jp(n){const t=[],e=[],i=[];let s=n;const r=n-$i+1+Bl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-$i?l=Bl[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),E=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,L=T>2?0:-1,y=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];w.set(y,_*g*T),E.set(d,m*g*T);const x=[T,T,T,T,T,T];M.set(x,f*g*T)}const R=new mn;R.setAttribute("position",new Dn(w,_)),R.setAttribute("uv",new Dn(E,m)),R.setAttribute("faceIndex",new Dn(M,f)),t.push(R),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gl(n,t,e){const i=new Pi(n,t,e);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ur(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Qp(n,t,e){const i=new Float32Array(yi),s=new U(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function tm(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fa||l===Oa,h=l===ns||l===is;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new kl(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new kl(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function em(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ji("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function nm(n,t,e,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let E=0,M=w.length;E<M;E+=3){const R=w[E+0],T=w[E+1],b=w[E+2];d.push(R,T,T,b,b,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,M=w.length/3-1;E<M;E+=3){const R=E+0,T=E+1,b=E+2;d.push(R,T,T,b,b,R)}}else return;const m=new(Fc(d)?Hc:zc)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function im(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*a),e.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function rm(n,t,e){const i=new WeakMap,s=new de;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=o.attributes.position.count*M,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*T*4*u),L=new Oc(b,R,T,u);L.type=Wn,L.needsUpdate=!0;const y=M*4;for(let P=0;P<u;P++){const z=f[P],O=w[P],Y=E[P],Z=R*T*4*P;for(let X=0;X<z.count;X++){const q=X*y;g===!0&&(s.fromBufferAttribute(z,X),b[Z+q+0]=s.x,b[Z+q+1]=s.y,b[Z+q+2]=s.z,b[Z+q+3]=0),_===!0&&(s.fromBufferAttribute(O,X),b[Z+q+4]=s.x,b[Z+q+5]=s.y,b[Z+q+6]=s.z,b[Z+q+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),b[Z+q+8]=s.x,b[Z+q+9]=s.y,b[Z+q+10]=s.z,b[Z+q+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new Kt(R,T)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function am(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Zc=new sn,Xl=new Xc(1,1),jc=new Oc,Jc=new Ch,Qc=new Vc,ql=[],Yl=[],$l=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ql[s];if(r===void 0&&(r=new Float32Array(s),ql[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ir(n,t){let e=Yl[t];e===void 0&&(e=new Int32Array(t),Yl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function om(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function cm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function hm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Zl.set(i),n.uniformMatrix2fv(this.addr,!1,Zl),ze(e,i)}}function fm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),ze(e,i)}}function dm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),ze(e,i)}}function pm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function vm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function xm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function ym(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Xl.compareFunction=Nc,r=Xl):r=Zc,e.setTexture2D(t||r,s)}function Em(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jc,s)}function Tm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qc,s)}function bm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||jc,s)}function wm(n){switch(n){case 5126:return om;case 35664:return lm;case 35665:return cm;case 35666:return um;case 35674:return hm;case 35675:return fm;case 35676:return dm;case 5124:case 35670:return pm;case 35667:case 35671:return mm;case 35668:case 35672:return gm;case 35669:case 35673:return _m;case 5125:return vm;case 36294:return xm;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return bm}}function Am(n,t){n.uniform1fv(this.addr,t)}function Rm(n,t){const e=hs(t,this.size,2);n.uniform2fv(this.addr,e)}function Cm(n,t){const e=hs(t,this.size,3);n.uniform3fv(this.addr,e)}function Pm(n,t){const e=hs(t,this.size,4);n.uniform4fv(this.addr,e)}function Lm(n,t){const e=hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dm(n,t){const e=hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Im(n,t){const e=hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Um(n,t){n.uniform1iv(this.addr,t)}function Nm(n,t){n.uniform2iv(this.addr,t)}function Fm(n,t){n.uniform3iv(this.addr,t)}function Om(n,t){n.uniform4iv(this.addr,t)}function Bm(n,t){n.uniform1uiv(this.addr,t)}function zm(n,t){n.uniform2uiv(this.addr,t)}function Hm(n,t){n.uniform3uiv(this.addr,t)}function km(n,t){n.uniform4uiv(this.addr,t)}function Gm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Zc,r[a])}function Vm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jc,r[a])}function Wm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qc,r[a])}function Xm(n,t,e){const i=this.cache,s=t.length,r=Ir(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||jc,r[a])}function qm(n){switch(n){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Im;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return Hm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}class Ym{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}}class $m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qm(e.type)}}class Km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function jl(n,t){n.seq.push(t),n.map[t.id]=t}function Zm(n,t,e){const i=n.name,s=i.length;for(va.lastIndex=0;;){const r=va.exec(i),a=va.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jl(e,c===void 0?new Ym(o,n,t):new $m(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Km(o),jl(e,u)),e=u}}}class Mr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Zm(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Jl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jm=37297;let Jm=0;function Qm(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ql=new kt;function t0(n){ie._getMatrix(Ql,ie.workingColorSpace,n);const t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case yr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Qm(n.getShaderSource(t),a)}else return s}function e0(n,t){const e=t0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function n0(n,t){let e;switch(t){case nh:e="Linear";break;case ih:e="Reinhard";break;case sh:e="Cineon";break;case Tc:e="ACESFilmic";break;case ah:e="AgX";break;case oh:e="Neutral";break;case rh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new U;function i0(){ie.getLuminanceCoefficients(hr);const n=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function r0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Es(n){return n!==""}function ec(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(n){return n.replace(o0,c0)}const l0=new Map;function c0(n,t){let e=Xt[t];if(e===void 0){const i=l0.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}const u0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(n){return n.replace(u0,h0)}function h0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function f0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(t="SHADOWMAP_TYPE_VSM"),t}function d0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function m0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ec:t="ENVMAP_BLENDING_MULTIPLY";break;case th:t="ENVMAP_BLENDING_MIX";break;case eh:t="ENVMAP_BLENDING_ADD";break}return t}function g0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function _0(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=f0(e),c=d0(e),h=p0(e),u=m0(e),d=g0(e),p=s0(e),g=r0(r),_=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`)):(m=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),f=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Xt.tonemapping_pars_fragment:"",e.toneMapping!==ai?n0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,e0("linearToOutputTexel",e.outputColorSpace),i0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=po(a),a=ec(a,e),a=nc(a,e),o=po(o),o=ec(o,e),o=nc(o,e),a=ic(a),o=ic(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=w+m+a,M=w+f+o,R=Jl(s,s.VERTEX_SHADER,E),T=Jl(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(P){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(T).trim();let Z=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,T);else{const q=tc(s,R,"vertex"),H=tc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+q+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||Y==="")&&(X=!1);X&&(P.diagnostics={runnable:Z,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(R),s.deleteShader(T),L=new Mr(s,_),y=a0(s,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,jm)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let v0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new M0(t),e.set(t,i)),i}}class M0{constructor(t){this.id=v0++,this.code=t,this.usedTimes=0}}function S0(n,t,e,i,s,r,a){const o=new Lo,l=new x0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,z,O){const Y=z.fog,Z=O.geometry,X=y.isMeshStandardMaterial?z.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),H=q&&q.mapping===Lr?q.image.height:null,st=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mt=at!==void 0?at.length:0;let Gt=0;Z.morphAttributes.position!==void 0&&(Gt=1),Z.morphAttributes.normal!==void 0&&(Gt=2),Z.morphAttributes.color!==void 0&&(Gt=3);let te,K,rt,St;if(st){const ae=Rn[st];te=ae.vertexShader,K=ae.fragmentShader}else te=y.vertexShader,K=y.fragmentShader,l.update(y),rt=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const ft=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Vt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,be=!!y.map,we=!!y.matcap,se=!!q,D=!!y.aoMap,Ze=!!y.lightMap,re=!!y.bumpMap,_e=!!y.normalMap,bt=!!y.displacementMap,ee=!!y.emissiveMap,Pt=!!y.metalnessMap,Wt=!!y.roughnessMap,Ne=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,B=y.iridescence>0,j=y.sheen>0,Q=y.transmission>0,$=Ne&&!!y.anisotropyMap,wt=A&&!!y.clearcoatMap,ct=A&&!!y.clearcoatNormalMap,xt=A&&!!y.clearcoatRoughnessMap,At=B&&!!y.iridescenceMap,tt=B&&!!y.iridescenceThicknessMap,pt=j&&!!y.sheenColorMap,It=j&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,ot=!!y.specularColorMap,Ft=!!y.specularIntensityMap,I=Q&&!!y.transmissionMap,ut=Q&&!!y.thicknessMap,et=!!y.gradientMap,gt=!!y.alphaMap,nt=y.alphaTest>0,J=!!y.alphaHash,_t=!!y.extensions;let Ot=ai;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const xe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:K,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&O.instanceColor!==null,instancingMorph:Vt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:ss,alphaToCoverage:!!y.alphaToCoverage,map:be,matcap:we,envMap:se,envMapMode:se&&q.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Ze,bumpMap:re,normalMap:_e,displacementMap:d&&bt,emissiveMap:ee,normalMapObjectSpace:_e&&y.normalMapType===hh,normalMapTangentSpace:_e&&y.normalMapType===Uc,metalnessMap:Pt,roughnessMap:Wt,anisotropy:Ne,anisotropyMap:$,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:ct,clearcoatRoughnessMap:xt,dispersion:v,iridescence:B,iridescenceMap:At,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:pt,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:ot,specularIntensityMap:Ft,transmission:Q,transmissionMap:I,thicknessMap:ut,gradientMap:et,opaque:y.transparent===!1&&y.blending===Zi&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:nt,alphaHash:J,combine:y.combine,mapUv:be&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:Ze&&_(y.lightMap.channel),bumpMapUv:re&&_(y.bumpMap.channel),normalMapUv:_e&&_(y.normalMap.channel),displacementMapUv:bt&&_(y.displacementMap.channel),emissiveMapUv:ee&&_(y.emissiveMap.channel),metalnessMapUv:Pt&&_(y.metalnessMap.channel),roughnessMapUv:Wt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:wt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(y.sheenRoughnessMap.channel),specularMapUv:Dt&&_(y.specularMap.channel),specularColorMapUv:ot&&_(y.specularColorMap.channel),specularIntensityMapUv:Ft&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ut&&_(y.thicknessMap.channel),alphaMapUv:gt&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_e||Ne),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(be||gt),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function f(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(x,y),E(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function E(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const x=g[y.type];let P;if(x){const z=Rn[x];P=Gh.clone(z.uniforms)}else P=y.uniforms;return P}function R(y,x){let P;for(let z=0,O=h.length;z<O;z++){const Y=h[z];if(Y.cacheKey===x){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new _0(n,x,y,r),h.push(P)),P}function T(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:L}}function y0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function E0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function rc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ac(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,d,p,g,_,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||E0),i.length>1&&i.sort(d||rc),s.length>1&&s.sort(d||rc)}function h(){for(let u=t,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function T0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new ac,n.set(i,[a])):s>=r.length?(a=new ac,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function b0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new $t};break;case"SpotLight":e={position:new U,direction:new U,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function w0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let A0=0;function R0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function C0(n){const t=new b0,e=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new ye,a=new ye;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,E=0,M=0,R=0,T=0,b=0;c.sort(R0);for(let y=0,x=c.length;y<x;y++){const P=c[y],z=P.color,O=P.intensity,Y=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],O);b++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[_]=X;const q=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,q.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[_]=q.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=Z,M++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,H=e.get(P);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(O),X.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==R||L.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=b,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=R,L.numLightProbes=b,i.version=A0++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const E=c[f];if(E.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function oc(n){const t=new C0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function P0(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new oc(n),t.set(s,[o])):r>=a.length?(o=new oc(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const L0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function I0(n,t,e){let i=new Io;const s=new Kt,r=new Kt,a=new de,o=new tf({depthPacking:uh}),l=new ef,c={},h=e.maxTextureSize,u={[oi]:nn,[nn]:oi,[Pn]:Pn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:L0,fragmentShader:D0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let f=this.type;this.render=function(T,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=f!==Gn&&this.type===Gn,Y=f===Gn&&this.type!==Gn;for(let Z=0,X=T.length;Z<X;Z++){const q=T[Z],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||O===!0||Y===!0){const Mt=this.type!==Gn?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,Mt),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const at=H.getViewportCount();for(let Mt=0;Mt<at;Mt++){const Gt=H.getViewport(Mt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),z.viewport(a),H.updateMatrices(q,Mt),i=H.getFrustum(),M(b,L,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===Gn&&w(H,L),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,P)};function w(T,b){const L=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(b,null,L,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(b,null,L,p,_,null)}function E(T,b,L,y){let x=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=L.isPointLight===!0?l:o,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const z=x.uuid,O=b.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let Z=Y[O];Z===void 0&&(Z=x.clone(),Y[O]=Z,b.addEventListener("dispose",R)),x=Z}if(x.visible=b.visible,x.wireframe=b.wireframe,y===Gn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=L}return x}function M(T,b,L,y,x){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Gn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const O=t.update(T),Y=T.material;if(Array.isArray(Y)){const Z=O.groups;for(let X=0,q=Z.length;X<q;X++){const H=Z[X],st=Y[H.materialIndex];if(st&&st.visible){const at=E(T,st,y,x);T.onBeforeShadow(n,T,b,L,O,at,H),n.renderBufferDirect(L,null,O,at,T,H),T.onAfterShadow(n,T,b,L,O,at,H)}}}else if(Y.visible){const Z=E(T,Y,y,x);T.onBeforeShadow(n,T,b,L,O,Z,null),n.renderBufferDirect(L,null,O,Z,T,null),T.onAfterShadow(n,T,b,L,O,Z,null)}}const z=T.children;for(let O=0,Y=z.length;O<Y;O++)M(z[O],b,L,y,x)}function R(T){T.target.removeEventListener("dispose",R);for(const L in c){const y=c[L],x=T.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const U0={[Ca]:Pa,[La]:Ua,[Da]:Na,[es]:Ia,[Pa]:Ca,[Ua]:La,[Na]:Da,[Ia]:es};function N0(n,t){function e(){let I=!1;const ut=new de;let et=null;const gt=new de(0,0,0,0);return{setMask:function(nt){et!==nt&&!I&&(n.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){I=nt},setClear:function(nt,J,_t,Ot,xe){xe===!0&&(nt*=Ot,J*=Ot,_t*=Ot),ut.set(nt,J,_t,Ot),gt.equals(ut)===!1&&(n.clearColor(nt,J,_t,Ot),gt.copy(ut))},reset:function(){I=!1,et=null,gt.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,et=null,gt=null,nt=null;return{setReversed:function(J){if(ut!==J){const _t=t.get("EXT_clip_control");J?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),ut=J;const Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return ut},setTest:function(J){J?ft(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(J){et!==J&&!I&&(n.depthMask(J),et=J)},setFunc:function(J){if(ut&&(J=U0[J]),gt!==J){switch(J){case Ca:n.depthFunc(n.NEVER);break;case Pa:n.depthFunc(n.ALWAYS);break;case La:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case Da:n.depthFunc(n.EQUAL);break;case Ia:n.depthFunc(n.GEQUAL);break;case Ua:n.depthFunc(n.GREATER);break;case Na:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=J}},setLocked:function(J){I=J},setClear:function(J){nt!==J&&(ut&&(J=1-J),n.clearDepth(J),nt=J)},reset:function(){I=!1,et=null,gt=null,nt=null,ut=!1}}}function s(){let I=!1,ut=null,et=null,gt=null,nt=null,J=null,_t=null,Ot=null,xe=null;return{setTest:function(ae){I||(ae?ft(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(ae){ut!==ae&&!I&&(n.stencilMask(ae),ut=ae)},setFunc:function(ae,xn,Fn){(et!==ae||gt!==xn||nt!==Fn)&&(n.stencilFunc(ae,xn,Fn),et=ae,gt=xn,nt=Fn)},setOp:function(ae,xn,Fn){(J!==ae||_t!==xn||Ot!==Fn)&&(n.stencilOp(ae,xn,Fn),J=ae,_t=xn,Ot=Fn)},setLocked:function(ae){I=ae},setClear:function(ae){xe!==ae&&(n.clearStencil(ae),xe=ae)},reset:function(){I=!1,ut=null,et=null,gt=null,nt=null,J=null,_t=null,Ot=null,xe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,E=null,M=null,R=null,T=null,b=new $t(0,0,0),L=0,y=!1,x=null,P=null,z=null,O=null,Y=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=q>=2);let st=null,at={};const Mt=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),te=new de().fromArray(Mt),K=new de().fromArray(Gt);function rt(I,ut,et,gt){const nt=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<et;_t++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(ut+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return J}const St={};St[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ft(n.DEPTH_TEST),a.setFunc(es),re(!1),_e(sl),ft(n.CULL_FACE),D(ri);function ft(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function yt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Vt(I,ut){return u[I]!==ut?(n.bindFramebuffer(I,ut),u[I]=ut,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Tt(I,ut){let et=p,gt=!1;if(I){et=d.get(ut),et===void 0&&(et=[],d.set(ut,et));const nt=I.textures;if(et.length!==nt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_t=nt.length;J<_t;J++)et[J]=n.COLOR_ATTACHMENT0+J;et.length=nt.length,gt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,gt=!0);gt&&n.drawBuffers(et)}function be(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const we={[Si]:n.FUNC_ADD,[Ou]:n.FUNC_SUBTRACT,[Bu]:n.FUNC_REVERSE_SUBTRACT};we[zu]=n.MIN,we[Hu]=n.MAX;const se={[ku]:n.ZERO,[Gu]:n.ONE,[Vu]:n.SRC_COLOR,[Aa]:n.SRC_ALPHA,[Ku]:n.SRC_ALPHA_SATURATE,[Yu]:n.DST_COLOR,[Xu]:n.DST_ALPHA,[Wu]:n.ONE_MINUS_SRC_COLOR,[Ra]:n.ONE_MINUS_SRC_ALPHA,[$u]:n.ONE_MINUS_DST_COLOR,[qu]:n.ONE_MINUS_DST_ALPHA,[Zu]:n.CONSTANT_COLOR,[ju]:n.ONE_MINUS_CONSTANT_COLOR,[Ju]:n.CONSTANT_ALPHA,[Qu]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,ut,et,gt,nt,J,_t,Ot,xe,ae){if(I===ri){_===!0&&(yt(n.BLEND),_=!1);return}if(_===!1&&(ft(n.BLEND),_=!0),I!==Fu){if(I!==m||ae!==y){if((f!==Si||M!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,M=Si),ae)switch(I){case Zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case al:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ol:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,R=null,T=null,b.set(0,0,0),L=0,m=I,y=ae}return}nt=nt||ut,J=J||et,_t=_t||gt,(ut!==f||nt!==M)&&(n.blendEquationSeparate(we[ut],we[nt]),f=ut,M=nt),(et!==w||gt!==E||J!==R||_t!==T)&&(n.blendFuncSeparate(se[et],se[gt],se[J],se[_t]),w=et,E=gt,R=J,T=_t),(Ot.equals(b)===!1||xe!==L)&&(n.blendColor(Ot.r,Ot.g,Ot.b,xe),b.copy(Ot),L=xe),m=I,y=!1}function Ze(I,ut){I.side===Pn?yt(n.CULL_FACE):ft(n.CULL_FACE);let et=I.side===nn;ut&&(et=!et),re(et),I.blending===Zi&&I.transparent===!1?D(ri):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const gt=I.stencilWrite;o.setTest(gt),gt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function _e(I){I!==Iu?(ft(n.CULL_FACE),I!==P&&(I===sl?n.cullFace(n.BACK):I===Uu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),P=I}function bt(I){I!==z&&(X&&n.lineWidth(I),z=I)}function ee(I,ut,et){I?(ft(n.POLYGON_OFFSET_FILL),(O!==ut||Y!==et)&&(n.polygonOffset(ut,et),O=ut,Y=et)):yt(n.POLYGON_OFFSET_FILL)}function Pt(I){I?ft(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function Wt(I){I===void 0&&(I=n.TEXTURE0+Z-1),st!==I&&(n.activeTexture(I),st=I)}function Ne(I,ut,et){et===void 0&&(st===null?et=n.TEXTURE0+Z-1:et=st);let gt=at[et];gt===void 0&&(gt={type:void 0,texture:void 0},at[et]=gt),(gt.type!==I||gt.texture!==ut)&&(st!==et&&(n.activeTexture(et),st=et),n.bindTexture(I,ut||St[I]),gt.type=I,gt.texture=ut)}function A(){const I=at[st];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(I){te.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function It(I){K.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Dt(I,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let gt=et.get(I);gt===void 0&&(gt=n.getUniformBlockIndex(ut,I.name),et.set(I,gt))}function ot(I,ut){const gt=c.get(ut).get(I);l.get(ut)!==gt&&(n.uniformBlockBinding(ut,gt,I.__bindingPointIndex),l.set(ut,gt))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},st=null,at={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,E=null,M=null,R=null,T=null,b=new $t(0,0,0),L=0,y=!1,x=null,P=null,z=null,O=null,Y=null,te.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ft,disable:yt,bindFramebuffer:Vt,drawBuffers:Tt,useProgram:be,setBlending:D,setMaterial:Ze,setFlipSided:re,setCullFace:_e,setLineWidth:bt,setPolygonOffset:ee,setScissorTest:Pt,activeTexture:Wt,bindTexture:Ne,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:B,texImage2D:At,texImage3D:tt,updateUBOMapping:Dt,uniformBlockBinding:ot,texStorage2D:ct,texStorage3D:xt,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:wt,scissor:pt,viewport:It,reset:Ft}}function F0(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):Tr("canvas")}function _(A,v,B){let j=1;const Q=Ne(A);if((Q.width>B||Q.height>B)&&(j=B/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=g($,wt));const ct=v?g($,wt):u;return ct.width=$,ct.height=wt,ct.getContext("2d").drawImage(A,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+wt+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,v,B,j,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),v===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const wt=Q?yr:ie.getTransfer(j);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=wt===fe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(A,v){let B;return A?v===null||v===Ci||v===Cs?B=n.DEPTH24_STENCIL8:v===Wn?B=n.DEPTH32F_STENCIL8:v===Rs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Cs?B=n.DEPTH_COMPONENT24:v===Wn?B=n.DEPTH_COMPONENT32F:v===Rs&&(B=n.DEPTH_COMPONENT16),B}function R(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==wn&&A.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){const v=A.target;v.removeEventListener("dispose",T),L(v),v.isVideoTexture&&h.delete(v)}function b(A){const v=A.target;v.removeEventListener("dispose",b),x(v)}function L(A){const v=i.get(A);if(v.__webglInit===void 0)return;const B=A.source,j=d.get(B);if(j){const Q=j[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(j).length===0&&d.delete(B)}i.remove(A)}function y(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const B=A.source,j=d.get(B);delete j[v.__cacheKey],a.memory.textures--}function x(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Q=0;Q<v.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=A.textures;for(let j=0,Q=B.length;j<Q;j++){const $=i.get(B[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(B[j])}i.remove(A)}let P=0;function z(){P=0}function O(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function Y(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Z(A,v){const B=i.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(B,A,v);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function X(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){St(B,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function q(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){St(B,A,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function H(A,v){const B=i.get(A);if(A.version>0&&B.__version!==A.version){ft(B,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}const st={[As]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[Ba]:n.MIRRORED_REPEAT},at={[wn]:n.NEAREST,[lh]:n.NEAREST_MIPMAP_NEAREST,[Vs]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[zr]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Mt={[fh]:n.NEVER,[vh]:n.ALWAYS,[dh]:n.LESS,[Nc]:n.LEQUAL,[ph]:n.EQUAL,[_h]:n.GEQUAL,[mh]:n.GREATER,[gh]:n.NOTEQUAL};function Gt(A,v){if(v.type===Wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===zr||v.magFilter===Vs||v.magFilter===Ai||v.minFilter===Ln||v.minFilter===zr||v.minFilter===Vs||v.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,st[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,st[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,st[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,at[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==Vs&&v.minFilter!==Ai||v.type===Wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));const j=v.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const $=Y(v);if($!==A.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[$].usedTimes++;const wt=Q[A.__cacheKey];wt!==void 0&&(Q[A.__cacheKey].usedTimes--,wt.usedTimes===0&&y(v)),A.__cacheKey=$,A.__webglTexture=Q[$].texture}return B}function K(A,v,B){return Math.floor(Math.floor(A/B)/v)}function rt(A,v,B,j){const $=A.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,B,j,v.data);else{$.sort((tt,pt)=>tt.start-pt.start);let wt=0;for(let tt=1;tt<$.length;tt++){const pt=$[wt],It=$[tt],Dt=pt.start+pt.count,ot=K(It.start,v.width,4),Ft=K(pt.start,v.width,4);It.start<=Dt+1&&ot===Ft&&K(It.start+It.count-1,v.width,4)===ot?pt.count=Math.max(pt.count,It.start+It.count-pt.start):(++wt,$[wt]=It)}$.length=wt+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),xt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,pt=$.length;tt<pt;tt++){const It=$[tt],Dt=Math.floor(It.start/4),ot=Math.ceil(It.count/4),Ft=Dt%v.width,I=Math.floor(Dt/v.width),ut=ot,et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ft,I,ut,et,B,j,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function St(A,v,B){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const Q=te(A,v),$=v.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+B);const wt=i.get($);if($.version!==wt.__version||Q===!0){e.activeTexture(n.TEXTURE0+B);const ct=ie.getPrimaries(ie.workingColorSpace),xt=v.colorSpace===ni?null:ie.getPrimaries(v.colorSpace),At=v.colorSpace===ni||ct===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let tt=_(v.image,!1,s.maxTextureSize);tt=Wt(v,tt);const pt=r.convert(v.format,v.colorSpace),It=r.convert(v.type);let Dt=E(v.internalFormat,pt,It,v.colorSpace,v.isVideoTexture);Gt(j,v);let ot;const Ft=v.mipmaps,I=v.isVideoTexture!==!0,ut=wt.__version===void 0||Q===!0,et=$.dataReady,gt=R(v,tt);if(v.isDepthTexture)Dt=M(v.format===Ls,v.type),ut&&(I?e.texStorage2D(n.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,pt,It,null));else if(v.isDataTexture)if(Ft.length>0){I&&ut&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,Ft[0].width,Ft[0].height);for(let nt=0,J=Ft.length;nt<J;nt++)ot=Ft[nt],I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ot.width,ot.height,pt,It,ot.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,ot.width,ot.height,0,pt,It,ot.data);v.generateMipmaps=!1}else I?(ut&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,tt.width,tt.height),et&&rt(v,tt,pt,It)):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,pt,It,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Dt,Ft[0].width,Ft[0].height,tt.depth);for(let nt=0,J=Ft.length;nt<J;nt++)if(ot=Ft[nt],v.format!==bn)if(pt!==null)if(I){if(et)if(v.layerUpdates.size>0){const _t=Ol(ot.width,ot.height,v.format,v.type);for(const Ot of v.layerUpdates){const xe=ot.data.subarray(Ot*_t/ot.data.BYTES_PER_ELEMENT,(Ot+1)*_t/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Ot,ot.width,ot.height,1,pt,xe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ot.width,ot.height,tt.depth,pt,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ot.width,ot.height,tt.depth,pt,It,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,ot.width,ot.height,tt.depth,0,pt,It,ot.data)}else{I&&ut&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,Ft[0].width,Ft[0].height);for(let nt=0,J=Ft.length;nt<J;nt++)ot=Ft[nt],v.format!==bn?pt!==null?I?et&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ot.width,ot.height,pt,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ot.width,ot.height,pt,It,ot.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,ot.width,ot.height,0,pt,It,ot.data)}else if(v.isDataArrayTexture)if(I){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Dt,tt.width,tt.height,tt.depth),et)if(v.layerUpdates.size>0){const nt=Ol(tt.width,tt.height,v.format,v.type);for(const J of v.layerUpdates){const _t=tt.data.subarray(J*nt/tt.data.BYTES_PER_ELEMENT,(J+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,pt,It,_t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,It,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,pt,It,tt.data);else if(v.isData3DTexture)I?(ut&&e.texStorage3D(n.TEXTURE_3D,gt,Dt,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,It,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,pt,It,tt.data);else if(v.isFramebufferTexture){if(ut)if(I)e.texStorage2D(n.TEXTURE_2D,gt,Dt,tt.width,tt.height);else{let nt=tt.width,J=tt.height;for(let _t=0;_t<gt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Dt,nt,J,0,pt,It,null),nt>>=1,J>>=1}}else if(Ft.length>0){if(I&&ut){const nt=Ne(Ft[0]);e.texStorage2D(n.TEXTURE_2D,gt,Dt,nt.width,nt.height)}for(let nt=0,J=Ft.length;nt<J;nt++)ot=Ft[nt],I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,pt,It,ot):e.texImage2D(n.TEXTURE_2D,nt,Dt,pt,It,ot);v.generateMipmaps=!1}else if(I){if(ut){const nt=Ne(tt);e.texStorage2D(n.TEXTURE_2D,gt,Dt,nt.width,nt.height)}et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,It,tt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,pt,It,tt);m(v)&&f(j),wt.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ft(A,v,B){if(v.image.length!==6)return;const j=te(A,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const $=i.get(Q);if(Q.version!==$.__version||j===!0){e.activeTexture(n.TEXTURE0+B);const wt=ie.getPrimaries(ie.workingColorSpace),ct=v.colorSpace===ni?null:ie.getPrimaries(v.colorSpace),xt=v.colorSpace===ni||wt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!At&&!tt?pt[J]=_(v.image[J],!0,s.maxCubemapSize):pt[J]=tt?v.image[J].image:v.image[J],pt[J]=Wt(v,pt[J]);const It=pt[0],Dt=r.convert(v.format,v.colorSpace),ot=r.convert(v.type),Ft=E(v.internalFormat,Dt,ot,v.colorSpace),I=v.isVideoTexture!==!0,ut=$.__version===void 0||j===!0,et=Q.dataReady;let gt=R(v,It);Gt(n.TEXTURE_CUBE_MAP,v);let nt;if(At){I&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ft,It.width,It.height);for(let J=0;J<6;J++){nt=pt[J].mipmaps;for(let _t=0;_t<nt.length;_t++){const Ot=nt[_t];v.format!==bn?Dt!==null?I?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Ot.width,Ot.height,Dt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Ft,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Ot.width,Ot.height,Dt,ot,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Ft,Ot.width,Ot.height,0,Dt,ot,Ot.data)}}}else{if(nt=v.mipmaps,I&&ut){nt.length>0&&gt++;const J=Ne(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ft,J.width,J.height)}for(let J=0;J<6;J++)if(tt){I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Dt,ot,pt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,pt[J].width,pt[J].height,0,Dt,ot,pt[J].data);for(let _t=0;_t<nt.length;_t++){const xe=nt[_t].image[J].image;I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,xe.width,xe.height,Dt,ot,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Ft,xe.width,xe.height,0,Dt,ot,xe.data)}}else{I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,ot,pt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,Dt,ot,pt[J]);for(let _t=0;_t<nt.length;_t++){const Ot=nt[_t];I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,Dt,ot,Ot.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Ft,Dt,ot,Ot.image[J])}}}m(v)&&f(n.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function yt(A,v,B,j,Q,$){const wt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),xt=E(B.internalFormat,wt,ct,B.colorSpace),At=i.get(v),tt=i.get(B);if(tt.__renderTarget=v,!At.__hasExternalTextures){const pt=Math.max(1,v.width>>$),It=Math.max(1,v.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,xt,pt,It,v.depth,0,wt,ct,null):e.texImage2D(Q,$,xt,pt,It,0,wt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,tt.__webglTexture,0,bt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,tt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(A,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=M(v.stencilBuffer,Q),wt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=bt(v);ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,$,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,A)}else{const j=v.textures;for(let Q=0;Q<j.length;Q++){const $=j[Q],wt=r.convert($.format,$.colorSpace),ct=r.convert($.type),xt=E($.internalFormat,wt,ct,$.colorSpace),At=bt(v);B&&ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,xt,v.width,v.height):ee(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,xt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const Q=j.__webglTexture,$=bt(v);if(v.depthTexture.format===Ps)ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ls)ee(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(A){const v=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?Tt(v.__webglFramebuffer[0],A):Tt(v.__webglFramebuffer,A)}else if(B){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),Vt(v.__webglDepthbuffer[j],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Vt(v.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function we(A,v,B){const j=i.get(A);v!==void 0&&yt(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&be(A)}function se(A){const v=A.texture,B=i.get(A),j=i.get(v);A.addEventListener("dispose",b);const Q=A.textures,$=A.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,a.memory.textures++),$){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let xt=0;xt<v.mipmaps.length;xt++)B.__webglFramebuffer[ct][xt]=n.createFramebuffer()}else B.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)B.__webglFramebuffer[ct]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ct=0,xt=Q.length;ct<xt;ct++){const At=i.get(Q[ct]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ee(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const xt=Q[ct];B.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const At=r.convert(xt.format,xt.colorSpace),tt=r.convert(xt.type),pt=E(xt.internalFormat,At,tt,xt.colorSpace,A.isXRRenderTarget===!0),It=bt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,pt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Vt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)yt(B.__webglFramebuffer[ct][xt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,xt);else yt(B.__webglFramebuffer[ct],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,xt=Q.length;ct<xt;ct++){const At=Q[ct],tt=i.get(At);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Gt(n.TEXTURE_2D,At),yt(B.__webglFramebuffer,A,At,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(At)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Gt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)yt(B.__webglFramebuffer[xt],A,v,n.COLOR_ATTACHMENT0,ct,xt);else yt(B.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}A.depthBuffer&&be(A)}function D(A){const v=A.textures;for(let B=0,j=v.length;B<j;B++){const Q=v[B];if(m(Q)){const $=w(A),wt=i.get(Q).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}const Ze=[],re=[];function _e(A){if(A.samples>0){if(ee(A)===!1){const v=A.textures,B=A.width,j=A.height;let Q=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(A),ct=v.length>1;if(ct)for(let At=0;At<v.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const xt=A.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const tt=i.get(v[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,B,j,0,0,B,j,Q,n.NEAREST),l===!0&&(Ze.length=0,re.length=0,Ze.push(n.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push($),re.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<v.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const tt=i.get(v[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function bt(A){return Math.min(s.maxSamples,A.samples)}function ee(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Wt(A,v){const B=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ss&&B!==ni&&(ie.getTransfer(B)===fe?(j!==bn||Q!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=we,this.setupRenderTarget=se,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ee}function O0(n,t){function e(i,s=ni){let r;const a=ie.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===To)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wc)return n.BYTE;if(i===Ac)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===Eo)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Fs)return n.HALF_FLOAT;if(i===Cc)return n.ALPHA;if(i===Pc)return n.RGB;if(i===bn)return n.RGBA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===Lc)return n.RED;if(i===wo)return n.RED_INTEGER;if(i===Dc)return n.RG;if(i===Ao)return n.RG_INTEGER;if(i===Ro)return n.RGBA_INTEGER;if(i===mr||i===gr||i===_r||i===vr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===za||i===Ha||i===ka||i===Ga)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Va||i===Wa||i===Xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Va||i===Wa)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qa||i===Ya||i===$a||i===Ka||i===Za||i===ja||i===Ja||i===Qa||i===to||i===eo||i===no||i===io||i===so||i===ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ya)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ka)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Za)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===to)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===no)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===io)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===so)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ro)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xr||i===ao||i===oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xr)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ic||i===lo||i===co||i===uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const B0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z0=`
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

}`;class H0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new li({vertexShader:B0,fragmentShader:z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new dt(new Le(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k0 extends ls{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new H0,m=e.getContextAttributes();let f=null,w=null;const E=[],M=[],R=new Kt;let T=null;const b=new pn;b.viewport=new de;const L=new pn;L.viewport=new de;const y=[b,L],x=new of;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let rt=E[K];return rt===void 0&&(rt=new la,E[K]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(K){let rt=E[K];return rt===void 0&&(rt=new la,E[K]=rt),rt.getGripSpace()},this.getHand=function(K){let rt=E[K];return rt===void 0&&(rt=new la,E[K]=rt),rt.getHandSpace()};function O(K){const rt=M.indexOf(K.inputSource);if(rt===-1)return;const St=E[rt];St!==void 0&&(St.update(K.inputSource,K.frame,c||a),St.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<E.length;K++){const rt=M[K];rt!==null&&(M[K]=null,E[K].disconnect(rt))}P=null,z=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,w=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ft=null,yt=null;m.depth&&(yt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=m.stencil?Ls:Ps,ft=m.stencil?Cs:Ci);const Vt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Pi(d.textureWidth,d.textureHeight,{format:bn,type:Un,depthTexture:new Xc(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const St={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Pi(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let rt=0;rt<K.removed.length;rt++){const St=K.removed[rt],ft=M.indexOf(St);ft>=0&&(M[ft]=null,E[ft].disconnect(St))}for(let rt=0;rt<K.added.length;rt++){const St=K.added[rt];let ft=M.indexOf(St);if(ft===-1){for(let Vt=0;Vt<E.length;Vt++)if(Vt>=M.length){M.push(St),ft=Vt;break}else if(M[Vt]===null){M[Vt]=St,ft=Vt;break}if(ft===-1)break}const yt=E[ft];yt&&yt.connect(St)}}const X=new U,q=new U;function H(K,rt,St){X.setFromMatrixPosition(rt.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const ft=X.distanceTo(q),yt=rt.projectionMatrix.elements,Vt=St.projectionMatrix.elements,Tt=yt[14]/(yt[10]-1),be=yt[14]/(yt[10]+1),we=(yt[9]+1)/yt[5],se=(yt[9]-1)/yt[5],D=(yt[8]-1)/yt[0],Ze=(Vt[8]+1)/Vt[0],re=Tt*D,_e=Tt*Ze,bt=ft/(-D+Ze),ee=bt*-D;if(rt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(bt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),yt[10]===-1)K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Pt=Tt+bt,Wt=be+bt,Ne=re-ee,A=_e+(ft-ee),v=we*be/Wt*Pt,B=se*be/Wt*Pt;K.projectionMatrix.makePerspective(Ne,A,v,B,Pt,Wt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,rt){rt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(rt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let rt=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=L.near=b.near=rt,x.far=L.far=b.far=St,(P!==x.near||z!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,z=x.far),b.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|L.layers.mask;const ft=K.parent,yt=x.cameras;st(x,ft);for(let Vt=0;Vt<yt.length;Vt++)st(yt[Vt],ft);yt.length===2?H(x,b,L):x.projectionMatrix.copy(b.projectionMatrix),at(K,x,ft)};function at(K,rt,St){St===null?K.matrix.copy(rt.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(rt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(rt.projectionMatrix),K.projectionMatrixInverse.copy(rt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ho*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Mt=null;function Gt(K,rt){if(h=rt.getViewerPose(c||a),g=rt,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ft=!1;St.length!==x.cameras.length&&(x.cameras.length=0,ft=!0);for(let Tt=0;Tt<St.length;Tt++){const be=St[Tt];let we=null;if(p!==null)we=p.getViewport(be);else{const D=u.getViewSubImage(d,be);we=D.viewport,Tt===0&&(t.setRenderTargetTextures(w,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(w))}let se=y[Tt];se===void 0&&(se=new pn,se.layers.enable(Tt),se.viewport=new de,y[Tt]=se),se.matrix.fromArray(be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),Tt===0&&(x.matrix.copy(se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ft===!0&&x.cameras.push(se)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Tt=u.getDepthInformation(St[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let St=0;St<E.length;St++){const ft=M[St],yt=E[St];ft!==null&&yt!==void 0&&yt.update(ft,rt,c||a)}Mt&&Mt(K,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}const te=new Kc;te.setAnimationLoop(Gt),this.setAnimationLoop=function(K){Mt=K},this.dispose=function(){}}}const _i=new Nn,G0=new ye;function V0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,E,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),E=w.envMap,M=w.envMapRotation;E&&(m.envMap.value=E,_i.copy(M),_i.x*=-1,_i.y*=-1,_i.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(G0.makeRotationFromEuler(_i)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W0(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){const M=E.program;i.uniformBlockBinding(w,M)}function c(w,E){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(w,R);const T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){const E=u();w.__bindingPointIndex=E;const M=n.createBuffer(),R=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=s[w.id],M=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,b=M.length;T<b;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,x=L.length;y<x;y++){const P=L[y];if(p(P,T,y,R)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let Z=0;Z<O.length;Z++){const X=O[Z],q=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,E,M,R){const T=w.value,b=E+"_"+M;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{const L=R[b];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[b]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(w){const E=w.uniforms;let M=0;const R=16;for(let b=0,L=E.length;b<L;b++){const y=Array.isArray(E[b])?E[b]:[E[b]];for(let x=0,P=y.length;x<P;x++){const z=y[x],O=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,Z=O.length;Y<Z;Y++){const X=O[Y],q=_(X),H=M%R,st=H%q.boundary,at=H+st;M+=st,at!==0&&R-at<q.storage&&(M+=R-at),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=q.storage}}}const T=M%R;return T>0&&(M+=R-T),w.__size=M,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class X0{constructor(t={}){const{canvas:e=Mh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=en;let T=0,b=0,L=null,y=-1,x=null;const P=new de,z=new de;let O=null;const Y=new $t(0);let Z=0,X=e.width,q=e.height,H=1,st=null,at=null;const Mt=new de(0,0,X,q),Gt=new de(0,0,X,q);let te=!1;const K=new Io;let rt=!1,St=!1;const ft=new ye,yt=new ye,Vt=new U,Tt=new de,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let we=!1;function se(){return L===null?H:1}let D=i;function Ze(S,N){return e.getContext(S,N)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yo}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",J,!1),D===null){const N="webgl2";if(D=Ze(N,S),D===null)throw Ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let re,_e,bt,ee,Pt,Wt,Ne,A,v,B,j,Q,$,wt,ct,xt,At,tt,pt,It,Dt,ot,Ft,I;function ut(){re=new em(D),re.init(),ot=new O0(D,re),_e=new $p(D,re,t,ot),bt=new N0(D,re),_e.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),ee=new sm(D),Pt=new y0,Wt=new F0(D,re,bt,Pt,_e,ot,ee),Ne=new Zp(M),A=new tm(M),v=new uf(D),Ft=new qp(D,v),B=new nm(D,v,ee,Ft),j=new am(D,B,v,ee),pt=new rm(D,_e,Wt),xt=new Kp(Pt),Q=new S0(M,Ne,A,re,_e,Ft,xt),$=new V0(M,Pt),wt=new T0,ct=new P0(re),tt=new Xp(M,Ne,A,bt,j,p,l),At=new I0(M,j,_e),I=new W0(D,ee,_e,bt),It=new Yp(D,re,ee),Dt=new im(D,re,ee),ee.programs=Q.programs,M.capabilities=_e,M.extensions=re,M.properties=Pt,M.renderLists=wt,M.shadowMap=At,M.state=bt,M.info=ee}ut();const et=new k0(M,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(X,q,!1))},this.getSize=function(S){return S.set(X,q)},this.setSize=function(S,N,k=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,q=N,e.width=Math.floor(S*H),e.height=Math.floor(N*H),k===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(X*H,q*H).floor()},this.setDrawingBufferSize=function(S,N,k){X=S,q=N,H=k,e.width=Math.floor(S*k),e.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(Mt)},this.setViewport=function(S,N,k,V){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,N,k,V),bt.viewport(P.copy(Mt).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,N,k,V){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,N,k,V),bt.scissor(z.copy(Gt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){bt.setScissorTest(te=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){at=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,k=!0){let V=0;if(S){let F=!1;if(L!==null){const it=L.texture.format;F=it===Ro||it===Ao||it===wo}if(F){const it=L.texture.type,ht=it===Un||it===Ci||it===Rs||it===Cs||it===To||it===bo,vt=tt.getClearColor(),mt=tt.getClearAlpha(),Ut=vt.r,Nt=vt.g,Rt=vt.b;ht?(g[0]=Ut,g[1]=Nt,g[2]=Rt,g[3]=mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ut,_[1]=Nt,_[2]=Rt,_[3]=mt,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}N&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),tt.dispose(),wt.dispose(),ct.dispose(),Pt.dispose(),Ne.dispose(),A.dispose(),j.dispose(),Ft.dispose(),I.dispose(),Q.dispose(),et.dispose(),et.removeEventListener("sessionstart",jo),et.removeEventListener("sessionend",Jo),ui.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=ee.autoReset,N=At.enabled,k=At.autoUpdate,V=At.needsUpdate,F=At.type;ut(),ee.autoReset=S,At.enabled=N,At.autoUpdate=k,At.needsUpdate=V,At.type=F}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _t(S){const N=S.target;N.removeEventListener("dispose",_t),Ot(N)}function Ot(S){xe(S),Pt.remove(S)}function xe(S){const N=Pt.get(S).programs;N!==void 0&&(N.forEach(function(k){Q.releaseProgram(k)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,V,F,it){N===null&&(N=be);const ht=F.isMesh&&F.matrixWorld.determinant()<0,vt=Au(S,N,k,V,F);bt.setMaterial(V,ht);let mt=k.index,Ut=1;if(V.wireframe===!0){if(mt=B.getWireframeAttribute(k),mt===void 0)return;Ut=2}const Nt=k.drawRange,Rt=k.attributes.position;let Yt=Nt.start*Ut,he=(Nt.start+Nt.count)*Ut;it!==null&&(Yt=Math.max(Yt,it.start*Ut),he=Math.min(he,(it.start+it.count)*Ut)),mt!==null?(Yt=Math.max(Yt,0),he=Math.min(he,mt.count)):Rt!=null&&(Yt=Math.max(Yt,0),he=Math.min(he,Rt.count));const Ce=he-Yt;if(Ce<0||Ce===1/0)return;Ft.setup(F,V,vt,k,mt);let Me,me=It;if(mt!==null&&(Me=v.get(mt),me=Dt,me.setIndex(Me)),F.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*se()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(F.isLine){let Lt=V.linewidth;Lt===void 0&&(Lt=1),bt.setLineWidth(Lt*se()),F.isLineSegments?me.setMode(D.LINES):F.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else F.isPoints?me.setMode(D.POINTS):F.isSprite&&me.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ji("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))me.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,Ae=F._multiDrawCounts,ne=F._multiDrawCount,un=mt?v.get(mt).bytesPerElement:1,Ii=Pt.get(V).currentProgram.getUniforms();for(let hn=0;hn<ne;hn++)Ii.setValue(D,"_gl_DrawID",hn),me.render(Lt[hn]/un,Ae[hn])}else if(F.isInstancedMesh)me.renderInstances(Yt,Ce,F.count);else if(k.isInstancedBufferGeometry){const Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ae=Math.min(k.instanceCount,Lt);me.renderInstances(Yt,Ce,Ae)}else me.render(Yt,Ce)};function ae(S,N,k){S.transparent===!0&&S.side===Pn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,Gs(S,N,k),S.side=oi,S.needsUpdate=!0,Gs(S,N,k),S.side=Pn):Gs(S,N,k)}this.compile=function(S,N,k=null){k===null&&(k=S),f=ct.get(k),f.init(N),E.push(f),k.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const vt=it[ht];ae(vt,k,F),V.add(vt)}else ae(it,k,F),V.add(it)}),f=E.pop(),V},this.compileAsync=function(S,N,k=null){const V=this.compile(S,N,k);return new Promise(F=>{function it(){if(V.forEach(function(ht){Pt.get(ht).currentProgram.isReady()&&V.delete(ht)}),V.size===0){F(S);return}setTimeout(it,10)}re.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let xn=null;function Fn(S){xn&&xn(S)}function jo(){ui.stop()}function Jo(){ui.start()}const ui=new Kc;ui.setAnimationLoop(Fn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){xn=S,et.setAnimationLoop(S),S===null?ui.stop():ui.start()},et.addEventListener("sessionstart",jo),et.addEventListener("sessionend",Jo),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(N),N=et.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,N,L),f=ct.get(S,E.length),f.init(N),E.push(f),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(yt),St=this.localClippingEnabled,rt=xt.init(this.clippingPlanes,St),m=wt.get(S,w.length),m.init(),w.push(m),et.enabled===!0&&et.isPresenting===!0){const it=M.xr.getDepthSensingMesh();it!==null&&Or(it,N,-1/0,M.sortObjects)}Or(S,N,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,at),we=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,we&&tt.addToRenderList(m,S),this.info.render.frame++,rt===!0&&xt.beginShadows();const k=f.state.shadowsArray;At.render(k,S,N),rt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),N.isArrayCamera){const it=N.cameras;if(F.length>0)for(let ht=0,vt=it.length;ht<vt;ht++){const mt=it[ht];tl(V,F,S,mt)}we&&tt.render(S);for(let ht=0,vt=it.length;ht<vt;ht++){const mt=it[ht];Qo(m,S,mt,mt.viewport)}}else F.length>0&&tl(V,F,S,N),we&&tt.render(S),Qo(m,S,N);L!==null&&b===0&&(Wt.updateMultisampleRenderTarget(L),Wt.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(M,S,N),Ft.resetDefaultState(),y=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],rt===!0&&xt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Or(S,N,k,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){V&&Tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(yt);const ht=j.update(S),vt=S.material;vt.visible&&m.push(S,ht,vt,k,Tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const ht=j.update(S),vt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Tt.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Tt.copy(ht.boundingSphere.center)),Tt.applyMatrix4(S.matrixWorld).applyMatrix4(yt)),Array.isArray(vt)){const mt=ht.groups;for(let Ut=0,Nt=mt.length;Ut<Nt;Ut++){const Rt=mt[Ut],Yt=vt[Rt.materialIndex];Yt&&Yt.visible&&m.push(S,ht,Yt,k,Tt.z,Rt)}}else vt.visible&&m.push(S,ht,vt,k,Tt.z,null)}}const it=S.children;for(let ht=0,vt=it.length;ht<vt;ht++)Or(it[ht],N,k,V)}function Qo(S,N,k,V){const F=S.opaque,it=S.transmissive,ht=S.transparent;f.setupLightsView(k),rt===!0&&xt.setGlobalState(M.clippingPlanes,k),V&&bt.viewport(P.copy(V)),F.length>0&&ks(F,N,k),it.length>0&&ks(it,N,k),ht.length>0&&ks(ht,N,k),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function tl(S,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Pi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Fs:Un,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=f.state.transmissionRenderTarget[V.id],ht=V.viewport||P;it.setSize(ht.z*M.transmissionResolutionScale,ht.w*M.transmissionResolutionScale);const vt=M.getRenderTarget(),mt=M.getActiveCubeFace(),Ut=M.getActiveMipmapLevel();M.setRenderTarget(it),M.getClearColor(Y),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),we&&tt.render(k);const Nt=M.toneMapping;M.toneMapping=ai;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),rt===!0&&xt.setGlobalState(M.clippingPlanes,V),ks(S,k,V),Wt.updateMultisampleRenderTarget(it),Wt.updateRenderTargetMipmap(it),re.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let he=0,Ce=N.length;he<Ce;he++){const Me=N[he],me=Me.object,Lt=Me.geometry,Ae=Me.material,ne=Me.group;if(Ae.side===Pn&&me.layers.test(V.layers)){const un=Ae.side;Ae.side=nn,Ae.needsUpdate=!0,el(me,k,V,Lt,Ae,ne),Ae.side=un,Ae.needsUpdate=!0,Yt=!0}}Yt===!0&&(Wt.updateMultisampleRenderTarget(it),Wt.updateRenderTargetMipmap(it))}M.setRenderTarget(vt,mt,Ut),M.setClearColor(Y,Z),Rt!==void 0&&(V.viewport=Rt),M.toneMapping=Nt}function ks(S,N,k){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,it=S.length;F<it;F++){const ht=S[F],vt=ht.object,mt=ht.geometry,Ut=ht.group;let Nt=ht.material;Nt.allowOverride===!0&&V!==null&&(Nt=V),vt.layers.test(k.layers)&&el(vt,N,k,mt,Nt,Ut)}}function el(S,N,k,V,F,it){S.onBeforeRender(M,N,k,V,F,it),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,N,k,V,S,it),F.transparent===!0&&F.side===Pn&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,M.renderBufferDirect(k,N,V,F,S,it),F.side=oi,F.needsUpdate=!0,M.renderBufferDirect(k,N,V,F,S,it),F.side=Pn):M.renderBufferDirect(k,N,V,F,S,it),S.onAfterRender(M,N,k,V,F,it)}function Gs(S,N,k){N.isScene!==!0&&(N=be);const V=Pt.get(S),F=f.state.lights,it=f.state.shadowsArray,ht=F.state.version,vt=Q.getParameters(S,F.state,it,N,k),mt=Q.getProgramCacheKey(vt);let Ut=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?A:Ne).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",_t),Ut=new Map,V.programs=Ut);let Nt=Ut.get(mt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ht)return il(S,vt),Nt}else vt.uniforms=Q.getUniforms(S),S.onBeforeCompile(vt,M),Nt=Q.acquireProgram(vt,mt),Ut.set(mt,Nt),V.uniforms=vt.uniforms;const Rt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=xt.uniform),il(S,vt),V.needsLights=Cu(S),V.lightsStateVersion=ht,V.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function nl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Mr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function il(S,N){const k=Pt.get(S);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function Au(S,N,k,V,F){N.isScene!==!0&&(N=be),Wt.resetTextureUnits();const it=N.fog,ht=V.isMeshStandardMaterial?N.environment:null,vt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ss,mt=(V.isMeshStandardMaterial?A:Ne).get(V.envMap||ht),Ut=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,he=!!k.morphAttributes.color;let Ce=ai;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,me=Me!==void 0?Me.length:0,Lt=Pt.get(V),Ae=f.state.lights;if(rt===!0&&(St===!0||S!==x)){const je=S===x&&V.id===y;xt.setState(V,S,je)}let ne=!1;V.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ae.state.version||Lt.outputColorSpace!==vt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==mt||V.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==xt.numPlanes||Lt.numIntersection!==xt.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==Nt||Lt.morphTargets!==Rt||Lt.morphNormals!==Yt||Lt.morphColors!==he||Lt.toneMapping!==Ce||Lt.morphTargetsCount!==me)&&(ne=!0):(ne=!0,Lt.__version=V.version);let un=Lt.currentProgram;ne===!0&&(un=Gs(V,N,F));let Ii=!1,hn=!1,ps=!1;const Ee=un.getUniforms(),gn=Lt.uniforms;if(bt.useProgram(un.program)&&(Ii=!0,hn=!0,ps=!0),V.id!==y&&(y=V.id,hn=!0),Ii||x!==S){bt.buffers.depth.getReversed()?(ft.copy(S.projectionMatrix),yh(ft),Eh(ft),Ee.setValue(D,"projectionMatrix",ft)):Ee.setValue(D,"projectionMatrix",S.projectionMatrix),Ee.setValue(D,"viewMatrix",S.matrixWorldInverse);const rn=Ee.map.cameraPosition;rn!==void 0&&rn.setValue(D,Vt.setFromMatrixPosition(S.matrixWorld)),_e.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,hn=!0,ps=!0)}if(F.isSkinnedMesh){Ee.setOptional(D,F,"bindMatrix"),Ee.setOptional(D,F,"bindMatrixInverse");const je=F.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Ee.setValue(D,"boneTexture",je.boneTexture,Wt))}F.isBatchedMesh&&(Ee.setOptional(D,F,"batchingTexture"),Ee.setValue(D,"batchingTexture",F._matricesTexture,Wt),Ee.setOptional(D,F,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",F._indirectTexture,Wt),Ee.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",F._colorsTexture,Wt));const _n=k.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&pt.update(F,k,un),(hn||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,Ee.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=mt,gn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(gn.envMapIntensity.value=N.environmentIntensity),hn&&(Ee.setValue(D,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&Ru(gn,ps),it&&V.fog===!0&&$.refreshFogUniforms(gn,it),$.refreshMaterialUniforms(gn,V,H,q,f.state.transmissionRenderTarget[S.id]),Mr.upload(D,nl(Lt),gn,Wt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Mr.upload(D,nl(Lt),gn,Wt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(D,"center",F.center),Ee.setValue(D,"modelViewMatrix",F.modelViewMatrix),Ee.setValue(D,"normalMatrix",F.normalMatrix),Ee.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const je=V.uniformsGroups;for(let rn=0,Br=je.length;rn<Br;rn++){const hi=je[rn];I.update(hi,un),I.bind(hi,un)}}return un}function Ru(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Cu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,k){const V=Pt.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Pt.get(S.texture).__webglTexture=N,Pt.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const k=Pt.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const Pu=D.createFramebuffer();this.setRenderTarget=function(S,N=0,k=0){L=S,T=N,b=k;let V=!0,F=null,it=!1,ht=!1;if(S){const mt=Pt.get(S);if(mt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)Wt.setupRenderTarget(S);else if(mt.__hasExternalTextures)Wt.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&Pt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ht=!0);const Nt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?F=Nt[N][k]:F=Nt[N],it=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?F=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[k]:F=Nt,P.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else P.copy(Mt).multiplyScalar(H).floor(),z.copy(Gt).multiplyScalar(H).floor(),O=te;if(k!==0&&(F=Pu),bt.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&bt.drawBuffers(S,F),bt.viewport(P),bt.scissor(z),bt.setScissorTest(O),it){const mt=Pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,k)}else if(ht){const mt=Pt.get(S.texture),Ut=N;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k,Ut)}else if(S!==null&&k!==0){const mt=Pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(S,N,k,V,F,it,ht,vt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt){bt.bindFramebuffer(D.FRAMEBUFFER,mt);try{const Ut=S.textures[vt],Nt=Ut.format,Rt=Ut.type;if(!_e.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&k>=0&&k<=S.height-F&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(N,k,V,F,ot.convert(Nt),ot.convert(Rt),it))}finally{const Ut=L!==null?Pt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,N,k,V,F,it,ht,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(mt=mt[ht]),mt)if(N>=0&&N<=S.width-V&&k>=0&&k<=S.height-F){bt.bindFramebuffer(D.FRAMEBUFFER,mt);const Ut=S.textures[vt],Nt=Ut.format,Rt=Ut.type;if(!_e.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(N,k,V,F,ot.convert(Nt),ot.convert(Rt),0);const he=L!==null?Pt.get(L).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,he);const Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sh(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Yt),D.deleteSync(Ce),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,k=0){const V=Math.pow(2,-k),F=Math.floor(S.image.width*V),it=Math.floor(S.image.height*V),ht=N!==null?N.x:0,vt=N!==null?N.y:0;Wt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ht,vt,F,it),bt.unbindTexture()};const Lu=D.createFramebuffer(),Du=D.createFramebuffer();this.copyTextureToTexture=function(S,N,k=null,V=null,F=0,it=null){it===null&&(F!==0?(ji("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=F,F=0):it=0);let ht,vt,mt,Ut,Nt,Rt,Yt,he,Ce;const Me=S.isCompressedTexture?S.mipmaps[it]:S.image;if(k!==null)ht=k.max.x-k.min.x,vt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Ut=k.min.x,Nt=k.min.y,Rt=k.isBox3?k.min.z:0;else{const _n=Math.pow(2,-F);ht=Math.floor(Me.width*_n),vt=Math.floor(Me.height*_n),S.isDataArrayTexture?mt=Me.depth:S.isData3DTexture?mt=Math.floor(Me.depth*_n):mt=1,Ut=0,Nt=0,Rt=0}V!==null?(Yt=V.x,he=V.y,Ce=V.z):(Yt=0,he=0,Ce=0);const me=ot.convert(N.format),Lt=ot.convert(N.type);let Ae;N.isData3DTexture?(Wt.setTexture3D(N,0),Ae=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Wt.setTexture2DArray(N,0),Ae=D.TEXTURE_2D_ARRAY):(Wt.setTexture2D(N,0),Ae=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),un=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=D.getParameter(D.UNPACK_SKIP_PIXELS),hn=D.getParameter(D.UNPACK_SKIP_ROWS),ps=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const Ee=S.isDataArrayTexture||S.isData3DTexture,gn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const _n=Pt.get(S),je=Pt.get(N),rn=Pt.get(_n.__renderTarget),Br=Pt.get(je.__renderTarget);bt.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let hi=0;hi<mt;hi++)Ee&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,F,Rt+hi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(N).__webglTexture,it,Ce+hi)),D.blitFramebuffer(Ut,Nt,ht,vt,Yt,he,ht,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Pt.has(S)){const _n=Pt.get(S),je=Pt.get(N);bt.bindFramebuffer(D.READ_FRAMEBUFFER,Lu),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Du);for(let rn=0;rn<mt;rn++)Ee?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_n.__webglTexture,F,Rt+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_n.__webglTexture,F),gn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,it,Ce+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,it),F!==0?D.blitFramebuffer(Ut,Nt,ht,vt,Yt,he,ht,vt,D.COLOR_BUFFER_BIT,D.NEAREST):gn?D.copyTexSubImage3D(Ae,it,Yt,he,Ce+rn,Ut,Nt,ht,vt):D.copyTexSubImage2D(Ae,it,Yt,he,Ut,Nt,ht,vt);bt.bindFramebuffer(D.READ_FRAMEBUFFER,null),bt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else gn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ae,it,Yt,he,Ce,ht,vt,mt,me,Lt,Me.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Ae,it,Yt,he,Ce,ht,vt,mt,me,Me.data):D.texSubImage3D(Ae,it,Yt,he,Ce,ht,vt,mt,me,Lt,Me):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,Yt,he,ht,vt,me,Lt,Me.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,Yt,he,Me.width,Me.height,me,Me.data):D.texSubImage2D(D.TEXTURE_2D,it,Yt,he,ht,vt,me,Lt,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,un),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,hn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ps),it===0&&N.generateMipmaps&&D.generateMipmap(Ae),bt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,k=null,V=null,F=0){return ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,k,V,F)},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),bt.unbindTexture()},this.resetState=function(){T=0,b=0,L=null,bt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const q0=[{id:"H-001",night:1,segment:1,category:"OBJ",rule:"gaze",effect:"blood_trail",reveal:"…바닥의 검붉은 자국은, 원래 없던 것이었다."},{id:"H-002",night:2,segment:1,category:"OBJ",rule:"gaze",effect:"skull",reveal:"…배출장 위에 놓여 있던 것. 그건, 쓰레기가 아니었다."},{id:"H-003",night:2,segment:1,category:"HUM",rule:"avert",effect:"face_window",reveal:"…창문에서 내려다보던 얼굴. 그 집은, 빈집이다."},{id:"H-004",night:1,segment:2,category:"OBJ",rule:"gaze",effect:"handprints",reveal:"…세탁소 셔터의 손자국들은, 안쪽에서 찍힌 것이었다."},{id:"H-005",night:1,segment:3,category:"HUM",rule:"avert",effect:"swing_figure",reveal:"…그네에 앉아 있던 것은, 아이가 아니었다.",untilNight:4},{id:"H-006",night:2,segment:3,category:"HUM",rule:"avert",effect:"eyes",reveal:"…펜스 뒤 어둠에서, 눈이 이쪽을 보고 있었다."},{id:"H-007",night:1,segment:4,category:"HUM",rule:"avert",effect:"bus_figure",reveal:"…정류장에 앉아 있던 사람. 버스는, 새벽에 안 다닌다."},{id:"H-008",night:1,segment:5,category:"OBJ",rule:"gaze",effect:"drag_mark",reveal:"…무언가를 끌고 간 자국이, 어둠 쪽으로 이어져 있었다."},{id:"H-009",night:2,segment:0,category:"HUM",rule:"avert",effect:"figure",reveal:"…등을 돌리고 서 있던 사람. 다시 봤을 때는, 없었다."},{id:"H-010",night:3,segment:1,category:"OBJ",rule:"gaze",effect:"shoes",reveal:"…계단 앞에 가지런히 놓인 신발은, 누구의 것도 아니었다."},{id:"H-011",night:3,segment:2,category:"LGT",rule:"gaze",effect:"shutter_glow",reveal:"…닫힌 셔터 밑에서 새어 나오던 빛은, 안에서 켠 것이었다."},{id:"H-012",night:3,segment:3,category:"HUM",rule:"avert",effect:"slide_figure",reveal:"…미끄럼틀 지붕 위에 서 있던 것은, 올라갈 수 없는 자리에 있었다."},{id:"H-015",night:3,segment:5,category:"OBJ",rule:"gaze",effect:"open_shutter",reveal:"…반쯤 올라간 셔터 안은, 불도 사람도 없었다."},{id:"H-016",night:4,segment:4,category:"OBJ",rule:"gaze",effect:"bench_shoes",reveal:"…벤치 위에 신발만 가지런히. 신고 갈 사람이, 없었다."},{id:"H-017",night:5,segment:2,category:"LGT",rule:"gaze",effect:"sign_lit",reveal:"…다 꺼진 상가에서, 그 간판 하나만 켜져 있었다."},{id:"H-013",night:4,segment:1,category:"HUM",rule:"avert",effect:"bike_figure",reveal:"…오토바이에 걸터앉아 있던 것은, 내가 지나갈 때까지 그대로였다."},{id:"H-014",night:4,segment:4,category:"HUM",rule:"avert",effect:"across_figure",reveal:"…길 건너에 서 있던 것은, 신호가 바뀌어도 건너지 않았다."},{id:"H-018",night:5,segment:3,category:"HUM",rule:"gaze",effect:"swing_figure",reveal:"…오늘의 그것은, 눈을 돌리면 안 되는 것이었다."},{id:"H-019",night:2,segment:2,category:"OBJ",rule:"gaze",effect:"lone_shadow",reveal:"…가로등 밑에, 그림자만 있었다. 그걸 만든 것은 없었다."},{id:"H-020",night:3,segment:3,category:"HUM",rule:"avert",effect:"fence_hands",reveal:"…펜스를 잡은 손이, 넷이었다."}],Y0=[{night:1,onboarding:!0,intro:`튀김을 먹고 나왔다. 배가 부르다.
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
…오늘은 반대라고 했다.`},{at:2,z:-15,text:`오늘은 가는 게 아니라,
돌아오는 게 목표다.`},{at:-1,z:-17,text:`칸이 다 찼다. 이제 안 가도 된다.
…안 가도 되나.`}]}],Bt={segments:5,segLength:36,corridorHalfWidth:3,walkSpeed:3.2,strafeFactor:.5,backFactor:.65,baseAnomalyChance:.4,chancePerMinute:.06,depthLimit:6,stretchDepthCost:2,swarmMax:2,stillGrowSec:4,stillDrainMul:.6,growDepthCost:1,avertDistance:11,avertAngleDeg:12,avertWarnSec:.4,avertGrabSec:2.2,avertRecoverMul:2.5},Ts=1.4,mo=q0;function $0(n){const t=ci(n).pressure??{};return{chanceBonus:t.chanceBonus??0,swarmFloor:t.swarmFloor??0}}const tu=Y0,si=tu.length;function ci(n){return tu[Math.min(Math.max(n,1),si)-1]}const zt={nightLabel:n=>`밤 ${n}`,segNames:["원룸 골목","상가 골목","놀이터 옆길","정류장 앞","먹자골목 입구"],segLabel:(n,t,e)=>`${n}/${t} — ${zt.segNames[e-1]}`,tutBeats:[{theme:4,z:0,text:"힘든 하루였다."},{theme:4,z:-11,text:"…저 앞에 현수막이 보인다."},{theme:4,z:-19,text:`FF-1204.
…XXXXL 감자튀김이다.`},{theme:4,z:-28.6,text:"…이건 못 참지."},{theme:5,z:-12,text:`먹자골목 입구.
간판에 불이 켜져 있다.`}],tutShopArrive:`FF-1204. 새 가게 냄새와 기름 냄새.
"어서오세요 — 첫 도장이시네요."`,tutShopBtn:"자리에서 먹고 간다",tutDusk:`맛있었다. 정신없이 먹었다.
…나와 보니, 깜깜하다.`,tutDuskBtn:"집으로 걷는다",nightOpen:n=>n>=5?`다섯 번째 밤. 도장 칸이 다 찼다.
마지막 한 입까지 먹고, 일어선다.`:`${n}번째 밤이다. 또 왔다.
튀김을 먹었다. 이제 집에 가야 한다.`,nightOpenBtn:"가게를 나선다",startBtnFirst:"퇴근하기!",startBtnResume:"가게를 나선다",homeArrive:`골목이 끝났다. 현관문이 보인다.
열쇠를 꺼내는 손이, 조금 떨린다.`,homeOpen:"문을 열고 들어간다",homeEnd:"불을 끄고 눕는다",homeSit:"신발을 벗는다",homeGauge:{crispy:"🏠 곧장 왔다",lukewarm:"🏠 조금 돌았다",soggy:"🏠 한참 걸렸다"},homeCrispy:`한 번도 멈추지 않고 왔다.
오늘 밤은, 이걸로 됐다.`,homeLukewarm:`몇 번인가, 같은 곳을 다시 걸었다.
…길이 좀, 길었으니까.`,homeSoggy:`한참을 헤맸다. 다리가 무겁다.
오늘 골목은, 유난히 길었다.`,hintMovePc:"W — 앞으로 · 마우스 — 둘러보기",hintMoveTouch:"버튼을 누르는 동안 걷습니다 · 화면을 쓸면 주변을 봅니다",hintAvert:"사람처럼 보이는 것은 — 보지 않는다. 그냥 지나간다",avertWarn:`…보면 안 된다.
눈을 돌려. 그냥 지나가.`,avertGrab:`…눈이 마주쳤다.
그리고, 다시 골목 입구다.`,carComing:`…빛이 온다.
이 시간에, 차가?`,carHitDay:"차에 치인 것 같은 꿈을 꿨다.",carHit:"차에 치인 것 같은 꿈을 꾼 것 같다.",turnedBack:`…돌아가려던 참이었는데.
어느새 다시, 이쪽을 보고 있다.`,stretchNotice:"…같은 골목이다. 걸어온 만큼, 늘어나 있다.",softFail:`…여기가 어디지.

정신을 차려 보니, 가게 앞이다.
걸어온 길이, 하나도 기억나지 않는다.`,softFailBtn:"…다시 걷는다",couponOverflow:"…여섯 번째 도장은, 칸 밖에 찍혀 있다."};function K0(n){return n<=0?"crispy":n<=2?"lukewarm":"soggy"}function Z0(n){return 1+Math.min(Bt.swarmMax,n)}const lc=2.4;class j0{constructor(t){this.yaw=0,this.pitch=0,this.touchForward=0,this.touchStrafe=0,this.keys=new Set,this.locked=!1,this.lookTouch=null,this.usesTouch=!1,this.canvas=t,window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas}),document.addEventListener("mousemove",e=>{this.locked&&this.applyLook(e.movementX,e.movementY)}),t.addEventListener("pointerdown",e=>this.onPointerDown(e)),t.addEventListener("pointermove",e=>this.onPointerMove(e)),t.addEventListener("pointerup",e=>this.onPointerEnd(e)),t.addEventListener("pointercancel",e=>this.onPointerEnd(e))}activate(){var t,e;this.usesTouch||(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}applyLook(t,e){this.yaw-=t*.0024,this.pitch-=e*.0024;const s=Math.PI/2-.05;this.pitch=Math.max(-s,Math.min(s,this.pitch))}onPointerDown(t){var e,i;if(t.pointerType==="mouse"){this.locked||(i=(e=this.canvas).requestPointerLock)==null||i.call(e);return}this.usesTouch=!0,this.lookTouch||(this.lookTouch={id:t.pointerId,x:t.clientX,y:t.clientY})}onPointerMove(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.applyLook((t.clientX-this.lookTouch.x)*lc,(t.clientY-this.lookTouch.y)*lc),this.lookTouch.x=t.clientX,this.lookTouch.y=t.clientY)}onPointerEnd(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.lookTouch=null)}isDown(t){return this.keys.has(t)}getMove(){let t=0,e=0;return(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.touchForward,e+=this.touchStrafe,{forward:Math.max(-1,Math.min(1,t)),strafe:Math.max(-1,Math.min(1,e))}}}class J0{constructor(){this.status=document.getElementById("status"),this.msg=document.getElementById("msg"),this.fade=document.getElementById("fade"),this.touchHint=document.getElementById("touch-hint"),this.msgTimer=0,this.hintTimer=0}setStatus(t){this.status.textContent=t}setStatusStretch(t){this.status.style.opacity="0",setTimeout(()=>{this.status.textContent=t,this.status.style.opacity="1"},320)}showHint(t,e){this.touchHint.textContent=t,this.touchHint.style.display="block",window.clearTimeout(this.hintTimer),e&&(this.hintTimer=window.setTimeout(()=>this.hideHint(),e))}hideHint(){this.touchHint.style.display="none"}say(t,e=2600){this.msg.textContent=t,this.msg.style.opacity="1",window.clearTimeout(this.msgTimer),this.msgTimer=window.setTimeout(()=>{this.msg.style.opacity="0"},e)}async fadeOut(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="1",await new Promise(e=>setTimeout(e,t+60))}async fadeIn(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="0",await new Promise(e=>setTimeout(e,t+60))}async arrivalScene(t){var o;(o=document.exitPointerLock)==null||o.call(document);const e=document.createElement("div");e.className="overlay",e.style.opacity="0",e.style.background=t.bg,e.style.transitionDuration="1.4s";const i=document.createElement("div");i.className="sub",i.textContent=t.gauge;const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.style.transition="opacity 1.1s",s.textContent=t.result;const r=document.createElement("button");r.textContent=t.steps[0],e.append(i,s,r),document.body.append(e),requestAnimationFrame(()=>e.style.opacity="1");let a=0;await new Promise(l=>{r.addEventListener("click",()=>{if(a>=2){l();return}if(t.onBite(a),a+=1,a<2){r.textContent=t.steps[1];return}r.disabled=!0,r.style.opacity="0.4",setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{s.textContent=t.epilogue,s.style.opacity="1",r.textContent=t.endLabel,r.disabled=!1,r.style.opacity=""},1150)},1400)})}),e.style.opacity="0",setTimeout(()=>e.remove(),1500)}async blackScreen(t,e){var a;(a=document.exitPointerLock)==null||a.call(document);const i=document.createElement("div");i.className="overlay",i.style.opacity="0",i.style.background="#000";const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.textContent=t;const r=document.createElement("button");r.textContent=e,i.append(s,r),document.body.append(i),requestAnimationFrame(()=>i.style.opacity="1"),await new Promise(o=>{r.addEventListener("click",()=>o(),{once:!0})}),i.style.opacity="0",setTimeout(()=>i.remove(),900)}}const Q0="#05070e",tg="#0d1424",eg="#04060c",ng="#03050a",ig="#090d16",sg="#ffb23e";function rg(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function ag(n,t,e){const i=rg(12040);n.clearRect(0,0,t,e);const s=t*.5,r=e>t,a=e*(r?.62:.76),o=r?Math.max(t,e*.52):t,l=n.createLinearGradient(0,0,0,e);l.addColorStop(0,Q0),l.addColorStop(.62,tg),l.addColorStop(1,"#070a12"),n.fillStyle=l,n.fillRect(0,0,t,e);const c=n.createRadialGradient(s,a,0,s,a,t*.62);c.addColorStop(0,"rgba(58,78,120,0.36)"),c.addColorStop(.45,"rgba(38,52,86,0.16)"),c.addColorStop(1,"rgba(20,28,48,0)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.fillStyle=ig,n.beginPath(),n.moveTo(0,e),n.lineTo(s-t*.055,a),n.lineTo(s+t*.055,a),n.lineTo(t,e),n.closePath(),n.fill();const h=9;for(const R of[-1,1])for(let T=0;T<h;T++){const b=T/h,L=(T+1)/h,y=q=>s+R*(t*.05+o*.62*Math.pow(1-q,1.7)),x=y(b),P=y(L),z=q=>a-e*(.62*Math.pow(1-q,1.25)+.02),O=(.5-i())*e*.1*(1-b),Y=z(b)+O;n.fillStyle=R<0?eg:ng,n.fillRect(Math.min(x,P),Y,Math.abs(P-x)+1,e-Y);const Z=Math.max(1,Math.round(2*(1-b)+1)),X=Math.max(1.5,(P-x)*R*.16);for(let q=0;q<Z;q++){const H=x+(P-x)*((q+.5)/Z);for(let st=0;st<4;st++){const at=Y+(e-Y)*(.12+st*.15);if(at>e*.95)break;const Mt=i();n.fillStyle=Mt>.9?"rgba(150,172,208,0.30)":"rgba(120,140,178,0.075)",n.fillRect(H-X/2,at,Math.abs(X),Math.abs(X)*1.3)}}}n.strokeStyle="rgba(2,3,7,0.92)",n.lineCap="butt";for(const R of[-1,1]){for(let T=0;T<4;T++){const b=.06+T*.21,L=s+R*(t*.05+o*.58*Math.pow(1-b,1.7)),y=a-e*(.6*Math.pow(1-b,1.15)+.05);n.lineWidth=Math.max(1,t*.0045*(1-b)+.8),n.beginPath(),n.moveTo(L,y),n.lineTo(L,e),n.stroke(),n.lineWidth=Math.max(.8,t*.003*(1-b)+.6),n.beginPath(),n.moveTo(L-t*.022*(1-b)-2,y+e*.018),n.lineTo(L+t*.022*(1-b)+2,y+e*.018),n.stroke()}for(let T=0;T<3;T++){const b=e*(.012+T*.016);n.lineWidth=Math.max(.6,t*.0012),n.beginPath();const L=s+R*(t*.05+o*.58),y=a-e*.6+b,x=s+R*t*.05,P=a-e*.09+b*.3;n.moveTo(L,y),n.quadraticCurveTo((L+x)/2,(y+P)/2+e*.05,x,P),n.stroke()}}const u=s+t*.2,d=a-e*.1,p=n.createRadialGradient(u,d,0,u,d,t*.16);p.addColorStop(0,"rgba(255,178,62,0.26)"),p.addColorStop(.35,"rgba(255,150,60,0.08)"),p.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=p,n.fillRect(u-t*.17,d-t*.17,t*.34,t*.34),n.fillStyle=sg,n.globalAlpha=.8,n.fillRect(u-t*.0035,d-e*.01,t*.007,e*.02),n.globalAlpha=1,n.fillStyle="#0b0f18",n.fillRect(u-t*.0013,d,t*.0026,e);const g=n.createRadialGradient(u,a+e*.12,0,u,a+e*.12,t*.11);g.addColorStop(0,"rgba(255,170,70,0.11)"),g.addColorStop(1,"rgba(255,170,70,0)"),n.fillStyle=g,n.fillRect(u-t*.12,a,t*.24,e*.3);const _=e*.075,m=u-t*.075,f=a+e*.055;n.fillStyle="#03050a",n.beginPath(),n.ellipse(m,f-_*.88,_*.13,_*.15,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(m-_*.19,f),n.lineTo(m-_*.15,f-_*.72),n.lineTo(m+_*.15,f-_*.72),n.lineTo(m+_*.19,f),n.closePath(),n.fill();const w=n.createRadialGradient(s,a-e*.02,0,s,a-e*.02,t*.14);w.addColorStop(0,"rgba(2,3,6,0.97)"),w.addColorStop(1,"rgba(2,3,6,0)"),n.fillStyle=w,n.fillRect(s-t*.16,a-e*.18,t*.32,e*.3);const E=n.createLinearGradient(0,0,0,e*.66);E.addColorStop(0,"rgba(4,6,12,0.62)"),E.addColorStop(.5,"rgba(4,6,12,0.44)"),E.addColorStop(1,"rgba(4,6,12,0)"),n.fillStyle=E,n.fillRect(0,0,t,e*.66);const M=n.createRadialGradient(s,a*.92,e*.16,s,a*.92,Math.max(t,e)*.78);M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(1,"rgba(0,0,0,0.84)"),n.fillStyle=M,n.fillRect(0,0,t,e),n.globalCompositeOperation="lighter",n.fillStyle="rgba(30,44,74,0.10)",n.fillRect(0,0,t,e),n.globalCompositeOperation="source-over"}function og(){const n=document.getElementById("start");if(!n)return;const t=document.createElement("canvas");t.id="title-art",n.insertBefore(t,n.firstChild);const e=()=>{const r=Math.min(window.devicePixelRatio||1,1.5),a=n.clientWidth||window.innerWidth,o=n.clientHeight||window.innerHeight;t.width=Math.max(1,Math.round(a*r)),t.height=Math.max(1,Math.round(o*r));const l=t.getContext("2d");l&&(l.setTransform(r,0,0,r,0,0),ag(l,a,o))};e();let i;const s=()=>{window.clearTimeout(i),i=window.setTimeout(e,120)};window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}const cc=.9;class lg{constructor(){this.ctx=null,this.master=null,this.ambGain=null,this.stepTimer=0,this.muted=!1,this.stare=0,this.beatTimer=0}start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:cc,this.master.connect(t.destination);const e=t.createBufferSource();e.buffer=this.noiseBuffer(4),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=320;const s=t.createOscillator();s.frequency.value=.07;const r=t.createGain();r.gain.value=140,s.connect(r).connect(i.frequency),this.ambGain=t.createGain(),this.ambGain.gain.value=.05,e.connect(i).connect(this.ambGain).connect(this.master),e.start(),s.start()}suspend(){var t;(t=this.ctx)==null||t.suspend()}resume(){var t;(t=this.ctx)==null||t.resume()}setMuted(t){if(this.muted=t,!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(t?0:cc,e+.15)}duck(t){if(!this.ctx||!this.ambGain)return;const e=this.ctx.currentTime;this.ambGain.gain.cancelScheduledValues(e),this.ambGain.gain.setValueAtTime(this.ambGain.gain.value,e),this.ambGain.gain.linearRampToValueAtTime(t?.006:.05,e+2.2)}setStare(t){this.stare=Math.max(0,Math.min(1,t||0)),this.stare<=0&&(this.beatTimer=0)}update(t,e){if(this.ctx){if(this.stare>.06&&(this.beatTimer-=t,this.beatTimer<=0&&(this.heartbeat(this.stare),this.beatTimer=1.15-this.stare*.73)),!e){this.stepTimer=.12;return}this.stepTimer-=t,this.stepTimer<=0&&(this.footstep(),this.stepTimer=.6)}}heartbeat(t){const e=this.ctx;if(!e||!this.master)return;const i=e.currentTime,s=.035+t*.085;for(const[r,a]of[[0,1],[.16,.62]]){const o=e.createOscillator();o.type="sine";const l=i+r;o.frequency.setValueAtTime(64,l),o.frequency.exponentialRampToValueAtTime(38,l+.13);const c=e.createGain();c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(s*a,l+.022),c.gain.exponentialRampToValueAtTime(1e-4,l+.16),o.connect(c).connect(this.master),o.start(l),o.stop(l+.2)}}stretch(){const t=this.ctx;if(!t||!this.master)return;const e=t.currentTime,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(96,e),i.frequency.exponentialRampToValueAtTime(27,e+1.5);const s=t.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.1,e+.12),s.gain.exponentialRampToValueAtTime(1e-4,e+1.6),i.connect(s).connect(this.master),i.start(e),i.stop(e+1.7);const r=t.createBufferSource();r.buffer=this.noiseBuffer(1.4);const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(700,e),a.frequency.linearRampToValueAtTime(140,e+1.3);const o=t.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.05,e+.35),o.gain.exponentialRampToValueAtTime(1e-4,e+1.35),r.connect(a).connect(o).connect(this.master),r.start(e),r.stop(e+1.45)}footstep(){const t=this.ctx;if(!t||!this.master)return;const e=t.createBufferSource();e.buffer=this.noiseBuffer(.08);const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=170+Math.random()*60,i.Q.value=1.2;const s=t.createGain(),r=t.currentTime;s.gain.setValueAtTime(.1,r),s.gain.exponentialRampToValueAtTime(.001,r+.09),e.connect(i).connect(s).connect(this.master),e.start(),e.stop(r+.1)}crunch(t){const e=this.ctx;if(!e||!this.master)return;const i=Math.max(0,Math.min(1,t)),s=i>.6?3:i>.3?2:1;for(let r=0;r<s;r++){const a=e.currentTime+r*.5,o=5+Math.floor(i*7);for(let l=0;l<o;l++){const c=e.createBufferSource();c.buffer=this.noiseBuffer(.03);const h=e.createBiquadFilter();h.type="highpass",h.frequency.value=1200+i*2500+Math.random()*800;const u=e.createGain(),d=a+l*(.028+Math.random()*.02);u.gain.setValueAtTime(1e-4,d),u.gain.exponentialRampToValueAtTime(.07+i*.06,d+.006),u.gain.exponentialRampToValueAtTime(.001,d+.03),c.connect(h).connect(u).connect(this.master),c.start(d),c.stop(d+.05)}}}carPass(t){const e=this.ctx;if(!e||!this.master)return;const i=e.currentTime,s=e.createBufferSource();s.buffer=this.noiseBuffer(t+.2);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(240,i),r.frequency.linearRampToValueAtTime(900,i+t*.45),r.frequency.linearRampToValueAtTime(220,i+t);const a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.16,i+t*.45),a.gain.exponentialRampToValueAtTime(8e-4,i+t),s.connect(r).connect(a).connect(this.master),s.start(i),s.stop(i+t+.2)}noiseBuffer(t){const e=this.ctx,i=Math.max(1,Math.floor(e.sampleRate*t)),s=e.createBuffer(1,i,e.sampleRate),r=s.getChannelData(0);let a=0;for(let o=0;o<i;o++){const l=Math.random()*2-1;a=(a+.02*l)/1.02,r[o]=a*3.2}return s}}const We='"Malgun Gothic", "Apple SD Gothic Neo", sans-serif';function Yn(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const s=i.getContext("2d");e(s);const r=new Uo(i);return r.colorSpace=en,r.anisotropy=4,r}function uc(n){return Yn(256,352,t=>{t.fillStyle="#b3ad9c",t.fillRect(0,0,256,352),t.fillStyle="#2a2620",t.textAlign="center",t.font=`bold 46px ${We}`,t.fillText("과외",128,84),t.fillText("구합니다",128,140),t.font=`24px ${We}`,t.fillText("수학 · 영어 — 초·중등",128,196),t.font=`bold 31px ${We}`,t.fillText(n,128,268),t.strokeStyle="#6d675a",t.setLineDash([5,5]);for(let e=32;e<256;e+=32)t.beginPath(),t.moveTo(e,300),t.lineTo(e,352),t.stroke()})}function hc(n){return Yn(512,384,t=>{t.fillStyle="#0d1220",t.fillRect(0,0,512,384),t.strokeStyle="#2a3148",t.lineWidth=10,t.strokeRect(5,5,502,374),[["희망빌라 302",n?"급구":"월세 35"],["동아주택 B01","월세 30"],["한빛빌라 201","전세 8,500"],["성원빌라 402","월세 28"]].forEach(([i,s],r)=>{const a=28+r%2*240,o=32+Math.floor(r/2)*168;t.fillStyle="#c6c1b1",t.fillRect(a,o,216,140),t.textAlign="center",t.fillStyle="#33302a",t.font=`22px ${We}`,t.fillText(i,a+108,o+44),t.font=`bold 40px ${We}`,t.fillText(s,a+108,o+102)})})}function cg(){return Yn(256,320,n=>{n.fillStyle="#0d1220",n.fillRect(0,0,256,320);const t=n.createRadialGradient(128,150,20,128,150,95);t.addColorStop(0,"rgba(190, 186, 170, 0.92)"),t.addColorStop(.75,"rgba(160, 155, 140, 0.5)"),t.addColorStop(1,"rgba(120, 116, 104, 0)"),n.fillStyle=t,n.beginPath(),n.ellipse(128,150,72,100,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(10, 12, 18, 0.9)";for(const e of[98,158])n.beginPath(),n.ellipse(e,128,11,16,0,0,Math.PI*2),n.fill()})}function ug(){return Yn(1024,512,n=>{n.clearRect(0,0,1024,512);const t=[[190,260,.28,.85],[340,180,-.2,.7],[520,300,.5,.9],[660,210,-.4,.6],[810,290,.15,.8],[430,400,-.1,.5]];for(const[e,i,s,r]of t){n.save(),n.translate(e,i),n.rotate(s),n.fillStyle=`rgba(90, 15, 15, ${r})`,n.beginPath(),n.ellipse(0,0,26,34,0,0,Math.PI*2),n.fill();for(let a=0;a<5;a++){const o=-.7+a*.35;n.beginPath(),n.ellipse(Math.sin(o)*34,-Math.cos(o)*44,7,17,o,0,Math.PI*2),n.fill()}n.restore()}})}function hg(){return Yn(1024,192,n=>{n.fillStyle="#7c1d22",n.fillRect(0,0,1024,192),n.strokeStyle="#e8d9a0",n.lineWidth=5,n.strokeRect(14,14,996,164),n.textAlign="center",n.fillStyle="#fdf3d8",n.font=`bold 78px ${We}`,n.fillText("FF-1204  개업",512,86),n.font=`bold 56px ${We}`,n.fillText("XXXXL 감자튀김",512,154)})}function go(n){return Yn(512,144,t=>{t.fillStyle="#140d05",t.fillRect(0,0,512,144),t.textAlign="center",t.fillStyle="#ffd9a0";const e=n.split(`
`);let i=e.length===1?60:46;t.font=`bold ${i}px ${We}`;const s=Math.max(...e.map(o=>t.measureText(o).width));s>470&&(i=Math.floor(i*470/s),t.font=`bold ${i}px ${We}`);const r=i*1.12,a=72-(e.length-1)*r/2;e.forEach((o,l)=>t.fillText(o,256,a+l*r+i*.4))})}function fg(){return Yn(512,256,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,256),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,240),n.textAlign="center",n.fillStyle="#9a8a6a",n.font=`34px ${We}`,n.fillText("영업시간",256,74),n.fillStyle="#ffd9a0",n.font=`bold 72px ${We}`,n.fillText("24시간",256,156),n.fillStyle="#9a8a6a",n.font=`32px ${We}`,n.fillText("연중무휴",256,210)})}function dg(){return Yn(512,192,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,192),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#ffd9a0",n.font=`bold 34px ${We}`,n.fillText("감자튀김",28,54),n.font=`26px ${We}`,[["XXXXL","9,900"],["XXL","6,900"],["L","4,900"]].forEach(([e,i],s)=>{const r=96+s*34;n.fillStyle=s===0?"#ffd9a0":"#9a8a6a",n.fillText(e,40,r),n.textAlign="right",n.fillText(i,472,r),n.textAlign="left"})})}function pg(){return Yn(256,320,n=>{n.fillStyle="#e8e0cc",n.fillRect(0,0,256,320),n.fillStyle="#33302a",n.textAlign="center",n.font=`bold 30px ${We}`,n.fillText("방문 도장",128,58),n.font=`20px ${We}`,n.fillText("오실 때마다",128,96),n.strokeStyle="#5c5648",n.lineWidth=3;for(let t=0;t<5;t++){const e=52+t%3*52,i=150+Math.floor(t/3)*62;n.beginPath(),n.arc(e,i,21,0,Math.PI*2),n.stroke()}n.font=`17px ${We}`,n.fillText("다섯 칸",128,292)})}function eu(n){var e;const t=((e=new Error().stack)==null?void 0:e.split(`
`))??[];for(const i of t.slice(1)){const s=/\/([\w.-]+\.ts)(?:\?[^:]*)?:(\d+):\d+/.exec(i);if(s&&s[1]!=="kit.ts"){n.userData.src=`${s[1]}:${s[2]}`;return}}}function mg(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function bs(n,t,e){const i=mg(e),s=new Float32Array(t*t);for(let l=0;l<s.length;l++)s[l]=i();const r=new Float32Array(n*n),a=n/t,o=l=>l*l*(3-2*l);for(let l=0;l<n;l++){const c=l/a,h=Math.floor(c)%t,u=(h+1)%t,d=o(c-Math.floor(c));for(let p=0;p<n;p++){const g=p/a,_=Math.floor(g)%t,m=(_+1)%t,f=o(g-Math.floor(g)),w=s[h*t+_]+(s[h*t+m]-s[h*t+_])*f,E=s[u*t+_]+(s[u*t+m]-s[u*t+_])*f;r[l*n+p]=w+(E-w)*d}}return r}const gg=256;function nu(n){const t=gg,e=new Float32Array(t*t).fill(1);n(e,t);const i=document.createElement("canvas");i.width=i.height=t;const s=i.getContext("2d"),r=s.createImageData(t,t);for(let o=0;o<e.length;o++){const l=Math.max(0,Math.min(1,e[o]))*255;r.data[o*4]=r.data[o*4+1]=r.data[o*4+2]=l,r.data[o*4+3]=255}s.putImageData(r,0,0);const a=new Uo(i);return a.wrapS=a.wrapT=As,a.colorSpace=en,a}function _g(){return nu((n,t)=>{const e=bs(t,8,7311),i=bs(t,64,4409);for(let s=0;s<n.length;s++)n[s]=1-(e[s]-.5)*.15-(i[s]-.5)*.14})}function vg(){return nu((n,t)=>{const e=bs(t,6,1187),i=bs(t,24,9041),s=bs(t,48,2273);for(let r=0;r<t;r++)for(let a=0;a<t;a++){const o=r*t+a,l=i[r%8*t+a];n[o]=1-(e[o]-.5)*.12-(l-.5)*.09-(s[o]-.5)*.06}})}function xg(){const e=document.createElement("canvas");e.width=512,e.height=256;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,"#8d92bd"),s.addColorStop(.16,"#a89cc0"),s.addColorStop(.3,"#c9a8bd"),s.addColorStop(.4,"#e8bcc2"),s.addColorStop(.47,"#f5cdc6"),s.addColorStop(.52,"#eec4b4"),s.addColorStop(1,"#b08b7a"),i.fillStyle=s,i.fillRect(0,0,512,256);const r=512*.75,a=256*.4,o=i.createRadialGradient(r,a,0,r,a,512*.34);o.addColorStop(0,"rgba(255, 244, 214, 0.95)"),o.addColorStop(.06,"rgba(255, 226, 172, 0.80)"),o.addColorStop(.2,"rgba(250, 196, 158, 0.45)"),o.addColorStop(.55,"rgba(238, 180, 168, 0.16)"),o.addColorStop(1,"rgba(230, 175, 175, 0)"),i.fillStyle=o,i.fillRect(0,0,512,256);const l=new Uo(e);return l.wrapS=As,l.wrapT=ii,l.colorSpace=en,l}function fc(n,t,e,i){const s=t.clone();s.needsUpdate=!0,s.repeat.set(e,i);const r=new qt({color:n,roughness:.95,map:s});return r.userData.surface=!0,r}function Ct(n,t,e,i,s,r,a,o){const l=new dt(new Jt(n,t,e),new qt({color:i,roughness:.95}));return l.position.set(s,r,a),eu(l),o.add(l),l}function W(n,t,e,i,s,r,a,o){const l=new dt(new Jt(t,e,i),n);return l.position.set(s,r,a),eu(l),o.add(l),l}const Et=n=>new qt({color:n,roughness:.95});function Mg(){return{blood:new qt({color:7017492,roughness:.16,metalness:.25,emissive:3346190}),bloodWall:new qt({color:4853519,roughness:.5}),darkFigure:new qt({color:724502,roughness:1})}}const C=Bt.segLength,G=Bt.corridorHalfWidth,jt=7,Te=-C*.68,Tn=3.2,xa=-C*.585,Ho=9,Sg=3.5,iu=6;function Ds(n){return n%Ho<iu}function yg(n){const t=n%Ho;return t>=Sg&&t<iu}const _o=44,su=3.8,Eg=18,Tg=9,bg=4.6,$e=9,Fe=3.4,ru=1.5,wg=-36-$e/2,Ag=[1.8,$e/2],au=12371672,ko=8160924,ou=3.2,Rg=16764829,Cg=7.5,Pg=6244134,Lg=16755566,Dg=8213296,Ig=13951730,Ug=7176344,Ng=4,Fg=11,lu=Math.PI/2,Og=0,cu=[[1.6,-C*.26],[-1.9,-C*.36],[2.1,-C*.49],[-1.4,-C*.58],[.9,-C*.71],[-2.1,-C*.81]],uu=new U(-2.35,.28,-C*.46),Bg=new U(.5,.28,-C*.42),Is=[26,20,14,9,5.5,3],Li=658970,hu=15713222,fu=14269629,Je=-C-6.6;function dc(n=!1){const t=new Qt,e={road:Et(1580072),wall:Et(2304056),shutter:Et(2765123),tile:Et(7236190),steel:Et(9080470),dark:Et(1317154),awning:Et(8133922)},i=new qt({color:16757310,emissive:16757310,emissiveIntensity:.55,roughness:.4});W(e.road,12,.2,12,0,-.18,Je+3.4,t);const s=8,r=3.6,a=Je-r;W(e.tile,s,3.4,.2,0,1.7,a,t);for(const p of[-1,1])W(e.tile,.2,3.4,r,p*(s/2),1.7,Je-r/2,t);W(e.dark,s+.4,.25,r,0,3.5,Je-r/2,t),W(e.dark,s+.4,1.1,.4,0,3,Je,t);const o=W(e.awning,s+1,.12,1.5,0,2.62,Je+.75,t);o.rotation.x=-.16,W(e.steel,s-1,1.05,.7,0,.525,Je-.5,t),W(e.tile,s-.8,.08,.85,0,1.09,Je-.5,t);for(const p of[-1,1]){W(e.steel,1.25,.95,.85,p*1.5,1.5,a+.75,t);const g=new dt(new Jt(1.02,.05,.62),i);g.position.set(p*1.5,1.99,a+.75),t.add(g),W(e.steel,.06,.5,.06,p*1.5,2.25,a+1.1,t)}W(e.dark,3.6,.55,1.1,0,2.75,a+.75,t);const l=new dt(new Le(2.7,1),new qt({map:dg(),roughness:.9}));l.position.set(-1.5,1.92,Je-.25),t.add(l);const c=new dt(new Le(1.15,.62),new qt({map:fg(),roughness:.9}));c.position.set(1.85,1.92,Je-.25),t.add(c);const h=new dt(new Le(.72,.9),new qt({map:pg(),roughness:.95}));h.position.set(2.6,1.75,a+.11),t.add(h);for(const p of[2.15,2.62])W(e.steel,2.2,.06,.34,2.6,p,a+.28,t);const u=4.6,d=Je+3.4;for(const p of[-1,1]){W(e.wall,.5,7,7.6,p*u,3.5,d,t),W(e.shutter,.16,2.4,5.4,p*(u-.32),1.2,d,t);for(let _=0;_<4;_++)W(e.dark,.17,.05,5.4,p*(u-.32),.5+_*.55,d,t);const g=W(e.awning,.9,.1,5.6,p*(u-.6),2.75,d,t);g.rotation.z=p*-.24}W(e.wall,s+6,4.2,.6,0,5.5,Je+.15,t);for(const p of[-2.4,0,2.4])W(e.dark,1.3,1,.1,p,5.2,Je-.2,t);if(n){const p=go(`감자튀김 전문점!!
ff-1204`),g=new qt({color:16777215,map:p,emissiveMap:p,emissive:16777215}),_=Et(1314053),m=new dt(new Jt(3.4,.9,.3),[_,_,_,_,g,_]);m.position.set(0,4.3,Je+.55),t.add(m);const f=new In(16757310,20,26,2);f.position.set(0,3,Je+.6),t.add(f)}return t.visible=!1,t}const Oe=-C-6;function zg(){const n=new Qt,t={road:Et(1580072),wall:Et(2304056),villa:Et(2501694),trim:Et(2896452),door:Et(1119519),dark:Et(1317154),crate:Et(2765122)},e=new qt({color:16767392,emissive:16762503,emissiveIntensity:1}),i=new qt({color:6970434,emissive:16757310,emissiveIntensity:.35,roughness:.6}),s=new qt({color:3814440,emissive:16757310,emissiveIntensity:.18}),r=4.6,a=Oe+3.4;W(t.road,12,.2,12,0,-.18,a,n);for(const h of[-1,1])W(t.wall,.5,7,7.6,h*r,3.5,a,n);const o=9;W(t.villa,o,7,.6,0,3.5,Oe-.3,n),W(t.trim,o+.6,.3,.9,0,7.1,Oe-.3,n),W(t.trim,3.4,.22,1.3,0,2.62,Oe+.45,n);for(const h of[-1,1])W(t.trim,.16,2.5,.16,h*1.5,1.25,Oe+.95,n);W(t.trim,2.3,2.5,.2,0,1.25,Oe+.02,n),W(t.door,1.6,2.2,.14,0,1.1,Oe+.1,n);const l=new dt(new Jt(.44,1.05,.06),i);l.position.set(0,1.52,Oe+.17),n.add(l);for(const h of[1.16,1.52,1.88])W(t.door,.5,.05,.09,0,h,Oe+.19,n);W(t.trim,.46,.1,.26,0,2.53,Oe+.19,n);const c=new dt(new Jt(.3,.11,.14),e);c.position.set(0,2.44,Oe+.17),n.add(c),W(t.trim,1,.55,.16,-1.75,1.35,Oe+.05,n);for(let h=0;h<3;h++)W(t.dark,.26,.34,.04,-2.05+h*.3,1.35,Oe+.14,n);return W(t.trim,.5,.26,.06,1.7,2.15,Oe+.03,n),[3.6,5.1,6.3].forEach((h,u)=>{W(t.dark,.9,1.1,.12,2.6,h,Oe+.02,n);const d=new dt(new Jt(.8,1,.06),u===1?s:t.dark);d.position.set(-2.6,h,Oe+.02),n.add(d)}),W(t.trim,.85,.6,.4,3,4.4,Oe+.2,n),W(t.crate,1.7,.5,1,-3.3,.25,Oe+1.5,n),W(t.crate,.75,.36,.62,-3.5,.86,Oe+1.45,n),n.visible=!1,n}function Hg(){return{wall:Et(2106938),portal:Et(2304056),deck:Et(1711915),base:Et(1448741),trim:Et(2436157),girder:Et(1317154),groove:Et(1119517),road:Et(1580072),fog:[.22,.32,.45,.6,.75].map(n=>new rs({color:263690,transparent:!0,opacity:n,depthWrite:!1,fog:!1,side:Pn}))}}let kg=null;const du=()=>kg??(kg=Hg());function pc(n,t,e,i,s){const r=new Qt,a=p=>n+t*p,o=ru,l=$e/2,c=$e+2,h=a(l+1);W(i.road,20,.2,$e+6,0,-.1,a(l),r);for(const p of[2.2,4.4])W(i.groove,o*2+.6,.04,.08,0,.02,a(p),r);for(const p of[-1,1]){const g=p*(o+.45);W(i.wall,.9,Fe,c,g,Fe/2,h,r),W(i.base,1,.5,c,p*(o+.43),.25,h,r),W(i.trim,1,.14,c,p*(o+.43),Fe-.3,h,r);for(const _ of[1.2,2.6,4,5.4])W(i.groove,.07,Fe-1,.09,p*(o-.02),(Fe+.5)/2,a(_),r);W(i.groove,.34,.06,c,p*(o-.17),.035,h,r)}W(i.deck,o*2+2,.9,c,0,Fe+.45,h,r);for(const p of[1,3,5,7])W(i.girder,o*2+1.2,.3,.4,0,Fe-.13,a(p),r);const u=.125;for(const p of[-1,1])W(i.portal,.78,Fe+.62,.85,p*(o+.39),(Fe+.62)/2,a(u),r);W(i.portal,o*2+1.9,.62,.9,0,Fe+.31,a(u),r),W(i.trim,o*2+2.4,.16,1.12,0,Fe+.7,a(u-.08),r);for(const p of[.1,$e-.1])W(i.portal,20,.62,.62,0,Fe+1,a(p),r),W(i.portal,20,1.15,.44,0,Fe+1.89,a(p),r);for(let p=-3.6;p<=3.61;p+=.9)W(i.trim,.16,.6,.3,p,Fe+2.76,a(.1),r);W(i.trim,20,.16,.38,0,Fe+3.14,a(.1),r);for(const p of Ag)W(i.girder,.44,.16,.24,0,Fe-.44,a(p),r),W(s,.3,.05,.15,0,Fe-.545,a(p),r);const d=new In(au,ou,11,2);return d.position.set(0,Fe-.7,a(l)),r.add(d),[3.2,4.2,5.2,6.4,7.8].forEach((p,g)=>{const _=new dt(new Le(14,11),i.fog[g]);_.position.set(0,Fe/2,a(p)),r.add(_)}),W(i.portal,20,jt,1,0,jt/2,a($e+e),r),{group:r,light:d}}function Gg(n,t){const i=[[2.85,-C*.16],[-2.85,-C*.42],[2.85,-C*.63],[2.85,-C*.93]];for(const[c,h]of i){W(t.pole,.26,9.4,.26,c,9.4/2,h,n);const u=Math.sign(c);W(t.arm,1.5,.1,.1,c-u*.7,9.4-.75,h,n),W(t.arm,1.1,.09,.09,c-u*.5,9.4-1.5,h,n)}W(t.arm,.46,.72,.46,2.85-.5,9.4-2.7,-C*.63,n);const s=[],r=(c,h,u,d,p,g,_)=>{let f=c,w=h,E=u;for(let M=1;M<=6;M++){const R=M/6,T=c+(d-c)*R,b=u+(g-u)*R,L=h+(p-h)*R-_*4*R*(1-R);s.push(f,w,E,T,L,b),f=T,w=L,E=b}},a=9.4-.75;for(const[c,h]of[[-1.3,0],[-.7,-.06],[-.1,.02],[-.95,-.72]])r(2.85+c,a+h,-C*.16,2.85+c,a+h,-C*.63,.55),r(2.85+c,a+h,-C*.63,2.85+c,a+h,-C*.93,.36),r(2.85+c,a+h,-C*.16,2.85+c,a+h+.3,1.5,.3),r(2.85+c,a+h,-C*.93,2.85+c,a+h+.3,-C-1.5,.3);r(2.85-.7,a,-C*.16,-2.85+.7,a-.9,-C*.42,.7),r(2.85-.7,a-.75,-C*.63,-2.85+.7,a-1.5,-C*.42,.6),r(-2.85+.7,a-.9,-C*.42,2.85-.7,a-.4,-C*.93,.8),r(2.85-.7,a-1.5,-C*.63,3,4.6,-C*.52,.15),r(-2.85+.7,a-1.5,-C*.42,-3,4.2,-C*.34,.15);const o=new mn;o.setAttribute("position",new Pe(s,3));const l=new Qh(o,new Wc({color:1316381,transparent:!0,opacity:.92}));n.add(l)}function Vg(n){const t=c=>{const h=Et(c);return h.userData.keepColor=!0,h},e=t(3625007),i=t(4283448),s=t(2900775),r=Et(6047290),a=[[2.62,-3.6,1],[-2.66,-9.4,.86],[2.58,-16.2,1.12],[-2.62,-30.4,.94],[2.64,-34.2,.8]];for(const[c,h,u]of a)W(r,.62*u,.34*u,.62*u,c,.17*u,h,n),W(e,.54*u,.46*u,.5*u,c,(.34+.23)*u,h,n),W(i,.38*u,.34*u,.42*u,c-.12*u,(.34+.6)*u,h+.1*u,n),W(s,.3*u,.26*u,.32*u,c+.14*u,(.34+.82)*u,h-.08*u,n);const o=(()=>{let c=20817;return()=>(c=c*1664525+1013904223>>>0)/4294967296})(),l=(c,h,u,d,p,g)=>{for(let _=0;_<g;_++){const m=o()*Math.PI*2,f=o()*o(),w=Math.cos(m)*f*d,E=Math.sin(m)*f*p,M=.26+(1-f)*.42,R=[e,i,s][_%3];W(R,.09+o()*.11,M*(.8+o()*.5),M*(.8+o()*.5),c,h+E,u+w,n)}};l(-3.05,jt+.5,-12.8,1.9,.95,16),l(3.05,jt+.35,-31.8,1.5,.8,13),l(3.02,jt+.45,-6.2,1.3,.75,11)}function Wg(n,t){n.background=new $t(Li),n.fog=new Do(Li,.044);const e=new af(3752286,2.2);n.add(e);const i=new rf(8425664,.75);i.position.set(4,10,2),n.add(i);const s=new Qt;n.add(s);const r=new dt(new cn(80,24,16),new rs({map:xg(),side:nn,fog:!1,depthWrite:!1}));r.position.set(0,0,-C/2),r.renderOrder=-1,r.visible=!1,n.add(r);const a=2.5,o=3,l=_g(),c=vg(),h=G*2+14,u=C+14;W(fc(1580072,l,h/a,u/a),h,.2,u,0,-.1,-C/2,s);const d=21.28,p=C+(Te-Tn),g=(Vt,Tt)=>fc(Vt,c,Tt/o,jt/o);for(const[Vt,Tt]of[[G+.5,2304056],[-G-.5,2106938]])W(g(Tt,d),1,jt,d,Vt,jt/2,-d/2,s),W(g(Tt,p),1,jt,p,Vt,jt/2,Te-Tn-p/2,s);Gg(s,{pole:Et(2830400),arm:Et(2304056)}),Vg(s);const _=G-Ts+1;for(const Vt of[-C-.5,.5])for(const Tt of[-1,1])Ct(_,jt,1,2304056,Tt*(Ts+_/2),jt/2,Vt,s);const m=du(),f=new qt({color:2830912,emissive:ko}),w=pc(-C,-1,4,m,f),E=pc(0,1,.6,m,f),M=w.group,R=E.group;s.add(R),s.add(M);const T=[w.light,E.light],b=-C*.45,L=Ct(.15,5,.15,3817815,G-.4,2.5,b,s);Ct(.62,.1,.1,3817815,G-.7,4.95,b,s);const x=Ct(.5,.14,.26,2765122,G-.9,4.86,b,s).material;x.emissive.setHex(3811858);const P=new In(16762503,22,18,1.8);P.position.set(G-.9,4.8,b),s.add(P);const z=new In(16757310,0,26,2);z.position.set(0,3,-C-6),s.add(z);const O=new Qt,Y=new dt(new Jt(.46,1.22,.28),t.darkFigure);Y.position.y=.9;const Z=new dt(new cn(.15,10,8),t.darkFigure);Z.position.y=1.66,O.add(Y,Z),O.visible=!1,s.add(O);const X=new dt(new Oo(.42,.5,24),new rs({color:9146536,transparent:!0,opacity:.32}));X.rotation.x=-Math.PI/2,X.position.set(.9,.03,-5.5),X.visible=!1,s.add(X);const q=[go(`감자튀김 전문점!!
ff-1204`),go(`감자튀김 전문점이요
ff-1204`)],H=new qt({color:16777215,map:q[0],emissiveMap:q[0],emissive:0}),st=Et(1314053),at=new dt(new Jt(3.4,.9,.3),[st,st,st,st,H,st]);at.position.set(0,4.6,-C+.2),s.add(at);const Mt=dc(),Gt=zg();s.add(Mt,Gt);const te=dc(!0);te.rotation.y=Math.PI,te.position.z=-C,s.add(te);const K=new Qt,rt=new dt(new Jt(4.1,.95,1.75),new qt({color:1448484,roughness:.7}));rt.position.y=.72;const St=new dt(new Jt(2.1,.62,1.6),new qt({color:1119261,roughness:.7}));St.position.set(-.25,1.45,0),K.add(rt,St);const ft=new qt({color:16774872,emissive:16773320});for(const Vt of[-.6,.6]){const Tt=new dt(new Jt(.14,.22,.3),ft);Tt.position.set(2.02,.78,Vt),K.add(Tt)}const yt=new In(16771512,0,16,2);return yt.position.set(2.6,.9,0),K.add(yt),K.position.set(0,0,Te),K.visible=!1,s.add(K),{refs:{group:s,scene:n,moon:i,skyDome:r,tunnel:M,backTunnel:R,tunnelLights:T,tunnelLampMat:f,car:K,carLight:yt,ambient:e,stretchMark:X,lampLight:P,lampHeadMat:x,shopGlow:z,shopSign:at,shopSignMat:H,shopTex:q,shopFront:Mt,homeFront:Gt,shopBack:te,figure:O},hit:{lamp_flicker:[L],shop_typo:[at],figure:[O]}}}function Xg(n,t){const e=du(),i=Tn,s=bg,r=Tg,a=c=>n*(Eg+c),o=a(r/2+1);for(const c of[-1,1])W(e.wall,r+2,s,.9,o,s/2,Te+c*(i+.45),t),W(e.base,r+2,.5,1,o,.25,Te+c*(i+.43),t);W(e.deck,r+2,.9,i*2+2,o,s+.45,Te,t);for(const c of[1.4,4])W(e.girder,.4,.3,i*2+1.2,a(c),s-.13,Te,t);for(const c of[-1,1])W(e.portal,.85,s+.62,.78,a(.1),(s+.62)/2,Te+c*(i+.39),t);W(e.portal,.9,.62,i*2+1.9,a(.1),s+.31,Te,t),W(e.trim,1.12,.16,i*2+2.4,a(.02),s+.7,Te,t);const l=new qt({color:2830912,emissive:ko});W(e.girder,.24,.16,.5,a(1.5),s-.44,Te,t),W(l,.17,.05,.38,a(1.5),s-.55,Te,t),W(e.portal,1,jt-(s+.9),i*2+2,a(.5),(s+.9+jt)/2,Te,t),[1.2,2.4,3.8,5.4,7].forEach((c,h)=>{const u=new dt(new Le(i*2+1,s+.8),e.fog[h]);u.position.set(a(c),s/2,Te),u.rotation.y=Math.PI/2,t.add(u)}),W(e.portal,1,jt,i*2+2,a(r+2),jt/2,Te,t)}function qg(n){Ct(1,jt,Tn*2,2304056,G+.5,jt/2,Te,n),Ct(1,jt,Tn*2,2106938,-G-.5,jt/2,Te,n)}function Yg(n){const t=new Qt,e=new Qt,i=[[2.05,-C*.455,.34],[1.5,-C*.45,.28],[.95,-C*.443,.3],[.4,-C*.432,.24],[-.15,-C*.425,.27],[-.75,-C*.415,.2],[-1.35,-C*.408,.23],[-1.9,-C*.4,.15]];for(const[q,H,st]of i){const at=new dt(new zs(st,14),n.blood);at.rotation.x=-Math.PI/2,at.position.set(q,.015,H),e.add(at)}const s=new dt(new Le(.5,1.15),n.bloodWall);s.position.set(-G+.06,.6,-C*.397),s.rotation.y=Math.PI/2,e.add(s),e.visible=!1,t.add(e);const r=new Qt,a=new qt({color:13222576,roughness:.85}),o=new dt(new cn(.17,12,10),a);o.position.y=.14,o.scale.set(1,.92,1.08);const l=new dt(new Jt(.2,.09,.16),a);l.position.set(0,-.02,.04);const c=new qt({color:658450,roughness:1});for(const q of[-.062,.062]){const H=new dt(new cn(.042,8,6),c);H.position.set(q,.15,.145),r.add(H)}r.add(o,l),r.position.set(-G+.8,1.06,-C*.19),r.rotation.y=Math.PI/6,r.visible=!1,t.add(r);const h=cg(),u=new dt(new Le(1,1.28),new qt({map:h,emissiveMap:h,emissive:4867644}));u.position.set(G-.03,3.4,-C*.68),u.rotation.y=-Math.PI/2,u.visible=!1,t.add(u),Ct(1.6,.5,1,2765122,-G+1,.25,-C*.2,t),Ct(.7,.35,.6,2436157,-G+.8,.85,-C*.19,t);const d=new Qt,p=Ct(.06,1.3,.06,5593968,0,.65,0,d);p.rotation.z=.5;const g=new dt(new Fo(.55,.5,8),new qt({color:7017760,roughness:.8}));g.position.set(-.35,1.35,0),g.rotation.z=.5,d.add(g),d.position.set(-G+1.8,0,-C*.24),d.visible=!1,t.add(d);const _=Ct(.45,.22,.16,1843760,-G+.12,1.7,-C*.3,t),m=_.material,f=new In(15260080,0,6,1.8);f.position.set(-G+.5,1.7,-C*.3),t.add(f);const w=new dt(new Le(1.1,1.4),new qt({color:1119263,emissive:0}));w.position.set(G-.02,3.4,-C*.68),w.rotation.y=-Math.PI/2,t.add(w);const E=w.material,M=[uc("010-4172-8956"),uc("010-417-8956")],R=new qt({map:M[0],roughness:.9}),T=new dt(new Le(.55,.75),R);T.position.set(G-.01,1.55,-C*.4),T.rotation.y=-Math.PI/2,t.add(T),Ct(.24,6.8,.24,2896452,G-.35,3.4,-C*.15,t),Ct(.24,6.8,.24,2896452,-G+.35,3.4,-C*.72,t),Ct(.035,.035,C*.85,1119261,G-.35,6.3,-C*.5,t);const b=G-.35-(-G+.35),L=-C*.15- -C*.72,y=Ct(.035,.035,Math.hypot(b,L),1119261,0,6,(-C*.15+-C*.72)/2,t);y.rotation.y=Math.atan2(b,L),Ct(.85,.6,.38,2764864,G-.35,2.5,-C*.58,t),Ct(.85,.6,.38,2501692,-G+.35,2.2,-C*.33,t),Ct(.12,2.4,1.5,1119519,-G+.05,1.2,-C*.22,t),Ct(.2,.16,1.9,2896452,-G+.1,2.5,-C*.22,t);const x={pipe:Et(3752282),meter:Et(2896452),dark:Et(1119519),prop:Et(2501694),paper:Et(4868690)};for(const[q,H]of[[-1,-C*.52],[1,-C*.24],[-1,-C*.82]])W(x.pipe,.14,5.2,.14,q*(G-.16),2.6,H,t);W(x.pipe,.1,.1,C*.36,-G+.16,2.9,-C*.67,t),W(x.pipe,.1,.1,C*.3,G-.16,2.75,-C*.38,t),W(x.dark,.12,2.4,1.5,G-.05,1.2,-C*.86,t),W(x.meter,.2,.16,1.9,G-.1,2.5,-C*.86,t),W(x.meter,.16,.6,.9,G-.12,1.7,-C*.78,t);for(let q=0;q<4;q++)W(x.prop,.14,.26,.22,G-.14,1.45,-C*.75+q*.28,t);W(x.meter,.16,.55,.8,-G+.12,1.75,-C*.29,t),W(x.prop,.42,.55,1.5,G-.42,.42,-C*.66,t),W(x.prop,.3,.35,.3,G-.42,.9,-C*.62,t),W(x.prop,.5,.42,.5,-G+.35,.21,-C*.62,t),W(x.prop,.45,.38,.45,-G+.38,.6,-C*.63,t);for(const[q,H,st]of[[-1,-C*.72,1.5],[1,-C*.48,1.35],[-1,-C*.46,1.9]])W(x.paper,.02,.34,.24,q*(G-.02),st,H,t);const P=new Qt;for(const q of[-.11,.11]){const H=W(Et(14210248),.24,.11,.34,0,.055,0,P);H.position.x=q}P.position.set(G-.55,0,-C*.86+.15),P.visible=!1,t.add(P);const z=new Qt,O=new dt(new Jt(.4,.72,.26),n.darkFigure);O.position.y=1.24;const Y=new dt(new cn(.14,10,8),n.darkFigure);Y.position.set(0,1.74,.02);const Z=new dt(new Jt(.34,.5,.5),n.darkFigure);Z.position.set(0,.78,.24);const X=new qt({color:12169892,roughness:.9,emissive:1381391});for(const q of[-.17,.17]){const H=new dt(new Jt(.1,.11,.15),X);H.position.set(q,1.16,.3),z.add(H)}return z.add(O,Y,Z),z.position.set(G-.42,0,-C*.655),z.visible=!1,t.add(z),{group:t,refs:{umbrella:d,sensorMat:m,sensorLight:f,windowMat:E,flyerMat:R,flyerTex:M,bloodTrail:e,skull:r,facePlane:u,shoes:P,bikeFigure:z},hit:{umbrella:[d],sensor_on:[_],window_red:[w],flyer_digits:[T],blood_trail:[e],skull:[r],face_window:[u],shoes:[P],bike_figure:[z]}}}function $g(){const n=new Qt,t=Ct(.08,2,2.6,1316900,G-.06,1.25,-C*.39,n),e=t.material,i=Ct(.12,2.2,2.7,2830916,G-.18,1.25,-C*.39,n),s=new In(13623528,0,8,1.8);s.position.set(G-.9,1.3,-C*.39),n.add(s);const r=new dt(new Le(2.4,1.7),new qt({map:ug(),transparent:!0,roughness:1}));r.position.set(G-.25,1.25,-C*.39),r.rotation.y=-Math.PI/2,r.visible=!1,n.add(r);const a=Ct(1.7,.65,.14,1975348,G-.1,3.2,-C*.5,n),o=a.material;Ct(1.5,.6,.14,1843504,G-.1,3.4,-C*.29,n),Ct(1.9,.7,.14,2106938,G-.1,3.1,-C*.62,n);const l=[hc(!1),hc(!0)],c=new qt({map:l[0],roughness:.85}),h=new dt(new Le(1.5,1.1),c);h.position.set(-G+.01,1.5,-C*.5),h.rotation.y=Math.PI/2,n.add(h);const u={shutter:Et(2765123),slat:Et(2041140),awning:Et(2302260),curb:Et(2238262),sign:Et(2106938),steel:Et(3752282),prop:Et(2501694),dark:Et(1514538)};for(const[L,y]of[[-1,-C*.3],[-1,-C*.68],[-1,-C*.86],[1,-C*.19],[1,-C*.76]]){const x=L*(G-.1);W(u.shutter,.12,2.1,2.3,x,1.15,y,n);for(let z=0;z<4;z++)W(u.slat,.13,.05,2.3,x,.45+z*.5,y,n);const P=W(u.awning,.85,.07,2.5,L*(G-.5),2.65,y,n);P.rotation.z=L*.3,W(u.sign,.14,.5,2,L*(G-.12),3.05,y,n)}const d=-C*.68,p=new qt({color:1119260,roughness:1}),g=new dt(new Le(1.7,2),p);g.rotation.x=-Math.PI/2,g.position.set(-1.45,.02,d),n.add(g);const _=new qt({color:1119260}),m=new dt(new Jt(.06,.1,2.1),_);m.position.set(-2.7,.18,d),n.add(m);const f=new In(16769192,0,6.5,2);f.position.set(-2.1,.5,d),n.add(f),W(u.curb,.55,.14,C*.92,-G+.28,.07,-C/2,n),W(u.curb,.55,.14,C*.92,G-.28,.07,-C/2,n),W(u.dark,.9,.3,1.8,-G+.55,.02,-C*.44,n);for(const L of[-C*.41,-C*.47])W(u.steel,.06,.9,.06,-G+1,.45,L,n);W(u.steel,.06,.06,1.3,-G+1,.88,-C*.44,n);for(const[L,y]of[[1,-C*.42],[1,-C*.58],[-1,-C*.55]])W(u.prop,.5,.42,.8,L*(G-.28),1.9,y,n);W(u.steel,.16,4.6,.16,G-.2,2.3,-C*.35,n),W(u.steel,.12,.12,C*.4,G-.2,2.55,-C*.55,n);const w=W(u.prop,.16,1,.7,-G+.32,.5,-C*.24,n);w.rotation.z=-.12;for(const[L,y]of[[-C*.63,.34],[-C*.66,.28]])W(u.prop,.42,y,.6,-G+.34,y/2,L,n);const E=new Qt,M=new rs({color:263691,transparent:!0,opacity:.92}),R=new dt(new Le(2,.66),M);R.rotation.x=-Math.PI/2,R.position.set(.75,.02,-C*.45);const T=new dt(new zs(.3,16),M);T.rotation.x=-Math.PI/2,T.position.set(-.5,.02,-C*.45);const b=new dt(new Le(.95,.24),M);return b.rotation.x=-Math.PI/2,b.rotation.z=-.55,b.position.set(.7,.02,-C*.417),E.add(R,T,b),E.visible=!1,n.add(E),{group:n,refs:{laundryShutter:i,laundryMat:e,laundryLight:s,storeSignMat:o,realtyMat:c,realtyTex:l,handprints:r,shutterGlowMat:p,shutterGlowSlitMat:_,shutterGlowLight:f,loneShadow:E},hit:{laundry_open:[i,t],sign_lit:[a],realty_urgent:[h],handprints:[r],shutter_glow:[g,m],lone_shadow:[E]}}}function Kg(n){const t=new Qt;for(const T of[-C*.32,-C*.375,-C*.43,-C*.485])Ct(.07,.85,1.7,3291730,-G+.85,.45,T,t);Ct(.1,2.3,.1,3817815,-G+.22,1.15,-C*.365,t),Ct(.1,2.3,.1,3817815,-G+.22,1.15,-C*.42,t),Ct(.08,.08,2.2,3817815,-G+.22,2.3,-C*.393,t);const e=new Qt;e.position.set(-G+.22,2.26,-C*.393),Ct(.03,1.5,.03,5593968,0,-.75,-.22,e),Ct(.03,1.5,.03,5593968,0,-.75,.22,e),Ct(.14,.06,.55,5593968,0,-1.5,0,e),t.add(e);const i=new dt(new cn(.28,12,10),new qt({color:7173256,roughness:.85}));i.position.copy(uu),t.add(i);const s=new Qt,r=new dt(new Jt(.4,.62,.26),n.darkFigure);r.position.y=1.12;const a=new dt(new cn(.13,10,8),n.darkFigure);a.position.set(.05,1.56,0);const o=new dt(new Jt(.34,.52,.16),n.darkFigure);o.position.set(.2,.56,0),o.rotation.z=.25,s.add(r,a,o),s.position.set(-G+.22,0,-C*.393),s.visible=!1,t.add(s);const l=new Qt,c=new qt({color:724502,emissive:9410220,emissiveIntensity:.9});for(const T of[-.09,.09]){const b=new dt(new cn(.045,8,6),c);b.position.x=T,l.add(b)}l.position.set(-G+.38,1.42,-C*.55),l.visible=!1,t.add(l);const h=new qt({color:1251880,roughness:1});for(const[T,b]of[[-C*.25,1.6],[-C*.42,2],[-C*.58,1.5],[-C*.78,1.8]]){const L=new dt(new cn(1,7,5),h);L.scale.set(b,b*.75,b),L.position.set(-G-1.4,jt+.6,T),t.add(L)}const u={fence:Et(3291730),rail:Et(3818592),gear:Et(2765648),wall2:Et(2041140),dark:Et(1514538),prop:Et(2501694)},d=W(u.gear,.13,4.6,.13,-G-1.7,2.3,-C*.5,t);d.name="놀이터 보안등";const p=new qt({color:2831430,roughness:.6,emissive:3491946}),g=new dt(new Jt(.44,.18,.44),p);g.position.set(-G-1.7,4.55,-C*.5),t.add(g);const _=new In(10467032,6.5,12,2);_.position.set(-G-1.4,4.2,-C*.5),t.add(_),W(u.gear,.12,2.6,.12,-G-2.2,jt+.6,-C*.34,t),W(u.gear,1.9,.12,.9,-G-2.9,jt+1.7,-C*.34,t);const m=W(u.gear,2.6,.1,.7,-G-3.4,jt+.5,-C*.34,t);m.rotation.z=.5;const f=new Qt,w=new dt(new Jt(.42,1.2,.26),n.darkFigure);w.position.y=.6;const E=new dt(new cn(.15,10,8),n.darkFigure);E.position.y=1.35,f.add(w,E),f.position.set(-G+.15,jt,-C*.36),f.visible=!1,t.add(f);for(const T of[-C*.62,-C*.7])W(u.gear,.09,1.8,.09,-G-2,jt+.3,T,t),W(u.gear,.09,1.8,.09,-G-3.4,jt+.3,T,t);for(const T of[jt-.5,jt+.4,jt+1.2])W(u.gear,1.5,.09,.09,-G-2.7,T,-C*.66,t);for(const T of[-C*.15,-C*.21,-C*.265,-C*.54,-C*.595,-C*.65,-C*.72,-C*.79,-C*.86])W(u.fence,.07,.85,1.7,-G+.85,.45,T,t);W(u.rail,.05,.06,C*.78,-G+.85,.88,-C*.5,t),W(u.prop,.5,.1,1.6,-G+.5,.45,-C*.24,t);for(const T of[-C*.215,-C*.265])W(u.prop,.45,.45,.08,-G+.5,.22,T,t);W(u.prop,.42,.7,.42,-G+.45,.35,-C*.75,t),W(u.dark,.1,2.2,1.3,G-.05,1.1,-C*.7,t),W(u.wall2,.16,.2,1.6,G-.12,2.3,-C*.7,t),W(u.wall2,.14,.5,.4,G-.1,1.5,-C*.58,t);for(const T of[-C*.3,-C*.38,-C*.46])W(u.prop,.34,.3,.34,G-.25,2.3,T,t),W(u.gear,.3,.34,.3,G-.25,2.6,T,t);W(u.wall2,.5,.16,C*.5,G-.3,2.12,-C*.4,t),W(u.prop,.3,.75,.3,G-.25,.37,-C*.86,t),W(u.wall2,.12,1.1,.5,G-.08,1.6,-C*.86,t);const M=new Qt,R=new qt({color:12169892,roughness:.9,emissive:1381391});for(const[T,b]of[[-G+.85,-C*.3],[-G+.85,-C*.345],[-G+.85,-C*.62],[-G+.85,-C*.665]]){const L=new dt(new Jt(.1,.12,.17),R);L.position.set(T,.9,b),M.add(L);for(let y=0;y<4;y++){const x=new dt(new Jt(.11,.035,.032),R);x.position.set(T+.05,.855,b-.06+y*.04),x.rotation.z=-.5,M.add(x)}}return M.visible=!1,t.add(M),{group:t,refs:{swingPivot:e,ball:i,swingFigure:s,eyes:l,slideFigure:f,fenceHands:M},hit:{swing:[e],ball_out:[i],swing_figure:[s],eyes:[l],slide_figure:[f],fence_hands:[M]}}}function Zg(n){const t=new Qt;Ct(.08,2.2,2.2,2436157,G-.06,1.35,-C*.32,t),Ct(.9,.08,2.4,2765122,G-.5,2.5,-C*.32,t),Ct(.08,2.5,.08,2765122,G-.34,1.25,-C*.29,t),Ct(.08,2.5,.08,2765122,G-.34,1.25,-C*.35,t),Ct(.35,.08,1.8,2765122,G-.32,.55,-C*.32,t);const i=Ct(.62,.06,1.7,2765122,G-.5,2.4,-C*.32,t).material;i.emissive.setHex(9414340);const s=new In(12374250,9,8.5,2);s.position.set(G-.7,2.2,-C*.32),t.add(s);const r=new Qt,a=new dt(new Jt(.42,.6,.26),n.darkFigure);a.position.y=.95;const o=new dt(new cn(.13,10,8),n.darkFigure);o.position.set(-.06,1.38,0);const l=new dt(new Jt(.4,.5,.18),n.darkFigure);l.position.set(-.2,.35,0),r.add(a,o,l),r.position.set(G-.42,0,-C*.32),r.visible=!1,t.add(r);const c=new Qt,h=new dt(new Jt(.44,1.2,.26),n.darkFigure);h.position.y=.9;const u=new dt(new cn(.15,10,8),n.darkFigure);u.position.y=1.64,c.add(h,u),c.position.set(-1.1,0,Te-Tn-.6),c.visible=!1,t.add(c);const d=[],p=[],g=[],_=-C*.55,m=Te-Tn-.9;for(const[M,R,T]of[[G-.4,m,1],[-2.6,_,-1]]){Ct(.12,3.4,.12,3817815,M,1.7,R,t),g.push(Ct(.3,.66,.24,1843760,M,3.55,R,t));const b=Ct(.16,.16,.06,3477780,M,3.7,R+.14*T,t),L=Ct(.16,.16,.06,1124378,M,3.42,R+.14*T,t);d.push(b.material),p.push(L.material)}Ct(60,.2,Tn*2,1843244,0,-.1,Te,t);for(const M of[-1,1])Ct(15,jt,1,2304056,M*11,jt/2,Te-Tn-.5,t),Ct(15,jt,1,2106938,M*11,jt/2,Te+Tn+.5,t),Xg(M,t);for(let M=0;M<4;M++)Ct(G*2-1.2,.03,.6,8949922,0,.02,-C*.62-M*1.15,t);Ct(G*2-1.2,.03,.35,8949922,0,.02,-C*.585,t),Ct(.16,.7,.16,3752282,G-.7,.35,-C*.24,t),Ct(.16,.7,.16,3752282,G-.7,.35,-C*.4,t),Ct(.5,.14,4,2304056,G-.25,.07,-C*.32,t);const f=new qt({map:hg(),roughness:.95}),w=new dt(new Le(6.4,1.1),f);w.position.set(0,5.25,-C+.25),t.add(w);const E=new Qt;for(const M of[-.19,.19]){const R=Ct(.24,.11,.34,14210248,0,.055,M,E);R.position.z=M}return E.position.set(G-.32,.59,-C*.32+.62),E.visible=!1,t.add(E),{group:t,refs:{trafficRed:d,trafficGreen:p,busFigure:r,banner:w,boothLight:s,boothTubeMat:i,acrossFigure:c,benchShoes:E},hit:{traffic_red:g,bus_figure:[r],across_figure:[c],bench_shoes:[E]}}}function jg(n){const t=new Qt;Ct(.14,.6,1.5,2106938,-G+.1,3.1,-C*.25,t),Ct(1.6,.7,.14,1975348,G-.1,3.35,-C*.33,t),Ct(.14,.55,1.3,1843504,-G+.1,2.9,-C*.47,t),Ct(1.8,.6,.14,2106938,G-.1,3.15,-C*.6,t);const e=new Qt,i=Et(2962246),s=new Jt(.8,1.15,.06);for(const M of[1,-1]){const R=new dt(s,i);R.position.set(0,.56,M*.16),R.rotation.x=-M*.26,e.add(R)}e.position.set(-G+.75,0,-C*.55),e.rotation.y=lu,t.add(e);const r=new Qt,a=new dt(new zs(.42,16),n.blood);a.rotation.x=-Math.PI/2,a.position.set(1.75,.015,-C*.452);const o=new dt(new Le(.4,5.4),n.blood);o.rotation.x=-Math.PI/2,o.rotation.z=1.16,o.position.set(-.35,.015,-C*.437);const l=new dt(new Le(.42,.9),n.bloodWall);l.position.set(-G+.06,.47,-C*.428),l.rotation.y=Math.PI/2,r.add(a,o,l),r.visible=!1,t.add(r);const c={front:Et(2304056),shutter:Et(2765123),slat:Et(2041140),awning:Et(2827060),signB:Et(2106938),crate:Et(2501694),steel:Et(3817815),wire:Et(1119261)};W(c.signB,G*2+.6,.55,.05,0,4.4,-C*.12,t);const h=[[1,-C*.2,3],[-1,-C*.33,3.4],[1,-C*.46,3.2],[-1,-C*.58,3],[1,-C*.71,3.4],[-1,-C*.83,3.2]],u=2,d=new Qt;t.add(d),h.forEach(([M,R,T],b)=>{const L=M*(G-.1),y=b===u?d:t;W(c.front,.2,4.2,T,L,2.1,R,t),W(c.shutter,.16,2.3,T-.5,M*(G-.26),1.15,R,y);for(let P=0;P<4;P++)W(c.slat,.17,.05,T-.5,M*(G-.26),.5+P*.5,R,y);const x=W(c.awning,.95,.08,T+.2,M*(G-.55),2.72,R,t);x.rotation.z=M*-.28,W(c.signB,.14,.62,T-.8,M*(G-.12),3.42,R,t),b%2===1&&W(c.signB,.5,1.5,.16,M*(G-.45),3.3,R+1.1,t),W(c.steel,.4,.08,T-1.2,M*(G-.2),.78,R,t);for(const P of[-1,1])W(c.steel,.06,.78,.06,M*(G-.2),.39,R+P*(T/2-.8),t)});const p=[[G-.2,.18,-C*.42,.44],[G-.22,.53,-C*.43,.4],[-G+.2,.2,-C*.7,.42],[-G+.22,.18,-C*.26,.44],[G-.24,.17,-C*.63,.4],[-G+.2,.54,-C*.71,.36]];for(const[M,R,T,b]of p)W(c.crate,b,b*.78,b,M,R,T,t);for(const M of[-C*.28,-C*.52,-C*.76]){W(c.wire,G*2+.4,.035,.035,0,4.05,M,t);for(let R=-2;R<=2;R++)W(c.crate,.09,.13,.09,R*1.15,3.95,M,t)}const[,g,_]=h[u],m=_-.5,f=new Qt;W(c.shutter,.16,.95,m,G-.26,1.83,g,f);for(let M=0;M<2;M++)W(c.slat,.17,.05,m,G-.26,1.55+M*.4,g,f);W(Et(263690),.06,1.35,m,G-.36,.68,g,f);const w=new qt({color:10134192,roughness:.45,emissive:1316637}),E=new dt(new Jt(.2,.09,m),w);return E.position.set(G-.28,1.33,g),f.add(E),f.visible=!1,t.add(f),{group:t,refs:{sign:e,dragMark:r,openShutter:f,closedShutter:d},hit:{sign_turn:[e],drag_mark:[r],open_shutter:[f]}}}function Ye(n){return{reset:t=>{n(t).visible=!1},apply:t=>{n(t).visible=!0}}}const mc={shoes:Ye(n=>n.shoes),bench_shoes:Ye(n=>n.benchShoes),bike_figure:Ye(n=>n.bikeFigure),lone_shadow:Ye(n=>n.loneShadow),fence_hands:Ye(n=>n.fenceHands),slide_figure:Ye(n=>n.slideFigure),across_figure:Ye(n=>n.acrossFigure),open_shutter:{reset:n=>{n.openShutter.visible=!1,n.closedShutter.visible=!0},apply:n=>{n.openShutter.visible=!0,n.closedShutter.visible=!1}},shutter_glow:{reset:n=>{n.shutterGlowMat.color.setHex(1119260),n.shutterGlowSlitMat.emissive.setHex(0),n.shutterGlowLight.intensity=0},apply:n=>{n.shutterGlowMat.color.setHex(9077362),n.shutterGlowSlitMat.emissive.setHex(16764810),n.shutterGlowLight.intensity=5.5}},umbrella:Ye(n=>n.umbrella),sensor_on:{reset:n=>{n.sensorMat.emissive.setHex(0),n.sensorLight.intensity=0},apply:n=>{n.sensorMat.emissive.setHex(13615780),n.sensorLight.intensity=4}},window_red:{reset:n=>{n.windowMat.emissive.setHex(0)},apply:n=>{n.windowMat.emissive.setHex(7999504)}},laundry_open:{reset:n=>{n.laundryShutter.position.y=1.25,n.laundryShutter.scale.y=1,n.laundryMat.emissive.setHex(0),n.laundryLight.intensity=0},apply:n=>{n.laundryShutter.position.y=2,n.laundryShutter.scale.y=.42,n.laundryMat.emissive.setHex(7833487),n.laundryLight.intensity=6}},sign_lit:{reset:n=>{n.storeSignMat.emissive.setHex(0)},apply:n=>{n.storeSignMat.emissive.setHex(7214100)}},swing:{reset:n=>{n.swingPivot.rotation.x=0}},lamp_flicker:{reset:n=>{n.lampLight.intensity=n.group.userData.morning?0:n.group.userData.lampBase??Is[0]}},traffic_red:{reset:()=>{}},ball_out:{reset:n=>{n.ball.position.copy(uu)},apply:n=>{n.ball.position.copy(Bg)}},sign_turn:{reset:n=>{n.sign.rotation.y=lu},apply:n=>{n.sign.rotation.y=Og}},flyer_digits:{reset:n=>{n.flyerMat.map=n.flyerTex[0]},apply:n=>{n.flyerMat.map=n.flyerTex[1]}},realty_urgent:{reset:n=>{n.realtyMat.map=n.realtyTex[0]},apply:n=>{n.realtyMat.map=n.realtyTex[1]}},shop_typo:{reset:n=>{n.shopSignMat.map=n.shopTex[0],n.shopSignMat.emissiveMap=n.shopTex[0]},apply:n=>{n.shopSignMat.map=n.shopTex[1],n.shopSignMat.emissiveMap=n.shopTex[1]}},figure:{reset:n=>{n.figure.visible=!1},apply:n=>{const[t,e]=cu[n.group.userData.figureAnchor??0];n.figure.position.set(t,0,e),n.figure.rotation.y=Math.random()<.5?Math.PI:Math.PI*.85,n.figure.visible=!0}},blood_trail:Ye(n=>n.bloodTrail),skull:Ye(n=>n.skull),face_window:Ye(n=>n.facePlane),handprints:Ye(n=>n.handprints),swing_figure:Ye(n=>n.swingFigure),eyes:Ye(n=>n.eyes),bus_figure:Ye(n=>n.busFigure),drag_mark:Ye(n=>n.dragMark)};function Jg(n,t){var e,i;for(const s of Object.values(mc))s.reset(n);n.group.userData.effects=t;for(const s of t)(i=(e=mc[s]).apply)==null||i.call(e,n)}const Qg=new $t(Li),vi={hue:.075,hueMix:.92,satBase:.07,satMix:.3,satMax:.24,lift:.11,gain:.95},ys={h:0,s:0,l:0},gc=new $t;function t_(n){gc.setHex(n).getHSL(ys);const t=ys.h+(vi.hue-ys.h)*vi.hueMix,e=Math.min(vi.satMax,vi.satBase+ys.s*vi.satMix),i=Math.min(.92,ys.l*vi.gain+vi.lift);return gc.setHSL(t,e,i).getHex()}function e_(n,t){n.traverse(e=>{const i=e;if(!i.isMesh)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const r of s){const a=r;if(!(a!=null&&a.color)||!a.isMeshStandardMaterial||a.userData.keepColor||a.map&&!a.userData.surface||a.emissive&&a.emissive.getHex()!==0)continue;a.userData.nightColor===void 0&&(a.userData.nightColor=a.color.getHex());const l=a.userData.nightColor;a.color.setHex(t?t_(l):l)}})}function n_(n,t){n.themes.forEach((e,i)=>e.visible=i===t-1)}function pu(n,t){if(n.group.userData.morning)return;const e=Is[Math.min(t,Is.length-1)];n.group.userData.lampBase=e,n.lampLight.intensity=e,n.ambient.intensity=Math.max(1.1,2.2-t*.18),n.group.userData.ambientBase=n.ambient.intensity,mu(n,9-t*.7)}function mu(n,t,e=!1){n.boothLight.intensity=Math.max(0,t),n.boothLight.color.setHex(e?Ig:12374250),n.boothTubeMat.emissive.setHex(t>.1?e?Ug:9414340:0)}function Go(n,t){n.group.userData.morning=t,e_(n.scene,t),n.scene.background.setHex(t?hu:Li);const e=n.scene.fog;e.color.setHex(t?fu:Li),e.density=t?.012:.044,n.ambient.color.setHex(t?15656166:3752286),n.ambient.intensity=t?1.8:2.2,n.group.userData.ambientBase=n.ambient.intensity,n.moon.color.setHex(t?16767424:8425664),n.moon.intensity=t?4.6:.75,t?n.moon.position.set(11,6,3):n.moon.position.set(4,10,2),n.skyDome.visible=t,n.skyDome.material.color.setScalar(1),n.lampLight.color.setHex(t?Rg:16762503),n.lampLight.intensity=t?Cg:Is[0],n.lampHeadMat.emissive.setHex(t?Pg:3811858),mu(n,t?Ng:9,t)}function Sr(n,t,e){const i=n.scene.fog,s=Math.max(0,Math.min(1,t));i.density=e+s*s*1.4;const r=!!n.group.userData.morning,a=Math.pow(1-s,2.2),o=(c,h)=>{c.setHex(h),r&&s>0&&c.lerp(Qg,Math.min(1,s*2.5)),c.multiplyScalar(a)};o(i.color,r?fu:Li),o(n.scene.background,r?hu:Li),r&&n.skyDome.material.color.setScalar(a);for(const c of n.tunnelLights)c.color.setHex(r?Lg:au),c.intensity=ou*(1-s);n.tunnelLampMat.emissive.setHex(r?Dg:ko).multiplyScalar(1-s);const l=n.group.userData.ambientBase??2.2;n.ambient.intensity=l*(1-s*.92)}function i_(n,t){n.stretchMark.visible=t}function gu(n,t,e=!0){const i=!!n.group.userData.morning;n.tunnel.visible=!t,n.shopFront.visible=t&&e,n.homeFront.visible=t&&!e,n.shopGlow.intensity=t?e?26:30:i?0:4,n.shopSign.visible=t&&e,n.shopSignMat.emissive.setHex(t&&e?16777215:0)}function s_(n,t){n.backTunnel.visible=!t,n.shopBack.visible=t}function r_(n,t){n.banner.position.z=t?-C+.25:-.25,n.banner.rotation.y=t?0:Math.PI}function a_(n,t){const e=(i,s)=>{i.scale.x=s?-1:1};e(n.themes[3],t),e(n.themes[4],!t),n.banner.scale.x=t?-1:1}const o_=9049622,l_=3111498;function c_(n,t){const e=n.group.userData.effects??[];if(e.includes("lamp_flicker")){const s=n.group.userData.lampBase??Is[0],r=t%1.6,a=!(r<.12||r>.24&&r<.36);n.lampLight.intensity=a?s:Math.min(2,s)}if(e.includes("swing")&&(n.swingPivot.rotation.x=Math.sin(t*2.2)*.38),n.themes[3].visible){const s=e.includes("traffic_red"),r=yg(t)?Math.floor(t*4)%2===0:!0,a=!s&&Ds(t)&&r,o=s||!Ds(t);for(const l of n.trafficGreen)l.emissive.setHex(a?l_:0);for(const l of n.trafficRed)l.emissive.setHex(o?o_:0)}const i=n.group.userData.carStart;if(i!==void 0){const s=(t-i)/su;if(s>=1||!n.themes[3].visible)n.car.visible=!1,n.carLight.intensity=0,n.group.userData.carStart=void 0;else{const r=n.group.userData.carDir??1;n.car.position.x=r*(-_o/2+_o*s),n.car.rotation.y=r>0?0:Math.PI,n.car.visible=!0,n.carLight.intensity=n.group.userData.morning?Fg:26}}}function u_(n){n.group.userData.carStart=void 0,n.car.visible=!1,n.carLight.intensity=0}function h_(n,t,e=1){n.group.userData.carStart=t,n.group.userData.carDir=e,n.car.position.set(e*-_o/2,0,Te),n.car.visible=!0}function f_(n){return n.car.visible&&Math.abs(n.car.position.x)<G+2.2}function d_(n){const t=Mg(),e=Wg(n,t),i=Yg(t),s=$g(),r=Kg(t),a=Zg(t),o=jg(t),c=[i,s,r,a,o].map(d=>d.group);c.forEach((d,p)=>{p!==3&&qg(d),d.visible=!1,d.name=`테마${p+1}`,e.refs.group.add(d)}),e.refs.group.name="골목",e.refs.tunnel.name="앞터널",e.refs.backTunnel.name="뒤터널",e.refs.shopFront.name="FF-1204(앞)",e.refs.shopBack.name="FF-1204(뒤)",e.refs.homeFront.name="집",e.refs.figure.name="그림자사람",e.refs.car.name="차",e.refs.shopSign.name="FF-1204 간판",a.refs.banner.name="개업 현수막",a.refs.busFigure.name="정류장의 형체",o.refs.sign.name="입간판",o.refs.dragMark.name="끌린 자국",i.refs.bloodTrail.name="핏자국",i.refs.skull.name="백골",i.refs.umbrella.name="우산",s.refs.handprints.name="손자국",r.refs.swingFigure.name="그네의 형체",r.refs.eyes.name="어둠의 눈",r.refs.ball.name="공";const h=(d,p)=>{const g=d.name?p?`${p}/${d.name}`:d.name:p;d.children.forEach((_,m)=>{_.isMesh&&!_.userData.src&&(_.userData.src=`${g||"?"}#${m}`),h(_,g)})};h(e.refs.group,"");const u={...e.hit,...i.hit,...s.hit,...r.hit,...a.hit,...o.hit};return{...e.refs,...i.refs,...s.refs,...r.refs,...a.refs,...o.refs,themes:c,hit:u}}const Vo="fries.save.v1",Ar={night:1,tut:!1,misses:0,results:[],brightness:1,muted:!1};function p_(n){const t={...Ar,results:[]};if(typeof n!="object"||n===null)return t;const e=n;return typeof e.night=="number"&&Number.isInteger(e.night)&&e.night>=1&&e.night<=99&&(t.night=e.night),typeof e.tut=="boolean"&&(t.tut=e.tut),t.night>1&&(t.tut=!0),typeof e.misses=="number"&&Number.isInteger(e.misses)&&e.misses>=0&&(t.misses=e.misses),Array.isArray(e.results)&&(t.results=e.results.slice(0,99).map(i=>i==="crispy"||i==="lukewarm"||i==="soggy"?i:null)),typeof e.brightness=="number"&&e.brightness>=.6&&e.brightness<=1.9&&(t.brightness=e.brightness),typeof e.muted=="boolean"&&(t.muted=e.muted),t}function m_(){try{const n=localStorage.getItem(Vo);return n?p_(JSON.parse(n)):{...Ar,results:[]}}catch{return{...Ar,results:[]}}}const ue=m_();function fs(){try{localStorage.setItem(Vo,JSON.stringify(ue))}catch{}}function g_(){Object.assign(ue,Ar,{results:[]});try{localStorage.removeItem(Vo)}catch{}}function __(){return ue.night>1||ue.misses>0||ue.tut}const v_=`
#adm-hud, #adm-panel { position: fixed; z-index: 60; color: #cfe3ff;
  font: 12px/1.55 ui-monospace, "Cascadia Mono", Consolas, monospace; }
#adm-hud { left: 10px; top: 44px; max-width: 46ch; white-space: pre-wrap;
  background: #05070ccc; border: 1px solid #2b6cb055; border-radius: 6px;
  padding: 7px 9px; pointer-events: none; text-shadow: 0 1px 2px #000; }
#adm-hud .k { color: #7f9bbd; }
#adm-hud .v { color: #ffd48a; }
#adm-hud .o { color: #8ef0b4; }
#adm-badge { position: fixed; z-index: 61; right: 10px; top: 44px; padding: 3px 8px;
  border-radius: 4px; background: #7a1010; color: #ffe3e3; letter-spacing: .12em;
  font: 700 11px/1.4 ui-monospace, Consolas, monospace; pointer-events: none; }
#adm-panel { left: 50%; top: 50%; transform: translate(-50%, -50%); width: min(92vw, 430px);
  background: #070a12f2; border: 1px solid #2b6cb0aa; border-radius: 10px; padding: 14px 16px;
  box-shadow: 0 18px 60px #000c; }
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
`,ve=(n,t=2)=>n.toFixed(t);class x_{constructor(t){this.active=!1,this.clearView=!0,this.lit="auto",this.panel=null,this.ray=new $c,this.center=new Kt(0,0),this.speed=7,this.lastTapAt=0,this.line="",this.host=t;const e=document.createElement("style");e.textContent=v_,document.head.appendChild(e),this.hud=document.createElement("div"),this.hud.id="adm-hud",this.badge=document.createElement("div"),this.badge.id="adm-badge",this.badge.textContent="ADMIN",window.addEventListener("keydown",i=>this.onKey(i)),window.addEventListener("wheel",i=>{!this.active||this.panel||(this.speed=Math.max(.5,Math.min(60,this.speed*(i.deltaY>0?.85:1.18))))},{passive:!0})}onKey(t){var e;if(t.ctrlKey&&t.code==="Space"){t.preventDefault();const i=performance.now();i-this.lastTapAt<600?(this.lastTapAt=0,this.toggle()):this.lastTapAt=i;return}if(this.active){if(t.code==="Escape"){this.panel?this.closePanel():this.openPanel();return}t.code==="KeyC"&&!this.panel&&(t.preventDefault(),(e=navigator.clipboard)==null||e.writeText(this.line),this.flash("좌표 복사됨"))}}toggle(){this.active=!this.active,this.active?document.body.append(this.hud,this.badge):(this.closePanel(),this.hud.remove(),this.badge.remove())}flash(t){this.badge.textContent=t,setTimeout(()=>this.badge.textContent="ADMIN",900)}fly(t,e,i,s){if(this.panel)return;const r=s("AltLeft")||s("AltRight")?4:1,a=this.speed*r*t;let o=0,l=0,c=0;(s("KeyW")||s("ArrowUp"))&&(o+=1),(s("KeyS")||s("ArrowDown"))&&(o-=1),(s("KeyD")||s("ArrowRight"))&&(l+=1),(s("KeyA")||s("ArrowLeft"))&&(l-=1),s("Space")&&(c+=1),(s("ShiftLeft")||s("ShiftRight"))&&(c-=1);const h=this.host.camera,u=Math.cos(i);h.position.x+=(Math.sin(e)*-o*u+Math.cos(e)*l)*a,h.position.z+=(-Math.cos(e)*o*u-Math.sin(e)*l)*a,h.position.y+=(Math.sin(i)*o+c)*a}update(){if(!this.active)return;const t=this.host.camera,e=this.host.snapshot(),i=t.position,s=this.host.segLength,r=i.z<.5&&i.z>-s*1.4?`  (-L*${ve(-i.z/s,3)})`:"",a=new U;t.getWorldDirection(a);const o=(Math.atan2(-a.x,-a.z)*180/Math.PI+360)%360,l=Math.asin(Math.max(-1,Math.min(1,a.y)))*180/Math.PI;this.line=`x ${ve(i.x)}  y ${ve(i.y)}  z ${ve(i.z)}${r}`;const c=this.pick();this.hud.innerHTML=`<span class="k">좌표</span> <span class="v">x ${ve(i.x)}  y ${ve(i.y)}  z ${ve(i.z)}</span><span class="k">${r}</span>
<span class="k">시선</span> yaw ${ve(o,1)}°  pitch ${ve(l,1)}°   <span class="k">속도</span> ${ve(this.speed,1)}
<span class="k">상태</span> ${e.morning?"아침(퇴근길)":`밤 ${e.night}`}  구간 ${e.done+1}/${e.total}  테마 ${e.theme}  깊이 ${e.depth}  늘어남 ${e.stretches}
<span class="k">이동</span> <span class="o">Esc</span> — 밤·테마·이상현상·깊이 골라서 점프   <span class="k">C</span> 좌표 복사
<span class="k">조준</span> ${c}`}pick(){var g;this.ray.setFromCamera(this.center,this.host.camera);const e=this.ray.intersectObjects(this.host.scene.children,!0).find(_=>{if(!_.object.isMesh)return!1;for(let m=_.object;m;m=m.parent)if(!m.visible)return!1;return!0});if(!e)return'<span class="k">(없음)</span>';const i=e.object,s=[];for(let _=i;_;_=_.parent)_.name&&s.unshift(_.name);const r=i.geometry,a=r.parameters;let o=r.type??"?";a&&(r.type==="BoxGeometry"?o=`Box ${ve(a.width)}×${ve(a.height)}×${ve(a.depth)}`:r.type==="PlaneGeometry"?o=`Plane ${ve(a.width)}×${ve(a.height)}`:r.type==="SphereGeometry"?o=`Sphere r${ve(a.radius)}`:r.type==="CylinderGeometry"&&(o=`Cyl r${ve(a.radiusTop)} h${ve(a.height)}`));const l=i.material,c=Array.isArray(l)?"(면별 재질)":"#"+(((g=l.color)==null?void 0:g.getHexString())??"??????"),h=i.getWorldPosition(new U),u=this.host.segLength,d=h.z<.5&&h.z>-u*1.4?` = -L*${ve(-h.z/u,3)}`:"",p=typeof i.userData.src=="string"?i.userData.src:"";return this.line+=`
${s.join(" › ")} | ${p} | ${o} ${c} | x ${ve(h.x)} y ${ve(h.y)} z ${ve(h.z)}${d}`,`<span class="o">${s.join(" › ")||"(이름 없음)"}</span>
`+(p?`     <span class="o">${p}</span>
`:"")+`     ${o}  ${c}  <span class="k">${ve(e.distance,1)}m</span>
     <span class="v">x ${ve(h.x)}  y ${ve(h.y)}  z ${ve(h.z)}</span><span class="k">${d}</span>`}openPanel(){var o,l,c,h;(o=document.exitPointerLock)==null||o.call(document);const t=this.host.snapshot(),e=document.createElement("div");e.id="adm-panel";const i=this.host.anomalies.map(u=>`<option value="${u.effect}">${u.segment?`구간 ${u.segment}`:"전 구간"} · ${u.label}</option>`).join(""),s=M_(this.host.nights,this.host.segments);e.innerHTML=`
      <h3>관리자 — 콘솔</h3>
      <label><span>스테이지</span><select id="adm-stop">${s.map((u,d)=>{const p=u.morning===t.morning&&u.theme===t.theme&&(u.morning||u.night===t.night);return`<option value="${d}"${p?" selected":""}>${d+1}. ${u.label}</option>`}).join("")}</select></label>
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
        관리자 모드에서는 붙잡힘·치임·늘어남·구간 전환이 전부 멈춘다</div>`,document.body.appendChild(e),this.panel=e;const r=e.querySelector("#adm-depth"),a=e.querySelector("#adm-depth-v");r.addEventListener("input",()=>a.textContent=r.value),(l=e.querySelector("#adm-go"))==null||l.addEventListener("click",()=>{const u=e.querySelector("#adm-eff").value;this.clearView=e.querySelector("#adm-view").value==="clear";const d=s[Number(e.querySelector("#adm-stop").value)]??s[0];this.lit=e.querySelector("#adm-lit").value;const p=this.host.anomalies.find(_=>_.effect===u),g=p&&p.segment?p.segment:d.theme;this.host.jump({night:d.night,morning:d.morning,theme:g,daylight:this.lit==="auto"?void 0:this.lit==="day",depth:Number(r.value),effect:u===""?null:u}),g!==d.theme&&this.flash(`이상현상에 맞춰 구간 테마 ${g}로 이동`),this.closePanel()}),(c=e.querySelector("#adm-close"))==null||c.addEventListener("click",()=>this.closePanel()),(h=e.querySelector("#adm-off"))==null||h.addEventListener("click",()=>{this.closePanel(),this.toggle()})}closePanel(){var t;(t=this.panel)==null||t.remove(),this.panel=null,this.active&&this.host.relock()}}const _c={1:"원룸 골목 (집)",2:"상가 골목",3:"놀이터 옆길",4:"정류장 앞 (차도)",5:"먹자골목 입구 (가게)"};function M_(n,t){const e=[];for(let i=1;i<=2;i++){const s=t-2+i;e.push({night:1,morning:!0,theme:s,label:`퇴근길 ${i}/2 · ${_c[s]}`})}for(let i=1;i<=n;i++)for(let s=1;s<=t;s++){const r=t+1-s;e.push({night:i,morning:!1,theme:r,label:`밤 ${i} — ${s}/${t} · ${_c[r]}`})}return e}const S_=document.getElementById("app"),An=new X0({antialias:!0});An.setPixelRatio(Math.min(window.devicePixelRatio,2));An.setSize(window.innerWidth,window.innerHeight);An.toneMapping=Tc;S_.appendChild(An.domElement);const vo=1.35,ei=document.getElementById("bright"),Wo=document.getElementById("start");let _u=0;function vc(){window.clearTimeout(_u),Wo.classList.add("peek")}function Ma(){Wo.classList.remove("peek")}ei&&(ei.value=String(ue.brightness),An.toneMappingExposure=ue.brightness*vo,ei.addEventListener("pointerdown",vc),window.addEventListener("pointerup",Ma),window.addEventListener("pointercancel",Ma),ei.addEventListener("input",()=>{An.toneMappingExposure=parseFloat(ei.value)*vo,ue.brightness=parseFloat(ei.value),fs(),vc(),_u=window.setTimeout(Ma,1e3)}));const Ur=new $h,ge=new pn(72,window.innerWidth/window.innerHeight,.1,120),oe=d_(Ur),le=new j0(An.domElement),ce=new J0;og();const ke=new lg,Rr=new lf,Sa=document.getElementById("pain");function Us(n){Sa&&(Sa.style.opacity=String(Math.min(.55,n*.09)),Sa.classList.toggle("acute",n>=4))}const Qi=document.getElementById("sound-btn");function Xo(){ke.setMuted(ue.muted),Qi&&(Qi.textContent=ue.muted?"🔇":"🔊",Qi.setAttribute("aria-label",ue.muted?"소리 켜기":"소리 끄기"))}function vu(){ue.muted=!ue.muted,fs(),Xo()}Qi==null||Qi.addEventListener("click",vu);window.addEventListener("keydown",n=>{n.code==="KeyM"&&vu()});Xo();let Ue="gate",pe="return",os=!1,ya=!1,Se=ue.night,Ie=0,Ke=Bt.segments,Re=1,Ge=0,ds=0,Nr=!1,Ei=0,Cr=0,Di=0,on=0,Ki=!1,Pr=-1,Ti=0,bi=0,Ns=0,tn=[],xo=new Set,Mo=0;const Ht={x:0,z:0};function xu(){return pe==="tutorial"?{chanceBonus:0,swarmFloor:0}:$0(Se)}function y_(){const{chanceBonus:n}=xu();return Math.min(.8+n,Bt.baseAnomalyChance+n+Ns/60*Bt.chancePerMinute)}const Fr=new URLSearchParams(location.search),qo=Fr.get("a"),E_=Fr.has("t"),T_=Fr.get("avert")==="off",b_=Math.max(0,Math.min(5,Number(Fr.get("anchor")??2)||0));let Mu=null;const fr=()=>Mu??qo;let Ea=!1;const Su={camera:ge,scene:Ur,segLength:Bt.segLength,corridorHalfWidth:Bt.corridorHalfWidth,segments:Bt.segments,nights:si,anomalies:mo.map(n=>({id:n.id,effect:n.effect,segment:n.segment,label:`${n.id} ${n.effect} (${n.rule==="avert"?"형체":"흔적"})`})),snapshot:()=>({night:Se,done:Ie,total:Ke,theme:Re,depth:Ge,stretches:ds,morning:pe==="tutorial"}),relock:()=>le.activate(),jump:n=>{n.effect!==void 0&&(Mu=n.effect),n.night!==void 0&&(Se=Math.max(1,Math.floor(n.night))),n.morning!==void 0&&(pe=n.morning?"tutorial":"return"),Go(oe,n.daylight??pe==="tutorial"),Yo(),n.theme!==void 0&&(Re=Math.max(1,Math.min(Bt.segments,n.theme))),Ie=pe==="return"?Bt.segments-Re:Re-1,n.depth!==void 0&&(Ge=Math.max(0,Math.min(Bt.depthLimit-1,n.depth))),Ti=zt.tutBeats.length,bi=Number.MAX_SAFE_INTEGER,Hs(),Us(Ge),Ue="walk"}},ts=new x_(Su);function Hs(n=!1){n_(oe,Re);const t=pe==="tutorial",e=mo.filter(a=>(a.segment===Re||a.segment===0)&&a.night<=Se&&(a.untilNight===void 0||Se<=a.untilNight)&&!xo.has(a.id)),i=ci(Se).onboarding,s=!fr()&&i&&Ie===0,r=i&&Mo===0&&(pe==="return"?Re<=2:Re>=Bt.segments-1);if(t)tn=[];else if(fr()){const a=mo.filter(l=>l.effect===fr()&&(l.segment===Re||l.segment===0)),o=a.find(l=>l.night<=Se&&(l.untilNight===void 0||Se<=l.untilNight))??a[0];tn=o?[o]:[]}else if(e.length>0&&!s&&(r||Math.random()<y_())){const a=Math.min(Z0(Di+xu().swarmFloor),e.length),o=[...e].sort(()=>Math.random()-.5),l={gaze:o.filter(u=>u.rule==="gaze"),avert:o.filter(u=>u.rule==="avert")},c=[];let h=Math.random()<.5?"gaze":"avert";for(;c.length<a;){const u=h==="gaze"?"avert":"gaze",d=l[h].shift()??l[u].shift();if(!d)break;c.push(d),h=u}tn=c,Mo+=c.length}else tn=[];xo=new Set(tn.map(a=>a.id)),tn.some(a=>a.effect==="figure")&&(oe.group.userData.figureAnchor=fr()?b_:Math.floor(Math.random()*cu.length)),u_(oe),Pr=-1,pu(oe,Ge),Us(Ge),Jg(oe,tn.map(a=>a.effect)),i_(oe,Nr&&!t),ke.duck(tn.length>0),gu(oe,Ie===Ke-1,pe!=="return"),s_(oe,pe==="return"&&Ie===0),r_(oe,pe!=="return"),a_(oe,pe==="return"),Ht.x=0,Ht.z=-.5,le.yaw=0,le.pitch=0,n?(ce.setStatusStretch(So()),ke.stretch()):ce.setStatus(So())}function So(){return pe==="tutorial"?`퇴근길 — ${zt.segLabel(Ie+1,Ke,Re)}`:pe==="return"?`${zt.nightLabel(Se)} — 돌아가는 길 ${zt.segLabel(Ie+1,Ke,Re)}`:`${zt.nightLabel(Se)} — ${zt.segLabel(Ie+1,Ke,Re)}`}function w_(){Ke+=1,Cr+=1,ds+=1,Di=Math.min(Bt.swarmMax,Di+1),Ge+=Bt.growDepthCost,ue.misses+=1,fs(),gu(oe,Ie===Ke-1,pe!=="return"),pu(oe,Ge),Us(Ge),ce.setStatusStretch(So()),ke.stretch(),Ge>=Bt.depthLimit&&Ko()}const Cn={move:!1,avert:!1,hintZ:0},yu=()=>le.usesTouch||"ontouchstart"in window;function Yo(){Ie=0,Ke=Bt.segments,Re=1,Ge=0,ds=0,Di=0,Nr=!1,Ns=0,xo=new Set,Mo=0,on=0,Ki=!1,Ei=0,Cr=0,Pr=-1}async function A_(){pe="tutorial",Yo(),Ie=Bt.segments-2,Re=Bt.segments-1,Go(oe,!0),Hs(),Ht.z=-36*.24,Ue="walk",Ti=0,Cn.move||(Cn.hintZ=Ht.z,ce.showHint(yu()?zt.hintMoveTouch:zt.hintMovePc))}async function $o(){pe="return",Yo(),Re=Bt.segments,Go(oe,!1),Hs(),Ue="walk",bi=0,ce.say(ci(Se).intro,4200),ci(Se).onboarding&&!Cn.move&&(Cn.hintZ=Ht.z,ce.showHint(yu()?zt.hintMoveTouch:zt.hintMovePc))}async function Eu(){ci(Se).onboarding&&!qo&&(E_||!ue.tut)?await A_():await $o()}async function Ko(){Ue="transition",await ce.fadeOut(1400),await ce.blackScreen(zt.softFail,zt.softFailBtn),le.activate(),await Eu(),await ce.fadeIn(900)}async function R_(){Ue="transition",await ce.fadeOut(800),await ce.blackScreen(zt.tutShopArrive,zt.tutShopBtn),ue.tut=!0,fs(),await ce.blackScreen(zt.tutDusk,zt.tutDuskBtn),le.activate(),await $o(),await ce.fadeIn(1100)}async function C_(){Ue="transition",await ce.fadeOut(800);const n=K0(ds),t=n==="crispy"?zt.homeCrispy:n==="lukewarm"?zt.homeLukewarm:zt.homeSoggy;ue.results[Se-1]=n,ue.night=Se+1,fs(),await ce.blackScreen(zt.homeArrive,zt.homeOpen);const e=Se>si?"…도장 찍을 칸이, 이제 없다":`도장 ${"●".repeat(Se)}${"○".repeat(si-Se)}`;await ce.arrivalScene({gauge:`${zt.homeGauge[n]} · ${e}`,result:t,epilogue:ci(Se).epilogue,steps:[zt.homeSit,zt.homeEnd],endLabel:zt.homeEnd,bg:n==="crispy"?"#181008":n==="lukewarm"?"#100e12":"#0a0d16",onBite:()=>{}}),le.activate(),Se+=1,await ce.blackScreen(zt.nightOpen(Se),zt.nightOpenBtn),le.activate(),await $o(),await ce.fadeIn(900)}async function P_(){Ue==="walk"&&(Ue="transition",Sr(oe,1,pe==="tutorial"?.008:.044),ke.duck(!0),await new Promise(n=>setTimeout(n,900)),le.yaw=0,le.pitch=0,Ht.z=$e*.42,ce.say(zt.turnedBack,3400),Ue="walk")}async function L_(){Ue==="walk"&&await Tu(pe==="tutorial"?zt.carHitDay:zt.carHit)}async function Tu(n){if(Ue==="walk"){if(Ue="transition",on=0,Ki=!1,ds+=1,Ke+=1,Ge+=Bt.stretchDepthCost,Di=Math.min(Bt.swarmMax,Di+1),ue.misses+=1,fs(),ke.duck(!0),await ce.fadeOut(700),Ie+=1,Ge>=Bt.depthLimit){await Ko();return}Nr=!0,Hs(!0),ce.say(pe==="tutorial"?n:`${n}
${zt.stretchNotice}`,3800),Ue="walk",await ce.fadeIn(700)}}async function D_(){if(Ie+=1,Ge>=Bt.depthLimit){await Ko();return}if(Ie>=Ke){pe==="tutorial"?await R_():await C_();return}const n=Cr>0;n&&(Cr-=1),Nr=n,n||(Re=pe==="return"?Math.max(Re-1,1):Math.min(Re+1,Bt.segments)),Hs(),Ht.z=$e/2}const Vn=new U;function I_(n){let t=1/0;for(const e of n)e.getWorldPosition(Vn),t=Math.min(t,Vn.distanceTo(ge.position));return t}const ln=new cs,ws=new U,xc=new U,dr=new U;function U_(){let n=null;for(const t of tn)if(t.rule==="avert")for(const e of oe.hit[t.effect])e.traverse(i=>{if(!i.isMesh)return;i.getWorldPosition(Vn);const s=Vn.distanceTo(ge.position);(!n||s<n.dist)&&(n={obj:i,dist:s})});return n}function N_(n){ge.getWorldDirection(xc);let t=1/0,e=1/0;for(const i of n){if(!i.visible||(ln.setFromObject(i),ln.isEmpty()))continue;ln.getCenter(ws),dr.subVectors(ws,ge.position);const s=dr.length();if(s<.01)continue;t=Math.min(t,s),dr.divideScalar(s);const r=Math.max(-1,Math.min(1,dr.dot(xc)));e=Math.min(e,Math.acos(r)*180/Math.PI)}return{dist:t,deg:e}}const Mc=new $c;function F_(n,t){for(let e=n;e;e=e.parent)if(e===t)return!0;return!1}function O_(n){for(let t=n;t;t=t.parent)if(!t.visible)return!1;return!0}function B_(){return tn.map(n=>{const t=oe.hit[n.effect],e=[];for(const l of t)l.traverse(c=>{c.isMesh&&e.push(c)});let i=!1,s=1/0,r=null;for(const l of e){if(ln.setFromObject(l),ln.isEmpty())continue;ln.getCenter(ws),s=Math.min(s,ws.distanceTo(ge.position)),Mc.set(ge.position,ws.clone().sub(ge.position).normalize());const c=Mc.intersectObject(Ur,!0).find(h=>O_(h.object));c&&t.some(h=>F_(c.object,h))?i=!0:r===null&&c&&(r=Math.round(c.distance*10)/10)}const a=l=>Math.round(l*1e3)/1e3,o=[];for(const l of e){if(ln.setFromObject(l),ln.isEmpty())continue;let c=1/0,h=1/0,u=-1/0,d=-1/0,p=!1;for(let g=0;g<8;g++){if(Vn.set(g&1?ln.max.x:ln.min.x,g&2?ln.max.y:ln.min.y,g&4?ln.max.z:ln.min.z),Vn.project(ge),Vn.z>=1){p=!1;break}p=!0;const _=(Vn.x+1)/2,m=(1-Vn.y)/2;c=Math.min(c,_),u=Math.max(u,_),h=Math.min(h,m),d=Math.max(d,m)}p&&o.push({x0:a(c),y0:a(h),x1:a(u),y1:a(d)})}return{id:n.id,rule:n.rule,parts:e.length,dist:Math.round(s*10)/10,clear:i,blockedAt:i?null:r,rects:o}})}const ti=document.getElementById("walk-btn");if(ti){let t=null;const e={x:0,y:0},i=s=>{s.pointerId===t&&(t=null,le.touchForward=0,le.touchStrafe=0,ti.classList.remove("held"))};ti.addEventListener("pointerdown",s=>{t=s.pointerId,le.usesTouch=!0,le.touchForward=1,le.touchStrafe=0,e.x=s.clientX,e.y=s.clientY,ti.classList.add("held"),ti.setPointerCapture(s.pointerId)}),ti.addEventListener("pointermove",s=>{if(s.pointerId!==t)return;const r=s.clientX-e.x,a=s.clientY-e.y,o=Math.abs(a)>=16?-Math.sign(a):0,l=Math.abs(r)>=16?Math.sign(r):0;le.touchForward=o===0&&l===0?1:o,le.touchStrafe=l}),ti.addEventListener("pointerup",i),ti.addEventListener("pointercancel",i)}const pr=Bt.corridorHalfWidth;function z_(n){if(ts.active){ts.fly(n,le.yaw,le.pitch,g=>le.isDown(g));const p=pe==="tutorial"?.008:.044;if(ts.clearView)Sr(oe,0,.004);else{const g=Math.max(Ie===Ke-1?0:Math.max(0,(-36-ge.position.z)/$e),Math.max(0,ge.position.z/$e));Sr(oe,Math.min(1,g*2),p)}ge.rotation.set(0,0,0),ge.rotateY(le.yaw),ge.rotateX(le.pitch),Ea=!0;return}Ea&&(Ea=!1,Ht.x=Math.max(-pr+.4,Math.min(pr-.4,ge.position.x)),Ht.z=Math.max(-36+.6,Math.min($e-.7,ge.position.z)),on=0,Ki=!1),Ns+=n;const t=le.getMove(),e=Math.abs(t.forward)+Math.abs(t.strafe)>.1;if(ke.update(n,e),pe==="return"){const p=Re===4&&!Ds(Ri)&&Ht.z>xa&&Ht.z<xa+6;if(e?Ei=Math.max(0,Ei-n*Bt.stillDrainMul):p||(Ei+=n),Ei>=Bt.stillGrowSec&&(Ei-=Bt.stillGrowSec,w_(),Ue!=="walk"))return}const i=pe==="tutorial"?.008:.044+Math.min(.018,Ns/60*.0035)+Math.min(.02,Ge*.0035),r=Ie===Ke-1?0:Math.max(0,(-36-Ht.z)/$e),a=Math.max(0,Ht.z/$e);Sr(oe,Math.min(1,Math.max(r,a)*2),i);const o=Math.sin(le.yaw),l=Math.cos(le.yaw),c=t.forward*Bt.walkSpeed*(t.forward<0?Bt.backFactor:1),h=t.strafe*Bt.walkSpeed*Bt.strafeFactor;if(Ht.x+=(o*-c+l*h)*n,Ht.z+=(-l*c-o*h)*n,Ht.x=Math.max(-pr+.4,Math.min(pr-.4,Ht.x)),Ht.z=Math.min($e-.7,Ht.z),pe==="tutorial"){for(;Ti<zt.tutBeats.length&&zt.tutBeats[Ti].theme<Re;)Ti+=1;const p=zt.tutBeats[Ti];p&&p.theme===Re&&Ht.z<=p.z&&(ce.say(p.text,3600),Ti+=1)}else if(pe==="return"){const p=ci(Se).beats??[],g=m=>m<0?Ke-1:m;for(;bi<p.length&&g(p[bi].at)<Ie;)bi+=1;const _=p[bi];_&&g(_.at)===Ie&&Ht.z<=_.z&&(ce.say(_.text,3800),bi+=1)}if(Re===4){const p=Ht.z<xa&&Ht.z>Te-Tn-1,g=Math.floor(Ri/Ho);if(!Ds(Ri)&&Pr!==g&&(Pr=g,h_(oe,Ri,g%2===0?1:-1),ke.carPass(su),pe!=="tutorial"&&p&&ce.say(zt.carComing,2e3)),p&&f_(oe)&&Math.abs(Ht.z-oe.car.position.z)<2.4){L_();return}}let u=!1;for(const p of T_?[]:tn){if(p.rule!=="avert")continue;const{dist:g,deg:_}=N_(oe.hit[p.effect]);if(g<=Bt.avertDistance&&_<=Bt.avertAngleDeg){u=!0;break}}if(u){if(on+=n,!Ki&&on>=Bt.avertWarnSec&&(Ki=!0,ce.say(zt.avertWarn,2400),ke.duck(!0)),Us(Ge+on/Bt.avertGrabSec*3),on>=Bt.avertGrabSec){Tu(zt.avertGrab);return}}else on>0&&(on=Math.max(0,on-n*Bt.avertRecoverMul),Us(Ge+on/Bt.avertGrabSec*3),on===0&&(Ki=!1,ke.duck(tn.length>0)));if(ke.setStare(on/Bt.avertGrabSec),ci(Se).onboarding&&(!Cn.move&&Cn.hintZ-Ht.z>6&&(Cn.move=!0,ce.hideHint()),Cn.move&&!Cn.avert&&tn.some(g=>g.rule==="avert"&&I_(oe.hit[g.effect])<18)&&(Cn.avert=!0,ce.showHint(zt.hintAvert,6e3))),Ht.z>=$e*.62){P_();return}const d=Ie===Ke-1?-36-.2:wg;if(Ht.z<d&&Math.abs(Ht.x)<Ts+.4){D_();return}if(Ht.z<-36+.5&&Math.abs(Ht.x)>=Ts&&(Ht.z=-36+.5),Ht.z>-.5&&Math.abs(Ht.x)>=Ts&&(Ht.z=-.5),Ht.z<-36||Ht.z>0){const p=ru-.25;Ht.x=Math.max(-p,Math.min(p,Ht.x))}ge.position.set(Ht.x,1.65,Ht.z),ge.rotation.set(0,0,0),ge.rotateY(le.yaw),ge.rotateX(le.pitch)}let Ri=0;function bu(){const n=Math.min(Rr.getDelta(),.1);Ri+=n,Ue==="walk"&&z_(n),ts.update(),c_(oe,Ri),An.render(Ur,ge),requestAnimationFrame(bu)}async function H_(){Ue!=="walk"||ya||(ya=!0,Ue="transition",ke.suspend(),await ce.blackScreen("…잠깐 골목 구석에서 숨을 골랐다.","계속 걷는다"),ke.resume(),le.activate(),Ue="walk",ya=!1)}Wo.classList.remove("hidden");const Ta=document.getElementById("settings-panel");var Sc;(Sc=document.getElementById("settings-btn"))==null||Sc.addEventListener("click",()=>{Ta==null||Ta.classList.toggle("open")});const ba=document.getElementById("continue-info"),wi=document.getElementById("reset-btn"),k_="기록 삭제 · 처음부터";function wu(){if(!ba||!wi)return;const n=__();if(ba.style.display=n?"block":"none",wi.style.display=n?"inline-block":"none",n){const e=ue.misses>0?` 그동안 ${ue.misses}번, 골목이 늘어났다.`:"";ba.textContent=`이어하기 — ${zt.nightLabel(ue.night)}.${e}`}const t=document.getElementById("start-btn");t&&(t.textContent=ue.tut?zt.startBtnResume:zt.startBtnFirst),G_()}function G_(){const n=document.getElementById("coupon"),t=document.querySelector("#coupon .c-stamps"),e=document.querySelector("#coupon .c-note");if(!n||!t||!e)return;n.style.display=ue.night>1?"flex":"none";const i=ue.night-1,s=Math.min(i,si);t.innerHTML="●".repeat(s)+`<span class="empty">${"○".repeat(si-s)}</span>`+(i>si?" ●":""),e.textContent=i>si?zt.couponOverflow:"밤마다 하나씩"}let wa=!1;wi==null||wi.addEventListener("click",()=>{if(!wa){wa=!0,wi.textContent="정말 삭제할까요? (한 번 더 누르면 삭제)";return}g_(),wa=!1,wi.textContent=k_,Se=ue.night,ei&&(ei.value=String(ue.brightness),An.toneMappingExposure=ue.brightness*vo),Xo(),wu()});wu();document.getElementById("start-btn").addEventListener("click",async()=>{var t;if(os)return;document.getElementById("start").classList.add("hidden"),os=!0,(t=document.activeElement)==null||t.blur(),ke.start(),le.activate(),Zo(),history.pushState({fries:1},""),await Eu()});window.addEventListener("popstate",()=>{os&&(history.pushState({fries:1},""),H_())});window.addEventListener("beforeunload",n=>{os&&Ue==="walk"&&n.preventDefault()});function Zo(){var t;(t=navigator.wakeLock)==null||t.request("screen").catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.hidden?(Rr.stop(),ke.suspend()):(Rr.start(),ke.resume(),os&&Zo())});window.addEventListener("pageshow",n=>{n.persisted&&(Rr.start(),ke.resume(),os&&Zo())});document.addEventListener("gesturestart",n=>n.preventDefault());An.domElement.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{ge.aspect=window.innerWidth/window.innerHeight,ge.updateProjectionMatrix(),An.setSize(window.innerWidth,window.innerHeight)});window.__fries={state:()=>({phase:Ue,mode:pe,night:Se,done:Ie,total:Ke,theme:Re,depth:Ge,stretches:ds,swarm:Di,active:tn.length,avert:tn.filter(n=>n.rule==="avert").length,avertNear:(()=>{const n=U_();return n?Math.round(n.dist*10)/10:null})(),stare:Math.round(on*100)/100,still:Math.round(Ei*100)/100,grown:Ke-Bt.segments,green:Ds(Ri),carX:oe.car.visible?Math.round(oe.car.position.x*10)/10:null,elapsed:Math.round(Ns*10)/10,x:Math.round(Ht.x*100)/100,z:Math.round(Ht.z*100)/100}),config:()=>({...Bt}),admin:{on:()=>ts.active,cam:()=>({x:ge.position.x,y:ge.position.y,z:ge.position.z}),toggle:()=>ts.toggle(),jump:n=>Su.jump(n)},...qo!==null?{occlusion:()=>B_()}:{}};ge.position.set(0,1.65,0);bu();
