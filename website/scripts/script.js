// Visão geral

// Organização
$('#btn--organizacao').on('click', function () {
    // Buttons
    $('#btn--organizacao').addClass('visao-geral--btn--active');
    $('#btn--organizacao').removeClass('visao-geral--btn--inactive');

    $('#btn--gerenciamento').addClass('visao-geral--btn--inactive');
    $('#btn--gerenciamento').removeClass('visao-geral--btn--active');

    $('#btn--desempenho').addClass('visao-geral--btn--inactive');
    $('#btn--desempenho').removeClass('visao-geral--btn--active');

    // Title
    $('#visao-geral--title').text('Organização');

    // Text
    $('#visao-geral--text--1').text('É de conhecimento geral que a organização nos estudos é de suma importância para o sucesso de um estudante em diversos aspectos.');

    $('#visao-geral--text--2').text('Nesse sentido, a plataforma permite a categorização de atividades e matérias, de modo a te ajudar efetivamente na organização escolar');

    // Image
    $('#visao-geral--img').attr('src', '../assets/illustrations/organizacao.svg');
});

// Gerenciamento
$('#btn--gerenciamento').on('click', function () {
    // Buttons
    $('#btn--organizacao').addClass('visao-geral--btn--inactive');
    $('#btn--organizacao').removeClass('visao-geral--btn--active');

    $('#btn--gerenciamento').addClass('visao-geral--btn--active');
    $('#btn--gerenciamento').removeClass('visao-geral--btn--inactive');

    $('#btn--desempenho').addClass('visao-geral--btn--inactive');
    $('#btn--desempenho').removeClass('visao-geral--btn--active');

    // Title
    $('#visao-geral--title').text('Gerenciamento');

    // Text
    $('#visao-geral--text--1').text('Administrar as atividades disciplinares de forma produtiva é essencial para garantir o êxito no contexto estudantil.');

    $('#visao-geral--text--2').text('Assim, de modo intuitivo e prático, a plataforma possibilita um melhor gerenciamento das atividades escolares.');

    // Image
    $('#visao-geral--img').attr('src', '../assets/illustrations/gerenciamento.svg');
});

// Desempenho
$('#btn--desempenho').on('click', function () {
    // Buttons
    $('#btn--organizacao').addClass('visao-geral--btn--inactive');
    $('#btn--organizacao').removeClass('visao-geral--btn--active');

    $('#btn--gerenciamento').addClass('visao-geral--btn--inactive');
    $('#btn--gerenciamento').removeClass('visao-geral--btn--active');

    $('#btn--desempenho').addClass('visao-geral--btn--active');
    $('#btn--desempenho').removeClass('visao-geral--btn--inactive');

    // Title
    $('#visao-geral--title').text('Desempenho');

    // Text
    $('#visao-geral--text--1').text('Ter uma boa visão do desempenho em variados aspectos escolares é relevante para verificar falhas e melhor gerir a performance nos estudos.');

    $('#visao-geral--text--2').text('Diante disso, na plataforma, o controle do desempenho nas atividades estudantis é caracterizado pela agilidade e eficiência.');

    // Image
    $('#visao-geral--img').attr('src', '../assets/illustrations/desempenho.svg');
});

// Acessar
// Permanecer conectado
$('.permanecer-conectado').on('click', function () {
    let checkbox_value = $('.permanecer-conectado--hidden-checkbox').prop('checked');

    if (checkbox_value === false) {
        $('.permanecer-conectado--hidden-checkbox').prop('checked', true);
        $('.permanecer-conectado--checkbox').toggleClass('filled');
    }

    if (checkbox_value) {
        $('.permanecer-conectado--hidden-checkbox').prop('checked', false);
        $('.permanecer-conectado--checkbox').toggleClass('filled');
    }
});

// Mostrar/Ocultar senha
$(".show-password, .hide-password").on('click', function () {
    var passwordId = $(this).parent('.senha--container:first').find('input').attr('id');
    if ($(this).hasClass('show-password')) {
        $("#" + passwordId).attr("type", "text");
        $(this).parent().find(".show-password").hide();
        $(this).parent().find(".hide-password").show();
    } else {
        $("#" + passwordId).attr("type", "password");
        $(this).parent().find(".hide-password").hide();
        $(this).parent().find(".show-password").show();
    }
});