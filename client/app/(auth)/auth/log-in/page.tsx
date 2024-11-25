import Input from "@/components/ui/input";
import { HiOutlineArrowUpCircle } from "react-icons/hi2";

export default function Page() {
  return (
    <section className="max-w-80 mx-auto">
      <div className="flex flex-col gap-6">
        <Input prefix="https://" placeholder="Small" suffix=".com" />
        <Input
          prefix={<HiOutlineArrowUpCircle size={16} />}
          placeholder="Medium"
          prefixStyling={false}
          size="medium"
        />
        <Input
          prefix={<HiOutlineArrowUpCircle size={16} />}
          placeholder="Large"
          size="large"
        />
      </div>
    </section>
  );
}
