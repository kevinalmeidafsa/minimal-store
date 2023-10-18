import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/images/nextjs.png"
          alt="Next.js Logo"
          width={200}
          height={160}
        />
        <h1>Next.js</h1>
        <p>A React Framework for Production</p>
      </div>
    </>
  );
}
