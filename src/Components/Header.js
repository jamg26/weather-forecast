import { useAuth0 } from '@auth0/auth0-react';
import WeatherIcon from '../weather.svg'

function Header() {
    const { logout, isAuthenticated } = useAuth0();

    return (
        <div>
            <div style={styles.header}>
            <div style={styles.header.title}>
                <img src={WeatherIcon} alt="icon" width={70} /> <h1>Weather Forecast</h1>
            </div>
                {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>}
            </div>
            <hr />
        </div>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        backgroundColor: '#fff',
        height: '60px',
        title: {
            display: 'flex',
            alignItems: 'center',
        }
    },
};

export default Header;
