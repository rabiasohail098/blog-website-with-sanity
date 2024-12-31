import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div  className=" ">
<h1 className='text-5xl text-center font-bold text-orange-200 text-outline   hover:underline'>About Us</h1>

    
        <h2 className='text-4xl font-bold underline text-yellow-200 text-center my-4 text-outline'>Welcome to Tech Blogs – Your Gateway to Technology!</h2>
        <p className='text-xl md:px-32 px-8 py-4 text-green-200 text-outline'>At Tech Blogs, we&#39;re passionate about simplifying the complex world of technology. Our mission is to empower readers with knowledge, insights, and resources to navigate the ever-evolving tech landscape. Whether you&#39;re a curious beginner or a seasoned tech enthusiast, this is the place for you!</p>
        <br />
        <hr />
        <ul>
            <h2 className='text-4xl font-bold text-yellow-200 text-center underline my-8 text-outline'>What We Offer</h2>
        <li className='text-xl md:px-32 px-8 py-4 text-green-200 text-outline'><span className='text-2xl font-semibold'>In-Depth Tutorials: </span>Learn new skills with step-by-step guides tailored to your needs</li>
        <li className='text-xl md:px-32 px-8 py-4 text-green-200 text-outline'><span className='text-2xl font-semibold'>Latest Trends: </span>Stay updated with cutting-edge advancements and tech innovations.
        </li>
        <li className='text-xl md:px-32 px-8 py-4 text-green-200 text-outline'><span className='text-2xl font-semibold'>Product Reviews: </span>Get honest insights into the latest gadgets, software, and tools</li>
        <li className='text-xl md:px-32 px-8 py-4 text-green-200 text-outline'><span className='text-2xl font-semibold'>Career Advice:</span> Tips and resources to help you thrive in the tech industry.</li>
        </ul>
        <br />
        <hr />
<h2 className='text-4xl underline font-bold text-yellow-200 text-center my-8  text-outline'>Meet the Creator</h2>
        <div className='flex flex-col my-8 md:flex-row justify-center md:px-24 px-8 gap-6'>
        <div className='md:w-1/2 w-full '>
        <Image src="/me.png" alt="mission" width="300" height="300" className="rounded-lg  border-2 border-white w-[400px] h-[250px]"/>
    </div>
        <div className='md:w-1/2 w-full mt-16'> 
   
        <p className='text-xl text-justify text-green-200 text-outline'>Hi, I&#39;m <i>Rabia Sohail</i>, a tech enthusiast and lifelong learner. I created Tech Blogs to share my love for technology and help others grow. My goal is to provide a friendly and inclusive space where anyone can learn and explore tech with ease.</p>
    </div>
    
</div>
<br />
<hr />
<h2 className='text-4xl underline font-bold text-yellow-200 text-center my-8  text-outline'>Our Vision</h2>
        <div className='flex my-8 flex-col md:flex-row justify-center md:px-24 px-8 gap-6'>
        
        <div className='md:w-1/2 w-full mt-12'> 
   
        <p className='text-xl text-justify text-green-200 text-outline'>Our mission is to provide the best quality content to our readers. We aim to provide the latest trends, tutorials, and insights from the world of technology. Whether you&#39;re a beginner or a pro, there's something here for everyone passionate about tech innovation.</p>
    </div>
    <div className='md:w-1/2 w-full md:px-16 px-8'>
        <Image src="/vi.png" alt="mission" width="300" height="300" className="rounded-lg  border-2 border-white w-[400px] h-[250px]"/>
    </div>
</div>
<br />
<hr />

<h2 className='text-4xl underline font-bold text-yellow-200 text-center my-8  text-outline'>Our Mission</h2>
        <div className='flex flex-col my-8 md:flex-row justify-center md:px-24 px-8 gap-6'>
        <div className='md:w-1/2 w-full md:px-16 px-8'>
        <Image src="/mis.png" alt="mission" width="300" height="300" className="rounded-lg  border-2 border-white w-[400px] h-[250px]"/>
    </div>
        <div className='md:w-1/2 w-full mt-12'> 
   
        <p className='text-xl text-justify text-green-200 text-outline'>Our mission is to provide the best quality content to our readers. We aim to provide the latest trends, tutorials, and insights from the world of technology. Whether you&#39;re a beginner or a pro, there&#39;s something here for everyone passionate about tech innovation.</p>
    </div>
   
</div>
<br />
<hr />
<h2 className='text-4xl underline font-bold text-yellow-200 text-center my-8  text-outline'>Get in Touch</h2>
      
   
        <p className='text-xl text-center text-green-200 text-outline'>Have a question or feedback? We&#39;d love to hear from you! Feel free to reach out to us at <a href="rabiasohail1209@gmail.com" className="text-blue-500 underline">contact@techblogs.com</a>.</p>
     <br />
     <br />
   
    </div>
  )
}

export default page