"use client";

import { motion } from "framer-motion";

const AnimatedLine = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 1024'
    fill='none'
    {...props}>
    <defs>
      <linearGradient
        id='gradientA'
        x1='1.5'
        x2='1.5'
        y1='0'
        y2='200'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#1b1b1b' />
        <stop offset='1' stopColor='#1b1b1b' />
      </linearGradient>
      <linearGradient
        id='gradientB'
        x1='13.5'
        x2='13.5'
        y1='0'
        y2='200'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#1B1B1B' />
        <stop offset='1' stopColor='#1B1B1B' stopOpacity='0' />
      </linearGradient>
    </defs>
    <g strokeDasharray='5 5'>
      <g stroke='#1B1B1B' strokeOpacity={0.4}>
        <path d='M1 0v1024M13 0v1024' />
      </g>
      <g strokeOpacity={0.8}>
        <motion.path
          d='M1 0v1024'
          stroke='url(#gradientA)'
          strokeDasharray='5 5'
          initial={{ y: 0 }}
          animate={{ y: [0, 824] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <motion.path
          d='M13 0v1024'
          stroke='url(#gradientB)'
          strokeDasharray='5 5'
          initial={{ y: 0 }}
          animate={{ y: [0, 824] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </g>
    </g>
  </svg>
);

export default AnimatedLine;
