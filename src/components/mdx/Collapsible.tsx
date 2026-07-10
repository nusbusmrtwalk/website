import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { ChevronRightIcon } from "lucide-react";
import styles from "./Collapsible.module.css";

export default function Collapsible({
	title,
	children,
}: {
	title: React.ReactNode;
	children: React.ReactNode;
}) {
	return (
		<CollapsiblePrimitive.Root className={styles.Collapsible}>
			<CollapsiblePrimitive.Trigger className={styles.Trigger}>
				<ChevronRightIcon className={styles.Icon} />
				<span>{title}</span>
			</CollapsiblePrimitive.Trigger>
			<CollapsiblePrimitive.Panel className={styles.Panel}>
				<div className={styles.Content}>{children}</div>
			</CollapsiblePrimitive.Panel>
		</CollapsiblePrimitive.Root>
	);
}

export function CaretRightIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 16 16"
			fill="currentColor"
			{...props}
			style={{ display: "block", ...props.style }}
		>
			<title>caret right</title>
			<path d="M6 12V4l4.5 4z" />
		</svg>
	);
}
