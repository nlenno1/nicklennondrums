$(window).ready (function() {
    console.log("js linked");

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
    })

    highlightHoverEvent ("#highlight-1");
    highlightHoverEvent ("#highlight-2");
    highlightHoverEvent ("#highlight-3");
});

function highlightHoverEvent (hoverLocationId) {
    $(`${hoverLocationId} .timeline-item-top`).hover(
        function() {
            $(`${hoverLocationId} .timeline-item-expand`).slideDown().css("display", "block");;
        }, function() {
            $(`${hoverLocationId} .timeline-item-expand`).slideUp().css("display", "hidden");
        }
    );
}