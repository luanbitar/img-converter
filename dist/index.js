"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var base64StringtoFile=function(e){for(var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"fileName",n=e.split(","),o=n[0].match(/:(.*?);/)[1],i=atob(n[1]),a=i.length,r=new Uint8Array(a);a--;)r[a]=i.charCodeAt(a);return new File([r],t,{type:o})},URLToBase64=function(t){return new Promise(function(n,e){fetch(t).then(function(e){return e.blob()}).then(function(e){var t=new FileReader;t.onloadend=function(){n(t.result)},t.readAsDataURL(e)})})},URLToFile=function(t){return new Promise(function(n,e){URLToBase64(t).then(function(e){var t=base64StringtoFile(e);n(t)})})},FileToBase64=function(o){return new Promise(function(e,t){var n=new FileReader;n.addEventListener("load",function(){e(n.result)}),n.readAsDataURL(o)})},downloadBase64File=function(e,t){var n=document.createElement("a");n.setAttribute("href",e),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},extractImageFileExtensionFromBase64=function(e){return e.substring("data:image/".length,e.indexOf("base64"))},image64toCanvasRef=function(a,r,l){var u=3<arguments.length&&void 0!==arguments[3]?arguments[3]:1;return new Promise(function(e,t){var n=a;n.width=l.width,n.height=l.height;var o=n.getContext("2d"),i=new Image;i.src=r,i.onload=function(){o.drawImage(i,l.x,l.y,l.width,l.height,0,0,l.width,l.height),e(n.toDataURL("image/jpeg",u))}})},imageFileToImageCroppedFile=function(o,i){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:void 0;return new Promise(function(t,e){var n=document.createElement("canvas");n.width=i.width,n.height=i.height,FileToBase64(o).then(function(e){return image64toCanvasRef(n,e,i,a)}).then(function(e){return base64StringtoFile(e,o.name)}).then(function(e){n.remove(),t(e)})})},imagenarium={URLToFile:URLToFile,URLToBase64:URLToBase64,FileToBase64:FileToBase64,base64StringtoFile:base64StringtoFile,imageFileToImageCroppedFile:imageFileToImageCroppedFile,downloadBase64File:downloadBase64File,extractImageFileExtensionFromBase64:extractImageFileExtensionFromBase64,image64toCanvasRef:image64toCanvasRef};"undefined"!=typeof window&&window&&("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=imagenarium:window.imagenarium=imagenarium);