'use client'
import Button from "@/components/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.home}>
        <div className={styles.about}>
          <h1 className={styles.aboutTitle}> 
            Explorando os céus com a AeroDesign ITA 
            <p className={styles.aboutDescription}> 
              Bem-vindos à Aero, uma equipe apaixonada de estudantes de engenharia prósperos em aeromodelismo. 
              Nossa jornada é de inovação, trabalho em equipe e pura determinação. 
              Voe conosco!
            </p>
          </h1>
          <Button onClick={() => router.push('/sobre')}style={{backgroundColor:'var(--secondary-blue)',fontSize:'2vw'}}>
            Saiba mais
          </Button>
          <div className={styles.aboutImageContainer}>
            <Image
              src="/east/east2.jpeg"
              alt="About Image"
              className={styles.aboutImage}
              fill
            />
          </div>
        </div>
        <div className={styles.sponsors}>
          <p className={styles.sponsorsTitle}> Quem apoia a nossa missão </p> 
          <div className={styles.sponsorsLogoContainer}>
            <Image src="/patrocinio/itaex.png" alt="itaex" sizes="100vw" width={0} height={0}   className={styles.sponsorsLogo}/>
            <Image src="/patrocinio/onshape.png" alt="onshape"   sizes="100vw" width={0} height={0}   className={styles.sponsorsLogo}/>
            <Image src="/patrocinio/simscale.svg" alt="simscale"  sizes="100vw" width={0} height={0}  className={styles.sponsorsLogo}/>
            <Image src="/patrocinio/feng.jpg" alt="feng"  sizes="100vw" width={0} height={0}  className={styles.sponsorsLogo}/>
          </div>
          <Button onClick={() => router.push('/patrocinio')} style={{backgroundColor:'var(--secondary-yellow)',fontSize:'1.5vw'}}>
            Patrocinadores
          </Button>
        </div>
        <div>
          Hello
        </div>
    </main>
  );
}