if (localStorage.getItem('RESTYLE') == 1) {
  localStorage.setItem('RESTYLE', null);
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: false
  });
  location.reload();
} else {
  localStorage.setItem('RESTYLE', 1);
  chrome.runtime.sendMessage({
    action: 'updateIcon',
    value: true
  });
  location.reload();
}