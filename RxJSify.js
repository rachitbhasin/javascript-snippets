// Inject RxJS at run time
(function () {
  var s = document.createElement('script');
  s.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.2/rxjs.umd.min.js');
  s.addEventListener('load', function(){
    console.log('RxJS loaded!');
  });

  document.body.appendChild(s);
})();