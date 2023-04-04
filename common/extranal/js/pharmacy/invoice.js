"use strict";
$(document).ready(function () {
    "use strict";
    $(".flashmessage").delay(3000).fadeOut(100);
});


$('#download').click(function () {
    "use strict";
    // var pdf = new jsPDF();
    // pdf.fromHtml($('#invoice'), function () {
    //     // pdf.internal.scaleFactor = 10.75;
    //     pdf.save('invoice_id_<?php echo $payment->id; ?>.pdf');
    // });
    CreatePDFfromHTML();
});

//Create PDf from HTML...
function CreatePDFfromHTML() {
    var HTML_Width = $("#invoice").width();
    var HTML_Height = $("#invoice").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#invoice")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("Your_PDF_Name.pdf");
        $("invoice").hide();
    });
}



