import React from "react";

const AvatarComponent = () => {
  return (
    <div className="contain flex gap-5 w-fit  overflow-y-scroll scroll-smooth scrollbar-hide">
      <div className=" h-[52px] w-[52px]" id="slider">
        <img
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt=""
          className=" h-full w-full rounded-full  object-cover"
        />
      </div>
      <div className=" h-[52px] w-[52px]">
        <img
          src="https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className=" h-full w-full rounded-full  object-cover"
        />
      </div>
      <div className=" h-[52px] w-[52px]">
        <img
          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className=" h-full w-full rounded-full  object-cover"
        />
      </div>

      <div className=" h-[52px] w-[52px]">
        <img
          src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className=" h-full w-full rounded-full  object-cover"
        />
      </div>
    </div>
  );
};

export default AvatarComponent;
