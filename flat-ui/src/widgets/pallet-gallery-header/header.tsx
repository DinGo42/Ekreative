'use client'
import Link from 'next/link';
import { ColorTypeSelector } from './select-color-type/select-color-type';
import { FC, useState } from 'react';

export const PalletGalleryHeader:FC = () => {
  const [isSoundPlay,setSoundPlay] = useState(!!localStorage.getItem('isSoundPlay'))
  localStorage.setItem('isSoundPlay',isSoundPlay.toString())
  return (
  <header className="w-full flex items-center justify-between bg-white text-black p-3">
    <Link href={'/'} className="flex items-center gap-3">
      <span>←</span>
      <span>Back</span>
    </Link>
    <ColorTypeSelector />
    <button onClick={()=>setSoundPlay((prev)=>!prev)}>Sound {isSoundPlay?'ON':'OFF'}</button>
  </header>
)}
