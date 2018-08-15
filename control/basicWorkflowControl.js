function context() {
    canvas = document.getElementById("arrow");
    if (canvas.getContext) {
    ctx = canvas.getContext("2d");
        return ctx;
    }
    return null;
}

function clear() {
    var canvas = context();
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
}

function draw() {
    var arrow_size = 1;
    // Get items
    var first = $('.workflow_step:nth-child(1)');
    var second = $('.workflow_step:nth-child(3)');
    var third = $('.workflow_step:nth-child(5)');
    var fifth = $('.workflow_step:nth-child(9)');

    var canvas = context();
    canvas.canvas.width = $(window).width();
    canvas.canvas.height = $(window).height();

    canvas.strokeStyle = "white";
    canvas.lineWidth = 4;
    // arrow_head for first item
    canvas.beginPath();
    canvas.moveTo(first.offset().left + first.outerWidth() / 2, first.offset().top + 95);
    canvas.lineTo(first.offset().left + first.outerWidth() / 2 - arrow_size, first.offset().top + 95 + arrow_size);
    canvas.lineTo(first.offset().left + first.outerWidth() / 2 + arrow_size, first.offset().top + 95 + arrow_size);
    canvas.closePath();
    canvas.stroke();
    // line connects from the second item to the first item
    canvas.beginPath();
    canvas.moveTo(first.offset().left + first.outerWidth() / 2, first.offset().top + 95);
    canvas.lineTo(first.offset().left + first.outerWidth() / 2, first.offset().top + 140);
    canvas.lineTo(second.offset().left + second.outerWidth() / 2, first.offset().top + 140);
    canvas.moveTo(second.offset().left + second.outerWidth() / 2, first.offset().top + 95);
    canvas.lineTo(second.offset().left + second.outerWidth() / 2, first.offset().top + 140 + canvas.lineWidth / 2);
    canvas.closePath();
    canvas.stroke();


    // arrow_head for third item
    canvas.beginPath();
    canvas.moveTo(third.offset().left + 10, third.offset().top + 95);
    canvas.lineTo(third.offset().left + 10 - arrow_size, third.offset().top + 95 + arrow_size);
    canvas.lineTo(third.offset().left + 10 + arrow_size, third.offset().top + 95 + arrow_size);
    canvas.closePath();
    canvas.stroke();
    // line connects from the third item to the third item
    canvas.beginPath();
    canvas.moveTo(third.offset().left + 10, third.offset().top + 95);
    canvas.lineTo(third.offset().left + 10, third.offset().top + 140);
    canvas.lineTo(third.offset().left + third.outerWidth() - 10, third.offset().top + 140);
    canvas.moveTo(third.offset().left + third.outerWidth() - 10, third.offset().top + 95);
    canvas.lineTo(third.offset().left + third.outerWidth() - 10, third.offset().top + 140 + canvas.lineWidth / 2);
    canvas.closePath();
    canvas.stroke();
}

$(function() {
    draw();
    $(window).resize(function() {
        clear();
        draw();
    });
});