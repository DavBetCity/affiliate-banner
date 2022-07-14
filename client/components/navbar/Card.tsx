import Odd from './Odd';
import Team from './Team';
import tw from 'twin.macro';
import MatchInfo from './MatchInfo';

//######################### COMPONENT TYPES ################################################
type Props = {
  home: any;
  draw: any;
  away: any;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`relative grid auto-rows-min py-3 px-10 gap-3 border-gray-500`;

const Shadow = tw.div`z-0 absolute w-full h-full skew-x-[-12deg] border-opacity-20 border-l-[1px] border-r-[1px]`;
const Row = tw.div`z-10 grid grid-flow-col gap-4 min-w-[15rem]`;

const MatchWrapper = tw(Row)``;

const OddsWrapper = tw(Row)``;

//######################### COMPONENT ######################################################

const Card: React.FC<Props> = ({ home, draw, away }) => {
  return (
    <Wrapper>
      <Shadow />
      <MatchWrapper>
        <Team name="FEY" imgurl="./tshirt-icon.png" home />
        <MatchInfo date="WO 15/5" time="21:00" />
        <Team name="FEY" imgurl="./tshirt-icon.png" home={false} />
      </MatchWrapper>
      <OddsWrapper>
        <Odd label={home.label} odd={home.score} url={home.url} />
        <Odd label={draw.label} odd={draw.score} url={draw.url} />
        <Odd label={away.label} odd={away.score} url={away.url} />
      </OddsWrapper>
    </Wrapper>
  );
};

export default Card;
