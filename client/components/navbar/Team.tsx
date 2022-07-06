import tw from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {
  name: string;
  home: boolean;
  imgurl: string;
};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`flex justify-center items-center gap-2`;
const Title = tw.h1`font-black tracking-tighter`;
const Thumbnail = tw.img`h-8 w-8`;

//######################### COMPONENT ######################################################

const Team: React.FC<Props> = ({ name, imgurl, home }) => {
  return (
    <Wrapper>
      {home ? (
        <>
          <Title>{name}</Title>
          <Thumbnail src={imgurl} alt={`${name} logo`} />
        </>
      ) : (
        <>
          <Thumbnail src={imgurl} alt={`${name} logo`} />
          <Title>{name}</Title>
        </>
      )}
    </Wrapper>
  );
};

export default Team;
