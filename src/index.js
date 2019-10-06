window.addEventListener('DOMContentLoaded', function() {
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
        '<a class="flag"><img src="https://www.countryflags.io/' +
          country +
          '/flat/24.png" data-lang="' +
          lang +
          '"></a>'
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
    adjustFixedPosition($('#topofthebookingpage')[0], 86, 0);
    adjustFixedPosition($('#b24scroller-fullcontainer')[0], 116, 29);
  }

  // Change the layout of room boxes
});