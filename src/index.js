// Google analytics
var mi_version = '7.9.0',
  mi_track_user = !1,
  mi_no_track_reason =
    'Note: MonsterInsights does not track you as a logged-in site administrator to prevent site owners from accidentally skewing their own Google Analytics data.\nIf you are testing Google Analytics code, please do so either logged out or in the private browsing/incognito mode of your web browser.',
  disableStr = 'ga-disable-UA-103560454-1';
function __gaTrackerIsOptedOut() {
  return document.cookie.indexOf(disableStr + '=true') > -1;
}
function __gaTrackerOptout() {
  (document.cookie =
    disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/'),
    (window[disableStr] = !0);
}
__gaTrackerIsOptedOut() && (window[disableStr] = !0),
  mi_track_user
    ? (!(function(e, t, o, n, r, a, i) {
        (e.GoogleAnalyticsObject = r),
          (e[r] =
            e[r] ||
            function() {
              (e[r].q = e[r].q || []).push(arguments);
            }),
          (e[r].l = 1 * new Date()),
          (a = t.createElement(o)),
          (i = t.getElementsByTagName(o)[0]),
          (a.async = 1),
          (a.src = '//www.google-analytics.com/analytics.js'),
          i.parentNode.insertBefore(a, i);
      })(window, document, 'script', 0, '__gaTracker'),
      __gaTracker('create', 'UA-103560454-1', 'auto'),
      __gaTracker('set', 'forceSSL', !0),
      __gaTracker('send', 'pageview'))
    : (console.log(
        'Note: MonsterInsights does not track you as a logged-in site administrator to prevent site owners from accidentally skewing their own Google Analytics data.\nIf you are testing Google Analytics code, please do so either logged out or in the private browsing/incognito mode of your web browser.'
      ),
      (function() {
        var e = function() {
            return null;
          },
          t = function() {
            return null;
          },
          o = t.prototype;
        (o.get = e), (o.set = e), (o.send = e);
        var n = function() {
          var e = arguments.length;
          if (0 !== e) {
            var t = arguments[e - 1];
            if (
              'object' == typeof t &&
              null !== t &&
              'function' == typeof t.hitCallback
            )
              try {
                t.hitCallback();
              } catch (e) {}
            else
              console.log(
                'Not running function __gaTracker(' +
                  arguments[0] +
                  ' ....) because you are not being tracked. ' +
                  mi_no_track_reason
              );
          }
        };
        (n.create = function() {
          return new t();
        }),
          (n.getByName = function() {
            return null;
          }),
          (n.getAll = function() {
            return [];
          }),
          (n.remove = e),
          (window.__gaTracker = n);
      })());

window.addEventListener('DOMContentLoaded', function() {
  function serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    return str.join('&');
  }

  function deserialize(pairs) {
    pairs = pairs || window.location.search.substring(1).split('&');

    var obj = {};
    var pair;
    var i;

    for (i in pairs) {
      if (pairs[i] === '') continue;

      pair = pairs[i].split('=');
      obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return obj;
  }

  var isMultiroom = deserialize().multiroom == '1';
  if (isMultiroom) {
    document.body.classList.add('multiroom');
  }

  var isIframe = (function() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  })();
  if (isIframe) {
    document.body.classList.add('iframe');
  }

  var header = null;
  var footer = null;

  function generateHeader() {
    var header = {
      ref: document.createElement('header'),
      init: function() {
        header.ref.setAttribute('id', 'main-header');

        header.ref.innerHTML =
          '<header class="header"><div class="container"><div class="logo"><a href="https://hotelsmokovec.eu/"> <img src="https://hotelsmokovec.eu/wp-content/uploads/2019/05/greenwood_logo_web.png"> <span class="tagline"></span> </a></div><div class="header_right"><div class="mobile_nav"><a href="#" style="display: none;">Menu</a></div><nav id="nav"><ul><li id="menu-item-33" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="https://hotelsmokovec.eu/ubytovanie/">UBYTOVANIE</a></li><li id="menu-item-36" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-36 hover"><a href="https://hotelsmokovec.eu/cennik/">CENNÍK</a></li><li id="menu-item-172" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-172"><a href="#">REZERVÁCIA</a><ul class="sub-menu"><li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173"><a href="https://hotelsmokovec.eu/online-rezervacia/">ON-LINE REZERVÁCIA</a></li><li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-174"><a href="https://hotelsmokovec.eu/rezervacia/">NEZÁVÄZNÁ REZERVÁCIA</a></li></ul></li><li id="menu-item-225" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-225"><a href="#">Región</a><ul class="sub-menu"><li id="menu-item-41" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-41"><a href="https://hotelsmokovec.eu/lokalita/">Lokalita</a></li><li id="menu-item-42" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-42"><a href="https://hotelsmokovec.eu/doprava/">Doprava</a></li></ul></li><li id="menu-item-380" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-380"><a href="https://hotelsmokovec.eu/gallery/">Fotogaléria</a></li><li id="menu-item-5" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5"><a href="https://hotelsmokovec.eu/kontakt/">KONTAKT</a></li><li id="menu-item-226" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a href="https://hotelsmokovec.eu/blog/">Blog</a></li></ul></nav></div></div></header>';

        $(document.body).prepend(header.ref);
      }
    };

    return header;
  }

  function generateFooter() {
    var footer = {
      ref: document.createElement('footer'),
      init: function() {
        footer.ref.setAttribute('id', 'main-footer');

        footer.ref.innerHTML =
          '<footer id="footer"><div class="container"><div class="resp-wrap"><div class="cols-4 first"><h5> <span>Menu</span></h5><ul><li id="menu-item-230" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-230"><a href="https://hotelsmokovec.eu/lokalita/">Lokalita</a></li><li id="menu-item-229" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-229"><a href="https://hotelsmokovec.eu/doprava/">Doprava</a></li><li id="menu-item-232" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-232"><a href="https://hotelsmokovec.eu/ubytovanie/">Ubytovanie</a></li><li id="menu-item-228" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-170 current_page_item menu-item-228"><a href="https://hotelsmokovec.eu/online-rezervacia/" aria-current="page">On-line rezervácia</a></li><li id="menu-item-231" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-231"><a href="https://hotelsmokovec.eu/cennik/">Cenník</a></li><li id="menu-item-233" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-233"><a href="https://hotelsmokovec.eu/kontakt/">Kontakt</a></li></ul></div><div class="cols-4 second"><h5>Aktuálne <span>správy</span></h5><div class="post-grid "><div class="left-postthumb"><a href="https://hotelsmokovec.eu/guest-review-awards-2018/" title="Guest Review Awards 2018"><img src="https://hotelsmokovec.eu/wp-content/uploads/2019/01/No1_jpg-150x150.jpg" class="attachment-65x65 size-65x65 wp-post-image" alt="" width="65" height="65"></a></div> <a href="https://hotelsmokovec.eu/guest-review-awards-2018/" title="Guest Review Awards 2018"><h6>Guest Review Awards 2018</h6></a><p>Milí priatelia a hostia! V roku 2018 sme urobili kus</p></div><div class="post-grid last-cols"><div class="left-postthumb"><a href="https://hotelsmokovec.eu/skibusy-vysoke-tatry-2017-2018/" title="Skibusy SKI&amp;AQUA BUS v sezóne 2017/2018"><img src="https://hotelsmokovec.eu/wp-content/uploads/2018/01/SKI-AQUA-BUS-150x150.jpg" class="attachment-65x65 size-65x65 wp-post-image" alt="SKIBUS, Vysoke Tatry, SKI &amp; AQUA BUS" width="65" height="65"></a></div> <a href="https://hotelsmokovec.eu/skibusy-vysoke-tatry-2017-2018/" title="Skibusy SKI&amp;AQUA BUS v sezóne 2017/2018"><h6>Skibusy SKI&amp;AQUA BUS v sezóne 2017/2018</h6></a><p>V zimnej sezóne 2017/2018 je pre návštevníkov a lyžiarov pripravená</p></div></div><div class="cols-4 third"><h5>Nájdete nás <span>tu</span></h5><div class="social-icons"> <a href="https://www.facebook.com/hotelsmokovec" target="_blank" class="fa fa-facebook fa-2x" title="facebook"></a> <a href="#" target="_blank" class="fa fa-twitter fa-2x" title="twitter"></a> <a href="#" target="_blank" class="fa fa-youtube fa-2x" title="youtube"></a> <a href="#" target="_blank" class="fa fa-google-plus fa-2x" title="google-plus"></a> <a href="#" target="_blank" class="fa fa-instagram fa-2x" title="instagram"></a> <a href="#" target="_blank" class="fa fa-skype fa-2x" title="skype"></a></div></div><div class="cols-4 fourth"><h5>Kontakt <span>Info</span></h5><p>Nový Smokovec 41, 062 01<br> Vysoké Tatry, SLOVENSKÁ REPUBLIKA<br> Phone: +421 52 2601047<br> Fax: +421 52 2601047</p><p> Email: <a href="mailto:recepcia(a)hotelsmokovec.eu">recepcia(a)hotelsmokovec.eu</a><br> Website: <a href="https://www.hotelsmokovec.eu">www.hotelsmokovec.eu</a></p></div></div></div></footer><div id="copyright"><div class="container"><div class="resp-wrap"><div class="copy-right">Copyright © 2017 Smart Business Group, s.r.o. - All Rights Reserved.</div><div class="design-by"><a href="https://letenky.hotelsmokovec.eu/" target="_blank">Najlacnejšie letenky</a> | <a href="https://hotelsmokovec.eu/cookie/" target="_blank">Cookie</a></div></div></div></div>';

        document.body.appendChild(footer.ref);
      }
    };

    return footer;
  }

  if (!isIframe) {
    header = generateHeader();
    footer = generateFooter();

    header.init();
    footer.init();
  }

  // Generate flags
  function generateFlags() {
    $('.b24languagedropdown ul.dropdown-menu li').each(function() {
      var lang = $(this)
        .attr('class')
        .replace('lang-', '');

      var country = (function() {
        switch (lang) {
          case 'en':
            return 'gb';
          case 'cs':
            return 'cz';
          case 'he':
            return 'il';
          case 'ja':
            return 'jp';
          case 'zh':
            return 'cn';
          default:
            return lang;
        }
      })();

      $('.b24languagedropdown').append(
        $(
          '<a href="#' +
            lang +
            '" class="flag flag-24"><img src="https://www.countryflags.io/' +
            country +
            '/flat/24.png" data-lang="' +
            lang +
            '"></a>' +
            '<a href="#' +
            lang +
            '" class="flag flag-16"><img src="https://www.countryflags.io/' +
            country +
            '/flat/16.png" data-lang="' +
            lang +
            '"></a>'
        ).on('click', function(e) {
          e.preventDefault();

          var params = deserialize();
          params.lang = lang;

          window.open(
            location.origin + location.pathname + '?' + serialize(params),
            '_self'
          );
        })
      );
    });
  }

  generateFlags();

  // Adjust fixed positions of sticky elements
  function adjustFixedPosition(el, initial, min) {
    if (el == null) return;

    function adjust() {
      var y = document.body.getBoundingClientRect().y;
      el.style.top = Math.max(min, initial + y) + 'px';

      window.requestAnimationFrame(adjust);
    }

    adjust();
  }

  if (!isIframe) {
    adjustFixedPosition($('#topofthebookingpage')[0], 83, 0);
    adjustFixedPosition($('#b24scroller-fullcontainer')[0], 83 + 35, 35);
  }

  // Turn multiroom into select
  $('#multiplecheckbox')
    .append(
      $(
        isMultiroom
          ? '<select><option value="1" selected>Áno</option><option value="0">Nie</option></select>'
          : '<select><option value="0" selected>Nie</option><option value="1">Áno</option></select>'
      )
        .on('change', function() {
          var params = deserialize();
          params.multiroom = $(this).val();

          window.open(
            location.origin + location.pathname + '?' + serialize(params),
            '_self'
          );
        })
        .attr('class', 'form-control')
    )
    .css({ width: '100%' });

  // Change the layout of room boxes
  $('.b24panel-room').each(function() {
    $('.at_offersummary', this).prepend(
      [
        '<h4 class="room-heading">',
        $('.at_roomnametext', this).text(),
        '</h4>'
      ].join('')
    );
  });
});
