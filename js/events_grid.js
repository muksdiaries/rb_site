var baseUrl = "https://raw.githubusercontent.com/sm650rb/events/main/";

$(document).ready(function () {
    if ($('#events-grid')) {
        $.getJSON(baseUrl + 'events.json', function (data) {
            var events = data.events;
            var past = events.past;
            $("#loading").empty();
            $.each(past, function (i, evt) {
                var evtDiv = $("<div/>", {
                    class: 'col-lg-4 col-md-6',
                    style: 'margin-bottom: 30px'
                }).append(
                    $("<a/>", {
                        href: "http://www.google.com",
                        target: "_blank"
                    }).append($("<img/>", {
                        class: 'img-fluid',
                        src: evt.cover_picture,
                        alt: evt.name
                    }),
                        $("<div/>", {
                            class: 'details'
                        }).append(
                            $("<h3/>", {
                                class: 'card-title',
                                text: evt.name
                            }),
                            $("<p/>", {
                                class: 'card-text',
                                text: evt.date
                            })
                        )
                    ));
                $("#events-grid").append(evtDiv);
            });
        });
    } else if ($('#event-detail')) {
        $.getJSON(baseUrl + 'events.json', function (data) {
            var events = data.events;
            var past = events.past;
            $("#loading").empty();
        });
    }
});