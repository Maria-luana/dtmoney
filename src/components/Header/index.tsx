import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps{
    onOpenNewTransactionModal: () => void; 
}
export function Header({onOpenNewTransactionModal}: HeaderProps){
    return(
        <Container>
            <Content>
                <figure>
                    <img src={logoImg} alt="dt money" />
                </figure>

                <button type='button' onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
                
            </Content>
        </Container>
    )
}