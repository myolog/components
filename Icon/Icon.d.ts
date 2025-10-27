export interface BaseIconProps extends HTMLAttributes<"svg"> {
	"is:inline"?: boolean;
	title?: string;
	desc?: string;
	size?: number | string;
	width?: number | string;
	height?: number | string;
}