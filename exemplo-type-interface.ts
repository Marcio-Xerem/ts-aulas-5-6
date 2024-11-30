class Pessoa  {       
    _nome;
    _sobrenome;
    _endereco;
    _estadoCivil;
    _email;
    _telefone;
}

interface IPessoa {
    consultarNome();
    consultarEmail();
}

type TPessoa = {
    consualtarNome();
    consultarEmail();
}

class Funcionario extends Pessoa implements IPessoa {
    _codTipoFuncionario: number;
    _codCargo: number;
    _salario: number;
    _plr: number;

    consultarEmail() {

    }

    consultarNome() {

    }
}


const f1 = new Funcionario();
f1.nome = 'Marcio da Mota Xerém';
f1.email = 'exemplo@hotmail.com';
f1._codCargo = 1;
