import './Header.css';

// colocar props para mudar titulo no meio
const Header = () => {
    return(
        <header>
            <h1>UniSenai</h1>
            <div className="navbar">
                <a href='/' target='_blank'>Home</a>
                <a href='/cadastro' target='_blank'>Cadastro</a>
                <a href='/listagem' target='_blank'>Listagem</a>
            </div>
        </header>
    );
}

export default Header;