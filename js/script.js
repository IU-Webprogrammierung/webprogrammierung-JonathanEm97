// Wartet, bis das HTML-Dokument geladen ist
$(document).ready(function () {

    // Navigation laden
    $("nav").load("components/nav.component", function () {

        // Dieser Code läuft erst, wenn die Navigation fertig geladen wurde
        $(".burger-menu").click(function () {
            $(".nav-links").toggleClass("active");
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