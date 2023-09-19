const form = document.getElementById('formulario');
const inputtarefa = document.getElementById('tarefa');
let linhas='';


form.addEventListener('submit', function(e){
    e.preventDefault();

        adicionarlista();
        

    function adicionarlista() {
        const inputtarefa = document.getElementById('tarefa');

        let linha = '<table>';

        linha += `<tr> ${inputtarefa.value}</tr>`;
        linha += '</table>'

        linhas += linha;

        const corpotabela = document.querySelector("table");
        corpotabela.innerHTML = linhas;




        $(document).ready(function(){
            $(form).on(function(e){
                e.preventDefault();

                const formulario = $('#tarefa').val();
                const novoItem =$('<li></li>');

                $(formulario).appendTo(novoItem);
                $(novoItem).appendTo('ul');

                $('#tarefa').val('');

            })

            $('#novo').click(function(){
                $('#novo').hide();
                $('.center').fadeIn();

                console.log();

            })

        })

        inputtarefa.value='';


    }
})