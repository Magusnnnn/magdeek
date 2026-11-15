(function () {
  var KEY = 'magdeek-theme';
  function apply(t) { document.documentElement.setAttribute('data-theme', t); }
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  apply(saved === 'light' ? 'light' : 'dark');
  function label(t) { return t === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'; }
  function add() {
    var btn = document.createElement('button');
    btn.id = 'md-theme-btn';
    btn.type = 'button';
    btn.textContent = label(document.documentElement.getAttribute('data-theme'));
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      apply(next);
      btn.textContent = label(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
    document.body.appendChild(btn);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add); else add();
})();
