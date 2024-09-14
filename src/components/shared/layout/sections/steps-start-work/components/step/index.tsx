interface StepProps {
  step: { id: number; time: string };
}

export default function Step({ step }: StepProps) {
  return (
    <div className="flex-center flex-col gap-y-1 mb-4 sm:mb-0">
      <span className="text-xl font-medium bg-blue-300 p-5 rounded-full w-14 h-14 flex-center text-blue-600">
        {step.id}
      </span>

      <p className="text-sm text-gray-500 font-medium text-center">
        {step.id === 3 ? (
          <>
            Start your remote <br /> position in Cotopia
          </>
        ) : (
          step.time
        )}
      </p>
    </div>
  );
}
