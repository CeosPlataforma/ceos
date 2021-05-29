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
$('#permanecer-conectado').on('click', function () {
    let checkbox_value = $('#checkbox').prop('checked');

    if (checkbox_value === false) {
        $('#checkbox').prop('checked', true);
        $('.hasborder').toggleClass('filled');
    }

    if (checkbox_value) {
        $('#checkbox').prop('checked', false);
        $('.hasborder').toggleClass('filled');
    }
});