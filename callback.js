(async () => {
  'use strict';
  const hash=location.hash;
  history.replaceState(null,'',location.pathname);
  const status=document.getElementById('callback-status');
  try {
    const client=PUAuthClient.create(PU_AUTH_CONFIG);
    await client.callback(hash);
    location.replace('/prompt-ustad/studio.html');
  } catch {
    status.textContent='Link verify nahi hua. Studio se dobara log in ya reset link request karein. / We could not verify this link. Return to the studio to log in or request a new link.';
  }
})();
