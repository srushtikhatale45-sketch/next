"use client";
import {c1, c2, c3, c4 } from '../assets';
import Layout from '../components/Navbar/Navbar';
import Image from 'next/image';
import { useRef } from 'react';
import Hero from './home/component/Hero';
export default function Home() {
  const imageRef =()=>{
    const imageRef=useRef(null);
    const handleScroll=()=>{
      imageRef.current?.scrollIntoView({
        behavior:'smooth',
        block:'center',
      });

    }
  };
  return (
    <>
    <Hero />
    </>
    
  );
}