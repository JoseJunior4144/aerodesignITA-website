'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../Button';
import styles from './index.module.css';

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <div className={styles.top}>
                <div className={styles.topBackground}>
                    <Image
                        src="/static/lev2015/vermelhinho.jpg"
                        alt="Background Image"
                        style={{objectFit:'cover', objectPosition:'100% 70%'}}
                        priority
                        fill
                    />
                </div>
                <div className={styles.topLogoContainer}>
                    <div className={styles.topLogoLayout3}>
                        <div className={styles.topLogoLayout2}>
                            <div className={styles.topLogoLayout1}>
                                <img src="/logos/aerobranco.png" className={styles.topLogo} loading="eager"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottomLogoContainer}>
                    <img src="/logos/ita.png" className={styles.bottomLogo} decoding="sync" loading="eager" />
                </div>
                <div className={styles.bottomNav}>
                <Link href='/' className={`${pathname === '/' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Início</Link>
                    <Link href='/sobre' className={`${pathname === '/sobre' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Sobre</Link>
                    <Link href='/competicao' className={`${pathname === '/competicao' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Competição</Link>
                    <Link href='/galeria' className={`${pathname === '/galeria' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Galeria</Link>
                    <Link href='/membros' className={`${pathname === '/membros' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Membros</Link>
                    <Link href='/patrocinio' className={`${pathname === '/patrocinio' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Apoio/Patrocínio</Link>
                    <Link href='/contato' className={`${pathname === '/contato' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Contato</Link>
                    <Link href='/blog' className={`${pathname === '/blog' ? styles.bottomNavIconsActual : styles.bottomNavIcons}`}>Blog</Link>
                </div>
                <div className={styles.bottomButtonContainer}>
                    <Button className={styles.bottomButton1}>Botão1</Button>
                    <Button className={styles.bottomButton2}>Botão2</Button>
                </div>
            </div>
        </nav>
    );
}
