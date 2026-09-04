const SingleBlogPageLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto mt-15">
      <main>{children}</main>

      <aside className="w-72 max-w-72 p-4 rounded-md bg-zinc-100">
        side bar
      </aside>
    </div>
  );
};

export default SingleBlogPageLayout;
