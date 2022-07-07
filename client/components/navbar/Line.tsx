import tw, { styled } from 'twin.macro';

//######################### COMPONENT TYPES ################################################
type Props = {};

//######################### COMPONENT STYLES ###############################################
const Wrapper = tw.div`m-40 bg-red-200 w-72 h-44 overflow-hidden`;
const Box = tw.div`border-white ml-[3.25rem] mb-20 w-0 h-96 border-2 origin-center rotate-45`;

//######################### COMPONENT ######################################################

const Team: React.FC<Props> = () => {
  return <Wrapper></Wrapper>;
};

export default Team;
