import './Cadastro.css';

const Cadastro = () => {
    localStorage.setItem("alunos", [])

    const submitForm = () => {
        var alunosArmazenados = JSON.parse(localStorage.getItem("alunos")) || [];

        var nome = document.getElementById('nome');
        var idade = document.getElementById('idade');
        var email = document.getElementById('email');
        const aluno = [nome, idade, email];

        localStorage.setItem("alunos", [aluno]);
    }

    return (
        <main>
            <h1>Cadastro de Aluno</h1>
            <section className='form'>
                <label>Nome</label>
                <input type='text' id='nome' />
                <label>Idade</label>
                <input type='number' id='idade' />
                <label>Email</label>
                <input type='email'  id='email' />
                <button onClick={submitForm}>CADASTRAR</button>
            </section>
        </main>
    );
}

export default Cadastro