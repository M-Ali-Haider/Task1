import TotalAPISVG from "@/svgs/totalAPI";
import TotalProductsSVG from "@/svgs/totalProducts";
import TotalUsersSVG from "@/svgs/totalUsers";

function Card({ title, total, positive, negative }) {
  const icons = () => {
    if (title === "Users") {
      return <TotalUsersSVG />;
    } else if (title === "Products") {
      return <TotalProductsSVG />;
    } else {
      return <TotalAPISVG />;
    }
  };

  return (
    <>
      <div className="flex flex-col w-[436px] bg-white rounded-lg shadow-md">
        {/* Shows Total Value */}
        <div className="border-b-[1px] border-[rgba(180,185,201,0.5)] h-32 flex items-center gap-4 pl-7">
          <div className="w-[48px] h-[48px]">
            {icons()}
            {/* <Image
              src={`${nextConfig.basePath}/images/totalUsers.png`}
              width={48}
              height={48}
              alt="logo"
            /> */}
          </div>
          <div className="flex flex-col ">
            <div className="text-[20px] font-extrabold">
              {total ? total : "--"}
            </div>
            <div className="text-sm text-[#848e98]">Total {title}</div>
          </div>
        </div>
        {/* Shows Stats */}
        <div className="flex items-center justify-center h-16">
          <div className="h-full w-1/2 flex flex-col items-center justify-center">
            <div className="font-extrabold">{positive ? positive : "1208"}</div>
            <div className="text-sm text-[#848e98]">
              {title === "Products" ? "Subscribed" : "Active"}
            </div>
            <div></div>
          </div>
          <div className="h-[36px] w-[1px] bg-[#848e98]"></div>
          <div className="h-full w-1/2  flex flex-col items-center justify-center">
            <div className="font-extrabold">
              {negative ? negative : <span style={{ color: color }}>--</span>}
            </div>
            <div className="text-sm text-[#848e98]">
              {title === "Products" ? "Unsubscribed" : "Deactivate"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

// const totalValue = item.totalValue;
// const positiveValue = item.positiveValue;
// const negativeValue = item.negativeValue;

// const color =
//   item.trigger === "users"
//     ? "#32d74b"
//     : item.trigger === "products"
//     ? "#007aff"
//     : item.trigger === "apiKeys"
//     ? "#ec6853"
//     : "#000000";

// const title =
//   item.trigger === "users"
//     ? "Users"
//     : item.trigger === "products"
//     ? "Products"
//     : item.trigger === "apiKeys"
//     ? "API Keys"
//     : "";

// const imageName =
//   item.trigger === "users"
//     ? "totalUsers.png"
//     : item.trigger === "products"
//     ? "totalProducts.png"
//     : item.trigger === "apiKeys"
//     ? "totalApiKeys.png"
//     : "";
