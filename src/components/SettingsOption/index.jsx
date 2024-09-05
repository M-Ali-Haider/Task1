import Image from "next/image";
import nextConfig from "../../../next.config";
function SettingsOption({ setting }) {
  return (
    <>
      <div className="w-72 min-w-[250px] h-20 bg-white flex items-center rounded-md pl-4 gap-2 cursor-pointer">
        <div>
          <Image
            width={36}
            height={36}
            src={`${nextConfig.basePath}/images/settings/${setting.src}`}
            alt={setting.alt}
          />
        </div>
        <div>{setting.name}</div>
      </div>
    </>
  );
}

export default SettingsOption;
