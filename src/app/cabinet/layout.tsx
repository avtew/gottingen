import Aside from "@/components/Aside";

export default function CabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-cols-[240px_minmax(900px,_1fr)] p-2 h-[calc(100vh-48px)]'>
      <Aside />
      <main>
        {children}
      </main>
    </div>
  );
}
