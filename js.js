
 function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
    </script>
    <script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'></script>
    <script>
      kofiWidgetOverlay.draw('omarelassal', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Get Me Kofi',
        'floating-chat.donateButton.background-color': '#00bfa5',
        'floating-chat.donateButton.text-color': '#fff'
      });
