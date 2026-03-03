export function MessageDisplay({ message }: { message: { text: string, bg: string } }) {
  if (!message) return null;

  return (
      <div
        className={`
        absolute bottom-4 
        rounded-2xl p-4
        font-bold
        ${message.bg}
        `}
      >
        {message.text}
      </div>
 
  );
}
