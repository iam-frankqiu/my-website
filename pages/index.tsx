import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Avatar from '../components/avatar'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from '../components/Link'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>The personal website of Frank Qiu</title>
        </Head>
        <Container>

        <Avatar  name="Frank Qiu" picture="/frankqiu.jpeg"></Avatar>
          <div style={{wordBreak: 'break-all'}} className="ml-40 mr-40 pt-20 text-2xl">
            Hello. My name is Frank Qiu, obsessed with clean, reusable, and elegant code. I am a software engineer and open-source enthusiast who have craftsman's spirits and extreme pursuit of productivity to keep polishing my code and product by refactoring my code.I am also a member of nodejs contributing some code to <Link href="https://nodejs.org/en/">Node.js</Link> and <Link href="https://www.snowpack.dev/">Snowpack</Link>.
             I love to work on <Link href="https://github.com/iam-frankqiu" >GitHub</Link>, which makes me feel a lot of sense of achievement. You can follow me on <Link href="https://twitter.com/FrankQi73998203" >Twitter</Link> and we can have a talk.
             {/* <p className='mt-10'>
             Annoyed with work overtime normalization of Chinese companies' culture, I am determined to quit my job to learn English and other technologies that I am interested in. I keep learning and coding full time until I find an awesome enough company to work for. I am based in China, whose time zone is CST(UTC + 8). If you have a job that is suitable for me, you can contact me by <Link href="mailto:iam.frankqiu@gmail.com">email</Link>.
             </p> */}
          </div>

          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} 
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
