
function Video() {
  return (
    <div className=" flex flex-col text-white p-8">
      <h1 className="text-2xl font-bold text-orange-400 mb-8 text-center">Investment Videos</h1>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
     
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <video
            controls
            className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="mt-4 text-[2rem] text-gray-300 font-semibold">Hindi</span>
        </div>

      
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <video
            controls
            className="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="mt-4 text-[2rem] text-gray-300 font-semibold">English</span>
        </div>
      </div>
    </div>
  );
}

export default Video;
