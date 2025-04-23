$(document).ready(function () {
    var max_fields = 20;

    // person field
    var wrapper = $(".container1");
    var add_button = $(".add_form_field1");

    var x = 1;
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<tr><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personCode[]\" placeholder=\"P\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personCount[]\" placeholder=\"X of Y (1 of 2)\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personLastname[]\" placeholder=\"Last Name\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personFirstname[]\" placeholder=\"First Name\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personMiddlename[]\" placeholder=\"Middle Name\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personSex[]\" placeholder=\"Sex (M\/F)\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personRace[]\" placeholder=\"Race (W\/B\/H\/A)\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personDOB[]\" placeholder=\"DD\/MMM\/YYYY\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"personAge[]\" placeholder=\"XX Y.O.\"><\/td><\/tr>'); // add input box
        }
    });

    var remove_button = $(".remove_form_field1");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (x > 1) {
            $(wrapper).children('tr').eq(x).remove();
            x--;
        }
    })

    // evidence field
    var max_fields2 = 20;
    var wrapper2 = $(".container2");
    var add_button2 = $(".add_form_field2");

    var y = 1;
    $(add_button2).click(function (e) {
        e.preventDefault();
        if (y < max_fields2) {
            y++;
            $(wrapper2).append('<tr><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"evidenceNum[]\" placeholder=\"1 of X\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"evidenceQuantity[]\" placeholder=\"X (Quantity)\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"evidenceDesc[]\"placeholder=\"Item Description (What type of item)\"><\/td><td valign=\"top\" class=\"label-boxes\"><input type=\"text\" class=\"table-input table-input-form\" name=\"evidenceManner[]\"placeholder=\"Manner of Seizure (How was this item seized)\"><\/td><\/tr>'); // add input box
        }
    });

    var remove_button = $(".remove_form_field2");
    $(remove_button).click(function (e) {
        e.preventDefault();
        if (y > 1) {
            $(wrapper2).children('tr').eq(y).remove();
            y--;
        }
    })
});

function generate() {
    // console.log(document.forms["investigationform"].getElementsByTagName("input"));
    output = document.forms["investigationform"].getElementsByTagName("input");

    // multiple length fields
    var personCode = [];
    var personCount = [];
    var personLastname = [];
    var personFirstname = [];
    var personMiddlename = [];
    var personSex = [];
    var personRace = [];
    var personDOB = [];
    var personAge = [];
    var evidenceNum = [];
    var evidenceQuantity = [];
    var evidenceDesc = [];
    var evidenceManner = [];

    // make arrays of all the multi-value items
    for (i = 0; i < output.length; i++) {
        // console.log(output[i].name);
        if (output[i].name === "personCode[]") {
            personCode.push(output[i].value);
        } else if (output[i].name === "personCount[]") {
            personCount.push(output[i].value);
        } else if (output[i].name === "personLastname[]") {
            personLastname.push(output[i].value);
        } else if (output[i].name === "personFirstname[]") {
            personFirstname.push(output[i].value);
        } else if (output[i].name === "personMiddlename[]") {
            personMiddlename.push(output[i].value);
        } else if (output[i].name === "personSex[]") {
            personSex.push(output[i].value);
        } else if (output[i].name === "personRace[]") {
            personRace.push(output[i].value);
        } else if (output[i].name === "personDOB[]") {
            personDOB.push(output[i].value);
        } else if (output[i].name === "personAge[]") {
            personAge.push(output[i].value);
        } else if (output[i].name === "evidenceNum[]") {
            evidenceNum.push(output[i].value);
        } else if (output[i].name === "evidenceQuantity[]") {
            evidenceQuantity.push(output[i].value);
        } else if (output[i].name === "evidenceDesc[]") {
            evidenceDesc.push(output[i].value);
        } else if (output[i].name === "evidenceManner[]") {
            evidenceManner.push(output[i].value);
        }
    }

    // format the arrays into their final submit format
    // people
    var people = [];
    for (i = 0; i < personCode.length; i++) {
        people[i] = "[tr][td][size=85]" + personCode[i] + "[\/size][\/td]\r\n[td][size=85]" + personCount[i] + "[\/size][\/td]\r\n[td][size=85]" + personLastname[i] + "[\/size][\/td]\r\n[td][size=85]" + personFirstname[i] + "[\/size][\/td]\r\n[td][size=85]" + personMiddlename[i] + "[\/size][\/td]\r\n[td][size=85]" + personSex[i] + "[\/size][\/td]\r\n[td][size=85]" + personRace[i] + "[\/size][\/td]\r\n[td][size=85]" + personDOB[i] + "[\/size][\/td]\r\n[td][size=85]" + personAge[i] + "[\/size][\/td][\/tr]";
    }

    // evidence
    var evidence = [];
    for (i = 0; i < evidenceNum.length; i++) {
        evidence[i] = "[tr]\r\n[td][size=85]" + evidenceNum[i] + "[\/size][\/td]\r\n[td][size=85]" + evidenceQuantity[i] + "[\/size][\/td]\r\n[td][size=85]" + evidenceDesc[i] + "[\/size][\/td]\r\n[td][size=85]" + evidenceManner[i] + "[\/size][\/td][\/tr]";
    }

    // input fields
    var penalCode = $("#penalCode").val();
    var date = $("#date").val();
    var locOccur = $("#locOccur").val();
    var businessName = $("#businessName").val();
    var reportType = $("#reportType").val();
    var deputyName = output.deputyName.value;
    var deputyNum = output.deputyNum.value;
    var deputyStation = output.deputyStation.value;
    var deputyCar = output.deputyCar.value;
    var narrative = $("#narrative").val();


    people = people.join("");
    evidence = evidence.join("");

    var outputCode = "[divbox=white][hr][\/hr][center][lssdheader][\/lssdheader][\/center]\r\n\r\n[table=Arial][tr]\r\n[td][size=85][b]PENAL CODE(S)[\/b][\/size][\/td]\r\n[td][size=85][b]DATE, TIME, DAY OF OCCURRENCE[\/b][\/size][\/td]\r\n[td][size=85][b]LOC. OF OCCURENCE[\/b][\/size][\/td]\r\n[td][size=85][b]BUS. NAME[\/b][\/size][\/td]\r\n[td][size=85][b]REP. TYPE[\/b][\/size][\/td][\/tr]\r\n[tr]\r\n[td][size=85]" + penalCode + "[\/size][\/td]\r\n[td][size=85]" + date + "[\/td]\r\n[td][size=85]" + locOccur + "[\/size][\/td]\r\n[td][size=85]" + businessName + "[\/size][\/td]\r\n[td][size=85]" + reportType + "[\/size][\/td][\/tr][\/table]\r\n\r\n[center][size=87]CODE: V - VICTIM [color=transparent]\u2014[\/color] W - WITNESS [color=transparent]\u2014[\/color]I - INFORMANT [color=transparent]\u2014[\/color] RP - REPORTING PARTY [color=transparent]\u2014[\/color] S - SUSPECT[\/size][\/center]\r\n\r\n[table=Arial][tr]\r\n[td][size=85][b]CODE[\/b][\/size][\/td]\r\n[td][size=85][b]# OF #[\/b][\/size][\/td]\r\n[td][size=85][b]L. NAME[\/b][\/size][\/td]\r\n[td][size=85][b]F. NAME[\/b][\/size][\/td]\r\n[td][size=85][b]M. NAME[\/b][\/size][\/td]\r\n[td][size=85][b]SEX[\/b][\/size][\/td]\r\n[td][size=85][b]RACE[\/b][\/size][\/td]\r\n[td][size=85][b]DOB[\/b][\/size][\/td]\r\n[td][size=85][b]AGE[\/b][\/size][\/td][\/tr]\r\n" + people + "[\/table]\r\n\r\n[table=Arial][tr]\r\n[td][size=85][b]BY DEP.[\/b][\/size][\/td]\r\n[td][size=85][b]EMPLOYEE #[\/b][\/size][\/td]\r\n[td][size=85][b]STATION\/UNIT[\/b][\/size][\/td]\r\n[td][size=85][b]UNIT\/CAR #[\/b][\/size][\/td]\r\n[\/tr]\r\n[tr]\r\n[td][size=85]" + deputyName + "[\/size][\/td]\r\n[td][size=85]" + deputyNum + "[\/size][\/td]\r\n[td][size=85]" + deputyStation + "[\/size][\/td]\r\n[td][size=85]" + deputyCar + "[\/size][\/td][\/table]\r\n\r\n[olddivbox=white][center][size=85][b]NARRATIVE[\/b][\/size][\/center]\r\n[size=85]" + narrative + "[\/size][\/olddivbox]\r\n\r\n[table=Arial][tr]\r\n[td][size=85][b]EVIDENCE #[\/b][\/size][\/td]\r\n[td][size=85][b]QUANTITY[\/b][\/size][\/td]\r\n[td][size=85][b]ITEM DESC.[\/b][\/size][\/td]\r\n[td][size=85][b]MANNER OF SEIZURE[\/b][\/size][\/td][\/tr]\r\n" + evidence + "\r\n[\/table]\r\n[hr][\/hr][\/divbox]";
    // clean up array printing
    // build final output with pictures or not
    localStorage.setItem('incidentOutputCode', outputCode);
    // copyToClipboard(outputCode);
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
        copyButton.tooltip('dispose');
    }, 2000);
}