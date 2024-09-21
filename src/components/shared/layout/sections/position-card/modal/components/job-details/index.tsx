interface Props {
  title: string;
  list: string[];
}

export default function JobDetails(props: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <h1 className="text-lg font-medium">{props.title}</h1>

      <ul className="list-disc flex flex-col gap-y-1 text-sm px-6 text-gray-700 font-medium">
        {props.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
