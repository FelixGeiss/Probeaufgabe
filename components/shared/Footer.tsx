import VisitorCounter from "@/components/shared/VisitorCounter";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <VisitorCounter />
      </div>
    </footer>
  );
}
