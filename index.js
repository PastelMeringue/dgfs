$(document).ready(function () {

// FILL SEARCH BAR ON BUTTON CLICK ================ //

  $(".btn-keyword").click(function() {
    $(this).addClass("border: solid 200px");
  })


// FILTER ========================================= //
    function noaccent(myString) {
        temp = myString.replace(/[àâä]/g, "a");
        temp = temp.replace(/[éèêë]/g, "e");
        temp = temp.replace(/[îï]/g, "i");
        temp = temp.replace(/[ôö]/g, "o");
        temp = temp.replace(/[ùûü]/g, "u");
        temp = myString.replace(/[ÀÂÄ]/g, "A");
        temp = temp.replace(/[ÉÈÊË]/g, "E");
        temp = temp.replace(/[ÎÏ]/g, "I");
        temp = temp.replace(/[ÔÖ]/g, "O");
        temp = temp.replace(/[ÙÛÜ]/g, "U");

        return temp;
    }

    $("#filterResponses").keyup(function () {

        var text = $.trim(noaccent($(this).val())),
            filter = '^(?=.*\\b' + text.split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
            reg = RegExp(filter, 'i'),
            count = 0;

        $(".scenario-wrapper .scenario").each(function () {

            if (!reg.test(noaccent($(this).text()))) {
                $(this).parent().addClass("cacheElementFilter");
            } else if (!($(this).parent().hasClass("cacheElement"))) {
                $(this).parent().removeClass("cacheElementFilter");
                count++;
            }
        });
    });

});
