const fingerprint_browser = () => {
  'use strict';
  let strUserAgent = null;
  let numVersion = null;
  let strBrowser = null;
  let strOut = null;
  try {
    strUserAgent = navigator.userAgent.toLowerCase();
    if (/msie (\d+\.\d+);/.test(strUserAgent)) {
      if (strUserAgent.indexOf('trident/6') > -1) {
        numVersion = 10;
      }
      if (strUserAgent.indexOf('trident/5') > -1) {
        numVersion = 9;
      }
      if (strUserAgent.indexOf('trident/4') > -1) {
        numVersion = 8;
      }
      strBrowser = `Internet Explorer ${numVersion}`;
    } else if (strUserAgent.indexOf('trident/7') > -1) {
      numVersion = 11;
      strBrowser = `Internet Explorer ${numVersion}`;
    } else if (/firefox[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Firefox ${numVersion}`;
    } else if (/opera[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Opera ${numVersion}`;
    } else if (/chrome[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Chrome ${numVersion}`;
    } else if (/version[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Safari ${numVersion}`;
    } else if (/rv[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Mozilla ${numVersion}`;
    } else if (/mozilla[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Mozilla ${numVersion}`;
    } else if (/binget[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (BinGet) ${numVersion}`;
    } else if (/curl[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (cURL) ${numVersion}`;
    } else if (/java[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (Java) ${numVersion}`;
    } else if (/libwww-perl[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (libwww-perl) ${numVersion}`;
    } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (Microsoft URL Control) ${numVersion}`;
    } else if (/peach[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (Peach) ${numVersion}`;
    } else if (/php[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (PHP) ${numVersion}`;
    } else if (/pxyscand[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (pxyscand) ${numVersion}`;
    } else if (/pycurl[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (PycURL) ${numVersion}`;
    } else if (/python-urllib[/\s](\d+\.\d+)/.test(strUserAgent)) {
      strBrowser = `Library (Python URLlib) ${numVersion}`;
    } else if (/appengine-google/.test(strUserAgent)) {
      strBrowser = `Cloud (Google AppEngine) ${numVersion}`;
    } else {
      strBrowser = 'Unknown';
    }
    strOut = strBrowser;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_canvas = () => {
  'use strict';

  let canvas = null;
  let strCText = null;
  const strText = null;
  let strOut = null;
  try {
    canvas = document.createElement('canvas');
    strCText = canvas.getContext('2d', { willReadFrequently: true });
    strCText.textBaseline = 'top';
    strCText.font = "14px 'Arial'";
    strCText.textBaseline = 'alphabetic';
    strCText.fillStyle = '#f60';
    strCText.fillRect(125, 1, 62, 20);
    strCText.fillStyle = '#069';
    strCText.fillText(strText, 2, 15);
    strCText.fillStyle = 'rgba(102, 204, 0, 0.7)';
    strCText.fillText(strText, 4, 17);
    strOut = canvas.toDataURL();
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_connection = () => {
  'use strict';

  let strOut = null;

  try {
    strOut = navigator.connection.type;
  } catch {
    strOut = 'N/A';
  }

  return strOut;
};

const fingerprint_cookie = () => {
  'use strict';
  let isCookieEnabled = false;

  try {
    isCookieEnabled = navigator.cookieEnabled ? true : false;

    if (typeof navigator.cookieEnabled === 'undefined' && !isCookieEnabled) {
      document.cookie = 'testcookie';
      isCookieEnabled =
        document.cookie.indexOf('testcookie') !== -1 ? true : false;
    }

    return String(isCookieEnabled);
  } catch {
    return 'Error';
  }
};

const fingerprint_display = () => {
  'use strict';
  const strSep = '|';
  let strScreen = null;
  let strDisplay = null;
  let strOut = null;
  try {
    strScreen = window.screen;
    if (strScreen) {
      strDisplay =
        strScreen.colorDepth +
        strSep +
        strScreen.width +
        strSep +
        strScreen.height +
        strSep +
        strScreen.availWidth +
        strSep +
        strScreen.availHeight;
    }
    strOut = strDisplay;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_flash = () => {
  'use strict';

  let objPlayerVersion = null;
  let strVersion = null;
  let strOut = null;
  try {
    // eslint-disable-next-line no-undef
    objPlayerVersion = swfobject.getFlashPlayerVersion();
    strVersion = `${objPlayerVersion.major}.${objPlayerVersion.minor}.${
      objPlayerVersion.release
    }`;
    if (strVersion === '0.0.0') {
      strVersion = 'N/A';
    }
    strOut = strVersion;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_fonts = () => {
  'use strict';

  let style = null;
  let fonts = null;
  let font = null;
  let count = 0;
  let template = null;
  let divs = null;
  let e = null;
  let div = null;
  let body = null;
  let fragment = null;
  let result = null;
  try {
    style = 'position: absolute; visibility: hidden; display: block !important';
    fonts = [
      'Abadi MT Condensed Light',
      'Adobe Fangsong Std',
      'Adobe Hebrew',
      'Adobe Ming Std',
      'Agency FB',
      'Aharoni',
      'Andalus',
      'Angsana New',
      'AngsanaUPC',
      'Aparajita',
      'Arab',
      'Arabic Transparent',
      'Arabic Typesetting',
      'Arial Baltic',
      'Arial Black',
      'Arial CE',
      'Arial CYR',
      'Arial Greek',
      'Arial TUR',
      'Arial',
      'Batang',
      'BatangChe',
      'Bauhaus 93',
      'Bell MT',
      'Bitstream Vera Serif',
      'Bodoni MT',
      'Bookman Old Style',
      'Braggadocio',
      'Broadway',
      'Browallia New',
      'BrowalliaUPC',
      'Calibri Light',
      'Calibri',
      'Californian FB',
      'Cambria Math',
      'Cambria',
      'Candara',
      'Castellar',
      'Casual',
      'Centaur',
      'Century Gothic',
      'Chalkduster',
      'Colonna MT',
      'Comic Sans MS',
      'Consolas',
      'Constantia',
      'Copperplate Gothic Light',
      'Corbel',
      'Cordia New',
      'CordiaUPC',
      'Courier New Baltic',
      'Courier New CE',
      'Courier New CYR',
      'Courier New Greek',
      'Courier New TUR',
      'Courier New',
      'DFKai-SB',
      'DaunPenh',
      'David',
      'DejaVu LGC Sans Mono',
      'Desdemona',
      'DilleniaUPC',
      'DokChampa',
      'Dotum',
      'DotumChe',
      'Ebrima',
      'Engravers MT',
      'Eras Bold ITC',
      'Estrangelo Edessa',
      'EucrosiaUPC',
      'Euphemia',
      'Eurostile',
      'FangSong',
      'Forte',
      'FrankRuehl',
      'Franklin Gothic Heavy',
      'Franklin Gothic Medium',
      'FreesiaUPC',
      'French Script MT',
      'Gabriola',
      'Gautami',
      'Georgia',
      'Gigi',
      'Gisha',
      'Goudy Old Style',
      'Gulim',
      'GulimChe',
      'GungSeo',
      'Gungsuh',
      'GungsuhChe',
      'Haettenschweiler',
      'Harrington',
      'Hei S',
      'HeiT',
      'Heisei Kaku Gothic',
      'Hiragino Sans GB',
      'Impact',
      'Informal Roman',
      'IrisUPC',
      'Iskoola Pota',
      'JasmineUPC',
      'KacstOne',
      'KaiTi',
      'Kalinga',
      'Kartika',
      'Khmer UI',
      'Kino MT',
      'KodchiangUPC',
      'Kokila',
      'Kozuka Gothic Pr6N',
      'Lao UI',
      'Latha',
      'Leelawadee',
      'Levenim MT',
      'LilyUPC',
      'Lohit Gujarati',
      'Loma',
      'Lucida Bright',
      'Lucida Console',
      'Lucida Fax',
      'Lucida Sans Unicode',
      'MS Gothic',
      'MS Mincho',
      'MS PGothic',
      'MS PMincho',
      'MS Reference Sans Serif',
      'MS UI Gothic',
      'MV Boli',
      'Magneto',
      'Malgun Gothic',
      'Mangal',
      'Marlett',
      'Matura MT Script Capitals',
      'Meiryo UI',
      'Meiryo',
      'Menlo',
      'Microsoft Himalaya',
      'Microsoft JhengHei',
      'Microsoft New Tai Lue',
      'Microsoft PhagsPa',
      'Microsoft Sans Serif',
      'Microsoft Tai Le',
      'Microsoft Uighur',
      'Microsoft YaHei',
      'Microsoft Yi Baiti',
      'MingLiU',
      'MingLiU-ExtB',
      'MingLiU_HKSCS',
      'MingLiU_HKSCS-ExtB',
      'Miriam Fixed',
      'Miriam',
      'Mongolian Baiti',
      'MoolBoran',
      'NSimSun',
      'Narkisim',
      'News Gothic MT',
      'Niagara Solid',
      'Nyala',
      'PMingLiU',
      'PMingLiU-ExtB',
      'Palace Script MT',
      'Palatino Linotype',
      'Papyrus',
      'Perpetua',
      'Plantagenet Cherokee',
      'Playbill',
      'Prelude Bold',
      'Prelude Condensed Bold',
      'Prelude Condensed Medium',
      'Prelude Medium',
      'PreludeCompressedWGL Black',
      'PreludeCompressedWGL Bold',
      'PreludeCompressedWGL Light',
      'PreludeCompressedWGL Medium',
      'PreludeCondensedWGL Black',
      'PreludeCondensedWGL Bold',
      'PreludeCondensedWGL Light',
      'PreludeCondensedWGL Medium',
      'PreludeWGL Black',
      'PreludeWGL Bold',
      'PreludeWGL Light',
      'PreludeWGL Medium',
      'Raavi',
      'Rachana',
      'Rockwell',
      'Rod',
      'Sakkal Majalla',
      'Sawasdee',
      'Script MT Bold',
      'Segoe Print',
      'Segoe Script',
      'Segoe UI Light',
      'Segoe UI Semibold',
      'Segoe UI Symbol',
      'Segoe UI',
      'Shonar Bangla',
      'Showcard Gothic',
      'Shruti',
      'SimHei',
      'SimSun',
      'SimSun-ExtB',
      'Simplified Arabic Fixed',
      'Simplified Arabic',
      'Snap ITC',
      'Sylfaen',
      'Symbol',
      'Tahoma',
      'Times New Roman Baltic',
      'Times New Roman CE',
      'Times New Roman CYR',
      'Times New Roman Greek',
      'Times New Roman TUR',
      'Times New Roman',
      'TlwgMono',
      'Traditional Arabic',
      'Trebuchet MS',
      'Tunga',
      'Tw Cen MT Condensed Extra Bold',
      'Ubuntu',
      'Umpush',
      'Univers',
      'Utopia',
      'Utsaah',
      'Vani',
      'Verdana',
      'Vijaya',
      'Vladimir Script',
      'Vrinda',
      'Webdings',
      'Wide Latin',
      'Wingdings',
    ];
    count = fonts.length;
    template =
      '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' +
      '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>';
    fragment = document.createDocumentFragment();
    divs = [];
    for (let i = 0; i < count; i = i + 1) {
      font = fonts[i];
      div = document.createElement('div');
      font = font.replace(/['"<>]/g, '');
      div.innerHTML = template.replace(/X/g, font);
      div.style.cssText = style;
      fragment.appendChild(div);
      divs.push(div);
    }
    body = document.body;
    body.insertBefore(fragment, body.firstChild);
    result = [];
    for (let i = 0; i < count; i = i + 1) {
      e = divs[i].getElementsByTagName('b');
      if (e[0].offsetWidth === e[1].offsetWidth) {
        result.push(fonts[i]);
      }
    }
    for (let i = 0; i < count; i = i + 1) {
      body.removeChild(divs[i]);
    }
    return result.join('|');
  } catch {
    return 'N/A';
  }
};

const fingerprint_fontsmoothing = () => {
  'use strict';
  let strFontSmoothing = null;
  let canvasNode = null;
  let ctx = null;
  let i = 0;
  let j = 0;
  let imageData = null;
  let alpha = null;
  let strOut = null;

  if (typeof window.screen.fontSmoothingEnabled !== 'undefined') {
    strFontSmoothing = window.screen.fontSmoothingEnabled;
  } else {
    try {
      strFontSmoothing = 'false';
      canvasNode = document.createElement('canvas');
      canvasNode.width = '35';
      canvasNode.height = '35';
      canvasNode.style.display = 'none';
      document.body.appendChild(canvasNode);
      ctx = canvasNode.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '32px Arial';
      ctx.fillStyle = 'black';
      ctx.strokeStyle = 'black';
      ctx.fillText('O', 0, 0);
      for (j = 8; j <= 32; j = j + 1) {
        for (i = 1; i <= 32; i = i + 1) {
          imageData = ctx.getImageData(i, j, 1, 1).data;
          alpha = imageData[3];
          if (alpha !== 255 && alpha !== 0) {
            strFontSmoothing = 'true';
          }
        }
      }
      strOut = strFontSmoothing;
    } catch {
      return 'Unknown';
    }
  }
  strOut = strFontSmoothing;
  return strOut;
};

const fingerprint_formfields = () => {
  'use strict';
  let i = 0;
  let j = 0;
  let numOfForms = 0;
  let numOfInputs = 0;
  let strFormsInPage = '';
  const strFormsInputsData = [];
  let strInputsInForm = '';
  let strTmp = '';
  let strOut = '';
  strFormsInPage = document.getElementsByTagName('form');
  numOfForms = strFormsInPage.length;
  strFormsInputsData.push(`url=${window.location.href}`);
  for (i = 0; i < numOfForms; i = i + 1) {
    strFormsInputsData.push(`FORM=${strFormsInPage[i].name}`);
    strInputsInForm = strFormsInPage[i].getElementsByTagName('input');
    numOfInputs = strInputsInForm.length;
    for (j = 0; j < numOfInputs; j = j + 1) {
      if (strInputsInForm[j].type !== 'hidden') {
        strFormsInputsData.push(`Input=${strInputsInForm[j].name}`);
      }
    }
  }
  strTmp = strFormsInputsData.join('|');
  strOut = strTmp;
  return strOut;
};

const fingerprint_java = () => {
  'use strict';

  let strJavaEnabled = null;
  let strOut = null;
  try {
    strJavaEnabled = navigator.javaEnabled() ? 'true' : 'false';
    strOut = strJavaEnabled;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_language = () => {
  'use strict';
  const strSep = '|';
  const strPair = '=';

  let strLang = null;
  let strTypeLng = null;
  let strTypeBrLng = null;
  let strTypeSysLng = null;
  let strTypeUsrLng = null;
  let strOut = null;
  try {
    strTypeLng = typeof navigator.language;
    strTypeBrLng = typeof navigator.browserLanguage;
    strTypeSysLng = typeof navigator.systemLanguage;
    strTypeUsrLng = typeof navigator.userLanguage;
    if (strTypeLng !== 'undefined') {
      strLang = `lang${strPair}${navigator.language}${strSep}`;
    } else if (strTypeBrLng !== 'undefined') {
      strLang = `lang${strPair}${navigator.browserLanguage}${strSep}`;
    } else {
      strLang = `lang${strPair}${strSep}`;
    }
    if (strTypeSysLng !== 'undefined') {
      strLang += `syslang${strPair}${navigator.systemLanguage}${strSep}`;
    } else {
      strLang += `syslang${strPair}${strSep}`;
    }
    if (strTypeUsrLng !== 'undefined') {
      strLang += `userlang${strPair}${navigator.userLanguage}`;
    } else {
      strLang += `userlang${strPair}`;
    }
    strOut = strLang;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_os = () => {
  'use strict';
  const strSep = '|';
  const getOS = () => {
    const ua = navigator.userAgent.toLowerCase();
    let os = 'Unknown OS';
    if (ua.indexOf('windows nt 10.0') !== -1) {
      os = 'Windows 10/11';
    } else if (ua.indexOf('windows nt 6.3') !== -1) {
      os = 'Windows 8.1';
    } else if (ua.indexOf('windows nt 6.2') !== -1) {
      os = 'Windows 8';
    } else if (ua.indexOf('windows nt 6.1') !== -1) {
      os = 'Windows 7';
    } else if (ua.indexOf('windows nt 6.0') !== -1) {
      os = 'Windows Vista';
    } else if (ua.indexOf('windows nt 5.2') !== -1) {
      os = 'Windows Server 2003/XP x64';
    } else if (ua.indexOf('windows nt 5.1') !== -1) {
      os = 'Windows XP';
    } else if (ua.indexOf('windows nt 5.01') !== -1) {
      os = 'Windows 2000, Service Pack 1 (SP1)';
    } else if (ua.indexOf('windows xp') !== -1) {
      os = 'Windows XP';
    } else if (ua.indexOf('windows 2000') !== -1) {
      os = 'Windows 2000';
    } else if (ua.indexOf('windows nt 5.0') !== -1) {
      os = 'Windows 2000';
    } else if (ua.indexOf('windows nt 4.0') !== -1) {
      os = 'Windows NT 4.0';
    } else if (ua.indexOf('windows nt') !== -1) {
      os = 'Windows NT 4.0';
    } else if (ua.indexOf('winnt4.0') !== -1) {
      os = 'Windows NT 4.0';
    } else if (ua.indexOf('winnt') !== -1) {
      os = 'Windows NT 4.0';
    } else if (ua.indexOf('windows me') !== -1) {
      os = 'Windows ME';
    } else if (ua.indexOf('win 9x 4.90') !== -1) {
      os = 'Windows ME';
    } else if (ua.indexOf('windows 98') !== -1) {
      os = 'Windows 98';
    } else if (ua.indexOf('win98') !== -1) {
      os = 'Windows 98';
    } else if (ua.indexOf('windows 95') !== -1) {
      os = 'Windows 95';
    } else if (ua.indexOf('windows_95') !== -1) {
      os = 'Windows 95';
    } else if (ua.indexOf('win95') !== -1) {
      os = 'Windows 95';
    } else if (ua.indexOf('ce') !== -1) {
      os = 'Windows CE';
    } else if (ua.indexOf('win16') !== -1) {
      os = 'Windows 3.11';
    } else if (ua.indexOf('iemobile') !== -1) {
      os = 'Windows Mobile';
    } else if (ua.indexOf('wm5 pie') !== -1) {
      os = 'Windows Mobile';
    } else if (ua.indexOf('windows') !== -1) {
      os = 'Windows (Unknown Version)';
    } else if (ua.indexOf('mac os x beta') !== -1) {
      os = 'Mac OSX Beta (Kodiak)';
    } else if (ua.indexOf('mac os x 10_15') !== -1) {
      os = 'macOS Catalina';
    } else if (ua.indexOf('mac os x 10_14') !== -1) {
      os = 'macOS Mojave';
    } else if (ua.indexOf('mac os x 10_13') !== -1) {
      os = 'macOS High Sierra';
    } else if (ua.indexOf('mac os x 10_12') !== -1) {
      os = 'macOS Sierra';
    } else if (ua.indexOf('mac os x 10_11') !== -1) {
      os = 'OS X El Capitan';
    } else if (ua.indexOf('mac os x 10_10') !== -1) {
      os = 'OS X Yosemite';
    } else if (ua.indexOf('mac os x 10_9') !== -1) {
      os = 'OS X Mavericks';
    } else if (ua.indexOf('mac os x 10_8') !== -1) {
      os = 'OS X Mountain Lion';
    } else if (ua.indexOf('mac os x 10_7') !== -1) {
      os = 'OS X Lion';
    } else if (ua.indexOf('mac os x 10_6') !== -1) {
      os = 'OS X Snow Leopard';
    } else if (ua.indexOf('mac os x 10_5') !== -1) {
      os = 'OS X Leopard';
    } else if (ua.indexOf('mac os x 10_4') !== -1) {
      os = 'OS X Tiger';
    } else if (ua.indexOf('mac os x 10_3') !== -1) {
      os = 'OS X Panther';
    } else if (ua.indexOf('mac os x 10_2') !== -1) {
      os = 'OS X Jaguar';
    } else if (ua.indexOf('mac os x 10_1') !== -1) {
      os = 'OS X Puma';
    } else if (ua.indexOf('mac os x 10_0') !== -1) {
      os = 'OS X Cheetah';
    } else if (ua.indexOf('mac os x 11') !== -1) {
      os = 'macOS Big Sur';
    } else if (ua.indexOf('mac os x 12') !== -1) {
      os = 'macOS Monterey';
    } else if (ua.indexOf('mac os x 13') !== -1) {
      os = 'macOS Ventura';
    } else if (ua.indexOf('mac os x 14') !== -1) {
      os = 'macOS Sonoma';
    } else if (ua.indexOf('mac os x 15') !== -1) {
      os = 'macOS Sequoia';
    } else if (ua.indexOf('mac_68000') !== -1) {
      os = 'Mac OS Classic (68000)';
    } else if (ua.indexOf('68k') !== -1) {
      os = 'Mac OS Classic (68000)';
    } else if (ua.indexOf('mac_powerpc') !== -1) {
      os = 'Mac OS Classic (PowerPC)';
    } else if (ua.indexOf('ppc mac') !== -1) {
      os = 'Mac OS Classic (PowerPC)';
    } else if (ua.indexOf('macintosh') !== -1) {
      os = 'Mac OS Classic';
    } else if (ua.indexOf('ipod') !== -1) {
      os = 'iOS (iTouch)';
    } else if (ua.indexOf('iphone') !== -1) {
      os = 'iOS (iPhone)';
    } else if (
      ua.indexOf('ipad') !== -1 ||
      (ua.indexOf('macintosh') !== -1 && 'ontouchend' in document)
    ) {
      os = 'iPadOS';
    } else if (ua.indexOf('googletv') !== -1) {
      os = 'Android (GoogleTV)';
    } else if (ua.indexOf('xoom') !== -1) {
      os = 'Android (Xoom)';
    } else if (ua.indexOf('htc_flyer') !== -1) {
      os = 'Android (HTC Flyer)';
    } else if (ua.indexOf('android 14') !== -1) {
      os = 'Android 14 (Upside Down Cake)';
    } else if (ua.indexOf('android 13') !== -1) {
      os = 'Android 13 (Tiramisu)';
    } else if (ua.indexOf('android') !== -1) {
      os = 'Android';
    } else if (ua.indexOf('symbian') !== -1) {
      os = 'Symbian';
    } else if (ua.indexOf('series60') !== -1) {
      os = 'Symbian (Series 60)';
    } else if (ua.indexOf('series70') !== -1) {
      os = 'Symbian (Series 70)';
    } else if (ua.indexOf('series90') !== -1) {
      os = 'Symbian (Series 90)';
    } else if (ua.indexOf('x11') !== -1) {
      os = 'UNIX';
    } else if (ua.indexOf('nix') !== -1) {
      os = 'UNIX';
    } else if (ua.indexOf('ubuntu') !== -1) {
      os = 'Ubuntu Linux';
    } else if (ua.indexOf('debian') !== -1) {
      os = 'Debian Linux';
    } else if (ua.indexOf('fedora') !== -1) {
      os = 'Fedora Linux';
    } else if (ua.indexOf('red hat') !== -1 || ua.indexOf('redhat') !== -1) {
      os = 'Red Hat Linux';
    } else if (ua.indexOf('centos') !== -1) {
      os = 'CentOS Linux';
    } else if (ua.indexOf('opensuse') !== -1) {
      os = 'openSUSE Linux';
    } else if (ua.indexOf('suse') !== -1) {
      os = 'SUSE Linux';
    } else if (ua.indexOf('arch') !== -1) {
      os = 'Arch Linux';
    } else if (ua.indexOf('gentoo') !== -1) {
      os = 'Gentoo Linux';
    } else if (ua.indexOf('linux mint') !== -1) {
      os = 'Linux Mint';
    } else if (ua.indexOf('elementary os') !== -1) {
      os = 'elementary OS';
    } else if (ua.indexOf('kali') !== -1) {
      os = 'Kali Linux';
    } else if (ua.indexOf('manjaro') !== -1) {
      os = 'Manjaro Linux';
    } else if (ua.indexOf('raspbian') !== -1) {
      os = 'Raspbian (Raspberry Pi OS)';
    } else if (ua.indexOf('linux') !== -1) {
      os = 'Linux (Unknown Distro)';
    } else if (ua.indexOf('qnx') !== -1) {
      os = 'QNX';
    } else if (ua.indexOf('os/2') !== -1) {
      os = 'IBM OS/2';
    } else if (ua.indexOf('beos') !== -1) {
      os = 'BeOS';
    } else if (ua.indexOf('blackberry95') !== -1) {
      os = 'Blackberry (Storm 1/2)';
    } else if (ua.indexOf('blackberry97') !== -1) {
      os = 'Blackberry (Bold)';
    } else if (ua.indexOf('blackberry96') !== -1) {
      os = 'Blackberry (Tour)';
    } else if (ua.indexOf('blackberry89') !== -1) {
      os = 'Blackberry (Curve 2)';
    } else if (ua.indexOf('blackberry98') !== -1) {
      os = 'Blackberry (Torch)';
    } else if (ua.indexOf('playbook') !== -1) {
      os = 'Blackberry (Playbook)';
    } else if (ua.indexOf('wnd.rim') !== -1) {
      os = 'Blackberry (IE/FF Emulator)';
    } else if (ua.indexOf('blackberry') !== -1) {
      os = 'Blackberry';
    } else if (ua.indexOf('palm') !== -1) {
      os = 'Palm OS';
    } else if (ua.indexOf('webos') !== -1) {
      os = 'WebOS';
    } else if (ua.indexOf('hpwos') !== -1) {
      os = 'WebOS (HP)';
    } else if (ua.indexOf('blazer') !== -1) {
      os = 'Palm OS (Blazer)';
    } else if (ua.indexOf('xiino') !== -1) {
      os = 'Palm OS (Xiino)';
    } else if (ua.indexOf('kindle') !== -1) {
      os = 'Kindle';
    } else if (ua.indexOf('wii') !== -1) {
      os = 'Nintendo (Wii)';
    } else if (ua.indexOf('nintendo ds') !== -1) {
      os = 'Nintendo (DS)';
    } else if (ua.indexOf('webtv') !== -1) {
      os = 'MSN TV (WebTV)';
    } else if (ua.indexOf('inferno') !== -1) {
      os = 'Inferno';
    } else if (ua.indexOf('cros') !== -1) {
      os = 'ChromeOS';
    } else if (ua.indexOf('fuchsia') !== -1) {
      os = 'Fuchsia';
    } else if (ua.indexOf('playstation 5') !== -1) {
      os = 'Sony PlayStation 5';
    } else if (ua.indexOf('playstation 4') !== -1) {
      os = 'Sony PlayStation 4';
    } else if (ua.indexOf('playstation 3') !== -1) {
      os = 'Sony (Playstation Console)';
    } else if (ua.indexOf('playstation portable') !== -1) {
      os = 'Sony (Playstation Portable)';
    } else if (ua.indexOf('xbox') !== -1) {
      os = 'Xbox';
    }
    return os;
  };

  const getBits = () => {
    const strPlatform = navigator.platform.toLowerCase();
    let strOSBits = 'Unknown';
    if (strPlatform.indexOf('x64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('wow64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('win64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('win32') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('x32') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('x86') !== -1) {
      strOSBits = '32 bits*';
    } else if (strPlatform.indexOf('ppc') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('alpha') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('68k') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('iphone') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('android') !== -1) {
      strOSBits = '32 bits';
    }

    return strOSBits;
  };

  try {
    const strOS = getOS();
    const strOSBits = getBits();
    return strOS + strSep + strOSBits;
  } catch {
    return 'N/A';
  }
};

const fingerprint_plugins = () => {
  'use strict';
  const strSep = '|';
  const strPair = ':';

  const activeXDetect = (componentClassID) => {
    'use strict';
    try {
      if (
        document.body &&
        typeof document.body.getComponentVersion === 'function'
      ) {
        const version = document.body.getComponentVersion(
          `{${componentClassID}}`,
          'ComponentID',
        );
        return version !== null ? version : false;
      }
      return false;
    } catch {
      return false;
    }
  };

  const htIEComponents = {
    '5A8D6EE0-3E18-11D0-821E-444553540000': 'InetConnectionWiz',
    '5945C046-LE7D-LLDL-BC44-00C04FD912BE': 'MSNMessengerSrv',
    '3AF36230-A269-11D1-B5BF-0000F8051515': 'OfflineBrwPack',
    '44BBA840-CC51-11CF-AAFA-00AA00B6015C': 'OutlookExpress',
    'DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21': 'QuickTimeCheck',
    '89820200-ECBD-11CF-8B85-00AA005B4340': 'WinDesktopUpdateNT',
    '6BF52A52-394A-11D3-B153-00C04F79FAA6': 'WinMediaPlayer',
    '22D6F312-B0F6-11D0-94AB-0080C74C7E95': 'WinMediaPlayerTrad',
  };

  let strTemp = '';
  let bolFirst = true;

  try {
    if (navigator.plugins && navigator.plugins.length > 0) {
      for (let i = 0; i < navigator.plugins.length; i++) {
        strTemp += (bolFirst ? '' : strSep) + navigator.plugins[i].name;
        bolFirst = false;
      }
    } else if (navigator.mimeTypes && navigator.mimeTypes.length > 0) {
      for (let i = 0; i < navigator.mimeTypes.length; i++) {
        strTemp +=
          (bolFirst ? '' : strSep) + navigator.mimeTypes[i].description;
        bolFirst = false;
      }
    } else if (document.body && document.body.addBehavior) {
      document.body.addBehavior('#default#clientCaps');
      for (const clsid in htIEComponents) {
        const version = activeXDetect(clsid);
        if (version) {
          strTemp +=
            (bolFirst ? '' : strSep) +
            htIEComponents[clsid] +
            strPair +
            version;
          bolFirst = false;
        }
      }
    }

    const modernAPIs = [
      ['MediaDevices', 'mediaDevices' in navigator],
      ['Bluetooth', 'bluetooth' in navigator],
      ['Clipboard', 'clipboard' in navigator],
      ['Geolocation', 'geolocation' in navigator],
      ['Web Share', 'share' in navigator],
      ['WebGPU', 'gpu' in navigator],
    ];

    for (const [name, supported] of modernAPIs) {
      if (supported) {
        strTemp += (bolFirst ? '' : strSep) + name;
        bolFirst = false;
      }
    }

    if (navigator.userAgentData && navigator.userAgentData.brands) {
      const brands = navigator.userAgentData.brands
        .map((b) => b.brand + strPair + b.version)
        .join(strSep);
      strTemp += `${bolFirst ? '' : strSep}UAData: ${brands}`;
      bolFirst = false;
    }

    if (strTemp === '') {
      strTemp = 'None';
    }

    return strTemp;
  } catch {
    return 'N/A';
  }
};

const fingerprint_silverlight = () => {
  'use strict';

  let objControl = null;
  let objPlugin = null;
  let strSilverlightVersion = null;
  let strOut = null;
  try {
    try {
      objControl = new ActiveXObject('AgControl.AgControl');
      if (objControl.IsVersionSupported('5.0')) {
        strSilverlightVersion = '5.x';
      } else if (objControl.IsVersionSupported('4.0')) {
        strSilverlightVersion = '4.x';
      } else if (objControl.IsVersionSupported('3.0')) {
        strSilverlightVersion = '3.x';
      } else if (objControl.IsVersionSupported('2.0')) {
        strSilverlightVersion = '2.x';
      } else {
        strSilverlightVersion = '1.x';
      }
      objControl = null;
    } catch {
      objPlugin = navigator.plugins['Silverlight Plug-In'];
      if (objPlugin) {
        if (objPlugin.description === '1.0.30226.2') {
          strSilverlightVersion = '2.x';
        } else {
          strSilverlightVersion = parseInt(objPlugin.description[0], 10);
        }
      } else {
        strSilverlightVersion = 'N/A';
      }
    }
    strOut = strSilverlightVersion;
    return strOut;
  } catch {
    return 'N/A';
  }
};

const fingerprint_timezone = () => {
  'use strict';
  let dtDate = null;
  let numOffset = null;
  let numGMTHours = null;
  let numOut = null;
  try {
    dtDate = new Date();
    numOffset = dtDate.getTimezoneOffset();
    numGMTHours = (numOffset / 60) * -1;
    numOut = numGMTHours;
    return String(numOut);
  } catch {
    return 'Error';
  }
};

const fingerprint_touch = () => {
  'use strict';
  let bolTouchEnabled = 'false';
  try {
    if (document.createEvent('TouchEvent')) {
      bolTouchEnabled = 'true';
    }
  } catch {
    bolTouchEnabled = 'false';
  }
  return bolTouchEnabled;
};

const fingerprint_truebrowser = () => {
  'use strict';
  let strBrowser = 'Unknown';
  const strUserAgent = navigator.userAgent.toLowerCase();

  const appName =
    typeof navigator.appName === 'string' ? navigator.appName : 'Netscape';
  if (
    document.all &&
    document.getElementById &&
    navigator.savePreferences &&
    strUserAgent.indexOf('netfront') < 0 &&
    appName !== 'Blazer'
  ) {
    strBrowser = 'Escape 5';
  } else if (navigator.vendor === 'KDE') {
    strBrowser = 'Konqueror';
  } else if (navigator.__ice_version) {
    strBrowser = 'ICEBrowser';
    // eslint-disable-next-line no-undef
  } else if (window.ScriptEngine && ScriptEngine().indexOf('InScript') + 1) {
    strBrowser = 'iCab';
  } else if (strUserAgent.indexOf('hotjava') + 1) {
    strBrowser = 'HotJava';
  } else if (document.layers) {
    strBrowser = 'Netscape 4';
  } else if (window.opera) {
    strBrowser = 'Opera (Presto)';
  } else if (appName.indexOf('webtv') + 1) {
    strBrowser = 'WebTV';
  } else if (strUserAgent.indexOf('netgem') + 1) {
    strBrowser = 'Netgem NetBox';
  } else if (strUserAgent.indexOf('opentv') + 1) {
    strBrowser = 'OpenTV';
  } else if (strUserAgent.indexOf('ipanel') + 1) {
    strBrowser = 'iPanel MicroBrowser';
  } else if (navigator.product && navigator.product.indexOf('Hv') === 0) {
    strBrowser = 'Tkhtml Hv3+';
  } else if (window.XDomainRequest && !window.atob) {
    strBrowser = 'Internet Explorer 8/9';
  } else if (window.attachEvent && !window.addEventListener) {
    strBrowser = 'Internet Explorer <=7';
  } else if (strUserAgent.indexOf('edg/') !== -1) {
    strBrowser = 'Microsoft Edge (Chromium)';
  } else if (
    strUserAgent.indexOf('edga') !== -1 ||
    strUserAgent.indexOf('edgios') !== -1
  ) {
    strBrowser = 'Microsoft Edge (Mobile)';
  } else if (strUserAgent.indexOf('opr/') !== -1) {
    strBrowser = 'Opera (Chromium)';
  } else if (strUserAgent.indexOf('vivaldi') !== -1) {
    strBrowser = 'Vivaldi';
  } else if (strUserAgent.indexOf('brave') !== -1) {
    strBrowser = 'Brave';
  } else if (strUserAgent.indexOf('yabrowser') !== -1) {
    strBrowser = 'Yandex Browser';
  } else if (strUserAgent.indexOf('duckduckgo') !== -1) {
    strBrowser = 'DuckDuckGo Browser';
  } else if (strUserAgent.indexOf('whale') !== -1) {
    strBrowser = 'Naver Whale';
  } else if (strUserAgent.indexOf('samsungbrowser') !== -1) {
    strBrowser = 'Samsung Internet';
  } else if (strUserAgent.indexOf('fxios') !== -1) {
    strBrowser = 'Firefox iOS';
  } else if (typeof InstallTrigger !== 'undefined') {
    strBrowser = 'Firefox';
  } else if (
    /safari/.test(strUserAgent) &&
    !/chrome|crios|android/.test(strUserAgent)
  ) {
    strBrowser = 'Safari';
  } else if (window.chrome) {
    strBrowser = 'Chrome';
  } else if (strUserAgent.indexOf('wv') !== -1) {
    strBrowser = 'Android WebView';
  } else if (/bot|crawl|spider/.test(strUserAgent)) {
    strBrowser = 'Bot / Crawler';
  }

  return strBrowser;
};

const fingerprint_useragent = () => {
  'use strict';
  const strSep = '|';
  let strTmp = null;
  let strUserAgent = null;
  let strOut = null;

  strUserAgent = navigator.userAgent.toLowerCase();
  strTmp = strUserAgent + strSep + navigator.platform;
  if (navigator.cpuClass) {
    strTmp += strSep + navigator.cpuClass;
  }
  if (navigator.browserLanguage) {
    strTmp += strSep + navigator.browserLanguage;
  } else {
    strTmp += strSep + navigator.language;
  }
  strOut = strTmp;
  return strOut;
};

class Doorman {
  constructor(options = {}) {
    this.nativeForEach = Array.prototype.forEach;
    this.nativeMap = Array.prototype.map;
    this.hasher = options.hasher;
    this.screen_resolution =
      options.screen_resolution !== undefined
        ? options.screen_resolution
        : true;
    this.screen_orientation =
      options.screen_orientation !== undefined
        ? options.screen_orientation
        : true;
    this.canvas = options.canvas !== undefined ? options.canvas : true;
    this.ie_activex =
      options.ie_activex !== undefined ? options.ie_activex : true;
  }

  each(obj, iterator, context) {
    if (obj === null) {
      return;
    }
    if (this.nativeForEach && obj.forEach === this.nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (let i = 0, l = obj.length; i < l; i++) {
        if (iterator.call(context, obj[i], i, obj) === null) {
          return;
        }
      }
    } else {
      for (const key in obj) {
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(key)) {
          if (iterator.call(context, obj[key], key, obj) === null) {
            return;
          }
        }
      }
    }
  }

  map(obj, iterator, context) {
    const results = [];
    if (obj == null) {
      return results;
    }
    if (this.nativeMap && obj.map === this.nativeMap) {
      return obj.map(iterator, context);
    }
    this.each(obj, (value, index, list) => {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  }

  get() {
    const keys = [];

    if (typeof fingerprint_browser !== 'undefined') {
      keys.push(fingerprint_browser());
    }
    if (typeof fingerprint_canvas !== 'undefined') {
      keys.push(fingerprint_canvas());
    }
    if (typeof fingerprint_connection !== 'undefined') {
      keys.push(fingerprint_connection());
    }
    if (typeof fingerprint_cookie !== 'undefined') {
      keys.push(fingerprint_cookie());
    }
    if (typeof fingerprint_display !== 'undefined') {
      keys.push(fingerprint_display());
    }
    if (typeof fingerprint_flash !== 'undefined') {
      keys.push(fingerprint_flash());
    }
    if (typeof fingerprint_fonts !== 'undefined') {
      keys.push(fingerprint_fonts());
    }
    if (typeof fingerprint_fontsmoothing !== 'undefined') {
      keys.push(fingerprint_fontsmoothing());
    }
    if (typeof fingerprint_formfields !== 'undefined') {
      keys.push(fingerprint_formfields());
    }
    if (typeof fingerprint_java !== 'undefined') {
      keys.push(fingerprint_java());
    }
    if (typeof fingerprint_language !== 'undefined') {
      keys.push(fingerprint_language());
    }
    if (typeof fingerprint_os !== 'undefined') {
      keys.push(fingerprint_os());
    }
    if (typeof fingerprint_plugins !== 'undefined') {
      keys.push(fingerprint_plugins());
    }
    if (typeof fingerprint_silverlight !== 'undefined') {
      keys.push(fingerprint_silverlight());
    }
    if (typeof fingerprint_timezone !== 'undefined') {
      keys.push(fingerprint_timezone());
    }
    if (typeof fingerprint_touch !== 'undefined') {
      keys.push(fingerprint_touch());
    }
    if (typeof fingerprint_truebrowser !== 'undefined') {
      keys.push(fingerprint_truebrowser());
    }
    if (typeof fingerprint_useragent !== 'undefined') {
      keys.push(fingerprint_useragent());
    }

    keys.push(navigator.userAgent);
    keys.push(navigator.language);
    keys.push(window.screen.colorDepth);

    if (this.screen_resolution) {
      const resolution = this.getScreenResolution();
      if (typeof resolution !== 'undefined') {
        keys.push(this.getScreenResolution().join('x'));
      }
    }

    keys.push(new Date().getTimezoneOffset());
    keys.push(this.hasSessionStorage());
    keys.push(this.hasLocalStorage());
    keys.push(!!window.indexedDB);

    if (document.body) {
      keys.push(typeof document.body.addBehavior);
    } else {
      keys.push(typeof undefined);
    }

    keys.push(typeof window.openDatabase);
    keys.push(navigator.cpuClass);
    keys.push(navigator.platform);
    keys.push(navigator.doNotTrack);
    keys.push(this.getPluginsString());

    if (this.canvas && this.isCanvasSupported()) {
      keys.push(this.getCanvasFingerprint());
    }

    if (this.hasher) {
      return this.hasher(keys.join('###'), 31);
    } else {
      return this.murmurhash3_32_gc(keys.join('###'), 31);
    }
  }

  murmurhash3_32_gc(key, seed) {
    let h1 = seed;
    let h1b, k1;
    const remainder = key.length & 3;
    const bytes = key.length - remainder;

    let i = 0;
    while (i < bytes) {
      k1 =
        (key.charCodeAt(i) & 0xff) |
        ((key.charCodeAt(++i) & 0xff) << 8) |
        ((key.charCodeAt(++i) & 0xff) << 16) |
        ((key.charCodeAt(++i) & 0xff) << 24);
      ++i;
      k1 = 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = 0xffffffff;
      h1 ^= k1;
      h1 = (h1 << 13) | (h1 >>> 19);
      h1b = h1 =
        (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
    }
    k1 = 0;
    switch (remainder) {
    case 3:
      k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
      // fall through
    case 2:
      k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
      // fall through
    case 1:
      k1 ^= key.charCodeAt(i) & 0xff;
      k1 = 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = 0xffffffff;
      h1 ^= k1;
      break;
    default:
      break;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = 0xffffffff;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
  }

  hasLocalStorage() {
    try {
      return !!window.localStorage;
    } catch {
      return true;
    }
  }

  hasSessionStorage() {
    try {
      return !!window.sessionStorage;
    } catch {
      return true;
    }
  }

  isCanvasSupported() {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }

  isIE() {
    const appName =
      typeof navigator.appName === 'string' ? navigator.appName : 'Netscape';
    if (appName === 'Microsoft Internet Explorer') {
      return true;
    } else if (appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }

  getPluginsString() {
    if (this.isIE() && this.ie_activex) {
      return this.getIEPluginsString();
    } else {
      return this.getRegularPluginsString();
    }
  }

  getRegularPluginsString() {
    return this.map(
      navigator.plugins,
      function (p) {
        const mimeTypes = this.map(p, (mt) => {
          return [mt.type, mt.suffixes].join('~');
        }).join(',');
        return [p.name, p.description, mimeTypes].join('::');
      },
      this,
    ).join(';');
  }

  getIEPluginsString() {
    if (window.ActiveXObject) {
      const names = [
        'ShockwaveFlash.ShockwaveFlash',
        'AcroPDF.PDF',
        'PDF.PdfCtrl',
        'QuickTime.QuickTime',
        'rmocx.RealPlayer G2 Control',
        'rmocx.RealPlayer G2 Control.1',
        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
        'RealPlayer',
        'SWCtl.SWCtl',
        'WMPlayer.OCX',
        'AgControl.AgControl',
        'Skype.Detection',
      ];
      return this.map(names, (name) => {
        try {
          new ActiveXObject(name);
          return name;
        } catch {
          return null;
        }
      }).join(';');
    } else {
      return '';
    }
  }

  getScreenResolution() {
    let resolution;
    if (this.screen_orientation) {
      resolution =
        window.screen.height > window.screen.width
          ? [window.screen.height, window.screen.width]
          : [window.screen.width, window.screen.height];
    } else {
      resolution = [window.screen.height, window.screen.width];
    }
    return resolution;
  }

  getCanvasFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const txt = (ctx.textBaseline = 'top');
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(txt, 4, 17);
    return canvas.toDataURL();
  }
}

const recognizedPerson = () => {
  const dm = new Doorman();
  return dm.get();
};

export {
  Doorman,
  recognizedPerson,
  fingerprint_browser,
  fingerprint_canvas,
  fingerprint_connection,
  fingerprint_cookie,
  fingerprint_display,
  fingerprint_flash,
  fingerprint_fonts,
  fingerprint_fontsmoothing,
  fingerprint_formfields,
  fingerprint_java,
  fingerprint_language,
  fingerprint_os,
  fingerprint_plugins,
  fingerprint_silverlight,
  fingerprint_timezone,
  fingerprint_touch,
  fingerprint_truebrowser,
  fingerprint_useragent,
};
