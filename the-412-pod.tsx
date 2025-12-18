// import Head from 'next/head';
// import Link from 'next/link';
// import { useEffect, useRef } from 'react';
// import VanillaTilt from 'vanilla-tilt';
// import styles from '../styles/the412Podcast.module.css';
// import Heading from '@/components/Heading';
// import Paragraph from '@/components/Paragraph';
// import { Crimson_Text } from 'next/font/google';
// import Spacer from '@/components/Spacer';

// const numbers = Crimson_Text({
//   subsets: ['latin'],
//   weight: ['400'],
//   style: ['normal'],
// });

// const The412Podcast = () => {
//   const stripesRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     stripesRef.current.forEach(el => {
//       if (!el) return;
//       if ((el as any).vanillaTilt) return;

//       VanillaTilt.init(el, {
//         max: 6,
//         speed: 600,
//         scale: 1.02,
//         perspective: 1000,
//         glare: true,
//         'max-glare': 0.5,
//       });
//     });

//     return () => {
//       stripesRef.current.forEach(el => {
//         (el as any)?.vanillaTilt?.destroy();
//       });
//     };
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>The Ephesians 4:12 Call</title>
//         <meta
//           name='description'
//           content='The Ephesians 4:12 Call to Equip the Saints for the Work of the ministry and build up the Body is the mission of Operation 412.'
//         />
//       </Head>

//       {/* ================= MOBILE ================= */}
//       {/* No VanillaTilt. Just links. */}
//       <div className={styles.mobileContainer}>
//         <Link
//           href='/the-equipping'
//           className={styles.link}>
//           <div className={styles.stripe}>
//             <Paragraph style={{ fontStyle: 'italic' }}>equip the saints</Paragraph>
//           </div>
//         </Link>

//         <Link
//           href='/the-work'
//           className={styles.link}>
//           <div className={styles.stripe}>
//             <Paragraph style={{ fontStyle: 'italic' }}>for works of Ministry</Paragraph>
//           </div>
//         </Link>

//         <Link
//           href='/the-building'
//           className={styles.link}>
//           <div className={styles.stripe}>
//             <Paragraph style={{ fontStyle: 'italic' }}>and to build the Body</Paragraph>
//           </div>
//         </Link>
//       </div>

//       {/* DESKTOP */}
//       <div className={styles.container}>
//         {/* STRIPE 1 */}
//         <Link
//           href='/the-equipping'
//           className={styles.link}>
//           <div
//             ref={el => {
//               if (el) stripesRef.current[0] = el;
//             }}
//             className={styles.stripe}>
//             <div className={styles.ephesians}>
//               <Heading level='huge'>
//                 <span>T</span>
//               </Heading>
//               <Heading level='huge'>
//                 <span>H</span>
//               </Heading>
//               <Heading level='huge'>
//                 <span>E</span>
//               </Heading>
//             </div>
//             <Paragraph style={{ fontStyle: 'italic' }}>
//               <span className='mini'>Equip the Saints</span>
//             </Paragraph>
//           </div>
//         </Link>

//         {/* STRIPE 2 */}
//         <Link
//           href='/the-work'
//           className={styles.link}>
//           <div
//             ref={el => {
//               if (el) stripesRef.current[1] = el;
//             }}
//             className={styles.stripe}>
//             <div className={` ${styles.ephesians} ${numbers.className} `}>
//               <Heading level='huge'>
//                 <span>4</span>
//               </Heading>
//               <Heading level='huge'>
//                 <span>1</span>
//               </Heading>
//               <Heading level='huge'>
//                 <span>2</span>
//               </Heading>
//             </div>
//             <Paragraph style={{ fontStyle: 'italic' }}>
//               <span className='mini'>for Works of Ministry</span>
//             </Paragraph>
//           </div>
//         </Link>

//         {/* STRIPE 3 */}
//         <Link
//           href='/the-building'
//           className={styles.link}>
//           <div
//             ref={el => {
//               if (el) stripesRef.current[2] = el;
//             }}
//             className={styles.stripe}>
//             <div className={styles.ephesians}>
//               <Heading level='huge'>
//                 ARMY
//               </Heading>
//             </div>
//             <Paragraph style={{ fontStyle: 'italic' }}>
//               <span className='mini'>and to Build the Body</span>
//             </Paragraph>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default The412Podcast;
