import SideBar from "@/components/sidebar/SideBar";

const SingleBlogPageLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto mt-15">
      <main className="w-full">{children}</main>

      <aside className="w-2xl">
        <SideBar />
      </aside>
    </div>
  );
};

export default SingleBlogPageLayout;
