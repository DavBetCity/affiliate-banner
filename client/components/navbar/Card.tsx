import Odd from './Odd';
import Team from './Team';
import MatchInfo from './MatchInfo';
import tw, { styled } from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`grid auto-rows-min py-5 px-7 gap-3 border-gray-500 border-l-[0.1px] border-r-[0.1px] `;

const Row = tw.div`grid grid-flow-col gap-4 min-w-[15rem]`;

const MatchWrapper = tw(Row)``;

const OddsWrapper = tw(Row)``;

//######################### COMPONENT ######################################################

const Card: React.FC<Props> = () => {
  return (
    <Wrapper>
      <MatchWrapper>
        <Team name="FEY" imgurl="./tshirt-icon.png" home />
        <MatchInfo date="WO 15/5" time="21:00" />
        <Team name="FEY" imgurl="./tshirt-icon.png" home={false} />
      </MatchWrapper>
      <OddsWrapper>
        <Odd label="1" odd={15.0111} />
        <Odd label="x" odd={15.0111} />
        <Odd label="2" odd={15.1} />
      </OddsWrapper>
    </Wrapper>
  );
};

export default Card;
