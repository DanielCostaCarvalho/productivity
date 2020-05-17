import React, { useState } from 'react';
import styled from 'styled-components';
import { AddBox } from '@styled-icons/material-rounded';

import ModalAdd from './ModalAdd';

const BoxTop = () => {
  const [isModalAdd, setIsModalAdd] = useState(false);

  const toggleModalAdd = () => {
    setIsModalAdd(!isModalAdd);
  };

  return (
    <Wrapper>
      <Title>Página inicial</Title>
      <ButtonAdd onClick={toggleModalAdd}>
        Criar
        <AddBoxIcon />
      </ButtonAdd>

      <ModalAdd isOpen={isModalAdd} toggleModal={toggleModalAdd} />
    </Wrapper>
  );
};

export default BoxTop;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) => props.theme.titleBox};
  height: 60px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: calc(100% - 330px);
  z-index: 10;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.text};
`;

const ButtonAdd = styled.button`
  border-radius: 2px;
  border: none;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.buttonBoxTop};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const AddBoxIcon = styled(AddBox)`
  color: ${(props) => props.theme.text};
  margin-left: 4px;
  width: 24px;
`;
