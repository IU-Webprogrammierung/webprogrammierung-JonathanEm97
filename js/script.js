// Wartet, bis das gesamte HTML-Dokument geladen ist,
// bevor der JavaScript-Code ausgeführt wird
$(document).ready(function () {

  // Lädt den Inhalt der Datei "footer.component"
  // automatisch in das <footer>-Element der Seite.
  // Dadurch muss der Footer nicht auf jeder HTML-Seite einzeln stehen.
  $("footer").load("components/footer.component");

  // Event-Listener für den Burger-Button
  // Wenn der Button geklickt wird...
  $(".burger-menu").click(function () {

    // ...wird bei dem Element mit der Klasse "nav-links"
    // die CSS-Klasse "active" ein- oder ausgeschaltet.
    // Dadurch öffnet bzw. schließt sich das Overlay-Menü.
    $(".nav-links").toggleClass("active");

  });

});