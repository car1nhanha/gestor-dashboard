import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function ThankYou() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.token) {
      authContext.setLoading(false);
      navigate("/", { replace: true });
    }
  }, [authContext.token]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Muito obrigado!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Estamos com seu cadastro já, obrigado por se cadastrar
          </p>
        </div>
      </div>
    </div>
  );
}