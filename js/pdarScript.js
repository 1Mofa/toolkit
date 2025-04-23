$(document).ready(function () {
    var max_fields = 10;
    var add_button = $(".add_form_field1");
    var x = 1;

    // Reload person data from localStorage
    var savedX = localStorage.getItem('personCount');
    while (x < savedX) {
        x++;
        addPerson();
    }

    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            localStorage.setItem('personCount', x);
            addPerson();
        }
    });

    var remove_button = $(".remove_form_field1");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (x > 1) {
            $('input[name="pName"]').last().remove();
            $('input[name="pSex"]').last().remove();
            $('input[name="pMoniker"]').last().remove();
            x--;
            localStorage.setItem('personCount', x);
        }
    });

    var max_fields2 = 10;
    var add_button2 = $(".add_form_field2");
    var y = 1;

    // Reload officer data from localStorage
    var savedY = localStorage.getItem('officerCount');
    while (y < savedY && y < max_fields2) {
        y++;
        addOfficer();
    }

    $(add_button2).click(function (e) {
        e.preventDefault();
        if (y < max_fields2) {
            y++;
            addOfficer();
            localStorage.setItem('officerCount', y);
        }
    });

    var remove_button = $(".remove_form_field2");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (y > 1) {
            $('input[name="oName"]').last().remove();
            $('input[name="oSerial"]').last().remove();
            $('input[name="oCallsign"]').last().remove();
            $('input[name="oDivision"]').last().remove();
            y--;
            localStorage.setItem('officerCount', y);
        }
    });
});


function addPerson() {
    var newName = $('input[name="pName"]:first').clone().val('').insertAfter('input[name="pName"]:last');
    var newSex = $('input[name="pSex"]:first').clone().val('').insertAfter('input[name="pSex"]:last');
    var newMoniker = $('input[name="pMoniker"]:first').clone().val('').insertAfter('input[name="pMoniker"]:last');
    newName.garlic();
    newSex.garlic();
    newMoniker.garlic();
}

function addOfficer() {
    var newName = $('input[name="oName"]:first').clone().val('').insertAfter('input[name="oName"]:last');
    var newSerial = $('input[name="oSerial"]:first').clone().val('').insertAfter('input[name="oSerial"]:last');
    var newCallsign = $('input[name="oCallsign"]:first').clone().val('').insertAfter('input[name="oCallsign"]:last');
    var newDivision = $('input[name="oDivision"]:first').clone().val('').insertAfter('input[name="oDivision"]:last');
    newName.garlic();
    newSerial.garlic();
    newCallsign.garlic();
    newDivision.garlic();
}

function generate() {
    output = document.forms["pdar"].getElementsByTagName("input");

    // input fields
    var aName = output.aName.value || "&nbsp;";
    var aSex = output.aSex.value || "&nbsp;";
    var aHair = output.aHair.value || "&nbsp;";
    var aEye = output.aEye.value || "&nbsp;";
    var aResidence = output.aResidence.value || "&nbsp;";
    var aAge = output.aAge.value || "&nbsp;";
    var aHeight = output.aHeight.value || "&nbsp;";
    var aDescent = output.aDescent.value || "&nbsp;";
    var aClothing = output.aClothing.value || "&nbsp;";
    var aOddities = output.aOddities.value || "&nbsp;";
    var aMoniker = output.aMoniker.value || "&nbsp;";
    var aGang = output.aGang.value || "&nbsp;";

    var pName = [];
    var pSex = [];
    var pMoniker = [];

    var date = output.date.value || "&nbsp;";
    var time = output.time.value || "&nbsp;";
    var loc = output.loc.value || "&nbsp;";

    var oName = [];
    var oSerial = [];
    var oCallsign = [];
    var oDivision = [];

    var source = $("#source").val() || "&nbsp;";
    var investigation = $("#investigation").val() || "&nbsp;";
    var arrest = $("#arrest").val() || "&nbsp;";
    var footage = $("#footage").val() || "&nbsp;";
    var booking = $("#booking").val() || "&nbsp;";
    var evidence = $("#evidence").val() || "&nbsp;";
    var court = $("#court").val() || "&nbsp;";
    var additional = $("#additional").val() || "&nbsp;";

    // make arrays of all the multi-value items
    for (i = 0; i < output.length; i++) {
        // console.log(output[i].name);
        if (output[i].name === "pName") {
            pName.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "pSex") {
            pSex.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "pMoniker") {
            pMoniker.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "oName") {
            oName.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "oSerial") {
            oSerial.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "oCallsign") {
            oCallsign.push(output[i].value || "&nbsp;");
        } else if (output[i].name === "oDivision") {
            oDivision.push(output[i].value || "&nbsp;");
        }
    }

    var pNames = pName.join("<br>");
    var pSexs = pSex.join("<br>");
    var pMonikers = pMoniker.join("<br>");
    var oNames = oName.join("<br>");
    var oSerials = oSerial.join("<br>");
    var oCallsigns = oCallsign.join("<br>");
    var oDivisions = oDivision.join("<br>");

    var outputCode = "<style>.page-style {background-color: white;color: black;font-family: Arial, sans-serif;width: 100%;max-width: 210mm;}.page-style h1 {border: 1px solid #000;border-bottom: 0;text-align: center;font-size: 16px;font-weight: bold;padding: 12px 0 10px 0;margin: 0}.page-style table {width: 100%;border-collapse: collapse;color: black;}.page-style th,.page-style td {padding: 2px 5px;}.page-style th {font-weight: bold;font-size: 10px;border: 1px solid black;border-bottom: none;text-transform: uppercase;}.page-style td {font-size: 14px;line-height: 1.5;border: 1px solid black;border-top: none;color: black;}</style><div class='page-style'><h1>LOS SANTOS POLICE DEPARTMENT<br>ARREST REPORT</h1><table><tr><th colspan='2' width='48%'>ARRESTEE NAME (FIRST, MIDDLE, LAST)</th><th width='12%'>SEX (M/F/O)</th><th width='20%'>HAIR</th><th width='20%'>EYES</th></tr><tr><td colspan='2'>" + aName + "</td><td>" + aSex + "</td><td>" + aHair + "</td><td>" + aEye + "</td></tr><tr><th colspan='2'>RESIDENCE</th><th>AGE</th><th>HEIGHT</th><th>DESCENT</th></tr><tr><td colspan='2'>" + aResidence + "</td><td>" + aAge + "</td><td>" + aHeight + "</td><td>" + aDescent + "</td></tr><tr><th colspan='3'>CLOTHING</th><th colspan='2'>PERSONAL ODDITIES</th></tr><tr><td colspan='3'>" + aClothing + "</td><td colspan='2'>" + aOddities + "</td></tr><tr><th colspan='3'>MONIKER / ALIAS</th><th colspan='2'>GANG / CLUB</th></tr><tr><td colspan='3'>" + aMoniker + "</td><td colspan='2'>" + aGang + "</td></tr><tr style='border-top: 2px solid black;'><th colspan='5'>PERSONS WITH SUBJECT</th></tr><tr><th colspan='2'>NAME (FIRST, MIDDLE, LAST)</th><th>SEX (M/F/O)</th><th colspan='2'>GANG / MONIKER</th></tr><tr><td colspan='2'>" + pNames + "</td><td>" + pSexs + "</td><td colspan='2'>" + pMonikers + "</td></tr><tr style='border-top: 2px solid black;'><th width='36%'>DATE</th><th width='12%'>TIME</th><th colspan='3' width='52%'>LOCATION</th></tr><tr><td>" + date + "</td><td>" + time + "</td><td colspan='3'>" + loc + "</td></tr><tr><th>OFFICER</th><th>SERIAL NO.</th><th width='12%'>CALLSIGN</th><th colspan='2'>DIV / DETAIL</th></tr><tr><td>" + oNames + "</td><td>" + oSerials + "</td><td>" + oCallsigns + "</td><td colspan='2'>" + oDivisions + "</td></tr><tr style='border-top: 2px solid black;'><th colspan='5'>SOURCE OF ACTIVITY</th></tr><tr><td colspan='5'>" + source + "</td></tr><tr><th colspan='5'>INVESTIGATION</th></tr><tr><td colspan='5'>" + investigation + "</td></tr><tr><th colspan='5'>ARREST</th></tr><tr><td colspan='5'>" + arrest + "</td></tr><tr><th colspan='5'>PHOTOGRAPHS, VIDEOS, IN-CAR VIDEO (DICV), AND DIGITAL IMAGING</th></tr><tr><td colspan='5'>" + footage + "</td></tr><tr><th colspan='5'>BOOKING</th></tr><tr><td colspan='5'>" + booking + "</td></tr><tr><th colspan='5'>PHYSICAL EVIDENCE</th></tr><tr><td colspan='5'>" + evidence + "</td></tr><tr><th colspan='5'>COURT INFORMATION</th></tr><tr><td colspan='5'>" + court + "</td></tr><tr><th colspan='5'>ADDITIONAL</th></tr><tr><td colspan='5'>" + additional + "</td></tr></table></div>";

    localStorage.setItem('pdarOutputCode', outputCode);

    var title = "Generated Report";
    // put output in modal
    var mymodal = $('#myModal');
    mymodal.find('.modal-title').text(title);
    mymodal.find('.modal-body').text(outputCode);
    mymodal.modal('show');

    var copyButton = $('#copy');
    copyButton.onclick = function () { copyToClipboard() };
}

function copyToClipboard() {
    var copyTextArea = $("#modalBody")
    copyTextArea.select();
    document.execCommand("copy");

    // show tooltip
    var copyButton = $('#copy');
    copyButton.attr('data-original-title', 'Copied!').tooltip({ trigger: 'manual' }).tooltip('show');
    // destroy tooltip after 2 seconds
    setTimeout(function () {
        copyButton.data('bs.tooltip')?.tip.classList.remove('show');
    }, 2000);
}
