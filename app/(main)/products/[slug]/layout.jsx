import SideBar from "@/components/productSidebar/SideBar";

const SingleProductPageLayout = ({ children }) => {
  return (
    <div className="container mx-auto mt-8 sm:mt-10 lg:mt-15 flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-8">
      {/* Main Content */}
      <main className="w-full lg:w-[75%] p-2 sm:p-4 lg:p-5">{children}</main>

      {/* Sidebar */}
      <aside className="w-full lg:w-[25%]">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleProductPageLayout;
