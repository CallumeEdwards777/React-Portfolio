const styles = {
    footer: {
        backgroundColor: '#f8f9fa',
        padding: '1rem',
        textAlign: 'center',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    },
}

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2024 Callum's Portfolio</p>
            <a href="https://github.com/callumeedwards777" style={styles.link}>
                GitHub
            </a>
        </footer>
    );
};

export default Footer;