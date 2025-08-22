const c = () => {
  let t = null, e = null, r = null, i = null;
  try {
    return t = navigator.userAgent.toLowerCase(), /msie (\d+\.\d+);/.test(t) ? (t.indexOf("trident/6") > -1 && (e = 10), t.indexOf("trident/5") > -1 && (e = 9), t.indexOf("trident/4") > -1 && (e = 8), r = `Internet Explorer ${e}`) : t.indexOf("trident/7") > -1 ? (e = 11, r = `Internet Explorer ${e}`) : /firefox[/\s](\d+\.\d+)/.test(t) ? r = `Firefox ${e}` : /opera[/\s](\d+\.\d+)/.test(t) ? r = `Opera ${e}` : /chrome[/\s](\d+\.\d+)/.test(t) ? r = `Chrome ${e}` : /version[/\s](\d+\.\d+)/.test(t) ? r = `Safari ${e}` : /rv[/\s](\d+\.\d+)/.test(t) ? r = `Mozilla ${e}` : /mozilla[/\s](\d+\.\d+)/.test(t) ? r = `Mozilla ${e}` : /binget[/\s](\d+\.\d+)/.test(t) ? r = `Library (BinGet) ${e}` : /curl[/\s](\d+\.\d+)/.test(t) ? r = `Library (cURL) ${e}` : /java[/\s](\d+\.\d+)/.test(t) ? r = `Library (Java) ${e}` : /libwww-perl[/\s](\d+\.\d+)/.test(t) ? r = `Library (libwww-perl) ${e}` : /microsoft url control -[\s](\d+\.\d+)/.test(t) ? r = `Library (Microsoft URL Control) ${e}` : /peach[/\s](\d+\.\d+)/.test(t) ? r = `Library (Peach) ${e}` : /php[/\s](\d+\.\d+)/.test(t) ? r = `Library (PHP) ${e}` : /pxyscand[/\s](\d+\.\d+)/.test(t) ? r = `Library (pxyscand) ${e}` : /pycurl[/\s](\d+\.\d+)/.test(t) ? r = `Library (PycURL) ${e}` : /python-urllib[/\s](\d+\.\d+)/.test(t) ? r = `Library (Python URLlib) ${e}` : /appengine-google/.test(t) ? r = `Cloud (Google AppEngine) ${e}` : r = "Unknown", i = r, i;
  } catch {
    return "N/A";
  }
}, p = () => {
  let t = null, e = null;
  const r = null;
  let i = null;
  try {
    return t = document.createElement("canvas"), e = t.getContext("2d", { willReadFrequently: !0 }), e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(r, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(r, 4, 17), i = t.toDataURL(), i;
  } catch {
    return "N/A";
  }
}, g = () => {
  let t = null;
  try {
    t = navigator.connection.type;
  } catch {
    t = "N/A";
  }
  return t;
}, h = () => {
  let t = !1;
  try {
    return t = !!navigator.cookieEnabled, typeof navigator.cookieEnabled > "u" && !t && (document.cookie = "testcookie", t = document.cookie.indexOf("testcookie") !== -1), String(t);
  } catch {
    return "Error";
  }
}, x = () => {
  let e = null, r = null, i = null;
  try {
    return e = window.screen, e && (r = e.colorDepth + "|" + e.width + "|" + e.height + "|" + e.availWidth + "|" + e.availHeight), i = r, i;
  } catch {
    return "N/A";
  }
}, m = () => {
  let t = null, e = null, r = null;
  try {
    return t = swfobject.getFlashPlayerVersion(), e = `${t.major}.${t.minor}.${t.release}`, e === "0.0.0" && (e = "N/A"), r = e, r;
  } catch {
    return "N/A";
  }
}, O = () => {
  let t = null, e = null, r = null, i = 0, n = null, s = null, l = null, a = null, o = null, d = null, u = null;
  try {
    t = "position: absolute; visibility: hidden; display: block !important", e = [
      "Abadi MT Condensed Light",
      "Adobe Fangsong Std",
      "Adobe Hebrew",
      "Adobe Ming Std",
      "Agency FB",
      "Aharoni",
      "Andalus",
      "Angsana New",
      "AngsanaUPC",
      "Aparajita",
      "Arab",
      "Arabic Transparent",
      "Arabic Typesetting",
      "Arial Baltic",
      "Arial Black",
      "Arial CE",
      "Arial CYR",
      "Arial Greek",
      "Arial TUR",
      "Arial",
      "Batang",
      "BatangChe",
      "Bauhaus 93",
      "Bell MT",
      "Bitstream Vera Serif",
      "Bodoni MT",
      "Bookman Old Style",
      "Braggadocio",
      "Broadway",
      "Browallia New",
      "BrowalliaUPC",
      "Calibri Light",
      "Calibri",
      "Californian FB",
      "Cambria Math",
      "Cambria",
      "Candara",
      "Castellar",
      "Casual",
      "Centaur",
      "Century Gothic",
      "Chalkduster",
      "Colonna MT",
      "Comic Sans MS",
      "Consolas",
      "Constantia",
      "Copperplate Gothic Light",
      "Corbel",
      "Cordia New",
      "CordiaUPC",
      "Courier New Baltic",
      "Courier New CE",
      "Courier New CYR",
      "Courier New Greek",
      "Courier New TUR",
      "Courier New",
      "DFKai-SB",
      "DaunPenh",
      "David",
      "DejaVu LGC Sans Mono",
      "Desdemona",
      "DilleniaUPC",
      "DokChampa",
      "Dotum",
      "DotumChe",
      "Ebrima",
      "Engravers MT",
      "Eras Bold ITC",
      "Estrangelo Edessa",
      "EucrosiaUPC",
      "Euphemia",
      "Eurostile",
      "FangSong",
      "Forte",
      "FrankRuehl",
      "Franklin Gothic Heavy",
      "Franklin Gothic Medium",
      "FreesiaUPC",
      "French Script MT",
      "Gabriola",
      "Gautami",
      "Georgia",
      "Gigi",
      "Gisha",
      "Goudy Old Style",
      "Gulim",
      "GulimChe",
      "GungSeo",
      "Gungsuh",
      "GungsuhChe",
      "Haettenschweiler",
      "Harrington",
      "Hei S",
      "HeiT",
      "Heisei Kaku Gothic",
      "Hiragino Sans GB",
      "Impact",
      "Informal Roman",
      "IrisUPC",
      "Iskoola Pota",
      "JasmineUPC",
      "KacstOne",
      "KaiTi",
      "Kalinga",
      "Kartika",
      "Khmer UI",
      "Kino MT",
      "KodchiangUPC",
      "Kokila",
      "Kozuka Gothic Pr6N",
      "Lao UI",
      "Latha",
      "Leelawadee",
      "Levenim MT",
      "LilyUPC",
      "Lohit Gujarati",
      "Loma",
      "Lucida Bright",
      "Lucida Console",
      "Lucida Fax",
      "Lucida Sans Unicode",
      "MS Gothic",
      "MS Mincho",
      "MS PGothic",
      "MS PMincho",
      "MS Reference Sans Serif",
      "MS UI Gothic",
      "MV Boli",
      "Magneto",
      "Malgun Gothic",
      "Mangal",
      "Marlett",
      "Matura MT Script Capitals",
      "Meiryo UI",
      "Meiryo",
      "Menlo",
      "Microsoft Himalaya",
      "Microsoft JhengHei",
      "Microsoft New Tai Lue",
      "Microsoft PhagsPa",
      "Microsoft Sans Serif",
      "Microsoft Tai Le",
      "Microsoft Uighur",
      "Microsoft YaHei",
      "Microsoft Yi Baiti",
      "MingLiU",
      "MingLiU-ExtB",
      "MingLiU_HKSCS",
      "MingLiU_HKSCS-ExtB",
      "Miriam Fixed",
      "Miriam",
      "Mongolian Baiti",
      "MoolBoran",
      "NSimSun",
      "Narkisim",
      "News Gothic MT",
      "Niagara Solid",
      "Nyala",
      "PMingLiU",
      "PMingLiU-ExtB",
      "Palace Script MT",
      "Palatino Linotype",
      "Papyrus",
      "Perpetua",
      "Plantagenet Cherokee",
      "Playbill",
      "Prelude Bold",
      "Prelude Condensed Bold",
      "Prelude Condensed Medium",
      "Prelude Medium",
      "PreludeCompressedWGL Black",
      "PreludeCompressedWGL Bold",
      "PreludeCompressedWGL Light",
      "PreludeCompressedWGL Medium",
      "PreludeCondensedWGL Black",
      "PreludeCondensedWGL Bold",
      "PreludeCondensedWGL Light",
      "PreludeCondensedWGL Medium",
      "PreludeWGL Black",
      "PreludeWGL Bold",
      "PreludeWGL Light",
      "PreludeWGL Medium",
      "Raavi",
      "Rachana",
      "Rockwell",
      "Rod",
      "Sakkal Majalla",
      "Sawasdee",
      "Script MT Bold",
      "Segoe Print",
      "Segoe Script",
      "Segoe UI Light",
      "Segoe UI Semibold",
      "Segoe UI Symbol",
      "Segoe UI",
      "Shonar Bangla",
      "Showcard Gothic",
      "Shruti",
      "SimHei",
      "SimSun",
      "SimSun-ExtB",
      "Simplified Arabic Fixed",
      "Simplified Arabic",
      "Snap ITC",
      "Sylfaen",
      "Symbol",
      "Tahoma",
      "Times New Roman Baltic",
      "Times New Roman CE",
      "Times New Roman CYR",
      "Times New Roman Greek",
      "Times New Roman TUR",
      "Times New Roman",
      "TlwgMono",
      "Traditional Arabic",
      "Trebuchet MS",
      "Tunga",
      "Tw Cen MT Condensed Extra Bold",
      "Ubuntu",
      "Umpush",
      "Univers",
      "Utopia",
      "Utsaah",
      "Vani",
      "Verdana",
      "Vijaya",
      "Vladimir Script",
      "Vrinda",
      "Webdings",
      "Wide Latin",
      "Wingdings"
    ], i = e.length, n = `<b style="display:inline !important; width:auto !important; font:normal 10px/1 'X',sans-serif !important">ww</b><b style="display:inline !important; width:auto !important; font:normal 10px/1 'X',monospace !important">ww</b>`, d = document.createDocumentFragment(), s = [];
    for (let f = 0; f < i; f = f + 1)
      r = e[f], a = document.createElement("div"), r = r.replace(/['"<>]/g, ""), a.innerHTML = n.replace(/X/g, r), a.style.cssText = t, d.appendChild(a), s.push(a);
    o = document.body, o.insertBefore(d, o.firstChild), u = [];
    for (let f = 0; f < i; f = f + 1)
      l = s[f].getElementsByTagName("b"), l[0].offsetWidth === l[1].offsetWidth && u.push(e[f]);
    for (let f = 0; f < i; f = f + 1)
      o.removeChild(s[f]);
    return u.join("|");
  } catch {
    return "N/A";
  }
}, w = () => {
  let t = null, e = null, r = null, i = 0, n = 0, s = null, l = null, a = null;
  if (typeof window.screen.fontSmoothingEnabled < "u")
    t = window.screen.fontSmoothingEnabled;
  else
    try {
      for (t = "false", e = document.createElement("canvas"), e.width = "35", e.height = "35", e.style.display = "none", document.body.appendChild(e), r = e.getContext("2d"), r.textBaseline = "top", r.font = "32px Arial", r.fillStyle = "black", r.strokeStyle = "black", r.fillText("O", 0, 0), n = 8; n <= 32; n = n + 1)
        for (i = 1; i <= 32; i = i + 1)
          s = r.getImageData(i, n, 1, 1).data, l = s[3], l !== 255 && l !== 0 && (t = "true");
      a = t;
    } catch {
      return "Unknown";
    }
  return a = t, a;
}, S = () => {
  let t = 0, e = 0, r = 0, i = 0, n = "";
  const s = [];
  let l = "", a = "", o = "";
  for (n = document.getElementsByTagName("form"), r = n.length, s.push(`url=${window.location.href}`), t = 0; t < r; t = t + 1)
    for (s.push(`FORM=${n[t].name}`), l = n[t].getElementsByTagName("input"), i = l.length, e = 0; e < i; e = e + 1)
      l[e].type !== "hidden" && s.push(`Input=${l[e].name}`);
  return a = s.join("|"), o = a, o;
}, y = () => {
  let t = null, e = null;
  try {
    return t = navigator.javaEnabled() ? "true" : "false", e = t, e;
  } catch {
    return "N/A";
  }
}, b = () => {
  let r = null, i = null, n = null, s = null, l = null, a = null;
  try {
    return i = typeof navigator.language, n = typeof navigator.browserLanguage, s = typeof navigator.systemLanguage, l = typeof navigator.userLanguage, i !== "undefined" ? r = `lang=${navigator.language}|` : n !== "undefined" ? r = `lang=${navigator.browserLanguage}|` : r = "lang=|", s !== "undefined" ? r += `syslang=${navigator.systemLanguage}|` : r += "syslang=|", l !== "undefined" ? r += `userlang=${navigator.userLanguage}` : r += "userlang=", a = r, a;
  } catch {
    return "N/A";
  }
}, C = () => {
  const e = () => {
    const i = navigator.userAgent.toLowerCase();
    let n = "Unknown OS";
    return i.indexOf("windows nt 10.0") !== -1 ? n = "Windows 10/11" : i.indexOf("windows nt 6.3") !== -1 ? n = "Windows 8.1" : i.indexOf("windows nt 6.2") !== -1 ? n = "Windows 8" : i.indexOf("windows nt 6.1") !== -1 ? n = "Windows 7" : i.indexOf("windows nt 6.0") !== -1 ? n = "Windows Vista" : i.indexOf("windows nt 5.2") !== -1 ? n = "Windows Server 2003/XP x64" : i.indexOf("windows nt 5.1") !== -1 ? n = "Windows XP" : i.indexOf("windows nt 5.01") !== -1 ? n = "Windows 2000, Service Pack 1 (SP1)" : i.indexOf("windows xp") !== -1 ? n = "Windows XP" : i.indexOf("windows 2000") !== -1 || i.indexOf("windows nt 5.0") !== -1 ? n = "Windows 2000" : i.indexOf("windows nt 4.0") !== -1 || i.indexOf("windows nt") !== -1 || i.indexOf("winnt4.0") !== -1 || i.indexOf("winnt") !== -1 ? n = "Windows NT 4.0" : i.indexOf("windows me") !== -1 || i.indexOf("win 9x 4.90") !== -1 ? n = "Windows ME" : i.indexOf("windows 98") !== -1 || i.indexOf("win98") !== -1 ? n = "Windows 98" : i.indexOf("windows 95") !== -1 || i.indexOf("windows_95") !== -1 || i.indexOf("win95") !== -1 ? n = "Windows 95" : i.indexOf("ce") !== -1 ? n = "Windows CE" : i.indexOf("win16") !== -1 ? n = "Windows 3.11" : i.indexOf("iemobile") !== -1 || i.indexOf("wm5 pie") !== -1 ? n = "Windows Mobile" : i.indexOf("windows") !== -1 ? n = "Windows (Unknown Version)" : i.indexOf("mac os x beta") !== -1 ? n = "Mac OSX Beta (Kodiak)" : i.indexOf("mac os x 10_15") !== -1 ? n = "macOS Catalina" : i.indexOf("mac os x 10_14") !== -1 ? n = "macOS Mojave" : i.indexOf("mac os x 10_13") !== -1 ? n = "macOS High Sierra" : i.indexOf("mac os x 10_12") !== -1 ? n = "macOS Sierra" : i.indexOf("mac os x 10_11") !== -1 ? n = "OS X El Capitan" : i.indexOf("mac os x 10_10") !== -1 ? n = "OS X Yosemite" : i.indexOf("mac os x 10_9") !== -1 ? n = "OS X Mavericks" : i.indexOf("mac os x 10_8") !== -1 ? n = "OS X Mountain Lion" : i.indexOf("mac os x 10_7") !== -1 ? n = "OS X Lion" : i.indexOf("mac os x 10_6") !== -1 ? n = "OS X Snow Leopard" : i.indexOf("mac os x 10_5") !== -1 ? n = "OS X Leopard" : i.indexOf("mac os x 10_4") !== -1 ? n = "OS X Tiger" : i.indexOf("mac os x 10_3") !== -1 ? n = "OS X Panther" : i.indexOf("mac os x 10_2") !== -1 ? n = "OS X Jaguar" : i.indexOf("mac os x 10_1") !== -1 ? n = "OS X Puma" : i.indexOf("mac os x 10_0") !== -1 ? n = "OS X Cheetah" : i.indexOf("mac os x 11") !== -1 ? n = "macOS Big Sur" : i.indexOf("mac os x 12") !== -1 ? n = "macOS Monterey" : i.indexOf("mac os x 13") !== -1 ? n = "macOS Ventura" : i.indexOf("mac os x 14") !== -1 ? n = "macOS Sonoma" : i.indexOf("mac os x 15") !== -1 ? n = "macOS Sequoia" : i.indexOf("mac_68000") !== -1 || i.indexOf("68k") !== -1 ? n = "Mac OS Classic (68000)" : i.indexOf("mac_powerpc") !== -1 || i.indexOf("ppc mac") !== -1 ? n = "Mac OS Classic (PowerPC)" : i.indexOf("macintosh") !== -1 ? n = "Mac OS Classic" : i.indexOf("ipod") !== -1 ? n = "iOS (iTouch)" : i.indexOf("iphone") !== -1 ? n = "iOS (iPhone)" : i.indexOf("ipad") !== -1 || i.indexOf("macintosh") !== -1 && "ontouchend" in document ? n = "iPadOS" : i.indexOf("googletv") !== -1 ? n = "Android (GoogleTV)" : i.indexOf("xoom") !== -1 ? n = "Android (Xoom)" : i.indexOf("htc_flyer") !== -1 ? n = "Android (HTC Flyer)" : i.indexOf("android 14") !== -1 ? n = "Android 14 (Upside Down Cake)" : i.indexOf("android 13") !== -1 ? n = "Android 13 (Tiramisu)" : i.indexOf("android") !== -1 ? n = "Android" : i.indexOf("symbian") !== -1 ? n = "Symbian" : i.indexOf("series60") !== -1 ? n = "Symbian (Series 60)" : i.indexOf("series70") !== -1 ? n = "Symbian (Series 70)" : i.indexOf("series90") !== -1 ? n = "Symbian (Series 90)" : i.indexOf("x11") !== -1 || i.indexOf("nix") !== -1 ? n = "UNIX" : i.indexOf("ubuntu") !== -1 ? n = "Ubuntu Linux" : i.indexOf("debian") !== -1 ? n = "Debian Linux" : i.indexOf("fedora") !== -1 ? n = "Fedora Linux" : i.indexOf("red hat") !== -1 || i.indexOf("redhat") !== -1 ? n = "Red Hat Linux" : i.indexOf("centos") !== -1 ? n = "CentOS Linux" : i.indexOf("opensuse") !== -1 ? n = "openSUSE Linux" : i.indexOf("suse") !== -1 ? n = "SUSE Linux" : i.indexOf("arch") !== -1 ? n = "Arch Linux" : i.indexOf("gentoo") !== -1 ? n = "Gentoo Linux" : i.indexOf("linux mint") !== -1 ? n = "Linux Mint" : i.indexOf("elementary os") !== -1 ? n = "elementary OS" : i.indexOf("kali") !== -1 ? n = "Kali Linux" : i.indexOf("manjaro") !== -1 ? n = "Manjaro Linux" : i.indexOf("raspbian") !== -1 ? n = "Raspbian (Raspberry Pi OS)" : i.indexOf("linux") !== -1 ? n = "Linux (Unknown Distro)" : i.indexOf("qnx") !== -1 ? n = "QNX" : i.indexOf("os/2") !== -1 ? n = "IBM OS/2" : i.indexOf("beos") !== -1 ? n = "BeOS" : i.indexOf("blackberry95") !== -1 ? n = "Blackberry (Storm 1/2)" : i.indexOf("blackberry97") !== -1 ? n = "Blackberry (Bold)" : i.indexOf("blackberry96") !== -1 ? n = "Blackberry (Tour)" : i.indexOf("blackberry89") !== -1 ? n = "Blackberry (Curve 2)" : i.indexOf("blackberry98") !== -1 ? n = "Blackberry (Torch)" : i.indexOf("playbook") !== -1 ? n = "Blackberry (Playbook)" : i.indexOf("wnd.rim") !== -1 ? n = "Blackberry (IE/FF Emulator)" : i.indexOf("blackberry") !== -1 ? n = "Blackberry" : i.indexOf("palm") !== -1 ? n = "Palm OS" : i.indexOf("webos") !== -1 ? n = "WebOS" : i.indexOf("hpwos") !== -1 ? n = "WebOS (HP)" : i.indexOf("blazer") !== -1 ? n = "Palm OS (Blazer)" : i.indexOf("xiino") !== -1 ? n = "Palm OS (Xiino)" : i.indexOf("kindle") !== -1 ? n = "Kindle" : i.indexOf("wii") !== -1 ? n = "Nintendo (Wii)" : i.indexOf("nintendo ds") !== -1 ? n = "Nintendo (DS)" : i.indexOf("webtv") !== -1 ? n = "MSN TV (WebTV)" : i.indexOf("inferno") !== -1 ? n = "Inferno" : i.indexOf("cros") !== -1 ? n = "ChromeOS" : i.indexOf("fuchsia") !== -1 ? n = "Fuchsia" : i.indexOf("playstation 5") !== -1 ? n = "Sony PlayStation 5" : i.indexOf("playstation 4") !== -1 ? n = "Sony PlayStation 4" : i.indexOf("playstation 3") !== -1 ? n = "Sony (Playstation Console)" : i.indexOf("playstation portable") !== -1 ? n = "Sony (Playstation Portable)" : i.indexOf("xbox") !== -1 && (n = "Xbox"), n;
  }, r = () => {
    const i = navigator.platform.toLowerCase();
    let n = "Unknown";
    return i.indexOf("x64") !== -1 || i.indexOf("wow64") !== -1 || i.indexOf("win64") !== -1 ? n = "64 bits" : i.indexOf("win32") !== -1 || i.indexOf("x32") !== -1 ? n = "32 bits" : i.indexOf("x86") !== -1 ? n = "32 bits*" : i.indexOf("ppc") !== -1 || i.indexOf("alpha") !== -1 || i.indexOf("68k") !== -1 ? n = "64 bits" : (i.indexOf("iphone") !== -1 || i.indexOf("android") !== -1) && (n = "32 bits"), n;
  };
  try {
    const i = e(), n = r();
    return i + "|" + n;
  } catch {
    return "N/A";
  }
}, v = () => {
  const r = (l) => {
    try {
      if (document.body && typeof document.body.getComponentVersion == "function") {
        const a = document.body.getComponentVersion(
          `{${l}}`,
          "ComponentID"
        );
        return a !== null ? a : !1;
      }
      return !1;
    } catch {
      return !1;
    }
  }, i = {
    "5A8D6EE0-3E18-11D0-821E-444553540000": "InetConnectionWiz",
    "5945C046-LE7D-LLDL-BC44-00C04FD912BE": "MSNMessengerSrv",
    "3AF36230-A269-11D1-B5BF-0000F8051515": "OfflineBrwPack",
    "44BBA840-CC51-11CF-AAFA-00AA00B6015C": "OutlookExpress",
    "DE4AF3B0-F4D4-11D3-B41A-0050DA2E6C21": "QuickTimeCheck",
    "89820200-ECBD-11CF-8B85-00AA005B4340": "WinDesktopUpdateNT",
    "6BF52A52-394A-11D3-B153-00C04F79FAA6": "WinMediaPlayer",
    "22D6F312-B0F6-11D0-94AB-0080C74C7E95": "WinMediaPlayerTrad"
  };
  let n = "", s = !0;
  try {
    if (navigator.plugins && navigator.plugins.length > 0)
      for (let a = 0; a < navigator.plugins.length; a++)
        n += (s ? "" : "|") + navigator.plugins[a].name, s = !1;
    else if (navigator.mimeTypes && navigator.mimeTypes.length > 0)
      for (let a = 0; a < navigator.mimeTypes.length; a++)
        n += (s ? "" : "|") + navigator.mimeTypes[a].description, s = !1;
    else if (document.body && document.body.addBehavior) {
      document.body.addBehavior("#default#clientCaps");
      for (const a in i) {
        const o = r(a);
        o && (n += (s ? "" : "|") + i[a] + ":" + o, s = !1);
      }
    }
    const l = [
      ["MediaDevices", "mediaDevices" in navigator],
      ["Bluetooth", "bluetooth" in navigator],
      ["Clipboard", "clipboard" in navigator],
      ["Geolocation", "geolocation" in navigator],
      ["Web Share", "share" in navigator],
      ["WebGPU", "gpu" in navigator]
    ];
    for (const [a, o] of l)
      o && (n += (s ? "" : "|") + a, s = !1);
    if (navigator.userAgentData && navigator.userAgentData.brands) {
      const a = navigator.userAgentData.brands.map((o) => o.brand + ":" + o.version).join("|");
      n += `${s ? "" : "|"}UAData: ${a}`, s = !1;
    }
    return n === "" && (n = "None"), n;
  } catch {
    return "N/A";
  }
}, P = () => {
  let t = null, e = null, r = null, i = null;
  try {
    try {
      t = new ActiveXObject("AgControl.AgControl"), t.IsVersionSupported("5.0") ? r = "5.x" : t.IsVersionSupported("4.0") ? r = "4.x" : t.IsVersionSupported("3.0") ? r = "3.x" : t.IsVersionSupported("2.0") ? r = "2.x" : r = "1.x", t = null;
    } catch {
      e = navigator.plugins["Silverlight Plug-In"], e ? e.description === "1.0.30226.2" ? r = "2.x" : r = parseInt(e.description[0], 10) : r = "N/A";
    }
    return i = r, i;
  } catch {
    return "N/A";
  }
}, B = () => {
  let t = null, e = null, r = null, i = null;
  try {
    return t = /* @__PURE__ */ new Date(), e = t.getTimezoneOffset(), r = e / 60 * -1, i = r, String(i);
  } catch {
    return "Error";
  }
}, A = () => {
  let t = "false";
  try {
    document.createEvent("TouchEvent") && (t = "true");
  } catch {
    t = "false";
  }
  return t;
}, L = () => {
  let t = "Unknown";
  const e = navigator.userAgent.toLowerCase(), r = typeof navigator.appName == "string" ? navigator.appName : "Netscape";
  return document.all && document.getElementById && navigator.savePreferences && e.indexOf("netfront") < 0 && r !== "Blazer" ? t = "Escape 5" : navigator.vendor === "KDE" ? t = "Konqueror" : navigator.__ice_version ? t = "ICEBrowser" : window.ScriptEngine && ScriptEngine().indexOf("InScript") + 1 ? t = "iCab" : e.indexOf("hotjava") + 1 ? t = "HotJava" : document.layers ? t = "Netscape 4" : window.opera ? t = "Opera (Presto)" : r.indexOf("webtv") + 1 ? t = "WebTV" : e.indexOf("netgem") + 1 ? t = "Netgem NetBox" : e.indexOf("opentv") + 1 ? t = "OpenTV" : e.indexOf("ipanel") + 1 ? t = "iPanel MicroBrowser" : navigator.product && navigator.product.indexOf("Hv") === 0 ? t = "Tkhtml Hv3+" : window.XDomainRequest && !window.atob ? t = "Internet Explorer 8/9" : window.attachEvent && !window.addEventListener ? t = "Internet Explorer <=7" : e.indexOf("edg/") !== -1 ? t = "Microsoft Edge (Chromium)" : e.indexOf("edga") !== -1 || e.indexOf("edgios") !== -1 ? t = "Microsoft Edge (Mobile)" : e.indexOf("opr/") !== -1 ? t = "Opera (Chromium)" : e.indexOf("vivaldi") !== -1 ? t = "Vivaldi" : e.indexOf("brave") !== -1 ? t = "Brave" : e.indexOf("yabrowser") !== -1 ? t = "Yandex Browser" : e.indexOf("duckduckgo") !== -1 ? t = "DuckDuckGo Browser" : e.indexOf("whale") !== -1 ? t = "Naver Whale" : e.indexOf("samsungbrowser") !== -1 ? t = "Samsung Internet" : e.indexOf("fxios") !== -1 ? t = "Firefox iOS" : typeof InstallTrigger < "u" ? t = "Firefox" : /safari/.test(e) && !/chrome|crios|android/.test(e) ? t = "Safari" : window.chrome ? t = "Chrome" : e.indexOf("wv") !== -1 ? t = "Android WebView" : /bot|crawl|spider/.test(e) && (t = "Bot / Crawler"), t;
}, M = () => {
  let e = null, r = null, i = null;
  return r = navigator.userAgent.toLowerCase(), e = r + "|" + navigator.platform, navigator.cpuClass && (e += "|" + navigator.cpuClass), navigator.browserLanguage ? e += "|" + navigator.browserLanguage : e += "|" + navigator.language, i = e, i;
};
class T {
  constructor(e = {}) {
    this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map, this.hasher = e.hasher, this.screen_resolution = e.screen_resolution !== void 0 ? e.screen_resolution : !0, this.screen_orientation = e.screen_orientation !== void 0 ? e.screen_orientation : !0, this.canvas = e.canvas !== void 0 ? e.canvas : !0, this.ie_activex = e.ie_activex !== void 0 ? e.ie_activex : !0;
  }
  each(e, r, i) {
    if (e !== null) {
      if (this.nativeForEach && e.forEach === this.nativeForEach)
        e.forEach(r, i);
      else if (e.length === +e.length) {
        for (let n = 0, s = e.length; n < s; n++)
          if (r.call(i, e[n], n, e) === null)
            return;
      } else
        for (const n in e)
          if (e.hasOwnProperty(n) && r.call(i, e[n], n, e) === null)
            return;
    }
  }
  map(e, r, i) {
    const n = [];
    return e == null ? n : this.nativeMap && e.map === this.nativeMap ? e.map(r, i) : (this.each(e, (s, l, a) => {
      n[n.length] = r.call(i, s, l, a);
    }), n);
  }
  get() {
    const e = [];
    return typeof c < "u" && e.push(c()), typeof p < "u" && e.push(p()), typeof g < "u" && e.push(g()), typeof h < "u" && e.push(h()), typeof x < "u" && e.push(x()), typeof m < "u" && e.push(m()), typeof O < "u" && e.push(O()), typeof w < "u" && e.push(w()), typeof S < "u" && e.push(S()), typeof y < "u" && e.push(y()), typeof b < "u" && e.push(b()), typeof C < "u" && e.push(C()), typeof v < "u" && e.push(v()), typeof P < "u" && e.push(P()), typeof B < "u" && e.push(B()), typeof A < "u" && e.push(A()), typeof L < "u" && e.push(L()), typeof M < "u" && e.push(M()), e.push(navigator.userAgent), e.push(navigator.language), e.push(window.screen.colorDepth), this.screen_resolution && typeof this.getScreenResolution() < "u" && e.push(this.getScreenResolution().join("x")), e.push((/* @__PURE__ */ new Date()).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push(!!window.indexedDB), document.body ? e.push(typeof document.body.addBehavior) : e.push("undefined"), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31);
  }
  murmurhash3_32_gc(e, r) {
    let i = r, n, s;
    const l = e.length & 3, a = e.length - l;
    let o = 0;
    for (; o < a; )
      s = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, ++o, s = 4294967295, s = s << 15 | s >>> 17, s = 4294967295, i ^= s, i = i << 13 | i >>> 19, n = i = (n & 65535) + 27492 + (((n >>> 16) + 58964 & 65535) << 16);
    switch (s = 0, l) {
      case 3:
        s ^= (e.charCodeAt(o + 2) & 255) << 16;
      // fall through
      case 2:
        s ^= (e.charCodeAt(o + 1) & 255) << 8;
      // fall through
      case 1:
        s ^= e.charCodeAt(o) & 255, s = 4294967295, s = s << 15 | s >>> 17, s = 4294967295, i ^= s;
        break;
    }
    return i ^= e.length, i ^= i >>> 16, i = 4294967295, i ^= i >>> 13, i = 4294967295, i ^= i >>> 16, i >>> 0;
  }
  hasLocalStorage() {
    try {
      return !!window.localStorage;
    } catch {
      return !0;
    }
  }
  hasSessionStorage() {
    try {
      return !!window.sessionStorage;
    } catch {
      return !0;
    }
  }
  isCanvasSupported() {
    const e = document.createElement("canvas");
    return !!(e.getContext && e.getContext("2d"));
  }
  isIE() {
    const e = typeof navigator.appName == "string" ? navigator.appName : "Netscape";
    return e === "Microsoft Internet Explorer" ? !0 : !!(e === "Netscape" && /Trident/.test(navigator.userAgent));
  }
  getPluginsString() {
    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString();
  }
  getRegularPluginsString() {
    return this.map(
      navigator.plugins,
      function(e) {
        const r = this.map(e, (i) => [i.type, i.suffixes].join("~")).join(",");
        return [e.name, e.description, r].join("::");
      },
      this
    ).join(";");
  }
  getIEPluginsString() {
    if (window.ActiveXObject) {
      const e = [
        "ShockwaveFlash.ShockwaveFlash",
        "AcroPDF.PDF",
        "PDF.PdfCtrl",
        "QuickTime.QuickTime",
        "rmocx.RealPlayer G2 Control",
        "rmocx.RealPlayer G2 Control.1",
        "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
        "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
        "RealPlayer",
        "SWCtl.SWCtl",
        "WMPlayer.OCX",
        "AgControl.AgControl",
        "Skype.Detection"
      ];
      return this.map(e, (r) => {
        try {
          return new ActiveXObject(r), r;
        } catch {
          return null;
        }
      }).join(";");
    } else
      return "";
  }
  getScreenResolution() {
    let e;
    return this.screen_orientation ? e = window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height] : e = [window.screen.height, window.screen.width], e;
  }
  getCanvasFingerprint() {
    const e = document.createElement("canvas"), r = e.getContext("2d", { willReadFrequently: !0 }), i = r.textBaseline = "top";
    return r.font = "14px 'Arial'", r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.fillText(i, 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.7)", r.fillText(i, 4, 17), e.toDataURL();
  }
}
const E = () => new T().get();
export {
  T as Doorman,
  c as fingerprint_browser,
  p as fingerprint_canvas,
  g as fingerprint_connection,
  h as fingerprint_cookie,
  x as fingerprint_display,
  m as fingerprint_flash,
  O as fingerprint_fonts,
  w as fingerprint_fontsmoothing,
  S as fingerprint_formfields,
  y as fingerprint_java,
  b as fingerprint_language,
  C as fingerprint_os,
  v as fingerprint_plugins,
  P as fingerprint_silverlight,
  B as fingerprint_timezone,
  A as fingerprint_touch,
  L as fingerprint_truebrowser,
  M as fingerprint_useragent,
  E as recognizedPerson
};
