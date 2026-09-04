import SideBar from "@/components/productSidebar/SideBar";

const SingleProductPageLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto mt-15">
      <main className="w-[75%] p-5">{children}</main>

      <aside className="w-[25%]">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleProductPageLayout;
