import { ArrowRight, RotateCcw, Split } from "lucide-react";
import styles from "./Indicator.module.css";

// g= global direction indicator
// l = local direction indicator
// s = service pattern indicator
function Indicator({
	g,
	l,
	s,
	plural,
	children,
	short,
}: {
	g?: boolean;
	l?: boolean;
	s?: boolean;
	plural?: boolean;
	short?: boolean;
	children?: React.ReactNode;
}) {
	return (
		<span
			className={`${styles.Indicator} ${g ? styles.g : ""} ${l ? styles.l : ""} ${s ? styles.s : ""}`}
		>
			<span className={styles.nowrap}>
				{g && <RotateCcw strokeWidth={3} />}
				{l && <ArrowRight strokeWidth={3} />}
				{s && <Split strokeWidth={3} />}&nbsp;
				{!children && (
					<>
						{g && "global"}
						{l && "local"}
						{s && "service"}
					</>
				)}
			</span>
			{children ? (
				children
			) : (
				<>
					{g && " direction"}
					{l && " direction"}
					{s && " pattern"}
					{!short && " indicator"}
					{plural && "s"}
				</>
			)}
		</span>
	);
}
export default Indicator;
