"use strict";(self.webpackChunktemplate_app=self.webpackChunktemplate_app||[]).push([[131],{131:function(e,t,n){n.r(t),n.d(t,{getCLS:function(){return y},getFCP:function(){return g},getFID:function(){return C},getLCP:function(){return P},getTTFB:function(){return D}});var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},p=-1,v=function(){return"hidden"===document.visibilityState?0:1/0},d=function(){f((function(e){var t=e.timeStamp;p=t}),!0)},l=function(){return p<0&&(p=v(),d(),s((function(){setTimeout((function(){p=v(),d()}),0)}))),{get firstHiddenTime(){return p}}},g=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=m(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},h=!1,T=-1,y=function(e,t){h||(g((function(e){T=e.value})),h=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],p=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},v=c("layout-shift",p);v&&(n=m(i,r,t),f((function(){v.takeRecords().map(p),n(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,L=function(e,t){i||(i=t,r=e,a=new Date,F(removeEventListener),S())},S=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){L(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):L(t,e)}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},C=function(e,t){var n,a=l(),p=u("FID"),v=function(e){e.startTime<a.firstHiddenTime&&(p.value=e.processingStart-e.startTime,p.entries.push(e),n(!0))},d=c("first-input",v);n=m(e,p,t),d&&f((function(){d.takeRecords().map(v),d.disconnect()}),!0),d&&s((function(){var a;p=u("FID"),n=m(e,p,t),o=[],r=-1,i=null,F(addEventListener),a=v,o.push(a),S()}))},k={},P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e),n())},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var p=function(){k[r.id]||(o.takeRecords().map(a),o.disconnect(),k[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),f(p,!0),s((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,k[r.id]=!0,n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOEIsTUFBSyxFQUFHZCxTQUFRLEdBQUssSUFBRy9CLEVBQUVlLEdBQUUsR0FBSVYsR0FBRSxTQUFVNUIsR0FBRytCLEVBQUU5QixFQUFFLE9BQU9GLEVBQUUrQixFQUFFakMsRUFBRWtDLEVBQUVqQyxHQUFHK0MsdUJBQXNCLFdBQVlBLHVCQUFzQixXQUFZZCxFQUFFNUIsTUFBTXdDLFlBQVlsQyxNQUFNVCxFQUFFa0MsVUFBVWdDLEVBQUVuQyxFQUFFekIsS0FBSSxFQUFHUCxHQUFFLEVBQUksR0FBRyxHQUFHLEdBQUUsQ0FBQyxFQUFFc0UsRUFBRSxTQUFTeEUsR0FBRyxJQUFJQyxFQUFFQyxFQUFFRSxFQUFFLFFBQVFILEVBQUUsV0FBVyxJQUFJLElBQUlBLEVBQUU2QyxZQUFZMkIsaUJBQWlCLGNBQWMsSUFBSSxXQUFXLElBQUl6RSxFQUFFOEMsWUFBWTRCLE9BQU96RSxFQUFFLENBQUM2RCxVQUFVLGFBQWFuQixVQUFVLEdBQUcsSUFBSSxJQUFJekMsS0FBS0YsRUFBRSxvQkFBb0JFLEdBQUcsV0FBV0EsSUFBSUQsRUFBRUMsR0FBR1csS0FBSzhELElBQUkzRSxFQUFFRSxHQUFHRixFQUFFNEUsZ0JBQWdCLElBQUksT0FBTzNFLENBQUMsQ0FBakwsR0FBcUwsR0FBR0MsRUFBRUksTUFBTUosRUFBRUssTUFBTU4sRUFBRTRFLGNBQWMzRSxFQUFFSSxNQUFNLEdBQUdKLEVBQUVJLE1BQU13QyxZQUFZbEMsTUFBTSxPQUFPVixFQUFFTSxRQUFRLENBQUNQLEdBQUdELEVBQUVFLEVBQVksQ0FBVCxNQUFNRixHQUFHLENBQUMsRUFBRSxhQUFhMkIsU0FBU21ELFdBQVd2QyxXQUFXdEMsRUFBRSxHQUFHNkIsaUJBQWlCLFFBQU8sV0FBWSxPQUFPUyxXQUFXdEMsRUFBRSxFQUFHLEdBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLWFwcC8uL25vZGVfbW9kdWxlcy93ZWItdml0YWxzL2Rpc3Qvd2ViLXZpdGFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZSx0LG4saSxyPWZ1bmN0aW9uKGUsdCl7cmV0dXJue25hbWU6ZSx2YWx1ZTp2b2lkIDA9PT10Py0xOnQsZGVsdGE6MCxlbnRyaWVzOltdLGlkOlwidjItXCIuY29uY2F0KERhdGUubm93KCksXCItXCIpLmNvbmNhdChNYXRoLmZsb29yKDg5OTk5OTk5OTk5OTkqTWF0aC5yYW5kb20oKSkrMWUxMil9fSxhPWZ1bmN0aW9uKGUsdCl7dHJ5e2lmKFBlcmZvcm1hbmNlT2JzZXJ2ZXIuc3VwcG9ydGVkRW50cnlUeXBlcy5pbmNsdWRlcyhlKSl7aWYoXCJmaXJzdC1pbnB1dFwiPT09ZSYmIShcIlBlcmZvcm1hbmNlRXZlbnRUaW1pbmdcImluIHNlbGYpKXJldHVybjt2YXIgbj1uZXcgUGVyZm9ybWFuY2VPYnNlcnZlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0RW50cmllcygpLm1hcCh0KX0pKTtyZXR1cm4gbi5vYnNlcnZlKHt0eXBlOmUsYnVmZmVyZWQ6ITB9KSxufX1jYXRjaChlKXt9fSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG49ZnVuY3Rpb24gbihpKXtcInBhZ2VoaWRlXCIhPT1pLnR5cGUmJlwiaGlkZGVuXCIhPT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGV8fChlKGkpLHQmJihyZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLG4sITApLHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLG4sITApKSl9O2FkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsbiwhMCksYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsbiwhMCl9LHU9ZnVuY3Rpb24oZSl7YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsKGZ1bmN0aW9uKHQpe3QucGVyc2lzdGVkJiZlKHQpfSksITApfSxjPWZ1bmN0aW9uKGUsdCxuKXt2YXIgaTtyZXR1cm4gZnVuY3Rpb24ocil7dC52YWx1ZT49MCYmKHJ8fG4pJiYodC5kZWx0YT10LnZhbHVlLShpfHwwKSwodC5kZWx0YXx8dm9pZCAwPT09aSkmJihpPXQudmFsdWUsZSh0KSkpfX0sZj0tMSxzPWZ1bmN0aW9uKCl7cmV0dXJuXCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZT8wOjEvMH0sbT1mdW5jdGlvbigpe28oKGZ1bmN0aW9uKGUpe3ZhciB0PWUudGltZVN0YW1wO2Y9dH0pLCEwKX0sdj1mdW5jdGlvbigpe3JldHVybiBmPDAmJihmPXMoKSxtKCksdSgoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KChmdW5jdGlvbigpe2Y9cygpLG0oKX0pLDApfSkpKSx7Z2V0IGZpcnN0SGlkZGVuVGltZSgpe3JldHVybiBmfX19LGQ9ZnVuY3Rpb24oZSx0KXt2YXIgbixpPXYoKSxvPXIoXCJGQ1BcIiksZj1mdW5jdGlvbihlKXtcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIj09PWUubmFtZSYmKG0mJm0uZGlzY29ubmVjdCgpLGUuc3RhcnRUaW1lPGkuZmlyc3RIaWRkZW5UaW1lJiYoby52YWx1ZT1lLnN0YXJ0VGltZSxvLmVudHJpZXMucHVzaChlKSxuKCEwKSkpfSxzPXdpbmRvdy5wZXJmb3JtYW5jZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSYmcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIilbMF0sbT1zP251bGw6YShcInBhaW50XCIsZik7KHN8fG0pJiYobj1jKGUsbyx0KSxzJiZmKHMpLHUoKGZ1bmN0aW9uKGkpe289cihcIkZDUFwiKSxuPWMoZSxvLHQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7by52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCxuKCEwKX0pKX0pKX0pKSl9LHA9ITEsbD0tMSxoPWZ1bmN0aW9uKGUsdCl7cHx8KGQoKGZ1bmN0aW9uKGUpe2w9ZS52YWx1ZX0pKSxwPSEwKTt2YXIgbixpPWZ1bmN0aW9uKHQpe2w+LTEmJmUodCl9LGY9cihcIkNMU1wiLDApLHM9MCxtPVtdLHY9ZnVuY3Rpb24oZSl7aWYoIWUuaGFkUmVjZW50SW5wdXQpe3ZhciB0PW1bMF0saT1tW20ubGVuZ3RoLTFdO3MmJmUuc3RhcnRUaW1lLWkuc3RhcnRUaW1lPDFlMyYmZS5zdGFydFRpbWUtdC5zdGFydFRpbWU8NWUzPyhzKz1lLnZhbHVlLG0ucHVzaChlKSk6KHM9ZS52YWx1ZSxtPVtlXSkscz5mLnZhbHVlJiYoZi52YWx1ZT1zLGYuZW50cmllcz1tLG4oKSl9fSxoPWEoXCJsYXlvdXQtc2hpZnRcIix2KTtoJiYobj1jKGksZix0KSxvKChmdW5jdGlvbigpe2gudGFrZVJlY29yZHMoKS5tYXAodiksbighMCl9KSksdSgoZnVuY3Rpb24oKXtzPTAsbD0tMSxmPXIoXCJDTFNcIiwwKSxuPWMoaSxmLHQpfSkpKX0sVD17cGFzc2l2ZTohMCxjYXB0dXJlOiEwfSx5PW5ldyBEYXRlLGc9ZnVuY3Rpb24oaSxyKXtlfHwoZT1yLHQ9aSxuPW5ldyBEYXRlLHcocmVtb3ZlRXZlbnRMaXN0ZW5lciksRSgpKX0sRT1mdW5jdGlvbigpe2lmKHQ+PTAmJnQ8bi15KXt2YXIgcj17ZW50cnlUeXBlOlwiZmlyc3QtaW5wdXRcIixuYW1lOmUudHlwZSx0YXJnZXQ6ZS50YXJnZXQsY2FuY2VsYWJsZTplLmNhbmNlbGFibGUsc3RhcnRUaW1lOmUudGltZVN0YW1wLHByb2Nlc3NpbmdTdGFydDplLnRpbWVTdGFtcCt0fTtpLmZvckVhY2goKGZ1bmN0aW9uKGUpe2Uocil9KSksaT1bXX19LFM9ZnVuY3Rpb24oZSl7aWYoZS5jYW5jZWxhYmxlKXt2YXIgdD0oZS50aW1lU3RhbXA+MWUxMj9uZXcgRGF0ZTpwZXJmb3JtYW5jZS5ub3coKSktZS50aW1lU3RhbXA7XCJwb2ludGVyZG93blwiPT1lLnR5cGU/ZnVuY3Rpb24oZSx0KXt2YXIgbj1mdW5jdGlvbigpe2coZSx0KSxyKCl9LGk9ZnVuY3Rpb24oKXtyKCl9LHI9ZnVuY3Rpb24oKXtyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcnVwXCIsbixUKSxyZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcmNhbmNlbFwiLGksVCl9O2FkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIixuLFQpLGFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyY2FuY2VsXCIsaSxUKX0odCxlKTpnKHQsZSl9fSx3PWZ1bmN0aW9uKGUpe1tcIm1vdXNlZG93blwiLFwia2V5ZG93blwiLFwidG91Y2hzdGFydFwiLFwicG9pbnRlcmRvd25cIl0uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIGUodCxTLFQpfSkpfSxMPWZ1bmN0aW9uKG4sZil7dmFyIHMsbT12KCksZD1yKFwiRklEXCIpLHA9ZnVuY3Rpb24oZSl7ZS5zdGFydFRpbWU8bS5maXJzdEhpZGRlblRpbWUmJihkLnZhbHVlPWUucHJvY2Vzc2luZ1N0YXJ0LWUuc3RhcnRUaW1lLGQuZW50cmllcy5wdXNoKGUpLHMoITApKX0sbD1hKFwiZmlyc3QtaW5wdXRcIixwKTtzPWMobixkLGYpLGwmJm8oKGZ1bmN0aW9uKCl7bC50YWtlUmVjb3JkcygpLm1hcChwKSxsLmRpc2Nvbm5lY3QoKX0pLCEwKSxsJiZ1KChmdW5jdGlvbigpe3ZhciBhO2Q9cihcIkZJRFwiKSxzPWMobixkLGYpLGk9W10sdD0tMSxlPW51bGwsdyhhZGRFdmVudExpc3RlbmVyKSxhPXAsaS5wdXNoKGEpLEUoKX0pKX0sYj17fSxGPWZ1bmN0aW9uKGUsdCl7dmFyIG4saT12KCksZj1yKFwiTENQXCIpLHM9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdGFydFRpbWU7dDxpLmZpcnN0SGlkZGVuVGltZSYmKGYudmFsdWU9dCxmLmVudHJpZXMucHVzaChlKSxuKCkpfSxtPWEoXCJsYXJnZXN0LWNvbnRlbnRmdWwtcGFpbnRcIixzKTtpZihtKXtuPWMoZSxmLHQpO3ZhciBkPWZ1bmN0aW9uKCl7YltmLmlkXXx8KG0udGFrZVJlY29yZHMoKS5tYXAocyksbS5kaXNjb25uZWN0KCksYltmLmlkXT0hMCxuKCEwKSl9O1tcImtleWRvd25cIixcImNsaWNrXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2FkZEV2ZW50TGlzdGVuZXIoZSxkLHtvbmNlOiEwLGNhcHR1cmU6ITB9KX0pKSxvKGQsITApLHUoKGZ1bmN0aW9uKGkpe2Y9cihcIkxDUFwiKSxuPWMoZSxmLHQpLHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7Zi52YWx1ZT1wZXJmb3JtYW5jZS5ub3coKS1pLnRpbWVTdGFtcCxiW2YuaWRdPSEwLG4oITApfSkpfSkpfSkpfX0sUD1mdW5jdGlvbihlKXt2YXIgdCxuPXIoXCJUVEZCXCIpO3Q9ZnVuY3Rpb24oKXt0cnl7dmFyIHQ9cGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5VHlwZShcIm5hdmlnYXRpb25cIilbMF18fGZ1bmN0aW9uKCl7dmFyIGU9cGVyZm9ybWFuY2UudGltaW5nLHQ9e2VudHJ5VHlwZTpcIm5hdmlnYXRpb25cIixzdGFydFRpbWU6MH07Zm9yKHZhciBuIGluIGUpXCJuYXZpZ2F0aW9uU3RhcnRcIiE9PW4mJlwidG9KU09OXCIhPT1uJiYodFtuXT1NYXRoLm1heChlW25dLWUubmF2aWdhdGlvblN0YXJ0LDApKTtyZXR1cm4gdH0oKTtpZihuLnZhbHVlPW4uZGVsdGE9dC5yZXNwb25zZVN0YXJ0LG4udmFsdWU8MHx8bi52YWx1ZT5wZXJmb3JtYW5jZS5ub3coKSlyZXR1cm47bi5lbnRyaWVzPVt0XSxlKG4pfWNhdGNoKGUpe319LFwiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGU/c2V0VGltZW91dCh0LDApOmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHNldFRpbWVvdXQodCwwKX0pKX07ZXhwb3J0e2ggYXMgZ2V0Q0xTLGQgYXMgZ2V0RkNQLEwgYXMgZ2V0RklELEYgYXMgZ2V0TENQLFAgYXMgZ2V0VFRGQn07XG4iXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiaSIsInIiLCJuYW1lIiwidmFsdWUiLCJkZWx0YSIsImVudHJpZXMiLCJpZCIsImNvbmNhdCIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhIiwiUGVyZm9ybWFuY2VPYnNlcnZlciIsInN1cHBvcnRlZEVudHJ5VHlwZXMiLCJpbmNsdWRlcyIsInNlbGYiLCJnZXRFbnRyaWVzIiwibWFwIiwib2JzZXJ2ZSIsInR5cGUiLCJidWZmZXJlZCIsIm8iLCJkb2N1bWVudCIsInZpc2liaWxpdHlTdGF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidSIsInBlcnNpc3RlZCIsImMiLCJmIiwicyIsIm0iLCJ0aW1lU3RhbXAiLCJ2Iiwic2V0VGltZW91dCIsImZpcnN0SGlkZGVuVGltZSIsImQiLCJkaXNjb25uZWN0Iiwic3RhcnRUaW1lIiwicHVzaCIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwiZ2V0RW50cmllc0J5TmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJsIiwiaCIsImhhZFJlY2VudElucHV0IiwibGVuZ3RoIiwidGFrZVJlY29yZHMiLCJUIiwicGFzc2l2ZSIsImNhcHR1cmUiLCJ5IiwiZyIsInciLCJFIiwiZW50cnlUeXBlIiwidGFyZ2V0IiwiY2FuY2VsYWJsZSIsInByb2Nlc3NpbmdTdGFydCIsImZvckVhY2giLCJTIiwiTCIsImIiLCJGIiwib25jZSIsIlAiLCJnZXRFbnRyaWVzQnlUeXBlIiwidGltaW5nIiwibWF4IiwibmF2aWdhdGlvblN0YXJ0IiwicmVzcG9uc2VTdGFydCIsInJlYWR5U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9