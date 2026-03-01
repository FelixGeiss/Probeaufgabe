import VisitorCounter from "@/components/shared/VisitorCounter";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-zinc-900 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
        <VisitorCounter />
      </div>
    </footer>
  );
}
