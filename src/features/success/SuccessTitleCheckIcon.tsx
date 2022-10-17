import { CheckIcon } from '@heroicons/react/24/outline';

export default function SuccessTitleCheckIcon() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-green-700">
      <CheckIcon className="h-8 w-8 text-green-700" />
    </div>
  );
}
