console.log("this js page is connected")
$(".save").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr("data-id")
    console.log(id)

    $.ajax({
        url: "/articles/" + id,
        method: "PUT"
    }).then(function (db) {
        console.log(db)

    })
    $(this).parents("div.card").remove();

})

$("#saved").on("click", function () {
    $.ajax({
        url: "/saved",
        method: "GET"
    }).then(function (db) {
        console.log(db)
        location.replace("/saved")
    })
})

$(".addNote").on("click", function () {

    var id = $(this).attr("data-id")
    console.log(id)


    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();
})