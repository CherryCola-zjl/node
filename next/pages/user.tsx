import Head from 'next/head'
import png from '@/public/1700192348594.jpg'
import Image from 'next/image'
export default function User() {
  return (
    <>
     <Head>
      <title>用户</title>
     </Head>
      <Image alt='' src={png} width={100} height={100} />
      <div>123</div>
      <style jsx>
        {`
        div {
          width: 50%;
          margin: 100px auto;
          background: #fff;
          padding: 10px;  
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        `}
      </style>
    </>
  )
}
