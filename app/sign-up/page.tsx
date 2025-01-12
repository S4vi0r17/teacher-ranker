'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import Link from 'next/link';

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

export default function HomePage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

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
          <div className="w-full max-w-lg z-10">
            <div className="bg-white rounded-3xl shadow-lg py-8 px-14">
              <h2 className="text-3xl font-bold text-[#FFA54E] mb-8 text-center">
                Crear una cuenta
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 animated-input">
                  <Label htmlFor="username">Usuario</Label>
                  <div className="relative animated-input">
                    <Input
                      id="username"
                      type="text"
                      placeholder="Ingresar usuario"
                      className="border-0 border-b border-[#B87FE0] rounded-none bg-transparent px-0 focus-visible:ring-0 outline-none focus-visible:border-b transition-all duration-300 ease-in-out pr-12"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center -mt-1"
                      aria-label="User options"
                    >
                      <Image src={`/dice.svg`} alt="" width={24} height={24} />
                      <p className="text-xs text-[#FFA54E] -mt-1">
                        ¿Sin ideas?
                      </p>
                    </button>
                  </div>
                </div>

                <div className="space-y-2 animated-input">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative animated-input">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Ingresar correo electrónico"
                      className="border-0 border-b border-[#B87FE0] rounded-none bg-transparent px-0 focus-visible:ring-0 outline-none focus-visible:border-b transition-all duration-300 ease-in-out"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2 animated-input">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative animated-input">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Ingresar contraseña"
                      className="border-0 border-b border-[#B87FE0] rounded-none bg-transparent px-0 focus-visible:ring-0 outline-none focus-visible:border-b transition-all duration-300 ease-in-out"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2 animated-input">
                  <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                  <div className="relative animated-input">
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirmar contraseña"
                      className="border-0 border-b border-[#B87FE0] rounded-none bg-transparent px-0 focus-visible:ring-0 outline-none focus-visible:border-b transition-all duration-300 ease-in-out"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex pt-5">
                  <Button
                    type="submit"
                    className="w-1/2 mx-auto bg-[#FF9254] hover:bg-[#ff7f33] text-white py-5 rounded-xl text-lg"
                  >
                    Crear cuenta
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-center text-gray-600">
                ¿Ya tienes una cuenta?{' '}
                <Link
                  href="/login"
                  className="text-[#BC6BF2] opacity-75 hover:underline"
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
