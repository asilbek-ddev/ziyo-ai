import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <>
      <header className="">
        <nav className="flex items-center justify-between py-4 px-10"></nav>
      </header>
      <main className="flex-1 h-screen flex items-center justify-center">
        <div className="w-200 px-10 border rounded-full">
          <Textarea className="bg-transparent border-none" />
        </div>
      </main>
    </>
  );
};

export default page;
