import Card from './Card';
import tw, { styled } from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = styled.div`
  grid-template-rows: 1fr auto;
  ${tw`grid  min-h-[8rem] bg-betcity-dark text-white`};
`;

const Cards = tw.div`grid grid-flow-col justify-center auto-cols-[21%] overflow-x-auto overscroll-contain`;
const Disclaimer = tw.div`flex justify-center items-center py-1 text-xs font-bold`;
const Logo = tw.img`px-4 max-h-4`;
//######################### COMPONENT ######################################################

const Banner: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
      <Disclaimer>
        Wat kost gokken jou? Stop op tijd. 18+
        <Logo src="./betcity-small.png" alt="Betcity Logo" />
      </Disclaimer>
    </Wrapper>
  );
};

export default Banner;