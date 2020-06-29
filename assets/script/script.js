
medicos = ['Davi Silva', 'Jasmin de Souza', 'Leonardo Moura Leitão', 'Tiradentes Ferreira', 'Sânia Lopes', 'Leonete Dalazen', 'Lúcia Lopes']
especialidades = ['Psiquiatra', 'Pediatra', 'Cardiologista', 'Dentista', 'Dermatologista', 'Pediatra', 'Cardiologista']
saida = document.getElementsByClassName('display-medicos-inner')[0]


function pesquisarEspecialidade(especialidade){
    especialidade = especialidade.innerText
    
    saida.innerHTML = ``

    especialidades.forEach((esp, i) => {
        if(esp == especialidade){
            listarMedico(i)
        }
    })
}

function listarMedico(i){
    
    saida.innerHTML += ` <div class="perfil-medico">
                            <div class="perfil-inner">
                                <div class="foto-perfil">
                                    <i class="fa fa-user-md" aria-hidden="true"></i>
                                </div>
                                <div class="nome-medico">
                                    <div class="descricao">
                                        <h2>${medicos[i]}</h2>
                                        <h4>${especialidades[i]}</h4>
                                    </div>
                                </div>
                                <div class="botoes-perfil">
                                    <input type="button" value="Informações"/>
                                    <input type="button" value="Marcar Consulta"/>
                                </div>
                            </div>
                        </div>`
    
}

function listarMedicos(){
    saida.innerHTML = ``
    especialidades.forEach((esp, i) => {
        listarMedico(i)
    })
}