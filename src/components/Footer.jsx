const styles = {
    footer: {
        backgroundColor: '#f5e9dc',
        padding: '1rem',
        textAlign: 'center',
    },
    link: {
        color: '#a0522d',
        textDecoration: 'none',
    },
}

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; 2026 Callum's Portfolio</p>
        </footer>
    );
};

export default Footer;