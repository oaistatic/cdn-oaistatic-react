function a(e){if(!e)return null;let t=e.match(/filename\*\s*=\s*([^;]+)/i);if(t&&t[1]){const r=t[1].trim(),n=r.split("''");if(n.length===2)try{return decodeURIComponent(n[1])}catch(l){return n[1]}return r}return t=e.match(/filename="?([^"]+)"?/),t&&t[1]?t[1]:null}export{a as g};
//# sourceMappingURL=k97n0y6ba9c9h39c.js.map
