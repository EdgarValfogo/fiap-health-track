$("form").submit( function( event ) {
    let erros = 0;

    let inputNumeros = $(this).find("input.somente-numeros");
    for( let i = 0; i < inputNumeros.length; i++ ) {
        let inputTarget = inputNumeros[i];

        let validacao = /^\d+$/.test(inputTarget.value);
        if( !validacao ) {
            erros ++;

            alert( "O campo " + inputTarget.name + " não pode conter letras. Apenas números");
        }
    }
    
    
    if( erros > 0 ) {
        event.preventDefault();
    }
});