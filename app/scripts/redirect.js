  /**
   * Extracts get parameters from URI
   */
  function getUrlParameters(url) {
    var params = url.split('?')
    if(params.length != 2)
      return {}
    params = params[1].split('&')
    var result = {}
    for(var i=0; i < params.length; i++) {
      var temp = params[i].split('=')
      if(temp.length == 2) {
        result[temp[0]] = temp[1]
      }
    }
    return result
  }

  /**
   * Returns the browser's current language settings
   */
  function getBrowserLanguages() {
    if(navigator.language) {
      return [navigator.language]
    } else if(navigator.languages) {
      return navigator.languages
    } else if(navigator.userLanguage) {
      return [navigator.userLanguage]
    } else if(navigator.browserLanguage) {
      return [navigator.browserLanguage]
    } else if(navigator.systemLanguage) {
      return [navigator.systemLanguage]
    }
  }

  /**
   * Redirects to a page in a given language
   */
  function languageRedirect(language) {
    var redirect_table = {
      'zh'   : '/ch/',
      'zh-hk': '/ch/',
      'zh-cn': '/ch/',
      'zh-sg': '/ch/',
      'zh-tw': '/ch/',
      'en': '/',
      'en-au': '/',
      'en-bz': '/',
      'en-ca': '/',
      'en-ie': '/',
      'en-jm': '/',
      'en-nz': '/',
      'en-ph': '/',
      'en-za': '/',
      'en-tt': '/',
      'en-gb': '/',
      'en-us': '/',
      'en-zw': '/'
    }
    if(language in redirect_table) {
      var new_location = window.location.origin + redirect_table[language]
      if(window.location != new_location)
        window.location = window.location.origin + redirect_table[language]
    }
  }

  /**
   * Checks for the need of a page redirect, and redirects if needed
   */
  function manageLanguageRedirect(currentLanguage) {
    // checking if current language matches the user specified parameter
    var params = getUrlParameters(window.location.href)
    if('!' in params && params['!'] == currentLanguage)
      return;
    // redirecting based on browser settings
    var browserLanguages = getBrowserLanguages()
    for(var i=0; i < browserLanguages.length; i++) {
      languageRedirect(browserLanguages[i])
    }
  }
