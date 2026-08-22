const pages = [
  { name: 'Home', key: 'home' },
  { name: 'Projects', key: 'projects' },
  { name: 'About', key: 'about' },
];

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <ul className="nav-links">
        {pages.map((page) => (
          <li
            key={page.key}
            className={page.key === selectedPage ? 'nav-link selected' : 'nav-link'}
            onClick={() => onSetPage(page.key)}
          >
            {page.name}
          </li>
        ))}
      </ul>
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;