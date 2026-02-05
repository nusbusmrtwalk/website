/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import club1 from "../../assets/img/club-1.webp";
import club3 from "../../assets/img/club-3.webp";
import club6 from "../../assets/img/club-6.webp";
import club8 from "../../assets/img/club-8-c.jpg";
import club9 from "../../assets/img/club-9.webp";
import styles from "./Hero.module.css";

const IMAGES = [club1, club3, club6, club8, club9];

const IMAGES_SET = [...IMAGES];
function Hero() {
	const { scrollY } = useScroll();

	const y = useTransform(scrollY, [0, 500], [-12, 12]);
	const [currentImage, setCurrentImage] = useState(0);
	// 1 for forward, -1 for backward, 0 for no movement
	const [moveDirection, setMoveDirection] = useState(0);

	const [isCycling, setIsCycling] = useState(true);

	// Automatically cycle through images every 5 seconds
	useEffect(() => {
		if (!isCycling) return;

		const interval = setInterval(() => {
			setCurrentImage((prevImage) => (prevImage + 1) % IMAGES.length);
			setMoveDirection(1);
		}, 5000);

		return () => clearInterval(interval);
	}, [isCycling]);

	// const pauseCycling = useCallback(() => {
	// 	setIsCycling(false);
	// }, []);

	// const resumeCycling = useCallback(() => {
	// 	setIsCycling(true);
	// }, []);

	return (
		<div className={styles.pageWrapper}>
			<div className={styles.carouselWrapper}>
				<div
					className={styles.carousel}
					// onMouseEnter={pauseCycling}
					// onMouseLeave={resumeCycling}
				>
					{IMAGES_SET.map((src, index) => (
						<motion.div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={`${src}-${index}`}
							className={styles.carouselImageWrapper}
							initial={{
								rotate: 2,
								scale: 1.2,
							}}
							animate={{
								x:
									// if pass center point, loop to other side
									index - currentImage > IMAGES.length / 2
										? `calc(var(--carousel-width) * 1.1 * ${index - currentImage - IMAGES.length})`
										: index - currentImage < -IMAGES.length / 2
											? `calc(var(--carousel-width) * 1.1 * ${index - currentImage + IMAGES.length})`
											: `calc(var(--carousel-width) * 1.1 * ${index - currentImage})`,
							}}
							transition={{ type: "spring", stiffness: 300, damping: 60 }}
						>
							<motion.img
								src={src.src}
								alt={`Club activities ${index + 1}`}
								className={styles.carouselImage}
								initial={{
									opacity: index === 0 ? 1 : 0,
									scale: 1.1,
									rotate: -2,
								}}
								animate={{
									x:
										index - currentImage > IMAGES.length / 2
											? `calc(var(--carousel-width) * -1.1 * ${index - currentImage - IMAGES.length})`
											: index - currentImage < -IMAGES.length / 2
												? `calc(var(--carousel-width) * -1.1 * ${index - currentImage + IMAGES.length})`
												: `calc(var(--carousel-width) * -1.1 * ${index - currentImage})`,
									opacity:
										index === currentImage ||
										index ===
											(currentImage - moveDirection + IMAGES.length) %
												IMAGES.length
											? 1
											: 0,
								}}
								style={{ y }}
								transition={{
									default: { type: "spring", stiffness: 300, damping: 60 },
									opacity: { duration: 0 },
								}}
							/>
						</motion.div>
					))}
				</div>
			</div>
			<div className={styles.textContainer}>
				<h1>NUS Bus, MRT & Walk Club</h1>
				<p className={styles.tagline}>
					Find your <span className={styles.gradient}>place</span>
				</p>
				<p className={styles.description}>
					From Tuas to Changi, we explore every corner of Singapore.
				</p>
				<a
					rel="noopener"
					target="_blank"
					href="https://t.me/nusbusmrtwalk"
					className={styles.cta}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
					>
						<title>Telegram icon</title>
						<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
						<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
					</svg>
					Join the channel
				</a>
			</div>
		</div>
	);
}
export default Hero;
