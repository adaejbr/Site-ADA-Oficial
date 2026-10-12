import logo from "../assets/images/logo.png";

function Header(){
  return(
      <header className="bg-secondary w-full px-8 py-6">

        <div className="mx-auto flex items-center justify-between"> 
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo da ADA" className="h-22 w-auto"/>
            <span className="text-5xl font-zico text-primary">ADA</span>
          </div>

          <nav className="text-primary ">
            <ul className="flex items-center gap-6 font-medium">
              <li><a href="">Início</a></li>
              <li><a href="">Nossa Missão</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Nossos serviços</a></li>
              <li className="bg-primary px-4 py-3 rounded-xl text-secondary"><a href="">Entrar em Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>   
  )
}

export default Header;