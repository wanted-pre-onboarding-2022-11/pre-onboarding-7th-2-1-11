import React, { useEffect } from "react";
import styled from "styled-components";
import Category from "../components/Category";
import CarHeader from "../components/CarHeader";
import CarList from "../components/CarList";
import { useCarInfo, useCarInfoActions } from "../context/CarProvider";

const CarMain = () => {
  const { carInfo, isLoading } = useCarInfo();

  const { getAllCar, setAllCar } = useCarInfoActions();

  useEffect(() => {
    getAllCar();
  }, [getAllCar]);

  return (
    <S.CarContainer>
      <CarHeader />
      <Category setAllCar={setAllCar} />
      <CarList carInfo={carInfo} isLoading={isLoading} />
    </S.CarContainer>
  );
};

export default CarMain;

const S = {
  CarContainer: styled.div``,
};
