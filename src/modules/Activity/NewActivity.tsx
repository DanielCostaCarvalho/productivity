import React, { useState } from 'react';
import styled from 'styled-components';
import { KeyboardDateTimePicker } from '@material-ui/pickers';

const NewActivity = () => {
  const [initialDate, setInitialDate] = useState<Date | null>(new Date());
  const [finalDate, setFinalDate] = useState<Date | null>(new Date());

  return (
    <Wrapper>
      <DivTop>
        <Title>Atividade</Title>
      </DivTop>
      <Form>
        <Label>Nome</Label>
        <Input />
        <Label>Data inicial</Label>
        <KeyboardDateTimePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="dd/MM/yyyy HH:mm"
          value={initialDate}
          InputAdornmentProps={{ position: 'end' }}
          onChange={setInitialDate}
          style={{ width: 240, marginBottom: 14 }}
        />
        <Label>Data final</Label>
        <KeyboardDateTimePicker
          autoOk
          variant="inline"
          inputVariant="outlined"
          format="dd/MM/yyyy HH:mm"
          value={finalDate}
          InputAdornmentProps={{ position: 'end' }}
          onChange={setFinalDate}
          style={{ width: 240, marginBottom: 14 }}
        />
      </Form>
      <ButtonAdd>Adicionar</ButtonAdd>
    </Wrapper>
  );
};

export default NewActivity;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DivTop = styled.div`
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  width: 60%;
  margin-top: 60px;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.text};
  font-size: 22px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.text};
  margin-bottom: 6px;
  font-size: 14px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.border};
  padding: 8px;
  height: 40px;
  margin-bottom: 14px;
  font-size: 18px;
  border-radius: 4px;

  &:focus {
    border-color: ${(props) => props.theme.text};
  }
`;

const ButtonAdd = styled.button`
  align-self: flex-end;
  margin-right: 10px;
  border-radius: 2px;
  height: 42px;
  width: 160px;
  border: none;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.text};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;