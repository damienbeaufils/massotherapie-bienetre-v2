<template>
  <div>
    <!-- Load Facebook SDK for JavaScript -->
    <div id="fb-root"></div>

    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/fr_CA/sdk.js#xfbml=1&version=v10.0"
      nonce="H6bD0TGG"
    ></script>

    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/fr_CA/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    </script>

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="110291327818426"
    ></div>
  </div>
</template>
