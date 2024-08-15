import ButtonPrimary from "@/components/ButtonPrimary";
import React, { useEffect } from "react";
import Skill from "./Skill";
import TimeLine from "./TimeLine";
import Project from "./Project";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="w-full text-start">
      <div className="flex items-center gap-x-3">
        <h1 className="text-[40px] font-bold text-white">Tổng quan</h1>
      </div>
      <div className="my-6 w-full max-w-[65%] font-mono font-normal text-gray-300 gap-y-6 flex flex-col pb-10">
        <p className="mb-2" data-aos="fade-right">
          - Xin chào mọi người.
        </p>
        <p data-aos="fade-right">
          Họ tên đầy đủ của mình là Trang Sĩ Bân 21 tuổi. Mình là sinh viên của
          trường đại học Ngoại ngữ và Tin học thành phố Hồ Chí Minh (HUFLIT)
          khoa Công Nghệ Thông Tin khóa K27 năm 2021.
        </p>
        <p data-aos="fade-right">
          Mình học chuyên ngành công nghệ phần mềm. Với sự đam mê công nghệ và
          thích thú làm việc với giao diện nên mình đã chọn theo con đường
          Frontend Developer.
        </p>
        <p data-aos="fade-right">
          Kinh nghiệm làm việc của mình chủ yếu là ở trường, khi tham gia các dự
          án lớn và nhỏ cho các đề tài môn học ở trường tôi cũng đã học được khá
          nhiều kiến thức bổ ích cho ngành mình đang theo đuổi. GPA của mình
          đang là 3.3/4.
        </p>
        <p data-aos="fade-right">
          Với sự đam mê và ham học hỏi, mình tin rằng với mỗi dự án mà mình làm
          mình luôn đặt cái tâm của mình vào trong nó. Để đạt được những thành
          công mình sẽ luôn không ngừng nổ lực và học hỏi.
        </p>
        <p data-aos="fade-right">
          Nếu bạn cảm thấy hứng thú với mình, hãy liên lạc với mình ngay nhé!
        </p>
        <ButtonPrimary
          to="https://www.facebook.com/profile.php?id=100080235291188"
          className="max-w-fit text-base transition border-2 hover:duration-[5000] border-cyan-300 text-cyan-300 hover:shadow-custom hover:bg-cyan-300 hover:text-black"
        >
          Liên hệ mình qua Facebook
        </ButtonPrimary>
        <p>
          Hoặc qua địa chỉ mail:{" "}
          <span className="text-lg underline">trangsibanwork@gmail.com</span>
        </p>
      </div>
      <div className="absolute left-0 right-0 py-8 bg-black px-[110px] max-h-[530px]">
        <div className="flex flex-col items-start max-w-[85%] py-10">
          <h1 className="text-[40px] font-bold text-white mb-10">
            Skills của mình
          </h1>
          <Skill></Skill>
        </div>
      </div>
      <div className="mt-[580px] w-full max-w-[100%] font-normal text-gray-300 gap-y-6 flex flex-col py-10">
        <h1 className="text-[40px] font-bold text-white pb-10">Timeline</h1>
        <TimeLine></TimeLine>
      </div>
      <div className="w-full max-w-[100%] font-normal text-gray-300 gap-y-6 flex flex-col py-[80px]">
        <h1 className="text-[40px] font-bold text-white pb-10">
          Dự án của mình
        </h1>
        <Project></Project>
      </div>

      <footer className="absolute left-0 right-0 flex items-center justify-center w-full py-10 bg-black ">
        <img src="./src/assets/2.svg" alt="" className="object-cover h-full" />
      </footer>
    </div>
  );
};

export default About;
