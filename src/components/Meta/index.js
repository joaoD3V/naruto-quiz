import Head from 'next/head';
import db from '../../../db.json';

export default function Meta(){
  return (
    <div>
      <Head>
        <title>{db.title}</title>  
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={db.title}/>
        <meta name="description" content={db.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naruto-quiz.joaod3v.vercel.app/" />
        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />
        <meta property="og:image" content={db.bg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://naruto-quiz.joaod3v.vercel.app/" />
        <meta property="twitter:title" content={db.title} />
        <meta property="twitter:description" content={db.description} />
        <meta property="twitter:image" content={db.bg} />
      </Head>      
    </div>
  )
}