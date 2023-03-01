import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Home() {
    const [city, setCity] = useState('');
    const { isAuthenticated, isLoading, user } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (!isAuthenticated) {
        window.location.href = '/';
    }

    const handleSearch = () => {
        window.location.href = `/weather/${city}`;
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div style={styles.body}>
            <p>{user?.name}</p>
            <p>https://github.com/{user?.nickname}</p>
            <div style={styles.search}>
                <input style={styles.search.input} placeholder='City' onChange={handleChange} />
                <button style={styles.search.button} onClick={handleSearch}>Display Weather</button>
            </div>
        </div>
    );
}

export default Home;

const styles = {
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    search: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        input: {
            width: '300px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '0 10px',
            marginBottom: '10px',
        },

        button: {
            width: '150px',
            height: '30px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            padding: '0 10px',
            backgroundColor: '#fff',
            cursor: 'pointer',
        }
    },
};
