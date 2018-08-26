!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("FieryData",[],r):"object"==typeof exports?exports.FieryData=r():e.FieryData=r()}(this,function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=8)}([function(e,r,t){"use strict";function n(e){return"[object Object]"===Object.prototype.toString.call(e)}function o(e){return"string"==typeof e}function i(e){return e&&e instanceof Array}function a(e){return e&&e instanceof Date}function c(e){return void 0!==e}Object.defineProperty(r,"__esModule",{value:!0}),r.isObject=n,r.isFunction=function(e){return"function"==typeof e},r.isString=o,r.isArray=i,r.isDate=a,r.isDefined=c,r.coalesce=function(e,r){return c(e)?e:r},r.isCollectionSource=function(e){return!!e.where},r.getFields=function(e,r){return e?o(e)?[e]:e:r},r.forEach=function(e,r){if(i(e)){for(var t=0;t<e.length;t++)r(e[t],t,e);return!0}if(n(e)){for(var o in e)e.hasOwnProperty(o)&&r(e[o],o,e);return!0}return!1},r.isEqual=function e(r,t){if(r===t)return!0;if(!r||!t)return!1;if(typeof r!=typeof t)return!1;if(i(r)&&i(t)){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(!e(r[o],t[o]))return!1;return!0}if(a(r)&&a(t))return r.getTime()===t.getTime();if(n(r)&&n(t)){for(var c in r)if(!e(r[c],t[c]))return!1;for(var c in t)if(!(c in r))return!1;return!0}return!1}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(4),o=t(5),i=t(7);function a(e,t){var o=e.storeKey+n.UID_SEPARATOR+t.path;if(o in r.globalCache)return f(r.globalCache[o],e),r.globalCache[o];var i=e.options.newDocument();i[n.PROP_UID]=o;var a={uid:o,data:i,ref:t,uses:0,sub:{},firstEntry:e,entries:[],removed:!1};return r.globalCache[o]=a,f(a,e),v(i,e),p(a,e),a}function c(e){return r.globalCache[e[n.PROP_UID]]}function u(e,r){if(r&&r.uid in e.children){e.options;var t=r.entries,n=t.indexOf(e);-1!==n&&t.splice(n,1),delete e.children[r.uid];for(var i=!1,a=0;a<t.length;a++)if(t[a].instance===e.instance){i=!0;break}if(i||l(r,e.instance,!0),r.uses>0)for(var c in r.sub)s(r,c)||o.closeEntry(r.sub[c],!0)}}function s(e,r){for(var t=e.entries,n=(e.sub,0);n<t.length;n++){var o=t[n].options.sub;if(o&&r in o)return!0}return!1}function f(e,r){e.uid in r.instance.cache||(r.instance.cache[e.uid]=e,e.uses++),e.uid in r.children||(e.entries.push(r),r.children[e.uid]=e,p(e,r))}function l(e,r,t){if(void 0===t&&(t=!0),e.uid in r.cache){e.uses--,delete r.cache[e.uid];for(var n=e.entries,o=n.length-1;o>=0;o--){var i=n[o];i.instance===r&&u(i,e)}t&&e.uses<=0&&d(e)}}function d(e){for(var t=e.entries,n=0;n<t.length;n++)l(e,t[n].instance,!1);for(var i in e.sub)o.closeEntry(e.sub[i],!0);e.uses<=0&&!e.removed&&(delete r.globalCache[e.uid],delete e.ref,delete e.sub,delete e.data,e.entries.length=0,e.removed=!0)}function p(e,r){var t=r.options,a=e.data,c=e.ref;if(t.sub&&c)for(var u in t.sub)if(!g(e,u)){var s=t.sub[u],f=e.uid+n.ENTRY_SEPARATOR+u,l=s.doc?c.parent.doc(e.uid.split(n.PATH_SEPARATOR).pop()+n.PATH_SEPARATOR+u):c.collection(u),d=o.getEntry(r.instance,l,s,f,!1);a[u]=i.factory(d),e.sub[u]=d}}function g(e,r){return r in e.sub&&e.sub[r].live}function v(e,r){var t=r.options;if(t.record){var n=t.recordOptions,o=r.recordFunctions;n.sync&&(e[n.sync]=o.sync),n.update&&(e[n.update]=o.update),n.remove&&(e[n.remove]=o.remove),n.clear&&(e[n.clear]=o.clear),n.getChanges&&(e[n.getChanges]=o.getChanges),n.ref&&(e[n.ref]=o.ref),n.create&&(e[n.create]=o.create),n.build&&(e[n.build]=o.build)}return e}r.globalCache={},r.getCacheForReference=a,r.getCacheForDocument=function(e,r){return a(e,r.ref)},r.getCacheForData=c,r.removeDataFromEntry=function(e,r){u(e,c(r))},r.removeCacheFromEntry=u,r.isReferencedSub=s,r.addCacheToEntry=f,r.removeCacheFromInstance=l,r.destroyCache=d,r.addSubs=p,r.hasLiveSub=g,r.createRecord=v},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0);function o(e,r,t){for(var n in t)e.setProperty(r,n,t[n]);return r}function i(e,r){if(r.decode)e=r.decode(e);else if(r.decoders)for(var t in r.decoders)t in e&&(e[t]=r.decoders[t](e[t],e));return e}function a(e,r){var t,o=e.data(),i=n.isObject(o)?o:((t={})[r.propValue]=o,t);return i&&r.key&&(i[r.key]=e.id),i}r.refreshData=function(e,r,t){var n=t.instance.system,c=t.options,u=i(a(r,c),c),s=e.data;return o(n,s,u),s},r.copyData=o,r.decodeData=i,r.encodeData=function(e,r,t){var o={},i=n.getFields(t,r.include);if(i)for(var a=0;a<i.length;a++)(c=i[a])in e&&(o[c]=e[c]);else for(var c in e)c in r.exclude||(o[c]=e[c]);if(r.encoders)for(var c in r.encoders)c in o&&(o[c]=r.encoders[c](o[c],e));return o},r.parseDocument=a},function(e,r,t){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e};Object.defineProperty(r,"__esModule",{value:!0});var o=t(4),i=t(0);function a(e,t){if(t)for(var n in r.mergeOptions){var o=n,i=r.mergeOptions[o];e[o]=i(e[o],t[o])}}r.globalOptions={defined:{},user:void 0,defaults:{onError:function(e){},onMissing:function(){},onSuccess:function(e){},onRemove:function(){},liveOptions:{},propValue:o.PROP_VALUE,recordOptions:o.RECORD_OPTIONS,newDocument:function(e){return{}}},id:0,map:{}},r.getOptionsByKey=function(e){return r.globalOptions.map[parseInt(e)]},r.getOptions=function e(t,n){if(i.isString(t)){if(!(t in r.globalOptions.defined))throw"The definition "+t+" was not found. You must call define before you use the definition";return e(r.globalOptions.defined[t])}if(t&&i.isObject(t)||(t={}),t.id&&t.id in r.globalOptions.map)return t;if(t.id||(t.id=++r.globalOptions.id,r.globalOptions.map[t.id]=t),t.extends&&a(t,e(t.extends)),a(t,r.globalOptions.user),a(t,r.globalOptions.defaults),n&&!t.shared&&(t.instance=n,n.options[t.id]=t),t.type){var c=t.type;t.newDocument=function(e){return new c}}t.newCollection||(t.newCollection=t.map?function(){return{}}:function(){return[]});var u={};if(t.exclude?i.isArray(t.exclude)?i.forEach(t.exclude,function(e,r){return u[e]=!0}):u=t.exclude:t.key&&(u[t.key]=!0),u[t.propValue]=!0,u[o.PROP_UID]=!0,i.forEach(t.recordOptions,function(e,r){return u[e]=!0}),t.exclude=u,t.sub)for(var s in t.sub){var f=e(t.sub[s],n);f.parent=t,t.sub[s]=f,f.ref||(u[s]=!0)}return t},r.recycleOptions=function(e){var r=e.instance;r&&delete r.options[e.id]},r.define=function(e,t){if(i.isString(e))(o=t).shared=!0,r.globalOptions.defined[e]=o;else for(var n in e){var o;(o=e[n]).shared=!0,r.globalOptions.defined[n]=o}},r.setGlobalOptions=function(e){e&&(e.shared=!0),r.globalOptions.user=e},r.performMerge=a,r.mergeStrategy={ignore:function(e,r){return e},replace:function(e,r){return i.coalesce(e,r)},chain:function(e,r){return i.isDefined(r)?i.isDefined(e)?function(){r.apply(this,arguments)(e).apply(this,arguments)}:r:e},shallow:function(e,r){return i.isDefined(r)?i.isDefined(e)?n({},r,e):r:e},concat:function(e,r){if(!i.isDefined(r))return e;if(!i.isDefined(e))return r;if(i.isArray(e)&&i.isArray(r)){for(var t=e.concat(r),n={},o=t.length-1;o>=0;o--)t[o]in n?t.splice(o,1):n[t[o]]=!0;return t}},exclude:function(e,t){var n=r.mergeStrategy.concat(e,t);if(!n&&e&&t){var o={},a=i.isArray(t),c=i.isArray(e);return i.forEach(t,function(e,r){return e?o[a?e:r]=!0:0}),i.forEach(e,function(e,r){return e?o[c?e:r]=!0:0}),o}return n}},r.mergeOptions={extends:r.mergeStrategy.ignore,id:r.mergeStrategy.ignore,parent:r.mergeStrategy.ignore,shared:r.mergeStrategy.ignore,vm:r.mergeStrategy.ignore,key:r.mergeStrategy.replace,query:r.mergeStrategy.replace,map:r.mergeStrategy.replace,once:r.mergeStrategy.replace,type:r.mergeStrategy.replace,newDocument:r.mergeStrategy.replace,newCollection:r.mergeStrategy.replace,decode:r.mergeStrategy.replace,decoders:r.mergeStrategy.shallow,encoders:r.mergeStrategy.shallow,record:r.mergeStrategy.replace,recordOptions:r.mergeStrategy.replace,recordFunctions:r.mergeStrategy.replace,propValue:r.mergeStrategy.replace,onceOptions:r.mergeStrategy.replace,liveOptions:r.mergeStrategy.replace,include:r.mergeStrategy.concat,exclude:r.mergeStrategy.exclude,onError:r.mergeStrategy.replace,onSuccess:r.mergeStrategy.replace,onMissing:r.mergeStrategy.replace,onRemove:r.mergeStrategy.replace,sub:r.mergeStrategy.shallow}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PROP_VALUE=".value",r.PROP_UID=".uid",r.UID_SEPARATOR="///",r.ENTRY_SEPARATOR="/",r.PATH_SEPARATOR="/",r.RECORD_OPTIONS={sync:"$sync",update:"$update",remove:"$remove",ref:"$ref",clear:"$clear",build:"$build",create:"$create",getChanges:"$getChanges"}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),o=t(3),i=t(9),a=t(1),c=t(6);function u(e,r){if(void 0===r&&(r=!1),e&&e.live&&(e.off&&(e.off(),delete e.off),e.live=!1,r)){var t=e.instance;n.isDefined(e.index)&&(t.entryList[e.index]=null,delete e.index),e.name&&e.name in t.entry&&delete t.entry[e.name],n.forEach(e.children,function(r){a.removeCacheFromEntry(e,r)})}}function s(e){return{sync:function(r){return c.sync.call(e,this,r)},update:function(r){return c.update.call(e,this,r)},remove:function(r){return void 0===r&&(r=!1),c.remove.call(e,this,r)},ref:function(r){return c.ref.call(e,this,r)},clear:function(r){return c.clear.call(e,this,r)},build:function(r,t){return c.buildSub.call(e,this,r,t)},create:function(r,t){return c.createSub.call(e,this,r,t)},getChanges:function(r,t){return c.getChanges.call(e,this,r,t)}}}r.closeEntry=u,r.getEntry=function(e,r,t,n,a){void 0===a&&(a=!0);var c=o.getOptions(t,e),f=i.getStoreKey(r);if(n&&n in e.entry){var l=e.entry[n];return u(l),c.id!==l.options.id&&o.recycleOptions(l.options),l.source=r,l.options=c,l.storeKey=f,l.live=!0,l}var d={name:n,options:c,source:r,instance:e,storeKey:f,children:{},recordFunctions:s(e),live:!0};return n&&n in e.entry||(d.index=e.entryList.length,e.entryList.push(d)),n&&(e.entry[n]=d),n&&a&&(e.sources[n]=r),d},r.getEntryRecordFunctions=s},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(2),o=t(0),i=t(1);function a(e,r){var t=this;void 0===r&&(r=!1);var n=i.getCacheForData(e);if(n&&n.ref){var c=n.firstEntry.options;if(!r&&c.sub)for(var u in c.sub)o.forEach(e[u],function(e){a.call(t,e)});return n.ref.delete()}return Promise.reject("The given data is out of scope and cannot be operated on.")}function c(e,r,t){var n=r.options,a=e.doc(),c=i.getCacheForReference(r,a);return n.defaults&&o.forEach(n.defaults,function(e,r){t&&r in t||(c.data[r]=o.isFunction(e)?e():e)}),t&&o.forEach(t,function(e,r){c.data[r]=e}),c.data}r.update=function(e,r){var t=i.getCacheForData(e);if(Promise.resolve(!1),t&&t.ref){var o=t.firstEntry.options,a=n.encodeData(e,o,r);return t.ref.update(a)}return Promise.reject("The given data is out of scope and cannot be operated on.")},r.sync=function(e,r){var t=i.getCacheForData(e);if(t&&t.ref){var o=t.firstEntry.options,a=n.encodeData(e,o,r);return t.ref.set(a)}return Promise.reject("The given data is out of scope and cannot be operated on.")},r.remove=a,r.clear=function(e,r){var t=this,n=i.getCacheForData(e),c=o.getFields(r);if(n&&n.ref){for(var u=n.firstEntry.options,s=n.ref,f=s.firestore,l=[],d={},p=0,g=0,v=c;g<v.length;g++){var y=v[g];if(u.sub&&y in u.sub&&e[y])o.forEach(e[y],function(e){l.push(a.call(t,e))});else if(y in e){var h=f.app.firebase_;h&&(d[y]=h.firestore.FieldValue.delete(),p++)}}return p>0&&l.push(s.update(d)),Promise.all(l)}return Promise.reject("The given data is out of scope and cannot be operated on.")},r.getChanges=function(e,r,t){var a=i.getCacheForData(e);if(a&&a.ref){var c=o.isFunction(r)?void 0:o.getFields(r),u=(c?t:r)||o.isEqual,s=a.firstEntry.options,f=n.encodeData(e,s,c),l=a.ref.get();return new Promise(function(e,r){l.then(function(r){var t=n.parseDocument(r,s),o={},i={},a=!1;for(var c in f){var l=t[c],d=f[c];u(l,d)||(a=!0,o[c]=l,i[c]=d)}e({changed:a,remote:o,local:i})}),l.catch(function(e){return r(e)})})}return Promise.reject("The given data is out of scope and cannot be operated on.")},r.ref=function(e,r){var t=i.getCacheForData(e);if(t&&t.ref){var n=t.ref;return r?n.collection(r):n}throw"The given data is out of scope and cannot be referenced."},r.create=function(e,r){var t=this.build(e,r);return t&&this.sync(t),t},r.createSub=function(e,r,t){var n=this.buildSub(e,r,t);return n&&this.sync(n),n},r.build=function(e,r){var t;if(o.isString(e)){if(e in this.entry)return c((t=this.entry[e]).source,t,r)}else if(t=this.entryFor(e))return c(t.source,t,r);throw"Cannot build "+e+NaN},r.buildSub=function(e,r,t){var n=i.getCacheForData(e);if(n&&n.ref&&r in n.sub){var o=n.sub[r];return c(n.ref.collection(r),o,t)}throw"Cannot build in the sub collection "+r+NaN},r.buildFromCollection=c},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(10),o=t(11),i=t(12);function a(e){return(e.source.where?e.options.map?o.default:i.default:n.default)(e)}r.factory=a,r.default=a},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(3);r.define=n.define,r.setGlobalOptions=n.setGlobalOptions,r.mergeStrategy=n.mergeStrategy,r.mergeOptions=n.mergeOptions;var o=t(1);r.getCacheForData=o.getCacheForData,r.destroyCache=o.destroyCache;var i=t(13);r.default=i.getInstance},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.stores={keyNext:0,map:{},idToKey:{}},r.getStoreKey=function(e){var t=e.firestore,n=t.app.name,o=r.stores.idToKey[n];return o||(o=++r.stores.keyNext,r.stores.map[o]=t,r.stores.idToKey[n]=o),o}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(2),o=t(1);function i(e){var r=e.source,t=e.options,n=o.getCacheForReference(e,r),i=e.target,c=function(r){a(n,e,r)};return i&&i!==n.data&&o.removeDataFromEntry(e,i),e.target=n.data,t.once?e.promise=r.get(t.onceOptions).then(c).catch(t.onError):e.off=r.onSnapshot(t.liveOptions,c,t.onError),e.target}function a(e,r,t){var i=r.options,a=r.instance.system;t.exists?(n.refreshData(e,t,r),i.onSuccess(e.data)):(o.destroyCache(e),r.name&&a.removeNamed(r.name))}r.factory=i,r.handleDocumentUpdate=a,r.default=i},function(e,r,t){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e};Object.defineProperty(r,"__esModule",{value:!0});var o=t(0),i=t(2),a=t(1);r.default=function(e){var r=e.options,t=r.query?r.query(e.source):e.source,c=function(e){var r=e.options,t=e.instance.system;return function(c){var u=e.target,s=n({},u);c.forEach(function(r){var n=a.getCacheForDocument(e,r);i.refreshData(n,r,e),t.setProperty(u,r.id,n.data),delete s[r.id]},r.onError),o.forEach(s,function(e,r){return t.removeProperty(u,r)}),o.forEach(s,function(r){return a.removeDataFromEntry(e,r)}),r.onSuccess(u)}}(e);return e.target||(e.target=r.newCollection()),r.once?e.promise=t.get(r.onceOptions).then(c).catch(r.onError):e.off=t.onSnapshot(r.liveOptions,function(e,r){var t=function(e){var r=e.options,t=e.instance.system;return function(n){var o=e.target;n.docChanges().forEach(function(r){var n=r.doc,c=a.getCacheForDocument(e,n);switch(r.type){case"modified":case"added":var u=i.refreshData(c,n,e);t.setProperty(o,n.id,u);break;case"removed":t.removeProperty(o,n.id),n.exists?a.removeCacheFromEntry(e,c):a.destroyCache(c)}},r.onError),r.onSuccess(o)}}(e),n=r;return function(e){n(e),n=t}}(e,c),r.onError),e.target}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(4),o=t(2),i=t(1),a=t(0);function c(e){var r=e.options,t=r.query?r.query(e.source):e.source,c=function(e){var r=e.options,t=e.instance.system,c=e.target;return function(u){var s=e.target,f={};if(c)for(var l=0;l<s.length;l++){var d=s[l];f[d[n.PROP_UID]]=d}t.arrayResize(s,0),u.forEach(function(r){var n=i.getCacheForDocument(e,r);o.refreshData(n,r,e),t.arrayAdd(s,n.data),delete f[n.uid]},r.onError),a.forEach(f,function(r){return i.removeDataFromEntry(e,r)}),r.onSuccess(s)}}(e);return e.target||(e.target=r.newCollection()),r.once?e.promise=t.get(r.onceOptions).then(c).catch(r.onError):e.off=t.onSnapshot(r.liveOptions,function(e,r){var t=function(e){var r=e.options,t=e.instance.system;return function(n){var a=e.target;n.docChanges().forEach(function(r){var n=r.doc,c=i.getCacheForDocument(e,n);switch(r.type){case"added":var u=o.refreshData(c,n,e);t.arraySet(a,r.newIndex,u);break;case"removed":n.exists?i.removeCacheFromEntry(e,c):i.destroyCache(c);break;case"modified":var s=o.refreshData(c,n,e);r.oldIndex!==r.newIndex&&t.arraySet(a,r.newIndex,s)}},r.onError),t.arrayResize(a,n.size),r.onSuccess(a)}}(e),n=r;return function(e){n(e),n=t}}(e,c),r.onError),e.target}r.factory=c,r.default=c},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0),o=t(7),i=t(5),a=t(1),c=t(3),u=t(6);function s(){var e=this;n.forEach(this.options,function(e){return delete c.globalOptions.map[e.id]}),n.forEach(this.cache,function(r){return a.removeCacheFromInstance(r,e)}),n.forEach(this.entryList,function(e){return i.closeEntry(e,!0)}),this.entry={},this.entryList=[],this.options={},this.sources={},this.cache={}}function f(e){var r=this.entryFor(e);null!==r&&i.closeEntry(r,!0)}function l(e){for(var r=this.entryList,t=0;t<r.length;t++){var n=r[t];if(n&&n.target===e)return n}return null}function d(e){for(var r=this.entryList,t=0;t<r.length;t++){var n=r[t];if(null!==n)if(!n.options.parent&&!n.name)for(var o in e)if(e[o]===n.target){n.name=o,this.entry[o]=n,this.sources[o]=n.source;break}}}r.getInstance=function(e){var r=function(e){var r=e||{};for(var t in p){var n=t;n in r||(r[n]=p[n])}return r}(e),t=function(e,r,n){return o.factory(i.getEntry(t,e,r,n))};return t.system=r,t.entry={},t.entryList=[],t.options={},t.sources={},t.cache={},t.update=u.update,t.sync=u.sync,t.remove=u.remove,t.clear=u.clear,t.getChanges=u.getChanges,t.ref=u.ref,t.create=u.create,t.createSub=u.createSub,t.build=u.build,t.buildSub=u.buildSub,t.entryFor=l,t.destroy=s,t.free=f,t.linkSources=d,t};var p={removeNamed:function(e){},setProperty:function(e,r,t){e[r]=t},removeProperty:function(e,r){delete e[r]},arraySet:function(e,r,t){e[r]=t},arrayAdd:function(e,r){e.push(r)},arrayResize:function(e,r){e.length=r}}}])});
//# sourceMappingURL=fiery-data.js.map