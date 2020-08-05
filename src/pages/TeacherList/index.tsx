import React from 'react'

import Header from '../../components/PageHeader'
import {
  Container,
  Form,
  InputBlock,
  Main,
} from './styles'

import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <Container>
      <Header title="Estes são os proffys disponíveis.">
        <Form>
          <InputBlock>
            <label htmlFor="subject">
              Matérias
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="subject">
              Dia da semana
            </label>
            <input
              type="text"
              name="week-day"
              id="week-day"
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="subject">Hora</label>
            <input
              type="text"
              name="time"
              id="time"
            />
          </InputBlock>
        </Form>
      </Header>
      <Main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </Main>
    </Container>
  )
}

export default TeacherList
