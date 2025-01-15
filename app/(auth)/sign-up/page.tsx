'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignUpPage() {
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
    <div className="bg-white rounded-3xl shadow-lg py-8 px-14">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-3xl font-bold text-[#FFA54E] mb-8 text-center"
      >
        Crear una cuenta
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2 animated-input"
        >
          <Label htmlFor="username" className="text-lg">
            Usuario
          </Label>
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
              <Image
                src={`/gru.svg`}
                alt=""
                width={24}
                height={24}
                className="animate-spin"
              />
              <p className="text-xs text-[#FFA54E] -mt-1">¿Sin ideas?</p>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
          transition={{ delay: 0.8 }}
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="space-y-2 animated-input"
        >
          <Label htmlFor="confirm-password" className="text-lg">
            Confirmar contraseña
          </Label>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
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
        transition={{ delay: 1.1 }}
        className="mt-6 text-center text-gray-600"
      >
        ¿Ya tienes una cuenta?{' '}
        <Link
          href="/sign-in"
          className="text-[#BC6BF2] opacity-75 hover:underline"
        >
          Iniciar sesión
        </Link>
      </motion.p>
    </div>
  );
}
