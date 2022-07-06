import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {
  date: string;
  time: string;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex flex-col justify-center items-center`;
const Date = tw.h1`font-black tracking-tighter text-xs`;
const Timing = tw.h1`font-black`;

//######################### COMPONENT ######################################################

const MatchInfo: React.FC<Props> = ({ date, time }) => {
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Timing>{time}</Timing>
    </Wrapper>
  );
};

export default MatchInfo;
