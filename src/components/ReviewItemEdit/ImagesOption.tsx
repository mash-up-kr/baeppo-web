import React, { FC, useState } from "react";
import styled from "styled-components";

import useFileInput from "./useFileInput";

interface ImagesOptionProps {
  id?: number;
}

const ImagesOption: FC<ImagesOptionProps> = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const handleFileSelect = useFileInput(
    (file) => {
      if (!file.type.startsWith("image/")) {
        return;
      }

      setImages([...images, file]);
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        setImageUrls([...imageUrls, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    },
    { accept: "image/*", multiple: false },
  );

  const handleImageRemove = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>사진등록</Title>
        <SubTitle>최대5장까지 업로드가능합니다</SubTitle>
      </TitleWrapper>
      <ImageWrapper>
        <FlexWrapper>
          {images.length < 5 && (
            <ImageAddButton onClick={handleFileSelect}>
              +
            </ImageAddButton>
          )}
          {imageUrls.map((url, index) => (
            <Thumbnail key={index} src={url} onClick={() => handleImageRemove(index)} />
          ))}
        </FlexWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ImagesOption;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  margin-top: 3px;
`;

const TitleWrapper = styled.div`

`;

const Title = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-size: 15px;
  color: #777777;
  margin-left: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  padding: 10px 0;
  overflow-x: scroll;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const ImageAddButton = styled.button`
  width: 117px;
  height: 84px;
  font-size: 25px;
  border-radius: 8px;
  color: #C6C6C6;
  background-color: #F5F5F5;
  outline: none;
  border: 1px solid #D8D8D8;
`;

const Thumbnail = styled.img`
  width: 117px;
  height: 84px;
  border-radius: 8px;
  border: 1px solid #D8D8D8;
  margin-right: 10px;

  &:hover {
    filter: brightness(60%);
  }
`;
