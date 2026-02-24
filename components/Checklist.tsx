import { CheckIcon } from "./Icons";

export default function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-content-body">
          <span className="text-accent-teal flex-shrink-0 mt-0.5">{CheckIcon()}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
