import tw, { styled } from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {
  odd?: number;
  label?: string;
};

//######################### COMPONENT STYLES ###############################################
// text-white opacity-50 hover:(opacity-50 bg-gray-300)
const Size = tw.div`w-full min-w-[3rem] h-5 p-1 rounded-md text-xs`;
const Wrapper = styled(Size)`
  ${tw`flex justify-evenly items-center`}
  ${tw`relative font-bold `}
`;
const Shadow = tw(Size)`absolute bg-gray-50 opacity-5`;
const ShadowLight = tw(Shadow)`cursor-pointer  opacity-10 hover:(opacity-50)`;

const Label = tw.span`text-betcity-light`;
const Stake = tw.span``;

//######################### COMPONENT ######################################################

const Odd: React.FC<Props> = ({ odd, label }) => {
  return (
    <Wrapper>
      {odd ? <ShadowLight /> : <Shadow />}
      {label && <Label>{label}</Label>}
      {odd && <Stake>{odd.toFixed(2)}</Stake>}
    </Wrapper>
  );
};

export default Odd;
