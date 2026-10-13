import { useState } from "react";
import logo from "../assets/images/logo.png";

function Header(){
  const[menuOpen, setMenuOpen] = useState(false)

  return(
      <header className="bg-secondary w-full sm:px-8 px-4 sm:py-6 py-3">

        <div className="mx-auto flex items-center justify-between"> 
          <div className="flex items-center sm:gap-3 gap-2">
            <img src={logo} alt="Logo da ADA" className="h-10 sm:h-22 w-auto object-contain"/>
            <span className="text-xl sm:text-5xl font-zico text-primary">ADA</span>
          </div>

          {/* Botão Hambúrguer Animado (apenas mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50 cursor-pointer"
        >
          <span
            className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-primary rounded-full transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

             
          <nav className="text-primary hidden lg:block">
            <ul className="flex items-center gap-6 font-medium">
              <li><a href="">Início</a></li>
              <li><a href="">Nossa Missão</a></li>
              <li><a href="">Quem Somos</a></li>
              <li><a href="">Nossos serviços</a></li>
              <li className="bg-primary px-4 py-3 rounded-xl text-secondary"><a href="">Entrar em Contato</a></li>
            </ul>
          </nav>


        </div>
          {/* Navegação mobile */}

          <nav
              aria-hidden={!menuOpen}
              className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                      menuOpen
                        ? "mt-4 max-h-96 translate-y-0 opacity-100 pt-4 border-t border-primary/20"
                        : "mt-0 max-h-0 -translate-y-2 opacity-0 pt-0 border-t-0 pointer-events-none"
              }`}>
            <ul className="flex flex-col gap-4 font-medium text-primary px-2">
              <li onClick={() => setMenuOpen(false)}><a href="">Início</a></li>
              <li onClick={() => setMenuOpen(false)}><a href="">Nossa Missão</a></li>
              <li onClick={() => setMenuOpen(false)}><a href="">Quem Somos</a></li>
              <li onClick={() => setMenuOpen(false)}><a href="">Nossos serviços</a></li>
              <li onClick={() => setMenuOpen(false)} className="bg-primary px-4 py-3 rounded-xl text-secondary"><a href="">Entrar em Contato</a></li>
            </ul>
          </nav>
      </header>   
  )
}

export default Header;