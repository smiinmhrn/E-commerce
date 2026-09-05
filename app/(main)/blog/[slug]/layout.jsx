import SideBar from "@/components/blogSidebar/SideBar";

const SingleBlogPageLayout = ({ children }) => {
  return (
    <div className="container mx-auto mt-8 sm:mt-10 lg:mt-15 flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-8">
      <main className="w-full lg:w-[75%] p-2 sm:p-4 lg:p-5">{children}</main>

      <aside className="w-full lg:w-[25%]">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleBlogPageLayout;
