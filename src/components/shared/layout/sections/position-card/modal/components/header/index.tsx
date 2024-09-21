import { Share2 } from "lucide-react";

interface Props {
  jobTitle: string;
}

export default function ModalHeader(props: Props) {
  return (
    <div className="bg-white pb-3 mb-5 px-2 border-b flex flex-col gap-y-3">
      <div className="flex-between w-full">
        <h1 className="text-xl font-medium">{props.jobTitle}</h1>

        <div className="flex-center gap-x-2">
          <button className="text-white text-base font-semibold bg-blue-500 p-1 rounded-md transition-all hover:bg-blue-600">
            Apply now
          </button>
          <Share2 size={20} color="gray" />
        </div>
      </div>

      <ul className="flex gap-x-2">
        <li className="p-2 rounded-xl border bg-transparent text-xs font-medium text-gray-600">
          Full Time
        </li>

        <li className="p-2 rounded-xl border bg-transparent text-xs font-medium text-gray-600">
          Senior Level
        </li>

        <li className="p-2 rounded-xl border bg-transparent text-xs font-medium text-gray-600">
          Project Work
        </li>
      </ul>
    </div>
  );
}
