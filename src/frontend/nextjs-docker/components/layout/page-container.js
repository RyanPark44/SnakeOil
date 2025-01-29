export default function PageContainer({ children }) {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4">
      {children}
    </div>
  );
}
