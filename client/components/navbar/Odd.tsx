import Link from 'next/link';
import { useRouter } from 'next/router';
import tw, { styled } from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {
  odd?: number;
  url: string;
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

const Odd: React.FC<Props> = ({ odd, label, url }) => {
  const router = useRouter();
  const handleRedirect = (e: any) => {
    e.preventDefault();

    if (url !== '') {
      router.push(url);
    }
  };

  return (
    <Link href={url}>
      <Wrapper onClick={handleRedirect}>
        {odd ? <ShadowLight /> : <Shadow />}
        {label && <Label>{label}</Label>}
        {odd && <Stake>{odd.toFixed(2)}</Stake>}
      </Wrapper>
    </Link>
  );
};

export default Odd;
