import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import shareToKatalk from "../../Api/shareKakao";
import shareToTwitter from "../../Api/shareTwitter";
import {
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
const ShareModal = ({ closeShareModal }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <ShareModalDiv>
      <CloseModalBtn onClick={closeShareModal}>X</CloseModalBtn>
      <ModalSignImg src="assets/Images/sign.gif"></ModalSignImg>
      <ShareSnsDiv>
        <SnsImg src="assets/Images/kakao.png" onClick={shareToKatalk}></SnsImg>
        <TwitterShareButton url={process.env.REACT_APP_SERVER_IP_ADRESS}>
          <SnsImg src="assets/Images/twitter.png"></SnsImg>
        </TwitterShareButton>
        {/* <SnsImg
          src="assets/Images/twitter.png"
          onClick={shareToTwitter}
        ></SnsImg> */}
        <LineShareButton url={process.env.REACT_APP_SERVER_IP_ADRESS}>
          <SnsImg src="assets/Images/line.png"></SnsImg>
        </LineShareButton>
      </ShareSnsDiv>
      <CopyToClipboard
        className="Toram"
        text={process.env.REACT_APP_SERVER_IP_ADRESS}
        onCopy={() => alert("클립보드에 복사되었습니다.")}
      >
        <CopyImg src="assets/Images/copy.png"></CopyImg>
      </CopyToClipboard>
    </ShareModalDiv>
  );
};
// const MetaTag = () => {
//   return (
//     <Helmet>
//       <meta name="twitter:title" content="사이버 점집 KUROSA_2023" />
//       <meta name="twitter:description" content="cyber fortune teller" />
//       <meta name="twitter:card" content="https://ifh.cc/g/cvd79x.jpg" />
//       <meta
//         name="twitter:url"
//         content={process.env.REACT_APP_SERVER_IP_ADRESS}
//       />
//       <meta name="twitter:image" content="https://ifh.cc/g/cvd79x.jpg" />
//     </Helmet>
//   );
// };
const ShareModalDiv = styled.div`
  width: 366px;
  height: 530px;
  margin: 20px 0 0 0;
  margin: 0 auto;

  background-image: url("assets/Images/shareback.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseModalBtn = styled.button`
  witdh: 100px;
  height: 80px;
  color: white;
  border: none;
  background: none;
  text-algin: right;
  font-size: 1.5rem;
  align-self: flex-end;
  margin-right: 30px;
`;

const ModalSignImg = styled.img`
  max-width: 85%;
`;

const ShareSnsDiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0 30px 0;
`;
const SnsImg = styled.img`
  width: 70px;
  height: 50px;
  &:hover {
    cursor: Pointer;
  }
`;

const CopyImg = styled.img`
  max-width: 100%;
`;
export default ShareModal;
