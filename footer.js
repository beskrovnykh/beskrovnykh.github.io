/* Общий подвал сайта: один файл на все страницы и оба языка.
   Страница ставит <footer id="site-foot"></footer> и подключает этот скрипт. */
(function () {
  var f = document.getElementById('site-foot');
  if (!f) return;
  var en = location.pathname.indexOf('/en/') === 0;
  var p = en ? '/en' : '';
  var t = en
    ? { me: 'Andrei Beskrovnykh', w: 'Writing', ph: 'Photos', fd: 'Freediving', dok: 'Dok',
        cr: '© 2026 Andrei Beskrovnykh. Photographs and texts are the author’s; no use without permission.' }
    : { me: 'Андрей Бескровных', w: 'Тексты', ph: 'Фотографии', fd: 'Фридайвинг', dok: 'Док',
        cr: '© 2026 Андрей Бескровных. Фотографии и тексты — авторские, использование без разрешения не допускается.' };
  var css = document.createElement('style');
  css.textContent =
    '#site-foot{max-width:640px;margin:64px auto 0;padding:24px 16px 48px;border-top:1px solid var(--rule,#241f1b);' +
    'font:14px/1.6 "Helvetica Neue",Helvetica,Arial,sans-serif;color:var(--ink-dim,#9a9186);text-align:left}' +
    'main #site-foot{padding-left:0;padding-right:0;margin-top:48px}' +
    '#site-foot .me{font:20px Georgia,"Iowan Old Style","Times New Roman",serif;color:var(--ink,#f2ede4);text-decoration:none}' +
    '#site-foot .links{margin:10px 0 18px}#site-foot .links a{color:var(--ink-dim,#9a9186);text-decoration:none;margin-right:16px}' +
    '#site-foot .links a:hover,#site-foot .me:hover{color:var(--gold,#c9a227)}#site-foot .cr{font-size:12px;opacity:.8}';
  document.head.appendChild(css);
  f.innerHTML =
    '<a class="me" href="' + p + '/">' + t.me + '</a>' +
    '<div class="links"><a href="' + p + '/writing/">' + t.w + '</a><a href="' + p + '/photos/">' + t.ph + '</a>' +
    '<a href="' + p + '/freediving/">' + t.fd + '</a>' +
    '<a href="https://t.me/doktomebot?start=blog_foot' + (en ? '_en' : '') + '">' + t.dok + '</a>' +
    '<a href="https://t.me/beskrovnykh">Telegram</a></div>' +
    '<div class="cr">' + t.cr + '</div>';
})();
