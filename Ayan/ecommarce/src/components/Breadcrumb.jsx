import { Link, useLocation } from 'react-router-dom';
import './style/breadcrumb.css'
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const breadcrumbName = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <Link key={routeTo} to={routeTo}>
        {breadcrumbName}
      </Link>
    );
  });

  return (
    <div className='breadcrumb-section'>
      {breadcrumbs}
    </div>
  );
};

export default Breadcrumb;