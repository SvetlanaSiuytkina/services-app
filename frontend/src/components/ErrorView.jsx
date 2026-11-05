export default function ErrorView({ message, onRetry }) {
  return (
    <div className="error-view">
      <span>Произошла ошибка! {message}</span>
      <button onClick={onRetry}>Повторить запрос</button>
    </div>
  );
}