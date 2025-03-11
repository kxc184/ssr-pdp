import { useRouter, usePathname, useSearchParams } from "next/navigation";

const useCustomRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

  return { router, pathname, currentParams, searchParams };
};

export default useCustomRouter;
