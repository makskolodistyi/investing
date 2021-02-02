import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-works-angle.svg?v=2020-11-06T16:36:54.345Z) center center/cover repeat scroll padding-box"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 32px 0px 32px"
				min-width="auto"
			/>
			<Text
				color="--light"
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
			>
				TOUCH AND ESCAPE FOR US
			</Text>
			<Text
				font="--lead"
				color="--light"
				margin="10px 0px 35px 0px"
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
			>
				we use cookies on our website
			</Text>
			<Link
				href="http://ravikanthj.com/"
				text-decoration-line="initial"
				color="--dark"
				background="--color-red"
				padding="12px 24px 12px 24px"
				font="--base"
				letter-spacing="0.5px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				link-text-decoration-line="underline"
				link-font="normal 300 16px/1.5 --fontFamily-sansHeavy"
			>
				<Span
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					CLICK HERE
				</Span>
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});