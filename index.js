i18next
  .use(i18nextHttpBackend)
  .init({
    lng: 'en', // set the default language
    fallbackLng: 'en', // set the fallback language
    backend: {
      loadPath: '/locale/{{lng}}/translation.json', // path to your translation files
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