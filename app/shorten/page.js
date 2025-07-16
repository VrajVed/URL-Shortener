"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const Shorten = () => {

    const [url, setUrl] = useState("");
    const [shortUrl, setshortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {

        const myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl
        })

        const requestOptions = {
            method: "POST",
            body: raw,
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setUrl("");
                setshortUrl("");
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
                console.log(result);
                alert(result.message);
            
            })
            .catch((error) => console.error(error));
    }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl '>Generate your Short URLs</h1>
        <div className='flex flex-col gap-2'>

            <input 
             name={url}
             className="px-4 py-2 bg-white focus:outline-purple-600 rounded-md"
             type='text'
             placeholder='Enter your URL' 
             onChange={(e) => setUrl(e.target.value)}
            />

            <input
             name={shortUrl}
             className="px-4 py-2 bg-white focus:outline-purple-600 rounded-md"
             type='text'
             placeholder='Enter your preferred short URL'
             onChange={(e) => setshortUrl(e.target.value)}
            />

            <button onClick={generate} className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font text-white my-3'>
                Generate
            </button>
        </div>
        {generated && <>
              <span>Your Personal BitLink:</span> <code><Link target="_blank" href={generated}>{generated}</Link>
              </code></>}
    </div>
  )
}

export default Shorten