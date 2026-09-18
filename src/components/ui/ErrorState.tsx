interface Props {
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: Props) {
  return (
    <div className="p-4 text-center">
      <p className="mb-2 text-red-600">{message}</p>
      {onRetry ? (
        <button className="underline" onClick={onRetry}>
          Retry
        </button>
      ) : null}
    </div>
  );
}
