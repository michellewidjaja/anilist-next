import Link from "next/link";
import { ChevronLeft } from "react-feather";

interface BackButtonProps {
  backUrl: string;
  children: React.ReactNode;
}
export default function BackButton({
  backUrl,
  children
}: BackButtonProps) {
  return (
    <Link href={backUrl} className="flex items-center space-x-2 text-gray transition duration-300 hover:text-blue mb-6 ml-[-.5rem]">
      <ChevronLeft size={24} />
      {children}
    </Link>
  )
}