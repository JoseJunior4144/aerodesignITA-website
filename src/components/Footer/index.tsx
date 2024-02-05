import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.aero}>
                <Link href="/">
                    <Image src="/logos/aerobranco.png" alt="AeroDesign" sizes="100vw" width={0} height={0} style={{width:'100%',height:'auto'}}/>
                </Link>
            </div>
            <div className={styles.location}>
                <Link target="_blank" href="https://www.google.com/maps/place/R.+H8A+-+Campus+do+CTA,+S%C3%A3o+Jos%C3%A9+dos+Campos+-+SP,+12228-460/data=!4m2!3m1!1s0x94cc4a50ca7dbf13:0x10d27606a481a11c?sa=X&ved=2ahUKEwiBqJ68gpWEAxXgJ7kGHUuiAmMQ8gF6BAgPEAA" style={{textDecoration:'none', color:'white'}}>
                    <div>Rua H8A - Campus do CTA </div>
                    <div>São José dos Campos - SP, 12228-460</div> 
                </Link>
            </div>
            <div className={styles.contact}>
                <Link href="/contato" style={{textDecoration:'none', color:'white'}}>Entre em contato</Link>
                <div className={styles.contactInfo}>
                    <div>aerodesign.ita.br@gmail.com</div>
                    <div>+55 12 9999-9999</div>
                    <div className={styles.contactMedia}>
                        <Link target="_blank" href="https://www.instagram.com/ita_aerodesign/">
                            <Image src="/logos/instagram.png" alt="Instagram" sizes="100vw" width={0} height={0} style={{width:'2.5vw',height:'auto'}}/>
                        </Link>
                        <Link target="_blank" href="https://www.facebook.com/AeroDesignITA/?locale=pt_BR">
                            <Image src="/logos/facebook.png" alt="Facebook" sizes="100vw" width={0} height={0} style={{width:'2.5vw',height:'auto'}}/>
                        </Link>
                        <Link target="_blank" href="https://www.youtube.com/channel/UCm3-bYUmhmTEV3QufvYOdlA">
                            <Image src="/logos/youtube.png" alt="Youtube" sizes="100vw" width={0} height={0} style={{width:'2.5vw',height:'auto'}}/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.line}/>
            <div className={styles.copyright}>
                <p> &copy; Copyright 2024 ITA Júnior - Todos os direitos reservados - Feito por ITA Júnior</p>
                <Link target="_blank" href="https://itajunior.com.br">
                    <Image src="/logos/itajr.png" alt="ITA Jr." sizes="100vw" width={0} height={0} style={{width:'3vw',height:'auto'}}/>
                </Link>
            </div>
            <div className={styles.developer}>
                <p> Desenvolvido por Gilvan Jr.</p>
            </div>
        </footer>
    )
}