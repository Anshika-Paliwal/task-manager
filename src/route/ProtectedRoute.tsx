import { Navigate } from "react-router-dom";

import { useAppSelector } from "../app/hooks";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: Props) {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;