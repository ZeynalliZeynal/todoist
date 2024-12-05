import { ReactNode } from "react";
import Link from "next/link";
import { DashedCircle } from "@/components/ui/icons/geist";
import Image from "next/image";

export default function CardSheet({
  children,
  href,
  img,
  alt,
}: {
  children: ReactNode;
  href: string;
  img: string;
  alt: string;
}) {
  return (
    <Link href={href} className="flex flex-col border w-40 group">
      <div className="relative h-32 bg-background-200 group-hover:bg-gray-alpha-100 transition duration-300">
        <div
          className="absolute [--size:33px] -top-px w-[var(--size)] h-[var(--size)] border-r-background-100 border-b-background-200 -right-px border-gray-400"
          style={{
            borderBottomWidth: "var(--size)",
            borderRightWidth: "var(--size)",
          }}
        >
          <div className="absolute size-[var(--size)] border-b border-l before:absolute before:top-0 before:-right-px before:w-px before:h-[var(--size)] before:bg-gray-400 before:-rotate-45 before:scale-[1.4] before:origin-bottom overflow-hidden" />
        </div>
        <div className="absolute inset-0">
          <hr className="absolute border-dashed border-gray-400 w-full h-px top-1/3" />
          <hr className="absolute border-dashed border-gray-400 w-full h-px top-2/3" />
        </div>
        <div className="absolute inset-0">
          <hr
            className="absolute h-full w-px left-1/3"
            style={{
              background:
                "linear-gradient(180deg,hsla(var(--ds-gray-400)),hsla(var(--ds-gray-400)) 50%,transparent 0,transparent)",
              backgroundSize: "1px 5px",
            }}
          />
          <hr
            className="absolute h-full w-px left-2/3"
            style={{
              background:
                "linear-gradient(180deg,hsla(var(--ds-gray-400)),hsla(var(--ds-gray-400)) 50%,transparent 0,transparent)",
              backgroundSize: "1px 5px",
            }}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <DashedCircle className="size-16" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="group-hover:scale-[1.2] transition duration-300">
            <Image src={img} alt={alt} width={48} height={48} />
          </div>
        </div>
      </div>
      {children}
    </Link>
  );
}
