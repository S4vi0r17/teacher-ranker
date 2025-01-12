'use client';

import Image from 'next/image';

const inputStyles = `
  .animated-input {
    position: relative;
  }
  .animated-input::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #FF9254;
    transition: width 0.3s ease, left 0.3s ease;
  }
  .animated-input:focus-within::after {
    width: 100%;
    left: 0;
  }
`;

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style jsx>{inputStyles}</style>

      <div className="min-h-screen w-full relative bg-[#f6f6ee] overflow-hidden">
        {/* Background circles */}
        <div className="absolute top-0 right-16 w-44 h-44 md:w-64 md:h-64 bg-[#FFA54E] rounded-full opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-40 md:right-48 w-24 h-24 md:w-40 md:h-40 bg-[#FFC941] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-24 left-20 w-64 h-64 bg-[#FFA54E] rounded-full opacity-50 -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 left-52 w-40 h-40 bg-[#FFC941] rounded-full opacity-30 -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-48">
          {/* Left side - Logo and tagline */}
          <div className="text-center lg:text-left flex flex-col items-center">
            <div className="mx-auto lg:mx-0 w-48 h-48 rounded-full bg-[rgba(188,107,242,0.16)] flex items-center justify-center mb-6">
              <Image
                src={`/teacher-ranker-logo.svg`}
                alt="Teacher Ranker Logo"
                width={240}
                height={240}
                className="rounded-full"
              />
            </div>
            <h1 className="text-[#FFA54E] text-3xl font-bold mb-4">
              Teacher Ranker
            </h1>
            <p className="text-[#BC6BF2] opacity-75 text-xl max-w-md font-semibold text-center mt-10">
              Califica a tus profesores, mejora tu aprendizaje
            </p>
          </div>

          {/* Right side - Sign up form */}
          <div className="w-full max-w-lg z-10">{children}</div>
        </div>
      </div>
    </>
  );
}
