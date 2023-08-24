import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-4">
      <div className="relative h-10 w-10 animate-spin">
        <Image alt="Akili" src="/cog.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">
        Akili is contemplating a response...
      </p>
    </div>
  );
};

export default Loader;
