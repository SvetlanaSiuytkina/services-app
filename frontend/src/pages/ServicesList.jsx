import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { servicesListRequested } from '../store/actions';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

export default function ServicesList() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.servicesList);

  useEffect(() => {
    dispatch(servicesListRequested());
  }, [dispatch]);

  if (loading) return <Spinner />;
  if (error) return <ErrorView message={error} onRetry={() => dispatch(servicesListRequested())} />;

  return (
    <div>
      <h1>Список услуг</h1>
      <ul className="services-list">
        {data.map((service) => (
          <li key={service.id} className="service-item">
            <Link to={`/${service.id}/details`}>
              <span className="service-name">{service.name}</span>
              <span className="service-price">{service.price} руб.</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}