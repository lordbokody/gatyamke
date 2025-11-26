interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="rounded-[30px] bg-[#F60001] p-6 text-white mt-[25px] mb-[25px]">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <p className="leading-relaxed">{content}</p>
    </div>
  );
}