import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from './fonts';
// import { lusitana } from '@/app/ui/fonts';

export default function VoteLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Vote</p>
    </div>
  );
}
