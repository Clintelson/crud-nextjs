
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <main className="min-h-[calc(100vh-80px)] overflow-x-hidden">{children}</main>
      </div>
    );
  }