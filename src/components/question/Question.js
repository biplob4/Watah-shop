import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question'>
            <div>
                <h1>How React Work ?</h1>
                <p>React হচ্ছে একটি জাভাস্ক্রিপ্ট লাইব্রেরী |যেটা ওপেনসোর্স  ফ্রী লাইব্রারি,আমরা এটা ফ্রিতে ব্যবহার করতে পারি |এটা তৈরি করেছে ফেসবুকের ইঞ্জিনিয়ার Jordan walk|React মেইন উদ্দেশ্য ইউজার ইন্টারফেস তৈরি করা |আমরা যখন code করি তখন React  Dom এর পাশাপাশি ভার্চুয়াল একটি Dom বানায় | এবং দুইটার Dom এর সাথে পার্থক্য খুঁজে বের কর শুধুমাত্র যেই জায়গাটা আপডেট করা দরকার সেটা আপডেট করে *পুরাটা কে আপডেট করে না,এর জন্য আমাদের ওয়েবসাইট অনেক ফাস্ট হয়|</p>
            </div>
            <div>
                <h1>How State use and work ?</h1>
                <p>Use state একটি React এর hook|Use state ফাংশনের ভিতর ইউজ করতে হয়|ফাংশন এর ভিতরে Use state এ সবসময় ডাটা পাঠানো যায় এবং সেগুলো নিয়ে কাজ করা যায় |তাছাড়া Use state এর ডাটাগুলো  অন্য Component এ পাঠানো যায়,,এর একটা সুবিধা হল Use state এর ডাটা চেঞ্জ করা যায় |এটি মূলত React এর hook এর মাধ্যমে কাজ করে|</p>
            </div>
            <div>
                <h1>Whate is The difference between Props and state ?</h1>
                <p>আগেই বলেছি Use state একটি React এর hook |আর Props হচ্ছে একটা প্যারামিটার যেটা component এ ইউজ করতে হয় |Use state ফাংশনের ভিতর ইউজ করতে হয় কিন্তু Props প্যারামিটার আকারে রিসিভ করতে হয় |এই দুইটির মধ্যে সবচেয়ে বড় যে পার্থক্যটা সেটা হল,,state এর ডাটা চেঞ্জ করা যায় কিন্তু Props এর ডাটা চেঞ্জ করা যায় না |তাছাড়া Props কোন component ছাড়া ইউজ করা যায় না কিন্তু State Component ছাড়া ইউজ করা যায়</p>
            </div>
        </div>
        <p style={{textAlign:"center",margin:'20px',color:'grey'}}>@Copyright-MdBiplobHossen</p>
        </div>
    );
};

export default Question;