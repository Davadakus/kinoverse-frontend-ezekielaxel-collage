interface EmojiProps {
  children: React.ReactNode;
}

export default function Emoji({ children }: EmojiProps) {
  return <div className="text-xl">{children}</div>;
}
