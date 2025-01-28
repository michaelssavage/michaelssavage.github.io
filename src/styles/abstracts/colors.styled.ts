const common = {
	button: "#716eef",
	header: "#ca1551",
	btnBg: "#e35103",
	extBtnBg: "#009fd1",
	extBtnBgHover: "#027a9e",
	hoverText: "#515151",
	mint: "#329a51",
	on: "#fb4d3d",
	off: "#3d89fb",
	moon: "#f0f0f0",
	sun: "#ffe26d",
	code: "#d63384",
	secondary: "#6c757d",
	highlight: "#009fd199",
	weather: "#75deb1",
	lightenLink: "#dd648a70",
	link: "#dd648a",
};

export const lightTheme = {
	colors: {
		...common,
		toggle: "#070f06",
		card: "#FFFCF8",
		hoverCard: "#FAF7F2",
		text: "#2D241F",
		secondaryText: "#655b52",
		icon: "#655b52",
		background: "#F5F1EA",
		underlined: "#C4704F",
	},
};

export const darkTheme = {
	colors: {
		...common,
		toggle: "#009fd1",
		card: "#1A1511",
		hoverCard: "#251E19",
		text: "#F2E9E1",
		secondaryText: "#9C8E83",
		icon: "#9C8E83",
		background: "#0F0C0A",
		underlined: "#E8916F",
	},
};

export type MyTheme = typeof lightTheme;

// const projects = [
//   { main: "#FC766AFF", bg: "#5B84B1FF" },
//   { main: "#755139FF", bg: "#F2EDD7FF" },
//   { main: "#2C5F2D", bg: "#97BC62FF" },
//   { main: "#00203FFF", bg: "#ADEFD1FF" },
//   { main: "#606060FF", bg: "#D6ED17FF" },
//   { main: "#5F4B8BFF", bg: "#E69A8DFF" },
//   { main: "#42EADDFF", bg: "#CDB599FF" },
//   { main: "#435E55FF", bg: "#D64161FF" },
//   { main: "#D198C5FF", bg: "#E0C568FF" },
// ];
