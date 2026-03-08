// Wartet, bis das HTML-Dokument geladen ist
$(document).ready(function () {

    // Navigation laden
    $("nav").load("components/nav.component", function () {

        // Dieser Code läuft erst, wenn die Navigation fertig geladen wurde
        $(".burger-menu").click(function () {
            $(".nav-links").toggleClass("active");
               // Accessibility: aria-expanded aktualisieren
            const isOpen = $(".nav-links").hasClass("active");
            $(this).attr("aria-expanded", isOpen);
        });

        // Aktuelle Seite im Menü markieren
        const currentPage = window.location.pathname.split("/").pop();

        $(".nav-links a").each(function () {
            if ($(this).attr("href") === currentPage) {
                $(this).attr("aria-current", "page");
            }
        });

    });

    // Footer laden
    $("footer").load("components/footer.component");

});