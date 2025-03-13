// 'use client';
//
// import { Grid, GridCell, GridCross } from '@/components/ui/grid';
// import { motion } from 'framer-motion';
// import React from 'react';
// import { useMouse } from '@uidotdev/usehooks';
//
// export default function AboutSection() {
//   const [mouse, ref] = useMouse();
//   const [cursorText, setCursorText] = React.useState('');
//   const [cursorVariant, setCursorVariant] = React.useState('default');
//
//   let mouseXPosition = 0;
//   let mouseYPosition = 0;
//
//   if (mouse.x !== null) {
//     mouseXPosition = mouse.x;
//   }
//
//   if (mouse.y !== null) {
//     mouseYPosition = mouse.y;
//   }
//
//   const variants = {
//     default: {
//       opacity: 1,
//       height: 10,
//       width: 10,
//       fontSize: '16px',
//       backgroundColor: '#1e91d6',
//       x: mouseXPosition,
//       y: mouseYPosition,
//       transition: {
//         type: 'spring',
//         mass: 0.6,
//       },
//     },
//     project: {
//       opacity: 1,
//       // backgroundColor: "rgba(255, 255, 255, 0.6)",
//       backgroundColor: '#fff',
//       color: '#000',
//       height: 80,
//       width: 80,
//       fontSize: '18px',
//       x: mouseXPosition - 32,
//       y: mouseYPosition - 32,
//     },
//     contact: {
//       opacity: 1,
//       backgroundColor: '#FFBCBC',
//       color: '#000',
//       height: 64,
//       width: 64,
//       fontSize: '32px',
//       x: mouseXPosition - 48,
//       y: mouseYPosition - 48,
//     },
//   };
//
//   const spring = {
//     type: 'spring',
//     stiffness: 500,
//     damping: 28,
//   };
//
//   function projectEnter(event) {
//     setCursorText('View');
//     setCursorVariant('project');
//   }
//
//   function projectLeave(event) {
//     setCursorText('');
//     setCursorVariant('default');
//   }
//
//   function contactEnter(event) {
//     setCursorText('👋');
//     setCursorVariant('contact');
//   }
//
//   function contactLeave(event) {
//     setCursorText('');
//     setCursorVariant('default');
//   }
//
//   return (
//     <Grid
//       columns={2}
//       aspectRatio
//       className="relative overflow-hidden"
//     >
//       <motion.div
//         variants={variants}
//         className="circle"
//         animate={cursorVariant}
//         transition={spring}
//       >
//         <span className="cursorText">{cursorText}</span>
//       </motion.div>
//       <GridCross column={1} row={1} />
//       <GridCross column={-1} row={-1} />
//       <GridCell>
//         <h2 className="text-6xl">About me.</h2>
//       </GridCell>
//     </Grid>
//   );
// }
