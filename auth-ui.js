(() => {
  'use strict';
  const rows = [
    ['left','{n} free prompts baqi','{n} free prompts left'],['finished','Free prompts khatam','Free prompts finished'],
    ['signup','Free account banayein','Create a free account'],['login','Log in','Log in'],['logout','Log out','Log out'],
    ['email','Email','Email'],['password','Password','Password'],['show','Password dikhayein','Show password'],['hide','Password chupayein','Hide password'],
    ['passwordHelp','Kam az kam 8 characters','At least 8 characters'],['forgot','Password bhool gaye?','Forgot password?'],
    ['send','Reset link bhejein','Send reset link'],['reset','Naya password save karein','Save new password'],['account','Account','Account'],
    ['unlimited','Unlimited free prompts','Unlimited free prompts'],['delete','Account delete karein','Delete account'],
    ['back','Wapas','Back'],['close','Band karein','Close'],['busy','Kaam ho raha hai…','Working…'],
    ['why','Bilkul free hai. Account se unlimited prompts milte hain.','It’s free. An account gives you unlimited prompts.'],
    ['opt','Mujhe product updates email karein. Optional.','Email me product updates. Optional.'],
    ['credentials','Apni email aur confirmation check karein, phir dobara try karein.','Check your details and email confirmation, then try again.'],
    ['sent','Agar is email ke liye action available hai, inbox mein link aa jayega.','If this action is available for this email, a link will arrive in your inbox.'],
    ['rate','Abhi bohat requests hain. Thori dair baad try karein.','Too many requests. Please try again shortly.'],
    ['network','Connection check karke dobara try karein.','Check your connection and try again.'],
    ['setup','Account setup abhi complete nahi. Free studio available hai.','Account setup is not complete. The free studio remains available.'],
    ['deleteConfirm','Account delete karna hai? Ye wapas nahi ho sakta. Local prompts delete nahi honge.','Delete your account? This cannot be undone. Local prompts will remain.'],
    ['deleted','Account delete ho gaya.','Your account has been deleted.'],['resetDone','Password update ho gaya. Ab log in karein.','Password updated. Please log in.'],
    ['privacy','Aapka prompt text device se nahi bheja jata. Account ke liye email aur update preference Supabase Auth mein rehti hai.','Your prompt text is not sent from your device. Account email and update preference are stored in Supabase Auth.']
  ];
  const copy = Object.fromEntries(rows.map(([key,ru,en])=>[key,{ru,en}]));
  const lang = () => document.documentElement.dataset.uiLanguage === 'en' ? 'en' : 'ru';
  const t = (key,n) => (copy[key]?.[lang()] || key).replace('{n}',String(n));
  const config = window.PU_AUTH_CONFIG || {};
  const client = PUAuthClient.create(config);
  const enabled = () => config.enabled === true && config.smtpReady === true && config.deleteFunctionReady === true && client.configured;
  let accountStorage;try{accountStorage=window.localStorage;}catch{}
  const gate = PUGate.create(accountStorage,client.isSignedIn,enabled);
  let mode='signup',message='',working=false,returnFocus=null;
  const wrap=document.createElement('div');wrap.className='pu-account-controls';
  const pill=document.createElement('span');pill.id='pu-free-pill';pill.className='pu-free-pill';pill.setAttribute('aria-live','polite');
  const accountButton=document.createElement('button');accountButton.type='button';accountButton.id='pu-account-button';accountButton.className='secondary';
  wrap.append(pill,accountButton);document.querySelector('.top-actions').prepend(wrap);
  const dialog=document.createElement('dialog');dialog.id='pu-auth-dialog';dialog.setAttribute('aria-labelledby','pu-auth-title');dialog.setAttribute('aria-describedby','pu-auth-why');
  dialog.innerHTML='<button type="button" class="pu-close" id="pu-close">×</button><h2 id="pu-auth-title"></h2><p id="pu-auth-why"></p><nav role="tablist" aria-label="Account" id="pu-auth-tabs"><button type="button" id="pu-tab-signup" role="tab" aria-controls="pu-auth-panel"></button><button type="button" id="pu-tab-login" role="tab" aria-controls="pu-auth-panel"></button></nav><section id="pu-auth-panel" role="tabpanel" aria-labelledby="pu-tab-signup"><form id="pu-auth-form"><div id="pu-email-field"><label for="pu-email" id="pu-email-label"></label><input id="pu-email" type="email" autocomplete="email" required maxlength="254"></div><div id="pu-password-field"><label for="pu-password" id="pu-password-label"></label><div class="pu-password-row"><input id="pu-password" type="password" minlength="8" required autocomplete="new-password"><button type="button" id="pu-show-password"></button></div><small id="pu-password-help"></small></div><label class="pu-opt" id="pu-opt-field"><input id="pu-marketing" type="checkbox"><span id="pu-opt-label"></span></label><button class="primary" type="submit" id="pu-submit"></button><button type="button" id="pu-forgot"></button><button type="button" id="pu-back"></button></form></section><section id="pu-account-panel" hidden><p id="pu-account-email"></p><p id="pu-delete-warning" hidden></p><div class="pu-account-actions"><button type="button" class="secondary" id="pu-logout"></button><button type="button" class="secondary" id="pu-delete"></button></div></section><p id="pu-auth-status" role="status" aria-live="polite" aria-atomic="true"></p><p class="pu-privacy" id="pu-auth-privacy"></p><p class="pu-legal"><a href="/prompt-ustad/privacy.html">Privacy</a> · <a href="/prompt-ustad/terms.html">Terms</a> · <a id="pu-contact">Contact</a></p>';
  document.body.append(dialog);
  const $=id=>document.getElementById(id);
  $('pu-contact').href='mailto:'+config.supportEmail;
  function status(key){message=key;$('pu-auth-status').textContent=t(key);}
  function paint(){
    wrap.hidden=!enabled();
    const signed=client.isSignedIn();pill.textContent=signed?t('unlimited'):gate.left()?t('left',gate.left()):t('finished');
    accountButton.textContent=t(signed?'account':'signup');
    $('pu-auth-title').textContent=t(mode==='account'?'account':mode==='delete'?'delete':mode==='forgot'?'forgot':mode==='reset'?'reset':mode);
    $('pu-auth-why').textContent=t('why');$('pu-auth-privacy').textContent=t('privacy');
    $('pu-close').setAttribute('aria-label',t('close'));
    for(const [id,key] of [['pu-tab-signup','signup'],['pu-tab-login','login'],['pu-email-label','email'],['pu-password-label','password'],['pu-password-help','passwordHelp'],['pu-opt-label','opt'],['pu-forgot','forgot'],['pu-back','back'],['pu-logout','logout'],['pu-delete-warning','deleteConfirm']])$(id).textContent=t(key);
    $('pu-show-password').textContent=t($('pu-password').type==='password'?'show':'hide');
    $('pu-submit').textContent=t(working?'busy':mode==='forgot'?'send':mode==='reset'?'reset':mode);
    $('pu-submit').disabled=working;
    const account=mode==='account'||mode==='delete';$('pu-account-panel').hidden=!account;$('pu-auth-panel').hidden=account;
    $('pu-auth-tabs').hidden=!['signup','login'].includes(mode);
    for(const tab of ['signup','login']){const selected=tab===mode;$('pu-tab-'+tab).setAttribute('aria-selected',String(selected));$('pu-tab-'+tab).tabIndex=selected?0:-1;}
    $('pu-auth-panel').setAttribute('aria-labelledby',mode==='login'?'pu-tab-login':'pu-tab-signup');
    $('pu-email-field').hidden=mode==='reset';$('pu-email').required=mode!=='reset';
    $('pu-password-field').hidden=mode==='forgot';$('pu-password').required=mode!=='forgot';$('pu-password').autocomplete=mode==='login'?'current-password':'new-password';
    $('pu-opt-field').hidden=mode!=='signup';$('pu-forgot').hidden=mode!=='login';$('pu-back').hidden=!['forgot','reset'].includes(mode);
    $('pu-account-email').textContent=client.getSession()?.user.email||'';
    $('pu-delete-warning').hidden=mode!=='delete';$('pu-logout').hidden=mode==='delete';$('pu-delete').textContent=t(working?'busy':mode==='delete'?'delete':'delete');$('pu-delete').disabled=working;
    if(message)$('pu-auth-status').textContent=t(message);
  }
  function open(next='signup',trigger=document.activeElement){if(!dialog.open)returnFocus=trigger;mode=next;message='';$('pu-auth-form').reset();$('pu-password').type='password';paint();if(!dialog.open)dialog.showModal();queueMicrotask(()=>{const target=['account','delete'].includes(mode)?$('pu-close'):mode==='reset'?$('pu-password'):$('pu-email');target.focus();});if(!enabled())status('setup');}
  function close(){dialog.close();}
  dialog.addEventListener('close',()=>{$('pu-password').value='';if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});});
  dialog.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();close();return;}
    if(e.key==='Tab'){const nodes=[...dialog.querySelectorAll('button,input,a[href]')].filter(n=>!n.disabled&&n.getClientRects().length);const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
  });
  accountButton.addEventListener('click',()=>open(client.isSignedIn()?'account':'signup',accountButton));$('pu-close').addEventListener('click',close);
  for(const tab of ['signup','login'])$('pu-tab-'+tab).addEventListener('click',()=>open(tab,$('pu-tab-'+tab)));
  $('pu-auth-tabs').addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();mode=mode==='signup'?'login':'signup';message='';paint();$('pu-tab-'+mode).focus();}});
  $('pu-forgot').addEventListener('click',()=>{mode='forgot';message='';paint();$('pu-email').focus();});$('pu-back').addEventListener('click',()=>{mode='login';message='';paint();$('pu-email').focus();});
  $('pu-show-password').addEventListener('click',()=>{$('pu-password').type=$('pu-password').type==='password'?'text':'password';paint();});
  $('pu-auth-form').addEventListener('submit',async e=>{
    e.preventDefault();if(working)return;if(!enabled()){status('setup');return;}
    const email=$('pu-email').value,password=$('pu-password').value,opt=$('pu-marketing').checked;working=true;message='busy';paint();
    try{
      if(mode==='signup'){await client.signup(email,password,opt);status('sent');}
      else if(mode==='login'){await client.login(email,password);close();}
      else if(mode==='forgot'){await client.recover(email);status('sent');}
      else if(mode==='reset'){await client.reset(password);mode='login';status('resetDone');}
    }catch(err){status(err.kind==='password'?'passwordHelp':copy[err.kind]?err.kind:'credentials');}
    finally{working=false;$('pu-password').value='';paint();}
  });
  $('pu-logout').addEventListener('click',async()=>{await client.logout();close();paint();});
  $('pu-delete').addEventListener('click',async()=>{
    if(mode!=='delete'){mode='delete';message='';paint();return;}
    if(working)return;working=true;paint();
    try{await client.deleteAccount();mode='signup';status('deleted');}catch(err){status(copy[err.kind]?err.kind:'network');}finally{working=false;paint();}
  });
  client.subscribe(paint);
  new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:['data-ui-language']});
  window.addEventListener('storage',e=>{if(e.key===PUGate.KEY)paint();});
  window.addEventListener('online',()=>client.validate());
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)client.validate();});
  const timer=setInterval(()=>client.validate(),60000);window.addEventListener('pagehide',()=>clearInterval(timer),{once:true});
  window.PUAccount={client,gate,rows,isSignedIn:client.isSignedIn,enabled,before(kind){if(gate.allowed(kind))return true;open('signup',document.activeElement);status('finished');return false;},commit(kind){gate.commit(kind);paint();},open};
  paint();if(client.isSignedIn())client.validate();
  let recovery=false;try{recovery=localStorage.getItem(PUAuthClient.RECOVERY_KEY)==='1';}catch{}
  if(recovery)open('reset');
})();
