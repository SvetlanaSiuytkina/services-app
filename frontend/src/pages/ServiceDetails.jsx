import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { servicesDetailsRequested } from '../store/actions';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

export default function ServiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.servicesDetails);

  useEffect(() => {
    dispatch(servicesDetailsRequested(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (error) return <ErrorView message={error} onRetry={() => dispatch(servicesDetailsRequested(id))} />;
  if (!data) return null;

  return (
    <div className="details-card">
      <Link to="/" className="back-link">Назад к списку</Link>
      <h1>{data.name}</h1>
      <div className="details-price">Цена: {data.price} руб.</div>
      <p>Описание:</p>
      <div className="details-content">{data.content}</div>
    </div>
  );
}