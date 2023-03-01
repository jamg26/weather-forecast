import { useAuth0 } from '@auth0/auth0-react';

function Landing() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        window.location.href = '/home';
    }

    return (
        <div>
            <p>
                Welcome to the weather forecast web application. Please login with your Github user to use the
                application and view the weather in your city.
            </p>
            <button onClick={loginWithRedirect}>Login</button>
        </div>
    );
}

export default Landing;
