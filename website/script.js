$(document).ready(function () {
    $(".showPassword, .hidePassword").on('click', function () {
        var passwordId = $(this).parent('.inputWrapper:first').find('input').attr('id');
        if ($(this).hasClass('showPassword')) {
            $("#" + passwordId).attr("type", "text");
            $(this).parent().find(".showPassword").hide();
            $(this).parent().find(".hidePassword").show();
        } else {
            $("#" + passwordId).attr("type", "password");
            $(this).parent().find(".hidePassword").hide();
            $(this).parent().find(".showPassword").show();
        }
    });
});

var modalCenter = document.getElementById('modalCenter')
var triggerModal = document.getElementById('triggerModal')

modalCenter.addEventListener('shown.bs.modal', function () {
  triggerModal.focus()
})