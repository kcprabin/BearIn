import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { authContext } from "../auth/Authentication"

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useContext(authContext)

	if (!isAuthenticated) {
		return <Navigate to="/login" replace />
	}

	return children
}

export default ProtectedRoute
