
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="h-dvh w-screen overflow-x-hidden">  
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full max-w-md mx-auto p-5">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}