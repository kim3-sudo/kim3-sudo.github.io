import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Footer from "../components/footer"
import FrcBanner from "../components/frc-banner"
import LatestPost from "../components/latest-post"
import NavigationSpacer from "../components/navigation-spacer"
import RevealAnimation from "../components/reveal-animation"
import Seo from "../components/seo"

class Home extends React.Component {
    render() {
        return (
            <div className="main-page h-100">
                <Seo title="Home" />
                <section id="intro" className="container-fluid main-mh-100 mb-5">
                    <NavigationSpacer />
                    <div className="container h-100">
                        <div className="row h-50 justify-content-center">
                            <div className="col-lg-7 col-md-6">
                                <h1 className="main-reveal-text-short">You might know me as Sejin.<br />I program computers.</h1>
                                <div className="main-fade-in-animation">
                                    <p>I am a software developer and database engineer at Kenyon College.</p>
                                    <p>In my free time, I play with machine learning, data analysis, sports analytics, and really, really dumb projects.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-7 col-8">
                                <div className="main-fade-in-animation-delay-1">
                                    <StaticImage width={300} height={300} className="main-fit-element" src="../img/portrait512.jpg" alt="Portrait" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-1">
                                <div className="main-fade-in-animation-delay-2">
                                    <LatestPost />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="statprojects" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Just some of my recent statistical analysis projects.</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">NCAA Basketball Playoff Prediction Analysis</p>
                                                    <p className="card-text m-0">The ability to predict playoff results in the NCAA Men’s Basketball tournament in March is a question of obvious interest to coaches and fans alike, and for this research, we leveraged a machine learning approach to create a predictive model based on prior years performance, by team.</p>
                                                    <p className="card-text m-0"><a aria-label="ncaamarchmadness" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/ncaa-basketball-playoff-prediction-analysis">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">PLL Data Analysis</p>
                                                    <p className="card-text m-0">This investigation advances the hypothesis that groundballs can be used to predict player success on the field by using groundballs in their relation to scoring and to team performance. Machine learning models are developed to learn the concept: Within a game, what is the likelihood that any given player will win a groundball <em>k</em> times?</p>
                                                    <p className="card-text m-0"><a aria-label="plldata" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/pll-data-analysis">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">NFL Data Analysis</p>
                                                    <p className="card-text m-0">In this study, we used nonparametric methods to evaluate NFL kicks and throws by stadium. The motivation for this study was a previous study on NFL kicks and passes based on weather and stadium location, where the assumption had been that altitude changes the throw and kick distances of footballs.</p>
                                                    <p className="card-text m-0"><a aria-label="nfldata" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/nfl-data-analysis">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="devprojects" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Just some of my recent development projects.</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">Luuply</p>
                                                    <p className="card-text m-0">Luuply was created to help high school athletes and their parents make more informed decisions during the recruiting process.</p>
                                                    <p className="card-text m-0"><a aria-label="Luuply" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/luuply">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">Mount Vernon Water</p>
                                                    <p className="card-text m-0">This project was contracted by the Department of Water and Wastewater in Mount Vernon, Ohio, US. They had decades worth of consumer data stored in their online system and needed to switch platforms because of financial and usability reasons that hindered their ability to use their existing platform.</p>
                                                    <p className="card-text m-0"><a aria-label="mountvernonwater" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/mvwater">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="publicpackages" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="d-inline-block">
                                    <RevealAnimation animationClass="main-reveal-text">
                                        <h1>Public packages that I maintain.</h1>
                                    </RevealAnimation>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">expdesigndata</p>
                                                    <p className="card-text m-0">Montgomery <em>Design and Analysis of Experiments</em>, 10ed.</p>
                                                    <p className="card-text m-0"><a aria-label="expdesigndata" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/expdesigndata">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-4">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-fade-in-animation">
                                    <div className="card main-box main-color-surface">
                                        <div className="row align-items-center justify-content-center g-0">
                                            <div className="col-md-7">
                                                <div className="card-body">
                                                    <p className="h5 card-title">nsm3data</p>
                                                    <p className="card-text m-0">nsm3data is a data package that provides datasets from the Hollander <em>Nonparametric Statistical Methods</em> textbook, 3ed.</p>
                                                    <p className="card-text m-0"><a aria-label="mountvernonwater" target="_blank" rel="noopener noreferrer" href="../../content/2021/12/24/nsm3data">Read More</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="hobbies" className="container-fluid mb-5">
                    <div className="container h-100">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="technologies" className="container-fluid mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h1>Technologies I Know</h1>
                                </RevealAnimation>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h2>Data Analysis</h2>
                                </RevealAnimation>
                            </div>
                        </div>
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="col-md-7 col-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/Rlogo.png" alt="R" />
                                        <p>R</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1200px-Python-logo-notext.svg_-1024x1024.png" alt="Python with Pandas" />
                                        <p>Python with Pandas</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1_iDQvKoz7gGHc6YXqvqWWZQ.png" alt="TensorFlow and Keras" />
                                        <p>TensorFlow and Keras</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/Tableau-Emblem-1024x576.png" alt="Tableau" />
                                        <p>Tableau</p>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h2>Data Analysis</h2>
                                </RevealAnimation>
                            </div>
                        </div>
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="col-md-7 col-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1822px-ISO_C_Logo.svg_-267x300.png" alt="C Plus Plus 14" />
                                        <p>C++ 14</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/Csharp_Logo-edited.png" alt="C Sharp" />
                                        <p>C#</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/swift-og-1024x1024.png" alt="Swift" />
                                        <p>Swift</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/PHP-logo.svg_-1024x553.png" alt="PHP" />
                                        <p>PHP</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1200px-Python-logo-notext.svg_-1024x1024.png" alt="Python 3" />
                                        <p>Python 3</p>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <h2>Database Systems</h2>
                                </RevealAnimation>
                            </div>
                        </div>
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="col-md-7 col-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/52232852-e2c4f780-28bd-11e9-835d-1e3cf3e43888.png" alt="Microsoft SQL Server 2019" />
                                        <p>Microsoft SQL Server 2019</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1200px-Oracle_SQL_Developer_logo.svg_-902x1024.png" alt="Oracle PL/SQL" />
                                        <p>Oracle PL/SQL</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/1200px-MySQL_logo.svg_-1024x710.png" alt="MySQL 5" />
                                        <p>MySQL 5</p>
                                    </div>
                                    <div className="col-sm-4 col-5">
                                        <StaticImage width={200} height={200} className="main-badge" src="../img/Postgresql_elephant.svg_.png" alt="PostgreSQL" />
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="d-inline-block">
                                <RevealAnimation animationClass="main-reveal-text">
                                    <p className="h5">Operating Systems</p>
                                </RevealAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <RevealAnimation animationClass="main-fade-in-animation">
                            <div className="col-lg-12 col-12">
                                <div className="row justify-content-center">
                                    <div className="col-sm-4 col-4">
                                        <h3>RHEL-Type Linux</h3>
                                        <ul>
                                            <li>Red Hat Enterprise Linux</li>
                                            <li>Fedora Linux</li>
                                            <li>CentOS Linux</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-4">
                                        <h3>Debian-Type Linux</h3>
                                        <ul>
                                            <li>Debian Linux</li>
                                            <li>Ubuntu Linux</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-4">
                                        <h3>Windows</h3>
                                        <ul>
                                            <li>Windows 7-10</li>
                                            <li>Windows Server 2012</li>
                                            <li>Windows Server 2016</li>
                                            <li>Windows Server 2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home
