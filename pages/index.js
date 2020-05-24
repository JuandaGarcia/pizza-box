import React from 'react'
import Head from 'next/head'
import '../css/styles.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Pizza box</title>
			</Head>
			<div className="container">
				<header>
					<img src="/img/logo.png" alt="logo" />
					<ul>
						<li>Productos</li>
						<li>Sobre nosotros</li>
						<li>Videos</li>
						<li>Donde comprar</li>
					</ul>
					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<img src="/img/basket.svg" alt="" />
						<div className="circle">1</div>
					</motion.button>
				</header>
				<div className="contenido">
					<div className="info">
						<h1>Lorem ipsum dolor sit amet, consectetur</h1>
						<div className="name">Pizza box</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
							aliquam, purus sit amet luctus venenatis, lectus magna fringilla
							urna.
						</p>
						<div className="price">$15.98</div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<img src="/img/basket-white.svg" alt="" />
							<span>Añadir al carrito</span>
						</motion.button>
					</div>
					<div className="img-container">
						<img src="/img/pizza.jpg" alt="pizza" />
					</div>
					<div className="social-buttons">
						<div className="links">
							<a href="" target="_blank">
								Instagram
							</a>
							<a href="" target="_blank">
								Facebook
							</a>
						</div>
						<div className="btns">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="btn-l"
							>
								<img src="/img/arrow-l.svg" alt="" />
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="btn-r"
							>
								<img src="/img/arrow-r.svg" alt="" />
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default index
