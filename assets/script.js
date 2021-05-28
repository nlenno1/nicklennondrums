
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

function clickHighlightEvent (LocationId) {
    $(`${LocationId} .timeline-item-top`).click(function() {
        if ($(`${LocationId} .timeline-item-expand`).css("display") == "block") {
            $(`${LocationId} .timeline-item-expand`).slideUp().css("display", "hidden");
        }
    });
}



highlightHoverEvent ("#highlight-1")
highlightHoverEvent ("#highlight-2")
highlightHoverEvent ("#highlight-3")

clickHighlightEvent ("#highlight-1")
clickHighlightEvent ("#highlight-2")
clickHighlightEvent ("#highlight-3")