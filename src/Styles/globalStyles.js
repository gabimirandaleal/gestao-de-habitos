import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root{
		--dark-purple: #6C63FF;
		--light-purple: rgba(108, 99, 255, 0.8);
		--light-medium-blue: #50A8DA;
		--medium-green: #6FC070;
		--light-green: #A2EEA3;
		--dark-green:  #3E6A3F;
		--dark-red: #FF1010;
		--white: #ffffff;
		--light-yellow: #FBFFCB;
		--light-grey: #F8F8F8;
		--medium-grey: #EBEBEB;
		--dark-grey: #5b5b5b;
		--light-orange: #ff7e21;
		--dark-medium-green: #55A362;
		--light-medium-green: #A2EEA3;
		--dark-medium-red:  #FF4747;
		--light-light-red: #FFE1E1;
		--dark-orange: #FF9365;
		--light-light-orange: #FFE6D4;
		--light-blue: #A1CCFA;
		--dark-blue: #017AFE;
		--light-medium-blue: #50A8DA;
		--dark-yellow: #FDEA65;
	}


	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
`;

export default GlobalStyle;
