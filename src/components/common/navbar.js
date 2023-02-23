import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function NavBar() {
  const [t] = useTranslation('movies');
  return (
    <Navbar bg="dark" className=' sticky-top' variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          {t('navbar.title')}
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              {t('navbar.movies')}
            </Link>
            <Link to="/stats" className="nav-link">
              {t('navbar.charts')}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
