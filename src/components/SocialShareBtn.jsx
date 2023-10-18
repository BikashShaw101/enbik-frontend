import React from "react";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaWhatsappSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const SocialShareBtn = ({ url, title }) => {
  return (
    <div className="w-full flex justify-between">
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.facebook.com/dialog/share?app_id=1517579648979203&display=popup&href=${url}`}
      >
        <FaFacebookSquare className="w-8 h-auto text-[#3b5998]" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.twitter.com/intent/tweet?url=${url}`}
      >
        <FaTwitterSquare className="w-8 h-auto text-[#4ea6ff]" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
      >
        <FaRedditSquare className="w-8 h-auto text-[#ff4a3d] " />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={`https://api.whatsapp.com/send/?text=${url}`}
      >
        <FaWhatsappSquare className="w-8 h-auto text-[#48cf4b] " />
      </a>
    </div>
  );
};

export default SocialShareBtn;
