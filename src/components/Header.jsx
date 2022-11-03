import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { COLOR_PALETTE, FONT_SIZE } from "@/styles/constants";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ title, hasBack = false }) => {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      {hasBack && (
        <BackButton onClick={handleClickBack}>
          <BiArrowBack />
        </BackButton>
      )}
      {title}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid ${COLOR_PALETTE.BLACK};
  padding: 16px;
  font-size: ${FONT_SIZE.LARGE};
  font-weight: 600;
  text-align: center;
`;

const BackButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 54px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;