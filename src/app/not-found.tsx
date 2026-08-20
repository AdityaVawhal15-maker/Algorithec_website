import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="mb-8">
        <Logo variant="full" size="lg" />
      </div>
      <span className="text-sm font-semibold tracking-widest text-blue uppercase mb-3">
        404 Error
      </span>
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
        Page Not Found
      </h1>
      <p className="text-base md:text-lg text-graphite max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" variant="primary" size="md">
        Back to Home
      </Button>
    </div>
  );
}
