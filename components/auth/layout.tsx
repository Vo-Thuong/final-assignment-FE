export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex bg-gray-200 items-center justify-center">
        <span className="text-gray-500">Image placeholder</span>
      </div>

      <div className="flex items-center justify-center p-6">
        {children}
      </div>
    </div>
  );
}