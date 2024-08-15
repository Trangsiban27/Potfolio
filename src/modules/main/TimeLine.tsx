import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const timeline: {
  value: string;
  year: string;
  title: string;
  content: string;
}[] = [
  {
    value: "1",
    year: "2021",
    title: "Khởi đầu hành trình mới",
    content:
      "Năm 2021, mình đậu đại học Ngoại Ngữ và Tin Học thành phố Hồ Chí Minh và từ đó một hành trình mới bắt đầu khi 1 đứa con nhà quê cắp sách lên thành phố theo đuổi ước mơ",
  },
  {
    value: "2",
    year: "2024",
    title: "Hoàn thành chương trình đại học",
    content:
      "Hiện tại mình đang là sinh viên năm cuối và đang trong kỳ thực tập. GPA của mình đang là 3.3 / 4.0",
  },
];

const TimeLine = () => {
  return (
    <Tabs
      defaultValue="1"
      className="flex items-start w-full h-full max-h-[500px]"
    >
      <TabsList className="flex flex-col items-start justify-start bg-transparent gap-y-[60px] mr-[100px]">
        {timeline.map((trigger) => (
          <div className="relative flex items-center gap-x-5">
            <span className="text-2xl font-semibold">{trigger.year}</span>
            <div className="w-[2px] h-[100px] top-[16px] right-[16px] bg-white absolute line"></div>
            <div className="z-10 flex items-center justify-center p-2 bg-gray-800 rounded-full">
              <TabsTrigger
                value={trigger.value}
                className="p-2 bg-gray-300 rounded-full data-[state=active]:bg-cyan-500"
              ></TabsTrigger>
            </div>
          </div>
        ))}
      </TabsList>
      <div className="flex flex-col items-start w-full show">
        {timeline.map((content) => (
          <TabsContent
            value={content.value}
            className="w-full max-w-[60%] p-10 bg-gray-800 rounded-lg max-h-[300px]"
          >
            <h1 className="mb-4 text-2xl font-semibold text-white">
              {content.title}
            </h1>
            {content.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default TimeLine;
