// Wartet, bis das HTML-Dokument geladen ist
$(document).ready(function () {

    // Navigation laden
    $("nav").load("components/nav.component", function () {

        function toggleMenu() {
            $(".nav-links").toggleClass("active");

            const isOpen = $(".nav-links").hasClass("active");
            $(".burger-menu").attr("aria-expanded", isOpen);

            // Burger ausblenden wenn Overlay offen ist
            $(".burger-menu").toggleClass("hidden", isOpen);
        }

        // Burger-Menü öffnen
        $(".burger-menu").click(function () {
            toggleMenu();
        });

        // Overlay-Menü schließen
        $(".overlay-close").click(function () {
            toggleMenu();
        });

        // Aktuelle Seite im Menü markieren
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        $(".nav-links a").each(function () {
            if ($(this).attr("href") === currentPage) {
                $(this).attr("aria-current", "page");
            }
        });

    });

    // Footer laden
    $("footer").load("components/footer.component");

});