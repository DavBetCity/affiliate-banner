import tw from 'twin.macro';
import MatchInfo from './MatchInfo';
import Team from './Team';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`grid grid-flow-col auto-rows-min bg-betcity-dim gap-4 min-w-[15rem]`;

//######################### COMPONENT ######################################################

const Card: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Team name="FEY" imgurl="./tshirt-icon.png" home />
      <MatchInfo date="WO 15/5" time="21:00" />
      <Team name="FEY" imgurl="./tshirt-icon.png" home={false} />
    </Wrapper>
  );
};

export default Card;
