(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="178",Ru=0,el=1,Cu=2,vc=1,Pu=2,Hn=3,si=0,tn=1,Rn=2,ni=0,Yi=1,nl=2,il=3,sl=4,Lu=5,vi=100,Du=101,Iu=102,Uu=103,Nu=104,Fu=200,Ou=201,Bu=202,zu=203,Eo=204,To=205,Hu=206,ku=207,Gu=208,Vu=209,Wu=210,Xu=211,qu=212,Yu=213,$u=214,bo=0,wo=1,Ao=2,Ji=3,Ro=4,Co=5,Po=6,Lo=7,xc=0,Ku=1,Zu=2,ii=0,ju=1,Ju=2,Qu=3,Mc=4,th=5,eh=6,nh=7,Sc=300,Qi=301,ts=302,Do=303,Io=304,wr=306,Ts=1e3,ti=1001,Uo=1002,Tn=1003,ih=1004,zs=1005,Cn=1006,Ir=1007,Ti=1008,Dn=1009,yc=1010,Ec=1011,bs=1012,va=1013,Ai=1014,kn=1015,Ds=1016,xa=1017,Ma=1018,ws=1020,Tc=35902,bc=1021,wc=1022,En=1023,As=1026,Rs=1027,Ac=1028,Sa=1029,Rc=1030,ya=1031,Ea=1033,ur=33776,hr=33777,dr=33778,fr=33779,No=35840,Fo=35841,Oo=35842,Bo=35843,zo=36196,Ho=37492,ko=37496,Go=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,$o=37814,Ko=37815,Zo=37816,jo=37817,Jo=37818,Qo=37819,ta=37820,ea=37821,pr=36492,na=36494,ia=36495,Cc=36283,sa=36284,ra=36285,oa=36286,sh=3200,rh=3201,Pc=0,oh=1,Qn="",Je="srgb",es="srgb-linear",_r="linear",he="srgb",Di=7680,rl=519,ah=512,lh=513,ch=514,Lc=515,uh=516,hh=517,dh=518,fh=519,ol=35044,al="300 es",Gn=2e3,vr=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,aa=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function ph(n,t){return(n%t+t)%t}function Nr(n,t,e){return(1-e)*n+e*t}function ds(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Us{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,w=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const R=Math.sqrt(T),E=Math.atan2(R,d*w);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}const M=a*w;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fr.copy(this).projectOnVector(t),this.sub(Fr)}reflect(t){return this.sub(Fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new N,ll=new Us;class zt{constructor(t,e,i,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],w=s[1],T=s[4],M=s[7],R=s[2],E=s[5],b=s[8];return r[0]=o*_+a*w+l*R,r[3]=o*m+a*T+l*E,r[6]=o*d+a*M+l*b,r[1]=c*_+h*w+u*R,r[4]=c*m+h*T+u*E,r[7]=c*d+h*M+u*b,r[2]=f*_+p*w+g*R,r[5]=f*m+p*T+g*E,r[8]=f*d+p*M+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Or.makeScale(t,e)),this}rotate(t){return this.premultiply(Or.makeRotation(-t)),this}translate(t,e){return this.premultiply(Or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Or=new zt;function Dc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mh(){const n=xr("canvas");return n.style.display="block",n}const cl={};function $i(n){n in cl||(cl[n]=!0,console.warn(n))}function gh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function _h(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vh(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ul=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xh(){const n={enabled:!0,workingColorSpace:es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?_r:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[es]:{primaries:t,whitePoint:i,transfer:_r,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:he,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}const ie=xh();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ki(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Mh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ii===void 0&&(Ii=xr("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ii}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sh=0;class Ta{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Br(s[o].image)):r.push(Br(s[o]))}else r=Br(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Br(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yh=0;const zr=new N;class en extends rs{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,i=ti,s=ti,r=Cn,o=Ti,a=En,l=Dn,c=en.DEFAULT_ANISOTROPY,h=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Is(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ts:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ts:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Sc;en.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,M=(p+1)/2,R=(d+1)/2,E=(h+f)/4,b=(u+_)/4,P=(g+m)/4;return T>M&&T>R?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=E/i,r=b/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=b/r,s=P/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eh extends rs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new en(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Eh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ic extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ks.subVectors(this.max,fs),Ui.subVectors(t.a,fs),Ni.subVectors(t.b,fs),Fi.subVectors(t.c,fs),Xn.subVectors(Ni,Ui),qn.subVectors(Fi,Ni),ci.subVectors(Ui,Fi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Hr(e,Ui,Ni,Fi,ks)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Ui,Ni,Fi,ks))?!1:(Gs.crossVectors(Xn,qn),e=[Gs.x,Gs.y,Gs.z],Hr(e,Ui,Ni,Fi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Nn=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,Hs=new os,Ui=new N,Ni=new N,Fi=new N,Xn=new N,qn=new N,ci=new N,fs=new N,ks=new N,Gs=new N,ui=new N;function Hr(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ui.fromArray(n,r);const a=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=i.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bh=new os,ps=new N,kr=new N;class Ar{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):bh.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(kr)),this.expandByPoint(ps.copy(t.center).sub(kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Fn=new N,Gr=new N,Vs=new N,Yn=new N,Vr=new N,Ws=new N,Wr=new N;class ba{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Gr.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Gr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=Yn.dot(this.direction),l=-Yn.dot(Vs),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gr).addScaledVector(Vs,f),p}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){Vr.subVectors(e,t),Ws.subVectors(i,t),Wr.crossVectors(Vr,Ws);let o=this.direction.dot(Wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(Ws.crossVectors(Yn,Ws));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(Wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,i,s,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wh,t,Ah)}lookAt(t,e,i){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),$n.crossVectors(i,cn),$n.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),$n.crossVectors(i,cn)),$n.normalize(),Xs.crossVectors(cn,$n),s[0]=$n.x,s[4]=Xs.x,s[8]=cn.x,s[1]=$n.y,s[5]=Xs.y,s[9]=cn.y,s[2]=$n.z,s[6]=Xs.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],w=i[3],T=i[7],M=i[11],R=i[15],E=s[0],b=s[4],P=s[8],y=s[12],x=s[1],L=s[5],O=s[9],B=s[13],Y=s[2],Z=s[6],W=s[10],q=s[14],X=s[3],rt=s[7],ut=s[11],xt=s[15];return r[0]=o*E+a*x+l*Y+c*X,r[4]=o*b+a*L+l*Z+c*rt,r[8]=o*P+a*O+l*W+c*ut,r[12]=o*y+a*B+l*q+c*xt,r[1]=h*E+u*x+f*Y+p*X,r[5]=h*b+u*L+f*Z+p*rt,r[9]=h*P+u*O+f*W+p*ut,r[13]=h*y+u*B+f*q+p*xt,r[2]=g*E+_*x+m*Y+d*X,r[6]=g*b+_*L+m*Z+d*rt,r[10]=g*P+_*O+m*W+d*ut,r[14]=g*y+_*B+m*q+d*xt,r[3]=w*E+T*x+M*Y+R*X,r[7]=w*b+T*L+M*Z+R*rt,r[11]=w*P+T*O+M*W+R*ut,r[15]=w*y+T*B+M*q+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],w=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,T=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,R=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,E=e*w+i*T+s*M+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=w*b,t[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*b,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*b,t[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*b,t[4]=T*b,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*b,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*b,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*b,t[8]=M*b,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*d-e*u*d)*b,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*d+e*a*d)*b,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*b,t[12]=R*b,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*b,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*m-e*a*m)*b,t[15]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*f+e*a*f)*b,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,w=l*c,T=l*h,M=l*u,R=i.x,E=i.y,b=i.z;return s[0]=(1-(_+d))*R,s[1]=(p+M)*R,s[2]=(g-T)*R,s[3]=0,s[4]=(p-M)*E,s[5]=(1-(f+d))*E,s[6]=(m+w)*E,s[7]=0,s[8]=(g+T)*b,s[9]=(m-w)*b,s[10]=(1-(f+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/r,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Gn){const l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===Gn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Gn){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*c,p=(i+s)*h;let g,_;if(a===Gn)g=(o+r)*u,_=-2*u;else if(a===vr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Oi=new N,vn=new Se,wh=new N(0,0,0),Ah=new N(1,1,1),$n=new N,Xs=new N,cn=new N,dl=new Se,fl=new Us;class In{constructor(t=0,e=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fl.setFromEuler(this),this.setFromQuaternion(fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rh=0;const pl=new N,Bi=new Us,On=new Se,qs=new N,ms=new N,Ch=new N,Ph=new Us,ml=new N(1,0,0),gl=new N(0,1,0),_l=new N(0,0,1),vl={type:"added"},Lh={type:"removed"},zi={type:"childadded",child:null},Xr={type:"childremoved",child:null};class ke extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new N,e=new In,i=new Us,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new zt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qs.copy(t):qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(ms,qs,this.up):On.lookAt(qs,ms,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(On),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lh),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,Ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new N(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new N,Bn=new N,qr=new N,zn=new N,Hi=new N,ki=new N,xl=new N,Yr=new N,$r=new N,Kr=new N,Zr=new de,jr=new de,Jr=new de;class Sn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),Bn.subVectors(i,e),qr.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Bn),l=xn.dot(qr),c=Bn.dot(Bn),h=Bn.dot(qr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Zr.setScalar(0),jr.setScalar(0),Jr.setScalar(0),Zr.fromBufferAttribute(t,e),jr.fromBufferAttribute(t,i),Jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zr,r.x),o.addScaledVector(jr,r.y),o.addScaledVector(Jr,r.z),o}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),Bn.subVectors(t,e),xn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),xn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,i),ki.subVectors(r,i),Yr.subVectors(t,i);const l=Hi.dot(Yr),c=ki.dot(Yr);if(l<=0&&c<=0)return e.copy(i);$r.subVectors(t,s);const h=Hi.dot($r),u=ki.dot($r);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Hi,o);Kr.subVectors(t,r);const p=Hi.dot(Kr),g=ki.dot(Kr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ki,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return xl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(xl,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Hi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Qr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=ph(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Qr(o,r,t+1/3),this.g=Qr(o,r,t),this.b=Qr(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=Uc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ie.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Je){ie.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Ys);const i=Nr(Kn.h,Ys.h,e),s=Nr(Kn.s,Ys.s,e),r=Nr(Kn.l,Ys.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new $t;$t.NAMES=Uc;let Dh=0;class as extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Yi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ns extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new N,$s=new Kt;let Ih=0;class Pn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ih++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ol,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}}class Nc extends Pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fc extends Pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends Pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Uh=0;const mn=new Se,to=new ke,Gi=new N,un=new os,gs=new os,He=new N;class dn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Fc:Nc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return to.lookAt(t),to.updateMatrix(),this.applyMatrix4(to.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(un.min,gs.min),un.expandByPoint(He),He.addVectors(un.max,gs.max),un.expandByPoint(He)):(un.expandByPoint(gs.min),un.expandByPoint(gs.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),He.add(Gi)),s=Math.max(s,i.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new N,l[P]=new N;const c=new N,h=new N,u=new N,f=new Kt,p=new Kt,g=new Kt,_=new N,m=new N;function d(P,y,x){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[y].add(_),a[x].add(_),l[P].add(m),l[y].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,y=w.length;P<y;++P){const x=w[P],L=x.start,O=x.count;for(let B=L,Y=L+O;B<Y;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const T=new N,M=new N,R=new N,E=new N;function b(P){R.fromBufferAttribute(s,P),E.copy(R);const y=a[P];T.copy(y),T.sub(R.multiplyScalar(R.dot(y))).normalize(),M.crossVectors(E,y);const L=M.dot(l[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,L)}for(let P=0,y=w.length;P<y;++P){const x=w[P],L=x.start,O=x.count;for(let B=L,Y=L+O;B<Y;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Pn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new Se,hi=new ba,Ks=new Ar,Sl=new N,Zs=new N,js=new N,Js=new N,eo=new N,Qs=new N,yl=new N,tr=new N;class ot extends ke{constructor(t=new dn,e=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(eo.fromBufferAttribute(u,t),o?Qs.addScaledVector(eo,h):Qs.addScaledVector(eo.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(Ks.containsPoint(hi.origin)===!1&&(hi.intersectSphere(Ks,Sl)===null||hi.origin.distanceToSquared(Sl)>(t.far-t.near)**2))&&(Ml.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Ml),!(i.boundingBox!==null&&hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=T;M<R;M+=3){const E=a.getX(M),b=a.getX(M+1),P=a.getX(M+2);s=er(this,d,t,i,c,h,u,E,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);s=er(this,o,t,i,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,R=T;M<R;M+=3){const E=M,b=M+1,P=M+2;s=er(this,d,t,i,c,h,u,E,b,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const w=m,T=m+1,M=m+2;s=er(this,o,t,i,c,h,u,w,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nh(n,t,e,i,s,r,o,a){let l;if(t.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===si,a),l===null)return null;tr.copy(a),tr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:n}}function er(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Zs),n.getVertexPosition(l,js),n.getVertexPosition(c,Js);const h=Nh(n,t,e,i,Zs,js,Js,yl);if(h){const u=new N;Sn.getBarycoord(yl,Zs,js,Js,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new Kt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new Kt)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Sn.getNormal(Zs,js,Js,f.normal),h.face=f,h.barycoord=u}return h}class Wt extends dn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(u,2));function g(_,m,d,w,T,M,R,E,b,P,y){const x=M/b,L=R/P,O=M/2,B=R/2,Y=E/2,Z=b+1,W=P+1;let q=0,X=0;const rt=new N;for(let ut=0;ut<W;ut++){const xt=ut*L-B;for(let Ht=0;Ht<Z;Ht++){const oe=Ht*x-O;rt[_]=oe*w,rt[m]=xt*T,rt[d]=Y,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[d]=E>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(Ht/b),u.push(1-ut/P),q+=1}}for(let ut=0;ut<P;ut++)for(let xt=0;xt<b;xt++){const Ht=f+xt+Z*ut,oe=f+xt+Z*(ut+1),K=f+(xt+1)+Z*(ut+1),st=f+(xt+1)+Z*ut;l.push(Ht,oe,st),l.push(oe,K,st),X+=6}a.addGroup(p,X,y),p+=X,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function je(n){const t={};for(let e=0;e<n.length;e++){const i=is(n[e]);for(const s in i)t[s]=i[s]}return t}function Fh(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Oc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Oh={clone:is,merge:je};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Fh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Bc extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new N,El=new Kt,Tl=new Kt;class hn extends Bc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,El,Tl),e.subVectors(Tl,El)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class Hh extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new hn(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const o=new hn(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new hn(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const l=new hn(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new hn(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class zc extends en{constructor(t=[],e=Qi,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kh extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new zc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ni});r.uniforms.tEquirect.value=e;const o=new ot(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Cn),new Hh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class te extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gh={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vh extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const io=new N,Wh=new N,Xh=new zt;class gi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=io.subVectors(i,e).cross(Wh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xh.getNormalMatrix(t),s=this.coplanarPoint(io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ar,qh=new Kt(.5,.5),nr=new N;class Ra{constructor(t=new gi,e=new gi,i=new gi,s=new gi,r=new gi,o=new gi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],w=s[13],T=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-p,M-d).normalize(),i[1].setComponents(l+r,f+c,m+p,M+d).normalize(),i[2].setComponents(l+o,f+h,m+g,M+w).normalize(),i[3].setComponents(l-o,f-h,m-g,M-w).normalize(),i[4].setComponents(l-a,f-u,m-_,M-T).normalize(),e===Gn)i[5].setComponents(l+a,f+u,m+_,M+T).normalize();else if(e===vr)i[5].setComponents(a,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=qh.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hc extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mr=new N,Sr=new N,bl=new Se,_s=new ba,ir=new Ar,so=new N,wl=new N;class Yh extends ke{constructor(t=new dn,e=new Hc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Mr.fromBufferAttribute(e,s-1),Sr.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Mr.distanceTo(Sr);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ir.copy(i.boundingSphere),ir.applyMatrix4(s),ir.radius+=r,t.ray.intersectsSphere(ir)===!1)return;bl.copy(s).invert(),_s.copy(t.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),w=h.getX(_+1),T=sr(this,t,_s,l,d,w,_);T&&e.push(T)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=sr(this,t,_s,l,_,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=sr(this,t,_s,l,_,_+1,_);d&&e.push(d)}if(this.isLineLoop){const _=sr(this,t,_s,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sr(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Mr.fromBufferAttribute(a,s),Sr.fromBufferAttribute(a,r),e.distanceSqToSegment(Mr,Sr,so,wl)>i)return;so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);if(!(c<t.near||c>t.far))return{distance:c,point:wl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Al=new N,Rl=new N;class $h extends Yh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Al.fromBufferAttribute(e,s),Rl.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Al.distanceTo(Rl);t.setAttribute("lineDistance",new Pe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ca extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kc extends en{constructor(t,e,i=Ai,s,r,o,a=Tn,l=Tn,c,h=As,u=1){if(h!==As&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ns extends dn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,h=new Kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=i+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pa extends dn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;w(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Pe(u,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(p,2));function w(){const M=new N,R=new N;let E=0;const b=(e-t)/i;for(let P=0;P<=r;P++){const y=[],x=P/r,L=x*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,Y=B*l+a,Z=Math.sin(Y),W=Math.cos(Y);R.x=L*Z,R.y=-x*i+m,R.z=L*W,u.push(R.x,R.y,R.z),M.set(Z,b,W).normalize(),f.push(M.x,M.y,M.z),p.push(B,1-x),y.push(g++)}_.push(y)}for(let P=0;P<s;P++)for(let y=0;y<r;y++){const x=_[y][P],L=_[y+1][P],O=_[y+1][P+1],B=_[y][P+1];(t>0||y!==0)&&(h.push(x,L,B),E+=3),(e>0||y!==r-1)&&(h.push(L,O,B),E+=3)}c.addGroup(d,E,0),d+=E}function T(M){const R=g,E=new Kt,b=new N;let P=0;const y=M===!0?t:e,x=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const Y=O/s*l+a,Z=Math.cos(Y),W=Math.sin(Y);b.x=y*W,b.y=m*x,b.z=y*Z,u.push(b.x,b.y,b.z),f.push(0,x,0),E.x=Z*.5+.5,E.y=W*.5*x+.5,p.push(E.x,E.y),g++}for(let O=0;O<s;O++){const B=R+O,Y=L+O;M===!0?h.push(Y,Y+1,B):h.push(Y+1,Y,B),P+=3}c.addGroup(d,P,M===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class La extends Pa{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new La(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends dn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const w=d*f-o;for(let T=0;T<c;T++){const M=T*u-r;g.push(M,-w,0),_.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const T=w+c*d,M=w+c*(d+1),R=w+1+c*(d+1),E=w+1+c*d;p.push(T,M,E),p.push(M,R,E)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.width,t.height,t.widthSegments,t.heightSegments)}}class Da extends dn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new N,g=new Kt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let d=0;d<i;d++){const w=d+m,T=w,M=w+i+1,R=w+i+2,E=w+1;a.push(T,M,E),a.push(M,R,E)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rn extends dn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,f=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const w=[],T=d/i;let M=0;d===0&&o===0?M=.5/e:d===i&&l===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+T*a),u.y=t*Math.cos(o+T*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+M,1-T),w.push(c++)}h.push(w)}for(let d=0;d<i;d++)for(let w=0;w<e;w++){const T=h[d][w+1],M=h[d][w],R=h[d+1][w],E=h[d+1][w+1];(d!==0||o>0)&&p.push(T,M,E),(d!==i-1||l<Math.PI)&&p.push(M,R,E)}this.setIndex(p),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xt extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kh extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zh extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ia extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ro=new Se,Cl=new N,Pl=new N;class Gc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Cl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cl),Pl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pl),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new Se,vs=new N,oo=new N;class jh extends Gc{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),i.position.copy(vs),oo.copy(i.position),oo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(oo),i.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),Ll.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class Ln extends Ia{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vc extends Bc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Jh extends Gc{constructor(){super(new Vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class td extends Ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ed extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class nd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Dl=new Se;class Wc{constructor(t,e,i=0,s=1/0){this.ray=new ba(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dl),this}intersectObject(t,e=!0,i=[]){return la(t,this,i,e),i.sort(Il),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)la(t[s],this,i,e);return i.sort(Il),i}}function Il(n,t){return n.distance-t.distance}function la(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)la(r[o],t,e,!0)}}function Ul(n,t,e,i){const s=id(i);switch(e){case bc:return n*t;case Ac:return n*t/s.components*s.byteLength;case Sa:return n*t/s.components*s.byteLength;case Rc:return n*t*2/s.components*s.byteLength;case ya:return n*t*2/s.components*s.byteLength;case wc:return n*t*3/s.components*s.byteLength;case En:return n*t*4/s.components*s.byteLength;case Ea:return n*t*4/s.components*s.byteLength;case ur:case hr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:case Bo:return Math.max(n,16)*Math.max(t,8)/4;case No:case Oo:return Math.max(n,8)*Math.max(t,8)/2;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ta:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ea:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case pr:case na:case ia:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Cc:case sa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ra:case oa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function id(n){switch(n){case Dn:case yc:return{byteLength:1,components:1};case bs:case Ec:case Ds:return{byteLength:2,components:1};case xa:case Ma:return{byteLength:2,components:4};case Ai:case va:case kn:return{byteLength:4,components:1};case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xc(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function sd(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,xd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
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
#endif`,sf=`struct PhysicalMaterial {
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
}`,rf=`
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
#endif`,of=`#if defined( RE_IndirectDiffuse )
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mf=`#if defined( USE_POINTS_UV )
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
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,If=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wf=`float getShadowMask() {
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
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
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
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
}`,fp=`#define DISTANCE
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
}`,pp=`#define DISTANCE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,yp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,wp=`#define NORMAL
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Ip=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 color;
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
}`,Op=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:rd,alphahash_pars_fragment:od,alphamap_fragment:ad,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:ud,aomap_fragment:hd,aomap_pars_fragment:dd,batching_pars_vertex:fd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:vd,bumpmap_pars_fragment:xd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Ed,color_fragment:Td,color_pars_fragment:bd,color_pars_vertex:wd,color_vertex:Ad,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Dd,emissivemap_fragment:Id,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:jd,envmap_vertex:kd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Yd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Kd,lights_pars_begin:Zd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tf,lights_phong_pars_fragment:ef,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:rf,lights_fragment_maps:of,lights_fragment_end:af,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:hf,map_fragment:df,map_pars_fragment:ff,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:_f,morphinstance_vertex:vf,morphcolor_vertex:xf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:yf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:bf,normal_pars_vertex:wf,normal_vertex:Af,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:If,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:qf,skinning_vertex:Yf,skinnormal_vertex:$f,specularmap_fragment:Kf,specularmap_pars_fragment:Zf,tonemapping_fragment:jf,tonemapping_pars_fragment:Jf,transmission_fragment:Qf,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:op,backgroundCube_vert:ap,backgroundCube_frag:lp,cube_vert:cp,cube_frag:up,depth_vert:hp,depth_frag:dp,distanceRGBA_vert:fp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:_p,linedashed_frag:vp,meshbasic_vert:xp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:yp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:bp,meshnormal_frag:wp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Lp,meshtoon_frag:Dp,points_vert:Ip,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:Bp},lt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},An={basic:{uniforms:je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:je([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:je([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:je([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:je([lt.points,lt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:je([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:je([lt.common,lt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:je([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:je([lt.sprite,lt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:je([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:je([lt.lights,lt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};An.physical={uniforms:je([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const rr={r:0,b:0,g:0},fi=new In,zp=new Se;function Hp(n,t,e,i,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?e:t).get(M)),M}function _(T){let M=!1;const R=g(T);R===null?d(a,l):R&&R.isColor&&(d(R,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const R=g(M);R&&(R.isCubeTexture||R.mapping===wr)?(h===void 0&&(h=new ot(new Wt(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:is(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(M.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zp.makeRotationFromEuler(fi)),h.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,(u!==R||f!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ot(new Le(2,2),new ri({name:"BackgroundMaterial",uniforms:is(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(R.colorSpace)!==he,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,M){T.getRGB(rr,Oc(n)),i.buffers.color.setClear(rr.r,rr.g,rr.b,M,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(a,l)},render:_,addToRenderList:m,dispose:w}}function kp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(x,L,O,B,Y){let Z=!1;const W=u(B,O,L);r!==W&&(r=W,c(r.object)),Z=p(x,B,O,Y),Z&&g(x,B,O,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(x,L,O,B),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,L,O){const B=O.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let Z=Y[L.id];Z===void 0&&(Z={},Y[L.id]=Z);let W=Z[B];return W===void 0&&(W=f(l()),Z[B]=W),W}function f(x){const L=[],O=[],B=[];for(let Y=0;Y<e;Y++)L[Y]=0,O[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,L,O,B){const Y=r.attributes,Z=L.attributes;let W=0;const q=O.getAttributes();for(const X in q)if(q[X].location>=0){const ut=Y[X];let xt=Z[X];if(xt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(xt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(xt=x.instanceColor)),ut===void 0||ut.attribute!==xt||xt&&ut.data!==xt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(x,L,O,B){const Y={},Z=L.attributes;let W=0;const q=O.getAttributes();for(const X in q)if(q[X].location>=0){let ut=Z[X];ut===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const xt={};xt.attribute=ut,ut&&ut.data&&(xt.data=ut.data),Y[X]=xt,W++}r.attributes=Y,r.attributesNum=W,r.index=B}function _(){const x=r.newAttributes;for(let L=0,O=x.length;L<O;L++)x[L]=0}function m(x){d(x,0)}function d(x,L){const O=r.newAttributes,B=r.enabledAttributes,Y=r.attributeDivisors;O[x]=1,B[x]===0&&(n.enableVertexAttribArray(x),B[x]=1),Y[x]!==L&&(n.vertexAttribDivisor(x,L),Y[x]=L)}function w(){const x=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==x[O]&&(n.disableVertexAttribArray(O),L[O]=0)}function T(x,L,O,B,Y,Z,W){W===!0?n.vertexAttribIPointer(x,L,O,Y,Z):n.vertexAttribPointer(x,L,O,B,Y,Z)}function M(x,L,O,B){_();const Y=B.attributes,Z=O.getAttributes(),W=L.defaultAttributeValues;for(const q in Z){const X=Z[q];if(X.location>=0){let rt=Y[q];if(rt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const ut=rt.normalized,xt=rt.itemSize,Ht=t.get(rt);if(Ht===void 0)continue;const oe=Ht.buffer,K=Ht.type,st=Ht.bytesPerElement,St=K===n.INT||K===n.UNSIGNED_INT||rt.gpuType===va;if(rt.isInterleavedBufferAttribute){const ht=rt.data,bt=ht.stride,Zt=rt.offset;if(ht.isInstancedInterleavedBuffer){for(let yt=0;yt<X.locationSize;yt++)d(X.location+yt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let yt=0;yt<X.locationSize;yt++)m(X.location+yt);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let yt=0;yt<X.locationSize;yt++)T(X.location+yt,xt/X.locationSize,K,ut,bt*st,(Zt+xt/X.locationSize*yt)*st,St)}else{if(rt.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)d(X.location+ht,rt.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ht=0;ht<X.locationSize;ht++)T(X.location+ht,xt/X.locationSize,K,ut,xt*st,xt/X.locationSize*ht*st,St)}}else if(W!==void 0){const ut=W[q];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(X.location,ut);break;case 3:n.vertexAttrib3fv(X.location,ut);break;case 4:n.vertexAttrib4fv(X.location,ut);break;default:n.vertexAttrib1fv(X.location,ut)}}}}w()}function R(){P();for(const x in i){const L=i[x];for(const O in L){const B=L[O];for(const Y in B)h(B[Y].object),delete B[Y];delete L[O]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const O in L){const B=L[O];for(const Y in B)h(B[Y].object),delete B[Y];delete L[O]}delete i[x.id]}function b(x){for(const L in i){const O=i[L];if(O[x.id]===void 0)continue;const B=O[x.id];for(const Y in B)h(B[Y].object),delete B[Y];delete O[x.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Gp(n,t,e){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==En&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Dn&&i.convert(b)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==kn&&!P)}function l(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:R,maxSamples:E}}function Wp(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new gi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:i,T=w*4;let M=d.clippingState||null;l.value=M,M=h(g,f,T,p);for(let R=0;R!==T;++R)M[R]=e[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,M=p;T!==_;++T,M+=4)o.copy(u[T]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xp(n){let t=new WeakMap;function e(o,a){return a===Do?o.mapping=Qi:a===Io&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Do||a===Io)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kh(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const qi=4,Nl=[.125,.215,.35,.446,.526,.582],xi=20,ao=new Vc,Fl=new $t;let lo=null,co=0,uo=0,ho=!1;const _i=(1+Math.sqrt(5))/2,Xi=1/_i,Ol=[new N(-_i,Xi,0),new N(_i,Xi,0),new N(-Xi,0,_i),new N(Xi,0,_i),new N(0,_i,-Xi),new N(0,_i,Xi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],qp=new N;class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=qp}=r;lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=ho,t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ds,format:En,colorSpace:es,depthBuffer:!1},s=zl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(r)),this._blurMaterial=$p(r,t,e)}return s}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,i,s,r){const l=new hn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Fl),u.toneMapping=ii,u.autoClear=!1;const g=new ns({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new ot(new Wt,g);let m=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,m=!0):(g.color.copy(Fl),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const M=this._cubeSize;or(s,T*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ao)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ol[(s-r-1)%Ol.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const d=[];let w=0;for(let b=0;b<xi;++b){const P=b/_,y=Math.exp(-P*P/2);d.push(y),b===0?w+=y:b<m&&(w+=2*y)}for(let b=0;b<d.length;b++)d[b]=d[b]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-i;const M=this._sizeLods[s],R=3*M*(s>T-qi?s-T+qi:0),E=4*(this._cubeSize-M);or(e,R,E,3*M,2*M),l.setRenderTarget(e),l.render(u,ao)}}function Yp(n){const t=[],e=[],i=[];let s=n;const r=n-qi+1+Nl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qi?l=Nl[o-n+qi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,w=new Float32Array(_*g*p),T=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let E=0;E<p;E++){const b=E%3*2/3-1,P=E>2?0:-1,y=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];w.set(y,_*g*E),T.set(f,m*g*E);const x=[E,E,E,E,E,E];M.set(x,d*g*E)}const R=new dn;R.setAttribute("position",new Pn(w,_)),R.setAttribute("uv",new Pn(T,m)),R.setAttribute("faceIndex",new Pn(M,d)),t.push(R),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zl(n,t,e){const i=new Ri(n,t,e);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $p(n,t,e){const i=new Float32Array(xi),s=new N(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Hl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function kl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Kp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Do||l===Io,h=l===Qi||l===ts;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bl(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Bl(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Zp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jp(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let T=0,M=w.length;T<M;T+=3){const R=w[T+0],E=w[T+1],b=w[T+2];f.push(R,E,E,b,b,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let T=0,M=w.length/3-1;T<M;T+=3){const R=T+0,E=T+1,b=T+2;f.push(R,E,E,b,b,R)}}else return;const m=new(Dc(f)?Fc:Nc)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jp(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let w=0;w<g;w++)d+=p[w]*_[w];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function tm(n,t,e){const i=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let R=a.attributes.position.count*M,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const b=new Float32Array(R*E*4*u),P=new Ic(b,R,E,u);P.type=kn,P.needsUpdate=!0;const y=M*4;for(let L=0;L<u;L++){const O=d[L],B=w[L],Y=T[L],Z=R*E*4*L;for(let W=0;W<O.count;W++){const q=W*y;g===!0&&(s.fromBufferAttribute(O,W),b[Z+q+0]=s.x,b[Z+q+1]=s.y,b[Z+q+2]=s.z,b[Z+q+3]=0),_===!0&&(s.fromBufferAttribute(B,W),b[Z+q+4]=s.x,b[Z+q+5]=s.y,b[Z+q+6]=s.z,b[Z+q+7]=0),m===!0&&(s.fromBufferAttribute(Y,W),b[Z+q+8]=s.x,b[Z+q+9]=s.y,b[Z+q+10]=s.z,b[Z+q+11]=Y.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Kt(R,E)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function em(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const qc=new en,Gl=new kc(1,1),Yc=new Ic,$c=new Th,Kc=new zc,Vl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function ls(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Vl[s];if(r===void 0&&(r=new Float32Array(s),Vl[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Rr(n,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function nm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function im(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function rm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function om(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Yl.set(i),n.uniformMatrix2fv(this.addr,!1,Yl),ze(e,i)}}function am(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),ze(e,i)}}function lm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Xl.set(i),n.uniformMatrix4fv(this.addr,!1,Xl),ze(e,i)}}function cm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function hm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function fm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function pm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function gm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function _m(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Gl.compareFunction=Lc,r=Gl):r=qc,e.setTexture2D(t||r,s)}function vm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$c,s)}function xm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kc,s)}function Mm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yc,s)}function Sm(n){switch(n){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Mm}}function ym(n,t){n.uniform1fv(this.addr,t)}function Em(n,t){const e=ls(t,this.size,2);n.uniform2fv(this.addr,e)}function Tm(n,t){const e=ls(t,this.size,3);n.uniform3fv(this.addr,e)}function bm(n,t){const e=ls(t,this.size,4);n.uniform4fv(this.addr,e)}function wm(n,t){const e=ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Am(n,t){const e=ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rm(n,t){const e=ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Cm(n,t){n.uniform1iv(this.addr,t)}function Pm(n,t){n.uniform2iv(this.addr,t)}function Lm(n,t){n.uniform3iv(this.addr,t)}function Dm(n,t){n.uniform4iv(this.addr,t)}function Im(n,t){n.uniform1uiv(this.addr,t)}function Um(n,t){n.uniform2uiv(this.addr,t)}function Nm(n,t){n.uniform3uiv(this.addr,t)}function Fm(n,t){n.uniform4uiv(this.addr,t)}function Om(n,t,e){const i=this.cache,s=t.length,r=Rr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qc,r[o])}function Bm(n,t,e){const i=this.cache,s=t.length,r=Rr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$c,r[o])}function zm(n,t,e){const i=this.cache,s=t.length,r=Rr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Kc,r[o])}function Hm(n,t,e){const i=this.cache,s=t.length,r=Rr(e,s);Be(i,r)||(n.uniform1iv(this.addr,r),ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yc,r[o])}function km(n){switch(n){case 5126:return ym;case 35664:return Em;case 35665:return Tm;case 35666:return bm;case 35674:return wm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Hm}}class Gm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}}class Vm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function $l(n,t){n.seq.push(t),n.map[t.id]=t}function Xm(n,t,e){const i=n.name,s=i.length;for(fo.lastIndex=0;;){const r=fo.exec(i),o=fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$l(e,c===void 0?new Gm(a,n,t):new Vm(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Wm(a),$l(e,u)),e=u}}}class mr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Xm(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Kl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qm=37297;let Ym=0;function $m(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Zl=new zt;function Km(n){ie._getMatrix(Zl,ie.workingColorSpace,n);const t=`mat3( ${Zl.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case _r:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$m(n.getShaderSource(t),o)}else return s}function Zm(n,t){const e=Km(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jm(n,t){let e;switch(t){case ju:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="Cineon";break;case Mc:e="ACESFilmic";break;case eh:e="AgX";break;case nh:e="Neutral";break;case th:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ar=new N;function Jm(){ie.getLuminanceCoefficients(ar);const n=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function t0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function e0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ss(n){return n!==""}function Jl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(n){return n.replace(n0,s0)}const i0=new Map;function s0(n,t){let e=Gt[t];if(e===void 0){const i=i0.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ca(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(r0,o0)}function o0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ec(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function a0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function h0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function d0(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=a0(e),c=l0(e),h=c0(e),u=u0(e),f=h0(e),p=Qm(e),g=t0(r),_=s.createProgram();let m,d,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),d.length>0&&(d+=`
`)):(m=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),d=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Gt.tonemapping_pars_fragment:"",e.toneMapping!==ii?jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=ca(o),o=Jl(o,e),o=Ql(o,e),a=ca(a),a=Jl(a,e),a=Ql(a,e),o=tc(o),a=tc(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=w+m+o,M=w+d+a,R=Kl(s,s.VERTEX_SHADER,T),E=Kl(s,s.FRAGMENT_SHADER,M);s.attachShader(_,R),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(L){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(E).trim();let Z=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,E);else{const q=jl(s,R,"vertex"),X=jl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+q+`
`+X)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||Y==="")&&(W=!1);W&&(L.diagnostics={runnable:Z,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:d}})}s.deleteShader(R),s.deleteShader(E),P=new mr(s,_),y=e0(s,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,qm)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new m0(t),e.set(t,i)),i}}class m0{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}}function g0(n,t,e,i,s,r,o){const a=new wa,l=new p0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,L,O,B){const Y=O.fog,Z=B.geometry,W=y.isMeshStandardMaterial?O.environment:null,q=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),X=q&&q.mapping===wr?q.image.height:null,rt=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,xt=ut!==void 0?ut.length:0;let Ht=0;Z.morphAttributes.position!==void 0&&(Ht=1),Z.morphAttributes.normal!==void 0&&(Ht=2),Z.morphAttributes.color!==void 0&&(Ht=3);let oe,K,st,St;if(rt){const ae=An[rt];oe=ae.vertexShader,K=ae.fragmentShader}else oe=y.vertexShader,K=y.fragmentShader,l.update(y),st=l.getVertexShaderID(y),St=l.getFragmentShaderID(y);const ht=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Zt=B.isInstancedMesh===!0,yt=B.isBatchedMesh===!0,qt=!!y.map,Te=!!y.matcap,se=!!q,D=!!y.aoMap,$e=!!y.lightMap,re=!!y.bumpMap,ge=!!y.normalMap,Tt=!!y.displacementMap,ee=!!y.emissiveMap,Pt=!!y.metalnessMap,kt=!!y.roughnessMap,Ne=y.anisotropy>0,A=y.clearcoat>0,v=y.dispersion>0,z=y.iridescence>0,j=y.sheen>0,Q=y.transmission>0,$=Ne&&!!y.anisotropyMap,wt=A&&!!y.clearcoatMap,ct=A&&!!y.clearcoatNormalMap,Mt=A&&!!y.clearcoatRoughnessMap,At=z&&!!y.iridescenceMap,tt=z&&!!y.iridescenceThicknessMap,pt=j&&!!y.sheenColorMap,It=j&&!!y.sheenRoughnessMap,Dt=!!y.specularMap,at=!!y.specularColorMap,Ft=!!y.specularIntensityMap,I=Q&&!!y.transmissionMap,dt=Q&&!!y.thicknessMap,et=!!y.gradientMap,gt=!!y.alphaMap,nt=y.alphaTest>0,J=!!y.alphaHash,_t=!!y.extensions;let Ot=ii;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const xe={shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:oe,fragmentShader:K,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:St,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:yt,batchingColor:yt&&B._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&B.instanceColor!==null,instancingMorph:Zt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:es,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:Te,envMap:se,envMapMode:se&&q.mapping,envMapCubeUVHeight:X,aoMap:D,lightMap:$e,bumpMap:re,normalMap:ge,displacementMap:f&&Tt,emissiveMap:ee,normalMapObjectSpace:ge&&y.normalMapType===oh,normalMapTangentSpace:ge&&y.normalMapType===Pc,metalnessMap:Pt,roughnessMap:kt,anisotropy:Ne,anisotropyMap:$,clearcoat:A,clearcoatMap:wt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Mt,dispersion:v,iridescence:z,iridescenceMap:At,iridescenceThicknessMap:tt,sheen:j,sheenColorMap:pt,sheenRoughnessMap:It,specularMap:Dt,specularColorMap:at,specularIntensityMap:Ft,transmission:Q,transmissionMap:I,thicknessMap:dt,gradientMap:et,opaque:y.transparent===!1&&y.blending===Yi&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:nt,alphaHash:J,combine:y.combine,mapUv:qt&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:$e&&_(y.lightMap.channel),bumpMapUv:re&&_(y.bumpMap.channel),normalMapUv:ge&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:ee&&_(y.emissiveMap.channel),metalnessMapUv:Pt&&_(y.metalnessMap.channel),roughnessMapUv:kt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:wt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(y.sheenRoughnessMap.channel),specularMapUv:Dt&&_(y.specularMap.channel),specularColorMapUv:at&&_(y.specularColorMap.channel),specularIntensityMapUv:Ft&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:dt&&_(y.thicknessMap.channel),alphaMapUv:gt&&_(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ge||Ne),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(qt||gt),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(w(x,y),T(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function T(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const x=g[y.type];let L;if(x){const O=An[x];L=Oh.clone(O.uniforms)}else L=y.uniforms;return L}function R(y,x){let L;for(let O=0,B=h.length;O<B;O++){const Y=h[O];if(Y.cacheKey===x){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new d0(n,x,y,r),h.push(L)),L}function E(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:P}}function _0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function v0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function nc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ic(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||v0),i.length>1&&i.sort(f||nc),s.length>1&&s.sort(f||nc)}function h(){for(let u=t,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function x0(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new ic,n.set(i,[o])):s>=r.length?(o=new ic,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function M0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new $t};break;case"SpotLight":e={position:new N,direction:new N,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function S0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let y0=0;function E0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function T0(n){const t=new M0,e=S0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const s=new N,r=new Se,o=new Se;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,w=0,T=0,M=0,R=0,E=0,b=0;c.sort(E0);for(let y=0,x=c.length;y<x;y++){const L=c[y],O=L.color,B=L.intensity,Y=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],B);b++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const q=L.shadow,X=e.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,w++}i.directional[p]=W,p++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=Y,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[_]=W;const q=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,q.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=q.matrix,L.castShadow){const X=e.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Z,M++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=W,m++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const q=L.shadow,X=e.get(L);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==R||P.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=b,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=b,i.version=y0++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const T=c[d];if(T.isDirectionalLight){const M=i.directional[u];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(T.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function sc(n){const t=new T0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function b0(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sc(n),t.set(s,[a])):r>=o.length?(a=new sc(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
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
}`;function R0(n,t,e){let i=new Ra;const s=new Kt,r=new Kt,o=new de,a=new Kh({depthPacking:rh}),l=new Zh,c={},h=e.maxTextureSize,u={[si]:tn,[tn]:si,[Rn]:Rn},f=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:w0,fragmentShader:A0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new dn;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let d=this.type;this.render=function(E,b,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ni),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==Hn&&this.type===Hn,Y=d===Hn&&this.type!==Hn;for(let Z=0,W=E.length;Z<W;Z++){const q=E[Z],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const rt=X.getFrameExtents();if(s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||B===!0||Y===!0){const xt=this.type!==Hn?{minFilter:Tn,magFilter:Tn}:{};X.map!==null&&X.map.dispose(),X.map=new Ri(s.x,s.y,xt),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ut=X.getViewportCount();for(let xt=0;xt<ut;xt++){const Ht=X.getViewport(xt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),O.viewport(o),X.updateMatrices(q,xt),i=X.getFrustum(),M(b,P,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===Hn&&w(X,P),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,x,L)};function w(E,b){const P=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ri(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(b,null,P,f,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(b,null,P,p,_,null)}function T(E,b,P,y){let x=null;const L=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=P.isPointLight===!0?l:a,n.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=x.uuid,B=b.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let Z=Y[B];Z===void 0&&(Z=x.clone(),Y[B]=Z,b.addEventListener("dispose",R)),x=Z}if(x.visible=b.visible,x.wireframe=b.wireframe,y===Hn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=n.properties.get(x);O.light=P}return x}function M(E,b,P,y,x){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Hn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const B=t.update(E),Y=E.material;if(Array.isArray(Y)){const Z=B.groups;for(let W=0,q=Z.length;W<q;W++){const X=Z[W],rt=Y[X.materialIndex];if(rt&&rt.visible){const ut=T(E,rt,y,x);E.onBeforeShadow(n,E,b,P,B,ut,X),n.renderBufferDirect(P,null,B,ut,E,X),E.onAfterShadow(n,E,b,P,B,ut,X)}}}else if(Y.visible){const Z=T(E,Y,y,x);E.onBeforeShadow(n,E,b,P,B,Z,null),n.renderBufferDirect(P,null,B,Z,E,null),E.onAfterShadow(n,E,b,P,B,Z,null)}}const O=E.children;for(let B=0,Y=O.length;B<Y;B++)M(O[B],b,P,y,x)}function R(E){E.target.removeEventListener("dispose",R);for(const P in c){const y=c[P],x=E.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const C0={[bo]:wo,[Ao]:Po,[Ro]:Lo,[Ji]:Co,[wo]:bo,[Po]:Ao,[Lo]:Ro,[Co]:Ji};function P0(n,t){function e(){let I=!1;const dt=new de;let et=null;const gt=new de(0,0,0,0);return{setMask:function(nt){et!==nt&&!I&&(n.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){I=nt},setClear:function(nt,J,_t,Ot,xe){xe===!0&&(nt*=Ot,J*=Ot,_t*=Ot),dt.set(nt,J,_t,Ot),gt.equals(dt)===!1&&(n.clearColor(nt,J,_t,Ot),gt.copy(dt))},reset:function(){I=!1,et=null,gt.set(-1,0,0,0)}}}function i(){let I=!1,dt=!1,et=null,gt=null,nt=null;return{setReversed:function(J){if(dt!==J){const _t=t.get("EXT_clip_control");J?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),dt=J;const Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return dt},setTest:function(J){J?ht(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(J){et!==J&&!I&&(n.depthMask(J),et=J)},setFunc:function(J){if(dt&&(J=C0[J]),gt!==J){switch(J){case bo:n.depthFunc(n.NEVER);break;case wo:n.depthFunc(n.ALWAYS);break;case Ao:n.depthFunc(n.LESS);break;case Ji:n.depthFunc(n.LEQUAL);break;case Ro:n.depthFunc(n.EQUAL);break;case Co:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=J}},setLocked:function(J){I=J},setClear:function(J){nt!==J&&(dt&&(J=1-J),n.clearDepth(J),nt=J)},reset:function(){I=!1,et=null,gt=null,nt=null,dt=!1}}}function s(){let I=!1,dt=null,et=null,gt=null,nt=null,J=null,_t=null,Ot=null,xe=null;return{setTest:function(ae){I||(ae?ht(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ae){dt!==ae&&!I&&(n.stencilMask(ae),dt=ae)},setFunc:function(ae,gn,Un){(et!==ae||gt!==gn||nt!==Un)&&(n.stencilFunc(ae,gn,Un),et=ae,gt=gn,nt=Un)},setOp:function(ae,gn,Un){(J!==ae||_t!==gn||Ot!==Un)&&(n.stencilOp(ae,gn,Un),J=ae,_t=gn,Ot=Un)},setLocked:function(ae){I=ae},setClear:function(ae){xe!==ae&&(n.clearStencil(ae),xe=ae)},reset:function(){I=!1,dt=null,et=null,gt=null,nt=null,J=null,_t=null,Ot=null,xe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,T=null,M=null,R=null,E=null,b=new $t(0,0,0),P=0,y=!1,x=null,L=null,O=null,B=null,Y=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=q>=2);let rt=null,ut={};const xt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),oe=new de().fromArray(xt),K=new de().fromArray(Ht);function st(I,dt,et,gt){const nt=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<et;_t++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(dt+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return J}const St={};St[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(n.DEPTH_TEST),o.setFunc(Ji),re(!1),ge(el),ht(n.CULL_FACE),D(ni);function ht(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function bt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Zt(I,dt){return u[I]!==dt?(n.bindFramebuffer(I,dt),u[I]=dt,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function yt(I,dt){let et=p,gt=!1;if(I){et=f.get(dt),et===void 0&&(et=[],f.set(dt,et));const nt=I.textures;if(et.length!==nt.length||et[0]!==n.COLOR_ATTACHMENT0){for(let J=0,_t=nt.length;J<_t;J++)et[J]=n.COLOR_ATTACHMENT0+J;et.length=nt.length,gt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,gt=!0);gt&&n.drawBuffers(et)}function qt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const Te={[vi]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Iu]:n.FUNC_REVERSE_SUBTRACT};Te[Uu]=n.MIN,Te[Nu]=n.MAX;const se={[Fu]:n.ZERO,[Ou]:n.ONE,[Bu]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[Wu]:n.SRC_ALPHA_SATURATE,[Gu]:n.DST_COLOR,[Hu]:n.DST_ALPHA,[zu]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[Vu]:n.ONE_MINUS_DST_COLOR,[ku]:n.ONE_MINUS_DST_ALPHA,[Xu]:n.CONSTANT_COLOR,[qu]:n.ONE_MINUS_CONSTANT_COLOR,[Yu]:n.CONSTANT_ALPHA,[$u]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,dt,et,gt,nt,J,_t,Ot,xe,ae){if(I===ni){_===!0&&(bt(n.BLEND),_=!1);return}if(_===!1&&(ht(n.BLEND),_=!0),I!==Lu){if(I!==m||ae!==y){if((d!==vi||M!==vi)&&(n.blendEquation(n.FUNC_ADD),d=vi,M=vi),ae)switch(I){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.ONE,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,T=null,R=null,E=null,b.set(0,0,0),P=0,m=I,y=ae}return}nt=nt||dt,J=J||et,_t=_t||gt,(dt!==d||nt!==M)&&(n.blendEquationSeparate(Te[dt],Te[nt]),d=dt,M=nt),(et!==w||gt!==T||J!==R||_t!==E)&&(n.blendFuncSeparate(se[et],se[gt],se[J],se[_t]),w=et,T=gt,R=J,E=_t),(Ot.equals(b)===!1||xe!==P)&&(n.blendColor(Ot.r,Ot.g,Ot.b,xe),b.copy(Ot),P=xe),m=I,y=!1}function $e(I,dt){I.side===Rn?bt(n.CULL_FACE):ht(n.CULL_FACE);let et=I.side===tn;dt&&(et=!et),re(et),I.blending===Yi&&I.transparent===!1?D(ni):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const gt=I.stencilWrite;a.setTest(gt),gt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ee(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(I){x!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),x=I)}function ge(I){I!==Ru?(ht(n.CULL_FACE),I!==L&&(I===el?n.cullFace(n.BACK):I===Cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),L=I}function Tt(I){I!==O&&(W&&n.lineWidth(I),O=I)}function ee(I,dt,et){I?(ht(n.POLYGON_OFFSET_FILL),(B!==dt||Y!==et)&&(n.polygonOffset(dt,et),B=dt,Y=et)):bt(n.POLYGON_OFFSET_FILL)}function Pt(I){I?ht(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function kt(I){I===void 0&&(I=n.TEXTURE0+Z-1),rt!==I&&(n.activeTexture(I),rt=I)}function Ne(I,dt,et){et===void 0&&(rt===null?et=n.TEXTURE0+Z-1:et=rt);let gt=ut[et];gt===void 0&&(gt={type:void 0,texture:void 0},ut[et]=gt),(gt.type!==I||gt.texture!==dt)&&(rt!==et&&(n.activeTexture(et),rt=et),n.bindTexture(I,dt||St[I]),gt.type=I,gt.texture=dt)}function A(){const I=ut[rt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(I){oe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function It(I){K.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Dt(I,dt){let et=c.get(dt);et===void 0&&(et=new WeakMap,c.set(dt,et));let gt=et.get(I);gt===void 0&&(gt=n.getUniformBlockIndex(dt,I.name),et.set(I,gt))}function at(I,dt){const gt=c.get(dt).get(I);l.get(dt)!==gt&&(n.uniformBlockBinding(dt,gt,I.__bindingPointIndex),l.set(dt,gt))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},rt=null,ut={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,w=null,T=null,M=null,R=null,E=null,b=new $t(0,0,0),P=0,y=!1,x=null,L=null,O=null,B=null,Y=null,oe.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:bt,bindFramebuffer:Zt,drawBuffers:yt,useProgram:qt,setBlending:D,setMaterial:$e,setFlipSided:re,setCullFace:ge,setLineWidth:Tt,setPolygonOffset:ee,setScissorTest:Pt,activeTexture:kt,bindTexture:Ne,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:At,texImage3D:tt,updateUBOMapping:Dt,uniformBlockBinding:at,texStorage2D:ct,texStorage3D:Mt,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:wt,scissor:pt,viewport:It,reset:Ft}}function L0(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return p?new OffscreenCanvas(A,v):xr("canvas")}function _(A,v,z){let j=1;const Q=Ne(A);if((Q.width>z||Q.height>z)&&(j=z/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*Q.width),wt=Math.floor(j*Q.height);u===void 0&&(u=g($,wt));const ct=v?g($,wt):u;return ct.width=$,ct.height=wt,ct.getContext("2d").drawImage(A,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+wt+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(A,v,z,j,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=v;if(v===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),v===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),v===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){const wt=Q?_r:ie.getTransfer(j);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=wt===he?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function M(A,v){let z;return A?v===null||v===Ai||v===ws?z=n.DEPTH24_STENCIL8:v===kn?z=n.DEPTH32F_STENCIL8:v===bs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ai||v===ws?z=n.DEPTH_COMPONENT24:v===kn?z=n.DEPTH_COMPONENT32F:v===bs&&(z=n.DEPTH_COMPONENT16),z}function R(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Tn&&A.minFilter!==Cn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){const v=A.target;v.removeEventListener("dispose",E),P(v),v.isVideoTexture&&h.delete(v)}function b(A){const v=A.target;v.removeEventListener("dispose",b),x(v)}function P(A){const v=i.get(A);if(v.__webglInit===void 0)return;const z=A.source,j=f.get(z);if(j){const Q=j[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(j).length===0&&f.delete(z)}i.remove(A)}function y(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const z=A.source,j=f.get(z);delete j[v.__cacheKey],o.memory.textures--}function x(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let Q=0;Q<v.__webglFramebuffer[j].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[j][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,Q=z.length;j<Q;j++){const $=i.get(z[j]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(z[j])}i.remove(A)}let L=0;function O(){L=0}function B(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function Y(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function Z(A,v){const z=i.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(z,A,v);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+v)}function W(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){St(z,A,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+v)}function q(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){St(z,A,v);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+v)}function X(A,v){const z=i.get(A);if(A.version>0&&z.__version!==A.version){ht(z,A,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+v)}const rt={[Ts]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Uo]:n.MIRRORED_REPEAT},ut={[Tn]:n.NEAREST,[ih]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Ir]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},xt={[ah]:n.NEVER,[fh]:n.ALWAYS,[lh]:n.LESS,[Lc]:n.LEQUAL,[ch]:n.EQUAL,[dh]:n.GEQUAL,[uh]:n.GREATER,[hh]:n.NOTEQUAL};function Ht(A,v){if(v.type===kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Cn||v.magFilter===Ir||v.magFilter===zs||v.magFilter===Ti||v.minFilter===Cn||v.minFilter===Ir||v.minFilter===zs||v.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,rt[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,rt[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,rt[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Tn||v.minFilter!==zs&&v.minFilter!==Ti||v.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function oe(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));const j=v.source;let Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));const $=Y(v);if($!==A.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[$].usedTimes++;const wt=Q[A.__cacheKey];wt!==void 0&&(Q[A.__cacheKey].usedTimes--,wt.usedTimes===0&&y(v)),A.__cacheKey=$,A.__webglTexture=Q[$].texture}return z}function K(A,v,z){return Math.floor(Math.floor(A/z)/v)}function st(A,v,z,j){const $=A.updateRanges;if($.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,z,j,v.data);else{$.sort((tt,pt)=>tt.start-pt.start);let wt=0;for(let tt=1;tt<$.length;tt++){const pt=$[wt],It=$[tt],Dt=pt.start+pt.count,at=K(It.start,v.width,4),Ft=K(pt.start,v.width,4);It.start<=Dt+1&&at===Ft&&K(It.start+It.count-1,v.width,4)===at?pt.count=Math.max(pt.count,It.start+It.count-pt.start):(++wt,$[wt]=It)}$.length=wt+1;const ct=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),At=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let tt=0,pt=$.length;tt<pt;tt++){const It=$[tt],Dt=Math.floor(It.start/4),at=Math.ceil(It.count/4),Ft=Dt%v.width,I=Math.floor(Dt/v.width),dt=at,et=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ft,I,dt,et,z,j,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ct),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,At)}}function St(A,v,z){let j=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=n.TEXTURE_3D);const Q=oe(A,v),$=v.source;e.bindTexture(j,A.__webglTexture,n.TEXTURE0+z);const wt=i.get($);if($.version!==wt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);const ct=ie.getPrimaries(ie.workingColorSpace),Mt=v.colorSpace===Qn?null:ie.getPrimaries(v.colorSpace),At=v.colorSpace===Qn||ct===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let tt=_(v.image,!1,s.maxTextureSize);tt=kt(v,tt);const pt=r.convert(v.format,v.colorSpace),It=r.convert(v.type);let Dt=T(v.internalFormat,pt,It,v.colorSpace,v.isVideoTexture);Ht(j,v);let at;const Ft=v.mipmaps,I=v.isVideoTexture!==!0,dt=wt.__version===void 0||Q===!0,et=$.dataReady,gt=R(v,tt);if(v.isDepthTexture)Dt=M(v.format===Rs,v.type),dt&&(I?e.texStorage2D(n.TEXTURE_2D,1,Dt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,pt,It,null));else if(v.isDataTexture)if(Ft.length>0){I&&dt&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,Ft[0].width,Ft[0].height);for(let nt=0,J=Ft.length;nt<J;nt++)at=Ft[nt],I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,pt,It,at.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,at.width,at.height,0,pt,It,at.data);v.generateMipmaps=!1}else I?(dt&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,tt.width,tt.height),et&&st(v,tt,pt,It)):e.texImage2D(n.TEXTURE_2D,0,Dt,tt.width,tt.height,0,pt,It,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Dt,Ft[0].width,Ft[0].height,tt.depth);for(let nt=0,J=Ft.length;nt<J;nt++)if(at=Ft[nt],v.format!==En)if(pt!==null)if(I){if(et)if(v.layerUpdates.size>0){const _t=Ul(at.width,at.height,v.format,v.type);for(const Ot of v.layerUpdates){const xe=at.data.subarray(Ot*_t/at.data.BYTES_PER_ELEMENT,(Ot+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Ot,at.width,at.height,1,pt,xe)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,at.width,at.height,tt.depth,pt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?et&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,at.width,at.height,tt.depth,pt,It,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,Dt,at.width,at.height,tt.depth,0,pt,It,at.data)}else{I&&dt&&e.texStorage2D(n.TEXTURE_2D,gt,Dt,Ft[0].width,Ft[0].height);for(let nt=0,J=Ft.length;nt<J;nt++)at=Ft[nt],v.format!==En?pt!==null?I?et&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,pt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,Dt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,pt,It,at.data):e.texImage2D(n.TEXTURE_2D,nt,Dt,at.width,at.height,0,pt,It,at.data)}else if(v.isDataArrayTexture)if(I){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Dt,tt.width,tt.height,tt.depth),et)if(v.layerUpdates.size>0){const nt=Ul(tt.width,tt.height,v.format,v.type);for(const J of v.layerUpdates){const _t=tt.data.subarray(J*nt/tt.data.BYTES_PER_ELEMENT,(J+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,pt,It,_t)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,It,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,tt.width,tt.height,tt.depth,0,pt,It,tt.data);else if(v.isData3DTexture)I?(dt&&e.texStorage3D(n.TEXTURE_3D,gt,Dt,tt.width,tt.height,tt.depth),et&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,It,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,tt.width,tt.height,tt.depth,0,pt,It,tt.data);else if(v.isFramebufferTexture){if(dt)if(I)e.texStorage2D(n.TEXTURE_2D,gt,Dt,tt.width,tt.height);else{let nt=tt.width,J=tt.height;for(let _t=0;_t<gt;_t++)e.texImage2D(n.TEXTURE_2D,_t,Dt,nt,J,0,pt,It,null),nt>>=1,J>>=1}}else if(Ft.length>0){if(I&&dt){const nt=Ne(Ft[0]);e.texStorage2D(n.TEXTURE_2D,gt,Dt,nt.width,nt.height)}for(let nt=0,J=Ft.length;nt<J;nt++)at=Ft[nt],I?et&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,pt,It,at):e.texImage2D(n.TEXTURE_2D,nt,Dt,pt,It,at);v.generateMipmaps=!1}else if(I){if(dt){const nt=Ne(tt);e.texStorage2D(n.TEXTURE_2D,gt,Dt,nt.width,nt.height)}et&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,It,tt)}else e.texImage2D(n.TEXTURE_2D,0,Dt,pt,It,tt);m(v)&&d(j),wt.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ht(A,v,z){if(v.image.length!==6)return;const j=oe(A,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);const $=i.get(Q);if(Q.version!==$.__version||j===!0){e.activeTexture(n.TEXTURE0+z);const wt=ie.getPrimaries(ie.workingColorSpace),ct=v.colorSpace===Qn?null:ie.getPrimaries(v.colorSpace),Mt=v.colorSpace===Qn||wt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const At=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!At&&!tt?pt[J]=_(v.image[J],!0,s.maxCubemapSize):pt[J]=tt?v.image[J].image:v.image[J],pt[J]=kt(v,pt[J]);const It=pt[0],Dt=r.convert(v.format,v.colorSpace),at=r.convert(v.type),Ft=T(v.internalFormat,Dt,at,v.colorSpace),I=v.isVideoTexture!==!0,dt=$.__version===void 0||j===!0,et=Q.dataReady;let gt=R(v,It);Ht(n.TEXTURE_CUBE_MAP,v);let nt;if(At){I&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ft,It.width,It.height);for(let J=0;J<6;J++){nt=pt[J].mipmaps;for(let _t=0;_t<nt.length;_t++){const Ot=nt[_t];v.format!==En?Dt!==null?I?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Ot.width,Ot.height,Dt,Ot.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Ft,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,0,0,Ot.width,Ot.height,Dt,at,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t,Ft,Ot.width,Ot.height,0,Dt,at,Ot.data)}}}else{if(nt=v.mipmaps,I&&dt){nt.length>0&&gt++;const J=Ne(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Ft,J.width,J.height)}for(let J=0;J<6;J++)if(tt){I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Dt,at,pt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,pt[J].width,pt[J].height,0,Dt,at,pt[J].data);for(let _t=0;_t<nt.length;_t++){const xe=nt[_t].image[J].image;I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,xe.width,xe.height,Dt,at,xe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Ft,xe.width,xe.height,0,Dt,at,xe.data)}}else{I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Dt,at,pt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ft,Dt,at,pt[J]);for(let _t=0;_t<nt.length;_t++){const Ot=nt[_t];I?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,0,0,Dt,at,Ot.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,_t+1,Ft,Dt,at,Ot.image[J])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function bt(A,v,z,j,Q,$){const wt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),Mt=T(z.internalFormat,wt,ct,z.colorSpace),At=i.get(v),tt=i.get(z);if(tt.__renderTarget=v,!At.__hasExternalTextures){const pt=Math.max(1,v.width>>$),It=Math.max(1,v.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,Mt,pt,It,v.depth,0,wt,ct,null):e.texImage2D(Q,$,Mt,pt,It,0,wt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Q,tt.__webglTexture,0,Tt(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Q,tt.__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(A,v,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=M(v.stencilBuffer,Q),wt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=Tt(v);ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,$,v.width,v.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,A)}else{const j=v.textures;for(let Q=0;Q<j.length;Q++){const $=j[Q],wt=r.convert($.format,$.colorSpace),ct=r.convert($.type),Mt=T($.internalFormat,wt,ct,$.colorSpace),At=Tt(v);z&&ee(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,Mt,v.width,v.height):ee(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,Mt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const Q=j.__webglTexture,$=Tt(v);if(v.depthTexture.format===As)ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Rs)ee(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function qt(A){const v=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?yt(v.__webglFramebuffer[0],A):yt(v.__webglFramebuffer,A)}else if(z){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=n.createRenderbuffer(),Zt(v.__webglDepthbuffer[j],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Zt(v.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(A,v,z){const j=i.get(A);v!==void 0&&bt(j.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&qt(A)}function se(A){const v=A.texture,z=i.get(A),j=i.get(v);A.addEventListener("dispose",b);const Q=A.textures,$=A.isWebGLCubeRenderTarget===!0,wt=Q.length>1;if(wt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=v.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)z.__webglFramebuffer[ct][Mt]=n.createFramebuffer()}else z.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)z.__webglFramebuffer[ct]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(wt)for(let ct=0,Mt=Q.length;ct<Mt;ct++){const At=i.get(Q[ct]);At.__webglTexture===void 0&&(At.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ee(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const Mt=Q[ct];z.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const At=r.convert(Mt.format,Mt.colorSpace),tt=r.convert(Mt.type),pt=T(Mt.internalFormat,At,tt,Mt.colorSpace,A.isXRRenderTarget===!0),It=Tt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,pt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)bt(z.__webglFramebuffer[ct][Mt],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Mt);else bt(z.__webglFramebuffer[ct],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,Mt=Q.length;ct<Mt;ct++){const At=Q[ct],tt=i.get(At);e.bindTexture(n.TEXTURE_2D,tt.__webglTexture),Ht(n.TEXTURE_2D,At),bt(z.__webglFramebuffer,A,At,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(At)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Ht(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)bt(z.__webglFramebuffer[Mt],A,v,n.COLOR_ATTACHMENT0,ct,Mt);else bt(z.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ct,0);m(v)&&d(ct),e.unbindTexture()}A.depthBuffer&&qt(A)}function D(A){const v=A.textures;for(let z=0,j=v.length;z<j;z++){const Q=v[z];if(m(Q)){const $=w(A),wt=i.get(Q).__webglTexture;e.bindTexture($,wt),d($),e.unbindTexture()}}}const $e=[],re=[];function ge(A){if(A.samples>0){if(ee(A)===!1){const v=A.textures,z=A.width,j=A.height;let Q=n.COLOR_BUFFER_BIT;const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(A),ct=v.length>1;if(ct)for(let At=0;At<v.length;At++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const Mt=A.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<v.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const tt=i.get(v[At]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,Q,n.NEAREST),l===!0&&($e.length=0,re.length=0,$e.push(n.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&($e.push($),re.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<v.length;At++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);const tt=i.get(v[At]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function ee(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function kt(A,v){const z=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==es&&z!==Qn&&(ie.getTransfer(z)===he?(j!==En||Q!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Te,this.setupRenderTarget=se,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ee}function D0(n,t){function e(i,s=Qn){let r;const o=ie.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===xa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ma)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yc)return n.BYTE;if(i===Ec)return n.SHORT;if(i===bs)return n.UNSIGNED_SHORT;if(i===va)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Ds)return n.HALF_FLOAT;if(i===bc)return n.ALPHA;if(i===wc)return n.RGB;if(i===En)return n.RGBA;if(i===As)return n.DEPTH_COMPONENT;if(i===Rs)return n.DEPTH_STENCIL;if(i===Ac)return n.RED;if(i===Sa)return n.RED_INTEGER;if(i===Rc)return n.RG;if(i===ya)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===ur||i===hr||i===dr||i===fr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===No||i===Fo||i===Oo||i===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zo||i===Ho||i===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zo||i===Ho)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===Ko||i===Zo||i===jo||i===Jo||i===Qo||i===ta||i===ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Go)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$o)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ko)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pr||i===na||i===ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pr)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===sa||i===ra||i===oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===pr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===sa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
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

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ri({vertexShader:I0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new Le(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends rs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new N0,m=e.getContextAttributes();let d=null,w=null;const T=[],M=[],R=new Kt;let E=null;const b=new hn;b.viewport=new de;const P=new hn;P.viewport=new de;const y=[b,P],x=new ed;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=T[K];return st===void 0&&(st=new no,T[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=T[K];return st===void 0&&(st=new no,T[K]=st),st.getGripSpace()},this.getHand=function(K){let st=T[K];return st===void 0&&(st=new no,T[K]=st),st.getHandSpace()};function B(K){const st=M.indexOf(K.inputSource);if(st===-1)return;const St=T[st];St!==void 0&&(St.update(K.inputSource,K.frame,c||o),St.dispatchEvent({type:K.type,data:K.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<T.length;K++){const st=M[K];st!==null&&(M[K]=null,T[K].disconnect(st))}L=null,O=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,w=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,ht=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=m.stencil?Rs:As,ht=m.stencil?ws:Ai);const Zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Zt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Ri(f.textureWidth,f.textureHeight,{format:En,type:Dn,depthTexture:new kc(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const St={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ri(p.framebufferWidth,p.framebufferHeight,{format:En,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(K){for(let st=0;st<K.removed.length;st++){const St=K.removed[st],ht=M.indexOf(St);ht>=0&&(M[ht]=null,T[ht].disconnect(St))}for(let st=0;st<K.added.length;st++){const St=K.added[st];let ht=M.indexOf(St);if(ht===-1){for(let Zt=0;Zt<T.length;Zt++)if(Zt>=M.length){M.push(St),ht=Zt;break}else if(M[Zt]===null){M[Zt]=St,ht=Zt;break}if(ht===-1)break}const bt=T[ht];bt&&bt.connect(St)}}const W=new N,q=new N;function X(K,st,St){W.setFromMatrixPosition(st.matrixWorld),q.setFromMatrixPosition(St.matrixWorld);const ht=W.distanceTo(q),bt=st.projectionMatrix.elements,Zt=St.projectionMatrix.elements,yt=bt[14]/(bt[10]-1),qt=bt[14]/(bt[10]+1),Te=(bt[9]+1)/bt[5],se=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],$e=(Zt[8]+1)/Zt[0],re=yt*D,ge=yt*$e,Tt=ht/(-D+$e),ee=Tt*-D;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Pt=yt+Tt,kt=qt+Tt,Ne=re-ee,A=ge+(ht-ee),v=Te*qt/kt*Pt,z=se*qt/kt*Pt;K.projectionMatrix.makePerspective(Ne,A,v,z,Pt,kt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function rt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let st=K.near,St=K.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=P.near=b.near=st,x.far=P.far=b.far=St,(L!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,O=x.far),b.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,x.layers.mask=b.layers.mask|P.layers.mask;const ht=K.parent,bt=x.cameras;rt(x,ht);for(let Zt=0;Zt<bt.length;Zt++)rt(bt[Zt],ht);bt.length===2?X(x,b,P):x.projectionMatrix.copy(b.projectionMatrix),ut(K,x,ht)};function ut(K,st,St){St===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(St.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=aa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let xt=null;function Ht(K,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const St=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ht=!1;St.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let yt=0;yt<St.length;yt++){const qt=St[yt];let Te=null;if(p!==null)Te=p.getViewport(qt);else{const D=u.getViewSubImage(f,qt);Te=D.viewport,yt===0&&(t.setRenderTargetTextures(w,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(w))}let se=y[yt];se===void 0&&(se=new hn,se.layers.enable(yt),se.viewport=new de,y[yt]=se),se.matrix.fromArray(qt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(qt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Te.x,Te.y,Te.width,Te.height),yt===0&&(x.matrix.copy(se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(se)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const yt=u.getDepthInformation(St[0]);yt&&yt.isValid&&yt.texture&&_.init(t,yt,s.renderState)}}for(let St=0;St<T.length;St++){const ht=M[St],bt=T[St];ht!==null&&bt!==void 0&&bt.update(ht,st,c||o)}xt&&xt(K,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const oe=new Xc;oe.setAnimationLoop(Ht),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}}const pi=new In,O0=new Se;function B0(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Oc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,w,T,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=t.get(d),T=w.envMap,M=w.envMapRotation;T&&(m.envMap.value=T,pi.copy(M),pi.x*=-1,pi.y*=-1,pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(pi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const w=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function z0(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const M=T.program;i.uniformBlockBinding(w,M)}function c(w,T){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));const R=T.program;i.updateUBOMapping(w,R);const E=t.render.frame;r[w.id]!==E&&(f(w),r[w.id]=E)}function h(w){const T=u();w.__bindingPointIndex=T;const M=n.createBuffer(),R=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const T=s[w.id],M=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let E=0,b=M.length;E<b;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,x=P.length;y<x;y++){const L=P[y];if(p(L,E,y,R)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let Z=0;Z<B.length;Z++){const W=B[Z],q=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,T,M,R){const E=w.value,b=T+"_"+M;if(R[b]===void 0)return typeof E=="number"||typeof E=="boolean"?R[b]=E:R[b]=E.clone(),!0;{const P=R[b];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[b]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(w){const T=w.uniforms;let M=0;const R=16;for(let b=0,P=T.length;b<P;b++){const y=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,L=y.length;x<L;x++){const O=y[x],B=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,Z=B.length;Y<Z;Y++){const W=B[Y],q=_(W),X=M%R,rt=X%q.boundary,ut=X+rt;M+=rt,ut!==0&&R-ut<q.storage&&(M+=R-ut),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=q.storage}}}const E=M%R;return E>0&&(M+=R-E),w.__size=M,w.__cache={},this}function _(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class H0{constructor(t={}){const{canvas:e=mh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=Je;let E=0,b=0,P=null,y=-1,x=null;const L=new de,O=new de;let B=null;const Y=new $t(0);let Z=0,W=e.width,q=e.height,X=1,rt=null,ut=null;const xt=new de(0,0,W,q),Ht=new de(0,0,W,q);let oe=!1;const K=new Ra;let st=!1,St=!1;const ht=new Se,bt=new Se,Zt=new N,yt=new de,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function se(){return P===null?X:1}let D=i;function $e(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",J,!1),D===null){const U="webgl2";if(D=$e(U,S),D===null)throw $e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let re,ge,Tt,ee,Pt,kt,Ne,A,v,z,j,Q,$,wt,ct,Mt,At,tt,pt,It,Dt,at,Ft,I;function dt(){re=new Zp(D),re.init(),at=new D0(D,re),ge=new Vp(D,re,t,at),Tt=new P0(D,re),ge.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ee=new Qp(D),Pt=new _0,kt=new L0(D,re,Tt,Pt,ge,at,ee),Ne=new Xp(M),A=new Kp(M),v=new sd(D),Ft=new kp(D,v),z=new jp(D,v,ee,Ft),j=new em(D,z,v,ee),pt=new tm(D,ge,kt),Mt=new Wp(Pt),Q=new g0(M,Ne,A,re,ge,Ft,Mt),$=new B0(M,Pt),wt=new x0,ct=new b0(re),tt=new Hp(M,Ne,A,Tt,j,p,l),At=new R0(M,j,ge),I=new z0(D,ee,ge,Tt),It=new Gp(D,re,ee),Dt=new Jp(D,re,ee),ee.programs=Q.programs,M.capabilities=ge,M.extensions=re,M.properties=Pt,M.renderLists=wt,M.shadowMap=At,M.state=Tt,M.info=ee}dt();const et=new F0(M,D);this.xr=et,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(W,q,!1))},this.getSize=function(S){return S.set(W,q)},this.setSize=function(S,U,k=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,q=U,e.width=Math.floor(S*X),e.height=Math.floor(U*X),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*X,q*X).floor()},this.setDrawingBufferSize=function(S,U,k){W=S,q=U,X=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,U,k,G){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,U,k,G),Tt.viewport(L.copy(xt).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ht)},this.setScissor=function(S,U,k,G){S.isVector4?Ht.set(S.x,S.y,S.z,S.w):Ht.set(S,U,k,G),Tt.scissor(O.copy(Ht).multiplyScalar(X).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){Tt.setScissorTest(oe=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let G=0;if(S){let F=!1;if(P!==null){const it=P.texture.format;F=it===Ea||it===ya||it===Sa}if(F){const it=P.texture.type,ft=it===Dn||it===Ai||it===bs||it===ws||it===xa||it===Ma,vt=tt.getClearColor(),mt=tt.getClearAlpha(),Ut=vt.r,Nt=vt.g,Rt=vt.b;ft?(g[0]=Ut,g[1]=Nt,g[2]=Rt,g[3]=mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ut,_[1]=Nt,_[2]=Rt,_[3]=mt,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),k&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),tt.dispose(),wt.dispose(),ct.dispose(),Pt.dispose(),Ne.dispose(),A.dispose(),j.dispose(),Ft.dispose(),I.dispose(),Q.dispose(),et.dispose(),et.removeEventListener("sessionstart",$a),et.removeEventListener("sessionend",Ka),ai.stop()};function gt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=ee.autoReset,U=At.enabled,k=At.autoUpdate,G=At.needsUpdate,F=At.type;dt(),ee.autoReset=S,At.enabled=U,At.autoUpdate=k,At.needsUpdate=G,At.type=F}function J(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function _t(S){const U=S.target;U.removeEventListener("dispose",_t),Ot(U)}function Ot(S){xe(S),Pt.remove(S)}function xe(S){const U=Pt.get(S).programs;U!==void 0&&(U.forEach(function(k){Q.releaseProgram(k)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,G,F,it){U===null&&(U=qt);const ft=F.isMesh&&F.matrixWorld.determinant()<0,vt=yu(S,U,k,G,F);Tt.setMaterial(G,ft);let mt=k.index,Ut=1;if(G.wireframe===!0){if(mt=z.getWireframeAttribute(k),mt===void 0)return;Ut=2}const Nt=k.drawRange,Rt=k.attributes.position;let Yt=Nt.start*Ut,ue=(Nt.start+Nt.count)*Ut;it!==null&&(Yt=Math.max(Yt,it.start*Ut),ue=Math.min(ue,(it.start+it.count)*Ut)),mt!==null?(Yt=Math.max(Yt,0),ue=Math.min(ue,mt.count)):Rt!=null&&(Yt=Math.max(Yt,0),ue=Math.min(ue,Rt.count));const Ce=ue-Yt;if(Ce<0||Ce===1/0)return;Ft.setup(F,G,vt,k,mt);let Me,pe=It;if(mt!==null&&(Me=v.get(mt),pe=Dt,pe.setIndex(Me)),F.isMesh)G.wireframe===!0?(Tt.setLineWidth(G.wireframeLinewidth*se()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(F.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),Tt.setLineWidth(Lt*se()),F.isLineSegments?pe.setMode(D.LINES):F.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else F.isPoints?pe.setMode(D.POINTS):F.isSprite&&pe.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)$i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))pe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,be=F._multiDrawCounts,ne=F._multiDrawCount,an=mt?v.get(mt).bytesPerElement:1,Li=Pt.get(G).currentProgram.getUniforms();for(let ln=0;ln<ne;ln++)Li.setValue(D,"_gl_DrawID",ln),pe.render(Lt[ln]/an,be[ln])}else if(F.isInstancedMesh)pe.renderInstances(Yt,Ce,F.count);else if(k.isInstancedBufferGeometry){const Lt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,Lt);pe.renderInstances(Yt,Ce,be)}else pe.render(Yt,Ce)};function ae(S,U,k){S.transparent===!0&&S.side===Rn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,Bs(S,U,k),S.side=si,S.needsUpdate=!0,Bs(S,U,k),S.side=Rn):Bs(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),d=ct.get(k),d.init(U),T.push(d),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const vt=it[ft];ae(vt,k,F),G.add(vt)}else ae(it,k,F),G.add(it)}),d=T.pop(),G},this.compileAsync=function(S,U,k=null){const G=this.compile(S,U,k);return new Promise(F=>{function it(){if(G.forEach(function(ft){Pt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){F(S);return}setTimeout(it,10)}re.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let gn=null;function Un(S){gn&&gn(S)}function $a(){ai.stop()}function Ka(){ai.start()}const ai=new Xc;ai.setAnimationLoop(Un),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(S){gn=S,et.setAnimationLoop(S),S===null?ai.stop():ai.start()},et.addEventListener("sessionstart",$a),et.addEventListener("sessionend",Ka),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,U,P),d=ct.get(S,T.length),d.init(U),T.push(d),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(bt),St=this.localClippingEnabled,st=Mt.init(this.clippingPlanes,St),m=wt.get(S,w.length),m.init(),w.push(m),et.enabled===!0&&et.isPresenting===!0){const it=M.xr.getDepthSensingMesh();it!==null&&Lr(it,U,-1/0,M.sortObjects)}Lr(S,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(rt,ut),Te=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Te&&tt.addToRenderList(m,S),this.info.render.frame++,st===!0&&Mt.beginShadows();const k=d.state.shadowsArray;At.render(k,S,U),st===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const it=U.cameras;if(F.length>0)for(let ft=0,vt=it.length;ft<vt;ft++){const mt=it[ft];ja(G,F,S,mt)}Te&&tt.render(S);for(let ft=0,vt=it.length;ft<vt;ft++){const mt=it[ft];Za(m,S,mt,mt.viewport)}}else F.length>0&&ja(G,F,S,U),Te&&tt.render(S),Za(m,S,U);P!==null&&b===0&&(kt.updateMultisampleRenderTarget(P),kt.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(M,S,U),Ft.resetDefaultState(),y=-1,x=null,T.pop(),T.length>0?(d=T[T.length-1],st===!0&&Mt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Lr(S,U,k,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){G&&yt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const ft=j.update(S),vt=S.material;vt.visible&&m.push(S,ft,vt,k,yt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const ft=j.update(S),vt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),yt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),yt.copy(ft.boundingSphere.center)),yt.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(vt)){const mt=ft.groups;for(let Ut=0,Nt=mt.length;Ut<Nt;Ut++){const Rt=mt[Ut],Yt=vt[Rt.materialIndex];Yt&&Yt.visible&&m.push(S,ft,Yt,k,yt.z,Rt)}}else vt.visible&&m.push(S,ft,vt,k,yt.z,null)}}const it=S.children;for(let ft=0,vt=it.length;ft<vt;ft++)Lr(it[ft],U,k,G)}function Za(S,U,k,G){const F=S.opaque,it=S.transmissive,ft=S.transparent;d.setupLightsView(k),st===!0&&Mt.setGlobalState(M.clippingPlanes,k),G&&Tt.viewport(L.copy(G)),F.length>0&&Os(F,U,k),it.length>0&&Os(it,U,k),ft.length>0&&Os(ft,U,k),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function ja(S,U,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Ri(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ds:Dn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const it=d.state.transmissionRenderTarget[G.id],ft=G.viewport||L;it.setSize(ft.z*M.transmissionResolutionScale,ft.w*M.transmissionResolutionScale);const vt=M.getRenderTarget(),mt=M.getActiveCubeFace(),Ut=M.getActiveMipmapLevel();M.setRenderTarget(it),M.getClearColor(Y),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Te&&tt.render(k);const Nt=M.toneMapping;M.toneMapping=ii;const Rt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),st===!0&&Mt.setGlobalState(M.clippingPlanes,G),Os(S,k,G),kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it),re.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ue=0,Ce=U.length;ue<Ce;ue++){const Me=U[ue],pe=Me.object,Lt=Me.geometry,be=Me.material,ne=Me.group;if(be.side===Rn&&pe.layers.test(G.layers)){const an=be.side;be.side=tn,be.needsUpdate=!0,Ja(pe,k,G,Lt,be,ne),be.side=an,be.needsUpdate=!0,Yt=!0}}Yt===!0&&(kt.updateMultisampleRenderTarget(it),kt.updateRenderTargetMipmap(it))}M.setRenderTarget(vt,mt,Ut),M.setClearColor(Y,Z),Rt!==void 0&&(G.viewport=Rt),M.toneMapping=Nt}function Os(S,U,k){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,it=S.length;F<it;F++){const ft=S[F],vt=ft.object,mt=ft.geometry,Ut=ft.group;let Nt=ft.material;Nt.allowOverride===!0&&G!==null&&(Nt=G),vt.layers.test(k.layers)&&Ja(vt,U,k,mt,Nt,Ut)}}function Ja(S,U,k,G,F,it){S.onBeforeRender(M,U,k,G,F,it),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,U,k,G,S,it),F.transparent===!0&&F.side===Rn&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,M.renderBufferDirect(k,U,G,F,S,it),F.side=si,F.needsUpdate=!0,M.renderBufferDirect(k,U,G,F,S,it),F.side=Rn):M.renderBufferDirect(k,U,G,F,S,it),S.onAfterRender(M,U,k,G,F,it)}function Bs(S,U,k){U.isScene!==!0&&(U=qt);const G=Pt.get(S),F=d.state.lights,it=d.state.shadowsArray,ft=F.state.version,vt=Q.getParameters(S,F.state,it,U,k),mt=Q.getProgramCacheKey(vt);let Ut=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?A:Ne).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",_t),Ut=new Map,G.programs=Ut);let Nt=Ut.get(mt);if(Nt!==void 0){if(G.currentProgram===Nt&&G.lightsStateVersion===ft)return tl(S,vt),Nt}else vt.uniforms=Q.getUniforms(S),S.onBeforeCompile(vt,M),Nt=Q.acquireProgram(vt,mt),Ut.set(mt,Nt),G.uniforms=vt.uniforms;const Rt=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Mt.uniform),tl(S,vt),G.needsLights=Tu(S),G.lightsStateVersion=ft,G.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Nt,G.uniformsList=null,Nt}function Qa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function tl(S,U){const k=Pt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function yu(S,U,k,G,F){U.isScene!==!0&&(U=qt),kt.resetTextureUnits();const it=U.fog,ft=G.isMeshStandardMaterial?U.environment:null,vt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:es,mt=(G.isMeshStandardMaterial?A:Ne).get(G.envMap||ft),Ut=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Nt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,ue=!!k.morphAttributes.color;let Ce=ii;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ce=M.toneMapping);const Me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=Me!==void 0?Me.length:0,Lt=Pt.get(G),be=d.state.lights;if(st===!0&&(St===!0||S!==x)){const Ke=S===x&&G.id===y;Mt.setState(G,S,Ke)}let ne=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==be.state.version||Lt.outputColorSpace!==vt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==mt||G.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Mt.numPlanes||Lt.numIntersection!==Mt.numIntersection)||Lt.vertexAlphas!==Ut||Lt.vertexTangents!==Nt||Lt.morphTargets!==Rt||Lt.morphNormals!==Yt||Lt.morphColors!==ue||Lt.toneMapping!==Ce||Lt.morphTargetsCount!==pe)&&(ne=!0):(ne=!0,Lt.__version=G.version);let an=Lt.currentProgram;ne===!0&&(an=Bs(G,U,F));let Li=!1,ln=!1,hs=!1;const ye=an.getUniforms(),fn=Lt.uniforms;if(Tt.useProgram(an.program)&&(Li=!0,ln=!0,hs=!0),G.id!==y&&(y=G.id,ln=!0),Li||x!==S){Tt.buffers.depth.getReversed()?(ht.copy(S.projectionMatrix),_h(ht),vh(ht),ye.setValue(D,"projectionMatrix",ht)):ye.setValue(D,"projectionMatrix",S.projectionMatrix),ye.setValue(D,"viewMatrix",S.matrixWorldInverse);const nn=ye.map.cameraPosition;nn!==void 0&&nn.setValue(D,Zt.setFromMatrixPosition(S.matrixWorld)),ge.logarithmicDepthBuffer&&ye.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,ln=!0,hs=!0)}if(F.isSkinnedMesh){ye.setOptional(D,F,"bindMatrix"),ye.setOptional(D,F,"bindMatrixInverse");const Ke=F.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ye.setValue(D,"boneTexture",Ke.boneTexture,kt))}F.isBatchedMesh&&(ye.setOptional(D,F,"batchingTexture"),ye.setValue(D,"batchingTexture",F._matricesTexture,kt),ye.setOptional(D,F,"batchingIdTexture"),ye.setValue(D,"batchingIdTexture",F._indirectTexture,kt),ye.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&ye.setValue(D,"batchingColorTexture",F._colorsTexture,kt));const pn=k.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&pt.update(F,k,an),(ln||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,ye.setValue(D,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(fn.envMap.value=mt,fn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),ln&&(ye.setValue(D,"toneMappingExposure",M.toneMappingExposure),Lt.needsLights&&Eu(fn,hs),it&&G.fog===!0&&$.refreshFogUniforms(fn,it),$.refreshMaterialUniforms(fn,G,X,q,d.state.transmissionRenderTarget[S.id]),mr.upload(D,Qa(Lt),fn,kt)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(mr.upload(D,Qa(Lt),fn,kt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(D,"center",F.center),ye.setValue(D,"modelViewMatrix",F.modelViewMatrix),ye.setValue(D,"normalMatrix",F.normalMatrix),ye.setValue(D,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ke=G.uniformsGroups;for(let nn=0,Dr=Ke.length;nn<Dr;nn++){const li=Ke[nn];I.update(li,an),I.bind(li,an)}}return an}function Eu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Tu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,U,k){const G=Pt.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Pt.get(S.texture).__webglTexture=U,Pt.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:k,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=Pt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const bu=D.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){P=S,E=U,b=k;let G=!0,F=null,it=!1,ft=!1;if(S){const mt=Pt.get(S);if(mt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(mt.__webglFramebuffer===void 0)kt.setupRenderTarget(S);else if(mt.__hasExternalTextures)kt.rebindTextures(S,Pt.get(S.texture).__webglTexture,Pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(mt.__boundDepthTexture!==Rt){if(Rt!==null&&Pt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const Nt=Pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?F=Nt[U][k]:F=Nt[U],it=!0):S.samples>0&&kt.useMultisampledRTT(S)===!1?F=Pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[k]:F=Nt,L.copy(S.viewport),O.copy(S.scissor),B=S.scissorTest}else L.copy(xt).multiplyScalar(X).floor(),O.copy(Ht).multiplyScalar(X).floor(),B=oe;if(k!==0&&(F=bu),Tt.bindFramebuffer(D.FRAMEBUFFER,F)&&G&&Tt.drawBuffers(S,F),Tt.viewport(L),Tt.scissor(O),Tt.setScissorTest(B),it){const mt=Pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,k)}else if(ft){const mt=Pt.get(S.texture),Ut=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,k,Ut)}else if(S!==null&&k!==0){const mt=Pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(S,U,k,G,F,it,ft,vt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt){Tt.bindFramebuffer(D.FRAMEBUFFER,mt);try{const Ut=S.textures[vt],Nt=Ut.format,Rt=Ut.type;if(!ge.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&k>=0&&k<=S.height-F&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(U,k,G,F,at.convert(Nt),at.convert(Rt),it))}finally{const Ut=P!==null?Pt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,G,F,it,ft,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(mt=mt[ft]),mt)if(U>=0&&U<=S.width-G&&k>=0&&k<=S.height-F){Tt.bindFramebuffer(D.FRAMEBUFFER,mt);const Ut=S.textures[vt],Nt=Ut.format,Rt=Ut.type;if(!ge.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+vt),D.readPixels(U,k,G,F,at.convert(Nt),at.convert(Rt),0);const ue=P!==null?Pt.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,ue);const Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await gh(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Yt),D.deleteSync(Ce),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const G=Math.pow(2,-k),F=Math.floor(S.image.width*G),it=Math.floor(S.image.height*G),ft=U!==null?U.x:0,vt=U!==null?U.y:0;kt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ft,vt,F,it),Tt.unbindTexture()};const wu=D.createFramebuffer(),Au=D.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,G=null,F=0,it=null){it===null&&(F!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=F,F=0):it=0);let ft,vt,mt,Ut,Nt,Rt,Yt,ue,Ce;const Me=S.isCompressedTexture?S.mipmaps[it]:S.image;if(k!==null)ft=k.max.x-k.min.x,vt=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,Ut=k.min.x,Nt=k.min.y,Rt=k.isBox3?k.min.z:0;else{const pn=Math.pow(2,-F);ft=Math.floor(Me.width*pn),vt=Math.floor(Me.height*pn),S.isDataArrayTexture?mt=Me.depth:S.isData3DTexture?mt=Math.floor(Me.depth*pn):mt=1,Ut=0,Nt=0,Rt=0}G!==null?(Yt=G.x,ue=G.y,Ce=G.z):(Yt=0,ue=0,Ce=0);const pe=at.convert(U.format),Lt=at.convert(U.type);let be;U.isData3DTexture?(kt.setTexture3D(U,0),be=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),be=D.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),be=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),an=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Li=D.getParameter(D.UNPACK_SKIP_PIXELS),ln=D.getParameter(D.UNPACK_SKIP_ROWS),hs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt);const ye=S.isDataArrayTexture||S.isData3DTexture,fn=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const pn=Pt.get(S),Ke=Pt.get(U),nn=Pt.get(pn.__renderTarget),Dr=Pt.get(Ke.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let li=0;li<mt;li++)ye&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(S).__webglTexture,F,Rt+li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pt.get(U).__webglTexture,it,Ce+li)),D.blitFramebuffer(Ut,Nt,ft,vt,Yt,ue,ft,vt,D.DEPTH_BUFFER_BIT,D.NEAREST);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Pt.has(S)){const pn=Pt.get(S),Ke=Pt.get(U);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,wu),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Au);for(let nn=0;nn<mt;nn++)ye?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,F,Rt+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,F),fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,it,Ce+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,it),F!==0?D.blitFramebuffer(Ut,Nt,ft,vt,Yt,ue,ft,vt,D.COLOR_BUFFER_BIT,D.NEAREST):fn?D.copyTexSubImage3D(be,it,Yt,ue,Ce+nn,Ut,Nt,ft,vt):D.copyTexSubImage2D(be,it,Yt,ue,Ut,Nt,ft,vt);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(be,it,Yt,ue,Ce,ft,vt,mt,pe,Lt,Me.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(be,it,Yt,ue,Ce,ft,vt,mt,pe,Me.data):D.texSubImage3D(be,it,Yt,ue,Ce,ft,vt,mt,pe,Lt,Me):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,Yt,ue,ft,vt,pe,Lt,Me.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,Yt,ue,Me.width,Me.height,pe,Me.data):D.texSubImage2D(D.TEXTURE_2D,it,Yt,ue,ft,vt,pe,Lt,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,an),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Li),D.pixelStorei(D.UNPACK_SKIP_ROWS,ln),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hs),it===0&&U.generateMipmaps&&D.generateMipmap(be),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,G=null,F=0){return $i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,G,F)},this.initRenderTarget=function(S){Pt.get(S).__webglFramebuffer===void 0&&kt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?kt.setTextureCube(S,0):S.isData3DTexture?kt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?kt.setTexture2DArray(S,0):kt.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){E=0,b=0,P=null,Tt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const k0=[{id:"H-001",night:1,segment:1,category:"OBJ",rule:"gaze",effect:"blood_trail",reveal:"…바닥의 검붉은 자국은, 원래 없던 것이었다."},{id:"H-002",night:2,segment:1,category:"OBJ",rule:"gaze",effect:"skull",reveal:"…배출장 위에 놓여 있던 것. 그건, 쓰레기가 아니었다."},{id:"H-003",night:2,segment:1,category:"HUM",rule:"avert",effect:"face_window",reveal:"…창문에서 내려다보던 얼굴. 그 집은, 빈집이다."},{id:"H-004",night:1,segment:2,category:"OBJ",rule:"gaze",effect:"handprints",reveal:"…세탁소 셔터의 손자국들은, 안쪽에서 찍힌 것이었다."},{id:"H-005",night:1,segment:3,category:"HUM",rule:"avert",effect:"swing_figure",reveal:"…그네에 앉아 있던 것은, 아이가 아니었다."},{id:"H-006",night:2,segment:3,category:"HUM",rule:"avert",effect:"eyes",reveal:"…펜스 뒤 어둠에서, 눈이 이쪽을 보고 있었다."},{id:"H-007",night:1,segment:4,category:"HUM",rule:"avert",effect:"bus_figure",reveal:"…정류장에 앉아 있던 사람. 버스는, 새벽에 안 다닌다."},{id:"H-008",night:1,segment:5,category:"OBJ",rule:"gaze",effect:"drag_mark",reveal:"…무언가를 끌고 간 자국이, 어둠 쪽으로 이어져 있었다."},{id:"H-009",night:2,segment:0,category:"HUM",rule:"avert",effect:"figure",reveal:"…등을 돌리고 서 있던 사람. 다시 봤을 때는, 없었다."},{id:"H-010",night:3,segment:1,category:"OBJ",rule:"gaze",effect:"shoes",reveal:"…계단 앞에 가지런히 놓인 신발은, 누구의 것도 아니었다."},{id:"H-011",night:3,segment:2,category:"LGT",rule:"gaze",effect:"shutter_glow",reveal:"…닫힌 셔터 밑에서 새어 나오던 빛은, 안에서 켠 것이었다."},{id:"H-012",night:3,segment:3,category:"HUM",rule:"avert",effect:"slide_figure",reveal:"…미끄럼틀 지붕 위에 서 있던 것은, 올라갈 수 없는 자리에 있었다."},{id:"H-015",night:3,segment:5,category:"OBJ",rule:"gaze",effect:"open_shutter",reveal:"…반쯤 올라간 셔터 안은, 불도 사람도 없었다."},{id:"H-016",night:4,segment:4,category:"OBJ",rule:"gaze",effect:"bench_shoes",reveal:"…벤치 위에 신발만 가지런히. 신고 갈 사람이, 없었다."},{id:"H-017",night:5,segment:2,category:"LGT",rule:"gaze",effect:"sign_lit",reveal:"…다 꺼진 상가에서, 그 간판 하나만 켜져 있었다."},{id:"H-013",night:4,segment:1,category:"HUM",rule:"avert",effect:"bike_figure",reveal:"…오토바이에 걸터앉아 있던 것은, 내가 지나갈 때까지 그대로였다."},{id:"H-014",night:4,segment:4,category:"HUM",rule:"avert",effect:"across_figure",reveal:"…길 건너에 서 있던 것은, 신호가 바뀌어도 건너지 않았다."},{id:"H-019",night:2,segment:2,category:"OBJ",rule:"gaze",effect:"lone_shadow",reveal:"…가로등 밑에, 그림자만 있었다. 그걸 만든 것은 없었다."},{id:"H-020",night:3,segment:3,category:"HUM",rule:"avert",effect:"fence_hands",reveal:"…펜스를 잡은 손이, 넷이었다."}],G0=[{night:1,onboarding:!0,intro:`튀김을 먹고 나왔다. 배가 부르다.
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
…안 가도 되나.`}]}],Jt={segments:5,segLength:36,corridorHalfWidth:3,walkSpeed:3.2,strafeFactor:.5,backFactor:.65,baseAnomalyChance:.4,chancePerMinute:.06,depthLimit:6,stretchDepthCost:2,swarmMax:2,stillGrowSec:4,stillDrainMul:.6,growDepthCost:1},ys=1.4,ua=k0;function V0(n){const t=oi(n).pressure??{};return{chanceBonus:t.chanceBonus??0,swarmFloor:t.swarmFloor??0}}const Zc=G0,ei=Zc.length;function oi(n){return Zc[Math.min(Math.max(n,1),ei)-1]}const Vt={nightLabel:n=>`밤 ${n}`,segNames:["원룸 골목","상가 골목","놀이터 옆길","정류장 앞","먹자골목 입구"],segLabel:(n,t,e)=>`${n}/${t} — ${Vt.segNames[e-1]}`,tutBeats:[{theme:4,z:0,text:"힘든 하루였다."},{theme:4,z:-11,text:"…저 앞에 현수막이 보인다."},{theme:4,z:-19,text:`FF-1204.
…XXXXL 감자튀김이다.`},{theme:4,z:-28.6,text:"…이건 못 참지."},{theme:5,z:-12,text:`먹자골목 입구.
간판에 불이 켜져 있다.`}],tutShopArrive:`FF-1204. 새 가게 냄새와 기름 냄새.
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
걸어온 길이, 하나도 기억나지 않는다.`,softFailBtn:"…다시 걷는다",couponOverflow:"…여섯 번째 도장은, 칸 밖에 찍혀 있다."};function W0(n){return n<=0?"crispy":n<=2?"lukewarm":"soggy"}function X0(n){return 1+Math.min(Jt.swarmMax,n)}const rc=2.4;class q0{constructor(t){this.yaw=0,this.pitch=0,this.touchForward=0,this.touchStrafe=0,this.keys=new Set,this.locked=!1,this.lookTouch=null,this.usesTouch=!1,this.canvas=t,window.addEventListener("keydown",e=>this.keys.add(e.code)),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas}),document.addEventListener("mousemove",e=>{this.locked&&this.applyLook(e.movementX,e.movementY)}),t.addEventListener("pointerdown",e=>this.onPointerDown(e)),t.addEventListener("pointermove",e=>this.onPointerMove(e)),t.addEventListener("pointerup",e=>this.onPointerEnd(e)),t.addEventListener("pointercancel",e=>this.onPointerEnd(e))}activate(){var t,e;this.usesTouch||(e=(t=this.canvas).requestPointerLock)==null||e.call(t)}applyLook(t,e){this.yaw-=t*.0024,this.pitch-=e*.0024;const s=Math.PI/2-.05;this.pitch=Math.max(-s,Math.min(s,this.pitch))}onPointerDown(t){var e,i;if(t.pointerType==="mouse"){this.locked||(i=(e=this.canvas).requestPointerLock)==null||i.call(e);return}this.usesTouch=!0,this.lookTouch||(this.lookTouch={id:t.pointerId,x:t.clientX,y:t.clientY})}onPointerMove(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.applyLook((t.clientX-this.lookTouch.x)*rc,(t.clientY-this.lookTouch.y)*rc),this.lookTouch.x=t.clientX,this.lookTouch.y=t.clientY)}onPointerEnd(t){this.lookTouch&&t.pointerId===this.lookTouch.id&&(this.lookTouch=null)}isDown(t){return this.keys.has(t)}getMove(){let t=0,e=0;return(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(e+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(e-=1),t+=this.touchForward,e+=this.touchStrafe,{forward:Math.max(-1,Math.min(1,t)),strafe:Math.max(-1,Math.min(1,e))}}}class Y0{constructor(){this.status=document.getElementById("status"),this.msg=document.getElementById("msg"),this.fade=document.getElementById("fade"),this.touchHint=document.getElementById("touch-hint"),this.msgTimer=0,this.hintTimer=0}setStatus(t){this.status.textContent=t}setStatusStretch(t){this.status.style.opacity="0",setTimeout(()=>{this.status.textContent=t,this.status.style.opacity="1"},320)}showHint(t,e){this.touchHint.textContent=t,this.touchHint.style.display="block",window.clearTimeout(this.hintTimer),e&&(this.hintTimer=window.setTimeout(()=>this.hideHint(),e))}hideHint(){this.touchHint.style.display="none"}say(t,e=2600){this.msg.textContent=t,this.msg.style.opacity="1",window.clearTimeout(this.msgTimer),this.msgTimer=window.setTimeout(()=>{this.msg.style.opacity="0"},e)}async fadeOut(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="1",await new Promise(e=>setTimeout(e,t+60))}async fadeIn(t=1200){this.fade.style.transitionDuration=`${t}ms`,this.fade.style.opacity="0",await new Promise(e=>setTimeout(e,t+60))}async arrivalScene(t){var a;(a=document.exitPointerLock)==null||a.call(document);const e=document.createElement("div");e.className="overlay",e.style.opacity="0",e.style.background=t.bg,e.style.transitionDuration="1.4s";const i=document.createElement("div");i.className="sub",i.textContent=t.gauge;const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.style.transition="opacity 1.1s",s.textContent=t.result;const r=document.createElement("button");r.textContent=t.steps[0],e.append(i,s,r),document.body.append(e),requestAnimationFrame(()=>e.style.opacity="1");let o=0;await new Promise(l=>{r.addEventListener("click",()=>{if(o>=2){l();return}if(t.onBite(o),o+=1,o<2){r.textContent=t.steps[1];return}r.disabled=!0,r.style.opacity="0.4",setTimeout(()=>{s.style.opacity="0",setTimeout(()=>{s.textContent=t.epilogue,s.style.opacity="1",r.textContent=t.endLabel,r.disabled=!1,r.style.opacity=""},1150)},1400)})}),e.style.opacity="0",setTimeout(()=>e.remove(),1500)}async blackScreen(t,e){var o;(o=document.exitPointerLock)==null||o.call(document);const i=document.createElement("div");i.className="overlay",i.style.opacity="0",i.style.background="#000";const s=document.createElement("div");s.className="quote",s.style.whiteSpace="pre-line",s.style.lineHeight="2",s.textContent=t;const r=document.createElement("button");r.textContent=e,i.append(s,r),document.body.append(i),requestAnimationFrame(()=>i.style.opacity="1"),await new Promise(a=>{r.addEventListener("click",()=>a(),{once:!0})}),i.style.opacity="0",setTimeout(()=>i.remove(),900)}}const $0="#05070e",K0="#0d1424",Z0="#04060c",j0="#03050a",J0="#090d16",Q0="#ffb23e";function tg(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function eg(n,t,e){const i=tg(12040);n.clearRect(0,0,t,e);const s=t*.5,r=e>t,o=e*(r?.62:.76),a=r?Math.max(t,e*.52):t,l=n.createLinearGradient(0,0,0,e);l.addColorStop(0,$0),l.addColorStop(.62,K0),l.addColorStop(1,"#070a12"),n.fillStyle=l,n.fillRect(0,0,t,e);const c=n.createRadialGradient(s,o,0,s,o,t*.62);c.addColorStop(0,"rgba(58,78,120,0.36)"),c.addColorStop(.45,"rgba(38,52,86,0.16)"),c.addColorStop(1,"rgba(20,28,48,0)"),n.fillStyle=c,n.fillRect(0,0,t,e),n.fillStyle=J0,n.beginPath(),n.moveTo(0,e),n.lineTo(s-t*.055,o),n.lineTo(s+t*.055,o),n.lineTo(t,e),n.closePath(),n.fill();const h=9;for(const R of[-1,1])for(let E=0;E<h;E++){const b=E/h,P=(E+1)/h,y=q=>s+R*(t*.05+a*.62*Math.pow(1-q,1.7)),x=y(b),L=y(P),O=q=>o-e*(.62*Math.pow(1-q,1.25)+.02),B=(.5-i())*e*.1*(1-b),Y=O(b)+B;n.fillStyle=R<0?Z0:j0,n.fillRect(Math.min(x,L),Y,Math.abs(L-x)+1,e-Y);const Z=Math.max(1,Math.round(2*(1-b)+1)),W=Math.max(1.5,(L-x)*R*.16);for(let q=0;q<Z;q++){const X=x+(L-x)*((q+.5)/Z);for(let rt=0;rt<4;rt++){const ut=Y+(e-Y)*(.12+rt*.15);if(ut>e*.95)break;const xt=i();n.fillStyle=xt>.9?"rgba(150,172,208,0.30)":"rgba(120,140,178,0.075)",n.fillRect(X-W/2,ut,Math.abs(W),Math.abs(W)*1.3)}}}n.strokeStyle="rgba(2,3,7,0.92)",n.lineCap="butt";for(const R of[-1,1]){for(let E=0;E<4;E++){const b=.06+E*.21,P=s+R*(t*.05+a*.58*Math.pow(1-b,1.7)),y=o-e*(.6*Math.pow(1-b,1.15)+.05);n.lineWidth=Math.max(1,t*.0045*(1-b)+.8),n.beginPath(),n.moveTo(P,y),n.lineTo(P,e),n.stroke(),n.lineWidth=Math.max(.8,t*.003*(1-b)+.6),n.beginPath(),n.moveTo(P-t*.022*(1-b)-2,y+e*.018),n.lineTo(P+t*.022*(1-b)+2,y+e*.018),n.stroke()}for(let E=0;E<3;E++){const b=e*(.012+E*.016);n.lineWidth=Math.max(.6,t*.0012),n.beginPath();const P=s+R*(t*.05+a*.58),y=o-e*.6+b,x=s+R*t*.05,L=o-e*.09+b*.3;n.moveTo(P,y),n.quadraticCurveTo((P+x)/2,(y+L)/2+e*.05,x,L),n.stroke()}}const u=s+t*.2,f=o-e*.1,p=n.createRadialGradient(u,f,0,u,f,t*.16);p.addColorStop(0,"rgba(255,178,62,0.26)"),p.addColorStop(.35,"rgba(255,150,60,0.08)"),p.addColorStop(1,"rgba(255,140,60,0)"),n.fillStyle=p,n.fillRect(u-t*.17,f-t*.17,t*.34,t*.34),n.fillStyle=Q0,n.globalAlpha=.8,n.fillRect(u-t*.0035,f-e*.01,t*.007,e*.02),n.globalAlpha=1,n.fillStyle="#0b0f18",n.fillRect(u-t*.0013,f,t*.0026,e);const g=n.createRadialGradient(u,o+e*.12,0,u,o+e*.12,t*.11);g.addColorStop(0,"rgba(255,170,70,0.11)"),g.addColorStop(1,"rgba(255,170,70,0)"),n.fillStyle=g,n.fillRect(u-t*.12,o,t*.24,e*.3);const _=e*.075,m=u-t*.075,d=o+e*.055;n.fillStyle="#03050a",n.beginPath(),n.ellipse(m,d-_*.88,_*.13,_*.15,0,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(m-_*.19,d),n.lineTo(m-_*.15,d-_*.72),n.lineTo(m+_*.15,d-_*.72),n.lineTo(m+_*.19,d),n.closePath(),n.fill();const w=n.createRadialGradient(s,o-e*.02,0,s,o-e*.02,t*.14);w.addColorStop(0,"rgba(2,3,6,0.97)"),w.addColorStop(1,"rgba(2,3,6,0)"),n.fillStyle=w,n.fillRect(s-t*.16,o-e*.18,t*.32,e*.3);const T=n.createLinearGradient(0,0,0,e*.66);T.addColorStop(0,"rgba(4,6,12,0.62)"),T.addColorStop(.5,"rgba(4,6,12,0.44)"),T.addColorStop(1,"rgba(4,6,12,0)"),n.fillStyle=T,n.fillRect(0,0,t,e*.66);const M=n.createRadialGradient(s,o*.92,e*.16,s,o*.92,Math.max(t,e)*.78);M.addColorStop(0,"rgba(0,0,0,0)"),M.addColorStop(1,"rgba(0,0,0,0.84)"),n.fillStyle=M,n.fillRect(0,0,t,e),n.globalCompositeOperation="lighter",n.fillStyle="rgba(30,44,74,0.10)",n.fillRect(0,0,t,e),n.globalCompositeOperation="source-over"}function ng(){const n=document.getElementById("start");if(!n)return;const t=document.createElement("canvas");t.id="title-art",n.insertBefore(t,n.firstChild);const e=()=>{const r=Math.min(window.devicePixelRatio||1,1.5),o=n.clientWidth||window.innerWidth,a=n.clientHeight||window.innerHeight;t.width=Math.max(1,Math.round(o*r)),t.height=Math.max(1,Math.round(a*r));const l=t.getContext("2d");l&&(l.setTransform(r,0,0,r,0,0),eg(l,o,a))};e();let i;const s=()=>{window.clearTimeout(i),i=window.setTimeout(e,120)};window.addEventListener("resize",s),window.addEventListener("orientationchange",s)}const oc=.9;class ig{constructor(){this.ctx=null,this.master=null,this.ambGain=null,this.stepTimer=0,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}const t=new AudioContext;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:oc,this.master.connect(t.destination);const e=t.createBufferSource();e.buffer=this.noiseBuffer(4),e.loop=!0;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=320;const s=t.createOscillator();s.frequency.value=.07;const r=t.createGain();r.gain.value=140,s.connect(r).connect(i.frequency),this.ambGain=t.createGain(),this.ambGain.gain.value=.05,e.connect(i).connect(this.ambGain).connect(this.master),e.start(),s.start()}suspend(){var t;(t=this.ctx)==null||t.suspend()}resume(){var t;(t=this.ctx)==null||t.resume()}setMuted(t){if(this.muted=t,!this.ctx||!this.master)return;const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(this.master.gain.value,e),this.master.gain.linearRampToValueAtTime(t?0:oc,e+.15)}duck(t){if(!this.ctx||!this.ambGain)return;const e=this.ctx.currentTime;this.ambGain.gain.cancelScheduledValues(e),this.ambGain.gain.setValueAtTime(this.ambGain.gain.value,e),this.ambGain.gain.linearRampToValueAtTime(t?.006:.05,e+2.2)}update(t,e){if(this.ctx){if(!e){this.stepTimer=.12;return}this.stepTimer-=t,this.stepTimer<=0&&(this.footstep(),this.stepTimer=.6)}}stretch(){const t=this.ctx;if(!t||!this.master)return;const e=t.currentTime,i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(96,e),i.frequency.exponentialRampToValueAtTime(27,e+1.5);const s=t.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.1,e+.12),s.gain.exponentialRampToValueAtTime(1e-4,e+1.6),i.connect(s).connect(this.master),i.start(e),i.stop(e+1.7);const r=t.createBufferSource();r.buffer=this.noiseBuffer(1.4);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(700,e),o.frequency.linearRampToValueAtTime(140,e+1.3);const a=t.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(.05,e+.35),a.gain.exponentialRampToValueAtTime(1e-4,e+1.35),r.connect(o).connect(a).connect(this.master),r.start(e),r.stop(e+1.45)}footstep(){const t=this.ctx;if(!t||!this.master)return;const e=t.createBufferSource();e.buffer=this.noiseBuffer(.08);const i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=170+Math.random()*60,i.Q.value=1.2;const s=t.createGain(),r=t.currentTime;s.gain.setValueAtTime(.1,r),s.gain.exponentialRampToValueAtTime(.001,r+.09),e.connect(i).connect(s).connect(this.master),e.start(),e.stop(r+.1)}crunch(t){const e=this.ctx;if(!e||!this.master)return;const i=Math.max(0,Math.min(1,t)),s=i>.6?3:i>.3?2:1;for(let r=0;r<s;r++){const o=e.currentTime+r*.5,a=5+Math.floor(i*7);for(let l=0;l<a;l++){const c=e.createBufferSource();c.buffer=this.noiseBuffer(.03);const h=e.createBiquadFilter();h.type="highpass",h.frequency.value=1200+i*2500+Math.random()*800;const u=e.createGain(),f=o+l*(.028+Math.random()*.02);u.gain.setValueAtTime(1e-4,f),u.gain.exponentialRampToValueAtTime(.07+i*.06,f+.006),u.gain.exponentialRampToValueAtTime(.001,f+.03),c.connect(h).connect(u).connect(this.master),c.start(f),c.stop(f+.05)}}}carPass(t){const e=this.ctx;if(!e||!this.master)return;const i=e.currentTime,s=e.createBufferSource();s.buffer=this.noiseBuffer(t+.2);const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(240,i),r.frequency.linearRampToValueAtTime(900,i+t*.45),r.frequency.linearRampToValueAtTime(220,i+t);const o=e.createGain();o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(.16,i+t*.45),o.gain.exponentialRampToValueAtTime(8e-4,i+t),s.connect(r).connect(o).connect(this.master),s.start(i),s.stop(i+t+.2)}noiseBuffer(t){const e=this.ctx,i=Math.max(1,Math.floor(e.sampleRate*t)),s=e.createBuffer(1,i,e.sampleRate),r=s.getChannelData(0);let o=0;for(let a=0;a<i;a++){const l=Math.random()*2-1;o=(o+.02*l)/1.02,r[a]=o*3.2}return s}}const Ge='"Malgun Gothic", "Apple SD Gothic Neo", sans-serif';function Wn(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t;const s=i.getContext("2d");e(s);const r=new Ca(i);return r.colorSpace=Je,r.anisotropy=4,r}function ac(n){return Wn(256,352,t=>{t.fillStyle="#b3ad9c",t.fillRect(0,0,256,352),t.fillStyle="#2a2620",t.textAlign="center",t.font=`bold 46px ${Ge}`,t.fillText("과외",128,84),t.fillText("구합니다",128,140),t.font=`24px ${Ge}`,t.fillText("수학 · 영어 — 초·중등",128,196),t.font=`bold 31px ${Ge}`,t.fillText(n,128,268),t.strokeStyle="#6d675a",t.setLineDash([5,5]);for(let e=32;e<256;e+=32)t.beginPath(),t.moveTo(e,300),t.lineTo(e,352),t.stroke()})}function lc(n){return Wn(512,384,t=>{t.fillStyle="#0d1220",t.fillRect(0,0,512,384),t.strokeStyle="#2a3148",t.lineWidth=10,t.strokeRect(5,5,502,374),[["희망빌라 302",n?"급구":"월세 35"],["동아주택 B01","월세 30"],["한빛빌라 201","전세 8,500"],["성원빌라 402","월세 28"]].forEach(([i,s],r)=>{const o=28+r%2*240,a=32+Math.floor(r/2)*168;t.fillStyle="#c6c1b1",t.fillRect(o,a,216,140),t.textAlign="center",t.fillStyle="#33302a",t.font=`22px ${Ge}`,t.fillText(i,o+108,a+44),t.font=`bold 40px ${Ge}`,t.fillText(s,o+108,a+102)})})}function sg(){return Wn(256,320,n=>{n.fillStyle="#0d1220",n.fillRect(0,0,256,320);const t=n.createRadialGradient(128,150,20,128,150,95);t.addColorStop(0,"rgba(214, 209, 192, 1)"),t.addColorStop(.72,"rgba(198, 192, 176, 0.95)"),t.addColorStop(1,"rgba(150, 145, 130, 0)"),n.fillStyle=t,n.beginPath(),n.ellipse(128,150,72,100,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(10, 12, 18, 0.9)";for(const e of[98,158])n.beginPath(),n.ellipse(e,128,11,16,0,0,Math.PI*2),n.fill()})}function rg(){return Wn(1024,512,n=>{n.clearRect(0,0,1024,512);const t=[[190,260,.28,.85],[340,180,-.2,.7],[520,300,.5,.9],[660,210,-.4,.6],[810,290,.15,.8],[430,400,-.1,.5]];for(const[e,i,s,r]of t){n.save(),n.translate(e,i),n.rotate(s),n.fillStyle=`rgba(90, 15, 15, ${r})`,n.beginPath(),n.ellipse(0,0,38,50,0,0,Math.PI*2),n.fill();for(let o=0;o<5;o++){const a=-.7+o*.35;n.beginPath(),n.ellipse(Math.sin(a)*50,-Math.cos(a)*64,10,25,a,0,Math.PI*2),n.fill()}n.restore()}})}function og(){return Wn(1024,192,n=>{n.fillStyle="#7c1d22",n.fillRect(0,0,1024,192),n.strokeStyle="#e8d9a0",n.lineWidth=5,n.strokeRect(14,14,996,164),n.textAlign="center",n.fillStyle="#fdf3d8",n.font=`bold 78px ${Ge}`,n.fillText("FF-1204  개업",512,86),n.font=`bold 56px ${Ge}`,n.fillText("XXXXL 감자튀김",512,154)})}function ha(n){return Wn(512,144,t=>{t.fillStyle="#140d05",t.fillRect(0,0,512,144),t.textAlign="center",t.fillStyle="#ffd9a0";const e=n.split(`
`);let i=e.length===1?60:46;t.font=`bold ${i}px ${Ge}`;const s=Math.max(...e.map(a=>t.measureText(a).width));s>470&&(i=Math.floor(i*470/s),t.font=`bold ${i}px ${Ge}`);const r=i*1.12,o=72-(e.length-1)*r/2;e.forEach((a,l)=>t.fillText(a,256,o+l*r+i*.4))})}function ag(){return Wn(512,256,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,256),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,240),n.textAlign="center",n.fillStyle="#9a8a6a",n.font=`34px ${Ge}`,n.fillText("영업시간",256,74),n.fillStyle="#ffd9a0",n.font=`bold 72px ${Ge}`,n.fillText("24시간",256,156),n.fillStyle="#9a8a6a",n.font=`32px ${Ge}`,n.fillText("연중무휴",256,210)})}function lg(){return Wn(512,192,n=>{n.fillStyle="#140d05",n.fillRect(0,0,512,192),n.strokeStyle="#3a2a12",n.lineWidth=6,n.strokeRect(8,8,496,176),n.fillStyle="#ffd9a0",n.font=`bold 34px ${Ge}`,n.fillText("감자튀김",28,54),n.font=`26px ${Ge}`,[["XXXXL","9,900"],["XXL","6,900"],["L","4,900"]].forEach(([e,i],s)=>{const r=96+s*34;n.fillStyle=s===0?"#ffd9a0":"#9a8a6a",n.fillText(e,40,r),n.textAlign="right",n.fillText(i,472,r),n.textAlign="left"})})}function cg(){return Wn(256,320,n=>{n.fillStyle="#e8e0cc",n.fillRect(0,0,256,320),n.fillStyle="#33302a",n.textAlign="center",n.font=`bold 30px ${Ge}`,n.fillText("방문 도장",128,58),n.font=`20px ${Ge}`,n.fillText("오실 때마다",128,96),n.strokeStyle="#5c5648",n.lineWidth=3;for(let t=0;t<5;t++){const e=52+t%3*52,i=150+Math.floor(t/3)*62;n.beginPath(),n.arc(e,i,21,0,Math.PI*2),n.stroke()}n.font=`17px ${Ge}`,n.fillText("다섯 칸",128,292)})}function jc(n){var e;const t=((e=new Error().stack)==null?void 0:e.split(`
`))??[];for(const i of t.slice(1)){const s=/\/([\w.-]+\.ts)(?:\?[^:]*)?:(\d+):\d+/.exec(i);if(s&&s[1]!=="kit.ts"){n.userData.src=`${s[1]}:${s[2]}`;return}}}function ug(n){let t=n>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Es(n,t,e){const i=ug(e),s=new Float32Array(t*t);for(let l=0;l<s.length;l++)s[l]=i();const r=new Float32Array(n*n),o=n/t,a=l=>l*l*(3-2*l);for(let l=0;l<n;l++){const c=l/o,h=Math.floor(c)%t,u=(h+1)%t,f=a(c-Math.floor(c));for(let p=0;p<n;p++){const g=p/o,_=Math.floor(g)%t,m=(_+1)%t,d=a(g-Math.floor(g)),w=s[h*t+_]+(s[h*t+m]-s[h*t+_])*d,T=s[u*t+_]+(s[u*t+m]-s[u*t+_])*d;r[l*n+p]=w+(T-w)*f}}return r}const hg=256;function Jc(n){const t=hg,e=new Float32Array(t*t).fill(1);n(e,t);const i=document.createElement("canvas");i.width=i.height=t;const s=i.getContext("2d"),r=s.createImageData(t,t);for(let a=0;a<e.length;a++){const l=Math.max(0,Math.min(1,e[a]))*255;r.data[a*4]=r.data[a*4+1]=r.data[a*4+2]=l,r.data[a*4+3]=255}s.putImageData(r,0,0);const o=new Ca(i);return o.wrapS=o.wrapT=Ts,o.colorSpace=Je,o}function dg(){return Jc((n,t)=>{const e=Es(t,8,7311),i=Es(t,64,4409);for(let s=0;s<n.length;s++)n[s]=1-(e[s]-.5)*.15-(i[s]-.5)*.14})}function fg(){return Jc((n,t)=>{const e=Es(t,6,1187),i=Es(t,24,9041),s=Es(t,48,2273);for(let r=0;r<t;r++)for(let o=0;o<t;o++){const a=r*t+o,l=i[r%8*t+o];n[a]=1-(e[a]-.5)*.12-(l-.5)*.09-(s[a]-.5)*.06}})}function pg(){const e=document.createElement("canvas");e.width=512,e.height=256;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,256);s.addColorStop(0,"#8d92bd"),s.addColorStop(.16,"#a89cc0"),s.addColorStop(.3,"#c9a8bd"),s.addColorStop(.4,"#e8bcc2"),s.addColorStop(.47,"#f5cdc6"),s.addColorStop(.52,"#eec4b4"),s.addColorStop(1,"#b08b7a"),i.fillStyle=s,i.fillRect(0,0,512,256);const r=512*.75,o=256*.4,a=i.createRadialGradient(r,o,0,r,o,512*.34);a.addColorStop(0,"rgba(255, 244, 214, 0.95)"),a.addColorStop(.06,"rgba(255, 226, 172, 0.80)"),a.addColorStop(.2,"rgba(250, 196, 158, 0.45)"),a.addColorStop(.55,"rgba(238, 180, 168, 0.16)"),a.addColorStop(1,"rgba(230, 175, 175, 0)"),i.fillStyle=a,i.fillRect(0,0,512,256);const l=new Ca(e);return l.wrapS=Ts,l.wrapT=ti,l.colorSpace=Je,l}function cc(n,t,e,i){const s=t.clone();s.needsUpdate=!0,s.repeat.set(e,i);const r=new Xt({color:n,roughness:.95,map:s});return r.userData.surface=!0,r}function Ct(n,t,e,i,s,r,o,a){const l=new ot(new Wt(n,t,e),new Xt({color:i,roughness:.95}));return l.position.set(s,r,o),jc(l),a.add(l),l}function V(n,t,e,i,s,r,o,a){const l=new ot(new Wt(t,e,i),n);return l.position.set(s,r,o),jc(l),a.add(l),l}const Et=n=>new Xt({color:n,roughness:.95});function mg(){return{blood:new Xt({color:7017492,roughness:.16,metalness:.25,emissive:3346190}),bloodWall:new Xt({color:1902345,roughness:.5}),darkFigure:new Xt({color:724502,roughness:1}),pale:new Xt({color:12169892,roughness:.9,emissive:1381391})}}const C=Jt.segLength,H=Jt.corridorHalfWidth,Qt=7,Ee=-C*.68,yn=3.2,po=-C*.585,Na=9,gg=3.5,Qc=6;function Cs(n){return n%Na<Qc}function _g(n){const t=n%Na;return t>=gg&&t<Qc}const da=44,tu=3.8,vg=18,xg=9,Mg=4.6,qe=9,Fe=3.4,eu=1.5,Sg=-36-qe/2,yg=[1.8,qe/2],nu=12371672,Fa=8160924,iu=3.2,Eg=16764829,Tg=7.5,bg=6244134,wg=16755566,Ag=8213296,Rg=13951730,Cg=7176344,Pg=4,Lg=11,su=Math.PI/2,Dg=0,ru=[[1.6,-C*.26],[-1.9,-C*.36],[2.1,-C*.49],[-1.4,-C*.58],[.9,-C*.71],[-2.1,-C*.81]],ou=new N(-2.35,.28,-C*.46),Ig=new N(.5,.28,-C*.42),Ps=[26,20,14,9,5.5,3],Ci=658970,au=15713222,lu=14269629,Ze=-C-6.6;function uc(n=!1){const t=new te,e={road:Et(1580072),wall:Et(2304056),shutter:Et(2765123),tile:Et(7236190),steel:Et(9080470),dark:Et(1317154),awning:Et(8133922)},i=new Xt({color:16757310,emissive:16757310,emissiveIntensity:.55,roughness:.4});V(e.road,12,.2,12,0,-.18,Ze+3.4,t);const s=8,r=3.6,o=Ze-r;V(e.tile,s,3.4,.2,0,1.7,o,t);for(const p of[-1,1])V(e.tile,.2,3.4,r,p*(s/2),1.7,Ze-r/2,t);V(e.dark,s+.4,.25,r,0,3.5,Ze-r/2,t),V(e.dark,s+.4,1.1,.4,0,3,Ze,t);const a=V(e.awning,s+1,.12,1.5,0,2.62,Ze+.75,t);a.rotation.x=-.16,V(e.steel,s-1,1.05,.7,0,.525,Ze-.5,t),V(e.tile,s-.8,.08,.85,0,1.09,Ze-.5,t);for(const p of[-1,1]){V(e.steel,1.25,.95,.85,p*1.5,1.5,o+.75,t);const g=new ot(new Wt(1.02,.05,.62),i);g.position.set(p*1.5,1.99,o+.75),t.add(g),V(e.steel,.06,.5,.06,p*1.5,2.25,o+1.1,t)}V(e.dark,3.6,.55,1.1,0,2.75,o+.75,t);const l=new ot(new Le(2.7,1),new Xt({map:lg(),roughness:.9}));l.position.set(-1.5,1.92,Ze-.25),t.add(l);const c=new ot(new Le(1.15,.62),new Xt({map:ag(),roughness:.9}));c.position.set(1.85,1.92,Ze-.25),t.add(c);const h=new ot(new Le(.72,.9),new Xt({map:cg(),roughness:.95}));h.position.set(2.6,1.75,o+.11),t.add(h);for(const p of[2.15,2.62])V(e.steel,2.2,.06,.34,2.6,p,o+.28,t);const u=4.6,f=Ze+3.4;for(const p of[-1,1]){V(e.wall,.5,7,7.6,p*u,3.5,f,t),V(e.shutter,.16,2.4,5.4,p*(u-.32),1.2,f,t);for(let _=0;_<4;_++)V(e.dark,.17,.05,5.4,p*(u-.32),.5+_*.55,f,t);const g=V(e.awning,.9,.1,5.6,p*(u-.6),2.75,f,t);g.rotation.z=p*-.24}V(e.wall,s+6,4.2,.6,0,5.5,Ze+.15,t);for(const p of[-2.4,0,2.4])V(e.dark,1.3,1,.1,p,5.2,Ze-.2,t);if(n){const p=ha(`감자튀김 전문점!!
ff-1204`),g=new Xt({color:16777215,map:p,emissiveMap:p,emissive:16777215}),_=Et(1314053),m=new ot(new Wt(3.4,.9,.3),[_,_,_,_,g,_]);m.position.set(0,4.3,Ze+.55),t.add(m);const d=new Ln(16757310,20,26,2);d.position.set(0,3,Ze+.6),t.add(d)}return t.visible=!1,t}const Oe=-C-6;function Ug(){const n=new te,t={road:Et(1580072),wall:Et(2304056),villa:Et(2501694),trim:Et(2896452),door:Et(1119519),dark:Et(1317154),crate:Et(2765122)},e=new Xt({color:16767392,emissive:16762503,emissiveIntensity:1}),i=new Xt({color:6970434,emissive:16757310,emissiveIntensity:.35,roughness:.6}),s=new Xt({color:3814440,emissive:16757310,emissiveIntensity:.18}),r=4.6,o=Oe+3.4;V(t.road,12,.2,12,0,-.18,o,n);for(const h of[-1,1])V(t.wall,.5,7,7.6,h*r,3.5,o,n);const a=9;V(t.villa,a,7,.6,0,3.5,Oe-.3,n),V(t.trim,a+.6,.3,.9,0,7.1,Oe-.3,n),V(t.trim,3.4,.22,1.3,0,2.62,Oe+.45,n);for(const h of[-1,1])V(t.trim,.16,2.5,.16,h*1.5,1.25,Oe+.95,n);V(t.trim,2.3,2.5,.2,0,1.25,Oe+.02,n),V(t.door,1.6,2.2,.14,0,1.1,Oe+.1,n);const l=new ot(new Wt(.44,1.05,.06),i);l.position.set(0,1.52,Oe+.17),n.add(l);for(const h of[1.16,1.52,1.88])V(t.door,.5,.05,.09,0,h,Oe+.19,n);V(t.trim,.46,.1,.26,0,2.53,Oe+.19,n);const c=new ot(new Wt(.3,.11,.14),e);c.position.set(0,2.44,Oe+.17),n.add(c),V(t.trim,1,.55,.16,-1.75,1.35,Oe+.05,n);for(let h=0;h<3;h++)V(t.dark,.26,.34,.04,-2.05+h*.3,1.35,Oe+.14,n);return V(t.trim,.5,.26,.06,1.7,2.15,Oe+.03,n),[3.6,5.1,6.3].forEach((h,u)=>{V(t.dark,.9,1.1,.12,2.6,h,Oe+.02,n);const f=new ot(new Wt(.8,1,.06),u===1?s:t.dark);f.position.set(-2.6,h,Oe+.02),n.add(f)}),V(t.trim,.85,.6,.4,3,4.4,Oe+.2,n),V(t.crate,1.7,.5,1,-3.3,.25,Oe+1.5,n),V(t.crate,.75,.36,.62,-3.5,.86,Oe+1.45,n),n.visible=!1,n}function Ng(){return{wall:Et(2106938),portal:Et(2304056),deck:Et(1711915),base:Et(1448741),trim:Et(2436157),girder:Et(1317154),groove:Et(1119517),road:Et(1580072),fog:[.22,.32,.45,.6,.75].map(n=>new ns({color:263690,transparent:!0,opacity:n,depthWrite:!1,fog:!1,side:Rn}))}}let Fg=null;const cu=()=>Fg??(Fg=Ng());function hc(n,t,e,i,s){const r=new te,o=p=>n+t*p,a=eu,l=qe/2,c=qe+2,h=o(l+1);V(i.road,20,.2,qe+6,0,-.1,o(l),r);for(const p of[2.2,4.4])V(i.groove,a*2+.6,.04,.08,0,.02,o(p),r);for(const p of[-1,1]){const g=p*(a+.45);V(i.wall,.9,Fe,c,g,Fe/2,h,r),V(i.base,1,.5,c,p*(a+.43),.25,h,r),V(i.trim,1,.14,c,p*(a+.43),Fe-.3,h,r);for(const _ of[1.2,2.6,4,5.4])V(i.groove,.07,Fe-1,.09,p*(a-.02),(Fe+.5)/2,o(_),r);V(i.groove,.34,.06,c,p*(a-.17),.035,h,r)}V(i.deck,a*2+2,.9,c,0,Fe+.45,h,r);for(const p of[1,3,5,7])V(i.girder,a*2+1.2,.3,.4,0,Fe-.13,o(p),r);const u=.125;for(const p of[-1,1])V(i.portal,.78,Fe+.62,.85,p*(a+.39),(Fe+.62)/2,o(u),r);V(i.portal,a*2+1.9,.62,.9,0,Fe+.31,o(u),r),V(i.trim,a*2+2.4,.16,1.12,0,Fe+.7,o(u-.08),r);for(const p of[.1,qe-.1])V(i.portal,20,.62,.62,0,Fe+1,o(p),r),V(i.portal,20,1.15,.44,0,Fe+1.89,o(p),r);for(let p=-3.6;p<=3.61;p+=.9)V(i.trim,.16,.6,.3,p,Fe+2.76,o(.1),r);V(i.trim,20,.16,.38,0,Fe+3.14,o(.1),r);for(const p of yg)V(i.girder,.44,.16,.24,0,Fe-.44,o(p),r),V(s,.3,.05,.15,0,Fe-.545,o(p),r);const f=new Ln(nu,iu,11,2);return f.position.set(0,Fe-.7,o(l)),r.add(f),[3.2,4.2,5.2,6.4,7.8].forEach((p,g)=>{const _=new ot(new Le(14,11),i.fog[g]);_.position.set(0,Fe/2,o(p)),r.add(_)}),V(i.portal,20,Qt,1,0,Qt/2,o(qe+e),r),{group:r,light:f}}function Og(n,t){const i=[[2.85,-C*.16],[-2.85,-C*.42],[2.85,-C*.63],[2.85,-C*.93]];for(const[c,h]of i){V(t.pole,.26,9.4,.26,c,9.4/2,h,n);const u=Math.sign(c);V(t.arm,1.5,.1,.1,c-u*.7,9.4-.75,h,n),V(t.arm,1.1,.09,.09,c-u*.5,9.4-1.5,h,n)}V(t.arm,.46,.72,.46,2.85-.5,9.4-2.7,-C*.63,n);const s=[],r=(c,h,u,f,p,g,_)=>{let d=c,w=h,T=u;for(let M=1;M<=6;M++){const R=M/6,E=c+(f-c)*R,b=u+(g-u)*R,P=h+(p-h)*R-_*4*R*(1-R);s.push(d,w,T,E,P,b),d=E,w=P,T=b}},o=9.4-.75;for(const[c,h]of[[-1.3,0],[-.7,-.06],[-.1,.02],[-.95,-.72]])r(2.85+c,o+h,-C*.16,2.85+c,o+h,-C*.63,.55),r(2.85+c,o+h,-C*.63,2.85+c,o+h,-C*.93,.36),r(2.85+c,o+h,-C*.16,2.85+c,o+h+.3,1.5,.3),r(2.85+c,o+h,-C*.93,2.85+c,o+h+.3,-C-1.5,.3);r(2.85-.7,o,-C*.16,-2.85+.7,o-.9,-C*.42,.7),r(2.85-.7,o-.75,-C*.63,-2.85+.7,o-1.5,-C*.42,.6),r(-2.85+.7,o-.9,-C*.42,2.85-.7,o-.4,-C*.93,.8),r(2.85-.7,o-1.5,-C*.63,3,4.6,-C*.52,.15),r(-2.85+.7,o-1.5,-C*.42,-3,4.2,-C*.34,.15);const a=new dn;a.setAttribute("position",new Pe(s,3));const l=new $h(a,new Hc({color:1316381,transparent:!0,opacity:.92}));n.add(l)}function Bg(n){const t=c=>{const h=Et(c);return h.userData.keepColor=!0,h},e=t(3625007),i=t(4283448),s=t(2900775),r=Et(6047290),o=[[2.62,-3.6,1],[-2.66,-9.4,.86],[2.58,-16.2,1.12],[-2.62,-30.4,.94],[2.64,-34.2,.8]];for(const[c,h,u]of o)V(r,.62*u,.34*u,.62*u,c,.17*u,h,n),V(e,.54*u,.46*u,.5*u,c,(.34+.23)*u,h,n),V(i,.38*u,.34*u,.42*u,c-.12*u,(.34+.6)*u,h+.1*u,n),V(s,.3*u,.26*u,.32*u,c+.14*u,(.34+.82)*u,h-.08*u,n);const a=(()=>{let c=20817;return()=>(c=c*1664525+1013904223>>>0)/4294967296})(),l=(c,h,u,f,p,g)=>{for(let _=0;_<g;_++){const m=a()*Math.PI*2,d=a()*a(),w=Math.cos(m)*d*f,T=Math.sin(m)*d*p,M=.26+(1-d)*.42,R=[e,i,s][_%3];V(R,.09+a()*.11,M*(.8+a()*.5),M*(.8+a()*.5),c,h+T,u+w,n)}};l(-3.05,Qt+.5,-12.8,1.9,.95,16),l(3.05,Qt+.35,-31.8,1.5,.8,13),l(3.02,Qt+.45,-6.2,1.3,.75,11)}function zg(n,t){n.background=new $t(Ci),n.fog=new Aa(Ci,.044);const e=new td(3752286,2.2);n.add(e);const i=new Qh(8425664,.75);i.position.set(4,10,2),n.add(i);const s=new te;n.add(s);const r=new ot(new rn(80,24,16),new ns({map:pg(),side:tn,fog:!1,depthWrite:!1}));r.position.set(0,0,-C/2),r.renderOrder=-1,r.visible=!1,n.add(r);const o=2.5,a=3,l=dg(),c=fg(),h=H*2+14,u=C+14;V(cc(1580072,l,h/o,u/o),h,.2,u,0,-.1,-C/2,s);const f=21.28,p=C+(Ee-yn),g=(yt,qt)=>cc(yt,c,qt/a,Qt/a);for(const[yt,qt]of[[H+.5,2304056],[-H-.5,2106938]])V(g(qt,f),1,Qt,f,yt,Qt/2,-f/2,s),V(g(qt,p),1,Qt,p,yt,Qt/2,Ee-yn-p/2,s);Og(s,{pole:Et(2830400),arm:Et(2304056)}),Bg(s);const _=H-ys+1;for(const yt of[-C-.5,.5])for(const qt of[-1,1])Ct(_,Qt,1,2304056,qt*(ys+_/2),Qt/2,yt,s);const m=cu(),d=new Xt({color:2830912,emissive:Fa}),w=hc(-C,-1,4,m,d),T=hc(0,1,.6,m,d),M=w.group,R=T.group;s.add(R),s.add(M);const E=[w.light,T.light],b=-C*.45,P=Ct(.15,5,.15,3817815,H-.4,2.5,b,s);Ct(.62,.1,.1,3817815,H-.7,4.95,b,s);const x=Ct(.5,.14,.26,2765122,H-.9,4.86,b,s).material;x.emissive.setHex(3811858);const L=new Ln(16762503,22,18,1.8);L.position.set(H-.9,4.8,b),s.add(L);const O=new Ln(16757310,0,26,2);O.position.set(0,3,-C-6),s.add(O);const B=new te,Y=new ot(new Wt(.46,1.22,.28),t.darkFigure);Y.position.y=.9;const Z=new ot(new rn(.15,10,8),t.darkFigure);Z.position.y=1.66;for(const yt of[-.27,.27]){const qt=new ot(new Wt(.09,.14,.1),t.pale);qt.position.set(yt,.74,.02),B.add(qt)}const W=new ot(new Wt(.15,.1,.1),t.pale);W.position.set(0,1.5,-.02),B.add(W),B.add(Y,Z),B.visible=!1,s.add(B);const q=new ot(new Da(.42,.5,24),new ns({color:9146536,transparent:!0,opacity:.32}));q.rotation.x=-Math.PI/2,q.position.set(.9,.03,-5.5),q.visible=!1,s.add(q);const X=[ha(`감자튀김 전문점!!
ff-1204`),ha(`감자튀김 전문점이요
ff-1204`)],rt=new Xt({color:16777215,map:X[0],emissiveMap:X[0],emissive:0}),ut=Et(1314053),xt=new ot(new Wt(3.4,.9,.3),[ut,ut,ut,ut,rt,ut]);xt.position.set(0,4.6,-C+.2),s.add(xt);const Ht=uc(),oe=Ug();s.add(Ht,oe);const K=uc(!0);K.rotation.y=Math.PI,K.position.z=-C,s.add(K);const st=new te,St=new ot(new Wt(4.1,.95,1.75),new Xt({color:1448484,roughness:.7}));St.position.y=.72;const ht=new ot(new Wt(2.1,.62,1.6),new Xt({color:1119261,roughness:.7}));ht.position.set(-.25,1.45,0),st.add(St,ht);const bt=new Xt({color:16774872,emissive:16773320});for(const yt of[-.6,.6]){const qt=new ot(new Wt(.14,.22,.3),bt);qt.position.set(2.02,.78,yt),st.add(qt)}const Zt=new Ln(16771512,0,16,2);return Zt.position.set(2.6,.9,0),st.add(Zt),st.position.set(0,0,Ee),st.visible=!1,s.add(st),{refs:{group:s,scene:n,moon:i,skyDome:r,tunnel:M,backTunnel:R,tunnelLights:E,tunnelLampMat:d,car:st,carLight:Zt,ambient:e,stretchMark:q,lampLight:L,lampHeadMat:x,shopGlow:O,shopSign:xt,shopSignMat:rt,shopTex:X,shopFront:Ht,homeFront:oe,shopBack:K,figure:B},hit:{lamp_flicker:[P],shop_typo:[xt],figure:[B]}}}function Hg(n,t){const e=cu(),i=yn,s=Mg,r=xg,o=c=>n*(vg+c),a=o(r/2+1);for(const c of[-1,1])V(e.wall,r+2,s,.9,a,s/2,Ee+c*(i+.45),t),V(e.base,r+2,.5,1,a,.25,Ee+c*(i+.43),t);V(e.deck,r+2,.9,i*2+2,a,s+.45,Ee,t);for(const c of[1.4,4])V(e.girder,.4,.3,i*2+1.2,o(c),s-.13,Ee,t);for(const c of[-1,1])V(e.portal,.85,s+.62,.78,o(.1),(s+.62)/2,Ee+c*(i+.39),t);V(e.portal,.9,.62,i*2+1.9,o(.1),s+.31,Ee,t),V(e.trim,1.12,.16,i*2+2.4,o(.02),s+.7,Ee,t);const l=new Xt({color:2830912,emissive:Fa});V(e.girder,.24,.16,.5,o(1.5),s-.44,Ee,t),V(l,.17,.05,.38,o(1.5),s-.55,Ee,t),V(e.portal,1,Qt-(s+.9),i*2+2,o(.5),(s+.9+Qt)/2,Ee,t),[1.2,2.4,3.8,5.4,7].forEach((c,h)=>{const u=new ot(new Le(i*2+1,s+.8),e.fog[h]);u.position.set(o(c),s/2,Ee),u.rotation.y=Math.PI/2,t.add(u)}),V(e.portal,1,Qt,i*2+2,o(r+2),Qt/2,Ee,t)}function kg(n){Ct(1,Qt,yn*2,2304056,H+.5,Qt/2,Ee,n),Ct(1,Qt,yn*2,2106938,-H-.5,Qt/2,Ee,n)}function Gg(n){const t=new te,e=new te,i=[[2.05,-C*.455,.34],[1.5,-C*.45,.28],[.95,-C*.443,.3],[.4,-C*.432,.24],[-.15,-C*.425,.27],[-.75,-C*.415,.2],[-1.35,-C*.408,.23],[-1.9,-C*.4,.15]];for(const[W,q,X]of i){const rt=new ot(new Ns(X,14),n.blood);rt.rotation.x=-Math.PI/2,rt.position.set(W,.015,q),e.add(rt)}const s=new ot(new Le(2,2.5),n.bloodWall);s.position.set(H-.06,1.15,-C*.458),s.rotation.y=-Math.PI/2,e.add(s),e.visible=!1,t.add(e);const r=new te,o=new Xt({color:14077884,roughness:.85,emissive:1512976}),a=new ot(new rn(.17,12,10),o);a.position.y=.14,a.scale.set(1,.92,1.08);const l=new ot(new Wt(.2,.09,.16),o);l.position.set(0,-.02,.04);const c=new Xt({color:658450,roughness:1});for(const W of[-.062,.062]){const q=new ot(new rn(.042,8,6),c);q.position.set(W,.15,.145),r.add(q)}r.add(a,l),r.position.set(-H+.8,1.06,-C*.33),r.scale.setScalar(1.38),r.rotation.y=Math.PI/6,r.visible=!1,t.add(r);const h=sg(),u=new ot(new Le(1,1.28),new Xt({map:h,emissiveMap:h,emissive:4867644}));u.position.set(H-.03,3.4,-C*.68),u.rotation.y=-Math.PI/2,u.visible=!1,t.add(u),Ct(1.6,.5,1,2765122,-H+1,.25,-C*.34,t),Ct(.7,.35,.6,2436157,-H+.8,.85,-C*.33,t);const f=new te,p=Ct(.06,1.3,.06,5593968,0,.65,0,f);p.rotation.z=.5;const g=new ot(new La(.55,.5,8),new Xt({color:7017760,roughness:.8}));g.position.set(-.35,1.35,0),g.rotation.z=.5,f.add(g),f.position.set(-H+1.8,0,-C*.38),f.visible=!1,t.add(f);const _=Ct(.45,.22,.16,1843760,-H+.12,1.7,-C*.3,t),m=_.material,d=new Ln(15260080,0,6,1.8);d.position.set(-H+.5,1.7,-C*.3),t.add(d);const w=new ot(new Le(1.1,1.4),new Xt({color:1119263,emissive:0}));w.position.set(H-.02,3.4,-C*.68),w.rotation.y=-Math.PI/2,t.add(w);const T=w.material,M=[ac("010-4172-8956"),ac("010-417-8956")],R=new Xt({map:M[0],roughness:.9}),E=new ot(new Le(.55,.75),R);E.position.set(H-.01,1.55,-C*.4),E.rotation.y=-Math.PI/2,t.add(E),Ct(.24,6.8,.24,2896452,H-.35,3.4,-C*.15,t),Ct(.24,6.8,.24,2896452,-H+.35,3.4,-C*.72,t),Ct(.035,.035,C*.85,1119261,H-.35,6.3,-C*.5,t);const b=H-.35-(-H+.35),P=-C*.15- -C*.72,y=Ct(.035,.035,Math.hypot(b,P),1119261,0,6,(-C*.15+-C*.72)/2,t);y.rotation.y=Math.atan2(b,P),Ct(.85,.6,.38,2764864,H-.35,2.5,-C*.58,t),Ct(.85,.6,.38,2501692,-H+.35,2.2,-C*.33,t),Ct(.12,2.4,1.5,1119519,-H+.05,1.2,-C*.22,t),Ct(.2,.16,1.9,2896452,-H+.1,2.5,-C*.22,t);const x={pipe:Et(3752282),meter:Et(2896452),dark:Et(1119519),prop:Et(2501694),paper:Et(4868690)};for(const[W,q]of[[-1,-C*.52],[1,-C*.24],[-1,-C*.82]])V(x.pipe,.14,5.2,.14,W*(H-.16),2.6,q,t);V(x.pipe,.1,.1,C*.36,-H+.16,2.9,-C*.67,t),V(x.pipe,.1,.1,C*.3,H-.16,2.75,-C*.38,t),V(x.dark,.12,2.4,1.5,H-.05,1.2,-C*.86,t),V(x.meter,.2,.16,1.9,H-.1,2.5,-C*.86,t),V(x.meter,.16,.6,.9,H-.12,1.7,-C*.78,t);for(let W=0;W<4;W++)V(x.prop,.14,.26,.22,H-.14,1.45,-C*.75+W*.28,t);V(x.meter,.16,.55,.8,-H+.12,1.75,-C*.29,t),V(x.prop,.42,.55,1.5,H-.42,.42,-C*.66,t),V(x.prop,.3,.35,.3,H-.42,.9,-C*.62,t),V(x.prop,.5,.42,.5,-H+.35,.21,-C*.62,t),V(x.prop,.45,.38,.45,-H+.38,.6,-C*.63,t);for(const[W,q,X]of[[-1,-C*.72,1.5],[1,-C*.48,1.35],[-1,-C*.46,1.9]])V(x.paper,.02,.34,.24,W*(H-.02),X,q,t);const L=new te;for(const W of[-.11,.11]){const q=V(Et(14210248),.24,.11,.34,0,.055,0,L);q.position.x=W}L.position.set(H-.55,0,-C*.86+.15),L.visible=!1,t.add(L);const O=new te,B=new ot(new Wt(.4,.72,.26),n.darkFigure);B.position.y=1.24;const Y=new ot(new rn(.14,10,8),n.darkFigure);Y.position.set(0,1.74,.02);const Z=new ot(new Wt(.34,.5,.5),n.darkFigure);Z.position.set(0,.78,.24);for(const W of[-.17,.17]){const q=new ot(new Wt(.1,.11,.15),n.pale);q.position.set(W,1.16,.3),O.add(q)}return O.add(B,Y,Z),O.position.set(H-.42,0,-C*.655),O.visible=!1,t.add(O),{group:t,refs:{umbrella:f,sensorMat:m,sensorLight:d,windowMat:T,flyerMat:R,flyerTex:M,bloodTrail:e,skull:r,facePlane:u,shoes:L,bikeFigure:O},hit:{umbrella:[f],sensor_on:[_],window_red:[w],flyer_digits:[E],blood_trail:[e],skull:[r],face_window:[u],shoes:[L],bike_figure:[O]}}}function Vg(){const n=new te,t=Ct(.08,2,2.6,1316900,H-.06,1.25,-C*.39,n),e=t.material,i=Ct(.12,2.2,2.7,2830916,H-.18,1.25,-C*.39,n),s=new Ln(13623528,0,8,1.8);s.position.set(H-.9,1.3,-C*.39),n.add(s);const r=new ot(new Le(2.4,1.7),new Xt({map:rg(),transparent:!0,roughness:1}));r.position.set(H-.25,1.25,-C*.39),r.rotation.y=-Math.PI/2,r.visible=!1,n.add(r);const o=Ct(1.7,.65,.14,1975348,H-.1,3.2,-C*.5,n),a=o.material;Ct(1.5,.6,.14,1843504,H-.1,3.4,-C*.29,n),Ct(1.9,.7,.14,2106938,H-.1,3.1,-C*.62,n);const l=[lc(!1),lc(!0)],c=new Xt({map:l[0],roughness:.85}),h=new ot(new Le(1.5,1.1),c);h.position.set(-H+.01,1.5,-C*.5),h.rotation.y=Math.PI/2,n.add(h);const u={shutter:Et(2765123),slat:Et(2041140),awning:Et(2302260),curb:Et(2238262),sign:Et(2106938),steel:Et(3752282),prop:Et(2501694),dark:Et(1514538)};for(const[P,y]of[[-1,-C*.3],[-1,-C*.68],[-1,-C*.86],[1,-C*.19],[1,-C*.76]]){const x=P*(H-.1);V(u.shutter,.12,2.1,2.3,x,1.15,y,n);for(let O=0;O<4;O++)V(u.slat,.13,.05,2.3,x,.45+O*.5,y,n);const L=V(u.awning,.85,.07,2.5,P*(H-.5),2.65,y,n);L.rotation.z=P*.3,V(u.sign,.14,.5,2,P*(H-.12),3.05,y,n)}const f=-C*.68,p=new Xt({color:1119260,roughness:1}),g=new ot(new Le(1.7,2),p);g.rotation.x=-Math.PI/2,g.position.set(-1.45,.02,f),n.add(g);const _=new Xt({color:1119260}),m=new ot(new Wt(.06,.1,2.1),_);m.position.set(-2.7,.18,f),n.add(m);const d=new Ln(16769192,0,6.5,2);d.position.set(-2.1,.5,f),n.add(d),V(u.curb,.55,.14,C*.92,-H+.28,.07,-C/2,n),V(u.curb,.55,.14,C*.92,H-.28,.07,-C/2,n),V(u.dark,.9,.3,1.8,-H+.55,.02,-C*.44,n);for(const P of[-C*.41,-C*.47])V(u.steel,.06,.9,.06,-H+1,.45,P,n);V(u.steel,.06,.06,1.3,-H+1,.88,-C*.44,n);for(const[P,y]of[[1,-C*.42],[1,-C*.58],[-1,-C*.55]])V(u.prop,.5,.42,.8,P*(H-.28),1.9,y,n);V(u.steel,.16,4.6,.16,H-.2,2.3,-C*.35,n),V(u.steel,.12,.12,C*.4,H-.2,2.55,-C*.55,n);const w=V(u.prop,.16,1,.7,-H+.32,.5,-C*.24,n);w.rotation.z=-.12;for(const[P,y]of[[-C*.63,.34],[-C*.66,.28]])V(u.prop,.42,y,.6,-H+.34,y/2,P,n);const T=new te,M=new ns({color:263691}),R=new ot(new Le(2.7,.98),M);R.rotation.x=-Math.PI/2,R.position.set(.75,.02,-C*.45);const E=new ot(new Ns(.42,16),M);E.rotation.x=-Math.PI/2,E.position.set(-.78,.02,-C*.45);const b=new ot(new Le(1.25,.34),M);return b.rotation.x=-Math.PI/2,b.rotation.z=-.55,b.position.set(.7,.02,-C*.417),T.add(R,E,b),T.visible=!1,n.add(T),{group:n,refs:{laundryShutter:i,laundryMat:e,laundryLight:s,storeSignMat:a,realtyMat:c,realtyTex:l,handprints:r,shutterGlowMat:p,shutterGlowSlitMat:_,shutterGlowLight:d,loneShadow:T},hit:{laundry_open:[i,t],sign_lit:[o],realty_urgent:[h],handprints:[r],shutter_glow:[g,m],lone_shadow:[T]}}}function Wg(n){const t=new te;for(const E of[-C*.32,-C*.375,-C*.43,-C*.485])Ct(.07,.85,1.7,3291730,-H+.85,.45,E,t);Ct(.1,2.3,.1,3817815,-H+.22,1.15,-C*.365,t),Ct(.1,2.3,.1,3817815,-H+.22,1.15,-C*.42,t),Ct(.08,.08,2.2,3817815,-H+.22,2.3,-C*.393,t);const e=new te;e.position.set(-H+.22,2.26,-C*.393),Ct(.03,1.5,.03,5593968,0,-.75,-.22,e),Ct(.03,1.5,.03,5593968,0,-.75,.22,e),Ct(.14,.06,.55,5593968,0,-1.5,0,e),t.add(e);const i=new ot(new rn(.28,12,10),new Xt({color:7173256,roughness:.85}));i.position.copy(ou),t.add(i);const s=new te,r=new ot(new Wt(.4,.62,.26),n.darkFigure);r.position.y=1.12;const o=new ot(new rn(.13,10,8),n.darkFigure);o.position.set(.05,1.56,0);const a=new ot(new Wt(.34,.52,.16),n.darkFigure);a.position.set(.2,.56,0),a.rotation.z=.25;for(const E of[-.19,.19]){const b=new ot(new Wt(.09,.13,.1),n.pale);b.position.set(E,1.3,.02),s.add(b)}s.add(r,o,a),s.position.set(-H+.22,0,-C*.393),s.visible=!1,t.add(s);const l=new te,c=new Xt({color:724502,emissive:9410220,emissiveIntensity:.9});for(const E of[-.09,.09]){const b=new ot(new rn(.045,8,6),c);b.position.x=E,l.add(b)}l.position.set(-H+.38,1.42,-C*.55),l.visible=!1,t.add(l);const h=new Xt({color:1251880,roughness:1});for(const[E,b]of[[-C*.25,1.6],[-C*.42,2],[-C*.58,1.5],[-C*.78,1.8]]){const P=new ot(new rn(1,7,5),h);P.scale.set(b,b*.75,b),P.position.set(-H-1.4,Qt+.6,E),t.add(P)}const u={fence:Et(3291730),rail:Et(3818592),gear:Et(2765648),wall2:Et(2041140),dark:Et(1514538),prop:Et(2501694)},f=V(u.gear,.13,4.6,.13,-H-1.7,2.3,-C*.5,t);f.name="놀이터 보안등";const p=new Xt({color:2831430,roughness:.6,emissive:3491946}),g=new ot(new Wt(.44,.18,.44),p);g.position.set(-H-1.7,4.55,-C*.5),t.add(g);const _=new Ln(10467032,6.5,12,2);_.position.set(-H-1.4,4.2,-C*.5),t.add(_),V(u.gear,.12,2.6,.12,-H-2.2,Qt+.6,-C*.34,t),V(u.gear,1.9,.12,.9,-H-2.9,Qt+1.7,-C*.34,t);const m=V(u.gear,2.6,.1,.7,-H-3.4,Qt+.5,-C*.34,t);m.rotation.z=.5;const d=new te,w=new ot(new Wt(.42,1.2,.26),n.darkFigure);w.position.y=.6;const T=new ot(new rn(.15,10,8),n.darkFigure);T.position.y=1.35;for(const E of[-.11,.11]){const b=new ot(new Wt(.11,.07,.2),n.pale);b.position.set(E,.035,.03),d.add(b)}d.add(w,T),d.position.set(-H+.15,Qt,-C*.36),d.visible=!1,t.add(d);for(const E of[-C*.62,-C*.7])V(u.gear,.09,1.8,.09,-H-2,Qt+.3,E,t),V(u.gear,.09,1.8,.09,-H-3.4,Qt+.3,E,t);for(const E of[Qt-.5,Qt+.4,Qt+1.2])V(u.gear,1.5,.09,.09,-H-2.7,E,-C*.66,t);for(const E of[-C*.15,-C*.21,-C*.265,-C*.54,-C*.595,-C*.65,-C*.72,-C*.79,-C*.86])V(u.fence,.07,.85,1.7,-H+.85,.45,E,t);V(u.rail,.05,.06,C*.78,-H+.85,.88,-C*.5,t),V(u.prop,.5,.1,1.6,-H+.5,.45,-C*.24,t);for(const E of[-C*.215,-C*.265])V(u.prop,.45,.45,.08,-H+.5,.22,E,t);V(u.prop,.42,.7,.42,-H+.45,.35,-C*.75,t),V(u.dark,.1,2.2,1.3,H-.05,1.1,-C*.7,t),V(u.wall2,.16,.2,1.6,H-.12,2.3,-C*.7,t),V(u.wall2,.14,.5,.4,H-.1,1.5,-C*.58,t);for(const E of[-C*.3,-C*.38,-C*.46])V(u.prop,.34,.3,.34,H-.25,2.3,E,t),V(u.gear,.3,.34,.3,H-.25,2.6,E,t);V(u.wall2,.5,.16,C*.5,H-.3,2.12,-C*.4,t),V(u.prop,.3,.75,.3,H-.25,.37,-C*.86,t),V(u.wall2,.12,1.1,.5,H-.08,1.6,-C*.86,t);const M=new te,R=new Xt({color:12169892,roughness:.9,emissive:1381391});for(const[E,b]of[[-H+.85,-C*.3],[-H+.85,-C*.345],[-H+.85,-C*.62],[-H+.85,-C*.665]]){const P=new ot(new Wt(.1,.12,.17),R);P.position.set(E,.9,b),M.add(P);for(let y=0;y<4;y++){const x=new ot(new Wt(.11,.035,.032),R);x.position.set(E+.05,.855,b-.06+y*.04),x.rotation.z=-.5,M.add(x)}}return M.visible=!1,t.add(M),{group:t,refs:{swingPivot:e,ball:i,swingFigure:s,eyes:l,slideFigure:d,fenceHands:M},hit:{swing:[e],ball_out:[i],swing_figure:[s],eyes:[l],slide_figure:[d],fence_hands:[M]}}}function Xg(n){const t=new te;Ct(.08,2.2,2.2,2436157,H-.06,1.35,-C*.32,t),Ct(.9,.08,2.4,2765122,H-.5,2.5,-C*.32,t),Ct(.08,2.5,.08,2765122,H-.34,1.25,-C*.29,t),Ct(.08,2.5,.08,2765122,H-.34,1.25,-C*.35,t),Ct(.35,.08,1.8,2765122,H-.32,.55,-C*.32,t);const i=Ct(.62,.06,1.7,2765122,H-.5,2.4,-C*.32,t).material;i.emissive.setHex(9414340);const s=new Ln(12374250,9,8.5,2);s.position.set(H-.7,2.2,-C*.32),t.add(s);const r=new te,o=new ot(new Wt(.42,.6,.26),n.darkFigure);o.position.y=.95;const a=new ot(new rn(.13,10,8),n.darkFigure);a.position.set(-.06,1.38,0);const l=new ot(new Wt(.4,.5,.18),n.darkFigure);l.position.set(-.2,.35,0),r.add(o,a,l),r.position.set(H-.42,0,-C*.32),r.visible=!1,t.add(r);const c=new te,h=new ot(new Wt(.44,1.2,.26),n.darkFigure);h.position.y=.9;const u=new ot(new rn(.15,10,8),n.darkFigure);u.position.y=1.64;for(const M of[-.26,.26]){const R=new ot(new Wt(.09,.14,.1),n.pale);R.position.set(M,.72,.03),c.add(R)}c.add(h,u),c.position.set(-1.1,0,Ee-yn-.6),c.visible=!1,t.add(c);const f=[],p=[],g=[],_=-C*.55,m=Ee-yn-.9;for(const[M,R,E]of[[H-.4,m,1],[-2.6,_,-1]]){Ct(.12,3.4,.12,3817815,M,1.7,R,t),g.push(Ct(.3,.66,.24,1843760,M,3.55,R,t));const b=Ct(.16,.16,.06,3477780,M,3.7,R+.14*E,t),P=Ct(.16,.16,.06,1124378,M,3.42,R+.14*E,t);f.push(b.material),p.push(P.material)}Ct(60,.2,yn*2,1843244,0,-.1,Ee,t);for(const M of[-1,1])Ct(15,Qt,1,2304056,M*11,Qt/2,Ee-yn-.5,t),Ct(15,Qt,1,2106938,M*11,Qt/2,Ee+yn+.5,t),Hg(M,t);for(let M=0;M<4;M++)Ct(H*2-1.2,.03,.6,8949922,0,.02,-C*.62-M*1.15,t);Ct(H*2-1.2,.03,.35,8949922,0,.02,-C*.585,t),Ct(.16,.7,.16,3752282,H-.7,.35,-C*.24,t),Ct(.16,.7,.16,3752282,H-.7,.35,-C*.4,t),Ct(.5,.14,4,2304056,H-.25,.07,-C*.32,t);const d=new Xt({map:og(),roughness:.95}),w=new ot(new Le(6.4,1.1),d);w.position.set(0,5.25,-C+.25),t.add(w);const T=new te;for(const M of[-.19,.19]){const R=Ct(.24,.11,.34,14210248,0,.055,M,T);R.position.z=M}return T.position.set(H-.32,.59,-C*.32+.62),T.visible=!1,t.add(T),{group:t,refs:{trafficRed:f,trafficGreen:p,busFigure:r,banner:w,boothLight:s,boothTubeMat:i,acrossFigure:c,benchShoes:T},hit:{traffic_red:g,bus_figure:[r],across_figure:[c],bench_shoes:[T]}}}function qg(n){const t=new te;Ct(.14,.6,1.5,2106938,-H+.1,3.1,-C*.25,t),Ct(1.6,.7,.14,1975348,H-.1,3.35,-C*.33,t),Ct(.14,.55,1.3,1843504,-H+.1,2.9,-C*.47,t),Ct(1.8,.6,.14,2106938,H-.1,3.15,-C*.6,t);const e=new te,i=Et(2962246),s=new Wt(.8,1.15,.06);for(const R of[1,-1]){const E=new ot(s,i);E.position.set(0,.56,R*.16),E.rotation.x=-R*.26,e.add(E)}e.position.set(-H+.75,0,-C*.55),e.rotation.y=su,t.add(e);const r=new te,o=new ot(new Ns(.42,16),n.blood);o.rotation.x=-Math.PI/2,o.position.set(1.75,.015,-C*.452);const a=new ot(new Le(.4,5.4),n.blood);a.rotation.x=-Math.PI/2,a.rotation.z=1.16,a.position.set(-.35,.015,-C*.437);const l=new ot(new Le(1.4,1.9),n.bloodWall);l.position.set(H-.38,.9,-C*.452),l.rotation.y=-Math.PI/2;const c=new Xt({color:11055293,roughness:.4,emissive:1448480});for(const[R,E,b]of[[-.34,.66,.34],[.24,.98,.42]]){const P=new ot(new Wt(.16+b,.26,.72),c);P.position.set(H-.28-b/2,E,-C*.452+R),P.rotation.z=.18,r.add(P)}r.add(o,a,l),r.visible=!1,t.add(r);const h={front:Et(2304056),shutter:Et(2765123),slat:Et(2041140),awning:Et(2827060),signB:Et(2106938),crate:Et(2501694),steel:Et(3817815),wire:Et(1119261)};V(h.signB,H*2+.6,.55,.05,0,4.4,-C*.12,t);const u=[[1,-C*.2,3],[-1,-C*.33,3.4],[1,-C*.46,3.2],[-1,-C*.58,3],[1,-C*.71,3.4],[-1,-C*.83,3.2]],f=2,p=new te;t.add(p),u.forEach(([R,E,b],P)=>{const y=R*(H-.1),x=P===f?p:t;V(h.front,.2,4.2,b,y,2.1,E,t),V(h.shutter,.16,2.3,b-.5,R*(H-.26),1.15,E,x);for(let O=0;O<4;O++)V(h.slat,.17,.05,b-.5,R*(H-.26),.5+O*.5,E,x);const L=V(h.awning,.95,.08,b+.2,R*(H-.55),2.72,E,t);L.rotation.z=R*-.28,V(h.signB,.14,.62,b-.8,R*(H-.12),3.42,E,t),P%2===1&&V(h.signB,.5,1.5,.16,R*(H-.45),3.3,E+1.1,t),V(h.steel,.4,.08,b-1.2,R*(H-.2),.78,E,t);for(const O of[-1,1])V(h.steel,.06,.78,.06,R*(H-.2),.39,E+O*(b/2-.8),t)});const g=[[H-.2,.18,-C*.42,.44],[H-.22,.53,-C*.43,.4],[-H+.2,.2,-C*.7,.42],[-H+.22,.18,-C*.26,.44],[H-.24,.17,-C*.63,.4],[-H+.2,.54,-C*.71,.36]];for(const[R,E,b,P]of g)V(h.crate,P,P*.78,P,R,E,b,t);for(const R of[-C*.28,-C*.52,-C*.76]){V(h.wire,H*2+.4,.035,.035,0,4.05,R,t);for(let E=-2;E<=2;E++)V(h.crate,.09,.13,.09,E*1.15,3.95,R,t)}const[,_,m]=u[f],d=m-.5,w=new te;V(h.shutter,.16,.95,d,H-.26,1.83,_,w);for(let R=0;R<2;R++)V(h.slat,.17,.05,d,H-.26,1.55+R*.4,_,w);V(Et(263690),.06,1.35,d,H-.36,.68,_,w);const T=new Xt({color:10134192,roughness:.45,emissive:1316637}),M=new ot(new Wt(.26,.17,d),T);return M.position.set(H-.28,1.33,_),w.add(M),w.visible=!1,t.add(w),{group:t,refs:{sign:e,dragMark:r,openShutter:w,closedShutter:p},hit:{sign_turn:[e],drag_mark:[r],open_shutter:[w]}}}function Xe(n){return{reset:t=>{n(t).visible=!1},apply:t=>{n(t).visible=!0}}}const dc={shoes:Xe(n=>n.shoes),bench_shoes:Xe(n=>n.benchShoes),bike_figure:Xe(n=>n.bikeFigure),lone_shadow:Xe(n=>n.loneShadow),fence_hands:Xe(n=>n.fenceHands),slide_figure:Xe(n=>n.slideFigure),across_figure:Xe(n=>n.acrossFigure),open_shutter:{reset:n=>{n.openShutter.visible=!1,n.closedShutter.visible=!0},apply:n=>{n.openShutter.visible=!0,n.closedShutter.visible=!1}},shutter_glow:{reset:n=>{n.shutterGlowMat.color.setHex(1119260),n.shutterGlowSlitMat.emissive.setHex(0),n.shutterGlowLight.intensity=0},apply:n=>{n.shutterGlowMat.color.setHex(9077362),n.shutterGlowSlitMat.emissive.setHex(16764810),n.shutterGlowLight.intensity=5.5}},umbrella:Xe(n=>n.umbrella),sensor_on:{reset:n=>{n.sensorMat.emissive.setHex(0),n.sensorLight.intensity=0},apply:n=>{n.sensorMat.emissive.setHex(13615780),n.sensorLight.intensity=4}},window_red:{reset:n=>{n.windowMat.emissive.setHex(0)},apply:n=>{n.windowMat.emissive.setHex(7999504)}},laundry_open:{reset:n=>{n.laundryShutter.position.y=1.25,n.laundryShutter.scale.y=1,n.laundryMat.emissive.setHex(0),n.laundryLight.intensity=0},apply:n=>{n.laundryShutter.position.y=2,n.laundryShutter.scale.y=.42,n.laundryMat.emissive.setHex(7833487),n.laundryLight.intensity=6}},sign_lit:{reset:n=>{n.storeSignMat.emissive.setHex(0)},apply:n=>{n.storeSignMat.emissive.setHex(7214100)}},swing:{reset:n=>{n.swingPivot.rotation.x=0}},lamp_flicker:{reset:n=>{n.lampLight.intensity=n.group.userData.morning?0:n.group.userData.lampBase??Ps[0]}},traffic_red:{reset:()=>{}},ball_out:{reset:n=>{n.ball.position.copy(ou)},apply:n=>{n.ball.position.copy(Ig)}},sign_turn:{reset:n=>{n.sign.rotation.y=su},apply:n=>{n.sign.rotation.y=Dg}},flyer_digits:{reset:n=>{n.flyerMat.map=n.flyerTex[0]},apply:n=>{n.flyerMat.map=n.flyerTex[1]}},realty_urgent:{reset:n=>{n.realtyMat.map=n.realtyTex[0]},apply:n=>{n.realtyMat.map=n.realtyTex[1]}},shop_typo:{reset:n=>{n.shopSignMat.map=n.shopTex[0],n.shopSignMat.emissiveMap=n.shopTex[0]},apply:n=>{n.shopSignMat.map=n.shopTex[1],n.shopSignMat.emissiveMap=n.shopTex[1]}},figure:{reset:n=>{n.figure.visible=!1},apply:n=>{const[t,e]=ru[n.group.userData.figureAnchor??0];n.figure.position.set(t,0,e),n.figure.rotation.y=Math.random()<.5?Math.PI:Math.PI*.85,n.figure.visible=!0}},blood_trail:Xe(n=>n.bloodTrail),skull:Xe(n=>n.skull),face_window:Xe(n=>n.facePlane),handprints:Xe(n=>n.handprints),swing_figure:Xe(n=>n.swingFigure),eyes:Xe(n=>n.eyes),bus_figure:Xe(n=>n.busFigure),drag_mark:Xe(n=>n.dragMark)};function Yg(n,t){var e,i;for(const s of Object.values(dc))s.reset(n);n.group.userData.effects=t;for(const s of t)(i=(e=dc[s]).apply)==null||i.call(e,n)}const $g=new $t(Ci),mi={hue:.075,hueMix:.92,satBase:.07,satMix:.3,satMax:.24,lift:.11,gain:.95},xs={h:0,s:0,l:0},fc=new $t;function Kg(n){fc.setHex(n).getHSL(xs);const t=xs.h+(mi.hue-xs.h)*mi.hueMix,e=Math.min(mi.satMax,mi.satBase+xs.s*mi.satMix),i=Math.min(.92,xs.l*mi.gain+mi.lift);return fc.setHSL(t,e,i).getHex()}function Zg(n,t){n.traverse(e=>{const i=e;if(!i.isMesh)return;const s=Array.isArray(i.material)?i.material:[i.material];for(const r of s){const o=r;if(!(o!=null&&o.color)||!o.isMeshStandardMaterial||o.userData.keepColor||o.map&&!o.userData.surface||o.emissive&&o.emissive.getHex()!==0)continue;o.userData.nightColor===void 0&&(o.userData.nightColor=o.color.getHex());const l=o.userData.nightColor;o.color.setHex(t?Kg(l):l)}})}function jg(n,t){n.themes.forEach((e,i)=>e.visible=i===t-1)}function uu(n,t){if(n.group.userData.morning)return;const e=Ps[Math.min(t,Ps.length-1)];n.group.userData.lampBase=e,n.lampLight.intensity=e,n.ambient.intensity=Math.max(1.1,2.2-t*.18),n.group.userData.ambientBase=n.ambient.intensity,hu(n,9-t*.7)}function hu(n,t,e=!1){n.boothLight.intensity=Math.max(0,t),n.boothLight.color.setHex(e?Rg:12374250),n.boothTubeMat.emissive.setHex(t>.1?e?Cg:9414340:0)}function Oa(n,t){n.group.userData.morning=t,Zg(n.scene,t),n.scene.background.setHex(t?au:Ci);const e=n.scene.fog;e.color.setHex(t?lu:Ci),e.density=t?.012:.044,n.ambient.color.setHex(t?15656166:3752286),n.ambient.intensity=t?1.8:2.2,n.group.userData.ambientBase=n.ambient.intensity,n.moon.color.setHex(t?16767424:8425664),n.moon.intensity=t?4.6:.75,t?n.moon.position.set(11,6,3):n.moon.position.set(4,10,2),n.skyDome.visible=t,n.skyDome.material.color.setScalar(1),n.lampLight.color.setHex(t?Eg:16762503),n.lampLight.intensity=t?Tg:Ps[0],n.lampHeadMat.emissive.setHex(t?bg:3811858),hu(n,t?Pg:9,t)}function gr(n,t,e){const i=n.scene.fog,s=Math.max(0,Math.min(1,t));i.density=e+s*s*1.4;const r=!!n.group.userData.morning,o=Math.pow(1-s,2.2),a=(c,h)=>{c.setHex(h),r&&s>0&&c.lerp($g,Math.min(1,s*2.5)),c.multiplyScalar(o)};a(i.color,r?lu:Ci),a(n.scene.background,r?au:Ci),r&&n.skyDome.material.color.setScalar(o);for(const c of n.tunnelLights)c.color.setHex(r?wg:nu),c.intensity=iu*(1-s);n.tunnelLampMat.emissive.setHex(r?Ag:Fa).multiplyScalar(1-s);const l=n.group.userData.ambientBase??2.2;n.ambient.intensity=l*(1-s*.92)}function Jg(n,t){n.stretchMark.visible=t}function du(n,t,e=!0){const i=!!n.group.userData.morning;n.tunnel.visible=!t,n.shopFront.visible=t&&e,n.homeFront.visible=t&&!e,n.shopGlow.intensity=t?e?26:30:i?0:4,n.shopSign.visible=t&&e,n.shopSignMat.emissive.setHex(t&&e?16777215:0)}function Qg(n,t){n.backTunnel.visible=!t,n.shopBack.visible=t}function t_(n,t){n.banner.position.z=t?-C+.25:-.25,n.banner.rotation.y=t?0:Math.PI}function e_(n,t){const e=(i,s)=>{i.scale.x=s?-1:1};e(n.themes[3],t),e(n.themes[4],!t),n.banner.scale.x=t?-1:1}const n_=9049622,i_=3111498;function s_(n,t){const e=n.group.userData.effects??[];if(e.includes("lamp_flicker")){const s=n.group.userData.lampBase??Ps[0],r=t%1.6,o=!(r<.12||r>.24&&r<.36);n.lampLight.intensity=o?s:Math.min(2,s)}if(e.includes("swing")&&(n.swingPivot.rotation.x=Math.sin(t*2.2)*.38),n.themes[3].visible){const s=e.includes("traffic_red"),r=_g(t)?Math.floor(t*4)%2===0:!0,o=!s&&Cs(t)&&r,a=s||!Cs(t);for(const l of n.trafficGreen)l.emissive.setHex(o?i_:0);for(const l of n.trafficRed)l.emissive.setHex(a?n_:0)}const i=n.group.userData.carStart;if(i!==void 0){const s=(t-i)/tu;if(s>=1||!n.themes[3].visible)n.car.visible=!1,n.carLight.intensity=0,n.group.userData.carStart=void 0;else{const r=n.group.userData.carDir??1;n.car.position.x=r*(-da/2+da*s),n.car.rotation.y=r>0?0:Math.PI,n.car.visible=!0,n.carLight.intensity=n.group.userData.morning?Lg:26}}}function r_(n){n.group.userData.carStart=void 0,n.car.visible=!1,n.carLight.intensity=0}function o_(n,t,e=1){n.group.userData.carStart=t,n.group.userData.carDir=e,n.car.position.set(e*-da/2,0,Ee),n.car.visible=!0}function a_(n){return n.car.visible&&Math.abs(n.car.position.x)<H+2.2}function l_(n){const t=mg(),e=zg(n,t),i=Gg(t),s=Vg(),r=Wg(t),o=Xg(t),a=qg(t),c=[i,s,r,o,a].map(f=>f.group);c.forEach((f,p)=>{p!==3&&kg(f),f.visible=!1,f.name=`테마${p+1}`,e.refs.group.add(f)}),e.refs.group.name="골목",e.refs.tunnel.name="앞터널",e.refs.backTunnel.name="뒤터널",e.refs.shopFront.name="FF-1204(앞)",e.refs.shopBack.name="FF-1204(뒤)",e.refs.homeFront.name="집",e.refs.figure.name="그림자사람",e.refs.car.name="차",e.refs.shopSign.name="FF-1204 간판",o.refs.banner.name="개업 현수막",o.refs.busFigure.name="정류장의 형체",a.refs.sign.name="입간판",a.refs.dragMark.name="끌린 자국",i.refs.bloodTrail.name="핏자국",i.refs.skull.name="백골",i.refs.umbrella.name="우산",s.refs.handprints.name="손자국",r.refs.swingFigure.name="그네의 형체",r.refs.eyes.name="어둠의 눈",r.refs.ball.name="공";const h=(f,p)=>{const g=f.name?p?`${p}/${f.name}`:f.name:p;f.children.forEach((_,m)=>{_.isMesh&&!_.userData.src&&(_.userData.src=`${g||"?"}#${m}`),h(_,g)})};h(e.refs.group,"");const u={...e.hit,...i.hit,...s.hit,...r.hit,...o.hit,...a.hit};return{...e.refs,...i.refs,...s.refs,...r.refs,...o.refs,...a.refs,themes:c,hit:u}}const Ba="fries.save.v1",yr={night:1,tut:!1,misses:0,results:[],brightness:1,muted:!1};function c_(n){const t={...yr,results:[]};if(typeof n!="object"||n===null)return t;const e=n;return typeof e.night=="number"&&Number.isInteger(e.night)&&e.night>=1&&e.night<=99&&(t.night=e.night),typeof e.tut=="boolean"&&(t.tut=e.tut),t.night>1&&(t.tut=!0),typeof e.misses=="number"&&Number.isInteger(e.misses)&&e.misses>=0&&(t.misses=e.misses),Array.isArray(e.results)&&(t.results=e.results.slice(0,99).map(i=>i==="crispy"||i==="lukewarm"||i==="soggy"?i:null)),typeof e.brightness=="number"&&e.brightness>=.6&&e.brightness<=1.9&&(t.brightness=e.brightness),typeof e.muted=="boolean"&&(t.muted=e.muted),t}function u_(){try{const n=localStorage.getItem(Ba);return n?c_(JSON.parse(n)):{...yr,results:[]}}catch{return{...yr,results:[]}}}const ce=u_();function cs(){try{localStorage.setItem(Ba,JSON.stringify(ce))}catch{}}function h_(){Object.assign(ce,yr,{results:[]});try{localStorage.removeItem(Ba)}catch{}}function d_(){return ce.night>1||ce.misses>0||ce.tut}const f_=`
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
`,_e=(n,t=2)=>n.toFixed(t);class p_{constructor(t){this.active=!1,this.clearView=!0,this.lit="auto",this.panel=null,this.ray=new Wc,this.center=new Kt(0,0),this.speed=7,this.lastTapAt=0,this.line="",this.host=t;const e=document.createElement("style");e.textContent=f_,document.head.appendChild(e),this.hud=document.createElement("div"),this.hud.id="adm-hud",this.badge=document.createElement("div"),this.badge.id="adm-badge",this.badge.textContent="ADMIN",window.addEventListener("keydown",i=>this.onKey(i)),window.addEventListener("wheel",i=>{!this.active||this.panel||(this.speed=Math.max(.5,Math.min(60,this.speed*(i.deltaY>0?.85:1.18))))},{passive:!0})}onKey(t){var e;if(t.ctrlKey&&t.code==="Space"){t.preventDefault();const i=performance.now();i-this.lastTapAt<600?(this.lastTapAt=0,this.toggle()):this.lastTapAt=i;return}if(this.active){if(t.code==="Escape"){this.panel?this.closePanel():this.openPanel();return}t.code==="KeyC"&&!this.panel&&(t.preventDefault(),(e=navigator.clipboard)==null||e.writeText(this.line),this.flash("좌표 복사됨"))}}toggle(){this.active=!this.active,this.active?document.body.append(this.hud,this.badge):(this.closePanel(),this.hud.remove(),this.badge.remove())}flash(t){this.badge.textContent=t,setTimeout(()=>this.badge.textContent="ADMIN",900)}fly(t,e,i,s){if(this.panel)return;const r=s("AltLeft")||s("AltRight")?4:1,o=this.speed*r*t;let a=0,l=0,c=0;(s("KeyW")||s("ArrowUp"))&&(a+=1),(s("KeyS")||s("ArrowDown"))&&(a-=1),(s("KeyD")||s("ArrowRight"))&&(l+=1),(s("KeyA")||s("ArrowLeft"))&&(l-=1),s("Space")&&(c+=1),(s("ShiftLeft")||s("ShiftRight"))&&(c-=1);const h=this.host.camera,u=Math.cos(i);h.position.x+=(Math.sin(e)*-a*u+Math.cos(e)*l)*o,h.position.z+=(-Math.cos(e)*a*u-Math.sin(e)*l)*o,h.position.y+=(Math.sin(i)*a+c)*o}update(){if(!this.active)return;const t=this.host.camera,e=this.host.snapshot(),i=t.position,s=this.host.segLength,r=i.z<.5&&i.z>-s*1.4?`  (-L*${_e(-i.z/s,3)})`:"",o=new N;t.getWorldDirection(o);const a=(Math.atan2(-o.x,-o.z)*180/Math.PI+360)%360,l=Math.asin(Math.max(-1,Math.min(1,o.y)))*180/Math.PI;this.line=`x ${_e(i.x)}  y ${_e(i.y)}  z ${_e(i.z)}${r}`;const c=this.pick();this.hud.innerHTML=`<span class="k">좌표</span> <span class="v">x ${_e(i.x)}  y ${_e(i.y)}  z ${_e(i.z)}</span><span class="k">${r}</span>
<span class="k">시선</span> yaw ${_e(a,1)}°  pitch ${_e(l,1)}°   <span class="k">속도</span> ${_e(this.speed,1)}
<span class="k">상태</span> ${e.morning?"아침(퇴근길)":`밤 ${e.night}`}  구간 ${e.done+1}/${e.total}  테마 ${e.theme}  깊이 ${e.depth}  늘어남 ${e.stretches}
<span class="k">이동</span> <span class="o">Esc</span> — 밤·테마·이상현상·깊이 골라서 점프   <span class="k">C</span> 좌표 복사
<span class="k">조준</span> ${c}`}pick(){var g;this.ray.setFromCamera(this.center,this.host.camera);const e=this.ray.intersectObjects(this.host.scene.children,!0).find(_=>{if(!_.object.isMesh)return!1;for(let m=_.object;m;m=m.parent)if(!m.visible)return!1;return!0});if(!e)return'<span class="k">(없음)</span>';const i=e.object,s=[];for(let _=i;_;_=_.parent)_.name&&s.unshift(_.name);const r=i.geometry,o=r.parameters;let a=r.type??"?";o&&(r.type==="BoxGeometry"?a=`Box ${_e(o.width)}×${_e(o.height)}×${_e(o.depth)}`:r.type==="PlaneGeometry"?a=`Plane ${_e(o.width)}×${_e(o.height)}`:r.type==="SphereGeometry"?a=`Sphere r${_e(o.radius)}`:r.type==="CylinderGeometry"&&(a=`Cyl r${_e(o.radiusTop)} h${_e(o.height)}`));const l=i.material,c=Array.isArray(l)?"(면별 재질)":"#"+(((g=l.color)==null?void 0:g.getHexString())??"??????"),h=i.getWorldPosition(new N),u=this.host.segLength,f=h.z<.5&&h.z>-u*1.4?` = -L*${_e(-h.z/u,3)}`:"",p=typeof i.userData.src=="string"?i.userData.src:"";return this.line+=`
${s.join(" › ")} | ${p} | ${a} ${c} | x ${_e(h.x)} y ${_e(h.y)} z ${_e(h.z)}${f}`,`<span class="o">${s.join(" › ")||"(이름 없음)"}</span>
`+(p?`     <span class="o">${p}</span>
`:"")+`     ${a}  ${c}  <span class="k">${_e(e.distance,1)}m</span>
     <span class="v">x ${_e(h.x)}  y ${_e(h.y)}  z ${_e(h.z)}</span><span class="k">${f}</span>`}openPanel(){var a,l,c,h;(a=document.exitPointerLock)==null||a.call(document);const t=this.host.snapshot(),e=document.createElement("div");e.id="adm-panel";const i=this.host.anomalies.map(u=>`<option value="${u.effect}">${u.segment?`구간 ${u.segment}`:"전 구간"} · ${u.label}</option>`).join(""),s=m_(this.host.nights,this.host.segments);e.innerHTML=`
      <h3>관리자 — 콘솔</h3>
      <label><span>스테이지</span><select id="adm-stop">${s.map((u,f)=>{const p=u.morning===t.morning&&u.theme===t.theme&&(u.morning||u.night===t.night);return`<option value="${f}"${p?" selected":""}>${f+1}. ${u.label}</option>`}).join("")}</select></label>
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
        관리자 모드에서는 붙잡힘·치임·늘어남·구간 전환이 전부 멈춘다</div>`,document.body.appendChild(e),this.panel=e;const r=e.querySelector("#adm-depth"),o=e.querySelector("#adm-depth-v");r.addEventListener("input",()=>o.textContent=r.value),(l=e.querySelector("#adm-go"))==null||l.addEventListener("click",()=>{const u=e.querySelector("#adm-eff").value;this.clearView=e.querySelector("#adm-view").value==="clear";const f=s[Number(e.querySelector("#adm-stop").value)]??s[0];this.lit=e.querySelector("#adm-lit").value;const p=this.host.anomalies.find(_=>_.effect===u),g=p&&p.segment?p.segment:f.theme;this.host.jump({night:f.night,morning:f.morning,theme:g,daylight:this.lit==="auto"?void 0:this.lit==="day",depth:Number(r.value),effect:u===""?null:u}),g!==f.theme&&this.flash(`이상현상에 맞춰 구간 테마 ${g}로 이동`),this.closePanel()}),(c=e.querySelector("#adm-close"))==null||c.addEventListener("click",()=>this.closePanel()),(h=e.querySelector("#adm-off"))==null||h.addEventListener("click",()=>{this.closePanel(),this.toggle()})}closePanel(){var t;(t=this.panel)==null||t.remove(),this.panel=null,this.active&&this.host.relock()}}const pc={1:"원룸 골목 (집)",2:"상가 골목",3:"놀이터 옆길",4:"정류장 앞 (차도)",5:"먹자골목 입구 (가게)"};function m_(n,t){const e=[];for(let i=1;i<=2;i++){const s=t-2+i;e.push({night:1,morning:!0,theme:s,label:`퇴근길 ${i}/2 · ${pc[s]}`})}for(let i=1;i<=n;i++)for(let s=1;s<=t;s++){const r=t+1-s;e.push({night:i,morning:!1,theme:r,label:`밤 ${i} — ${s}/${t} · ${pc[r]}`})}return e}const g_=document.getElementById("app"),bn=new H0({antialias:!0});bn.setPixelRatio(Math.min(window.devicePixelRatio,2));bn.setSize(window.innerWidth,window.innerHeight);bn.toneMapping=Mc;g_.appendChild(bn.domElement);const fa=1.35,Jn=document.getElementById("bright"),za=document.getElementById("start");let fu=0;function mc(){window.clearTimeout(fu),za.classList.add("peek")}function mo(){za.classList.remove("peek")}Jn&&(Jn.value=String(ce.brightness),bn.toneMappingExposure=ce.brightness*fa,Jn.addEventListener("pointerdown",mc),window.addEventListener("pointerup",mo),window.addEventListener("pointercancel",mo),Jn.addEventListener("input",()=>{bn.toneMappingExposure=parseFloat(Jn.value)*fa,ce.brightness=parseFloat(Jn.value),cs(),mc(),fu=window.setTimeout(mo,1e3)}));const Cr=new Vh,we=new hn(72,window.innerWidth/window.innerHeight,.1,120),ve=l_(Cr),le=new q0(bn.domElement),me=new Y0;ng();const on=new ig,Er=new nd,go=document.getElementById("pain");function Ha(n){go&&(go.style.opacity=String(Math.min(.55,n*.09)),go.classList.toggle("acute",n>=4))}const Zi=document.getElementById("sound-btn");function ka(){on.setMuted(ce.muted),Zi&&(Zi.textContent=ce.muted?"🔇":"🔊",Zi.setAttribute("aria-label",ce.muted?"소리 켜기":"소리 끄기"))}function pu(){ce.muted=!ce.muted,cs(),ka()}Zi==null||Zi.addEventListener("click",pu);window.addEventListener("keydown",n=>{n.code==="KeyM"&&pu()});ka();let Ue="gate",fe="return",ss=!1,_o=!1,Ae=ce.night,Ie=0,Ye=Jt.segments,Re=1,Qe=0,us=0,Pr=!1,Mi=0,Tr=0,Pi=0,br=-1,Si=0,yi=0,Ls=0,wn=[],pa=new Set,ma=0;const Bt={x:0,z:0};function mu(){return fe==="tutorial"?{chanceBonus:0,swarmFloor:0}:V0(Ae)}function __(){const{chanceBonus:n}=mu();return Math.min(.8+n,Jt.baseAnomalyChance+n+Ls/60*Jt.chancePerMinute)}const Ga=new URLSearchParams(location.search),Va=Ga.get("a"),v_=Ga.has("t"),x_=Math.max(0,Math.min(5,Number(Ga.get("anchor")??2)||0));let gu=null;const lr=()=>gu??Va;let vo=!1;const _u={camera:we,scene:Cr,segLength:Jt.segLength,corridorHalfWidth:Jt.corridorHalfWidth,segments:Jt.segments,nights:ei,anomalies:ua.map(n=>({id:n.id,effect:n.effect,segment:n.segment,label:`${n.id} ${n.effect} (${n.rule==="avert"?"형체":"흔적"})`})),snapshot:()=>({night:Ae,done:Ie,total:Ye,theme:Re,depth:Qe,stretches:us,morning:fe==="tutorial"}),relock:()=>le.activate(),jump:n=>{n.effect!==void 0&&(gu=n.effect),n.night!==void 0&&(Ae=Math.max(1,Math.floor(n.night))),n.morning!==void 0&&(fe=n.morning?"tutorial":"return"),Oa(ve,n.daylight??fe==="tutorial"),Wa(),n.theme!==void 0&&(Re=Math.max(1,Math.min(Jt.segments,n.theme))),Ie=fe==="return"?Jt.segments-Re:Re-1,n.depth!==void 0&&(Qe=Math.max(0,Math.min(Jt.depthLimit-1,n.depth))),Si=Vt.tutBeats.length,yi=Number.MAX_SAFE_INTEGER,Fs(),Ha(Qe),Ue="walk"}},ji=new p_(_u);function Fs(n=!1){jg(ve,Re);const t=fe==="tutorial",e=ua.filter(o=>(o.segment===Re||o.segment===0)&&o.night<=Ae&&!pa.has(o.id)),i=oi(Ae).onboarding,s=!lr()&&i&&Ie===0,r=i&&ma===0&&(fe==="return"?Re<=2:Re>=Jt.segments-1);if(t)wn=[];else if(lr()){const o=ua.filter(l=>l.effect===lr()&&(l.segment===Re||l.segment===0)),a=o.find(l=>l.night<=Ae)??o[0];wn=a?[a]:[]}else if(e.length>0&&!s&&(r||Math.random()<__())){const o=Math.min(X0(Pi+mu().swarmFloor),e.length),a=[...e].sort(()=>Math.random()-.5),l={gaze:a.filter(u=>u.rule==="gaze"),avert:a.filter(u=>u.rule==="avert")},c=[];let h=Math.random()<.5?"gaze":"avert";for(;c.length<o;){const u=h==="gaze"?"avert":"gaze",f=l[h].shift()??l[u].shift();if(!f)break;c.push(f),h=u}wn=c,ma+=c.length}else wn=[];pa=new Set(wn.map(o=>o.id)),wn.some(o=>o.effect==="figure")&&(ve.group.userData.figureAnchor=lr()?x_:Math.floor(Math.random()*ru.length)),r_(ve),br=-1,uu(ve,Qe),Ha(Qe),Yg(ve,wn.map(o=>o.effect)),Jg(ve,Pr&&!t),on.duck(wn.length>0),du(ve,Ie===Ye-1,fe!=="return"),Qg(ve,fe==="return"&&Ie===0),t_(ve,fe!=="return"),e_(ve,fe==="return"),Bt.x=0,Bt.z=-.5,le.yaw=0,le.pitch=0,n?(me.setStatusStretch(ga()),on.stretch()):me.setStatus(ga())}function ga(){return fe==="tutorial"?`퇴근길 — ${Vt.segLabel(Ie+1,Ye,Re)}`:fe==="return"?`${Vt.nightLabel(Ae)} — 돌아가는 길 ${Vt.segLabel(Ie+1,Ye,Re)}`:`${Vt.nightLabel(Ae)} — ${Vt.segLabel(Ie+1,Ye,Re)}`}function M_(){Ye+=1,Tr+=1,us+=1,Pi=Math.min(Jt.swarmMax,Pi+1),Qe+=Jt.growDepthCost,ce.misses+=1,cs(),du(ve,Ie===Ye-1,fe!=="return"),uu(ve,Qe),Ha(Qe),me.setStatusStretch(ga()),on.stretch(),Qe>=Jt.depthLimit&&qa()}const wi={move:!1,hintZ:0},vu=()=>le.usesTouch||"ontouchstart"in window;function Wa(){Ie=0,Ye=Jt.segments,Re=1,Qe=0,us=0,Pi=0,Pr=!1,Ls=0,pa=new Set,ma=0,Mi=0,Tr=0,br=-1}async function S_(){fe="tutorial",Wa(),Ie=Jt.segments-2,Re=Jt.segments-1,Oa(ve,!0),Fs(),Bt.z=-36*.24,Ue="walk",Si=0,wi.move||(wi.hintZ=Bt.z,me.showHint(vu()?Vt.hintMoveTouch:Vt.hintMovePc))}async function Xa(){fe="return",Wa(),Re=Jt.segments,Oa(ve,!1),Fs(),Ue="walk",yi=0,me.say(oi(Ae).intro,4200),oi(Ae).onboarding&&!wi.move&&(wi.hintZ=Bt.z,me.showHint(vu()?Vt.hintMoveTouch:Vt.hintMovePc))}async function xu(){oi(Ae).onboarding&&!Va&&(v_||!ce.tut)?await S_():await Xa()}async function qa(){Ue="transition",await me.fadeOut(1400),await me.blackScreen(Vt.softFail,Vt.softFailBtn),le.activate(),await xu(),await me.fadeIn(900)}async function y_(){Ue="transition",await me.fadeOut(800),await me.blackScreen(Vt.tutShopArrive,Vt.tutShopBtn),ce.tut=!0,cs(),await me.blackScreen(Vt.tutDusk,Vt.tutDuskBtn),le.activate(),await Xa(),await me.fadeIn(1100)}async function E_(){Ue="transition",await me.fadeOut(800);const n=W0(us),t=n==="crispy"?Vt.homeCrispy:n==="lukewarm"?Vt.homeLukewarm:Vt.homeSoggy;ce.results[Ae-1]=n,ce.night=Ae+1,cs(),await me.blackScreen(Vt.homeArrive,Vt.homeOpen);const e=Ae>ei?"…도장 찍을 칸이, 이제 없다":`도장 ${"●".repeat(Ae)}${"○".repeat(ei-Ae)}`;await me.arrivalScene({gauge:`${Vt.homeGauge[n]} · ${e}`,result:t,epilogue:oi(Ae).epilogue,steps:[Vt.homeSit,Vt.homeEnd],endLabel:Vt.homeEnd,bg:n==="crispy"?"#181008":n==="lukewarm"?"#100e12":"#0a0d16",onBite:()=>{}}),le.activate(),Ae+=1,await me.blackScreen(Vt.nightOpen(Ae),Vt.nightOpenBtn),le.activate(),await Xa(),await me.fadeIn(900)}async function T_(){Ue==="walk"&&(Ue="transition",gr(ve,1,fe==="tutorial"?.008:.044),on.duck(!0),await new Promise(n=>setTimeout(n,900)),le.yaw=0,le.pitch=0,Bt.z=qe*.42,me.say(Vt.turnedBack,3400),Ue="walk")}async function b_(){Ue==="walk"&&await w_(fe==="tutorial"?Vt.carHitDay:Vt.carHit)}async function w_(n){if(Ue==="walk"){if(Ue="transition",us+=1,Ye+=1,Qe+=Jt.stretchDepthCost,Pi=Math.min(Jt.swarmMax,Pi+1),ce.misses+=1,cs(),on.duck(!0),await me.fadeOut(700),Ie+=1,Qe>=Jt.depthLimit){await qa();return}Pr=!0,Fs(!0),me.say(fe==="tutorial"?n:`${n}
${Vt.stretchNotice}`,3800),Ue="walk",await me.fadeIn(700)}}async function A_(){if(Ie+=1,Qe>=Jt.depthLimit){await qa();return}if(Ie>=Ye){fe==="tutorial"?await y_():await E_();return}const n=Tr>0;n&&(Tr-=1),Pr=n,n||(Re=fe==="return"?Math.max(Re-1,1):Math.min(Re+1,Jt.segments)),Fs(),Bt.z=qe/2}const Ms=new N,Mn=new os,xo=new N,gc=new Wc;function R_(n,t){for(let e=n;e;e=e.parent)if(e===t)return!0;return!1}function C_(n){for(let t=n;t;t=t.parent)if(!t.visible)return!1;return!0}function P_(){return wn.map(n=>{const t=ve.hit[n.effect],e=[];for(const l of t)l.traverse(c=>{c.isMesh&&e.push(c)});let i=!1,s=1/0,r=null;for(const l of e){if(Mn.setFromObject(l),Mn.isEmpty())continue;Mn.getCenter(xo),s=Math.min(s,xo.distanceTo(we.position)),gc.set(we.position,xo.clone().sub(we.position).normalize());const c=gc.intersectObject(Cr,!0).find(h=>C_(h.object));c&&t.some(h=>R_(c.object,h))?i=!0:r===null&&c&&(r=Math.round(c.distance*10)/10)}const o=l=>Math.round(l*1e3)/1e3,a=[];for(const l of e){if(Mn.setFromObject(l),Mn.isEmpty())continue;let c=1/0,h=1/0,u=-1/0,f=-1/0,p=!1;for(let g=0;g<8;g++){if(Ms.set(g&1?Mn.max.x:Mn.min.x,g&2?Mn.max.y:Mn.min.y,g&4?Mn.max.z:Mn.min.z),Ms.project(we),Ms.z>=1){p=!1;break}p=!0;const _=(Ms.x+1)/2,m=(1-Ms.y)/2;c=Math.min(c,_),u=Math.max(u,_),h=Math.min(h,m),f=Math.max(f,m)}p&&a.push({x0:o(c),y0:o(h),x1:o(u),y1:o(f)})}return{id:n.id,rule:n.rule,parts:e.length,dist:Math.round(s*10)/10,clear:i,blockedAt:i?null:r,rects:a}})}const jn=document.getElementById("walk-btn");if(jn){let t=null;const e={x:0,y:0},i=s=>{s.pointerId===t&&(t=null,le.touchForward=0,le.touchStrafe=0,jn.classList.remove("held"))};jn.addEventListener("pointerdown",s=>{t=s.pointerId,le.usesTouch=!0,le.touchForward=1,le.touchStrafe=0,e.x=s.clientX,e.y=s.clientY,jn.classList.add("held"),jn.setPointerCapture(s.pointerId)}),jn.addEventListener("pointermove",s=>{if(s.pointerId!==t)return;const r=s.clientX-e.x,o=s.clientY-e.y,a=Math.abs(o)>=16?-Math.sign(o):0,l=Math.abs(r)>=16?Math.sign(r):0;le.touchForward=a===0&&l===0?1:a,le.touchStrafe=l}),jn.addEventListener("pointerup",i),jn.addEventListener("pointercancel",i)}const cr=Jt.corridorHalfWidth;function L_(n){if(ji.active){ji.fly(n,le.yaw,le.pitch,p=>le.isDown(p));const f=fe==="tutorial"?.008:.044;if(ji.clearView)gr(ve,0,.004);else{const p=Math.max(Ie===Ye-1?0:Math.max(0,(-36-we.position.z)/qe),Math.max(0,we.position.z/qe));gr(ve,Math.min(1,p*2),f)}we.rotation.set(0,0,0),we.rotateY(le.yaw),we.rotateX(le.pitch),vo=!0;return}vo&&(vo=!1,Bt.x=Math.max(-cr+.4,Math.min(cr-.4,we.position.x)),Bt.z=Math.max(-36+.6,Math.min(qe-.7,we.position.z))),Ls+=n;const t=le.getMove(),e=Math.abs(t.forward)+Math.abs(t.strafe)>.1;if(on.update(n,e),fe==="return"){const f=Re===4&&!Cs(bi)&&Bt.z>po&&Bt.z<po+6;if(e?Mi=Math.max(0,Mi-n*Jt.stillDrainMul):f||(Mi+=n),Mi>=Jt.stillGrowSec&&(Mi-=Jt.stillGrowSec,M_(),Ue!=="walk"))return}const i=fe==="tutorial"?.008:.044+Math.min(.018,Ls/60*.0035)+Math.min(.02,Qe*.0035),r=Ie===Ye-1?0:Math.max(0,(-36-Bt.z)/qe),o=Math.max(0,Bt.z/qe);gr(ve,Math.min(1,Math.max(r,o)*2),i);const a=Math.sin(le.yaw),l=Math.cos(le.yaw),c=t.forward*Jt.walkSpeed*(t.forward<0?Jt.backFactor:1),h=t.strafe*Jt.walkSpeed*Jt.strafeFactor;if(Bt.x+=(a*-c+l*h)*n,Bt.z+=(-l*c-a*h)*n,Bt.x=Math.max(-cr+.4,Math.min(cr-.4,Bt.x)),Bt.z=Math.min(qe-.7,Bt.z),fe==="tutorial"){for(;Si<Vt.tutBeats.length&&Vt.tutBeats[Si].theme<Re;)Si+=1;const f=Vt.tutBeats[Si];f&&f.theme===Re&&Bt.z<=f.z&&(me.say(f.text,3600),Si+=1)}else if(fe==="return"){const f=oi(Ae).beats??[],p=_=>_<0?Ye-1:_;for(;yi<f.length&&p(f[yi].at)<Ie;)yi+=1;const g=f[yi];g&&p(g.at)===Ie&&Bt.z<=g.z&&(me.say(g.text,3800),yi+=1)}if(Re===4){const f=Bt.z<po&&Bt.z>Ee-yn-1,p=Math.floor(bi/Na);if(!Cs(bi)&&br!==p&&(br=p,o_(ve,bi,p%2===0?1:-1),on.carPass(tu),fe!=="tutorial"&&f&&me.say(Vt.carComing,2e3)),f&&a_(ve)&&Math.abs(Bt.z-ve.car.position.z)<2.4){b_();return}}if(oi(Ae).onboarding&&!wi.move&&wi.hintZ-Bt.z>6&&(wi.move=!0,me.hideHint()),Bt.z>=qe*.62){T_();return}const u=Ie===Ye-1?-36-.2:Sg;if(Bt.z<u&&Math.abs(Bt.x)<ys+.4){A_();return}if(Bt.z<-36+.5&&Math.abs(Bt.x)>=ys&&(Bt.z=-36+.5),Bt.z>-.5&&Math.abs(Bt.x)>=ys&&(Bt.z=-.5),Bt.z<-36||Bt.z>0){const f=eu-.25;Bt.x=Math.max(-f,Math.min(f,Bt.x))}we.position.set(Bt.x,1.65,Bt.z),we.rotation.set(0,0,0),we.rotateY(le.yaw),we.rotateX(le.pitch)}let bi=0;function Mu(){const n=Math.min(Er.getDelta(),.1);bi+=n,Ue==="walk"&&L_(n),ji.update(),s_(ve,bi),bn.render(Cr,we),requestAnimationFrame(Mu)}async function D_(){Ue!=="walk"||_o||(_o=!0,Ue="transition",on.suspend(),await me.blackScreen("…잠깐 골목 구석에서 숨을 골랐다.","계속 걷는다"),on.resume(),le.activate(),Ue="walk",_o=!1)}za.classList.remove("hidden");const Mo=document.getElementById("settings-panel");var _c;(_c=document.getElementById("settings-btn"))==null||_c.addEventListener("click",()=>{Mo==null||Mo.classList.toggle("open")});const So=document.getElementById("continue-info"),Ei=document.getElementById("reset-btn"),I_="기록 삭제 · 처음부터";function Su(){if(!So||!Ei)return;const n=d_();if(So.style.display=n?"block":"none",Ei.style.display=n?"inline-block":"none",n){const e=ce.misses>0?` 그동안 ${ce.misses}번, 골목이 늘어났다.`:"";So.textContent=`이어하기 — ${Vt.nightLabel(ce.night)}.${e}`}const t=document.getElementById("start-btn");t&&(t.textContent=ce.tut?Vt.startBtnResume:Vt.startBtnFirst),U_()}function U_(){const n=document.getElementById("coupon"),t=document.querySelector("#coupon .c-stamps"),e=document.querySelector("#coupon .c-note");if(!n||!t||!e)return;n.style.display=ce.night>1?"flex":"none";const i=ce.night-1,s=Math.min(i,ei);t.innerHTML="●".repeat(s)+`<span class="empty">${"○".repeat(ei-s)}</span>`+(i>ei?" ●":""),e.textContent=i>ei?Vt.couponOverflow:"밤마다 하나씩"}let yo=!1;Ei==null||Ei.addEventListener("click",()=>{if(!yo){yo=!0,Ei.textContent="정말 삭제할까요? (한 번 더 누르면 삭제)";return}h_(),yo=!1,Ei.textContent=I_,Ae=ce.night,Jn&&(Jn.value=String(ce.brightness),bn.toneMappingExposure=ce.brightness*fa),ka(),Su()});Su();document.getElementById("start-btn").addEventListener("click",async()=>{var t;if(ss)return;document.getElementById("start").classList.add("hidden"),ss=!0,(t=document.activeElement)==null||t.blur(),on.start(),le.activate(),Ya(),history.pushState({fries:1},""),await xu()});window.addEventListener("popstate",()=>{ss&&(history.pushState({fries:1},""),D_())});window.addEventListener("beforeunload",n=>{ss&&Ue==="walk"&&n.preventDefault()});function Ya(){var t;(t=navigator.wakeLock)==null||t.request("screen").catch(()=>{})}document.addEventListener("visibilitychange",()=>{document.hidden?(Er.stop(),on.suspend()):(Er.start(),on.resume(),ss&&Ya())});window.addEventListener("pageshow",n=>{n.persisted&&(Er.start(),on.resume(),ss&&Ya())});document.addEventListener("gesturestart",n=>n.preventDefault());bn.domElement.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("resize",()=>{we.aspect=window.innerWidth/window.innerHeight,we.updateProjectionMatrix(),bn.setSize(window.innerWidth,window.innerHeight)});window.__fries={state:()=>({phase:Ue,mode:fe,night:Ae,done:Ie,total:Ye,theme:Re,depth:Qe,stretches:us,swarm:Pi,active:wn.length,still:Math.round(Mi*100)/100,grown:Ye-Jt.segments,green:Cs(bi),carX:ve.car.visible?Math.round(ve.car.position.x*10)/10:null,elapsed:Math.round(Ls*10)/10,x:Math.round(Bt.x*100)/100,z:Math.round(Bt.z*100)/100}),config:()=>({...Jt}),admin:{on:()=>ji.active,cam:()=>({x:we.position.x,y:we.position.y,z:we.position.z}),toggle:()=>ji.toggle(),jump:n=>_u.jump(n)},...Va!==null?{occlusion:()=>P_()}:{}};we.position.set(0,1.65,0);Mu();
