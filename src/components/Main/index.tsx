import * as S from './styles'

const Main = ({ title = 'Test title', description = 'Test description' }) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
