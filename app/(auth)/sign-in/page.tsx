'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg py-8 px-14">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl text-center font-bold text-[#FF9254] mb-8"
      >
        Iniciar sesión
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Button
          variant="outline"
          className="w-full bg-[#f8f1ff] hover:bg-[#f3e6ff] text-black border-none h-12"
        >
          <Image
            src={`/google-icon.svg`}
            alt="Google logo"
            width={20}
            height={20}
            className="mr-2"
          />
          Continuar con Google
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative my-8"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-dashed border-[#FF9254]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="inline-block transform rotate-45 border border-[#FF9254] bg-[#FF9254] w-2 h-2 mr-2"></span>
          <span className="text-[#FF9254] flex-1"></span>
          <span className="inline-block transform rotate-45 border border-[#FF9254] bg-[#FF9254] w-2 h-2 ml-2"></span>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-2 animated-input"
        >
          <Label htmlFor="email" className="text-lg">
            Correo electrónico
          </Label>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="space-y-2 animated-input"
        >
          <Label htmlFor="password" className="text-lg">
            Contraseña
          </Label>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <Link
            href="/forgot-password"
            className="block text-right text-sm text-[#B87FE0] hover:underline"
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex pt-5"
        >
          <Button
            type="submit"
            className="w-1/2 mx-auto bg-[#FF9254] hover:bg-[#ff7f33] text-white py-5 rounded-xl text-lg"
          >
            Crear cuenta
          </Button>
        </motion.div>
      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-6 text-center text-gray-600"
      >
        ¿No tienes una cuenta?{' '}
        <Link href="/sign-up" className="text-[#B87FE0] hover:underline">
          Crear cuenta
        </Link>
      </motion.p>
    </div>
  );
}
