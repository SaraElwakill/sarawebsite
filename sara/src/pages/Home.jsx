import React from 'react'
import Hero from '../components/hero/Hero'
import Layout from '../components/layouts/Layout'


const Home = () => {
    return (
        <Layout>
            <Hero classs="hi" />
            <Hero classs="hi1" />
            <Hero classs="hi2" />
            <Hero classs="hi3" />
        </Layout>
    )
}

export default Home