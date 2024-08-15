import React from "react";
import ProjectCard from "../project/ProjectCard";

const Project = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-y-[80px]">
      <ProjectCard
        title="Crownfunding website"
        desc="Website huy động vốn online, bạn có thể đăng dự án cá nhân của mình và cộng đồng có thể hỗ trợ bằng cách donate cho bạn."
      ></ProjectCard>
      <ProjectCard
        title="Movie website"
        desc="Xây dựng trang web xem phim với các tính năng hấp dẫn."
      ></ProjectCard>
    </div>
  );
};

export default Project;
