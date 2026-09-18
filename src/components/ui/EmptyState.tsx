interface Props {
  message: string;
}

export function EmptyState({ message }: Props) {
  return <div className="p-4 text-center text-text">{message}</div>;
}
