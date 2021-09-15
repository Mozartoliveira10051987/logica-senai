// realizar o desenvolvimento de um sistema de cadastro para eventos que será disponibilizado para o público
    var dataEvento, dataAtual, idade, contadorParticipantes, limiteParticipante, participante, palestrante, maiorIdade;
    
    dataEvento = 20210918;
    dataAtual = 20210904;
    console.log("Digite sua data de nascimento,  Exemplo: 19870510 (Ano/Mês/Dia)  Use 8 dígitos, não usar /Barra de separção");
    
    // -Se o participante for maior de 18 anos, permitir o cadastro;
    // senão, alertar que o cadastro não é permitido pela idade.
    idade = console.log('entrada da idade');
    
    // De acordo com a Data atual, quem nasceu em 2003/09/05 (Ano/Mês/Dia) é maior que 18 anos
    maiorIdade = 20030905;
    if (idade <= maiorIdade) {
        if (dataAtual < dataEvento) {
            console.log("Precisamos saber se você é Participante ou Palestrante.  Se for Participante digite 1  Se for Palestrante digite 2");
            participante = console.log('entrada do valor do participante');
            participante = 1;
            palestrante = 2;
            if (participante == 1) {
                console.log("De acordo com o sistema, não há limites para Palestrantes.  Então Seja Muito Bem Vindo!!  O sistema irá contabilizar os Participantes e ver se você poderá participar.  Lembrando que o Evento só permitirá 100 Participantes!! ");
            }
            
            // -Listar participantes e palestrantes por evento.
            contadorParticipantes = 1;
            limiteParticipante = 100;
            
            // -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro;
            // senão, alertar que o cadastro não será permitido por ter excedido o limite.
            while (participante <= limiteParticipante) {
                console.log("Contagem atual: " + participante);
                participante = participante + 1;
            }
            console.log("O cadastro não será permitido por ter excedido o limite de Participantes");
        } else {
            console.log("O cadastro para o evento, não será permitido, pois o evento já ocorreu!");
        }
    } else {
        console.log("Pessoas menores de 18 anos não podem se cadastrar!");
        
    }console.log("lista de participantes");

