import Image from 'next/image';
import React from 'react';
import profile from '../../../public/images/profile-photo.jpg';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="p-16 h-screen">
      <h1 className="text-3xl text-left">
        안녕하세요. <br />
        <span className="text-blue-800 font-bold">프론트엔드 개발자 박소예</span>입니다.
      </h1>
      <section className="flex mb-16 mt-16 ">
        <Image src={profile} alt="해바라기 씨를 먹고 있는 햄스터 그림" width="200" className="rounded shadow-lg" />
        <div className="flex flex-col justify-between">
          <article className="ml-6">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <div className="flex mb-2">
              <p className="text-2xl font-semibold mb-">Soye Park</p>
              <div className="flex items-center ml-2">
                <a href="https://www.linkedin.com/in/soye-park-30a3ab229/" className="mr-2">
                  <AiOutlineLinkedin className="text-2xl" />
                </a>
                <a href="https://github.com/stardust6653" target="blank">
                  <FiGithub className="text-2xl" />
                </a>
              </div>
            </div>
            <a href="mailto:stardust6653@gmail.com">
              <p className="font-light">stardust6653@gmail.com</p>
            </a>
          </article>
          <p className="text-end font-semibold mb-2">Open to Work, now</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
