import Image from "next/image";
import nextConfig from "../../../next.config";
function Header() {
  return (
    <>
      <header className=" fixed top-0 right-0 h-[76px] w-full flex items-center justify-end pr-8 shadow-sm bg-white">
        <div className="flex items-center h-[40px] gap-8">
          <div className="flex items-center gap-4 h-full">
            <div className="overflow-hidden flex items-center justify-center">
              <Image
                className="rounded-full w-[40px] h-[40px] object-top object-cover"
                src={`${nextConfig.basePath}/images/sample.png`}
                width={40}
                height={40}
                alt="pfp image"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-[#1f2121] text-sm">Muhammad Afzal</div>
              <div className="text-[#848e98] text-xs">Account Settings</div>
            </div>
          </div>
          {/* DropDown Image */}
          <div className="cursor-pointer">
            <Image
              src={`${nextConfig.basePath}/images/dropdown.png`}
              width={22}
              height={18}
              alt="alt image"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
