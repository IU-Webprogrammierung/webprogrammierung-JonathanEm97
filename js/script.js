// Navigation laden (wird in <nav> eingefügt)
$("nav").load("components/nav.component", function () {

    // Funktion zum Öffnen/Schließen des Menüs
    function toggleMenu() {

        // Overlay ein-/ausblenden
        $(".nav-overlay").toggleClass("active");

        // Prüfen, ob Menü geöffnet ist
        const isOpen = $(".nav-overlay").hasClass("active");

        // Accessibility: Zustand für Screenreader setzen
        $(".burger-menu").attr("aria-expanded", isOpen);

        // Burger-Button ausblenden, wenn Menü offen ist
        $(".burger-menu").toggleClass("hidden", isOpen);

        // Scrollen im Hintergrund verhindern
        $("body").toggleClass("menu-open", isOpen);
    }

    // Klick auf Burger → Menü öffnen
    $(".burger-menu").on("click", function () {
        toggleMenu();
    });

    // Klick auf X → Menü schließen
    $(".overlay-close").on("click", function () {
        toggleMenu();
    });

    // Optional: Menü schließen, wenn ein Link geklickt wird (Mobile UX)
    $(".nav-links a").on("click", function () {
        toggleMenu();
    });

    // Aktuelle Seite im Menü markieren (Accessibility)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    $(".nav-links a").each(function () {
        if ($(this).attr("href") === currentPage) {
            $(this).attr("aria-current", "page");
        }
    });

});


// Footer laden (wird in <footer> eingefügt)
$("footer").load("components/footer.component");