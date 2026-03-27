import Link from "next/link"

export default function Navbar(){
    return(
        <>
        <header>
            <nav className="bg-[#62a358] fixed top-0 text-white p-5 left-0 w-full z-50 shadow-md ">
                <div className="flex justify-end gap-5 text-lg">
                   <Link className="m-5" href={"/"}>Inicio</Link>
                   <Link className="m-5" href={"/"}>Hablidade</Link>
                   <Link className="m-5" href={"/"}>Projeto</Link>
                   <Link className="m-5" href={"/"}>Formação</Link>
                   <Link className="m-5" href={"/"}>Contatos</Link>
                </div>
            </nav>
        </header>
        </>
    )

}