<template>
	<div id="body">
		<aside>
			<div id="title">
				<h3>BoardGameSeek</h3>
			</div>
			<ul>
				<li>
					<router-link to="/">DASHBOARD</router-link>
				</li>
				<li>
					<router-link to="/recommender">RECOMMENDER</router-link>
				</li>
				<li>
					<router-link to="/about">ABOUT</router-link>
				</li>
			</ul>
		</aside>
		<main>
			<section id="infoBar"></section>
			<router-view/>
		</main>
	</div>
</template>

<script>
// import Dashboard from './components/Dashboard.vue';

export default {
	name: 'App',
	// components: {
	// 	Dashboard
	// }
}

</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
	font-family:  Arial, Helvetica, sans-serif;
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

/* Set up grid for entire dashboard */
#body {
  display: grid;
  grid-template-columns: 200px auto;
}

/* Brown nav window */
aside {
  background-color: #212121;
  color: #ffffff;
  min-height: 100vh;
  padding: 20px 0px;
}

/* Brown nav window title - BoardGameSeek */
aside > #title {
  margin: 0 15px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ffffff;
}

/* Navigation UL */
aside > ul {
  list-style-type: none;
  padding: 40px 20px;
  font-size: 14px;
}

aside > ul > li {
  padding-bottom: 30px;
}

/* Main window styles */

main {
  display: grid;
  grid-row-gap: 20px;
  grid-template-rows: 35px 150px 300px 200px;
  background-color: #f4f3ef; 
  min-height: 100vh;
}

#infoBar {
  background-color: #f4f8ef;
  border-bottom: 1px solid #dadada;
}


</style>
