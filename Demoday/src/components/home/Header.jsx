import '../styles/Header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <header>
                <div className="logo">
                    <Link to='/'><img src="assets/images/Logo.png" alt="Logo" /></Link>
                </div>
                <nav>
                    <ul>
                        <li className='nav-link' ><Link to='/'>Home</Link></li>
                        <li className='nav-link' ><Link to='Psicologos'>Psicólogos</Link></li>
                        <li className='nav-link'><Link>Cursos</Link></li>
                        <li className='nav-link'><Link to='cards'>Cards</Link></li>
                        <li className='nav-link'><Link>Documentação</Link></li>
                        <li className='nav-link'><Link>Sobre</Link></li>
                    </ul>
                </nav>
                <div className='area_cadastro'>
                    <div className='login'>Login</div>
                    <div className='cadastro'>Cadastre-se</div>
                </div>
            </header>
            
            
        </>
    )
}
export default Header