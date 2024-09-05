import Card from "@/components/Card";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import SettingsOption from "@/components/SettingsOption";
import { settings } from "@/Data/settings";
import { total } from "@/Data/total";
import { stats } from "@/Data/response";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" w-full pt-[calc(114px)] px-10">
        <Overview />
        <div className="mt-8 mb-10 w-full flex flex-wrap gap-8 justify-center lg:justify-evenly 2xl:justify-between">
          <Card
            title={"Users"}
            total={stats["Total Users"]}
            positive={stats["Total Active Users"]}
            negative={stats["Total Deactivate Users"]}
          />
          <Card
            title={"Products"}
            total={stats["Total Products"]}
            positive={stats["Total subscribe products"]}
            negative={stats["Total unsubscribe products"]}
          />
          <Card
            title={"API Key"}
            total={stats["Total Api keys"]}
            positive={stats["Enable Api keys"]}
            negative={stats["Disable Api keys"]}
          />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            {settings.map((setting, index) => {
              return (
                <SettingsOption key={`settings${index}`} setting={setting} />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
