import FacebookIcon from "@/assets/icon/FacebookIcon";
import GithubIcon from "@/assets/icon/GithubIcon";
import ButtonPrimary from "@/components/ButtonPrimary";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Introduce = () => {
  return (
    <div className="relative flex items-center justify-start w-full h-full pb-10">
      <div className="flex flex-col items-start justify-center w-1/2 h-full text-start">
        <p className="mb-6 text-2xl font-bold text-white">Chào bạn, mình là</p>
        <div className="text-[60px] text-white font-bold m-0 line leading-none mb-6">
          <h1 className="text-[80px] bg-gradient-to-r from-cyan-500 to-[#4a49c6] text-transparent bg-clip-text">
            Bân<span className="text-white">,</span>
          </h1>
          <h1>Frontend</h1>
          <h1>Developer</h1>
        </div>
        <p className="mb-8 font-mono text-lg text-gray-300">
          <Typewriter
            words={[
              "Mình là sinh viên năm cuối của trường đại học Ngoại Ngữ - Tin Học thành phố Hồ Chí Minh và đang làm Frontend developer. Mình thích code và thích học hỏi những thứ mới. Mong mọi người giúp đỡ thêm...",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={30}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </p>
        <div className="flex items-center mb-10 gap-x-8">
          <ButtonPrimary
            to="https://www.facebook.com/profile.php?id=100080235291188"
            className="transition border-2 hover:duration-[5000] border-cyan-300 text-cyan-300 hover:shadow-custom hover:bg-cyan-300 hover:text-black"
          >
            Liên hệ mình
          </ButtonPrimary>
          <ButtonPrimary
            to="/main"
            className="transition duration-[5000] border-2 border-cyan-300 text-cyan-300 hover:shadow-custom hover:bg-cyan-300 hover:text-black"
          >
            Xem thêm về mình
          </ButtonPrimary>
        </div>
        <div className="flex items-center font-semibold text-gray-400 gap-x-10">
          <p>Mạng xã hội: </p>
          <div className="flex items-center gap-5 ">
            <Link
              to="https://github.com/Trangsiban27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <GithubIcon></GithubIcon>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100080235291188"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FacebookIcon></FacebookIcon>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-[-100px] left-[-120px] bg-[#4a49c6] w-[200px] h-[200px] rounded-full blur-[150px]"></div>
    </div>
  );
};

export default Introduce;
