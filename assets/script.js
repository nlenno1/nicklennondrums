console.log("js linked")

function highlightHoverEvent (hoverLocationId) {
    $(`${hoverLocationId} .timeline-item-top`).hover(
        function() {
            $(`${hoverLocationId} .timeline-item-expand`).slideDown().css("display", "block");;
        }, function() {
            $(`${hoverLocationId} .timeline-item-expand`).slideUp().css("display", "hidden");
        }
    );
}

highlightHoverEvent ("#highlight-1")
highlightHoverEvent ("#highlight-2")
highlightHoverEvent ("#highlight-3")
