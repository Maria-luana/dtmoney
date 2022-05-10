import { Container } from "./style";

// Importando Imagens
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { retinaImage } from 'polished';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
             acc.deposits += transaction.amount;
             acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
 
    console.log(transactions);

    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <figure>
                        <img src={incomeImg} alt="Entradas" />
                    </figure>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <figure>
                        <img src={outcomeImg} alt="Saídas" />
                    </figure>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(summary.withdraws)}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <figure>
                        <img src={totalImg} alt="Total" />
                    </figure>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}