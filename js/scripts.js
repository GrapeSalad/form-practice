$(document).ready(function(){
  $("#formOne").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput.toUpperCase());
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
    });
});
