import { Building2, FolderHeart, LogOut, Map, Users } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function Navbar() {
  const { token, removeToken } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Gestor do Povo
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/members"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Users size={20} />
              <span>Voluntários</span>
            </Link>
            <Link
              to="/organizations"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Building2 size={20} />
              <span>Organizações</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <FolderHeart size={20} />
              <span>Projetos</span>
            </Link>
            <Link
              to="/map"
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Map size={20} />
              <span>Mapa</span>
            </Link>
            {token && (
              <button
                onClick={() => removeToken()}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <LogOut size={20} />
                <span>Sair</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
