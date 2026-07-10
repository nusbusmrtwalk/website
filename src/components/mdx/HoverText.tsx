import { Popover } from "@base-ui/react";
import styles from "./HoverText.module.css";

function HoverText({
	children,
	text,
	lower,
}: {
	children: React.ReactNode;
	text: string;
	lower?: boolean;
}) {
	return (
		<Popover.Root>
			<Popover.Trigger
				openOnHover
				delay={100}
				className={styles.Button + " " + (lower ? styles.lower : "")}
			>
				{children}
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Positioner sideOffset={8} side="top">
					<Popover.Popup className={styles.Popup}>
						<Popover.Arrow className={styles.Arrow} />
						{/* <Popover.Title className={styles.Title}>
							Notifications
						</Popover.Title> */}
						<Popover.Description className={styles.Description}>
							{text}
						</Popover.Description>
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
}
export default HoverText;
