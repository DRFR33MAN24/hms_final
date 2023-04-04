 "use strict";
$(".download_button").on("click", "#download", function () {
    "use strict";
    var pdf = new jsPDF('p', 'pt', 'letter');
    // define custom font
// pdf.addFileToVFS("ConsolasHex.ttf",

//     pdf.addFont("ConsolasHex.ttf", "ConsolasHex", "Bold");
// pdf.setFont("ConsolasHex","Bold");
// pdf.setFontSize(12);
    pdf.addHTML($('#prescription'), function () {
         "use strict";
        pdf.save('prescription_id_'+id_pres+'.pdf');
    });
});

 window.print();
