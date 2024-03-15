i18next
  .use(i18nextHttpBackend)
  .init({
    lng: localStorage.getItem('selectedLanguage') || 'en', // use the stored language or 'en' if none is stored
    fallbackLng: 'en',
    backend: {
      loadPath: '/locale/{{lng}}/translation.json',
    },
  }, function(err, t) {
    if (err) return console.log('something went wrong loading', err);
    jqueryI18next.init(i18next, $);
    $('body').localize();
  });

  window.changeLanguage = function(lng) {
    console.log('changing language to', lng);
    i18next.changeLanguage(lng, function(err, t) {
      if (err) return console.log('something went wrong loading', err);
      $('body').localize();

      localStorage.setItem('selectedLanguage', lng);

  
      // Check if the language is Kurdish or Arabic
      // if (lng === 'ku' || lng === 'ar') {
      //   // Change text direction to RTL
      //   $('html').attr('dir', 'rtl');
      // } else {
      //   // Change text direction to LTR
      //   $('html').attr('dir', 'ltr');
      // }
    });
  }