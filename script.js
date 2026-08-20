/* =========================
   SHOW DETAILS MODAL
========================= */

function showDetails(name, position) {

    const modal = document.getElementById("detailsModal");
    const modalName = document.getElementById("modalName");
    const modalPosition = document.getElementById("modalPosition");

    modalName.textContent = name;
    modalPosition.textContent = position;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================
   CLOSE DETAILS MODAL
========================= */

function closeDetails() {

    const modal = document.getElementById("detailsModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE THE CONTENT
========================= */

window.addEventListener("click", function (event) {

    const modal = document.getElementById("detailsModal");

    if (event.target === modal) {
        closeDetails();
    }

});


/* =========================
   CLOSE MODAL WITH ESC KEY
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeDetails();
    }

});


/* =========================
   SEARCH FACULTY / STAFF
========================= */

function searchOfficials() {

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const officials =
        document.querySelectorAll(".official-person");

    const noResults =
        document.getElementById("noResults");

    let visibleCount = 0;

    officials.forEach(function (official) {

        const name =
            official.querySelector("h3")
                .textContent
                .toLowerCase();

        const position =
            official.querySelector(".position")
                .textContent
                .toLowerCase();

        const description =
            official.querySelector("p")
                .textContent
                .toLowerCase();

        const searchableText =
            name + " " +
            position + " " +
            description;

        if (searchableText.includes(searchValue)) {

            official.style.display = "";

            visibleCount++;

        } else {

            official.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* =========================
   BACK TO TOP BUTTON
========================= */

const topButton =
    document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


/* =========================
   SCROLL TO TOP
========================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   NAVIGATION ACTIVE EFFECT
========================= */

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});