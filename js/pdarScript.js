$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $("#container1");
    var add_button = $(".add_form_field1");
    var x = 1;

    // Reload person data from localStorage
    var savedX = localStorage.getItem('personCount');
    while (x < savedX) {
        x++;
        addPerson(wrapper, x);
    }

    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            localStorage.setItem('personCount', x);
            addPerson(wrapper, x);
        }
    });

    var remove_button = $(".remove_form_field1");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (x > 1) {
            $(wrapper).find('tr').last().prev().addBack().remove();
            x--;
            localStorage.setItem('personCount', x);
        }
    });

    var max_fields2 = 10;
    var wrapper2 = $("#container2");
    var add_button2 = $(".add_form_field2");
    var y = 1;

    // Reload officer data from localStorage
    var savedY = localStorage.getItem('officerCount');
    while (y < savedY && y < max_fields2) {
        y++;
        addOfficer(wrapper2, y);
    }

    $(add_button2).click(function (e) {
        e.preventDefault();
        if (y < max_fields2) {
            y++;
            addOfficer(wrapper2, y);
            localStorage.setItem('officerCount', y);
        }
    });

    var remove_button = $(".remove_form_field2");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (y > 1) {
            $(wrapper2).find('tr').last().prev().addBack().remove();
            y--;
            localStorage.setItem('officerCount', y);
        }
    });
});

function addPerson(wrapper, x) {
    x = x - 1;
    $(wrapper).append('<tr><th colspan="2">NAME (FIRST, MIDDLE, LAST)</th><th>SEX (M/F/O)</th><th colspan="2">GANG / MONIKER</th></tr><tr><td colspan="2"><input type="text" name="pName[' + x + ']" placeholder="FIRST LAST"></td><td><input type="text" name="pSex[' + x + ']" placeholder="M/F/O"></td><td colspan="2"><input type="text" name="pMoniker[' + x + ']" placeholder="MONIKER IF KNOWN"></td></tr>')
    $('input[name]').garlic();
}

function addOfficer(wrapper2, y) {
    y = y - 1;
    $(wrapper2).append('<tr><th>OFFICER</th><th>SERIAL NO.</th><th width="12%">CALLSIGN</th><th colspan="2">DIV / DETAIL</th></tr><tr><td><input type="text" name="oName[' + y + ']" placeholder="FIRST LAST"></td><td><input type="text" name="oSerial[' + y + ']" placeholder="SERIAL"></td><td><input type="text" name="oCallsign[' + y + ']" placeholder="CALLSIGN"></td><td colspan="2"><input type="text" name="oDivision[' + y + ']" placeholder="DIVISION"></td></tr>');
    $('input[name]').garlic();
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

    var source = ($("#source").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var investigation = ($("#investigation").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var arrest = ($("#arrest").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var footage = ($("#footage").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var booking = ($("#booking").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var evidence = ($("#evidence").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var court = ($("#court").val() || "&nbsp;").replace(/\r\n|\r|\n/g, "<br>");
    var additional = $("#additional").val().replace(/\r\n|\r|\n/g, "<br>") || "&nbsp;";


    // make arrays of all the multi-value items
    for (i = 0; i < output.length; i++) {
        // console.log(output[i].name);
        if (output[i].name.startsWith("pName[")) {
            pName.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("pSex[")) {
            pSex.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("pMoniker[")) {
            pMoniker.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("oName[")) {
            oName.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("oSerial[")) {
            oSerial.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("oCallsign[")) {
            oCallsign.push(output[i].value || "&nbsp;");
        } else if (output[i].name.startsWith("oDivision[")) {
            oDivision.push(output[i].value || "&nbsp;");
        }
    }

    // format the arrays into their final submit format
    var persons = [];
    for (i = 0; i < pName.length; i++) {
        persons[i] = '<tr><th colspan="2">NAME (FIRST, MIDDLE, LAST)</th><th>SEX (M/F/O)</th><th colspan="2">GANG / MONIKER</th></tr><tr><td colspan="2">' + pName[i] + '</td><td>' + pSex[i] + '</td><td colspan="2">' + pMoniker[i] + '</td></tr>';
    }

    var officers = [];
    for (i = 0; i < oName.length; i++) {
        officers[i] = '<tr><th>OFFICER</th><th>SERIAL NO.</th><th width="12%">CALLSIGN</th><th colspan="2">DIV / DETAIL</th></tr><tr><td>' + oName[i] + '</td><td>' + oSerial[i] + '</td><td>' + oCallsign[i] + '</td><td colspan="2">' + oDivision[i] + '</td></tr>';
    }

    persons = persons.join("");
    officers = officers.join("");

    var outputCode = '<style>.report-style {background-color: white;color: black;font-family: Arial, sans-serif;width: 100%;max-width: 210mm;}.report-style h1 {border: 1px solid #000;border-bottom: 0;text-align: center;font-size: 16px;font-weight: bold;padding: 12px 0 10px 0;margin: 0}.report-style table {width: 100%;border-collapse: collapse;color: black;}.report-style th,.report-style td {padding: 2px 5px;}.report-style th {font-weight: bold;font-size: 10px;border: 1px solid black;border-bottom: none;text-transform: uppercase;}.report-style td {font-size: 14px;line-height: 1.5;border: 1px solid black;border-top: none;color: black;}</style><div class="report-style"><h1>LOS SANTOS POLICE DEPARTMENT<br>ARREST REPORT</h1><table><tr><th colspan="2" width="48%">ARRESTEE NAME (FIRST, MIDDLE, LAST)</th><th width="12%">SEX (M/F/O)</th><th width="20%">HAIR</th><th width="20%">EYES</th></tr><tr><td colspan="2">' + aName + '</td><td>' + aSex + '</td><td>' + aHair + '</td><td>' + aEye + '</td></tr><tr><th colspan="2">RESIDENCE</th><th>AGE</th><th>HEIGHT</th><th>DESCENT</th></tr><tr><td colspan="2">' + aResidence + '</td><td>' + aAge + '</td><td>' + aHeight + '</td><td>' + aDescent + '</td></tr><tr><th colspan="3">CLOTHING</th><th colspan="2">PERSONAL ODDITIES</th></tr><tr><td colspan="3">' + aClothing + '</td><td colspan="2">' + aOddities + '</td></tr><tr><th colspan="3">MONIKER / ALIAS</th><th colspan="2">GANG / CLUB</th></tr><tr><td colspan="3">' + aMoniker + '</td><td colspan="2">' + aGang + '</td></tr><tr style="border-top: 2px solid black;"><th colspan="5">PERSONS WITH SUBJECT</th></tr>' + persons + '<tr style="border-top: 2px solid black;"><th width="36%">DATE</th><th width="12%">TIME</th><th colspan="3" width="52%">LOCATION</th></tr><tr><td>' + date + '</td><td>' + time + '</td><td colspan="3">' + loc + '</td></tr>' + officers + '<tr style="border-top: 2px solid black;"><th colspan="5">SOURCE OF ACTIVITY</th></tr><tr><td colspan="5">' + source + '</td></tr><tr><th colspan="5">INVESTIGATION</th></tr><tr><td colspan="5">' + investigation + '</td></tr><tr><th colspan="5">ARREST</th></tr><tr><td colspan="5">' + arrest + '</td></tr><tr><th colspan="5">PHOTOGRAPHS, VIDEOS, IN-CAR VIDEO (DICV), AND DIGITAL IMAGING</th></tr><tr><td colspan="5">' + footage + '</td></tr><tr><th colspan="5">BOOKING</th></tr><tr><td colspan="5">' + booking + '</td></tr><tr><th colspan="5">PHYSICAL EVIDENCE</th></tr><tr><td colspan="5">' + evidence + '</td></tr><tr><th colspan="5">COURT INFORMATION</th></tr><tr><td colspan="5">' + court + '</td></tr><tr><th colspan="5">ADDITIONAL</th></tr><tr><td colspan="5">' + additional + '</td></tr></table></div>';

    localStorage.setItem('pdarOutputCode', outputCode);

    var title = "Generated Report";
    // put output in modal
    var mymodal = $('#myModal');
    mymodal.find('.modal-title').text(title);
    mymodal.find('#preview').html(outputCode);
    mymodal.find('#code-output').val(outputCode);
    mymodal.modal('show');

    var copyButton = $('#copy');
    copyButton.onclick = function () { copyToClipboard() };
}

function copyToClipboard() {
    var copyTextArea = $("#code-output")
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